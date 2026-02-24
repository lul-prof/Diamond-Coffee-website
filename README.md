# Diamond Coffee Company Limited

### Modern Full-Stack E-Commerce Platform  
A fully functional e-commerce web application built with **React.js, Node.js, and Express.js**.

This project is a complete redesign of the original Diamond Coffee website (https://diamondcoffee.co.ke/) with modern features including authentication, authorization, product management, shopping cart, payment integration, and order tracking.

---

## Live Project Goals

- Modernize the Diamond Coffee digital presence
- Enable secure online purchases
- Provide real-time order tracking
- Empower administrators with analytics and product control
- Build a scalable full-stack commerce architecture

---

# 📌 Features

---

## User Features

### Authentication & Authorization
- Email & password registration
- Secure login with encrypted passwords (bcrypt)
- JWT-based authentication
- Persistent authentication across sessions
- Role-based access control (User / Admin)
- Secure logout functionality

---

## Product Discovery
- Advanced keyword search
- Category-based filtering
- Dynamic product listings
- Detailed product pages including:
  - Multiple images
  - Product descriptions
  - Stock availability
  - Ratings & reviews
  - Related products

---

## Shopping Experience
- Add to cart
- Update cart quantity
- Remove items from cart
- Deal of the Day promotions
- Secure checkout
- Multiple payment options:
  - PayPal
  - M-Pesa (STK Push integration ready)
  - Google Pay
  - Apple Pay
  - Cash on Delivery
- Order confirmation system
- Real-time order tracking
- Order history dashboard
- Detailed order status updates:
  - Pending
  - Processing
  - Shipped
  - Delivered

---

# Admin Panel Features

---

## Product Management
- View all products
- Add new products with image upload (Cloudinary)
- Edit product details
- Delete products
- Manage inventory stock

---

## Order Management
- View all customer orders
- Filter by order status
- Update order status
- Track payment confirmations
- Monitor order fulfillment

---

## Analytics Dashboard
- Total earnings overview
- Monthly revenue tracking
- Category-based revenue analysis
- Interactive charts
- Order statistics
- Best-selling product insights

---

# Tech Stack

## Frontend
- React.js
- Context API (Provider-based state management)
- React Router
- Axios
- Responsive UI (Mobile-first design)

## Backend
- Node.js
- Express.js
- Mongoose
- JWT Authentication
- RESTful API Architecture

## Database
- MongoDB (NoSQL document-based database)

## Cloud Services
- Cloudinary (Product image storage & optimization)

## Payment Integrations
- PayPal API
- M-Pesa (Daraja API)
- Cash on Delivery

---

# Project Structure
diamond-coffee-ecommerce/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── context/
│ │ ├── services/
│ │ └── utils/
│ │
│ └── package.json
│
├── server/ # Express Backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ └── package.json
│
├── .env
└── README.md


---

# Security Measures

- Password hashing using bcrypt
- JWT token authentication
- Protected admin routes
- Input validation & sanitization
- Environment variable protection
- Secure payment verification
- Role-based authorization middleware

---

# API Endpoints Overview

## Authentication


POST /api/user/register
POST /api/user/login
GET /api/user/profile


## Products


GET /api/user/products
GET /api/user/products/:id
POST /api/products (Admin)
PUT /api/products/:id (Admin)
DELETE /api/products/:id (Admin)


## Orders


POST /api/user/orders
GET /api/user/orders/myorders
GET /api/orders (Admin)
PUT /api/orders/:id/status (Admin)


---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/diamond-coffee-ecommerce.git
cd diamond-coffee-ecommerce

2. Install Dependencies
Backend
cd server
npm install

Frontend
cd client
npm install

3. Configure Environment Variables

Create a .env file inside /server:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

PAYPAL_CLIENT_ID=your_paypal_client_id

MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_PASSKEY=your_passkey

4. Run the Application
Start Backend
npm run server

Start Frontend
npm start


Application URLs:

Frontend → http://localhost:3000

Backend → http://localhost:5000

</> Future Improvements

Wishlist system

Email notifications (Order confirmations)

Discount coupon management

Inventory low-stock alerts

AI-powered product recommendations

Mobile application (React Native / Flutter)

Advanced reporting tools

Multi-vendor expansion capability

Business Impact

This redesign positions Diamond Coffee Company Limited as:

A scalable national e-commerce brand

A data-driven digital coffee retailer

A secure online payment-enabled business

A modern and professional online presence

Author-Israel Mutua

Developed as a full-stack MERN application using modern industry best practices.

📜 License

This project is proprietary software developed for Diamond Coffee Company Limited.

All rights reserved.




