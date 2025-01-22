from flask_restx import Namespace, Resource, fields
from app.models import Task
from app.extensions import db

task_ns = Namespace("tasks", description="Operations related to tasks")

task_model = task_ns.model(
    "Task", {
        "task_id": fields.Integer(readOnly=True, description="The unique ID of the task"),
        "title": fields.String(required=True, description="The title of the task"),
        "description": fields.String(description="The description of the task"),
        "course_id": fields.Integer(required=True, description="The ID of the related course"),
        "type": fields.String(required=True, description="The type of the task (e.g., Quiz, Project)"),
        "score": fields.Float(description="The score of the task"),
        "file": fields.String(description="The file associated with the task"),
        "repo": fields.String(description="The repository associated with the task"),
        "directory": fields.String(description="The directory associated with the task")
    }
)

@task_ns.route("/")
class TaskList(Resource):
    @task_ns.marshal_with(task_model, as_list=True)
    def get(self):
        """Get all tasks"""
        tasks = Task.query.all()
        return tasks, 200

    @task_ns.expect(task_model)
    @task_ns.marshal_with(task_model, code=201)
    def post(self):
        """Create a new task"""
        task_data = task_ns.payload
        new_task = Task(
            title=task_data["title"],
            description=task_data.get("description"),
            course_id=task_data["course_id"],
            type=task_data["type"],
            score=task_data.get("score"),
            file=task_data.get("file"),
            repo=task_data.get("repo"),
            directory=task_data.get("directory")
        )
        db.session.add(new_task)
        db.session.commit()
        return new_task, 201
