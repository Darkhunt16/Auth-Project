# Project Setup and Usage

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- A package manager (npm)

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Darkhunt16/Quantum_Task.git
   cd Quantum_Task
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Environment Variables
Create a `.env` file in the root directory and add your environment variables:
```sh
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=your-mongodb-url
NEXTAUTH_SECRET=your-secret-key
```

## Running the Development Server

Start the Next.js development server:
```sh
npm run dev  # or yarn dev / pnpm dev
```

The server will start at `http://localhost:3000/` by default.

Deployed Link: (https://quantum-task-0209.vercel.app)