
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Books Section */}
        <FeaturedBooks />
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-vault-50">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold">How ReadVault Works</h2>
              <p className="mt-4 text-muted-foreground">
                Experience a modern, seamless library management system designed for simplicity and efficiency.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Browse Books</h3>
                <p className="text-muted-foreground mb-6">
                  Explore our extensive collection of books across various genres, authors, and topics.
                </p>
                <Link to="/books">
                  <Button variant="link" className="text-primary flex items-center">
                    Start Browsing <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Become a Member</h3>
                <p className="text-muted-foreground mb-6">
                  Sign up to get access to borrowing privileges, personalized recommendations, and more.
                </p>
                <Link to="/register">
                  <Button variant="link" className="text-primary flex items-center">
                    Join Now <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Borrow & Return</h3>
                <p className="text-muted-foreground mb-6">
                  Borrow books with a simple process and return them when you're done. Track everything online.
                </p>
                <Link to="/how-it-works">
                  <Button variant="link" className="text-primary flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold">What Our Members Say</h2>
              <p className="mt-4 text-muted-foreground">
                ReadVault has transformed how our members discover and enjoy books.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-vault-50 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center space-x-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground italic mb-6">
                  "ReadVault has completely transformed my reading habits. The interface is intuitive, and I've discovered so many new authors."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-vault-200 flex items-center justify-center">
                    <span className="text-vault-600 font-medium">SC</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Connor</p>
                    <p className="text-sm text-muted-foreground">Member since 2022</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-vault-50 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center space-x-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground italic mb-6">
                  "As a busy professional, I love how easy it is to browse, borrow, and manage my reading list. The UI is simply beautiful!"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-vault-200 flex items-center justify-center">
                    <span className="text-vault-600 font-medium">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">James Donovan</p>
                    <p className="text-sm text-muted-foreground">Member since 2021</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-vault-50 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center space-x-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground italic mb-6">
                  "The recommendation system is spot-on! I've found books I never would have discovered otherwise. ReadVault is a game-changer."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-vault-200 flex items-center justify-center">
                    <span className="text-vault-600 font-medium">EL</span>
                  </div>
                  <div>
                    <p className="font-medium">Elena Liu</p>
                    <p className="text-sm text-muted-foreground">Member since 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to start your reading journey?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of readers who have already discovered the joy of ReadVault's modern library experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/register">
                  <Button size="lg" variant="secondary" className="rounded-full px-8">
                    Join ReadVault
                  </Button>
                </Link>
                <Link to="/books">
                  <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10">
                    Explore Books
                  </Button>
                </Link>
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
