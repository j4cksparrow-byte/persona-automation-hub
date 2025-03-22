
import React from 'react';
import Button from './ui-custom/Button';
import Card from './ui-custom/Card';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-gradient-radial from-blue-400/10 to-transparent"></div>
      </div>
      
      <div className="section-container">
        <div className="relative z-10 flex flex-col items-center">
          {/* Small badge */}
          <div className="fade-in-delay-1 inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-3 py-1 text-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
            <span className="text-muted-foreground">Introducing Persona AI</span>
          </div>
          
          {/* Heading */}
          <h1 className="fade-in-delay-2 heading-1 text-center max-w-5xl mb-6">
            Create <span className="text-gradient">AI assistants</span> with unique personalities that work for you
          </h1>
          
          {/* Subheading */}
          <p className="fade-in-delay-3 text-xl text-muted-foreground text-center max-w-3xl mb-10">
            Design AI agents that automate tasks while expressing themselves through customizable characters, voices, and personalities—no coding required.
          </p>
          
          {/* CTA Buttons */}
          <div className="fade-in-delay-4 flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Explore Characters
            </Button>
          </div>
          
          {/* Hero Image/Preview */}
          <div className="fade-in-delay-5 w-full max-w-5xl relative">
            <Card variant="glass" className="relative z-10 shadow-xl rounded-2xl overflow-hidden border border-white/20">
              <div className="aspect-[16/9] bg-gradient-to-b from-blue-50 to-white relative">
                {/* Interface Mockup would go here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-4xl px-6">
                    <div className="border border-border rounded-xl overflow-hidden shadow-lg bg-white">
                      <div className="border-b border-border bg-muted/50 px-4 py-2 flex items-center">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs text-muted-foreground mx-auto">Persona AI Builder</div>
                      </div>
                      
                      <div className="flex">
                        {/* Sidebar */}
                        <div className="w-1/4 border-r border-border p-4 bg-secondary/50">
                          <div className="space-y-2">
                            <div className="h-10 bg-muted rounded-md"></div>
                            <div className="h-10 bg-primary/10 rounded-md"></div>
                            <div className="h-10 bg-muted rounded-md"></div>
                            <div className="h-10 bg-muted rounded-md"></div>
                          </div>
                        </div>
                        
                        {/* Main content */}
                        <div className="w-3/4 p-4">
                          <div className="space-y-4">
                            <div className="h-16 bg-muted/50 rounded-md"></div>
                            <div className="flex gap-4">
                              <div className="w-1/3 aspect-square bg-blue-100 rounded-md flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-blue-200"></div>
                              </div>
                              <div className="w-1/3 aspect-square bg-violet-100 rounded-md flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-violet-200"></div>
                              </div>
                              <div className="w-1/3 aspect-square bg-emerald-100 rounded-md flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-emerald-200"></div>
                              </div>
                            </div>
                            <div className="h-32 bg-muted/50 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-blue-400/30 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-violet-400/20 blur-3xl"></div>
          </div>
          
          {/* Brands/Trust indicators */}
          <div className="mt-16 w-full">
            <p className="text-sm text-muted-foreground text-center mb-6">Trusted by innovative teams worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="h-8 w-24 bg-muted rounded"></div>
              <div className="h-8 w-28 bg-muted rounded"></div>
              <div className="h-8 w-20 bg-muted rounded"></div>
              <div className="h-8 w-32 bg-muted rounded"></div>
              <div className="h-8 w-24 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
