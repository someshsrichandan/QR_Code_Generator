import React, { useState } from "react";

const AdvancedSettings = ({ onSubmit }) => {
  const [settings, setSettings] = useState({
    value: "https://yourwebsite.com",
    fgColor: "#4A90E2",
    bgColor: "#ffffff",
    eyeColor: { outer: '#F5A623', inner: '#D0021B' },
    qrStyle: "dots",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleFileChange = (e) => {
    setSettings({ ...settings, logo: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(settings);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2 md:p-4">
      <input
        type="text"
        name="value"
        value={settings.value}
        onChange={handleChange}
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border-purple-500"
        placeholder="Enter URL"
      />
      <input
        type="color"
        name="fgColor"
        value={settings.fgColor}
        onChange={handleChange}
        className="w-full h-10 rounded shadow focus:outline-none"
        title="Foreground Color"
      />
      <input
        type="color"
        name="bgColor"
        value={settings.bgColor}
        onChange={handleChange}
        className="w-full h-10 rounded shadow focus:outline-none"
        title="Background Color"
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border-purple-500"
        accept="image/*"
      />
      <button
        type="submit"
        className="px-4 py-2 font-semibold text-white bg-purple-600 rounded hover:bg-purple-700"
      >
        Generate QR Code
      </button>
    </form>
  );
};

export default AdvancedSettings;
