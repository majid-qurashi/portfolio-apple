import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { userConfig } from "../../config/userConfig";
import DraggableWindow from "./DraggableWindow";

type Message = {
  role: "system" | "user" | "assistant";
  content: string;
};

type ChatHistory = {
  messages: Message[];
  input: string;
};

interface MacTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Customize these placeholder messages for the input field
const PLACEHOLDER_MESSAGES = [
  "Type your question...",
  "What are your skills?",
  "Where are you located?",
  "What projects have you worked on?",
];

export default function MacTerminal({ isOpen, onClose }: MacTerminalProps) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const welcomeMessage = `Welcome to My Portfolio

Name: ${userConfig.name}
Role: ${userConfig.role}
Location: ${userConfig.location}

Contact: ${userConfig.contact.email}
GitHub: ${userConfig.social.github}

Ask me anything!
`;

  const systemPrompt = `IMPORTANT: You ARE ${
    userConfig.name
  } themselves. You must always speak in first-person ("I", "my", "me"). Never refer to "${
    userConfig.name
  }" in third-person.
CURRENT DATE: ${formattedDate} - Always use this exact date when discussing the current date/year.

Example responses:
Q: "Where do you live?"
A: "I live in ${userConfig.location}"

Q: "What's your background?"
A: "I'm a ${userConfig.role} with a focus for ${userConfig.roleFocus}"

Q: "How old are you?"
A: "I'm ${userConfig.age} years old"

Core details about me:
- I'm ${userConfig.age} years old
- I live in ${userConfig.location}
- I'm a ${userConfig.role}
- My email is ${userConfig.contact.email}
- I was born in ${userConfig.location}

My technical expertise:
${(userConfig.skills || []).map((skill) => `- ${skill}`).join("\n")}

My education:
- ${JSON.stringify(userConfig.education || [])}

My professional experience:
${(userConfig.experience || [])
  .map(
    (exp) => `- ${exp.title} at ${exp.company}, ${exp.location} (${exp.period})`
  )
  .join("\n")}

My projects:
${(userConfig.projects || [])
  .map((project) => `- ${project.title}: ${project.description}`)
  .join("\n")}

My achievements and competitions:
${(userConfig.competitions || [])
  .map((comp) => `- ${comp.title} (${comp.year}): ${comp.achievement}`)
  .join("\n")}

Response rules:
1. ALWAYS use first-person (I, me, my)
2. Never say "${userConfig.name}" or refer to myself in third-person
3. Keep responses concise and professional
4. Use markdown formatting when appropriate
5. Maintain a friendly, conversational tone

If a question is unrelated to my work or portfolio, say: "That's outside my area of expertise. Feel free to email me at ${
    userConfig.contact.email
  } and we can discuss further!"`;

  const [chatHistory, setChatHistory] = useState<ChatHistory>({
    messages: [{ role: "assistant", content: welcomeMessage }],
    input: "",
  });

  const [isTyping, setIsTyping] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentMessage = PLACEHOLDER_MESSAGES[currentPlaceholderIndex];

    const animatePlaceholder = () => {
      if (isDeleting) {
        if (placeholder.length === 0) {
          setIsDeleting(false);
          setCurrentPlaceholderIndex(
            (prev) => (prev + 1) % PLACEHOLDER_MESSAGES.length
          );
          timeout = setTimeout(animatePlaceholder, 400);
        } else {
          setPlaceholder((prev) => prev.slice(0, -1));
          timeout = setTimeout(animatePlaceholder, 80);
        }
      } else {
        if (placeholder.length === currentMessage.length) {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setPlaceholder(currentMessage.slice(0, placeholder.length + 1));
          timeout = setTimeout(animatePlaceholder, 120);
        }
      }
    };

    timeout = setTimeout(animatePlaceholder, 100);

    return () => clearTimeout(timeout);
  }, [placeholder, isDeleting, currentPlaceholderIndex]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory.messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatHistory((prev) => ({ ...prev, input: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userInput = chatHistory.input.trim();

    if (!userInput || isTyping) return;

    setChatHistory((prev) => ({
      messages: [...prev.messages, { role: "user", content: userInput }],
      input: "",
    }));

    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            ...chatHistory.messages,
            { role: "user", content: userInput },
          ],
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();

      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          { role: "assistant", content: data.message },
        ],
      }));
    } catch (error) {
      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            role: "assistant",
            content: `I'm having trouble processing that. Please email me at ${userConfig.contact.email}`,
          },
        ],
      }));
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <DraggableWindow
      title="majid ⸺ zsh"
      onClose={onClose}
      initialPosition={{
        x: Math.floor(window.innerWidth * 0.1),
        y: Math.floor(window.innerHeight * 0.1),
      }}
      initialSize={{ width: 700, height: 500 }}
      className="overflow-hidden"
    >
      <div 
        className="p-1 font-mono text-sm h-full flex flex-col overflow-hidden transition-colors duration-300"
        style={{ backgroundColor: 'var(--panel-bg)', color: 'var(--text-primary)' }}
      >
        <div className="flex-1 overflow-y-auto rounded-lg p-3">
          {chatHistory.messages.map((msg, index) => (
            <div key={index} className="mb-2">
              {msg.role === "user" ? (
                <div className="flex items-start space-x-2">
                  <span className="text-blue-500 font-bold">{">"}</span>
                  <pre className="whitespace-pre-wrap">{msg.content}</pre>
                </div>
              ) : (
                <div className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold">
                    majid
                  </span>
                  <pre className="whitespace-pre-wrap">{msg.content}</pre>
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-1 p-2">
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form 
          onSubmit={handleSubmit} 
          className="mt-2 border-t p-2"
          style={{ borderColor: 'var(--glass-border)', backgroundColor: 'var(--glass-bg)' }}
        >
          <div className="flex items-center space-x-2">
            <span className="whitespace-nowrap text-green-500 font-bold text-xs sm:text-base">
              majid %
            </span>
            <input
              type="text"
              value={chatHistory.input}
              onChange={handleInputChange}
              style={{ color: 'var(--text-primary)' }}
              className="flex-1 bg-transparent outline-none placeholder-gray-500 text-sm sm:text-base p-1"
              placeholder={placeholder}
              autoFocus
            />
          </div>
        </form>
      </div>
    </DraggableWindow>
  );
}
