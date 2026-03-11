import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global mocks for built-in APIs that can throw "Illegal constructor" in some iframe environments
if (typeof window !== 'undefined') {
  // ResizeObserver
  try {
    if (window.ResizeObserver) {
      new window.ResizeObserver(() => {});
    } else {
      throw new Error("Missing");
    }
  } catch (e) {
    window.ResizeObserver = class ResizeObserver {
      constructor(callback: any) {}
      observe(target: any) {}
      unobserve(target: any) {}
      disconnect() {}
    } as any;
  }

  // IntersectionObserver
  try {
    if (window.IntersectionObserver) {
      new window.IntersectionObserver(() => {});
    } else {
      throw new Error("Missing");
    }
  } catch (e) {
    window.IntersectionObserver = class IntersectionObserver {
      constructor(callback: any) {}
      observe(target: any) {}
      unobserve(target: any) {}
      disconnect() {}
      takeRecords() { return []; }
    } as any;
  }

  // SpeechSynthesisUtterance
  try {
    if (window.SpeechSynthesisUtterance) {
      new window.SpeechSynthesisUtterance("test");
    } else {
      throw new Error("Missing");
    }
  } catch (e) {
    (window as any).SpeechSynthesisUtterance = class SpeechSynthesisUtterance {
      text: string = "";
      rate: number = 1;
      pitch: number = 1;
      volume: number = 1;
      lang: string = "";
      voice: any = null;
      onend: any = null;
      onstart: any = null;
      onerror: any = null;
      constructor(text?: string) {
        this.text = text || "";
      }
    } as any;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
