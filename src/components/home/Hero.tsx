
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#f9fafc]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-72 bg-white/50 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className={`space-y-5 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block animate-fade-in">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <BookOpen className="mr-1 h-3.5 w-3.5" />
                Your Digital Library
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-fade-in">
              Discover, Borrow, 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"> Learn</span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl max-w-lg animate-fade-in delay-100">
              Your personal gateway to a world of knowledge. Explore our vast collection of books, articles, and resources.
            </p>
          </div>
          
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Search Bar */}
            <div className="max-w-xl">
              <SearchBar />
            </div>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/books">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 shadow-md hover:shadow-lg transition-all"
                >
                  Explore Books
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/register">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8"
                >
                  Join ReadVault
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-primary">10K+</span>
                <span className="text-sm text-muted-foreground">Books</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-primary">5K+</span>
                <span className="text-sm text-muted-foreground">Members</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-primary">1.2M+</span>
                <span className="text-sm text-muted-foreground">Borrowed</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center animate-pulse-gentle">
              <div className="text-primary">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center animate-pulse-gentle">
              <div className="text-primary">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
            </div>
            
            <div className="relative bg-white overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
                alt="ReadVault Library" 
                className="w-full h-[500px] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-xl font-medium">Modern Library Experience</h3>
                <p className="text-white/80 text-sm mt-2">
                  Discover a revolutionary way to explore literature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
