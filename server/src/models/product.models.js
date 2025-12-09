import mongoose from 'mongoose';

// Simple product schema aligned with the front-end form
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
    default: "",
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

export const Product = mongoose.model('Product', productSchema);

