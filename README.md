# 🎬 Movie Collection Display API

## 📌 About the Collection
This movie collection includes a mix of classic and modern films across multiple genres such as Drama, Sci-Fi, Action, Comedy, Horror, and Crime. The movies were selected to demonstrate filtering, genre grouping, and dynamic display of movie information. The collection showcases both timeless classics and exciting recent hits.

---

## 📌 Project Description
This project is a Movie Collection Display API built using **Node.js** and **Express.js**, along with a simple **HTML/CSS/JavaScript frontend**.  
The backend serves three API endpoints, while the frontend dynamically fetches and displays data using the JavaScript `fetch()` API.

**Technologies Used:**
- Node.js
- Express.js
- HTML
- CSS
- JavaScript (fetch API)

---

## 🎭 Genres Available
- Drama  
- Crime  
- Action  
- Sci-Fi  
- Comedy  
- Horror  

---

## 📁 Project Structure
movie-collection-api/
├── public/
│ ├── index.html
│ ├── styles.css
│ └── main.js
├── server.js
├── package.json
├── .gitignore
└── README.md

---

## 🔌 API Documentation

### 1️⃣ **GET /movies**
**Description:** Returns all movies in the collection.  
**Method:** GET  
**Sample Response:**
```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]
2️⃣ GET /movies/classics

Description: Returns only classic movies (released before 2000).
Method: GET
Sample Response:
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]
3️⃣ GET /movies/genres

Description: Returns all unique genres along with how many movies belong to each.
Method: GET
Sample Response:
{
  "genres": [
    {
      "name": "Drama",
      "movieCount": 2
    },
    {
      "name": "Sci-Fi",
      "movieCount": 2
    }
  ]
}
🚀 Installation & Setup Instructions
1️⃣ Clone the Repository
git clone https:https://github.com/RIFARAUF/movie-collection-api.git
cd movie-collection-api

2️⃣ Install Dependencies
npm install

3️⃣ Start the Server
npm start

4️⃣ Access the Application

Frontend:
👉 http://localhost:3000

API Endpoints:
👉 http://localhost:3000/movies

👉 http://localhost:3000/movies/classics

👉 http://localhost:3000/movies/genres

⭐ Features

List all movies

Filter classic movies

Display genres with movie counts

Frontend with buttons to fetch data dynamically

Classic movie badge display

Clean UI with basic CSS

Error handling for API requests

🔗 GitHub Repository

https:https://github.com/RIFARAUF/movie-collection-api.git

✍️ Author
Fathima Rifa 
  






