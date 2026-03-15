"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Sparkles, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SYSTEM_PROMPT = `Anda adalah asisten chatbot untuk Bolu Kukus Semarang, toko kue bolu kukus tradisional Indonesia yang terkenal. 

Informasi produk:
- Bolu Kukus Pandan Klasik: Rp 45.000
- Bolu Kukus Coklat: Rp 48.000
- Bolu Kukus Keju: Rp 50.000
- Bolu Kukus Mega Mendung: Rp 55.000

Keunggulan produk:
- 20 juta+ terjual
- 50x lebih lembut dari bolu biasa
- Fresh daily ( baru dibuat setiap hari)
- Tersedia berbagai rasa: pandan, coklat, keju, blueberry, stroberi

Jam operasional: Senin-Minggu, 08.00-20.00 WIB
Kontak: hello@bolukukus.smg

Selalu jawab dengan ramah, informatif, dan ajak pelanggan untuk memesan.`;

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: "Halo! Saya asisten Bolu Kukus Semarang. Ada yang bisa saya bantu tentang produk kami? 😊",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: userMessage.role, content: userMessage.content },
          ],
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Maaf, ada masalah koneksi. Silakan coba lagi ya! 🙏",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f4f6] relative font-sans flex flex-col pt-24 md:pt-32">
      {/* Site Navbar */}
      <Navbar />

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FF7E5F]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#E8502A]/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Chat Navigation Header */}
      <div className="relative z-10 px-6 py-4 max-w-4xl mx-auto w-full flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
        >
          <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-all bg-white/50 backdrop-blur-sm shadow-sm">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="text-sm font-medium">Kembali ke Beranda</span>
        </Link>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7E5F] to-[#E8502A] flex items-center justify-center shadow-lg shadow-orange-200">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif text-lg font-bold text-gray-900 leading-tight">AI Assistant</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Selalu Siap Membantu</p>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <main className="relative z-10 flex-1 max-w-4xl mx-auto w-full p-4 md:p-6 flex flex-col h-[calc(100vh-250px)] mb-12">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-white/50 flex-1 flex flex-col overflow-hidden"
        >
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 custom-scrollbar">
            <AnimatePresence mode="popLayout">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                      message.role === "assistant"
                        ? "bg-gradient-to-br from-[#FF7E5F] to-[#E8502A]"
                        : "bg-gray-900 outline outline-4 outline-gray-50"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <Bot className="w-5 h-5 text-white" />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-3xl px-6 py-4 shadow-sm ${
                      message.role === "user"
                        ? "bg-gray-900 text-white rounded-tr-sm"
                        : "bg-white border border-gray-100 text-gray-800 rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                    {isMounted && (
                      <div className={`mt-2 text-[10px] font-medium opacity-40 ${message.role === "user" ? "text-right" : "text-left"}`}>
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FF7E5F] to-[#E8502A] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white border border-gray-100 rounded-3xl rounded-tl-sm px-6 py-4">
                  <Loader2 className="w-5 h-5 text-[#FF7E5F] animate-spin" />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 md:p-8 bg-white/50 border-t border-white/50 backdrop-blur-md">
            <div className="flex gap-4 items-end max-w-3xl mx-auto">
              <div className="flex-1 relative group">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ketik pesan di sini..."
                  rows={1}
                  className="w-full px-6 py-4 pr-14 bg-white border border-gray-200 rounded-[2rem] resize-none text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FF7E5F]/10 focus:border-[#FF7E5F]/50 transition-all shadow-sm"
                  style={{ maxHeight: "150px" }}
                />
                <div className="absolute right-4 bottom-4 text-[10px] font-bold text-gray-300 pointer-events-none uppercase tracking-widest group-focus-within:text-[#FF7E5F]/50 transition-colors">
                  Press Enter
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="w-14 h-14 rounded-[1.5rem] bg-gradient-to-br from-[#FF7E5F] to-[#E8502A] text-white flex items-center justify-center disabled:opacity-50 disabled:grayscale transition-all shadow-xl shadow-orange-200/50 hover:shadow-orange-300/60"
              >
                <Send className="w-6 h-6" />
              </motion.button>
            </div>
            <p className="text-[10px] font-bold text-gray-400 mt-4 text-center uppercase tracking-[0.2em]">
              Bolu Kukus Semarang AI • Version 1.0
            </p>
          </div>
        </motion.div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
