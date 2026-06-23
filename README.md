# 🚀 BLOSCOT - Modern Blogging Platform

BLOSCOT is a full-stack blogging platform built using the MERN ecosystem that enables users to create, publish, manage, and interact with blogs through a secure and user-friendly interface.

The platform supports role-based user management, blog publishing workflows, email verification, comment management, and content administration, providing a complete blogging experience for both readers and content creators.

---

## 🌟 Key Features

### 👤 User Management

* User Registration & Login
* Secure Authentication System
* Email Verification
* Profile Management
* Role-Based Access Control

### 📝 Blog Management

* Create New Blogs
* Edit Existing Blogs
* Delete Blogs
* View All Blogs
* View Blog Details
* Blog Categorization
* Rich Content Publishing

### 💬 Comment System

* Add Comments on Blogs
* View Blog Comments
* Manage User Interactions

### 🛡️ Admin Panel

* Manage Registered Users
* Verify User Accounts
* Block/Unblock Users
* Monitor Platform Activity
* Manage Published Content

### 📧 Email Services

* Account Verification Emails
* User Notification Support
* Secure Email Integration

---

## 🏗️ System Architecture

### Frontend

* React.js
* React Router
* Bootstrap
* Axios
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose ODM

### Authentication & Security

* Session Management
* Email Verification
* Protected Routes
* Role-Based Authorization

---

## 📂 Project Structure

```text
BLOSCOT
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── pages
│   │   └── App.js
│   └── package.json
│
├── backend
│   ├── controller
│   ├── models
│   ├── routes
│   ├── config
│   ├── app.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/codewizpiyush/Blogapp.git
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=3001
MONGO_URL=your_mongodb_connection_string
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:3000
```

Run Backend

```bash
npm start
```

---

### Frontend Setup

```bash
cd frontend
npm install
```

Create `.env`

```env
REACT_APP_BASE_URL=http://localhost:3001
```

Run Frontend

```bash
npm start
```

---

## 🚀 Deployment

The application is deployment-ready and can be hosted on:

* Render
* Vercel
* Netlify (Frontend)
* MongoDB Atlas

---

## 🔐 Environment Variables

### Backend

```env
PORT=
MONGO_URL=
EMAIL_USER=
EMAIL_PASS=
CLIENT_URL=
```

### Frontend

```env
REACT_APP_BASE_URL=
```

---

## 📸 Screenshots

### Home Page

(Add Screenshot Here)

### User Dashboard

(Add Screenshot Here)

### Blog Management

(Add Screenshot Here)

### Admin Panel

(Add Screenshot Here)

### Comment System

(Add Screenshot Here)

---

## 👨‍💻 Team Members

### Piyush Gupta

**Full Stack Developer**

* Frontend Development
* Backend Development
* API Development
* Authentication & Authorization
* Email Integration
* System Architecture
* Deployment & Integration

### Rupal Bagora

**Full Stack Developer**

* Frontend Development
* Backend Development
* Feature Development
* Business Logic Implementation

### Kunal Dhote

**Frontend & Database Developer**

* Frontend Development
* Database Design
* Data Management

### Anuj Singh Gurjar

**Frontend Developer**

* User Interface Development
* Component Development
* UI Enhancements

---

## 🎯 Future Enhancements

* Rich Text Blog Editor
* Blog Search & Filtering
* Blog Likes & Reactions
* User Following System
* Bookmark Blogs
* Dark Mode
* Image Optimization
* Analytics Dashboard

---

## 📜 License

This project is developed for educational and learning purposes.

---

## 🤝 Contributing

Contributions, feature suggestions, and improvements are welcome.

Feel free to fork the repository and submit pull requests.

---

### ⭐ If you like this project, don't forget to star the repository.
