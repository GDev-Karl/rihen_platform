from flask import Flask
from app.extensions import api
from app.routes.user import user_ns
from app.routes.overview import overview_ns

def register_routes(app):
    # Ajoute les namespaces
    #api.add_namespace(auth_ns, path="/auth")
    #api.add_namespace(course_ns, path="/courses")
    api.add_namespace(user_ns, path="/users")
    api.add_namespace(overview_ns, path="/overview")