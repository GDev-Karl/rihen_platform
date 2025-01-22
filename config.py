import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://karl:adminkarl@localhost/rihen_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    #SECRET_KEY = os.environ.get('SECRET_KEY', 'dev_secret_key')  # Clé secrète pour JWT