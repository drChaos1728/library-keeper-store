
import { toast } from "sonner";

// Type definitions
export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  ISBN?: string;
  publishedYear?: number;
  coverImage: string;
  available: boolean;
  description?: string;
  expectedReturn?: string;
}

// For development and testing - this will be replaced with actual API calls
// This simulates the database until you connect to MongoDB Atlas
export const getAllBooks = async (): Promise<Book[]> => {
  try {
    // In a real implementation, this would be a fetch to your backend
    // return await fetch('/api/books').then(res => res.json());
    
    // For now, return the mock data
    return BOOKS_DATA;
  } catch (error) {
    console.error("Error fetching books:", error);
    toast.error("Failed to load books");
    return [];
  }
};

export const getBookById = async (id: string): Promise<Book | null> => {
  try {
    // In a real implementation, this would be a fetch to your backend
    // return await fetch(`/api/books/${id}`).then(res => res.json());
    
    // For now, find the book in the mock data
    const book = BOOKS_DATA.find(book => book.id === id);
    return book || null;
  } catch (error) {
    console.error("Error fetching book:", error);
    toast.error("Failed to load book details");
    return null;
  }
};

// Placeholder functions for future implementation
export const borrowBook = async (bookId: string, userId: string): Promise<boolean> => {
  // This will be implemented when connecting to the backend
  console.log(`Borrowing book ${bookId} for user ${userId}`);
  toast.success("Book borrowed successfully");
  return true;
};

export const returnBook = async (bookId: string, userId: string): Promise<boolean> => {
  // This will be implemented when connecting to the backend
  console.log(`Returning book ${bookId} from user ${userId}`);
  toast.success("Book returned successfully");
  return true;
};

// Mock data - this will be replaced with data from MongoDB
export const BOOKS_DATA: Book[] = [
  {
    id: "1",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    ISBN: "978-1-250-30169-7",
    publishedYear: 2019,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
    description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
  },
  {
    id: "2",
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    ISBN: "978-0-399-59050-4",
    publishedYear: 2018,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
    description: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara's older brothers became violent.",
  },
  {
    id: "3",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Fiction",
    ISBN: "978-0-735-21911-1",
    publishedYear: 2018,
    coverImage: "https://images.unsplash.com/photo-1531901599143-ab597140e103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: false,
    description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say.",
    expectedReturn: "June 15, 2023",
  },
  {
    id: "4",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    ISBN: "978-0-735-21129-0",
    publishedYear: 2018,
    coverImage: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
  },
  {
    id: "5",
    title: "The Dutch House",
    author: "Ann Patchett",
    genre: "Fiction",
    ISBN: "978-0-062-96367-3",
    publishedYear: 2019,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
    description: "At the end of the Second World War, Cyril Conroy combines luck and a single canny investment to begin an enormous real estate empire, propelling his family from poverty to enormous wealth. His first order of business is to buy the Dutch House, a lavish estate in the suburbs outside of Philadelphia.",
  },
  {
    id: "6",
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    ISBN: "978-1-524-76313-8",
    publishedYear: 2018,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: false,
    description: "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history.",
    expectedReturn: "July 2, 2023",
  },
  {
    id: "7",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    ISBN: "978-0-062-31609-7",
    publishedYear: 2015,
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
    description: "One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us?",
  },
  {
    id: "8",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    ISBN: "978-0-062-31500-7",
    publishedYear: 1988,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
    description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined.",
  },
  {
    id: "9",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    ISBN: "978-0-374-27563-1",
    publishedYear: 2011,
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
    description: "In the international bestseller, Thinking, Fast and Slow, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think.",
  },
  {
    id: "10",
    title: "The Nightingale",
    author: "Kristin Hannah",
    genre: "Historical Fiction",
    ISBN: "978-0-312-57722-3",
    publishedYear: 2015,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: false,
    description: "With courage, grace, and powerful insight, bestselling author Kristin Hannah captures the epic panorama of World War II and illuminates an intimate part of history seldom seen: the women's war.",
    expectedReturn: "June 10, 2023",
  },
  {
    id: "11",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Self-Help",
    ISBN: "978-1-400-06928-6",
    publishedYear: 2012,
    coverImage: "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
    description: "In The Power of Habit, award-winning business reporter Charles Duhigg takes us to the thrilling edge of scientific discoveries that explain why habits exist and how they can be changed.",
  },
  {
    id: "12",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classics",
    ISBN: "978-0-743-27356-5",
    publishedYear: 1925,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    available: true,
    description: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers.",
  },
];
