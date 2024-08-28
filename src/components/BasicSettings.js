import React, { useState } from "react";

const BasicSettings = ({ onSubmit }) => {
  const [url, setUrl] = useState("https://yourwebsite.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border-purple-500"
        placeholder="Enter URL"
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

export default BasicSettings;
