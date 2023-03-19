const mongoose = require('mongoose');
const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  // slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],

    maxlength: [500, 'Name can not be more than 50 characters'],
  },
  website: {
    type: String,
    match: [
      /^(?:https?:\/\/)?(?:www\.)?([a-z0-9.-]+\.[a-z]{2,})(?:\/[\w.-]*)*\/?$/i,
      'Please use a valid URL with HTTP or HTTPS',
    ],
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone'],
    // match: [/^\+?\d{1,3}[-.\s]?\d{1,10}$/, 'Please use a valid phone number'],
  },
  email: {
    type: String,
    required: [true, 'Please add a email'],
    match: [/^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i, 'Please use a valid email'],
  },
  address: {
    type: String,
    required: [true, 'Please add a adress'],
  },
  // // location: {
  // //   // GEO JSON point
  // //   type: {
  // //     type: String,
  // //     enum: ['Point'],
  // //     required: true,
  // //   },
  // //   coordinates: {
  // //     type: [Number],
  // //     required: true,
  // //     index: '2dsphere',
  // //   },
  // //   formattedAddress: String,
  // //   street: String,
  // //   city: String,
  // //   state: String,
  // //   zipcode: String,
  // //   country: String,
  // // },
  careers: {
    type: [String],
    required: true,
    enum: [
      'Web Development',
      'Mobile Development',
      'UI/UX',
      'Data Science',
      'Business',
      'Other',
    ],
  },
  // // averageRating: {
  // //   type: Number,
  // //   min: [1, 'Rating must be at least 1'],
  // //   max: [10, 'Rating can not be more than 10'],
  // // },
  // // averageCost: {
  // //   type: Number,
  // //   photo: {
  // //     type: String,
  // //     default: 'no-phote.jpg',
  // //   },
  // // },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: { type: Boolean, default: false },
  jobGurantee: { type: Boolean, default: false },
  acceptGi: { type: Boolean, default: false },
  // createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
