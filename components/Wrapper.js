"use client";
import React, { useState, useEffect, Children } from "react";
import { Button } from "@mui/material";
import Link from "next/link";

const Wrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen relative">
      {loading && (
        <div className="overlay w-full h-full fixed top-0 left-0 bg-[#28e1bf] z-50 flex items-center justify-center overflow-hidden">
          <img src="/logo.png" alt="" className="hidden sm:block object-contain h-40 invert" />
          <img src="/phoneLogo.png" alt="" className="sm:hidden object-contain h-60 invert" />
        </div>
      )}

      {children}

      <style jsx>{`
        .overlay {
          animation: slideUp 1s forwards;
        }

        @keyframes slideUp {
          from {
            height: 100%;
          }
          to {
            height: 0%;
          }
        }

        .loader {
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Wrapper;
