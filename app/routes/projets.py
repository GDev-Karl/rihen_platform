from flask_restx import Namespace, Resource, fields
from app.extensions import db
from app.models import Project

project_ns = Namespace("projects", description="Operations related to projects")

project_model = project_ns.model(
    "Project", {
        "project_id": fields.Integer(readOnly=True, description="The unique ID of the project"),
        "title": fields.String(required=True, description="The title of the project"),
        "description": fields.String(description="The description of the project"),
        "module_id": fields.Integer(required=True, description="The ID of the related module"),
        "deadline": fields.Date(required=True, description="The deadline of the project"),
        "status": fields.String(required=True, description="The status of the project (e.g., In Progress, Completed, Abandoned)")
    }
)

@project_ns.route("/")
class ProjectList(Resource):
    @project_ns.marshal_with(project_model, as_list=True)
    def get(self):
        """Get all projects"""
        projects = Project.query.all()
        return projects, 200

    @project_ns.expect(project_model)
    @project_ns.marshal_with(project_model, code=201)
    def post(self):
        """Create a new project"""
        project_data = project_ns.payload
        new_project = Project(
            title=project_data["title"],
            description=project_data.get("description"),
            module_id=project_data["module_id"],
            deadline=project_data["deadline"],
            status=project_data["status"]
        )
        db.session.add(new_project)
        db.session.commit()
        return new_project, 201
