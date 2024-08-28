import React from "react";
import { QRCode } from 'react-qrcode-logo';

const QRCodeDisplay = ({ qrCodeData }) => {
  return (
    <QRCode
      value={qrCodeData.value}
      size={256}
      logoImage={qrCodeData.logo}
      logoWidth={50}
      logoHeight={50}
      bgColor={qrCodeData.bgColor}
      fgColor={qrCodeData.fgColor}
      qrStyle={qrCodeData.qrStyle}
      eyeRadius={[10, 10, 10]}
      eyeColor={qrCodeData.eyeColor}
    />
  );
};

export default QRCodeDisplay;
