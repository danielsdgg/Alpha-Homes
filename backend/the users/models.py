from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    password = db.Column(db.String(128))  
    email = db.Column(db.String(100), unique=True)
    role = db.Column(db.String(50),unique=True)
def confirm_password(self, password):
        return check_password_hash(self.password, password)

def __repr__(self):
        return f'<user: {self.name}>'
