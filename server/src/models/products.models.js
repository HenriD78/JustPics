import mongose from 'mongoose';

const productSchema = new mongose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
},{ 
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

export const Product = mongose.model('Product', productSchema);

