
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, BookOpen, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary font-bold text-xl tracking-tight"
        >
          <BookOpen className="h-6 w-6" />
          <span className="hidden sm:inline">READVAULT</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link 
            to="/" 
            className="text-foreground/90 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/books" 
            className="text-foreground/90 hover:text-primary transition-colors"
          >
            Explore Books
          </Link>
          <Link 
            to="/about" 
            className="text-foreground/90 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-foreground/90 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/login">
            <Button className="rounded-full px-6">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg border-t border-border animate-fade-in">
          <div className="container py-4 px-6 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="py-2 text-foreground/90 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/books" 
              className="py-2 text-foreground/90 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore Books
            </Link>
            <Link 
              to="/about" 
              className="py-2 text-foreground/90 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-2 text-foreground/90 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 border-t border-border">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full rounded-full">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
