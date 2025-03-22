
import React, { useState } from 'react';
import Card from './ui-custom/Card';
import Button from './ui-custom/Button';

type Character = {
  id: string;
  name: string;
  role: string;
  description: string;
  personality: string[];
  imagePlaceholder: string;
  primaryColor: string;
};

const CharacterSelection = () => {
  const characters: Character[] = [
    {
      id: 'future-robot',
      name: 'Nova',
      role: 'Futuristic AI',
      description: 'An advanced synthetic intelligence from the future, precise and efficient.',
      personality: ['Analytical', 'Efficient', 'Forward-thinking'],
      imagePlaceholder: 'bg-blue-100',
      primaryColor: 'bg-blue-500'
    },
    {
      id: 'wise-professor',
      name: 'Professor Sage',
      role: 'Knowledge Expert',
      description: 'A scholarly mentor with vast knowledge and thoughtful perspectives.',
      personality: ['Wise', 'Patient', 'Thorough'],
      imagePlaceholder: 'bg-emerald-100',
      primaryColor: 'bg-emerald-500'
    },
    {
      id: 'anime-assistant',
      name: 'Miko',
      role: 'Cheerful Helper',
      description: 'An enthusiastic and energetic assistant with a vibrant personality.',
      personality: ['Enthusiastic', 'Creative', 'Supportive'],
      imagePlaceholder: 'bg-pink-100',
      primaryColor: 'bg-pink-500'
    },
    {
      id: 'medieval-scribe',
      name: 'Scribe Eldrid',
      role: 'Meticulous Recordkeeper',
      description: 'A detail-oriented chronicler who preserves knowledge with formal eloquence.',
      personality: ['Formal', 'Detail-oriented', 'Eloquent'],
      imagePlaceholder: 'bg-amber-100',
      primaryColor: 'bg-amber-500'
    },
    {
      id: 'cyberpunk-hacker',
      name: 'Cipher',
      role: 'Tech Specialist',
      description: 'A street-smart digital specialist navigating complex systems with ease.',
      personality: ['Resourceful', 'Direct', 'Tech-savvy'],
      imagePlaceholder: 'bg-violet-100',
      primaryColor: 'bg-violet-500'
    }
  ];

  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  return (
    <section id="characters" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-2 mb-6">Choose Your AI's Character</h2>
          <p className="text-lg text-muted-foreground">
            Select a unique character that reflects your brand and resonates with your audience.
            Each character comes with distinct personality traits and communication styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {characters.map((character) => (
            <Card
              key={character.id}
              variant={selectedCharacter === character.id ? 'elevated' : 'default'}
              className={`overflow-hidden transition-all duration-300 ${
                selectedCharacter === character.id ? 'ring-2 ring-primary' : 'hover:shadow-md'
              }`}
              isInteractive
              onClick={() => setSelectedCharacter(character.id)}
            >
              <div className={`aspect-square ${character.imagePlaceholder} flex items-center justify-center`}>
                <div className={`w-24 h-24 rounded-full ${character.primaryColor} opacity-70 flex items-center justify-center`}>
                  <span className="text-white text-2xl font-bold">{character.name.charAt(0)}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{character.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{character.role}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {character.personality.map((trait, index) => (
                    <span 
                      key={index} 
                      className="inline-flex text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            size="lg" 
            disabled={!selectedCharacter}
            className="animate-pulse-light"
          >
            Customize Your Character
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CharacterSelection;
