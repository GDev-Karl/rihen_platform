from datetime import date
from app.extensions import db

# User Table
class User(db.Model):
    __tablename__ = 'user'

    user_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    role = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    registration_date = db.Column(db.Date, default=date.today)

# Curriculum Table
class Curriculum(db.Model):
    __tablename__ = 'curriculum'

    curriculum_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=True)

# User_Curriculum Table
class UserCurriculum(db.Model):
    __tablename__ = 'user_curriculum'

    user_curriculum_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    curriculum_id = db.Column(db.Integer, db.ForeignKey('curriculum.curriculum_id'), nullable=False)

# Module Table
class Module(db.Model):
    __tablename__ = 'module'

    module_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=True)
    curriculum_id = db.Column(db.Integer, db.ForeignKey('curriculum.curriculum_id'), nullable=False)
    prerequisite_module_id = db.Column(db.Integer, db.ForeignKey('module.module_id'), nullable=True)

# Course_Description Table
class CourseDescription(db.Model):
    __tablename__ = 'course_description'

    course_description_id = db.Column(db.Integer, primary_key=True)
    skills = db.Column(db.String, nullable=True)
    weight = db.Column(db.Integer, nullable=True)
    concepts = db.Column(db.String, nullable=True)
    requirements = db.Column(db.Text, nullable=True)
    learning_objectives = db.Column(db.Text, nullable=True)

# Course Table
class Course(db.Model):
    __tablename__ = 'course'

    course_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.Integer, db.ForeignKey('course_description.course_description_id'), nullable=False)
    module_id = db.Column(db.Integer, db.ForeignKey('module.module_id'), nullable=False)
    duration = db.Column(db.Integer, nullable=False)  # duration in minutes

# Task Table
class Task(db.Model):
    __tablename__ = 'task'

    task_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=True)
    course_id = db.Column(db.Integer, db.ForeignKey('course.course_id'), nullable=False)
    type = db.Column(db.String, nullable=False)  # e.g., Quiz, Project
    score = db.Column(db.Float, nullable=True)
    file = db.Column(db.String, nullable=True)
    repo = db.Column(db.String, nullable=True)
    directory = db.Column(db.String, nullable=True)

# Evaluation Table
class Evaluation(db.Model):
    __tablename__ = 'evaluation'

    evaluation_id = db.Column(db.Integer, primary_key=True)
    module_id = db.Column(db.Integer, db.ForeignKey('module.module_id'), nullable=False)
    description = db.Column(db.Text, nullable=True)
    score = db.Column(db.Float, nullable=True)
    assessment_date = db.Column(db.Date, nullable=False)

# Project Table
class Project(db.Model):
    __tablename__ = 'project'

    project_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=True)
    module_id = db.Column(db.Integer, db.ForeignKey('curriculum.curriculum_id'), nullable=False)
    deadline = db.Column(db.Date, nullable=False)
    status = db.Column(db.String, nullable=False)  # In Progress, Completed, Abandoned

# Progress Table
class Progress(db.Model):
    __tablename__ = 'progress'

    progress_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    module_id = db.Column(db.Integer, db.ForeignKey('module.module_id'), nullable=False)
    status = db.Column(db.String, nullable=False)  # In Progress, Completed
    learning_time = db.Column(db.Integer, nullable=True)  # in minutes

# Curriculum_Average Table
class CurriculumAverage(db.Model):
    __tablename__ = 'curriculum_average'

    average_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    curriculum_id = db.Column(db.Integer, db.ForeignKey('curriculum.curriculum_id'), nullable=False)
    average = db.Column(db.Float, nullable=True)

# User_Statistics Table
class UserStatistics(db.Model):
    __tablename__ = 'user_statistics'

    stat_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    curriculum_id = db.Column(db.Integer, db.ForeignKey('curriculum.curriculum_id'), nullable=False)
    total_learning_time = db.Column(db.Integer, nullable=True)  # in minutes
    last_access = db.Column(db.Date, nullable=True)

# General_Statistics Table
class GeneralStatistics(db.Model):
    __tablename__ = 'general_statistics'

    general_stat_id = db.Column(db.Integer, primary_key=True)
    curriculum_id = db.Column(db.Integer, db.ForeignKey('curriculum.curriculum_id'), nullable=False)
    average_score = db.Column(db.Float, nullable=True)
    total_learning_hours = db.Column(db.Float, nullable=True)
    total_students = db.Column(db.Integer, nullable=True)

# Ranking Table
class Ranking(db.Model):
    __tablename__ = 'ranking'

    ranking_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    curriculum_id = db.Column(db.Integer, db.ForeignKey('curriculum.curriculum_id'), nullable=False)
    rank = db.Column(db.Integer, nullable=True)
    average = db.Column(db.Float, nullable=True)
