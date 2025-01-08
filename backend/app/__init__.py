from flask import Flask
from app.extensions import db, migrate, jwt, api
from app.routes import register_routes

def create_app(config_class="config.Config"):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialiser les extensions
    db.init_app(app)
    api.init_app(app)
    migrate.init_app(app, db)
    #jwt.init_app(app)

    # Enregistrer les routes
    register_routes(app)

    return app


