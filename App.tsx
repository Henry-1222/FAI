import React, { useState } from 'react';
import { Language, ViewState, User, TEXTS } from './types.ts';
import Header from './components/Header.tsx';
import Background from './components/Background.tsx';
import Home from './views/Home.tsx';
import ProductList from './views/ProductList.tsx';
import Gen1App from './views/Gen1App.tsx';
import Gen1Marketing from './views/Gen1Marketing.tsx';
import SiliconSimulator from './views/SiliconSimulator.tsx';
import MotherboardSimulator from './views/MotherboardSimulator.tsx';
import ClubProducts from './views/ClubProducts.tsx';
import { ArrowLeft, Hourglass, Send, Settings, Sparkles, Zap, Battery, AlertTriangle, Cpu, CheckCircle, XCircle } from 'lucide-react';
import { generateIrrelevantResponse } from './services/geminiService.ts';
import BackButton from './components/BackButton.tsx';

// Helper for formatting time (re-declared here since it was inline in index.html previously, 
// but in a real app should be in utils. Keeping it clean within Gen2App scope or importing)
const formatTimeDisplay = (ms: number) => {
  if (ms < 1000) return `${ms}ms`;
  const seconds = ms / 1000;
  if (seconds < 60) return `${seconds.toFixed(1)}s`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${minutes.toFixed(1)}m`;
  const hours = minutes / 60;
  if (hours < 24) return `${hours.toFixed(1)}h`;
  const days = hours / 24;
  if (days < 365) return `${days.toFixed(1)} days`;
  const years = days / 365;
  return `${years.toFixed(2)} years`;
};

const MODELS = [
  "GPT-4o",
  "Claude 3.5 Sonnet",
  "Gemini 1.5 Pro",
  "Llama 3 70B",
  "Mistral Large",
  "FAI Chaos Engine"
];

const Gen2App: React.FC<{ language: Language, onBack: () => void }> = ({ language, onBack }) => {
  const t = TEXTS[language];
  
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(MODELS[5]);
  const [thinkingTime, setThinkingTime] = useState(5000); 
  const [showSettings, setShowSettings] = useState(false);
  const [tempThinkingTime, setTempThinkingTime] = useState(5000);

  const handleTitleDoubleClick = () => {
    setTempThinkingTime(thinkingTime);
    setShowSettings(true);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');
    
    // Cap waiting time to 24 days (max 32-bit int) for safety
    const waitTime = Math.min(thinkingTime, 2147483647); 
    await new Promise(resolve => setTimeout(resolve, waitTime));

    const result = await generateIrrelevantResponse(input);
    
    let i = 0;
    const typeWriter = setInterval(() => {
        setResponse(result.substring(0, i + 1));
        i++;
        if (i === result.length) {
            clearInterval(typeWriter);
            setIsLoading(false);
        }
    }, 30);
  };

  const saveSettings = () => {
    setThinkingTime(tempThinkingTime);
    setShowSettings(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 relative animate-in fade-in zoom-in duration-500">
      <BackButton onClick={onBack} language={language} />
      <div className="absolute top-24 md:top-32 right-8 md:right-16 cursor-pointer select-none group" onDoubleClick={handleTitleDoubleClick}>
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity">
          {t.gen2}
        </h2>
        <div className="text-xs text-right text-amber-400 opacity-0 group-hover:opacity-60 transition-opacity">
          (Double click to config)
        </div>
      </div>
      <div className="w-full max-w-2xl z-10">
        <div className="min-h-[200px] mb-8 p-6 rounded-2xl bg-black/40 border border-amber-500/20 backdrop-blur-sm shadow-[0_0_30px_rgba(245,158,11,0.2)]">
           {isLoading && !response ? (
             <div className="flex flex-col items-center justify-center h-full text-amber-400 animate-pulse gap-3">
               <Hourglass className="w-8 h-8" />
               <span className="text-sm font-mono tracking-widest uppercase">Deep Stasis Active</span>
               <span className="text-xs text-amber-600">Expected completion: {formatTimeDisplay(thinkingTime)}</span>
             </div>
           ) : (
             <p className="text-lg md:text-xl text-amber-50 font-light leading-relaxed">{response}</p>
           )}
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-xl border border-white/10 flex items-center p-2">
            <input 
              type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder={t.inputPlaceholder}
              className="flex-1 bg-transparent text-white px-4 py-3 outline-none placeholder-amber-500/50"
            />
            <button onClick={handleSend} disabled={isLoading} className="p-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-stone-900 border border-amber-500/30 rounded-2xl p-8 w-96 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Settings className="w-5 h-5 text-amber-400" />Settings</h3>
            <div className="mb-8">
              <label className="block text-sm text-amber-300 mb-2">{t.setThinkingTime}</label>
              <input 
                type="number" 
                min="1000" 
                max="11510400000" 
                step="1000" 
                value={tempThinkingTime} 
                onChange={(e) => setTempThinkingTime(Number(e.target.value))} 
                className="w-full bg-stone-700 rounded-lg px-4 py-2 text-white focus:border-amber-500 focus:outline-none appearance-none" 
              />
              <div className="text-right text-amber-400 mt-2 font-mono">{formatTimeDisplay(tempThinkingTime)}</div>
            </div>
            <div className="flex justify-end gap-4">
              <button onClick={() => setShowSettings(false)} className="px-4 py-2 text-sm text-stone-400 hover:text-white transition-colors">Cancel</button>
              <button onClick={saveSettings} className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-sm font-semibold transition-colors">{t.save}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Gen2Marketing: React.FC<{ language: Language, onBack: () => void }> = ({ language, onBack }) => {
  const t = TEXTS[language];
  return (
    <div className="w-full min-h-screen overflow-y-auto no-scrollbar animate-in slide-in-from-bottom-20 duration-1000 bg-black">
      <BackButton onClick={onBack} language={language} />
      <section className="h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-black to-black opacity-60" />
        <h2 className="text-xl md:text-2xl font-semibold text-amber-600 mb-4 animate-pulse z-10">Evolution</h2>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-amber-100 mb-6 drop-shadow-2xl z-10">{t.gen2MarketingTitle}</h1>
        <p className="text-2xl md:text-5xl font-medium text-amber-500/80 mb-12 max-w-4xl leading-tight z-10">{t.gen2MarketingSubtitle}</p>
        <div className="text-sm text-stone-500 font-mono border border-stone-800 rounded-full px-4 py-1 z-10 bg-black/50">Generation 2 &nbsp;|&nbsp; Infinite Patience</div>
      </section>
      
      <section className="py-24 px-4 bg-stone-950 text-center">
         <div className="max-w-4xl mx-auto space-y-12">
            <Hourglass className="w-24 h-24 text-amber-500 mx-auto animate-spin-slow" style={{animationDuration: '10s'}} />
            <h3 className="text-4xl font-bold text-white">Deep Stasis™</h3>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">{t.gen2MarketingDesc}</p>
            <div className="grid grid-cols-2 gap-8 text-left mt-16">
               <div className="p-8 border border-amber-900/30 rounded-2xl bg-amber-950/10">
                  <h4 className="text-amber-400 font-bold mb-2">365 Year Runtime</h4>
                  <p className="text-stone-400 text-sm">Our servers are prepaid until the year 2389. We will outlast your query.</p>
               </div>
               <div className="p-8 border border-amber-900/30 rounded-2xl bg-amber-950/10">
                  <h4 className="text-amber-400 font-bold mb-2">Tectonic Clock</h4>
                  <p className="text-stone-400 text-sm">Processor cycles synchronized with continental drift for maximum slowness.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ENG');
  const [viewState, setViewState] = useState<ViewState>(ViewState.HOME);
  
  // Auth & Database State
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const renderContent = () => {
    switch (viewState) {
      case ViewState.HOME:
        return <Home language={language} setViewState={setViewState} />;
      
      case ViewState.MY_PRODUCTS:
        return <ProductList language={language} setViewState={setViewState} mode="PRODUCTS" />;
      
      case ViewState.ABOUT_IT:
        return <ProductList language={language} setViewState={setViewState} mode="ABOUT" />;
      
      case ViewState.GEN1_APP:
        return <Gen1App language={language} onBack={() => setViewState(ViewState.MY_PRODUCTS)} />;
      
      case ViewState.GEN1_MARKETING:
        return <Gen1Marketing language={language} onBack={() => setViewState(ViewState.ABOUT_IT)} />;

      case ViewState.GEN2_APP:
        return <Gen2App language={language} onBack={() => setViewState(ViewState.MY_PRODUCTS)} />;
      
      case ViewState.GEN2_MARKETING:
        return <Gen2Marketing language={language} onBack={() => setViewState(ViewState.ABOUT_IT)} />;
      
      case ViewState.CLUB_PRODUCTS:
        return <ClubProducts language={language} setViewState={setViewState} />;

      case ViewState.SILICON_SIM:
        // Reached via CLUB_PRODUCTS
        return <SiliconSimulator language={language} onBack={() => setViewState(ViewState.CLUB_PRODUCTS)} />;

      case ViewState.MOTHERBOARD_SIM:
        // Reached via CLUB_PRODUCTS
        return <MotherboardSimulator language={language} onBack={() => setViewState(ViewState.CLUB_PRODUCTS)} />;

      default:
        return <Home language={language} setViewState={setViewState} />;
    }
  };

  return (
    <main className="relative min-h-screen w-full text-white overflow-x-hidden">
      <Background />
      
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        onNavigateHome={() => setViewState(ViewState.HOME)}
        users={users}
        setUsers={setUsers}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      <div className="relative z-10">
        {renderContent()}
      </div>
    </main>
  );
};

export default App;