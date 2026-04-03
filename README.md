# Members Only

🔗 [Live Demo](https://members-only.up.railway.app)

A simple members-only messaging app built with Node.js, Express, and PostgreSQL.
Users can sign up, log in, and create posts. Post authors are hidden from guests —
only logged-in members can see who wrote what.

## Features

- Sign up / Log in / Log out
- Password hashing with bcrypt
- Session-based authentication with Passport.js (Local Strategy)
- Create posts (members only)
- Author info hidden from guests
- Input validation and sanitization

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Auth:** Passport.js, passport-local, bcryptjs
- **Views:** EJS
- **Session:** express-session, connect-flash
