# BlogNest

BlogNest is a full-stack blogging platform where users can seamlessly create, read, update, and delete blogs. The application features a modern frontend developed with React and Tailwind CSS, complemented by a secure backend powered by Express.js and MongoDB..

---

## Features

### Frontend

- Framework: Built with React for dynamic and interactive user experiences.
- Styling: Tailwind CSS ensures a modern, responsive, and mobile-friendly design.
- Routing: Dynamic navigation enabled using React Router DOM.
- API Integration: Smooth interaction with backend APIs for real-time updates and functionality.

### Backend

- Framework: Developed using Express.js for robust and scalable API services.
- Database: MongoDB for efficient storage and retrieval of blog data.
- Helmet: Protects against common security vulnerabilities.
- CORS: Enables secure cross-origin requests.
- xss-clean: Safeguards against cross-site scripting (XSS) attacks.
- express-mongo-sanitize: Prevents NoSQL injection attacks.
- File Handling: Image uploads powered by Cloudinary for efficient media management.
- Rate Limiting: Controls request frequency to prevent abuse.
- Authentication: Secure API access using JWT-based authentication.

---

## Live Links

- **Frontend (Client)**: [BlogNest Frontend](https://blog-agency-project-tawny.vercel.app)
- **Admin (Client)**: [BlogNest Frontend](https://blog-agency-project-tawny.vercel.app/admin)
- **Backend (Server)**: [BlogNest Backend](https://blog-agency-project-sm61.vercel.app/)

### Admin Panel Credentials

- **Username**: `gazi_ashiq`
- **Password**: `iamadmin`

---

---

## Installation and Setup

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn
- MongoDB instance (local or Atlas)

### Backend Setup

1. Clone the repository.
   ```bash
   git clone <repo-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following:
   ```env
   PORT=5000
   MONGO_URL=<your-mongo-db-url>
   CLIENT_URL=http://localhost:5173
   JWT_SECRET=<your-secret-key>
   CLOUDINARY_NAME=<your-cloudinary-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173`.

---

## API Endpoints

### Base URL

`http://localhost:5000/api/v1`

### Blog Routes

- **Create Blog**: `POST /blogs/create`
- **Get All Blogs**: `GET /blogs`
- **Get Single Blog**: `GET /blogs/:id`
- **Update Blog**: `PUT /blogs/:id`
- **Delete Blog**: `DELETE /blogs/:id`

---

## Scripts

### Frontend

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the development server     |
| `npm run build`   | Build the project for production |
| `npm run lint`    | Run the linter                   |
| `npm run preview` | Preview the production build     |

### Backend

| Command       | Description                           |
| ------------- | ------------------------------------- |
| `npm run dev` | Start the backend server with nodemon |

---

## Deployment

### Frontend

- Hosted on [Vercel](https://www.vercel.com/).

### Backend

- Hosted on [Vercel](https://vercel.com/).

---

## Project Structure

### Frontend

```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   └── App.jsx
└── package.json
```

### Backend

```
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── index.js
└── package.json
```

---

---

## Author

**Gazi Ashiq Reza Gaffari**  
[MERN Stack Developer](https://github.com/Ashiq121914)
