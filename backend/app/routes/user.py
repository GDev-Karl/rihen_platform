from flask_restx import Namespace, Resource, fields
from app.models import User
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
        "email": fields.String(required=True, description="The email address of the user"),
        "password": fields.String(required=True, description="The password of the user"),
    }))
    def post(self):
        """Authenticate a user"""
        data = user_ns.payload
        email = data.get("email")
        password = data.get("password")

        # check if the user exists and if the password is correct
        user = User.query.filter_by(email=email).first()
        if user and user.password == password:
            return {
                "message": "Authentication successful",
                "user_id": user.id,
                "name": user.name,
                "email": user.email,
            }, 200
        else:
            return {"message": "Invalid email or password"}, 401

