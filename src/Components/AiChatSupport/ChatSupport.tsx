"use client";
import { useState, useRef, useEffect } from "react";
import { Send, X } from "lucide-react";
import Image from "next/image";
import { AIChatMessageIcon } from "@/common/DashboardSvg/DashSVG";
import aibot from "@/assets/logo/bot.png";

export default function ChatSupport() {

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Welcome to My Tax Braker Support! How can we assist you today?",
      time: "3:00 PM",
    },
    {
      from: "user",
      text: "I need help understanding how to file my taxes.",
      time: "3:02 PM",
    },
    {
      from: "bot",
      text: "Sure! I can guide you through the process step by step.",
      time: "3:03 PM",
    },
  ]);
  const [input, setInput] = useState("");
const messagesEndRef = useRef<HTMLDivElement | null>(null);


  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Get current time for the new message
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    const newMessage = { 
      from: "user", 
      text: input, 
      time: timeString 
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  // Handle Enter key press
  const handleKeyPress = (e : React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-[#004D3F] text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all"
      >
        <AIChatMessageIcon />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 sm:w-96 h-[550px] bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden z-30">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200  text-black">
            <span className="font-semibold text-sm">
              Welcome to My Tax Braker Support
            </span>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages (scrollable area with hidden scrollbar) */}
          <div className="flex-1 p-4 space-y-3 bg-gray-50 overflow-y-auto custom-scroll no-scrollbar">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.from === "bot" && (
                  <Image
                    src={aibot}
                    alt="Bot"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}

                <div
                  className={`max-w-[70%] rounded-lg px-3 py-2 text-xs sm:text-sm ${
                    msg.from === "user"
                      ? "bg-[#A7EB94] text-gray-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                  <div className="text-[10px] text-gray-500 mt-1 text-right">
                    {msg.time}
                  </div>
                </div>

                {msg.from === "user" && (
                  <Image
                    src={"https://i.pravatar.cc/150?img=3"}
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
              </div>
            ))}
            {/* Invisible element at the bottom for scrolling reference */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t p-3 flex items-center bg-white">
            <input
              type="text"
              placeholder="Write your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#004D3F]"
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-[#004D3F] hover:bg-green-800 duration-300 text-white px-4 py-2 rounded-lg flex items-center gap-1"
            >
              <Send size={16} /> <span className="text-sm">Send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}