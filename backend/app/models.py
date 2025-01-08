from datetime import datetime
from app.extensions import db


# User Model
class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    registration_date = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    enrollments = db.relationship("Enrollment", back_populates="user", cascade="all, delete")
    projects = db.relationship("UserProject", back_populates="user", cascade="all, delete")


# Curriculum Model
class Curriculum(db.Model):
    __tablename__ = "curriculums"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)

    # Relationships
    modules = db.relationship("Module", back_populates="curriculum", cascade="all, delete")
    enrollments = db.relationship("Enrollment", back_populates="curriculum", cascade="all, delete")


# Module Model
class Module(db.Model):
    __tablename__ = "modules"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    curriculum_id = db.Column(db.Integer, db.ForeignKey("curriculums.id"), nullable=False)
    prerequisite_id = db.Column(db.Integer, db.ForeignKey("modules.id"), nullable=True)  # Self-reference for prerequisites

    # Relationships
    curriculum = db.relationship("Curriculum", back_populates="modules")
    prerequisite = db.relationship("Module", remote_side=[id])  # Self-referencing relationship
    courses = db.relationship("Course", back_populates="module", cascade="all, delete")


# Course Model
class Course(db.Model):
    __tablename__ = "courses"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=True)
    duration_hours = db.Column(db.Float, nullable=False)
    module_id = db.Column(db.Integer, db.ForeignKey("modules.id"), nullable=False)

    # Relationships
    module = db.relationship("Module", back_populates="courses")
    evaluations = db.relationship("Evaluation", back_populates="course", cascade="all, delete")


# Evaluation Model
class Evaluation(db.Model):
    __tablename__ = "evaluations"

    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Float, nullable=False)
    max_score = db.Column(db.Float, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey("courses.id"), nullable=False)

    # Relationships
    course = db.relationship("Course", back_populates="evaluations")
    user = db.relationship("User", back_populates="evaluations")


# Enrollment Model
class Enrollment(db.Model):
    __tablename__ = "enrollments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    curriculum_id = db.Column(db.Integer, db.ForeignKey("curriculums.id"), nullable=False)
    average_score = db.Column(db.Float, nullable=True)

    # Relationships
    user = db.relationship("User", back_populates="enrollments")
    curriculum = db.relationship("Curriculum", back_populates="enrollments")


# Project Model
class Project(db.Model):
    __tablename__ = "projects"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    deadline = db.Column(db.DateTime, nullable=True)

    # Relationships
    user_projects = db.relationship("UserProject", back_populates="project", cascade="all, delete")


# UserProject Model (Association table for users and projects)
class UserProject(db.Model):
    __tablename__ = "user_projects"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
    score = db.Column(db.Float, nullable=True)

    # Relationships
    user = db.relationship("User", back_populates="projects")
    project = db.relationship("Project", back_populates="user_projects")
