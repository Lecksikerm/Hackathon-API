# Hackathon Platform REST API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express.js-Framework-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Status](https://img.shields.io/badge/Status-Completed-success)

A full-featured backend system for managing hackathons, teams, and project submissions. Built with **Node.js**, **Express**, and **MongoDB**, this API supports authentication, role-based access control, team leadership workflows, hackathon registration, and project submission with production-ready patterns.

---

## 🚀 Features

### Authentication & Security

* User registration and login
* JWT-based authentication
* Protected routes
* Forgot password & reset password via OTP (email)
* Role-based access control (Admin / User)

### User & Team Management

* Team creation and joining
* Team leader assignment
* Change team leader
* Team member management
* Leader-only privileged actions

### Hackathon Management

* Hackathon creation (admin only)
* Hackathon listing with pagination
* Hackathon event lifecycle
* Team registration for hackathons (leader only)

### Project Submission

* One project per team per hackathon (enforced)
* Leader-only project submission
* Update project submission
* Fetch projects by hackathon

---

## 🧱 Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (Mongoose ODM)
* **Authentication:** JWT
* **Email Service:** OTP-based password reset
* **Deployment Ready:** Render / Railway / VPS

---

## 📁 Project Structure

```bash
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp_provider
EMAIL_USER=email_address
EMAIL_PASS=email_password
```

---

## 📦 Installation & Setup

```bash
# Clone repository
git clone https://github.com/Lecksikerm/Hackathon-API.git

# Navigate to project
cd hackathon-platform-api

# Install dependencies
npm install

# Run development server
npm run dev
```

Server runs on:

```
http://localhost:8000
```

---

## 🔐 Authentication Flow

1. User registers and logs in
2. JWT token is issued
3. Token is required for protected routes
4. OTP-based password recovery via email

---

## 📌 API Endpoints Overview

### Auth

* `POST /api/v1/auth/register`
* `POST /api/v1/auth/login`
* `POST /api/v1/auth/forgot-password`
* `POST /api/v1/auth/reset-password`

### Teams

* `POST /api/v1/teams`
* `POST /api/v1/teams/join`
* `PUT /api/v1/teams/change-leader`

### Hackathons

* `POST /api/v1/hackathons` (Admin)
* `GET /api/v1/hackathons?page=1&limit=10`
* `POST /api/v1/hackathons/:id/register` (Team Leader)

### Projects

* `POST /api/v1/projects`
* `PUT /api/v1/projects/:id`
* `GET /api/v1/projects/hackathon/:id`

---

## 🧪 Business Rules Enforced

* Only team leaders can register teams for hackathons
* Only team leaders can submit or update projects
* One project per team per hackathon
* Admin-only hackathon creation

---

## 📈 Performance Considerations

* Pagination for hackathon listings
* Indexed schemas for team–hackathon uniqueness
* Clean separation of concerns
* Ready for 1,000+ concurrent users

---

## 📜 License

MIT License

---

## Deployment Link

https://hackathon-api-ipa6.onrender.com/

---

## 👤 Author

**Kareem Idris**

This project demonstrates real-world backend architecture, authorization flows, and scalable API design suitable for production, interviews, and portfolio presentation.
