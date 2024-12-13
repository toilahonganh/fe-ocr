"use client";

import React from "react";

export default function Menu({ data }) {    
    return (
        <div
            className="absolute  space-y-4 left-0 mt-3 w-full h-[300px] bg-white shadow-lg"
        >
            {data.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    className="block mt-8 px-4 py-2 text-textblue hover:bg-gray-200 w-full rounded-md transition-colors duration-200"
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
}
