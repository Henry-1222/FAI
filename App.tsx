import React, { useState } from 'react';
import { Language, ViewState, User } from './types.ts';
import Header from './components/Header.tsx';
import Background from './components/Background.tsx';
import Home from './views/Home.tsx';
import ProductList from './views/ProductList.tsx';
import Gen1App from './views/Gen1App.tsx';
import Gen1Marketing from './views/Gen1Marketing.tsx';
import SiliconSimulator from './views/SiliconSimulator.tsx';

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
      
      case ViewState.SILICON_SIM:
        return <SiliconSimulator language={language} onBack={() => setViewState(ViewState.HOME)} />;

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