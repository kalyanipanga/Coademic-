import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface Drop {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [drops, setDrops] = useState<Drop[]>([]);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Fast spring for the main dot
  const dotSpringConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  // Slower spring for the outer ring (creates the trailing effect)
  const ringSpringConfig = { damping: 30, stiffness: 200, mass: 1 };
  const ringX = useSpring(cursorX, ringSpringConfig);
  const ringY = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      
      // Create a new drop at the current cursor position
      const newDrop = { id: Date.now(), x: e.clientX, y: e.clientY };
      setDrops(prev => [...prev, newDrop]);
      
      // Remove the drop after the animation completes
      setTimeout(() => {
        setDrops(prev => prev.filter(d => d.id !== newDrop.id));
      }, 600);
    };
    
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Ripple Drops */}
      {drops.map(drop => (
        <motion.div
          key={drop.id}
          className="fixed top-0 left-0 w-4 h-4 border-2 border-brand-red rounded-full pointer-events-none z-[9997]"
          style={{
            x: drop.x,
            y: drop.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}

      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-red rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.5 : (isHovering ? 0 : 1),
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border border-brand-red rounded-full pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : (isHovering ? 1.3 : 1),
          backgroundColor: isHovering ? "rgba(192, 0, 0, 0.1)" : "transparent",
          borderColor: isHovering ? "rgba(192, 0, 0, 0.3)" : "rgba(192, 0, 0, 0.8)",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Inner glow when hovering */}
        <motion.div 
          className="w-full h-full rounded-full bg-brand-red blur-md"
          animate={{
            opacity: isHovering ? 0.2 : 0,
            scale: isHovering ? 1 : 0.5
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}
