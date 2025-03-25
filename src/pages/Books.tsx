
import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SearchBar from "@/components/ui/SearchBar";
import BookCard from "@/components/ui/BookCard";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown, BookOpen, SlidersHorizontal, X, Check } from "lucide-react";

// Mock data for books
const ALL_BOOKS = [
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
  {
    id: "7",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
  },
  {
    id: "8",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
  },
  {
    id: "9",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
  },
  {
    id: "10",
    title: "The Nightingale",
    author: "Kristin Hannah",
    genre: "Historical Fiction",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: false,
  },
  {
    id: "11",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Self-Help",
    coverImage: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
  },
  {
    id: "12",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classics",
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
  },
];

// Extract all unique genres
const ALL_GENRES = [...new Set(ALL_BOOKS.map(book => book.genre))];

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(ALL_BOOKS);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [availabilityFilter, setAvailabilityFilter] = useState<"all" | "available" | "borrowed">("all");
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    applyFilters(query, selectedGenres, availabilityFilter);
  };
  
  // Toggle genre selection
  const toggleGenre = (genre: string) => {
    const updatedGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter(g => g !== genre)
      : [...selectedGenres, genre];
    
    setSelectedGenres(updatedGenres);
    applyFilters(searchQuery, updatedGenres, availabilityFilter);
  };
  
  // Set availability filter
  const setAvailability = (filter: "all" | "available" | "borrowed") => {
    setAvailabilityFilter(filter);
    applyFilters(searchQuery, selectedGenres, filter);
  };
  
  // Apply all filters
  const applyFilters = (query: string, genres: string[], availability: "all" | "available" | "borrowed") => {
    let result = ALL_BOOKS;
    
    // Apply search query filter
    if (query) {
      const lowerQuery = query.toLowerCase();
      result = result.filter(book => 
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery) ||
        book.genre.toLowerCase().includes(lowerQuery)
      );
    }
    
    // Apply genre filter
    if (genres.length > 0) {
      result = result.filter(book => genres.includes(book.genre));
    }
    
    // Apply availability filter
    if (availability === "available") {
      result = result.filter(book => book.available);
    } else if (availability === "borrowed") {
      result = result.filter(book => !book.available);
    }
    
    setFilteredBooks(result);
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedGenres([]);
    setAvailabilityFilter("all");
    setFilteredBooks(ALL_BOOKS);
  };

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-vault-50 py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Explore Our Book Collection
              </h1>
              <p className="text-muted-foreground mb-8">
                Discover thousands of books across various genres, authors, and topics.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <SearchBar 
                  onSearch={handleSearch}
                  showFilters={true}
                  placeholder="Search by title, author, or genre..."
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Books Section with Filters */}
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar - Desktop */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <div className="bg-vault-50 rounded-xl p-6 sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold">Filters</h3>
                    {(selectedGenres.length > 0 || availabilityFilter !== "all") && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={clearFilters}
                        className="text-xs h-auto py-1"
                      >
                        Clear All
                      </Button>
                    )}
                  </div>
                  
                  {/* Availability Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Availability</h4>
                    <div className="space-y-2">
                      <button 
                        className={`flex items-center w-full px-3 py-2 rounded-md text-sm ${
                          availabilityFilter === "all" 
                            ? "bg-primary text-white" 
                            : "hover:bg-vault-100"
                        }`}
                        onClick={() => setAvailability("all")}
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                        All Books
                      </button>
                      <button 
                        className={`flex items-center w-full px-3 py-2 rounded-md text-sm ${
                          availabilityFilter === "available" 
                            ? "bg-primary text-white" 
                            : "hover:bg-vault-100"
                        }`}
                        onClick={() => setAvailability("available")}
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Available Now
                      </button>
                      <button 
                        className={`flex items-center w-full px-3 py-2 rounded-md text-sm ${
                          availabilityFilter === "borrowed" 
                            ? "bg-primary text-white" 
                            : "hover:bg-vault-100"
                        }`}
                        onClick={() => setAvailability("borrowed")}
                      >
                        <X className="h-4 w-4 mr-2" />
                        Currently Borrowed
                      </button>
                    </div>
                  </div>
                  
                  {/* Genre Filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Genres</h4>
                    <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                      {ALL_GENRES.map(genre => (
                        <button
                          key={genre}
                          className={`flex items-center w-full px-3 py-2 rounded-md text-sm ${
                            selectedGenres.includes(genre) 
                              ? "bg-primary text-white" 
                              : "hover:bg-vault-100"
                          }`}
                          onClick={() => toggleGenre(genre)}
                        >
                          {genre}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Books Grid */}
              <div className="flex-grow">
                {/* Mobile Filters */}
                <div className="lg:hidden mb-6">
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                    <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                  </Button>
                  
                  {/* Expanded Mobile Filters */}
                  {showFilters && (
                    <div className="mt-4 p-4 border border-border rounded-xl animate-fade-in">
                      {/* Mobile Availability Filter */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Availability</h4>
                        <div className="flex flex-wrap gap-2">
                          <Button 
                            variant={availabilityFilter === "all" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setAvailability("all")}
                          >
                            All
                          </Button>
                          <Button 
                            variant={availabilityFilter === "available" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setAvailability("available")}
                          >
                            Available
                          </Button>
                          <Button 
                            variant={availabilityFilter === "borrowed" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setAvailability("borrowed")}
                          >
                            Borrowed
                          </Button>
                        </div>
                      </div>
                      
                      {/* Mobile Genre Filter */}
                      <div>
                        <h4 className="text-sm font-medium mb-2">Genres</h4>
                        <div className="flex flex-wrap gap-2">
                          {ALL_GENRES.map(genre => (
                            <Button
                              key={genre}
                              variant={selectedGenres.includes(genre) ? "default" : "outline"}
                              size="sm"
                              onClick={() => toggleGenre(genre)}
                            >
                              {genre}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Clear Filters Button */}
                      {(selectedGenres.length > 0 || availabilityFilter !== "all") && (
                        <div className="mt-4 text-right">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={clearFilters}
                          >
                            Clear All Filters
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Results Summary */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">
                    {filteredBooks.length} {filteredBooks.length === 1 ? 'Book' : 'Books'} Found
                  </h2>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <select className="text-sm border border-border rounded-md px-2 py-1 bg-white">
                      <option>Relevance</option>
                      <option>Title: A-Z</option>
                      <option>Title: Z-A</option>
                      <option>Author: A-Z</option>
                      <option>Author: Z-A</option>
                    </select>
                  </div>
                </div>
                
                {/* Books Grid */}
                {filteredBooks.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBooks.map(book => (
                      <BookCard key={book.id} {...book} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="mb-4 text-muted-foreground">
                      <SlidersHorizontal className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">No Books Found</h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search or filter criteria.
                    </p>
                    <Button onClick={clearFilters}>
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Books;
