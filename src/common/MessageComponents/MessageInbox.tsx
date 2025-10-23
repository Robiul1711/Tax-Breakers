"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuHeart,
  LuSend,
  LuThumbsUp,
  LuPaperclip,
  LuX,
  LuFile,
} from "react-icons/lu";
import { FaRegSmile } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import { Loader, CheckCircle2 } from "lucide-react";
import { TiStarFullOutline } from "react-icons/ti";
import { AttachIcon, CameraIcon } from "../DashboardSvg/DashSVG";

// ------------------ TYPES ------------------
interface Attachment {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  file: File;
}

interface SenderProfile {
  name: string;
  avatar: string;
}

interface ChatMessage {
  id: number;
  text: string;
  sender: "me" | "other";
  senderProfile: SenderProfile;
  timestamp: string;
  reaction: "love" | "like" | "smile" | null;
  attachments: Attachment[];
}

interface Conversation {
  id: number;
  name: string;
  avatar: string;
}

interface MessageProps {
  message: ChatMessage;
  reactingTo: number | null;
  toggleReactionMenu: (messageId: number) => void;
  handleReaction: (messageId: number, reaction: "love" | "like" | "smile") => void;
  messageVariants: any;
  reactionVariants: any;
  formatFileSize: (bytes: number) => string;
}

interface MessageInboxProps {
  selectedConversation: Conversation | null;
  onBack: () => void;
}

// ------------------ MESSAGE BUBBLE ------------------
const Message: React.FC<MessageProps> = ({
  message,
  reactingTo,
  toggleReactionMenu,
  handleReaction,
  messageVariants,
  reactionVariants,
  formatFileSize,
}) => (
  <motion.div
    variants={messageVariants}
    custom={message}
    initial="hidden"
    animate="visible"
    exit="exit"
    layout
    className={`mb-4 flex ${
      message.sender === "me" ? "justify-end" : "justify-start"
    }`}
  >
    <div className="relative max-w-2xl flex items-end gap-2">
      {message.sender === "other" && (
        <img
          src={message.senderProfile?.avatar}
          alt={message.senderProfile?.name}
          className="w-8 h-8 rounded-full"
        />
      )}
      <div>
        <div
          className={`p-3 rounded-lg text-black  text-sm ${
            message.sender === "me"
              ? "bg-[#1E4841] text-white rounded-br-none"
              : "bg-gray-50 dark:bg-slate-800 rounded-bl-none"
          }`}
        >
          {message.attachments?.length > 0 && (
            <div className="mb-2">
              {message.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex items-center p-2 mb-2 bg-white rounded-md border border-gray-200 "
                >
                  <div className="p-2  dark:bg-slate-900 rounded-md">
                    {attachment.type.includes("image/") ? (
                      <FiImage size={16} />
                    ) : (
                      <LuFile size={16} />
                    )}
                  </div>
                  <div className="ml-2 flex-1 max-w-[330px]">
                    <span className="text-xs break-words font-medium">
                      {attachment.name}
                    </span>
                    <p className="text-xs ">
                      {formatFileSize(attachment.size)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {message.text}
        </div>
        <div
          className={`${
            message.sender === "me" ? "text-right" : "text-left"
          } mt-1 text-xs `}
        >
          {message.timestamp}
        </div>
      </div>
      {message.sender === "me" && (
        <img
          src={message.senderProfile?.avatar}
          alt={message.senderProfile?.name}
          className="w-8 h-8 rounded-full"
        />
      )}

      {/* Reaction Display */}
      {message.reaction && (
        <span
          title={message.reaction}
          onClick={() => toggleReactionMenu(message.id)}
          className="bg-white absolute -right-2 bottom-2 rounded-full min-h-[25px] min-w-[25px] flex items-center cursor-pointer justify-center shadow-md shadow-gray-100 dark:bg-slate-700 dark:shadow-slate-800"
        >
          {message.reaction === "love" && <LuHeart size={12} fill="red" color="red" />}
          {message.reaction === "like" && <LuThumbsUp size={12} fill="blue" color="blue" />}
          {message.reaction === "smile" && <FaRegSmile size={12} fill="gold" color="gold" />}
        </span>
      )}

      {/* Reaction Menu */}
      {message.sender === "other" && !message.reaction && (
        <button
          onClick={() => toggleReactionMenu(message.id)}
          className="absolute bottom-2 -right-2 bg-gray-100 rounded-full p-1 shadow-sm hover:bg-gray-200 dark:bg-slate-700 dark:text-[#d2e5f5] dark:hover:bg-slate-800 transition-colors"
        >
          <FaRegSmile size={14} />
        </button>
      )}

      <AnimatePresence>
        {reactingTo === message.id && (
          <motion.div
            variants={reactionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute z-30 -bottom-6 right-0 bg-white rounded-full p-1 flex border border-border dark:bg-slate-800 dark:border-slate-700 shadow-lg"
          >
            {(["love", "like", "smile"] as const).map((reaction) => (
              <button
                key={reaction}
                onClick={() => handleReaction(message.id, reaction)}
                className="min-w-[25px] min-h-[25px] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-900 rounded-full"
              >
                {reaction === "love" && <LuHeart size={15} color={message.reaction === "love" ? "red" : "gray"} />}
                {reaction === "like" && <LuThumbsUp size={15} color={message.reaction === "like" ? "blue" : "gray"} />}
                {reaction === "smile" && <FaRegSmile size={15} color={message.reaction === "smile" ? "gold" : "gray"} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
);

// ------------------ ATTACHMENT PREVIEW ------------------
const AttachmentPreview: React.FC<{
  attachment: Attachment;
  onRemove: (id: string) => void;
  formatFileSize: (bytes: number) => string;
}> = ({ attachment, onRemove, formatFileSize }) => (
  <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-200 max-w-xs">
    {attachment.type.includes("image/") ? (
      <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
        <FiImage size={20} className="text-gray-400" />
      </div>
    ) : (
      <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
        <LuFile size={20} className="text-gray-400" />
      </div>
    )}
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium truncate">{attachment.name}</p>
      <p className="text-xs text-gray-500">{formatFileSize(attachment.size)}</p>
    </div>
    <button
      onClick={() => onRemove(attachment.id)}
      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
    >
      <LuX size={16} className="text-gray-400" />
    </button>
  </div>
);

// ------------------ MAIN INBOX ------------------
const MessageInbox: React.FC<MessageInboxProps> = ({ selectedConversation, onBack }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [reactingTo, setReactingTo] = useState<number | null>(null);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showSentToast, setShowSentToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // Animation variants
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (message: ChatMessage) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: message.sender === "me" ? 0.1 : 0.2,
        duration: 0.3,
      },
    }),
    exit: { opacity: 0, y: -20 },
  };

  const reactionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.15 },
    },
  };

  // Mock Fetch
  const fetchMessages = async (conversationId: number): Promise<ChatMessage[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            text: "Hey there! How's it going?",
            sender: "other",
            senderProfile: {
              name: selectedConversation?.name || "User",
              avatar: selectedConversation?.avatar || "https://i.pravatar.cc/40?img=3",
            },
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            reaction: null,
            attachments: [],
          },
        ]);
      }, 600);
    });
  };

  useEffect(() => {
    if (selectedConversation) {
      setIsLoading(true);
      fetchMessages(selectedConversation.id)
        .then((data) => setMessages(data))
        .finally(() => setIsLoading(false));
    }
  }, [selectedConversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // File handling functions
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>, isCamera: boolean = false) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const newAttachments: Attachment[] = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
      file: file,
    }));

    setAttachments(prev => [...prev, ...newAttachments]);
    
    // Reset input value to allow selecting same file again
    event.target.value = '';
  };

  const handleRemoveAttachment = (id: string) => {
    setAttachments(prev => prev.filter(att => att.id !== id));
  };

  const handleCameraClick = () => {
    cameraInputRef.current?.click();
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() && attachments.length === 0) return;

    setIsUploading(true);

    // Simulate file upload delay
    if (attachments.length > 0) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    const message: ChatMessage = {
      id: Date.now(),
      text: newMessage,
      sender: "me",
      senderProfile: { name: "You", avatar: "https://i.pravatar.cc/40?img=1" },
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      reaction: null,
      attachments: [...attachments], // Copy attachments
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage("");
    setAttachments([]);
    setIsUploading(false);
    
    // Show sent confirmation
    setShowSentToast(true);
    setTimeout(() => setShowSentToast(false), 3000);

    // Focus back to input
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  };

  return (
    <div className="rounded-3xl p-4 bg-[#FBFBFB] h-full flex flex-col">
      {/* Hidden file inputs */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        multiple
        accept="*/*"
        className="hidden"
      />
      <input
        type="file"
        ref={cameraInputRef}
        onChange={(e) => handleFileSelect(e, true)}
        accept="image/*"
        capture="environment"
        className="hidden"
      />

      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="md:hidden mr-2 p-1 rounded-full hover:bg-gray-100">
            ←
          </button>
          <img
            src={selectedConversation?.avatar || "https://i.pravatar.cc/40?img=3"}
            alt="user"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-lg">{selectedConversation?.name || "Select a conversation"}</h2>
            <p className="text-sm text-gray-700">user@example.com</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto custom-scroll mb-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Loader className="animate-spin" size={24} />
          </div>
        ) : (
          <AnimatePresence>
            {messages.map((msg) => (
              <Message
                key={msg.id}
                message={msg}
                reactingTo={reactingTo}
                toggleReactionMenu={(id) => setReactingTo(reactingTo === id ? null : id)}
                handleReaction={(id, reaction) => {
                  setMessages((prev) =>
                    prev.map((m) => (m.id === id ? { ...m, reaction: m.reaction === reaction ? null : reaction } : m))
                  );
                }}
                messageVariants={messageVariants}
                reactionVariants={reactionVariants}
                formatFileSize={formatFileSize}
              />
            ))}
            <div ref={messagesEndRef} />
          </AnimatePresence>
        )}
      </div>

      {/* Attachment Previews */}
      {attachments.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2 max-h-32 overflow-y-auto">
          {attachments.map((attachment) => (
            <AttachmentPreview
              key={attachment.id}
              attachment={attachment}
              onRemove={handleRemoveAttachment}
              formatFileSize={formatFileSize}
            />
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="flex items-center gap-2 border-t pt-3">
        <div className="flex items-center gap-2">
          {/* Camera Icon */}
          <button
            onClick={handleCameraClick}
            disabled={isUploading}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Take photo"
          >
            <CameraIcon />
          </button>
          
          {/* Attach Icon */}
          <button
            onClick={handleAttachClick}
            disabled={isUploading}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Attach files"
          >
            <AttachIcon />
          </button>
        </div>

        <div className="flex-1 flex flex-col">
          <input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            disabled={isUploading}
            className="flex-1 p-3 border rounded-2xl border-[#1E4841] focus:outline-none disabled:opacity-50"
          />
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }} 
          onClick={handleSendMessage}
          disabled={(!newMessage.trim() && attachments.length === 0) || isUploading}
          className="p-3 bg-[#1E4841] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[44px] min-h-[44px] justify-center"
        >
          {isUploading ? (
            <Loader size={18} className="animate-spin" />
          ) : (
            <LuSend size={18} />
          )}
        </motion.button>
      </div>

      {/* Sent Confirmation Toast */}
      <AnimatePresence>
        {showSentToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
          >
            <CheckCircle2 size={20} />
            <span className="font-medium">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MessageInbox;