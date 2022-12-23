import React, { useEffect } from 'react';
import { themeChange } from 'theme-change';

function ThemeSwitcher() {
    useEffect(() => {
        themeChange(false);
      }, []);
    
  return (
    <select className="select select-accent w-32 max-w-xs float-right" data-choose-theme>
      <option disabled value="">
        Pick a theme
      </option>
      <option value="coffee">Default</option>
      <option value="light">Light</option>
      <option value="retro">Retro</option>
      <option value="dracula">Dracula</option>
      <option value="valentine">Valentine</option>
      <option value="luxury">Luxury</option>
      <option value="autumn">Autumn</option>
      <option value="fantasy">Fantasy</option>
      <option value="coffee">Coffee</option>

    </select>
  );
}

export default ThemeSwitcher;