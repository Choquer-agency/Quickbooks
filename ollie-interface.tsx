"use client"

import { Button } from "@/components/ui/button"
import { Send, X, ChevronRight, ThumbsUp, ThumbsDown, Copy } from "lucide-react"
import Image from "next/image"
import { Goudy_Bookletter_1911 } from "next/font/google"
import { useState } from "react"

const goudyBookletter = Goudy_Bookletter_1911({
  weight: "400",
  subsets: ["latin"],
})

const promptOptions = [
  "What red flags do you see in my financial data?",
  "Create a pie chart of my expense breakdown by category",
  "Show me a chart of my revenue trends over the last 6 months",
  "Compare my quarterly performance year over year",
]

const previousChats = [
  {
    preview: "I think you might have copied and pasted my previous response back to me?",
    tag: "Risk Assessment",
    tagColor: "bg-[#FFCEBC] text-[#263926]",
  },
  {
    preview: "I think you might have copied and pasted my previous response back to me?",
    tag: "Risk Assessment",
    tagColor: "bg-[#ECFFBC] text-[#263926]",
  },
  {
    preview: "I think you might have copied and pasted my previous response back to me?",
    tag: "Risk Assessment",
    tagColor: "bg-[#BCD0FF] text-[#263926]",
  },
  {
    preview: "I think you might have copied and pasted my previous response back to me?",
    tag: "Risk Assessment",
    tagColor: "bg-[#FFCEBC] text-[#263926]",
  },
  {
    preview: "I think you might have copied and pasted my previous response back to me?",
    tag: "Risk Assessment",
    tagColor: "bg-[#BCD0FF] text-[#263926]",
  },
  {
    preview: "I think you might have copied and pasted my previous response back to me?",
    tag: "Risk Assessment",
    tagColor: "bg-[#FFCEBC] text-[#263926]",
  },
  {
    preview: "I think you might have copied and pasted my previous response back to me?",
    tag: "Risk Assessment",
    tagColor: "bg-[#BCD0FF] text-[#263926]",
  },
  {
    preview: "I think you might have copied and pasted my previous response back to me?",
    tag: "Risk Assessment",
    tagColor: "bg-[#FFCEBC] text-[#263926]",
  },
]

export default function Component() {
  const [isPromptLibraryOpen, setIsPromptLibraryOpen] = useState(false)
  const [isChatMode, setIsChatMode] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setIsChatMode(true)
    }
  }

  if (isChatMode) {
    return (
      <div className="w-[1440px] h-screen bg-[#faf9f5] mx-auto flex flex-col overflow-hidden">
        {/* Navigation Bar */}
        <div
          className="relative z-10 flex items-center px-8"
          style={{
            height: "80px",
            background: `linear-gradient(to bottom, 
              #FAF9F5 0%, 
              #FAF9F5 85%, 
              transparent 100%)`,
          }}
        >
          <Image src="/ollie-logo.png" alt="Ollie Logo" width={120} height={40} className="h-8 w-auto" />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden" style={{ marginTop: "-80px", paddingTop: "80px" }}>
          {/* Left Column - 15% wider */}
          <div
            className="flex-shrink-0 flex flex-col h-full"
            style={{ width: "368px", paddingLeft: "30px", paddingTop: "32px" }}
          >
            {/* White Box with Prompt Templates */}
            <div className="bg-white rounded-lg shadow-sm flex-1 flex flex-col overflow-hidden">
              {/* Header */}
              <div className="p-6 pb-4 flex-shrink-0">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/prompt-library-icon.png"
                    alt="Prompt Templates"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <h2 className={`text-xl font-semibold text-[#41413E] ${goudyBookletter.className}`}>
                    Prompt Templates
                  </h2>
                </div>
                <p className="text-sm text-[#73726c]">What red flags do you see in my financial data?</p>
              </div>

              {/* Scrollable Templates */}
              <div
                className="flex-1 overflow-y-auto px-6"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#e5e5e5 transparent",
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    width: 6px;
                  }
                  div::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  div::-webkit-scrollbar-thumb {
                    background-color: #e5e5e5;
                    border-radius: 3px;
                  }
                  div::-webkit-scrollbar-thumb:hover {
                    background-color: #d1d5db;
                  }
                `}</style>
                <div className="space-y-0 mb-6">
                  {previousChats.map((chat, index) => (
                    <div key={index}>
                      <div className="py-4 hover:bg-[#F6F5F1] cursor-pointer transition-colors">
                        <div className="mb-3">
                          <span
                            className={`text-xs px-3 py-1 rounded-full ${chat.tagColor}`}
                            style={{ fontSize: "10px" }}
                          >
                            {chat.tag}
                          </span>
                        </div>
                        <p className="text-sm text-[#484848] leading-relaxed">{chat.preview}</p>
                      </div>
                      {index < previousChats.length - 1 && <div className="border-b border-[#e5e5e5]"></div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* User Profile */}
              <div className="p-6 pt-4 border-t border-[#e5e5e5] flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#484848] rounded-full flex items-center justify-center text-white text-sm font-medium">
                    BC
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#484848]">Bryce Choquer</p>
                    <p className="text-xs text-[#73726c]">Max Plan</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#73726c]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Main Chat Area) */}
          <div className="flex-1 flex flex-col h-full" style={{ paddingLeft: "40px", paddingRight: "30px" }}>
            {/* Scrollable Chat Messages */}
            <div className="flex-1 overflow-y-auto py-8">
              <div className="max-w-[649.19px] space-y-6">
                {/* Ollie's First Message */}
                <div className="flex flex-col">
                  <p className="text-sm text-[#484848] mb-4 leading-relaxed">
                    I think you might have copied and pasted my previous response back to me! That was what I said when
                    you first typed "ui".
                    <br />
                    Are you testing how I respond to my own messages, or did you mean to ask something else?
                    <br />
                    I'm here and ready to help with whatever you actually need assistance with.
                  </p>
                </div>

                {/* User Message */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#484848] rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                    BC
                  </div>
                  <div className="bg-[#F0EEE6] rounded-lg px-4 py-3">
                    <p className="text-sm text-[#484848]">test ustest ustest ustest us</p>
                  </div>
                </div>

                {/* Ollie's Second Message */}
                <div className="flex flex-col">
                  <p className="text-sm text-[#484848] mb-4 leading-relaxed">
                    I think you might have copied and pasted my previous response back to me! That was what I said when
                    you first typed "ui".
                  </p>

                  {/* Working Capital Chart */}
                  <div className="bg-white p-6 rounded-lg border border-[#e5e5e5] mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-[#484848]">Working Capital</h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-[#35735E] rounded-full"></div>
                          <span className="text-sm text-[#73726c]">Income</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-[#EEDF87] rounded-full"></div>
                          <span className="text-sm text-[#73726c]">Expenses</span>
                        </div>
                        <Button variant="ghost" className="flex items-center gap-2 text-sm text-[#73726c]">
                          Last 7 days
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Image
                      src="/placeholder.svg?height=200&width=600"
                      alt="Working Capital Chart"
                      width={600}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-4 pl-5">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#484848] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-[#484848]">Code or functionality you've written</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#484848] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-[#484848]">A concept or idea you want to explore</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#484848] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-[#484848]">A user interface or application</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#484848] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-[#484848]">Your knowledge on a particular topic</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#484848] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-[#484848]">Something else entirely</span>
                    </li>
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <Image
                      src="/ollie-logo-mark.png"
                      alt="Ollie"
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px] object-contain"
                    />
                    <div className="flex items-center gap-2 ml-auto">
                      <Button variant="ghost" size="sm" className="p-2 text-[#73726c] hover:text-[#484848]">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2 text-[#73726c] hover:text-[#484848]">
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2 text-[#73726c] hover:text-[#484848]">
                        <ThumbsDown className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Bottom Input - 15% taller */}
            <div className="bg-[#faf9f5] py-6 flex-shrink-0">
              <div className="max-w-[649.19px] relative">
                <textarea
                  placeholder="Reply to Ollie..."
                  className="w-full px-4 py-4 pr-16 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D639] focus:border-transparent resize-none bg-white"
                  rows={3}
                  style={{ minHeight: "92px" }}
                />
                <Button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#00D639] hover:bg-[#00b830] rounded-lg p-0">
                  <Send className="w-5 h-5 text-white -rotate-45" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Original onboarding interface
  return (
    <div className="w-[1440px] h-screen bg-[#faf9f5] flex flex-col overflow-hidden mx-auto">
      {/* Navigation Bar */}
      <div
        className="relative z-10 flex items-center px-8"
        style={{
          height: "80px",
          background: `linear-gradient(to bottom, 
            #FAF9F5 0%, 
            #FAF9F5 85%, 
            transparent 100%)`,
        }}
      >
        <Image src="/ollie-logo.png" alt="Ollie Logo" width={120} height={40} className="h-8 w-auto" />
      </div>

      {/* Main Content - Centered and moved up 15% */}
      <div
        className="flex-1 flex items-center justify-center px-6"
        style={{ transform: "translateY(-15%)", marginTop: "-80px", paddingTop: "80px" }}
      >
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <Image
            src="/ollie-logo-mark.png"
            alt="Ollie Avatar"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
            style={{ marginBottom: "20px" }}
          />

          {/* Main Heading */}
          <h1
            className={`text-4xl font-semibold text-[#484848] text-center ${goudyBookletter.className}`}
            style={{ marginBottom: "16px" }}
          >
            Hey Bryce, lets talk numbers
          </h1>

          {/* Subtext */}
          <p className="text-[#73726c] text-center max-w-md text-sm" style={{ marginBottom: "16px" }}>
            Connect your QuickBooks and I'll help you understand
            <br />
            what your numbers really mean.
          </p>

          {/* QuickBooks Integration */}
          <div className="flex items-center gap-4" style={{ marginBottom: "30px" }}>
            <Image src="/qbo-logo.png" alt="QuickBooks Logo" width={120} height={32} className="h-8 w-auto" />
            <Button className="bg-[#00c020] hover:bg-[#00a01c] text-white px-6 py-2 rounded-md">
              Connect QuickBooks
            </Button>
          </div>

          {/* Text Box */}
          <div
            className="relative bg-white border border-[#e5e5e5] rounded-lg shadow-sm"
            style={{ width: "617px", height: "95.87px", marginBottom: "30px" }}
          >
            <div className="flex items-start justify-between px-4 py-3 h-full">
              <input
                type="text"
                placeholder="👋 Hi! I'll be your financial guide! What would you like to know about your business?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                className="flex-1 bg-transparent border-none outline-none text-[#484848] placeholder:text-[#9ca3af] pt-1 text-sm"
              />
              <div className="flex items-end gap-6 ml-4 h-full pb-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#d60004] rounded-full animate-pulse"></div>
                  <span className="text-xs text-[#73726c] whitespace-nowrap">Quickbooks Not Connected</span>
                </div>
                <Button
                  onClick={handleSubmit}
                  className="w-10 h-10 bg-[#CCF2D2] hover:bg-[#b8e6c1] rounded-md flex-shrink-0 p-0"
                >
                  <Send className="w-4 h-4 text-white rotate-45" />
                </Button>
              </div>
            </div>
          </div>

          {/* Prompt Library - expandable box */}
          <div className="w-full flex justify-start mt-4" style={{ paddingLeft: "28px", width: "617px" }}>
            <div className="relative">
              {/* Header - always visible */}
              <div
                className={`border border-[#e5e5e5] rounded-lg bg-white shadow-sm transition-all duration-200 ${
                  isPromptLibraryOpen ? "" : "hover:bg-[#F6F5F1]"
                }`}
                style={{
                  width: isPromptLibraryOpen ? "587.35px" : "auto",
                  borderBottomLeftRadius: isPromptLibraryOpen ? "0" : "",
                  borderBottomRightRadius: isPromptLibraryOpen ? "0" : "",
                }}
              >
                <div className="flex items-center justify-between p-3">
                  <button
                    onClick={() => setIsPromptLibraryOpen(!isPromptLibraryOpen)}
                    className="flex items-center gap-2"
                  >
                    <Image
                      src="/prompt-library-icon.png"
                      alt="Prompt Library"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-[#73726c]">Prompt Library</span>
                  </button>

                  {isPromptLibraryOpen && (
                    <button
                      onClick={() => setIsPromptLibraryOpen(false)}
                      className="p-1 hover:bg-[#F6F5F1] rounded transition-colors"
                    >
                      <X className="w-4 h-4 text-[#73726c]" />
                    </button>
                  )}
                </div>
              </div>

              {/* Expanded content - positioned below header */}
              {isPromptLibraryOpen && (
                <div
                  className="absolute top-full left-0 bg-white border-l border-r border-b border-[#e5e5e5] rounded-b-lg shadow-sm z-10"
                  style={{ width: "587.35px" }}
                >
                  {promptOptions.map((prompt, index) => (
                    <div key={index}>
                      <button
                        className="w-full text-left px-4 py-3 text-sm text-[#73726c] hover:bg-[#F6F5F1] transition-colors flex items-center justify-between group"
                        onClick={() => {
                          setInputValue(prompt)
                          setIsPromptLibraryOpen(false)
                        }}
                      >
                        <span>{prompt}</span>
                        {index === 2 && (
                          <ChevronRight className="w-4 h-4 text-[#73726c] opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </button>
                      {index < promptOptions.length - 1 && <div className="border-b border-[#e5e5e5]"></div>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
