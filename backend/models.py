from server import db

class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(255))
    email = db.Column(db.String(255))
    password = db.Column(db.String(255))
    role = db.Column(db.String(255))
    
class Profile(db.Model):
    __tablename__ = "profile"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    firstname = db.Column(db.String(255))
    lastname = db.Column(db.String(255))
    phone_number = db.Column(db.String(255))
    blocked = db.Column(db.Boolean)
    image = db.Column(db.String(255))

    users = db.relationship("User", backref = "profile")

class Properties(db.Model):
    __tablename__ = 'properties'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255))
    property_type = db.Column(db.String(255))
    location = db.Column(db.String(255))
    selling_price = db.Column(db.Integer)
    leasing_price = db.Column(db.Integer)
    description = db.Column(db.String(255))
    leasing = db.Column(db.Boolean)
    status = db.Column(db.Boolean)

    images = db.relationship("Images", backref="properties")
    amenities = db.relationship("Amenities", backref = "properties")

class Images(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key = True)
    property_id = db.Column(db.Integer, db.ForeignKey("properties.id"))
    image1 = db.Column(db.String(255))
    image2 = db.Column(db.String(255))
    image3 = db.Column(db.String(255))

class Amenities(db.Model):
    __tablename__ = "amenities"

    id = db.Column(db.Integer, primary_key = True)
    property_id = db.Column(db.Integer, db.ForeignKey("properties.id"))
    name = db.Column(db.String(255))

class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey("properties.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    price = db.Column(db.Integer)
    date = db.Column(db.Date)

    properties = db.relationship("Properties", backref = "bookings")
    users = db.relationship("User", backref = "bookings")


class Sales(db.Model):
    __tablename__ = "sales"

    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    description = db.Column(db.String(255))
    property_id = db.Column(db.Integer, db.ForeignKey("properties.id"))
    payment_type = db.Column(db.String(255))

    properties = db.relationship("Properties", backref = "sales")
    users = db.relationship("User", backref = "sales")

class Viewing(db.Model):
    __tablename__ = "viewing"

    id = db.Column(db.Integer,primary_key = True)

    date = db.Column(db.Date)
    fees = db.Column(db.Integer)
    client_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    property_id = db.Column(db.Integer, db.ForeignKey("properties.id"))
    payment_type = db.Column(db.String(255))

    properties = db.relationship("Properties", backref = "viewings")
    users = db.relationship("User", backref = "viewings")

class Feedback(db.Model):
    __tablename__ = "feedback"
    
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255))
    email = db.Column(db.String(255))
    message =  db.Column(db.String(255))

    





                            


