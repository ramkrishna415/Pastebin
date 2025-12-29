## Pastebin Clone

# Project Description
This project is a simple Pastebin-like application. Users can create text pastes and share them using a link. Each paste can have expiry time and view limit.

# Features
- Create paste
- Expiry time support
- Maximum view limit
- View paste in browser
- Input validation
 - Safe content display

   # Technologies Used
- Node.js
- Express.js
- MongoDB
- html
- css
- js

# API Endpoints
POST /api/postes       - Create paste
GET  /api/postes/:id   - Get paste data
GET  /api/p/:id        - View paste page


# How to Run

1. Install dependencies
npm install

2. Start server
node index.js

3. Open browser
http://localhost:3000

# Validation Rules
- Content is required
- Content cannot contain only special characters
- Time must be greater than 0
- Max view must be at least 1

# Conclusion
This project demonstrates backend development using Node.js and Express.
It explains expiry-based and view-based access control.

# Author
Name: Ramkrishna Upadhyay  
Course: B.Tech (CSE)  
Project Type: Assignment  
Year: 2025
