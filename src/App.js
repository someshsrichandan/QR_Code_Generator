import React, { useState, useEffect } from "react";
import BasicSettings from "./components/BasicSettings";
import AdvancedSettings from "./components/AdvancedSettings";
import QRCodeDisplay from "./components/QRCodeDisplay";

function App() {
  const [view, setView] = useState('BASIC');
  const [qrCodeData, setQrCodeData] = useState({
    value: "https://yourwebsite.com",
    logo: null,
    fgColor: "#4A90E2",
    bgColor: "#ffffff",
    eyeColor: { outer: '#F5A623', inner: '#D0021B' },
    qrStyle: "dots",
  });

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBasicSubmit = (url) => {
    setQrCodeData({ ...qrCodeData, value: url });
  };

  const handleAdvancedSubmit = (settings) => {
    setQrCodeData({ ...qrCodeData, ...settings });
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 p-4 overflow-y-auto">
      <div className="w-full max-w-3xl border border-white rounded-xl shadow-gradient p-4 md:pt-8 md:mt-14 flex flex-col gap-6 overflow-hidden">
        <h1 className="font-sciFi pt-4 font-semibold tracking-widest text-white text-center text-3xl md:text-4xl">
          QRcode <br />
          <p className="text-sm text-center">generator</p>
        </h1>
        <div className="flex flex-col-reverse md:flex-row justify-around gap-6 md:gap-10 p-4 items-center">
          {/* QR Code Display Section */}
          <QRCodeDisplay qrCodeData={qrCodeData} />

          {/* Input Fields Section */}
          <div className="w-full max-w-xs">
            <div className="flex justify-center mb-4">
              <div className="flex divide-x divide-gray-800">
                <button
                  className={`align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-4 md:px-6 rounded-lg bg-gray-900 text-white shadow-md ${
                    view === 'BASIC' ? 'bg-purple-700' : ''
                  }`}
                  type="button"
                  onClick={() => setView('BASIC')}
                >
                  BASIC
                </button>
                <button
                  className={`align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-4 md:px-6 rounded-lg bg-gray-900 text-white shadow-md ${
                    view === 'ADVANCE' ? 'bg-purple-700' : ''
                  }`}
                  type="button"
                  onClick={() => setView('ADVANCE')}
                >
                  ADVANCE
                </button>
              </div>
            </div>
            {view === 'BASIC' ? (
              <BasicSettings onSubmit={handleBasicSubmit} />
            ) : (
              <AdvancedSettings onSubmit={handleAdvancedSubmit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
