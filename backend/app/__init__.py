from flask import Flask
from app.extensions import db, migrate, jwt, api
from app.routes import register_routes
from flask_cors import CORS

def create_app(config_class="config.Config"):
    app = Flask(__name__)
    app.config.from_object(config_class)
    CORS(app, origins=["http://localhost:3000"]) #frontend url

    # Initialize extensions
    db.init_app(app)
    api.init_app(app)
    migrate.init_app(app, db)
    #jwt.init_app(app)

    # Save the routes
    register_routes(app)

    return app


