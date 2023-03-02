# SpaceHub
This project was built by [Ian Dodds](https://github.com/imdodds), [Sarah Zhu](https://github.com/Sszyh) and [Zhaoran Xin](https://github.com/Ruanruanx). 

This project is created for the business rental. 
* A guest user, can see all the list of properties, search by their reference, make instant book, rate experience, leave reviews and see all the booking history. 
* A host user can post new properties, edit properties, see all their properties' booking history.

## Getting Started 
*Git clone the repo onto your local machine. Also git clone the [client Repo](https://github.com/Sszyh/SpaceHub-client)*


1. Create the `.env` file by using `env.example` as a reference.
2. Update the `.env` file with local database.
3. Install dependencies: `npm install`
4. Reset database: `npm run db:reset`
5. Start server: `npm run dev`, the server is running on `http://localhost:8000`
   


## User Stories (Project goals)
### As a guest user
* A guest user can see a list of available properties
* A guest user can search properties by their refenrence
* A guest user can choose available properties on the map
* A guest user can “Instant Book” a space for rent
* A guest user can see a list of spaces that they have booked
* A guest user can leave a rating/review of a property they have rented

### As a host user
* A host user can list their property for rent
* A host user can edit their property listing
* A host user can see a list of all of their own properties for rent

## Views
* Guest user
![Guest-user view](images/guest-user.gif)
* Host user
![Host-user view](images/host-user.gif)

## Collaboration Tools
* [Drawio for database design and ERD](https://app.diagrams.net/#G1a1nLiBFVCd4Vk4iwxanUlc7MJIss7tWJ)
* [Figma for wireframe](https://www.figma.com/file/wbtVhXEe8UT2GXNs6D5PG3/SpaceHub?node-id=0%3A1&t=gikFzbRuVpNamijZ-0)
  

## Dependencies
- express
- morgan
- pg
- body-parser
- dotenv
- cors
- axios
- bcrypt
- cookie-session
