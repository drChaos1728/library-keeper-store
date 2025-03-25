
import React, { useState } from "react";
import { Search, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
  showFilters?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Search for books, authors, genres...",
  className = "",
  showFilters = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit}>
        <div 
          className={`flex items-center bg-white border rounded-full overflow-hidden transition-all duration-200 ${
            focused 
              ? "border-primary shadow-sm ring-1 ring-primary/20" 
              : "border-border hover:border-muted-foreground/50"
          }`}
        >
          {/* Search Icon */}
          <div className="flex-shrink-0 pl-4">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          
          {/* Input Field */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            className="flex-grow px-3 py-3 bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground/80"
          />
          
          {/* Clear Button (only shows when there's text) */}
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="flex-shrink-0 p-2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          
          {/* Filter Button (optional) */}
          {showFilters && (
            <div className="flex-shrink-0 border-l border-border">
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="rounded-none h-full"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          )}
          
          {/* Submit Button */}
          <div className="flex-shrink-0 pr-1.5 pl-1.5">
            <Button 
              type="submit" 
              className="rounded-full px-4 py-1.5 h-auto text-sm"
            >
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
