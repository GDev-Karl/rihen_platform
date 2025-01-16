from flask import Flask
from app.extensions import api
from app.routes.courses import course_ns
from app.routes.curriculum import curriculum_ns
from app.routes.evaluation import evaluation_ns
from app.routes.module import module_ns
from app.routes.overview import overview_ns
from app.routes.projets import project_ns
from app.routes.task import task_ns
from app.routes.user import user_ns

def register_routes(app):
    api.add_namespace(course_ns, path="/courses")
    api.add_namespace(curriculum_ns, path="/curriculum")
    api.add_namespace(evaluation_ns, path="/evaluation")
    api.add_namespace(module_ns, path="/modules")
    api.add_namespace(overview_ns, path="/overview")
    api.add_namespace(project_ns, path="/projects")
    api.add_namespace(task_ns, path="/tasks")
    api.add_namespace(user_ns, path="/users")