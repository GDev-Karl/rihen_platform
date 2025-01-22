from flask_jwt_extended import verify_jwt_in_request
from functools import wraps
from flask import jsonify

def jwt_required_with_roles(required_roles):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            verify_jwt_in_request()
            claims = kwargs.get('claims')
            if claims and claims.get('roles') in required_roles:
                return func(*args, **kwargs)
            return jsonify({"msg": "Access denied"}), 403
        return wrapper
    return decorator
