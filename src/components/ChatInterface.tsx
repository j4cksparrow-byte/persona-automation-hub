
import React, { useState, useEffect, useRef } from 'react';
import Card from './ui-custom/Card';
import Button from './ui-custom/Button';
import { generateLlama2Response, initLlama2Model, isLlama2ModelLoaded } from '../services/llama2Service';

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
      text: "Hello! I'm Nova, your AI assistant powered by Llama 2. How can I help you today?",
      timestamp: new Date(Date.now() - 120000),
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modelStatus, setModelStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize the model on component mount
  useEffect(() => {
    const loadModel = async () => {
      try {
        setModelStatus('loading');
        await initLlama2Model();
        setModelStatus('ready');
      } catch (error) {
        console.error("Failed to load model:", error);
        setModelStatus('error');
      }
    };
    
    loadModel();
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Generate response using Llama 2
      const aiResponse = await generateLlama2Response(inputValue);
      
      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error generating AI response:", error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "I'm sorry, I encountered an error processing your request. Please try again.",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
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
            Preview how your AI assistant will interact with users. This demo uses Meta's Llama 2 model running directly in your browser.
          </p>
          {modelStatus === 'loading' && (
            <div className="mt-4 p-2 bg-blue-100 text-blue-800 rounded-md">
              Loading Llama 2 model... This may take a moment.
            </div>
          )}
          {modelStatus === 'error' && (
            <div className="mt-4 p-2 bg-red-100 text-red-800 rounded-md">
              Failed to load Llama 2 model. Please try refreshing the page.
            </div>
          )}
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
                  <span className="text-xs text-muted-foreground">
                    Powered by Meta Llama 2
                    {isLlama2ModelLoaded() ? (
                      <span className="ml-1 text-green-500">●</span>
                    ) : (
                      <span className="ml-1 text-amber-500">○</span>
                    )}
                  </span>
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
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-muted rounded-tl-none">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-border p-4">
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-10 px-3"
                  disabled={!isLlama2ModelLoaded() || isLoading}
                >
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
                  placeholder={isLlama2ModelLoaded() ? "Type your message..." : "Loading Llama 2 model..."}
                  className="flex-1 bg-muted/50 border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/10"
                  disabled={!isLlama2ModelLoaded() || isLoading}
                />

                <Button 
                  onClick={handleSendMessage} 
                  className="h-10 px-4"
                  disabled={!isLlama2ModelLoaded() || isLoading || !inputValue.trim()}
                >
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
