"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageSquare } from "lucide-react";
import { knowledgeBase } from "@/data/chatbotKnowledge";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Hi, I’m Aggent Assist. What’s your name?",
  },
];

type EscalationState = "awaitName" | "default" | "escalating" | "awaitPhone";

function resolveAnswer(query: string) {
  const normalized = query.toLowerCase();
  const entry = knowledgeBase.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword)),
  );

  return entry?.answer;
}

export function SiteChatWidget() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [escalationState, setEscalationState] = useState<EscalationState>("awaitName");
  const [, setUserName] = useState<string | null>(null);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const escalationTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      containerRef.current?.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isOpen]);

  useEffect(
    () => () => {
      if (escalationTimer.current) {
        clearTimeout(escalationTimer.current);
      }
    },
    [],
  );

  const clearEscalationTimer = () => {
    if (escalationTimer.current) {
      clearTimeout(escalationTimer.current);
      escalationTimer.current = null;
    }
  };

  const resetEscalation = () => {
    clearEscalationTimer();
    setEscalationState("default");
    setFailedAttempts(0);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");

    if (escalationState === "awaitName") {
      const sanitized = trimmed.replace(/[^a-zA-Z\s]/g, "").trim();
      if (!sanitized) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Could you share your name so I can assist you better?",
          },
        ]);
        return;
      }

      const formatted =
        sanitized
          .split(/\s+/)
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
          .join(" ") || sanitized;

      setUserName(formatted);
      setEscalationState("default");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Lovely to meet you, ${formatted}! Ask me about Aggent or any property and I’ll guide you.`,
        },
      ]);
      return;
    }

    if (escalationState === "awaitPhone") {
      const digitsOnly = trimmed.replace(/\D/g, "");
      if (digitsOnly.length === 10) {
        resetEscalation();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Perfect, thank you! Our senior advisor will reach out to you shortly. Feel free to continue browsing or ask for anything else.",
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I just need a 10-digit contact number without spaces. Could you re-enter it?",
          },
        ]);
      }
      return;
    }

    if (escalationState === "escalating") {
      // Ignore additional questions during the wait—kindly remind the user.
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Thanks for your patience. I’ll be with you in just a moment while I reach the team.",
        },
      ]);
      return;
    }

    const answer = resolveAnswer(trimmed);

    if (answer) {
      setFailedAttempts(0);
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
      }, 250);
      return;
    }

    const attempts = failedAttempts + 1;
    setFailedAttempts(attempts);

    if (attempts < 3) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I’m still learning that. Could you refine the question or mention a specific property? (Try again ✦)",
        },
      ]);
      return;
    }

    setFailedAttempts(0);

    // Escalation flow
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "Let me loop in a senior Aggent advisor for this.\n\n[ ⏳ Connecting you to a specialist… ]",
      },
    ]);
    setEscalationState("escalating");

    clearEscalationTimer();
    escalationTimer.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Thanks for waiting! Our advisors are currently assisting other clients. Share a 10-digit contact number and we’ll ring you back ASAP.",
        },
      ]);
      setEscalationState("awaitPhone");
      setFailedAttempts(0);
      escalationTimer.current = null;
    }, 12000);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setTimeout(() => {
        containerRef.current?.scrollTo({
          top: containerRef.current?.scrollHeight ?? 0,
          behavior: "smooth",
        });
      }, 200);
    }
  };

  const isWaitingForAdvisor = escalationState === "escalating";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {isOpen && (
        <div className="flex h-[420px] w-[320px] flex-col rounded-3xl border border-white/10 bg-[#05070d]/95 shadow-[0_18px_60px_rgba(1,198,234,0.3)] backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
                Aggent Assist
              </p>
              <p className="text-[11px] text-slate-300">Instant answers about our advisory</p>
            </div>
            <button
              type="button"
              onClick={toggle}
              className="rounded-full border border-white/20 px-2 py-1 text-xs uppercase tracking-[0.3em] text-slate-200 transition hover:border-white/40"
            >
              Close
            </button>
          </div>
          <div
            ref={containerRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm leading-relaxed"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "assistant"
                    ? "max-w-[90%] rounded-2xl bg-white/5 px-4 py-3 text-slate-100"
                    : "ml-auto max-w-[85%] rounded-2xl bg-[#01c6ea] px-4 py-3 text-[#020617]"
                }
              >
                {message.content}
              </div>
            ))}
            {isWaitingForAdvisor && (
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs uppercase tracking-[0.3em] text-slate-300">
                <div className="mb-2 flex items-center justify-center gap-2 text-[#01c6ea]">
                  <span className="h-2 w-2 animate-ping rounded-full bg-[#01c6ea]" />
                  <span className="h-2 w-2 animate-ping rounded-full bg-[#01c6ea] delay-150" />
                  <span className="h-2 w-2 animate-ping rounded-full bg-[#01c6ea] delay-300" />
                </div>
                Connecting you with an Aggent specialist…
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="border-t border-white/10 p-3">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask your question..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#01c6ea] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#020617] transition hover:bg-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
      <button
        type="button"
        onClick={toggle}
        className="flex items-center gap-2 rounded-full bg-[#01c6ea] px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#020617] shadow-[0_16px_40px_rgba(1,198,234,0.35)] transition hover:bg-white"
      >
        <MessageSquare className="h-4 w-4" />
        Chat
      </button>
    </div>
  );
}

