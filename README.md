# Rihen Universe Platform

Rihen Universe is a collaboration and e-learning platform designed to facilitate project management and internal training within a company. It combines a public-facing website showcasing company information with an internal intranet system offering training resources for authenticated users.

---

## **Project Overview**

This project includes two primary parts:
1. **Corporate Website**: Provides comprehensive information about the company, its values, services, and achievements.
2. **Intranet Platform**: A secure e-learning environment for internal users to access training materials and manage projects. Users must authenticate to access the intranet.

---

## **Features**

### Corporate Website:
- Public information about the company.
- Clear navigation and user-friendly design.

### Intranet Platform:
- Access to training courses and resources for internal employees.
- Authentication-based access to ensure data security.
- Seamless navigation between the website and intranet using a login button.

---

## **Project Structure**

- **Components**: Each page or functionality is built as a reusable component, and each window-specific set of components resides in its folder under `src/components`. 
    - `WindowA/`: Components specific to a particular page or functionality.
    - `WindowB/`: Components for another page or functionality.
    - `shared/`: Contains reusable components like buttons, modals, or cards.

- **Services**: Centralized management of API calls and external communications.
    - `apiClient.js`: Handles HTTP requests and API configuration.
    - `auth.js`: Manages user authentication and token handling.

- **Contexts**: React Context for global state management.
    - `AuthContext.js`: Handles user authentication status.
    - `ThemeContext.js`: Manages light and dark themes for the platform.

- **Hooks**: Custom hooks for reusing logic across the application.
    - `useAuth.js`: Provides logic for managing user sessions.
    - `useFetch.js`: Fetches data from the API with reusable configurations.

- **Utilities**: Helper functions and constants used across the app.
    - `helpers.js`: Includes utility functions like data formatting.
    - `constants.js`: Contains globally used constants, like API URLs.

---

## **Setup and Installation**

### Prerequisites
- Node.js (version 16 or later)
- React
- Material UI

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rihen-platform.git
   cd rihen-platform

2. Install dependencies:
   ```bash
   npm install

3. Start the application:
   ```bash
   git clone https://github.com/your-username/rihen-platform.git
   cd rihen-platform

4. Open your browser and navigate to http://localhost:3000 to access the platform.:

