Employee Attendance System

A full-stack Employee Attendance System built using React.js, Node.js, Express.js, MongoDB, and styled with TailwindCSS.
The application allows employees to register, login, check-in/check-out, and view their attendance history. Managers can access dashboards and summaries.

🌐 Project Preview

Frontend (Live Preview):
https://task2-employee-attendance-system-m6.vercel.app

Backend (API URL):
https://your-backend-url.vercel.app (replace with your deployed backend URL)

🛠️ Technologies Used

Frontend: React.js, TailwindCSS, React Router, Axios

Backend: Node.js, Express.js

Database: MongoDB (Atlas or local)

Authentication: JWT tokens

Deployment: Vercel (frontend), Vercel / Render / Heroku (backend)

🔹 Features
Employee Features

User registration and login

Secure authentication with JWT

Check-in and check-out attendance

View personal attendance history

View personal attendance summary

Manager Features

Dashboard to view employee attendance

Summary reports of employee attendance

Others

Responsive UI using TailwindCSS

Dark mode support

Error handling and alerts

📁 Project Structure

Frontend (React):

frontend/
├─ src/
│  ├─ api/
│  │  └─ api.js           # Axios instance with API base URL
│  ├─ pages/
│  │  ├─ Register.jsx
│  │  ├─ Login.jsx
│  │  ├─ Dashboard.jsx
│  │  └─ ...other pages
│  ├─ components/
│  ├─ App.js
│  └─ index.js
├─ package.json
└─ tailwind.config.js


Backend (Node.js + Express):

backend/
├─ config/
│  └─ db.js              
├─ routes/
│  ├─ auth.js
│  ├─ attendance.js
│  └─ dashboard.js
├─ controllers/
│  └─ authController.js
│  └─ attendanceController.js
├─ middleware/
│  └─ authMiddleware.js
├─ server.js               
└─ package.json

⚙️ Installation
1. Clone the repository
git clone https://github.com/yourusername/employee-attendance-system.git
cd employee-attendance-system

2. Backend Setup
cd backend
npm install


Create a .env file with:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000


Start the backend:

npm run start

3. Frontend Setup
cd frontend
npm install


Create a .env file with:

REACT_APP_API_URL=https://your-backend-url.vercel.app/api


Start the frontend:

npm start

🚀 Deployment

Frontend:

Build React app: npm run build

Deploy on Vercel or Netlify

Backend:

Deploy Node.js backend on Vercel, Render, or Heroku

Make sure CORS is configured in backend for your deployed frontend URL.

🔒 Authentication Flow

Register/Login → Backend returns JWT token

Token stored in localStorage

Protected routes (dashboard, check-in/out) require token in Authorization header

Backend verifies JWT for all protected requests

screenshots:
<img width="951" height="447" alt="image" src="https://github.com/user-attachments/assets/a8371b48-1448-451a-9166-38bcfd3c2326" />
<img width="958" height="430" alt="image" src="https://github.com/user-attachments/assets/5a624e98-d79c-4d3e-bc54-6e7edcaf3326" />
<img width="948" height="419" alt="image" src="https://github.com/user-attachments/assets/3c86d9d5-15c5-4f43-b732-3330e43f2d13" />
<img width="953" height="413" alt="image" src="https://github.com/user-attachments/assets/c0d5727b-765a-4f40-b107-f025c1bf01c8" />




