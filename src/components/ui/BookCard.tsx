
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, Bookmark } from "lucide-react";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  genre: string;
  coverImage: string;
  available?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  author,
  genre,
  coverImage,
  available = true,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="group book-card relative bg-white rounded-2xl overflow-hidden border border-border h-full soft-shadow">
      {/* Image Container */}
      <div className="aspect-[3/4] relative overflow-hidden bg-secondary">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center animate-pulse-gentle bg-muted">
            <BookPlaceholder />
          </div>
        )}
        <img
          src={coverImage}
          alt={`Cover of ${title} by ${author}`}
          className={`object-cover w-full h-full transition-opacity duration-300 ease-in-out ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Availability Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
            available 
              ? "bg-green-100 text-green-700" 
              : "bg-amber-100 text-amber-700"
          }`}>
            {available ? "Available" : "Borrowed"}
          </span>
        </div>
        
        {/* Genre Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {genre}
          </span>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground">by {author}</p>
        
        {/* Actions */}
        <div className="pt-2 flex items-center justify-between">
          <Link to={`/books/${id}`}>
            <Button variant="outline" size="sm" className="text-xs rounded-full">
              <Eye className="h-3.5 w-3.5 mr-1" />
              Details
            </Button>
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-8 w-8"
            onClick={() => setIsSaved(!isSaved)}
          >
            <Bookmark 
              className={`h-4 w-4 ${isSaved ? "fill-primary text-primary" : "text-muted-foreground"}`} 
            />
          </Button>
        </div>
      </div>
      
      {/* Quick View Button (Only visible on hover) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <Link to={`/books/${id}`} className="pointer-events-auto">
          <Button className="glass-effect bg-white/70 text-primary shadow-lg rounded-full px-6">
            Quick View
          </Button>
        </Link>
      </div>
    </div>
  );
};

// Placeholder component when image is loading
const BookPlaceholder = () => (
  <div className="flex flex-col items-center justify-center text-muted-foreground/50">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  </div>
);

export default BookCard;
