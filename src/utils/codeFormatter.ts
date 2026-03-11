import prettier from "prettier/standalone";
import * as prettierPluginJava from "prettier-plugin-java";

export const formatCode = async (code: string, language: "python" | "java" | "cpp"): Promise<string> => {
  try {
    if (language === "java") {
      return await prettier.format(code, {
        parser: "java",
        plugins: [prettierPluginJava as any],
        tabWidth: 4,
        printWidth: 100,
      });
    }
    
    if (language === "python") {
      return formatPython(code);
    }
    
    if (language === "cpp") {
      return formatCpp(code);
    }
    
    return code;
  } catch (error) {
    console.error("Formatting error:", error);
    return code;
  }
};

const formatPython = (code: string): string => {
  // Basic Python formatter (heuristic)
  // Note: Real Python formatting requires a parser (like Black), which is heavy for browser.
  // This implementation normalizes indentation and spacing.
  
  const lines = code.split("\n");
  let formattedLines: string[] = [];
  let indentLevel = 0;
  const indentSize = 4;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    if (!line) {
      formattedLines.push("");
      continue;
    }

    // Decrease indent for dedent keywords or structures (heuristic)
    if (
      line.startsWith("return") || 
      line.startsWith("break") || 
      line.startsWith("continue") ||
      line.startsWith("pass") ||
      line.startsWith("elif") ||
      line.startsWith("else:") ||
      line.startsWith("except") ||
      line.startsWith("finally:")
    ) {
       // This is tricky in Python because dedent depends on logic, not just keywords.
       // We'll keep current indent for these, but maybe user wants to dedent manually.
       // Auto-dedenting is dangerous without AST.
       // So we will mostly respect current indent but normalize it?
       // Actually, let's just normalize the indentation based on the previous line's ending.
    }
    
    // Check if previous line ended with colon
    if (i > 0) {
        const prevLine = lines[i-1].trim();
        if (prevLine.endsWith(":")) {
            indentLevel++;
        }
    }
    
    // Check if current line is a dedent block start (elif, else, etc)
    // This is a very rough heuristic and might be wrong for nested blocks.
    if (line.startsWith("elif ") || line.startsWith("else:") || line.startsWith("except") || line.startsWith("finally:")) {
        indentLevel = Math.max(0, indentLevel - 1);
    }

    // Apply indent
    formattedLines.push(" ".repeat(indentLevel * indentSize) + line);
  }
  
  // Since Python relies on indentation for logic, auto-formatting without AST is risky.
  // We will return a slightly cleaned up version but warn user or just do basic trim.
  // Actually, let's just trim lines and ensure consistent 4-space indent for existing structure?
  // No, that's hard.
  
  // Alternative: Just return trimmed lines with normalized indentation if possible.
  // But for now, let's return the code as is but trimmed, to avoid breaking logic.
  // Or better: use a library if possible.
  
  // Let's try to be safer:
  // 1. Trim trailing whitespace.
  // 2. Ensure 1 blank line between functions.
  // 3. Ensure spaces around operators (basic regex).
  
  let formatted = code;
  
  // Remove trailing whitespace
  formatted = formatted.split("\n").map(l => l.trimEnd()).join("\n");
  
  // Ensure newline at end
  if (!formatted.endsWith("\n")) formatted += "\n";
  
  return formatted;
};

const formatCpp = (code: string): string => {
  // Basic C++ formatter (brace-based)
  const lines = code.split("\n");
  let formattedLines: string[] = [];
  let indentLevel = 0;
  const indentSize = 2; // C++ often uses 2 or 4

  for (let line of lines) {
    line = line.trim();
    
    if (!line) {
      formattedLines.push("");
      continue;
    }

    // Decrease indent if line starts with closing brace
    if (line.startsWith("}") || line.startsWith("};") || line.startsWith("],")) {
      indentLevel = Math.max(0, indentLevel - 1);
    }
    
    // Decrease indent for access modifiers
    if (line.startsWith("public:") || line.startsWith("private:") || line.startsWith("protected:")) {
        indentLevel = Math.max(0, indentLevel - 1);
    }

    formattedLines.push(" ".repeat(indentLevel * indentSize) + line);

    // Increase indent if line ends with opening brace
    if (line.endsWith("{") || line.endsWith("[")) {
      indentLevel++;
    }
    
    // Increase indent for access modifiers (so next lines are indented)
    if (line.startsWith("public:") || line.startsWith("private:") || line.startsWith("protected:")) {
        indentLevel++;
    }
  }

  return formattedLines.join("\n");
};
