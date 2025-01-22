from flask import Flask, send_from_directory
from app.extensions import db, migrate, jwt, api
from app.routes import register_routes
from flask_cors import CORS

def create_app(config_class="config.Config"):
    app = Flask(__name__)
    app.config.from_object(config_class)
    app.config['RESTX_VALIDATE'] = True  # Validation automatique des schémas RESTx
    app.config['REST_MASK_SWAGGER'] = False  # Éviter les masquages dans Swagger UI

    # Initialiser les extensions
    db.init_app(app)
    api.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # Configurer CORS
    CORS(app)

    # Configurer les fichiers statiques pour Swagger UI
    @app.route('/swaggerui/<path:filename>')
    def swagger_static(filename):
        return send_from_directory('static/swaggerui', filename)

    # Enregistrer les routes
    register_routes(app)

    return app
