import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronRight, ArrowLeft, Search, 
  Star, ExternalLink, Download,
  CheckCircle2, Clock, Users, BookOpen,
  Briefcase, Code, BarChart3, FileText,
  Layout, Globe, Cpu, Terminal, Brain,
  Link as LinkIcon, Database, Leaf, Bolt,
  GitBranch, Network, Bot, Layers, Plug,
  Type, History
} from "lucide-react";
import { 
  INTERVIEW_KIT_CATEGORIES, 
  COMPANIES_DATA, 
  TECH_DATA, 
  ROADMAPS_DATA,
  COMPANY_QUESTIONS,
  TECH_QUESTIONS,
  ROADMAP_STEPS,
  ATS_TIPS_DATA,
  UNIVERSAL_QUESTIONS
} from "../../data/interviewKitData";

export default function InterviewKit() {
  const [view, setView] = useState<"hub" | "companies" | "tech" | "roadmaps" | "aptitude" | "softskills" | "universal">("hub");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [detailSearchQuery, setDetailSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [selectedBankCategory, setSelectedBankCategory] = useState<string>("All");
  const [completedQuestions, setCompletedQuestions] = useState<string[]>([]);

  // Scroll to top when view or selectedItem changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view, selectedItem]);

  const industries = ["All", "IT Services", "Product-based", "Fintech", "E-commerce"];
  const bankCategories = ["All", "DSA", "SQL", "PYTHON", "JAVA", "JAVASCRIPT", "OS", "HR"];

  // Load progress on mount
  useState(() => {
    const saved = localStorage.getItem("interview_kit_progress");
    if (saved) {
      setCompletedQuestions(JSON.parse(saved));
    }
  });

  const toggleQuestion = (id: string) => {
    const newCompleted = completedQuestions.includes(id)
      ? completedQuestions.filter(q => q !== id)
      : [...completedQuestions, id];
    
    setCompletedQuestions(newCompleted);
    localStorage.setItem("interview_kit_progress", JSON.stringify(newCompleted));
  };

  const renderHub = () => {
    const filteredCategories = INTERVIEW_KIT_CATEGORIES.filter(cat => 
      cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-4xl font-display font-bold text-slate-900">What are you preparing for?</h2>
          <p className="text-slate-500">Search for a category or browse our curated collections below.</p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search categories (e.g. DSA, Python, HR)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-100 focus:border-brand-red outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ y: -5 }}
              onClick={() => {
                setView(cat.id as any);
                setSelectedItem(null);
                setSearchQuery("");
                setSelectedIndustry("All");
              }}
              className="luxury-card p-8 text-left group relative overflow-hidden"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <cat.icon size={28} />
              </motion.div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{cat.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Explore curated resources and questions for {cat.name.toLowerCase()}.
              </p>
              <div className="absolute bottom-4 right-4 text-slate-300 group-hover:text-brand-red transition-colors">
                <ChevronRight size={24} />
              </div>
            </motion.button>
          ))}
        </div>
        {filteredCategories.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400">No categories found matching "{searchQuery}"</p>
            <button onClick={() => setSearchQuery("")} className="mt-4 text-brand-red font-bold hover:underline">Clear search</button>
          </div>
        )}
      </div>
    );
  };

  const renderCompanyList = () => {
    const filtered = COMPANIES_DATA.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIndustry = selectedIndustry === "All" || c.industry === selectedIndustry;
      return matchesSearch && matchesIndustry;
    });

    return (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <button onClick={() => setView("hub")} className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors shrink-0">
            <ArrowLeft size={18} /> Back to Hub
          </button>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto flex-1 max-w-2xl">
            <div className="flex gap-2 w-full">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search companies..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:border-brand-red outline-none transition-all"
                />
              </div>
              <button className="px-6 py-2 bg-brand-red text-white rounded-xl font-bold hover:bg-brand-red/90 transition-all shadow-md whitespace-nowrap">
                Search
              </button>
            </div>
            
            <select 
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full sm:w-48 px-4 py-2 rounded-xl border border-slate-200 focus:border-brand-red outline-none transition-all bg-white text-slate-600 font-medium"
            >
              {industries.map(ind => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {industries.map(ind => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedIndustry === ind 
                ? "bg-brand-red text-white shadow-red-glow" 
                : "bg-white text-slate-500 border border-slate-200 hover:border-brand-red/30"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(company => (
            <button
              key={company.id}
              onClick={() => setSelectedItem(company)}
              className="luxury-card p-5 flex items-center justify-between group hover:border-brand-red/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-brand-red/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all overflow-hidden"
                >
                  {company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="w-full h-full object-contain p-2 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                      style={{ 
                        filter: 'invert(12%) sepia(95%) saturate(7476%) hue-rotate(358deg) brightness(96%) contrast(108%)' 
                      }}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.filter = 'none';
                        target.src = `https://ui-avatars.com/api/?name=${company.name}&background=F21B1B&color=fff`;
                      }}
                    />
                  ) : (
                    <Briefcase size={20} />
                  )}
                </motion.div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-900">{company.name}</h4>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-slate-400">{company.questionsCount} Questions</p>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <p className="text-[10px] font-bold text-brand-red/60 uppercase tracking-wider">{company.industry}</p>
                  </div>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:text-brand-red transition-all" />
            </button>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400">No companies found matching your criteria.</p>
          </div>
        )}
      </div>
    );
  };

  const renderCompanyDetail = () => {
    const questions = COMPANY_QUESTIONS[selectedItem.id as keyof typeof COMPANY_QUESTIONS] || [];
    
    let currentCategory = "DSA";
    const questionsWithIndex = questions.map((q: any, index: number) => {
      if (q.category) currentCategory = q.category;
      return { ...q, originalIndex: index, derivedCategory: currentCategory };
    });
    
    const filteredQuestions = questionsWithIndex.filter(q => {
      const matchesSearch = q.q.toLowerCase().includes(detailSearchQuery.toLowerCase()) || 
                           q.a.toLowerCase().includes(detailSearchQuery.toLowerCase());
      const matchesCategory = selectedItem.id !== "bank" || 
                             selectedBankCategory === "All" || 
                             q.derivedCategory === selectedBankCategory;
      return matchesSearch && matchesCategory;
    });

    return (
      <div className="space-y-6">
        <button onClick={() => { setSelectedItem(null); setDetailSearchQuery(""); setSelectedBankCategory("All"); }} className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors">
          <ArrowLeft size={18} /> Back to {view === "companies" ? "Companies" : "Tech"}
        </button>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-brand-red flex items-center justify-center text-white shadow-lg overflow-hidden">
            {selectedItem.logo ? (
              <img 
                src={selectedItem.logo} 
                alt={selectedItem.name} 
                className="w-full h-full object-contain p-3 brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            ) : (
              <Briefcase size={32} />
            )}
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-900">{selectedItem.name} Interview Questions</h2>
            <p className="text-slate-500">Master the most frequently asked questions at {selectedItem.name}.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex gap-2 flex-1">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search questions..." 
                value={detailSearchQuery}
                onChange={(e) => setDetailSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:border-brand-red outline-none transition-all"
              />
            </div>
            <button className="px-6 py-2 bg-brand-red text-white rounded-xl font-bold hover:bg-brand-red/90 transition-all shadow-md whitespace-nowrap">
              Search
            </button>
          </div>
          
          {selectedItem.id === "bank" && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-500 whitespace-nowrap">Filter by Tech:</span>
              <select 
                value={selectedBankCategory}
                onChange={(e) => setSelectedBankCategory(e.target.value)}
                className="px-4 py-2 rounded-xl border border-slate-200 focus:border-brand-red outline-none bg-white text-sm font-medium text-slate-700 cursor-pointer"
              >
                {bankCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {filteredQuestions.length > 0 ? filteredQuestions.map((q, i) => {
            const questionId = `company-${selectedItem.id}-${q.originalIndex}`;
            const isCompleted = completedQuestions.includes(questionId);
            return (
              <div key={q.originalIndex} className={`luxury-card p-6 relative overflow-hidden group transition-all ${isCompleted ? "bg-brand-red/5 border-brand-red/20" : ""}`}>
                <div className={`absolute top-0 left-0 w-full h-1.5 transition-opacity ${isCompleted ? "bg-brand-red opacity-100" : "bg-brand-red opacity-20 group-hover:opacity-100"}`} />
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex gap-3 flex-1">
                    <span className={`font-bold text-brand-red`}>{q.originalIndex + 1}.</span>
                    <h4 className="font-bold text-slate-900">{q.q}</h4>
                  </div>
                  <button 
                    onClick={() => toggleQuestion(questionId)}
                    className={`shrink-0 p-2 rounded-full transition-all ${isCompleted ? "bg-brand-red text-white shadow-red-glow" : "bg-slate-100 text-slate-400 hover:bg-brand-red/10 hover:text-brand-red"}`}
                    title={isCompleted ? "Mark as incomplete" : "Mark as completed"}
                  >
                    <motion.div
                      initial={false}
                      animate={isCompleted ? { scale: [1, 1.2, 1], rotate: [0, 360] } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <CheckCircle2 size={20} />
                    </motion.div>
                  </button>
                </div>
                <div className="p-4 bg-white rounded-xl text-slate-600 leading-relaxed border border-slate-100 ml-8 whitespace-pre-wrap">
                  {q.a}
                </div>
              </div>
            );
          }) : (
            <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
              <p className="text-slate-400">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderTechList = () => {
    const filtered = TECH_DATA.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <button onClick={() => setView("hub")} className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors">
            <ArrowLeft size={18} /> Back to Hub
          </button>
          <div className="flex gap-2 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search technologies..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:border-brand-red outline-none transition-all"
              />
            </div>
            <button className="px-6 py-2 bg-brand-red text-white rounded-xl font-bold hover:bg-brand-red/90 transition-all shadow-md whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map(tech => (
            <button
              key={tech.id}
              onClick={() => setSelectedItem(tech)}
              className="luxury-card p-6 flex flex-col items-center text-center group hover:border-brand-red/30 transition-all"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl bg-brand-red/5 flex items-center justify-center text-brand-red mb-4 group-hover:bg-brand-red group-hover:text-white transition-all overflow-hidden"
              >
                {tech.logo ? (
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className="w-full h-full object-contain p-3 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    style={{ 
                      filter: 'invert(12%) sepia(95%) saturate(7476%) hue-rotate(358deg) brightness(96%) contrast(108%)' 
                    }}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <tech.icon size={32} />
                )}
              </motion.div>
              <h4 className="font-bold text-slate-900 mb-1">{tech.name}</h4>
              <p className="text-xs text-slate-400">{tech.questionsCount} Questions</p>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderTechDetail = () => {
    const questions = TECH_QUESTIONS[selectedItem.id as keyof typeof TECH_QUESTIONS] || [];
    return (
      <div className="space-y-6">
        <button onClick={() => setSelectedItem(null)} className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors">
          <ArrowLeft size={18} /> Back to Technologies
        </button>
        <div className="flex items-center gap-4 mb-8">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-brand-red shadow-lg overflow-hidden"
          >
            {selectedItem.logo ? (
              <img 
                src={selectedItem.logo} 
                alt={selectedItem.name} 
                className="w-full h-full object-contain p-3"
                style={{ 
                  filter: 'invert(12%) sepia(95%) saturate(7476%) hue-rotate(358deg) brightness(96%) contrast(108%)' 
                }}
                referrerPolicy="no-referrer"
              />
            ) : (
              <selectedItem.icon size={32} />
            )}
          </motion.div>
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-900">{selectedItem.name} Interview Questions</h2>
            <p className="text-slate-500">Master core concepts and advanced topics in {selectedItem.name}.</p>
          </div>
        </div>
        <div className="space-y-4">
          {questions.length > 0 ? questions.map((q, i) => {
            const questionId = `tech-${selectedItem.id}-${i}`;
            const isCompleted = completedQuestions.includes(questionId);
            return (
              <div key={i} className={`luxury-card p-6 relative overflow-hidden group transition-all ${isCompleted ? "bg-brand-red/5 border-brand-red/20" : ""}`}>
                <div className={`absolute top-0 left-0 w-full h-1.5 transition-opacity ${isCompleted ? "bg-brand-red opacity-100" : "bg-brand-red opacity-20 group-hover:opacity-100"}`} />
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex gap-3 flex-1">
                    <span className={`font-bold text-brand-red`}>{i + 1}.</span>
                    <h4 className="font-bold text-slate-900">{q.q}</h4>
                  </div>
                  <button 
                    onClick={() => toggleQuestion(questionId)}
                    className={`shrink-0 p-2 rounded-full transition-all ${isCompleted ? "bg-brand-red text-white shadow-red-glow" : "bg-slate-100 text-slate-400 hover:bg-brand-red/10 hover:text-brand-red"}`}
                    title={isCompleted ? "Mark as incomplete" : "Mark as completed"}
                  >
                    <motion.div
                      initial={false}
                      animate={isCompleted ? { scale: [1, 1.2, 1], rotate: [0, 360] } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <CheckCircle2 size={20} />
                    </motion.div>
                  </button>
                </div>
                <div className="p-4 bg-white rounded-xl text-slate-600 leading-relaxed border border-slate-100 ml-8 whitespace-pre-wrap">
                  {q.a}
                </div>
              </div>
            );
          }) : (
            <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
              <p className="text-slate-400">Questions for {selectedItem.name} are coming soon!</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderRoadmapList = () => (
    <div className="space-y-6">
      <button onClick={() => setView("hub")} className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors">
        <ArrowLeft size={18} /> Back to Hub
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ROADMAPS_DATA.map(roadmap => (
          <div key={roadmap.id} className="luxury-card p-6 group hover:border-brand-red/30 transition-all">
            <div className="flex justify-between items-start mb-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red"
              >
                <Layout size={24} />
              </motion.div>
              <span className="px-3 py-1 bg-brand-red/5 rounded-full text-[10px] font-bold text-brand-red uppercase tracking-wider">Roadmap</span>
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">{roadmap.name}</h4>
            <p className="text-slate-500 text-sm mb-6">{roadmap.description}</p>
            <button 
              onClick={() => setSelectedItem(roadmap)}
              className="w-full btn-primary py-2 text-sm flex items-center justify-center gap-2"
            >
              View Path <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRoadmapDetail = () => {
    const steps = ROADMAP_STEPS[selectedItem.id as keyof typeof ROADMAP_STEPS] || [];
    return (
      <div className="space-y-6">
        <button onClick={() => setSelectedItem(null)} className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors">
          <ArrowLeft size={18} /> Back to Roadmaps
        </button>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">{selectedItem.name} Roadmap</h2>
          <p className="text-slate-600">{selectedItem.description}</p>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-brand-red/20" />
          <div className="space-y-12">
            {steps.length > 0 ? steps.map((step, i) => (
              <div key={i} className="relative pl-20">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 top-0 w-16 h-16 rounded-full bg-white border-4 border-brand-red flex items-center justify-center text-brand-red font-bold text-xl shadow-lg z-10"
                >
                  {i + 1}
                </motion.div>
                <div className="luxury-card p-0 overflow-hidden">
                  <div className="bg-brand-red px-6 py-4">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <div className="p-6 bg-white">
                    <ul className="space-y-3">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-600">
                          <CheckCircle2 size={18} className="text-brand-red shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )) : (
              <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400">Roadmap steps for {selectedItem.name} are coming soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderAptitude = () => (
    <div className="space-y-6">
      <button onClick={() => setView("hub")} className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors">
        <ArrowLeft size={18} /> Back to Hub
      </button>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Aptitude Training</h2>
        <p className="text-slate-600">Build logic, speed, and confidence for placements & technical exams.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Quantitative Aptitude", items: ["Percentages", "Profit & Loss", "Time & Work", "Time, Speed & Distance"] },
          { title: "Logical Reasoning", items: ["Number Series", "Blood Relations", "Direction Sense", "Puzzles"] },
          { title: "Verbal Ability", items: ["Reading Comprehension", "Synonyms & Antonyms", "Sentence Correction", "Error Spotting"] },
          { title: "Placement Focus", items: ["Company-wise Questions", "Shortcut Techniques", "Mock Tests", "Time Management"] }
        ].map((topic, i) => (
          <div key={i} className="luxury-card p-8 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">{topic.title}</h3>
            <ul className="space-y-3 mb-8">
              {topic.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3 text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-red" /> {item}
                </li>
              ))}
            </ul>
            <button className="btn-secondary w-full py-2 text-brand-red border-brand-red/20 hover:bg-brand-red/5">Start Learning</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSoftSkills = () => (
    <div className="space-y-6">
      <button onClick={() => setView("hub")} className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors">
        <ArrowLeft size={18} /> Back to Hub
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Communication Skills", "Interview Skills", "Group Discussion", "Confidence Building", "Body Language"].map((skill, i) => (
          <button key={i} className="luxury-card p-8 text-center group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red" />
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red mx-auto mb-6 group-hover:scale-110 transition-transform"
            >
              <Users size={32} />
            </motion.div>
            <h3 className="text-lg font-bold text-slate-900">{skill}</h3>
          </button>
        ))}
      </div>
    </div>
  );

  const renderUniversal = () => (
    <div className="space-y-6">
      <button onClick={() => setView("hub")} className="flex items-center gap-2 text-slate-500 hover:text-brand-red transition-colors">
        <ArrowLeft size={18} /> Back to Hub
      </button>
      <div className="flex items-center gap-4 mb-8">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-2xl bg-brand-red flex items-center justify-center text-white shadow-lg"
        >
          <Globe size={32} />
        </motion.div>
        <div>
          <h2 className="text-3xl font-display font-bold text-slate-900">Universal Interview Questions</h2>
          <p className="text-slate-500">100+ essential questions for any IT interview.</p>
        </div>
      </div>
      <div className="space-y-4">
        {UNIVERSAL_QUESTIONS.map((q, i) => {
          const questionId = `universal-${i}`;
          const isCompleted = completedQuestions.includes(questionId);
          return (
            <div key={i} className={`luxury-card p-6 relative overflow-hidden group transition-all ${isCompleted ? "bg-brand-red/5 border-brand-red/20" : ""}`}>
              <div className={`absolute top-0 left-0 w-full h-1.5 transition-opacity ${isCompleted ? "bg-brand-red opacity-100" : "bg-brand-red opacity-20 group-hover:opacity-100"}`} />
              <div className="flex justify-between items-start gap-4 mb-3">
                <div className="flex gap-3 flex-1">
                  <span className={`font-bold ${isCompleted ? "text-brand-red" : "text-slate-400"}`}>{i + 1}.</span>
                  <h4 className="font-bold text-slate-900">{q.q}</h4>
                </div>
                <button 
                  onClick={() => toggleQuestion(questionId)}
                  className={`shrink-0 p-2 rounded-full transition-all ${isCompleted ? "bg-brand-red text-white shadow-red-glow" : "bg-slate-100 text-slate-400 hover:bg-brand-red/10 hover:text-brand-red"}`}
                  title={isCompleted ? "Mark as incomplete" : "Mark as completed"}
                >
                  <motion.div
                    initial={false}
                    animate={isCompleted ? { scale: [1, 1.2, 1], rotate: [0, 360] } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <CheckCircle2 size={20} />
                  </motion.div>
                </button>
              </div>
              <div className="p-4 bg-white rounded-xl text-slate-600 leading-relaxed border border-slate-100 ml-8 whitespace-pre-wrap">
                {q.a}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <header>
        <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Interview Kit</h1>
        <p className="text-slate-600">All the resources you need to crack your next big interview.</p>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={view + (selectedItem?.id || "")}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {view === "hub" && renderHub()}
          {view === "companies" && (selectedItem ? renderCompanyDetail() : renderCompanyList())}
          {view === "tech" && (selectedItem ? renderTechDetail() : renderTechList())}
          {view === "roadmaps" && (selectedItem ? renderRoadmapDetail() : renderRoadmapList())}
          {view === "aptitude" && renderAptitude()}
          {view === "softskills" && renderSoftSkills()}
          {view === "universal" && renderUniversal()}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
