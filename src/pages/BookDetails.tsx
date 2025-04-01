
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, BookOpen, User, Calendar, Tag, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllBooks } from "@/lib/api";

// This will be replaced with actual data from API
import { toast } from "sonner";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        // This will be replaced with actual API call
        const books = await getAllBooks();
        const foundBook = books.find((b: any) => b.id === id);
        
        if (foundBook) {
          setBook(foundBook);
        } else {
          setError("Book not found");
        }
      } catch (err) {
        console.error("Error fetching book details:", err);
        setError("Failed to load book details");
      } finally {
        setLoading(false);
      }
    };
    
    fetchBookDetails();
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [id]);

  const handleBorrow = () => {
    if (book.available) {
      toast.success("Book has been successfully reserved for you");
    } else {
      toast.error("This book is currently unavailable");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4 mx-auto"></div>
            <div className="h-4 w-40 bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Error</h2>
            <p className="text-muted-foreground mb-6">{error || "Book not found"}</p>
            <Link to="/books">
              <Button>Back to Books</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container px-4 mx-auto py-8">
          {/* Back button */}
          <Link to="/books" className="inline-flex items-center text-primary mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to all books
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Book Cover */}
            <div className="md:col-span-1">
              <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm h-full">
                <div className="aspect-[3/4] relative">
                  <img 
                    src={book.coverImage} 
                    alt={`Cover of ${book.title}`}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                      book.available 
                        ? "bg-green-100 text-green-700" 
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {book.available ? "Available" : "Borrowed"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Book Details */}
            <div className="md:col-span-2 space-y-6">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
                  <p className="text-xl text-muted-foreground">by {book.author}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className={`h-10 w-10 rounded-full ${favorite ? 'text-red-500' : ''}`}
                  onClick={() => setFavorite(!favorite)}
                >
                  <Heart className={`h-5 w-5 ${favorite ? 'fill-red-500' : ''}`} />
                </Button>
              </div>
              
              {/* Book Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-border">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Genre</p>
                    <p className="font-medium">{book.genre}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Author</p>
                    <p className="font-medium">{book.author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Publication Year</p>
                    <p className="font-medium">2022</p> {/* This would come from API */}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Tag className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ISBN</p>
                    <p className="font-medium">978-3-16-148410-0</p> {/* This would come from API */}
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                  Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
                  rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna 
                  non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut 
                  dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit 
                  odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.
                </p>
              </div>
              
              {/* Availability */}
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {book.available ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Available for borrowing</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-amber-600" />
                        <span className="font-medium">Currently borrowed</span>
                        <span className="text-sm text-muted-foreground ml-2">
                          Expected return: June 15, 2023
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Loan period: 14 days
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  className="rounded-full px-8" 
                  onClick={handleBorrow}
                  disabled={!book.available}
                >
                  {book.available ? "Borrow This Book" : "Join Waitlist"}
                </Button>
                <Button variant="outline" className="rounded-full">
                  Add to Reading List
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related Books section could go here */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetails;
