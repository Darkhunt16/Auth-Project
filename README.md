# Project Setup and Usage

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- A package manager (npm)

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Darkhunt16/Auth-Project.git
   cd Auth-Project
   ```

2. **Create the Env**
Create a `.env` file in the backend folder and add your environment variables:
```sh
PORT =4000

MONGO_URI= Your Database URL

FRONTEND_URL=Enter the frontend URL(http://localhost:5173)

JWT_SECRET_KEY= Anything Random

JWT_EXPIRES=7d

COOKIE_EXPIRES=7

SMTP_HOST=smtp.gmail.com

SMTP_PORT=465

SMTP_SERVICE=gmail

SMTP_MAIL= Enter a Working Gmail

SMTP_PASSWORD=


```
3. **Install dependencies and Running the Frontend and Backend:**
   
   For Backend
   ```sh
   cd backend
   npm install
   npm run dev
   ```

   For Frontend
   ```sh
   cd frontend
   npm install
   npm run dev
   ```



The server will start at `http://localhost:5173` by default.

Deployed Link: (https://auth-project-deployed.vercel.app)