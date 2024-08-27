import React from "react";
import { QRCode } from 'react-qrcode-logo';
import { useState } from "react";

function App() {
  const [view, setView] = useState('BASIC')
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div className="w-8/12 h-5/6 border border-white rounded-xl shadow-gradient">
        <h1 className="font-sciFi pt-4 font-semibold tracking-widest	text-white text-center text-4xl">QRcode <br /><p className="text-sm text-center">generator</p></h1>
        <div className="flex justify-around gap-10 p-10">
          <div>
            <QRCode
              value="https://yourwebsite.com"
              size={256}
              // Optional: Add a logo image at the center
              logoWidth={50}
              logoHeight={50}
              bgColor="#ffffff"
              fgColor="#4A90E2" // Foreground color for the QR code
              qrStyle="dots" // QR code style: "dots" or "squares"
              eyeRadius={[10, 10, 10]} // Rounded corners for the eyes
              eyeColor={{
                outer: '#F5A623', // Color for the outer eyes
                inner: '#D0021B', // Color for the inner eyes
              }}
            />

          </div>
          <div>
            <div className="flex justify-center mt-4 mb-4">
              <div className="flex divide-x divide-gray-800">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-r-none border-r-0"
                  type="button"
                  onClick={() => setView('BASIC')}
                >
                BASIC
                </button>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none  border-r-0 rounded-l-none"
                  type="button"
                  onClick={() => setView('ADVANCE')}
                >
                  ADVANCE
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
