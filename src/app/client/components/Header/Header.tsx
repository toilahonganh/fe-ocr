"use client";
import React, { useState } from "react";
import Image from "next/image";
import icons from "@utils/icon.utils";
import images from "@utils/image.utils";
import Menu from "@/app/components/Header";

interface MenuItem {
  label: string;
  link: string;
}

interface Dropdown {
  label: string;
  items: MenuItem[];
}

interface HeaderProps {
    menuDummy: Dropdown[]; // data là prop được truyền vào từ ngoài
}

export default function Header({ menuDummy }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="flex items-center px-5 py-1 bg-white">
      <div className="flex items-center space-x-2 mr-28">
        <Image src={images.CodeZX} width={40} height={40} alt="Logo" />
        <div className="flex justify-center space-x-1">
          <span className="text-[25px] font-bold text-textblue">Converter</span>
          <span className="text-[25px] font-bold text-textpink">Free</span>
        </div>
      </div>
      <div className="flex space-x-24 mr-0 w-full justify-start">
        {menuDummy.map((dropdown) => (
          <div
            key={dropdown.label}
            onMouseEnter={() => handleMouseEnter(dropdown.label)}
            onMouseLeave={handleMouseLeave}
            className="py-3 w-auto"
          >
            <a
              href="#"
              className="flex text-black hover:font-bold transition-all duration-200"
              aria-expanded={activeDropdown === dropdown.label ? "true" : "false"}
              aria-controls={`dropdown-${dropdown.label}`}
            >
              <div className="flex items-center">
                <span className="text-textblue">{dropdown.label}</span>
                <icons.DropDown className="w-5 h-5 mr-2 text-textblue" />
              </div>
            </a>
            {/* Hiển thị Menu chỉ khi activeDropdown trùng với label của dropdown */}
            {activeDropdown === dropdown.label && <Menu data={dropdown.items} />}
          </div>
        ))}
      </div>
      <button className="flex items-center px-5 py-2 border border-textblue rounded text-textblue space-x-1 hover:bg-textblue hover:text-white">
        <span className="text-[13px]">Login</span>
        <Image src={images.Google} width={20} height={20} alt="Google Icon" />
      </button>
    </header>
  );
}
