# 🎬 Movie Explorer

Movie Explorer is a React web application that allows users to browse trending movies, search for specific titles, and view detailed information and trailers — all using The Movie Database (TMDb) API.

---

## 🧠 API Usage

Movie Explorer interacts with **The Movie Database (TMDb) API** to fetch movie-related data. All requests are made using `axios` and require a Bearer token for authentication.

## ✨ Features 

Movie Explorer is a responsive, user-friendly web app that allows users to discover, search, and explore movies using the TMDb API. Below is a list of core features implemented in the project:

### 🔥 Trending Movies

- Displays trending movies for the week fetched from TMDb.

---

### 🔍 Search Movies

- Dynamic fetching of search results as users type.

---

### 🎬 Movie Details Page

Detailed view for selected movie including: 
  - Poster
  - Title
  - Overview
  - Release date
  - Rating
  - Genres 
  - Movie trailer

---

### 📺 Embedded Trailers

- Fetches available trailers from TMDb for each movie and embeds in a responsive `<iframe>`.

---

### 🎨 Responsive Design with MUI

- Built with **Material-UI (MUI)** for styling components:
  - MUI's `Card`, `Typography`, `Chip`, `TextField`, `Autocomplete`, and `Grid` are used for responsive layouts.
  - Mobile-first, user-friendly design.
  - **MUI's `sx` prop** used for custom styling.
 
---

### 🗂️ State Management with React Redux

- **React Redux** is used for global state management:
  - Manages the **trending movies**, **search results**, **pagination**, and **genre lists**.
  - **Redux Toolkit** used to create slices for managing states like movies and page numbers.

---

### 🧭 Routing with React Router

- Implements client-side routing using **React Router**

This setup ensures that the app is highly responsive, interactive, and capable of handling large amounts of movie data efficiently.



