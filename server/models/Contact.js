import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your full name.'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long.']
    },
    email: {
      type: String,
      required: [true, 'Please provide your email address.'],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address.'
      ]
    },
    subject: {
      type: String,
      required: [true, 'Please select a project subject area.'],
      enum: {
        values: ['Software Development', 'Digital Marketing', 'Civil Engineering', 'Business Consulting'],
        message: '{VALUE} is not a valid project area.'
      }
    },
    message: {
      type: String,
      required: [true, 'Please provide inquiry details.'],
      trim: true,
      minlength: [10, 'Message details must be at least 10 characters long.']
    }
  },
  {
    timestamps: true // Automatically generates 'createdAt' and 'updatedAt' fields
  }
);

// Create the model
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
