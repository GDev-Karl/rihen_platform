from flask_restx import Namespace, Resource, fields
from app.extensions import db
from app.models import Evaluation


evaluation_ns = Namespace("evaluations", description="Operations related to evaluations")

evaluation_model = evaluation_ns.model(
    "Evaluation", {
        "evaluation_id": fields.Integer(readOnly=True, description="The unique ID of the evaluation"),
        "module_id": fields.Integer(required=True, description="The ID of the related module"),
        "description": fields.String(description="The description of the evaluation"),
        "score": fields.Float(description="The score of the evaluation"),
        "assessment_date": fields.Date(required=True, description="The assessment date of the evaluation")
    }
)

@evaluation_ns.route("/")
class EvaluationList(Resource):
    @evaluation_ns.marshal_with(evaluation_model, as_list=True)
    def get(self):
        """Get all evaluations"""
        evaluations = Evaluation.query.all()
        return evaluations, 200

    @evaluation_ns.expect(evaluation_model)
    @evaluation_ns.marshal_with(evaluation_model, code=201)
    def post(self):
        """Create a new evaluation"""
        evaluation_data = evaluation_ns.payload
        new_evaluation = Evaluation(
            module_id=evaluation_data["module_id"],
            description=evaluation_data.get("description"),
            score=evaluation_data.get("score"),
            assessment_date=evaluation_data["assessment_date"]
        )
        db.session.add(new_evaluation)
        db.session.commit()
        return new_evaluation, 201
