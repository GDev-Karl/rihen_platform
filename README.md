# Rihen Universe - Fullstack

This branch contains the **complete codebase** for the **Rihen Universe** platform, a collaboration and e-learning solution. The project is structured into two main parts: the `frontend` and the `backend`, each located in its respective directory.

---

## Project Overview
### Purpose
Rihen Universe is a platform designed to facilitate:
- **Project Management**: Streamlining internal communication and task management.
- **Internal Training**: Providing an efficient environment for employee development.

### Key Technologies
- **Frontend**: Built with [Next.js](https://nextjs.org/), providing a dynamic and responsive user interface.
- **Backend**: Developed with [Flask](https://flask.palletsprojects.com/) and documented using [Flask-RESTx](https://flask-restx.readthedocs.io/).
- **Database**: PostgreSQL for reliable and structured data storage.

---

## Project Structure
```
main/
|-- frontend/    # Contains the Next.js frontend code
|-- backend/     # Contains the Flask backend code
|-- README.md    # Documentation for the fullstack project
```

### Frontend
The `frontend/` directory includes all the code for the user interface built with Next.js.
- Entry point: `frontend/src/pages/index.js`
- Reusable components: `frontend/src/components/`
- Styles: `frontend/src/styles/`

Refer to the `frontend/README.md` for detailed setup instructions.

### Backend
The `backend/` directory includes the API and business logic developed with Flask and Flask-RESTx.
- API routes: `backend/app/routes/`
- Database models: `backend/app/models.py`

Refer to the `backend/README.md` for detailed setup instructions.

---

## Prerequisites
- **Node.js** (v18 or higher)
- **Python** (v3.10 or higher)
- **PostgreSQL**

---

## Setup Instructions
### Step 1: Clone the Repository
```bash
git clone https://github.com/GDev-Karl/rihen_platform.git
cd rihen_platform
```

### Step 2: Setup the Frontend
1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Access the frontend at:
   ```
   http://localhost:3000
   ```

### Step 3: Setup the Backend
1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows
   venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure the PostgreSQL database in the `.env` file:
   ```
   DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
   ```
5. Start the Flask server:
   ```bash
   flask run
   ```
6. Access the backend API at:
   ```
   http://127.0.0.1:5000
   ```

---

## Deployment

- **Frontend**: Not deployed yet
- **Backend**: [Rihen API](https://rihen.seedsoftengine.com/) 

---

## Contribution Guidelines
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of your changes"
   ```
4. Push the branch to your fork and open a pull request.

---
