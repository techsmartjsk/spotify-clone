# Spotify Clone

A full-stack Spotify Clone project built with Nest JS, React JS, PostgreSQL, and Prisma.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the Spotify Clone project! This project aims to replicate the core features of the popular music streaming service Spotify. With a robust backend built on Nest JS, a dynamic and responsive frontend using React JS, and data storage in PostgreSQL managed by Prisma, this application provides a solid foundation for creating your music streaming platform.

## Features

- User authentication and account management
- Browse and search for songs, albums, and artists
- Create, modify, and delete playlists
- Interactive music player with controls and progress bar
- Seamless integration between frontend and backend
- Real-time updates for playlist modifications
- Recommendation engine for personalized music suggestions
- Social features like playlist sharing and user following

## Technologies Used

- [Nest JS](https://nestjs.com/)
- [React JS](https://reactjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)

## Getting Started

### Prerequisites

- Node.js and npm installed
- PostgreSQL database instance
- Prisma CLI installed (`npm install -g prisma`)

### Installation

1. Clone the repository: `git clone https://github.com/techsmartjsk/spotify-clone.git`
2. Navigate to the project directory: `cd spotify-clone`
3. Install dependencies for both frontend and backend: `npm install`

### Configuration

1. Set up your PostgreSQL database and update the database connection details in `backend/src/prisma/schema.prisma`.
2. Apply database migrations: `npx prisma migrate dev`
3. Start the backend server: `npm run start:backend`
4. Start the frontend application: `npm run start:frontend`

## Usage

Visit `http://localhost:3000` in your web browser to access the Spotify Clone application. Log in, explore, and enjoy the music streaming experience!

## Contributing

Contributions are welcome! If you find any issues or have ideas for improvements, please open an issue or submit a pull request. For major changes, please discuss them in the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
