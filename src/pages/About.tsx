
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Users, Calendar, Award, BookMarked, Library } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About ReadVault</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your personal gateway to a world of knowledge and imagination
            </p>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border hover-lift">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At ReadVault, our mission is to provide accessible, diverse, and engaging literary resources 
                  to our community. We believe in the power of books to educate, inspire, and transform lives, 
                  and we are committed to fostering a love of reading and learning for all.
                </p>
              </div>
              <div className="bg-card rounded-lg p-8 shadow-sm border border-border hover-lift">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We envision ReadVault as a hub of intellectual curiosity and community engagement, 
                  where everyone has equal access to knowledge and information. We strive to be at the 
                  forefront of technological innovation while preserving the timeless value of literature.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What Makes Us Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg text-center hover-lift">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Vast Collection</h3>
                <p className="text-muted-foreground">
                  Access over 50,000 books across diverse genres, from classics to contemporary bestsellers.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg text-center hover-lift">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookMarked className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Borrowing</h3>
                <p className="text-muted-foreground">
                  Our intuitive system makes finding and borrowing books quick and hassle-free.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg text-center hover-lift">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
                <p className="text-muted-foreground">
                  Join reading groups, attend author events, and connect with fellow book lovers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* History Timeline */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey</h2>
            <div className="space-y-12 max-w-3xl mx-auto">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2010 - Foundation</h3>
                  <p className="text-muted-foreground">
                    ReadVault was established with a small collection of 5,000 books and a mission to 
                    promote literacy in our community.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Library className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2015 - Expansion</h3>
                  <p className="text-muted-foreground">
                    We opened three new branches and expanded our collection to over 25,000 books, 
                    serving a wider community.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2020 - Digital Transformation</h3>
                  <p className="text-muted-foreground">
                    Launched our online platform ReadVault, making our resources accessible digitally 
                    while preserving the traditional library experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-foreground">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-card p-6 rounded-lg hover-lift">
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">Library Director</p>
              </div>
              <div className="bg-card p-6 rounded-lg hover-lift">
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">Head Librarian</p>
              </div>
              <div className="bg-card p-6 rounded-lg hover-lift">
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">Priya Patel</h3>
                <p className="text-sm text-muted-foreground">Events Coordinator</p>
              </div>
              <div className="bg-card p-6 rounded-lg hover-lift">
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold">James Wilson</h3>
                <p className="text-sm text-muted-foreground">Technical Manager</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
