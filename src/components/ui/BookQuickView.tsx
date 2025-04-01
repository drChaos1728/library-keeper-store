
import React from "react";
import { Link } from "react-router-dom";
import { Book, Heart, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Book as BookType } from "@/lib/api";

interface BookQuickViewProps {
  book: BookType | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookQuickView: React.FC<BookQuickViewProps> = ({ book, open, onOpenChange }) => {
  const handleBorrow = () => {
    if (book && book.available) {
      toast.success("Book has been successfully reserved for you");
    } else {
      toast.error("This book is currently unavailable");
    }
    onOpenChange(false);
  };

  if (!book) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold">{book.title}</DialogTitle>
        </DialogHeader>
        
        <div className="p-6 pt-3">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Book Cover */}
            <div className="md:w-1/3">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                <img 
                  src={book.coverImage} 
                  alt={`Cover of ${book.title}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Book Info */}
            <div className="md:w-2/3 space-y-4">
              <div>
                <p className="text-lg text-muted-foreground">by {book.author}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {book.genre}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  book.available 
                    ? "bg-green-100 text-green-700" 
                    : "bg-amber-100 text-amber-700"
                }`}>
                  {book.available ? "Available" : "Borrowed"}
                </span>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-2 mb-2">
                  {book.available ? (
                    <>
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="font-medium">Available for borrowing</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-4 w-4 text-amber-600" />
                      <span className="font-medium">Currently borrowed</span>
                    </>
                  )}
                </div>
                {!book.available && book.expectedReturn && (
                  <p className="text-sm text-muted-foreground">
                    Expected return: {book.expectedReturn}
                  </p>
                )}
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <Button 
                  onClick={handleBorrow}
                  disabled={!book.available}
                  className="rounded-full"
                >
                  {book.available ? "Borrow Now" : "Join Waitlist"}
                </Button>
                
                <Link to={`/books/${book.id}`}>
                  <Button variant="outline" className="rounded-full">
                    <Book className="h-4 w-4 mr-2" />
                    Full Details
                  </Button>
                </Link>
                
                <DialogClose asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                </DialogClose>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookQuickView;
