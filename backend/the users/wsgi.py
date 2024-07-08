from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///db.db'  # Replace with your database URI (e.g., MySQL, PostgreSQL, etc.)
db = SQLAlchemy(app)

# Import the User model here if it's defined in a separate module.
# Make sure the 'User' class is defined before creating the database.

if __name__ == "__main__":
    app.run(debug=True)
