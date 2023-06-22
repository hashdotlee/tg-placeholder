import { useEffect, useState } from 'react';
import Optin from './steps/Optin';
import ContractInvoice from './steps/ContractInvoice';
import AdsManager from './steps/AdsManager';
import StrategySession from './steps/StrategySession';
import FinalWords from './steps/FinalWords';
import "./App.css"
import logo from './assets/logo.png';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    setCurrentStep(s => Number(url.get("step")) || 1)
  }, [])
  const steps = [{
    index: 1,
    title: 'What To Expect',
    element: <Optin />
  },
  {
    index: 2,
    title: 'Contract & Payment',
    element: <ContractInvoice />
  },
  {
    index: 3,
    title: 'Find your target audience',
    element: <AdsManager />
  },
  {
    index: 4,
    title: 'Strategy session',
    element: <StrategySession />
  },
  {
    index: 5,
    title: 'Some last words',
    element: <FinalWords />
  },
  ]

  return (
    <div className="app">
      <div className='container'>
        <header className='app-header'>
          <img src={logo} alt="logo" />
        </header>
        <main>
          {steps.map((s) =>
            currentStep === s.index
              ? <div key={s.index} style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%", margin: "16px 0" }}>
                <div className='step-title'>Step {currentStep}: {s.title} </div>
                {s.element}
              </div>
              : null
          )}
          {currentStep < steps.length
            ? <a
              className={"next-step-button"}
              onClick={() => {
                const params = new URLSearchParams(window.location.search);
                params.delete("step");
                params.append("step", currentStep + 1);
              }}
              href={`${window.location.pathname}?step=${currentStep < steps.length ? currentStep + 1 : currentStep}`}
              role='button'
            >
              Take me to the next step ({currentStep}/{steps.length})
            </a>
            : <></>
          }
        </main>
      </div>
    </div>
  );
}

export default App;
