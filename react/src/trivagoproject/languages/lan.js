import React, { useState } from "react";

const LanguageToggle = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <div>
      <button onClick={toggleLanguages}>Toggle Languages</button>
      {showLanguages && (
        <ul>
          <li>English</li>
          <li>Spanish</li>
          <li>French</li>
          <li>German</li>
          <li>Chinese</li>
          {/* Add more languages as needed */}
        </ul>
      )}
    </div>
  );
};

export default LanguageToggle;
