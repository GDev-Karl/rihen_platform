from flask import jsonify
from flask_restx import Namespace, Resource, fields
from app.models import User, UserCurriculum, Curriculum, CurriculumAverage
from app.extensions import db
from datetime import datetime

# Namespace
user_ns = Namespace("users", description="Operations related to users")

# User model for Swagger documentation
user_model = user_ns.model("User", {
    "user_id": fields.Integer(readOnly=True, description="The unique ID of a user"),
    "name": fields.String(required=True, description="The name of the user"),
    "email": fields.String(required=True, description="The email address of the user"),
    "password": fields.String(required=True, description="The password of the user"),
    "registration_date": fields.DateTime(description="The registration date of the user"),
})

# Model for the API response
curriculum_model = user_ns.model(
    "Curriculum",
    {
        "curriculum_id": fields.Integer(required=True, description="Curriculum ID"),
        "name": fields.String(required=True, description="Curriculum name"),
        "description": fields.String(description="Curriculum description"),
        "average_score": fields.Float(description="Average score for this curriculum"),
    },
)

@user_ns.route("/")
class UserList(Resource):
    @user_ns.marshal_with(user_model, as_list=True)
    def get(self):
        """Get all users"""
        users  =  User.query.all()
        result = []
        for user in users:
            result.append({
                "user_id": user.id,
                "name": user.name,
                "email": user.email,
                "password": user.password,
                "registration_date": user.registration_date
            })
        return result

    @user_ns.expect(user_model)
    @user_ns.marshal_with(user_model, code=201)
    def post(self):
        """Create a new user"""
        new_user_data = user_ns.payload
        new_user = User(
            name=new_user_data["name"],
            email=new_user_data["email"],
            password=new_user_data["password"]
        )
        db.session.add(new_user)
        db.session.commit()

        # Convert the new user instance to a dictionary format
        response_data = {
            "user_id": new_user.id,
            "name": new_user.name,
            "email": new_user.email,
            "password": new_user.password,
            "registration_date": new_user.registration_date.strftime('%Y-%m-%d %H:%M:%S')
        }
        return response_data, 201
    
    
@user_ns.route("/login")
class UserLogin(Resource):
    @user_ns.expect(user_ns.model("Login", {
        "username": fields.String(required=True, description="The username of the user"),
        "password": fields.String(required=True, description="The password of the user"),
    }))
    def post(self):
        """Authenticate a user"""
        data = user_ns.payload
        username = data.get("username")
        password = data.get("password")

        # Check if the user exists and if the password is correct
        user = User.query.filter_by(name=username).first()
        if user and user.password == password:
            return {
                "message": "Authentication successful",
                "user_id": user.id,
                "name": user.name,
                "email": user.email,
            }, 200
        else:
            return {"message": "Invalid username or password"}, 401


@user_ns.route("/<int:user_id>/curricula")
class UserCurricula(Resource):
    @user_ns.response(200, "Success", [curriculum_model])
    @user_ns.response(404, "User not found")
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