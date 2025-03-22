
import React, { useState } from 'react';
import Card from './ui-custom/Card';
import Button from './ui-custom/Button';

type Message = {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I'm Nova, your AI assistant. How can I help you today?",
      timestamp: new Date(Date.now() - 120000),
    },
    {
      id: '2',
      sender: 'user',
      text: 'Can you schedule a team meeting for tomorrow at 2 PM?',
      timestamp: new Date(Date.now() - 60000),
    },
    {
      id: '3',
      sender: 'ai',
      text: "I've scheduled a team meeting for tomorrow at 2:00 PM. I've sent calendar invites to all team members. Would you like me to prepare an agenda as well?",
      timestamp: new Date(Date.now() - 30000),
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "I'll take care of that for you right away. Is there anything specific you'd like me to focus on when handling this task?",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-6">Experience Your AI Assistant</h2>
          <p className="text-lg text-muted-foreground">
            Preview how your AI assistant will interact with users. Feel free to ask questions or request tasks to see how it responds.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card variant="glass" className="shadow-xl overflow-hidden border border-white/20 backdrop-blur-md">
            <div className="bg-muted/30 border-b border-border p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-semibold">N</span>
                </div>
                <div>
                  <h3 className="font-medium">Nova</h3>
                  <span className="text-xs text-muted-foreground">Futuristic AI Assistant</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                  <span className="sr-only">Options</span>
                </Button>
              </div>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white rounded-tr-none'
                        : 'bg-muted rounded-tl-none'
                    }`}
                  >
                    <p className="mb-1">{message.text}</p>
                    <span className={`text-xs ${message.sender === 'user' ? 'text-blue-100' : 'text-muted-foreground'}`}>
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="h-10 px-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                  <span className="sr-only">Voice Input</span>
                </Button>

                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-muted/50 border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/10"
                />

                <Button onClick={handleSendMessage} className="h-10 px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
