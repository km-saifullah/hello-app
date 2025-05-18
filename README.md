# Hello Express App with MongoDB (Dockerized) 💥

A simple Express.js application using MongoDB, fully containerized with Docker and Docker Compose. This project demonstrates how to use Mongoose to store and update data inside a MongoDB container.

## 📦 Features

- Express.js server (ES Modules)
- MongoDB (running in a separate Docker container)
- One route `/api/v1/welcome` to:
  - Store message `"hello universe"`
  - Increment a counter each time it’s accessed
- Fully containerized using Docker Compose

## 🛠️ Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## ⚙️ Build and run containers

**Step-1:** Clone the Repository

```bash
git clone https://github.com/km-saifullah/hello-app.git
```

**Step-2:** Build and runs containers

```bash
docker-compose up --build
```

**Note**: This builds and runs both the express-app and mongo-db containers

**Step-3:** View Logs

```bash
docker-compose logs app
docker-compose logs mongo
```

**Step-4:** Stop and remove containers

```bash
docker-compose down
```

**Note**: When we want to stop the containers we need to run the above commnad only.

## 🔥 API Endpoints

1. Root route: http://localhost:8000/
2. Welcome Message Route: http://localhost:8000/api/v1/welcome

## 🚀 Test

```bash
curl http://localhost:8000/api/v1/welcome
```

## 🙋‍♂️ Author

Khaled Md Saifullah <br>
Backend Developer

Follow me on:

- [Linkedin](https://www.linkedin.com/in/kmsaifullah)
- [Github](https://github.com/km-saifullah)
