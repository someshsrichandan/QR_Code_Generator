import React, { useRef } from "react";
import { QRCode } from 'react-qrcode-logo';
import { toPng } from 'html-to-image';

const QRCodeDisplay = ({ qrCodeData }) => {
  const qrRef = useRef();

  const handleDownload = async () => {
    if (qrRef.current) {
      try {
        const dataUrl = await toPng(qrRef.current);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qrcode.png';
        link.click();
      } catch (error) {
        console.error('Failed to download image:', error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-2 md:p-4">
      <div ref={qrRef} className="p-4 bg-white rounded-lg shadow-md max-w-full border border-gray-300 flex justify-center items-center">
        <QRCode
          value={qrCodeData.value}
          size={256}
          logoImage={qrCodeData.logo}
          logoWidth={50}
          logoHeight={50}
          bgColor={qrCodeData.bgColor}
          fgColor={qrCodeData.fgColor}
          qrStyle={qrCodeData.qrStyle}
          eyeRadius={qrCodeData.eyeRadius}
          eyeColor={qrCodeData.eyeColor}
        />
      </div>
      <button
        onClick={handleDownload}
        className="px-4 py-2 font-semibold text-white bg-purple-600 rounded hover:bg-purple-700"
      >
        Download PNG
      </button>
    </div>
  );
};

export default QRCodeDisplay;
