from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_restx import Api

api  = Api(title="RiHen Universe: Learning Management System API", 
           version="1.0", 
           description="A RESTful API for managing users, curriculums, courses, and more, for Rihen Universe")
db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()
