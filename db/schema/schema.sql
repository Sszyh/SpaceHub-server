-- Drop statements to avoid errors when creating db
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;

-- Create statements to build basic db
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255),
  password TEXT NOT NULL,
  user_type TEXT NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  created_at timestamp NOT NULL,
  phone_number VARCHAR(13) NOT NULL
);

CREATE TABLE properties (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  
  country VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) ,
  post_code VARCHAR(255) ,

  coord_long TEXT,
  coord_lat TEXT,
   
  price_per_day MONEY NOT NULL,
  average_rating NUMERIC(2,1) DEFAULT 0.0,

  category TEXT,
  wheelchair BOOLEAN DEFAULT FALSE,
  wifi BOOLEAN DEFAULT FALSE,

  desc_short TEXT,
  desc_long TEXT,

  created_at TIMESTAMP ,
  updated_at TIMESTAMP 
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  price_for_stay MONEY NOT NULL,
  price_per_day MONEY NOT NULL,
  rating NUMERIC(2,1),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  booking_id INTEGER REFERENCES bookings(id) ON DELETE CASCADE,
  rating NUMERIC(2,1) NOT NULL,

  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
)