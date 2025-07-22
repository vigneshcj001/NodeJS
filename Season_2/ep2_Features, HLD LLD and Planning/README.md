# 📘 Syncly Project Development Document (Merged HLD, LLD, and Feature List)

## ✅ 1. Requirements Gathering

### 📌 Overview

* **Project Name**: Syncly
* **Concept**: A Tinder-style MERN app for developers and tech enthusiasts to connect based on skills, goals, projects, and collaboration interests.
* **Purpose**: Foster meaningful technical networking, mentorship, team building, and AI-enhanced matchmaking.

---

## 🚀 2. High-Level Design (HLD)

### 📐 Architecture

* **Architecture Style**: Modular Microservices with RESTful APIs
* **Tech Stack**:

  * **Frontend**: React.js + Tailwind CSS + Zustand/Redux for state
  * **Backend**: Node.js + Express
  * **Database**: MongoDB (Cloud Atlas)
  * **Auth**: Firebase Auth or JWT
  * **Real-Time Chat**: Socket.IO
  * **File Storage**: Cloudinary / Firebase Storage
  * **AI Services**: OpenAI / Gemini for profile suggestion, code match
  * **Deployment**: Vercel (Frontend), Render/Heroku (Backend), MongoDB Atlas

### 👥 Roles (MVP Dev Team)

* **Frontend Developer (React + Tailwind)**
* **Backend Developer (Express + MongoDB)**
* **UI/UX Designer (Figma)**
* **System Designer Vigneshwaran.C.J**

---

## 🧱 3. Low-Level Design (LLD)

### 📊 MongoDB Collections

#### 🔐 `users`

```json
{
  "_id": ObjectId,
  "username": "techdev",
  "email": "dev@syncly.io",
  "passwordHash": "****",
  "bio": "Backend enthusiast",
  "skills": ["Node.js", "MongoDB", "GraphQL"],
  "interests": ["Hackathons", "Open Source"],
  "profileImage": "url",
  "github": "https://github.com/dev",
  "linkedin": "https://linkedin.com/in/dev",
  "location": "Chennai",
  "isOnline": true,
  "createdAt": ISODate,
  "updatedAt": ISODate
}
```

#### 🔗 `connection_requests`

```json
{
  "fromUserId": ObjectId,
  "toUserId": ObjectId,
  "status": "pending" | "accepted" | "rejected",
  "timestamp": ISODate
}
```

#### 💬 `messages`

```json
{
  "chatId": ObjectId,
  "senderId": ObjectId,
  "receiverId": ObjectId,
  "message": "Hey, let's build a project!",
  "timestamp": ISODate
}
```

#### 💡 `project_posts`

```json
{
  "postedBy": ObjectId,
  "title": "Build AI Chatbot",
  "description": "Looking for frontend dev",
  "tags": ["AI", "React"],
  "collab_type": "Freelance" | "Open Source" | "Startup",
  "likes": [ObjectId],
  "createdAt": ISODate
}
```

#### 🤖 `ai_suggestions`

```json
{
  "userId": ObjectId,
  "suggestedUserId": ObjectId,
  "score": 0.87,
  "reason": "Similar tech stacks & open source interest"
}
```

---

## 🌐 4. REST API Design

### 👤 Auth & Profile

| Endpoint           | Method | Description         |
| ------------------ | ------ | ------------------- |
| `/api/signup`      | POST   | Register user       |
| `/api/login`       | POST   | Login user          |
| `/api/profile`     | GET    | Get user profile    |
| `/api/profile`     | PATCH  | Update user profile |
| `/api/profile/:id` | GET    | View other profile  |

### 🤝 Matchmaking & Connection

| Endpoint               | Method | Description              |
| ---------------------- | ------ | ------------------------ |
| `/api/connect/send`    | POST   | Send connection request  |
| `/api/connect/respond` | POST   | Accept/reject connection |
| `/api/connect/pending` | GET    | Get pending requests     |
| `/api/connect/matches` | GET    | Get mutual matches       |

### 💬 Chat (Socket.IO + REST)

| Endpoint            | Method    | Description         |
| ------------------- | --------- | ------------------- |
| `/api/chat/:userId` | GET       | Get chat history    |
| `/socket.io`        | WebSocket | Real-time messaging |

### 📢 Project Posts

| Endpoint                 | Method | Description           |
| ------------------------ | ------ | --------------------- |
| `/api/projects`          | GET    | Explore project posts |
| `/api/projects`          | POST   | Create project post   |
| `/api/projects/:id/like` | POST   | Like project          |

### 🤖 AI Suggestions

| Endpoint                          | Method | Description            |
| --------------------------------- | ------ | ---------------------- |
| `/api/ai/suggested-connections`   | GET    | AI-recommended matches |
| `/api/ai/project-recommendations` | GET    | Project suggestions    |

---

## 🚀 5. Complete Feature List

### Core

* User Authentication (Email, GitHub)
* Developer Profile
* Swipe Matching
* Real-time Chat

### AI-Powered

* AI Skill DNA Visualization
* Compatibility Score + Reason
* Auto Bio / Resume Generator
* Icebreaker / Intro Suggestions
* Startup Idea Generator

### Filters & Discovery

* Match Intent Tags (Co-founder, Mentee, Hackathon)
* Geo-Remote Filtering
* Tech Stack Preferences

### Gamification

* XP, Leveling, Badges
* Trust Score
* Leaderboards
* Daily/Weekly Quests

### Collaboration

* Team-Up Zone
* Project Showcases
* Skill Endorsements
* Contribution Tracker

### Events / Insights

* Hackathon Finder
* Coding Challenges
* Analytics Dashboard

### Premium Ideas

* Portfolio/Resume Builder
* Voice Bio
* VR Tech Café (Future Scope)
* Premium Matchmaking

---

## 🛠 6. MVP Feature Summary

| Feature                              | Included in MVP? | AI/Real-time? |
| ------------------------------------ | ---------------- | ------------- |
| Sign up/Login                        | ✅                | No            |
| Profile Creation/Update              | ✅                | No            |
| Swipe/Connect UI                     | ✅                | No            |
| Match List                           | ✅                | No            |
| Real-time Chat                       | ✅                | ✅             |
| Project Collaboration Posts          | ✅                | No            |
| AI Recommendations (people/projects) | ✅                | ✅             |
| Notifications                        | ✅                | Optional      |

---
