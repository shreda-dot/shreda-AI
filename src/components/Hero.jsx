import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import React, { useEffect } from "react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples, floatingCards } from "./data/CodeExample";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Hero = () => {
  const [mousePostion, setMousePosition] = useState({ x: 0, y: 0 });

  // KEEP TRACK OF THE ACTIVE TABS USESTATE
  const [activeTab, setActiveTab] = useState("App.jsx");
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const currentfloatingCard = floatingCards[activeTab];
  return (
    <>
      <section className=" max-w-[1200px]relative min-h-screen flex items-center justify-center pt-16 sm:pt-35 px-4 sm:px-16 lg:px-8 overflow-hidden">
        {/* ANIMATION */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePostion.x}px ${mousePostion.y}px,rgba(59,130, 248, 0.15), transparent 40%)`,
          }}
        />
        <div className="absolute top-20 left- w-48 sm:left-10 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4  w-64 sm:left-10 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        {/* MAIN CONTENT */}
        <div className=" max-w-7xl mx-auto text-center relative w-full sm:flex block  justify-between">
          <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 text-center relative">
            {/* FIRST CONTAINER */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xssm:text-sm text-blue-300">
                  Introducing Shreda AI
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-4xl lg:text-6xl font-semibold mb-4  sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  Code Faster
                </span>
                <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  Build Better
                </span>
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  With Shreda AI
                </span>
              </h1>
              <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 sm:mb-8 leading-relaxed animate-in slide-in-from-bottom duration-700 delay-200">
                Elevate your coding experience with Shreda AI - your intelligent
                coding companion that transforms ideas into clean, efficient
                code in seconds.
              </p>
              <div className=" flex flex-col items-center justify-center  gap-3 sm:gap-4 sm:mb-12 mb-8 sm:flex-row gap-4 animate-in slide-in-from-bottom duration-700 delay-300">
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                  <span>Start Coding Free</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group w-full backdrop-blur-sm border border-white/5 sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                  <div className="bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  </div>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* SECOND CONTAINER */}
            {/* THE CONTENT */}
            <div className="relative order-2 w-full">
              <div className="relative bg-white/5  backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">
                  {/* ID HEADER */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center sm:space-x-2 space-x-1">
                        <div className="sm:w-3 h-2 w-2 sm:h-3 bg-red-500 rounded-full" />
                        <div className="sm:w-3 w-2 h-2 sm:h-3 bg-yellow-400 rounded-full" />
                        <div className="sm:w-3 w-2 h-2 sm:h-3 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-300">
                        Shreda
                      </span>
                    </div>
                    <ChevronDown className=" w-3 h-3 sm:w-4 text-gray-400 cursor-pointer" />
                  </div>
                  <div className="p-3 sm:p-4 relative h-full">
                    {/* FILES TAG/BUTTON */}
                    <div className="space-x-1 flex sm:space-x-2  mb-3 sm:mb-4 overflow-x-auto">
                      <button
                        onClick={() => setActiveTab("App.jsx")}
                        className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                          activeTab === "App.jsx"
                            ? "bg-blue-500/30 text-white border-blue-400/20"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                        }  transtion-all duration-200 whitespace-nowrap `}
                      >
                        App.jsx
                      </button>
                      <button
                        onClick={() => setActiveTab("Hero.jsx")}
                        className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                          activeTab === "Hero.jsx"
                            ? "bg-blue-500/30 text-white border-blue-400/20"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                        }  transtion-all duration-200 whitespace-nowrap `}
                      >
                        Hero.jsx
                      </button>
                      <button
                        onClick={() => setActiveTab("Navbar.jsx")}
                        className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                          activeTab === "Navbar.jsx"
                            ? "bg-blue-500/30 text-white border-blue-400/20"
                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                        }  transtion-all duration-200 whitespace-nowrap `}
                      >
                        Navbar.jsx
                      </button>
                    </div>
                    {/* CODE BLOCK */}
                    <div className="relative overlow-hidden flex-grow">
                      <SyntaxHighlighter
                        language="javascript"
                        style={nightOwl}
                        customStyle={{
                          margin: 0,
                          borderRadius: "8px",
                          fontSize: "10px",
                          height: "100%",
                          border: "1px solid #3c3c3c",
                        }}
                      >
                        {codeExamples[activeTab]}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
                {/* FLOATING CARDS */}
                <div
                  className={`lg:block absolute bottom-4 right-4 transform translate-x-6 translate-y-8 w-72 ${floatingCards[activeTab].bgColor} backdrop-blur-xl rounded-lg p-4 border-white/20 shadow-xl`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div
                      className={`w-6 h-6 $(currentfloatingCard.iconColor)flex items-center justify-center rounded-full font bold`}
                    >
                      {currentfloatingCard.icon}
                    </div>
                    <span
                      className={`text-sm font-medium ${currentfloatingCard.textColor}`}
                    >
                      {currentfloatingCard.title}
                    </span>
                  </div>
                  <div
                    className={`text-sm text-left ${currentfloatingCard.contentColor}`}
                  >
                    {currentfloatingCard.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
