-- Drop statements to avoid errors when creating db
DROP TABLE IF EXISTS users CASCADE;

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