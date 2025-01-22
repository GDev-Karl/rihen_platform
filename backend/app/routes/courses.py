from flask_restx import Namespace, Resource, fields
from app.extensions import db
from app.models import Course

course_ns = Namespace('progress', description='Progress-related operations')

course_model = course_ns.model(
    "Course", {
        "course_id": fields.Integer(readOnly=True, description="The unique ID of the course"),
        "title": fields.String(required=True, description="The title of the course"),
        "description": fields.Integer(required=True, description="The ID of the course description"),
        "module_id": fields.Integer(required=True, description="The ID of the module the course belongs to"),
        "duration": fields.Integer(required=True, description="The duration of the course in minutes")
    }
)

# progress model
course_progress = course_ns.model('ProgressResponse', {
    'label': fields.String,
    'value': fields.Float
})

@course_ns.route("/")
class CourseList(Resource):
    @course_ns.marshal_with(course_model, as_list=True)
    def get(self):
        """Get all courses"""
        courses = Course.query.all()
        return courses, 200

    @course_ns.expect(course_model)
    @course_ns.marshal_with(course_model, code=201)
    def post(self):
        """Create a new course"""
        course_data = course_ns.payload
        new_course = Course(
            title=course_data["title"],
            description=course_data["description"],
            module_id=course_data["module_id"],
            duration=course_data["duration"]
        )
        db.session.add(new_course)
        db.session.commit()
        return new_course, 201

@course_ns.route('/courses/<int:user_id>')
class CourseProgress(Resource):
    @course_ns.marshal_with(course_progress)
    def get(self, user_id):
        """Get the percentage of courses completed by a user"""
        total_courses = Course.query.count()
        if total_courses == 0:
            return {'label': 'Courses', 'value': 0.0}

        completed_courses = (
            course_progress.query.filter_by(user_id=user_id, status='Completed')
            .join(Course, Course.module_id == course_progress.module_id)
            .count()
        )

        percentage = (completed_courses / total_courses) * 100
        return {'label': 'Courses', 'value': percentage}
