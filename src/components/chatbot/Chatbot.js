import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";
import {
  findBestResponse,
  suggestedQuestions,
} from "../../data/chatbotKnowledge";

function formatMessage(text) {
  // Convert **bold** and line breaks
  const lines = text.split("\n");
  return lines.map((line, i) => {
    // Bold
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const formatted = parts.map((part, j) =>
      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
    );
    return (
      <span key={i}>
        {formatted}
        {i < lines.length - 1 && <br />}
      </span>
    );
  });
}

const INITIAL_MESSAGE = {
  id: 1,
  type: "bot",
  text:
    "Hey! 👋 I'm **Monesh's AI assistant**. Ask me anything about his experience, skills, projects, or background. I'm here to help recruiters, hiring managers, and curious minds!",
  timestamp: new Date(),
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const msgIdRef = useRef(2);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 300);
    }
  }, [isOpen]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg = {
      id: msgIdRef.current++,
      type: "user",
      text: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowSuggestions(false);
    setIsTyping(true);

    setTimeout(() => {
      const response = findBestResponse(trimmed);
      const botMsg = {
        id: msgIdRef.current++,
        type: "bot",
        text: response,
        timestamp: new Date(),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 800 + Math.random() * 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleChipClick = (question) => {
    sendMessage(question);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        className={`chatbot-trigger ${isOpen ? "chatbot-trigger--open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Assistant"
      >
        {isOpen ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <circle cx="9" cy="10" r="1" fill="currentColor" />
            <circle cx="12" cy="10" r="1" fill="currentColor" />
            <circle cx="15" cy="10" r="1" fill="currentColor" />
          </svg>
        )}
        {!isOpen && <span className="chatbot-trigger__pulse" />}
      </button>

      {/* Chat Panel */}
      <div className={`chatbot-panel ${isOpen ? "chatbot-panel--open" : ""}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header__info">
            <div className="chatbot-header__avatar">
              <span>MV</span>
              <span className="chatbot-header__status" />
            </div>
            <div>
              <p className="chatbot-header__name">Monesh's AI</p>
              {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
              <p className="chatbot-header__sub">
                Ask me anything{" "}
                <span role="img" aria-label="sparkles">
                  ✨
                </span>
              </p>
            </div>
          </div>
          <button
            className="chatbot-header__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chatbot-message chatbot-message--${msg.type}`}
            >
              {msg.type === "bot" && (
                <div className="chatbot-message__avatar">M</div>
              )}
              <div className="chatbot-message__bubble">
                {formatMessage(msg.text)}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="chatbot-message chatbot-message--bot">
              <div className="chatbot-message__avatar">M</div>
              <div className="chatbot-message__bubble chatbot-message__bubble--typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}

          {/* Suggested chips */}
          {showSuggestions && messages.length === 1 && !isTyping && (
            <div className="chatbot-suggestions">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  className="chatbot-chip"
                  onClick={() => handleChipClick(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form className="chatbot-input-area" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className="chatbot-input"
            type="text"
            placeholder="Ask about Monesh..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            maxLength={300}
            autoComplete="off"
          />
          <button
            className="chatbot-send"
            type="submit"
            disabled={!input.trim() || isTyping}
            aria-label="Send"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
