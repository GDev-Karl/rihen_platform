# Rihen Universe - Backend

This repository contains the **backend** of the **Rihen Universe** platform, developed with **Flask** and documented using **Flask-RESTx**. The backend handles business logic and communication with the PostgreSQL database.

## Features
- REST API for managing users and data.
- Auto-generated Swagger documentation with Flask-RESTx.

## Prerequisites
- Python 3.10 or higher
- PostgreSQL

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone -b develop_backend <repository_url>
   cd develop_backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
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

6. The API will be accessible at:
   ```
   http://127.0.0.1:5000
   ```

## Deployed API
Access the deployed api here:
```
https://rihen.seedsoftengine.com/
```

## Contribution
Contributions are welcome! Feel free to open an issue or submit a pull request for improvements or bug fixes.

---
