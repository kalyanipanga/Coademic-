import { useState, useEffect, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { 
  Play, Send, Save, Terminal, ChevronRight, 
  RotateCcw, Sun, Moon, Search, Filter,
  List, BookOpen, CheckCircle2, AlertCircle, Trash2,
  Code, Copy
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DSA_QUESTIONS, DSAQuestion } from "../data/dsaQuestions";
import { executeCode } from "../services/piston";
import { COMMON_SNIPPETS } from "../data/codeSnippets";

interface ConsoleLine {
  type: "stdout" | "stderr" | "info" | "success" | "error";
  content: string;
}

export default function IDE() {
  const loadSessionState = () => {
    try {
      const saved = localStorage.getItem("ide_session_state");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  };

  const sessionState = loadSessionState();
  const initialQuestion = sessionState?.selectedQuestionId 
    ? DSA_QUESTIONS.find(q => q.id === sessionState.selectedQuestionId) || DSA_QUESTIONS[0]
    : DSA_QUESTIONS[0];
  const initialLanguage = sessionState?.language || "python";

  const [selectedQuestion, setSelectedQuestion] = useState<DSAQuestion>(initialQuestion);
  const [code, setCode] = useState(() => {
    const savedCode = localStorage.getItem(`ide_code_${initialQuestion.id}_${initialLanguage}`);
    return savedCode || initialQuestion.starterCode[initialLanguage as keyof typeof initialQuestion.starterCode];
  });
  const [consoleOutput, setConsoleOutput] = useState<ConsoleLine[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [language, setLanguage] = useState<"python" | "java" | "cpp">(initialLanguage);
  const [theme, setTheme] = useState<"light" | "vs-dark">(sessionState?.theme || "light");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showQuestionList, setShowQuestionList] = useState(sessionState?.showQuestionList ?? true);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [showSnippets, setShowSnippets] = useState(false);

  const [customInput, setCustomInput] = useState(sessionState?.customInput || "");
  const [showCustomInput, setShowCustomInput] = useState(sessionState?.showCustomInput ?? false);
  const [showRestoreToast, setShowRestoreToast] = useState(!!sessionState);

  const isInitialMount = useRef(true);

  // Save session state whenever it changes
  useEffect(() => {
    const stateToSave = {
      selectedQuestionId: selectedQuestion.id,
      language,
      theme,
      showQuestionList,
      showCustomInput,
      customInput
    };
    localStorage.setItem("ide_session_state", JSON.stringify(stateToSave));
  }, [selectedQuestion.id, language, theme, showQuestionList, showCustomInput, customInput]);

  useEffect(() => {
    if (showRestoreToast) {
      const timer = setTimeout(() => setShowRestoreToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showRestoreToast]);

  const [completedQuestions, setCompletedQuestions] = useState<string[]>(() => {
    const saved = localStorage.getItem("ide_completed_questions");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleCompletion = (questionId: string) => {
    setCompletedQuestions(prev => {
      const newCompleted = prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId];
      localStorage.setItem("ide_completed_questions", JSON.stringify(newCompleted));
      return newCompleted;
    });
  };

  const completedCount = completedQuestions.length;
  const totalQuestions = DSA_QUESTIONS.length;
  const progressPercentage = Math.round((completedCount / totalQuestions) * 100);

  const categories = ["All", ...DSA_QUESTIONS.map(q => q.category).filter((v, i, a) => a.indexOf(v) === i)];

  const filteredQuestions = DSA_QUESTIONS.filter(q => {
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    const storageKey = `ide_code_${selectedQuestion.id}_${language}`;
    const savedCode = localStorage.getItem(storageKey);
    if (savedCode) {
      setCode(savedCode);
    } else {
      setCode(selectedQuestion.starterCode[language]);
    }
    setConsoleOutput([]); // Clear console on question change
    setCustomInput(""); // Clear custom input on question change
  }, [selectedQuestion, language]);

  const handleManualSave = () => {
    setSaveStatus("saving");
    localStorage.setItem(`ide_code_${selectedQuestion.id}_${language}`, code);
    setTimeout(() => setSaveStatus("saved"), 500);
    setTimeout(() => setSaveStatus("idle"), 2000);
  };

  const insertSnippet = (snippetCode: string) => {
    setCode(snippetCode);
    setShowSnippets(false);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setConsoleOutput([{ type: "info", content: "Running code..." }]);

    try {
      const result = await executeCode(language, code, customInput);
      
      const newOutput: ConsoleLine[] = [];
      
      if (result.compile && result.compile.code !== 0) {
        newOutput.push({ type: "error", content: "Compilation Error:" });
        newOutput.push({ type: "stderr", content: result.compile.stderr || result.compile.stdout });
      } else {
        if (result.run.stdout) {
          newOutput.push({ type: "stdout", content: result.run.stdout });
        }
        if (result.run.stderr) {
          newOutput.push({ type: "stderr", content: result.run.stderr });
        }
        if (!result.run.stdout && !result.run.stderr) {
           newOutput.push({ type: "info", content: "Program finished with no output." });
           if (language === "python" && code.includes("def ")) {
             newOutput.push({ type: "info", content: "Tip: Did you forget to call your function?" });
           }
        }
      }
      
      setConsoleOutput(newOutput);
    } catch (error: any) {
      setConsoleOutput([{ type: "error", content: `Execution failed: ${error.message}` }]);
    } finally {
      setIsRunning(false);
    }
  };

  const clearConsole = () => {
    setConsoleOutput([]);
  };

  const getExtensions = () => {
    switch (language) {
      case "python": return [python()];
      case "java": return [java()];
      case "cpp": return [cpp()];
      default: return [];
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col bg-slate-50 overflow-hidden">
      {/* Session Restored Toast */}
      <AnimatePresence>
        {showRestoreToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-3 border border-white/10"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 size={14} />
            </div>
            Session restored successfully
          </motion.div>
        )}
      </AnimatePresence>

      {/* IDE Header */}
      <div className="h-20 border-b border-slate-200 flex items-center justify-between px-8 bg-white shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center text-white shadow-lg shadow-brand-red/20">
              <Code size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900 leading-none mb-1">Coding IDE</h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">v2.4.0 Premium</p>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200" />

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowQuestionList(!showQuestionList)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                showQuestionList 
                  ? "bg-slate-900 text-white shadow-lg" 
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              }`}
            >
              <List size={16} />
              {showQuestionList ? "Hide Problems" : "Show Problems"}
            </button>
            
            <button 
              onClick={() => setShowSnippets(!showSnippets)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                showSnippets 
                  ? "bg-slate-900 text-white shadow-lg" 
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100"
              }`}
            >
              <Terminal size={16} />
              Snippets
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl border border-slate-200">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="bg-transparent px-3 py-1.5 text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="python">Python 3.10</option>
              <option value="java">Java 17 LTS</option>
              <option value="cpp">C++ 20</option>
            </select>
          </div>

          <button 
            onClick={() => setTheme(theme === "light" ? "vs-dark" : "light")}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition-all"
            title={theme === "light" ? "Dark Mode" : "Light Mode"}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <div className="h-8 w-px bg-slate-200" />

          <button 
            onClick={handleRun}
            disabled={isRunning}
            className="bg-brand-red text-white px-8 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-brand-red/20 hover:bg-brand-red/90 transition-all active:scale-95 disabled:opacity-50"
          >
            {isRunning ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Play size={16} fill="currentColor" />
            )}
            Run Code
          </button>
          
          <button className="bg-slate-900 text-white px-8 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-200">
            <Send size={16} /> Submit
          </button>
        </div>
      </div>

      {/* Snippets Modal */}
      <AnimatePresence>
        {showSnippets && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-16 left-20 z-50 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Code size={16} className="text-brand-red" /> Code Snippets
              </h3>
              <button onClick={() => setShowSnippets(false)} className="text-slate-400 hover:text-slate-600">
                <Trash2 size={14} className="rotate-45" />
              </button>
            </div>
            <div className="max-h-96 overflow-y-auto p-2 space-y-1">
              {COMMON_SNIPPETS.map(snippet => (
                <button
                  key={snippet.id}
                  onClick={() => insertSnippet(snippet.code[language])}
                  className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-all group border border-transparent hover:border-slate-100"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-slate-700">{snippet.title}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 uppercase">
                      {snippet.category}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-2 font-mono mt-1 opacity-70 group-hover:opacity-100">
                    {snippet.code[language].slice(0, 60)}...
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex overflow-hidden">
        {/* Question List Sidebar */}
        <AnimatePresence>
          {showQuestionList && (
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 320, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="border-r border-slate-100 flex flex-col bg-white shrink-0"
            >
              <div className="p-4 border-b border-slate-100 space-y-3">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text"
                    placeholder="Search problems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-brand-red"
                  />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-all ${
                        selectedCategory === cat ? "bg-brand-red text-white" : "bg-white text-slate-500 border border-slate-200 hover:border-brand-red/30"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                
                {/* Progress Bar */}
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Progress</span>
                    <span className="text-[10px] font-bold text-slate-700">{completedCount}/{totalQuestions} ({progressPercentage}%)</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-emerald-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {filteredQuestions.map(q => (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQuestion(q)}
                    className={`w-full text-left p-3 rounded-lg transition-all group ${
                      selectedQuestion.id === q.id ? "bg-brand-red text-white shadow-md" : "hover:bg-white text-slate-600"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold truncate pr-2 flex items-center gap-2">
                        {completedQuestions.includes(q.id) && <CheckCircle2 size={12} className="text-emerald-500" />}
                        {q.title}
                      </span>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded uppercase ${
                        q.difficulty === "Easy" ? (selectedQuestion.id === q.id ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-600") :
                        q.difficulty === "Medium" ? (selectedQuestion.id === q.id ? "bg-white/20 text-white" : "bg-orange-100 text-orange-600") :
                        (selectedQuestion.id === q.id ? "bg-white/20 text-white" : "bg-red-100 text-red-600")
                      }`}>
                        {q.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] opacity-60">
                      <BookOpen size={10} />
                      <span>{q.category}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Problem Statement */}
        <div className="w-1/3 border-r border-slate-100 p-8 overflow-y-auto bg-white shrink-0">
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
              selectedQuestion.difficulty === "Easy" ? "bg-emerald-500/10 text-emerald-600" :
              selectedQuestion.difficulty === "Medium" ? "bg-orange-500/10 text-orange-600" :
              "bg-red-500/10 text-red-600"
            }`}>
              {selectedQuestion.difficulty}
            </span>
            <span className="text-slate-400 text-xs">ID: {selectedQuestion.id}</span>
            <span className="text-slate-400 text-xs ml-auto">{selectedQuestion.category}</span>
          </div>
          
          {selectedQuestion.companies && selectedQuestion.companies.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {selectedQuestion.companies.map(company => (
                <span key={company} className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-medium border border-slate-200">
                  {company}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-between items-center mb-6">
             <h2 className="text-2xl font-display font-bold text-slate-900">{selectedQuestion.title}</h2>
             <button
               onClick={() => toggleCompletion(selectedQuestion.id)}
               className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                 completedQuestions.includes(selectedQuestion.id)
                   ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                   : "bg-slate-100 text-slate-500 border border-slate-200 hover:bg-slate-200"
               }`}
             >
               <CheckCircle2 size={14} className={completedQuestions.includes(selectedQuestion.id) ? "fill-emerald-500 text-white" : ""} />
               {completedQuestions.includes(selectedQuestion.id) ? "Completed" : "Mark as Done"}
             </button>
          </div>
          <div className="prose text-slate-600 text-sm leading-relaxed space-y-4">
            <p>{selectedQuestion.description}</p>
            
            <div className="bg-white p-4 rounded-xl border border-slate-100 mt-8">
              <span className="text-xs font-bold text-slate-900 block mb-2 uppercase tracking-wider">Example:</span>
              <div className="space-y-2">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Input</p>
                  <pre className="text-xs font-mono text-slate-700 bg-white p-2 rounded border border-slate-100">{selectedQuestion.example.input}</pre>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Output</p>
                  <pre className="text-xs font-mono text-slate-700 bg-white p-2 rounded border border-slate-100">{selectedQuestion.example.output}</pre>
                </div>
                {selectedQuestion.example.explanation && (
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Explanation</p>
                    <p className="text-xs text-slate-600 italic">{selectedQuestion.example.explanation}</p>
                  </div>
                )}
              </div>
            </div>

            {selectedQuestion.explanation && (
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4">
                <span className="text-xs font-bold text-blue-900 block mb-2 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen size={14} /> Detailed Explanation
                </span>
                <p className="text-xs text-blue-800 leading-relaxed">{selectedQuestion.explanation}</p>
              </div>
            )}

          </div>
        </div>

        {/* Editor & Console */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 relative overflow-hidden flex flex-col">
            <div className="flex-1 relative overflow-hidden">
              <CodeMirror
                value={code}
                height="100%"
                theme={theme === "vs-dark" ? vscodeDark : "light"}
                extensions={getExtensions()}
                onChange={(value) => {
                  setCode(value);
                  localStorage.setItem(`ide_code_${selectedQuestion.id}_${language}`, value);
                }}
                className="h-full text-sm"
              />
            </div>
            
            {/* Custom Input Toggle */}
            <div className="border-t border-slate-100 bg-white px-4 py-2 flex items-center gap-2">
               <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer select-none">
                 <input 
                   type="checkbox" 
                   checked={showCustomInput}
                   onChange={(e) => setShowCustomInput(e.target.checked)}
                   className="rounded border-slate-300 text-brand-red focus:ring-brand-red"
                 />
                 Custom Input
               </label>
            </div>

            {/* Custom Input Area */}
            {showCustomInput && (
              <div className="h-32 border-t border-slate-100 bg-slate-50 p-4 shrink-0 flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Stdin (Input)</span>
                <textarea
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  className="flex-1 w-full bg-white border border-slate-200 rounded-lg p-2 text-xs font-mono text-slate-700 resize-none focus:outline-none focus:border-brand-red"
                  placeholder="Enter your custom input here..."
                />
              </div>
            )}
          </div>
          
          {/* Console */}
          <div className="h-48 border-t border-slate-100 bg-white flex flex-col shrink-0">
            <div className="h-10 border-b border-slate-100 flex items-center justify-between px-6 bg-white">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-brand-red" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Output Console</span>
              </div>
              <button 
                onClick={clearConsole}
                className="text-slate-400 hover:text-brand-red transition-colors"
                title="Clear Console"
              >
                <Trash2 size={14} />
              </button>
            </div>
            <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-1">
              {consoleOutput.length > 0 ? (
                consoleOutput.map((line, index) => (
                  <div 
                    key={index} 
                    className={`whitespace-pre-wrap ${
                      line.type === "stderr" || line.type === "error" ? "text-red-500" :
                      line.type === "success" ? "text-emerald-600" :
                      line.type === "info" ? "text-blue-500 italic" :
                      "text-slate-600"
                    }`}
                  >
                    {line.content}
                  </div>
                ))
              ) : (
                <span className="text-slate-400 italic">Run your code to see the output here...</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
