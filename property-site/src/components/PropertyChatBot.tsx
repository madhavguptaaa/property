"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { properties } from "@/data/properties";

type Message = {
  role: "assistant" | "user";
  content: string;
};

type ConversationStage =
  | "collect-location"
  | "collect-budget"
  | "collect-bedroom"
  | "collect-type"
  | "recommend"
  | "await-connect"
  | "complete";

interface Preferences {
  location?: string;
  budgetCr?: number;
  bedrooms?: number;
  type?: string;
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content:
      "Hi! I’m the Aggent concierge. I can help you shortlist properties from our portfolio. Where would you like to search today?",
  },
];

function parseBudgetCr(input: string): number | undefined {
  const match = input.replace(/,/g, "").match(/(\d+(\.\d+)?)/);
  if (!match) {
    return undefined;
  }
  const value = Number(match[1]);
  if (Number.isNaN(value)) {
    return undefined;
  }
  if (input.toLowerCase().includes("lakh")) {
    return Number((value / 100).toFixed(2));
  }
  return value;
}

function parseBedrooms(input: string): number | undefined {
  const match = input.match(/(\d+)/);
  if (!match) {
    return undefined;
  }
  return Number(match[1]);
}

function getPropertyByNameOrId(message: string) {
  const normalized = message.toLowerCase();
  return properties.find(
    (property) =>
      normalized.includes(property.name.toLowerCase()) ||
      normalized.includes(property.id.toLowerCase()),
  );
}

function shortlistProperties(preferences: Preferences) {
  return properties
    .filter((property) => {
      const matchesLocation = preferences.location
        ? (property.location + property.city)
            .toLowerCase()
            .includes(preferences.location.toLowerCase())
        : true;
      const matchesBudget =
        preferences.budgetCr != null ? property.priceCr <= preferences.budgetCr + 0.25 : true;
      const matchesBedrooms =
        preferences.bedrooms != null ? property.bedrooms >= preferences.bedrooms : true;
      const matchesType = preferences.type
        ? property.type.toLowerCase().includes(preferences.type.toLowerCase())
        : true;

      return matchesLocation && matchesBudget && matchesBedrooms && matchesType;
    })
    .slice(0, 3);
}

export function PropertyChatBot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [preferences, setPreferences] = useState<Preferences>({});
  const [stage, setStage] = useState<ConversationStage>("collect-location");
  const [isThinking, setIsThinking] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isThinking]);

  const summary = useMemo(() => {
    const parts: string[] = [];
    if (preferences.location) {
      parts.push(`Location: ${preferences.location}`);
    }
    if (preferences.budgetCr) {
      parts.push(`Budget: up to ₹${preferences.budgetCr} Cr`);
    }
    if (preferences.bedrooms) {
      parts.push(`Bedrooms: ${preferences.bedrooms}+`);
    }
    if (preferences.type) {
      parts.push(`Type: ${preferences.type}`);
    }
    return parts.join(" · ");
  }, [preferences]);

  const pushAssistantMessage = (content: string) => {
    setMessages((prev) => [...prev, { role: "assistant", content }]);
  };

  const resetConversation = () => {
    setPreferences({});
    setStage("collect-location");
    setMessages(initialMessages);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setIsThinking(true);

    setTimeout(() => {
      processUserMessage(trimmed);
      setIsThinking(false);
    }, 400);
  };

  const processUserMessage = (message: string) => {
    const normalized = message.toLowerCase();
    if (normalized.includes("reset") || normalized.includes("start over")) {
      resetConversation();
      pushAssistantMessage("No problem, let’s begin again. Which city or neighbourhood interests you?");
      return;
    }

    if (stage === "await-connect") {
      if (normalized.includes("yes")) {
        pushAssistantMessage(
          "Fantastic! I’ll have a senior Aggent advisor reach out with next steps. Expect a call within 24 hours.",
        );
        setStage("complete");
        return;
      }
      if (normalized.includes("no")) {
        pushAssistantMessage(
          "Sure. Feel free to explore more or ask for another shortlist. Say “reset” whenever you want to start over.",
        );
        setStage("complete");
        return;
      }
    }

    const directProperty = getPropertyByNameOrId(message);
    if (directProperty) {
      pushAssistantMessage(
        `Here’s what I have on ${directProperty.name} in ${directProperty.location}, ${directProperty.city}:\n\n• Price: ${directProperty.priceLabel}\n• Layout: ${directProperty.bedrooms} beds · ${directProperty.bathrooms} baths · ${directProperty.areaSqft.toLocaleString()} sq.ft.\n• Highlights: ${directProperty.amenities.slice(0, 3).join(", ")}\n\nReady for a walkthrough? I can connect you with our advisory team.`,
      );
      setStage("await-connect");
      return;
    }

    switch (stage) {
      case "collect-location": {
        setPreferences((prev) => ({ ...prev, location: message }));
        pushAssistantMessage(
          `Great choice! What is your comfortable budget (in ₹ Cr) for ${message}?`,
        );
        setStage("collect-budget");
        break;
      }
      case "collect-budget": {
        const budgetCr = parseBudgetCr(message);
        if (budgetCr == null) {
          pushAssistantMessage(
            "Got it. Could you mention the budget roughly in crores? For example: “3 Cr” or “2.5 Cr”.",
          );
          break;
        }
        setPreferences((prev) => ({ ...prev, budgetCr }));
        pushAssistantMessage("Noted. How many bedrooms do you have in mind?");
        setStage("collect-bedroom");
        break;
      }
      case "collect-bedroom": {
        const bedrooms = parseBedrooms(message);
        if (bedrooms == null) {
          pushAssistantMessage("Could you let me know the number of bedrooms you prefer? e.g. 3 BHK.");
          break;
        }
        setPreferences((prev) => ({ ...prev, bedrooms }));
        pushAssistantMessage(
          "Perfect. Lastly, what property format are you leaning towards? (Apartment, Villa, Penthouse, Office, etc.)",
        );
        setStage("collect-type");
        break;
      }
      case "collect-type": {
        setPreferences((prev) => ({ ...prev, type: message }));
        setStage("recommend");
        provideRecommendations({ ...preferences, type: message });
        break;
      }
      case "recommend":
      case "complete": {
        const potentialLocation = /in\s([a-z\s]+)/i.exec(message);
        if (potentialLocation) {
          const location = potentialLocation[1].trim();
          const updated = { ...preferences, location };
          setPreferences(updated);
          provideRecommendations(updated);
          break;
        }
        provideRecommendations(preferences);
        break;
      }
      default:
        break;
    }
  };

  const provideRecommendations = (prefs: Preferences) => {
    const results = shortlistProperties(prefs);
    if (results.length === 0) {
      pushAssistantMessage(
        "I couldn’t find a perfect match with those filters. Try adjusting the budget or location, or type “reset” to begin again.",
      );
      setStage("collect-location");
      return;
    }

    const lines = results.map(
      (property) =>
        `• ${property.name} (${property.type}) — ${property.priceLabel}\n  ${property.location}, ${property.city}\n  ${property.bedrooms} beds · ${property.areaSqft.toLocaleString()} sq.ft.\n  Highlights: ${property.amenities.slice(0, 2).join(", ")}`,
    );

    pushAssistantMessage(
      `Here are a few Aggent-certified picks based on your preferences:\n\n${lines.join(
        "\n\n",
      )}\n\nWould you like me to connect you with a specialist for these homes?`,
    );
    setStage("await-connect");
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-8 lg:px-10">
      <div className="grid gap-10 rounded-3xl border border-white/10 bg-[#060912]/90 p-6 text-white shadow-[0_24px_80px_rgba(1,198,234,0.25)] md:grid-cols-[1fr_340px] md:p-10">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#01c6ea]">
              Aggent Chat Concierge
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Discover properties conversationally.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Ask about a specific development, share your requirements, or type “reset” to explore a
              new brief. I’ll surface best-fit options and hand you over to our senior advisors when
              you’re ready.
            </p>
          </div>
          {summary && (
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-xs uppercase tracking-[0.3em] text-slate-300">
              Active Brief · {summary}
            </div>
          )}
        </div>

        <div className="flex h-[460px] flex-col rounded-3xl border border-white/10 bg-[#05070d]">
          <div
            ref={containerRef}
            className="flex-1 space-y-4 overflow-y-auto px-5 py-6 text-sm leading-relaxed"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={
                  message.role === "assistant"
                    ? "rounded-2xl bg-white/5 p-4 text-slate-100"
                    : "ml-auto max-w-[85%] rounded-2xl bg-[#01c6ea] p-4 text-[#020617]"
                }
              >
                {message.content.split("\n").map((line, idx) => (
                  <p key={idx} className="whitespace-pre-wrap">
                    {line}
                  </p>
                ))}
              </div>
            ))}
            {isThinking && (
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 text-slate-200">
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#01c6ea]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#01c6ea] delay-100" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#01c6ea] delay-200" />
              </div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about a property or share your requirements..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#01c6ea] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#020617] transition hover:bg-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

