from flask_restx import Namespace, Resource, fields
from app.extensions import db
from app.models import Module

module_ns = Namespace("modules", description="Operations related to modules")

module_model = module_ns.model(
    "Module", {
        "module_id": fields.Integer(readOnly=True, description="The unique ID of the module"),
        "name": fields.String(required=True, description="The name of the module"),
        "description": fields.String(description="A description of the module"),
        "curriculum_id": fields.Integer(required=True, description="The curriculum ID the module belongs to"),
        "prerequisite_module_id": fields.Integer(description="The ID of the prerequisite module")
    }
)

@module_ns.route("/")
class ModuleList(Resource):
    @module_ns.marshal_with(module_model, as_list=True)
    def get(self):
        """Get all modules"""
        modules = Module.query.all()
        return modules, 200

    @module_ns.expect(module_model)
    @module_ns.marshal_with(module_model, code=201)
    def post(self):
        """Create a new module"""
        module_data = module_ns.payload
        new_module = Module(
            name=module_data["name"],
            description=module_data.get("description"),
            curriculum_id=module_data["curriculum_id"],
            prerequisite_module_id=module_data.get("prerequisite_module_id")
        )
        db.session.add(new_module)
        db.session.commit()
        return new_module, 201
