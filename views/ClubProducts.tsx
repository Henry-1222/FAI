import React, { useState } from 'react';
import { TEXTS, Language, ViewState } from '../types.ts';
import { ArrowRight, Cpu, CircuitBoard } from 'lucide-react';
import BackButton from '../components/BackButton.tsx';

interface ClubProductsProps {
  language: Language;
  setViewState: (view: ViewState) => void;
}

const ClubProducts: React.FC<ClubProductsProps> = ({ language, setViewState }) => {
  const t = TEXTS[language];
  const [headerTitle, setHeaderTitle] = useState(t.clubProducts);

  const toggleHeader = () => {
    setHeaderTitle(prev => prev === t.clubProducts ? t.clubFullTitle : t.clubProducts);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full pt-32 p-4 animate-in slide-in-from-bottom-10 duration-700">
      
      <BackButton onClick={() => setViewState(ViewState.HOME)} language={language} />

      <h2 
        className="text-3xl md:text-5xl font-light text-orange-200 mb-16 tracking-widest uppercase opacity-90 cursor-pointer select-none transition-all"
        onDoubleClick={toggleHeader}
        title="Double click to reveal"
      >
        {headerTitle}
      </h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Silicon Simulator Card */}
        <div className="relative w-full h-96 border border-white/10 rounded-3xl bg-gradient-to-b from-orange-950/60 to-black/60 backdrop-blur-md overflow-hidden group hover:border-orange-500/50 transition-all duration-500 shadow-2xl shadow-orange-900/20">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
          
          <div className="flex flex-col items-center justify-center h-full p-8">
             <div className="p-4 rounded-full bg-orange-500/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                <Cpu className="w-16 h-16 text-orange-200" />
             </div>
             <h3 className="text-2xl font-bold text-white tracking-widest mb-2 text-center">{t.simTitle}</h3>
             <div className="w-12 h-1 bg-orange-500/50 rounded-full" />
          </div>

          <button 
            onClick={() => setViewState(ViewState.SILICON_SIM)}
            className="absolute bottom-0 right-0 p-6 bg-white/5 hover:bg-orange-600/20 border-t border-l border-white/10 rounded-tl-2xl transition-all duration-300 group-hover:pr-8"
          >
            <ArrowRight className="w-6 h-6 text-orange-400" />
          </button>
        </div>

        {/* Motherboard Simulator Card */}
        <div className="relative w-full h-96 border border-white/10 rounded-3xl bg-gradient-to-b from-green-950/60 to-black/60 backdrop-blur-md overflow-hidden group hover:border-green-500/50 transition-all duration-500 shadow-2xl shadow-green-900/20">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50" />
          
          <div className="flex flex-col items-center justify-center h-full p-8">
             <div className="p-4 rounded-full bg-green-500/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                <CircuitBoard className="w-16 h-16 text-green-200" />
             </div>
             <h3 className="text-2xl font-bold text-white tracking-widest mb-2 text-center">{t.moboTitle}</h3>
             <div className="w-12 h-1 bg-green-500/50 rounded-full" />
          </div>

          <button 
            onClick={() => setViewState(ViewState.MOTHERBOARD_SIM)}
            className="absolute bottom-0 right-0 p-6 bg-white/5 hover:bg-green-600/20 border-t border-l border-white/10 rounded-tl-2xl transition-all duration-300 group-hover:pr-8"
          >
            <ArrowRight className="w-6 h-6 text-green-400" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ClubProducts;