from werkzeug.security import generate_password_hash
from app import app, db
from models import Feedback

# Define user information (id, email, username, password)

Feedback_data = [{"id": 1, "name": "Chere", "password": "Wibrow", "email": "cwibrow0@4shared.com"},
    {"id": 2, "name": "Anne-marie", "password": "Llewellyn", "email": "allewellyn1@mashable.com"},
    {"id": 3, "name": "Aurore", "password": "Haughin", "email": "ahaughin2@marriott.com"},
    {"id": 4, "name": "Ax", "password": "Mcwhinney", "email": "amcwhinney3@wordpress.org"},
    {"id": 5, "name": "Maegan", "password": "Nichols", "email": "mnichols4@wordpress.com"}]

roles = ['Bookings', 'Feedback', 'client', 'UserAuth', 'Admin', 'Amenities', 'Properties', 'Sales', 'Agent', 'Payments']

with app.app_context():
    feedback_entries = []
    for i, data in enumerate(Feedback_data):
        # Hashing passwords should be done for users, not feedback entries
        # If you have a User model, you can use the generate_password_hash here.
        feedback_entry = Feedback(**data)
        feedback_entries.append(feedback_entry)

    db.session.add_all(feedback_entries)
    db.session.commit()
    print("Data sent successfully")