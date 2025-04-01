
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'Please add an author'],
    trim: true,
  },
  genre: {
    type: String,
    required: [true, 'Please add a genre'],
    trim: true,
  },
  ISBN: {
    type: String,
    required: [true, 'Please add an ISBN'],
    unique: true,
    trim: true,
  },
  publishedYear: {
    type: Number,
    required: [true, 'Please add a published year'],
  },
  coverImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3',
  },
  available: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  expectedReturn: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Book', BookSchema);
