from flask_restx import Namespace, Resource, fields
from app.models import User  # Modèle que nous définirons ensuite
from app.extensions import db

# Namespace
user_ns = Namespace("users", description="Operations related to users")

# User model for Swagger documentation
user_model = user_ns.model("User", {
    "user_id": fields.Integer(readOnly=True, description="The unique ID of a user"),
    "name": fields.String(required=True, description="The name of the user"),
    "email": fields.String(required=True, description="The email address of the user"),
    "registration_date": fields.String(description="The registration date of the user")
})

# In-memory storage (for testing before DB integration)
users = []

@user_ns.route("/")
class UserList(Resource):
    @user_ns.marshal_with(user_model, as_list=True)
    def get(self):
        """Get all users"""
        return users

    @user_ns.expect(user_model)
    @user_ns.marshal_with(user_model, code=201)
    def post(self):
        """Create a new user"""
        new_user = user_ns.payload
        new_user["user_id"] = len(users) + 1
        users.append(new_user)
        return new_user, 201
