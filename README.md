# My App

## Introduction

This repository contains the frontend and backend code for TensorGo Assignment. The frontend is built with React and Redux, and the backend uses Node.js with Express and MongoDB.


Project link : https://tensorgo-assignment.vercel.app/ 

## Prerequisites

- Node.js (v14.x or above)
- npm (v6.x or above)
- MongoDB
- Stripe API keys (for payment processing)


## Environment Variables

### Backend

Create a `.env` file in the `backend` directory with the following content:

```
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your_jwt_secret
STRIPE_PRIVATE_KEY=your_stripe_private_key
CLIENT_URL=http://localhost:3000
```

Create a `.env.production` file in the `backend` directory with the following content for production:

```
NODE_ENV=production
PORT=5000
MONGO_URI=your_production_mongo_uri
JWT_SECRET=your_jwt_secret
STRIPE_PRIVATE_KEY=your_stripe_private_key
CLIENT_URL=https://your_production_client_url
```

## Installation

### Backend

1. `cd backend`
2. `npm install`
3. `npm start`

### Frontend

1. `cd frontend`
2. `npm install`
3. `npm start`
