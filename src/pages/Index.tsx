
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CharacterSelection from '@/components/CharacterSelection';
import CustomizationPanel from '@/components/CustomizationPanel';
import ChatInterface from '@/components/ChatInterface';
import Button from '@/components/ui-custom/Button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <CharacterSelection />
        <CustomizationPanel />
        <ChatInterface />
        
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-radial from-blue-400/5 to-transparent"></div>
          </div>
          
          <div className="section-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2 mb-6">Ready to Create Your AI Assistant?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of users who are already automating tasks and enhancing productivity with their personalized AI assistants.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="animate-pulse-light">
                  Get Started for Free
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
