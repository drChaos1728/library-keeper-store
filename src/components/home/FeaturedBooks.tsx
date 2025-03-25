
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutGrid, List } from "lucide-react";
import BookCard from "@/components/ui/BookCard";

// Mock data for featured books
const FEATURED_BOOKS = [
  {
    id: "1",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
  },
  {
    id: "2",
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
  },
  {
    id: "3",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1531901599143-ab597140e103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: false,
  },
  {
    id: "4",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    coverImage: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
  },
  {
    id: "5",
    title: "The Dutch House",
    author: "Ann Patchett",
    genre: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
  },
  {
    id: "6",
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: false,
  },
];

interface FeaturedBooksProps {
  maxBooks?: number;
}

const FeaturedBooks: React.FC<FeaturedBooksProps> = ({ maxBooks = 6 }) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [animateIn, setAnimateIn] = useState(false);
  
  // For animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("featured-books");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setAnimateIn(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const visibleBooks = FEATURED_BOOKS.slice(0, maxBooks);

  return (
    <section 
      id="featured-books" 
      className="py-16 md:py-24 bg-white"
    >
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-12 transition-all duration-700 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Books</h2>
            <p className="mt-2 text-muted-foreground">Our handpicked selection of must-read books</p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            {/* View Mode Toggles */}
            <div className="flex items-center bg-secondary rounded-full p-1">
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-full ${viewMode === "grid" ? "bg-white shadow-sm" : "text-muted-foreground"}`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-full ${viewMode === "list" ? "bg-white shadow-sm" : "text-muted-foreground"}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
            
            <Link to="/books">
              <Button variant="outline" className="rounded-full">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Books Grid */}
        <div className={`${
          viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6" 
            : "grid grid-cols-1 gap-6"
        }`}>
          {visibleBooks.map((book, index) => (
            <div 
              key={book.id}
              className={`transition-all duration-700 delay-${index * 100} ${
                animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {viewMode === "grid" ? (
                <BookCard {...book} />
              ) : (
                <ListViewBookCard {...book} />
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Link to="/books">
            <Button className="rounded-full px-8">
              View All Books
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// List view variant of the book card
const ListViewBookCard: React.FC<{
  id: string;
  title: string;
  author: string;
  genre: string;
  coverImage: string;
  available?: boolean;
}> = ({ id, title, author, genre, coverImage, available = true }) => {
  return (
    <div className="flex items-center space-x-4 bg-white border border-border rounded-xl p-3 hover:shadow-md transition-shadow">
      {/* Book Cover */}
      <div className="flex-shrink-0 w-16 h-24 bg-secondary rounded-lg overflow-hidden">
        <img 
          src={coverImage} 
          alt={`Cover of ${title}`}
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Book Info */}
      <div className="flex-grow min-w-0">
        <h3 className="font-medium text-foreground truncate">{title}</h3>
        <p className="text-sm text-muted-foreground">by {author}</p>
        <div className="flex items-center mt-1 space-x-2">
          <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
            {genre}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            available 
              ? "bg-green-100 text-green-700" 
              : "bg-amber-100 text-amber-700"
          }`}>
            {available ? "Available" : "Borrowed"}
          </span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex-shrink-0">
        <Link to={`/books/${id}`}>
          <Button variant="ghost" size="sm" className="rounded-full">
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBooks;
