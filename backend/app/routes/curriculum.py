from flask_restx import Namespace, Resource, fields
from flask import jsonify
from app.extensions import db
from app.models import User, Curriculum, UserCurriculum, CurriculumAverage

# Namespace for curriculum-related operations
curriculum_ns = Namespace("Curriculums", description="Operations related to curriculums")

# Model for the API response
user_curriculum_model = curriculum_ns.model(
    "Curriculum",
    {
        "curriculum_id": fields.Integer(required=True, description="Curriculum ID"),
        "name": fields.String(required=True, description="Curriculum name"),
        "description": fields.String(description="Curriculum description"),
        "average_score": fields.Float(description="Average score for this curriculum"),
    },
)

# curriculum model for Swagger documentation
curriculum_model = curriculum_ns.model("Curriculum", {
    "curriculum_id": fields.Integer(readOnly=True, description="The unique ID of a curriculum"),
    "name": fields.String(required=True, description="The name of the curriculum"),
    "description": fields.String(description="The description of the curriculum"),
})

@curriculum_ns.route("/")
class curriculumList(Resource):
    @curriculum_ns.marshal_with(curriculum_model)
    def get(self):
        """Get all curriculums"""
        curriculums = Curriculum.query.all()
        return curriculums, 200
    
    @curriculum_ns.expect(curriculum_model)
    @curriculum_ns.marshal_with(curriculum_model, code=201)
    def post(self):
        """Create a new curriculum"""
        new_curriculum_data = curriculum_ns.payload
        new_curriculum = Curriculum(
            name=new_curriculum_data["name"],
            description=new_curriculum_data["description"]
        )
        db.session.add(new_curriculum)
        db.session.commit()
        return new_curriculum, 201
    
       
# Endpoint to retrieve curriculum followed by a learner
@curriculum_ns.route("/<int:user_id>/curricula")
class UserCurricula(Resource):
    @curriculum_ns.response(200, "Success", [user_curriculum_model])
    @curriculum_ns.response(404, "User not found")
    def get(self, user_id):
        """
        Retrieve curricula followed by a learner along with their scores
        """
        # Check if the user exists
        user = User.query.filter_by(user_id=user_id).first()
        if not user:
            return {"message": "User not found"}, 404

        # Retrieve the curricula associated with the user
        user_curricula = (
            db.session.query(Curriculum, CurriculumAverage)
            .join(UserCurriculum, UserCurriculum.curriculum_id == Curriculum.curriculum_id)
            .outerjoin(CurriculumAverage, (CurriculumAverage.curriculum_id == Curriculum.curriculum_id) & (CurriculumAverage.user_id == user_id))
            .filter(UserCurriculum.user_id == user_id)
            .all()
        )

        # Build the response
        result = []
        for curriculum, average in user_curricula:
            result.append({
                "curriculum_id": curriculum.curriculum_id,
                "name": curriculum.name,
                "description": curriculum.description,
                "average_score": average.average if average else None
            })

        return jsonify(result)
