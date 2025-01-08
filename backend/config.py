import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://karl:adminkarl@localhost/rihen_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    REST_MASK_SWAGGER = False
    
"""
    class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "rihen_universe_secret_key")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "sqlite:///rihen_universe.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "rihen_universe_jwt_secret_key")
"""
