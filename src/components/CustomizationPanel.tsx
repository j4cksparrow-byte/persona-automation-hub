
import React, { useState } from 'react';
import Card from './ui-custom/Card';
import Button from './ui-custom/Button';

const CustomizationPanel = () => {
  const [personalityTraits, setPersonalityTraits] = useState({
    formal: 50,
    friendly: 50,
    detailed: 50,
    concise: 50,
    serious: 50,
    playful: 50,
  });

  const [selectedVoice, setSelectedVoice] = useState('voice-2');

  const handleTraitChange = (trait: string, value: number) => {
    setPersonalityTraits((prev) => ({
      ...prev,
      [trait]: value,
    }));
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-6">Customize Your AI Assistant</h2>
          <p className="text-lg text-muted-foreground">
            Fine-tune your AI's personality traits and voice to create a truly unique assistant that aligns perfectly with your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personality Traits Sliders */}
          <Card variant="glass" className="p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Personality Traits</h3>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Formal</span>
                  <span>Casual</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={personalityTraits.formal}
                  onChange={(e) => handleTraitChange('formal', parseInt(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Friendly</span>
                  <span>Professional</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={personalityTraits.friendly}
                  onChange={(e) => handleTraitChange('friendly', parseInt(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Detailed</span>
                  <span>Concise</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={personalityTraits.detailed}
                  onChange={(e) => handleTraitChange('detailed', parseInt(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Serious</span>
                  <span>Playful</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={personalityTraits.serious}
                  onChange={(e) => handleTraitChange('serious', parseInt(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </Card>

          {/* Voice Selection */}
          <Card variant="glass" className="p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Voice Selection</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card
                variant={selectedVoice === 'voice-1' ? 'elevated' : 'outlined'}
                className={`p-4 cursor-pointer transition-all ${
                  selectedVoice === 'voice-1' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedVoice('voice-1')}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" y1="19" x2="12" y2="23"></line>
                      <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Clara</h4>
                    <p className="text-sm text-muted-foreground">Calm & Professional</p>
                  </div>
                </div>
              </Card>

              <Card
                variant={selectedVoice === 'voice-2' ? 'elevated' : 'outlined'}
                className={`p-4 cursor-pointer transition-all ${
                  selectedVoice === 'voice-2' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedVoice('voice-2')}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" y1="19" x2="12" y2="23"></line>
                      <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Marcus</h4>
                    <p className="text-sm text-muted-foreground">Deep & Authoritative</p>
                  </div>
                </div>
              </Card>

              <Card
                variant={selectedVoice === 'voice-3' ? 'elevated' : 'outlined'}
                className={`p-4 cursor-pointer transition-all ${
                  selectedVoice === 'voice-3' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedVoice('voice-3')}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" y1="19" x2="12" y2="23"></line>
                      <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Lily</h4>
                    <p className="text-sm text-muted-foreground">Cheerful & Energetic</p>
                  </div>
                </div>
              </Card>

              <Card
                variant={selectedVoice === 'voice-4' ? 'elevated' : 'outlined'}
                className={`p-4 cursor-pointer transition-all ${
                  selectedVoice === 'voice-4' ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedVoice('voice-4')}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" y1="19" x2="12" y2="23"></line>
                      <line x1="8" y1="23" x2="16" y2="23"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Alex</h4>
                    <p className="text-sm text-muted-foreground">Neutral & Clear</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="border-t border-border pt-4">
              <h4 className="font-medium mb-4">Voice Preview</h4>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  Play Sample
                </Button>
                <span className="text-sm text-muted-foreground">0:15 sample</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg">Save Customizations</Button>
        </div>
      </div>
    </section>
  );
};

export default CustomizationPanel;
