import { useState, useEffect, useRef } from "react";

const CustomDropdown = ({ options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full text-sm md:text-base" ref={dropdownRef}>
      <button
        className="inputStyles relative w-full z-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between">
          {selected.label} <span>▾</span>
        </div>
      </button>
      {isOpen && (
        <div className="absolute w-full border border-slate-300 bg-white rounded z-50">
          {options.map((option, index) => (
            <div
              key={index}
              className="hover:bg-black hover:text-white cursor-pointer rounded p-2"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
