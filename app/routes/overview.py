from flask_restx import Namespace, Resource
from flask import jsonify
from app.models import User, Progress, Project, UserStatistics, Ranking
from app.extensions import db

# Déclare le namespace
overview_ns = Namespace("overview", description="Overview of user statistics")

@overview_ns.route('/<int:user_id>')
class OverviewResource(Resource):
    def get(self, user_id):
        """
        Retrieve overview data for the given user.
        """
        # Courses in Progress
        courses_in_progress = (
            db.session.query(Progress)
            .filter_by(user_id=user_id, status="In Progress")
            .count()
        )

        # Active Projects
        active_projects = (
            db.session.query(Project)
            .filter_by(status="In Progress")
            .count()
        )

        # Total Learning Time
        learning_time = (
            db.session.query(UserStatistics.total_learning_time)
            .filter_by(user_id=user_id)
            .scalar() or 0
        )
        learning_hours = f"{learning_time // 60}h {learning_time % 60}m"

        # Community Score
        community_score = (
            db.session.query(Ranking)
            .filter_by(user_id=user_id)
            .first()
        )
        community_score = community_score.average if community_score else 0

        # Response
        data = [
            {"title": "Courses in progress", "value": courses_in_progress},
            {"title": "Active Projects", "value": active_projects},
            {"title": "Hours Learning", "value": learning_hours},
            {"title": "Community score", "value": community_score},
        ]

        return jsonify(data)
