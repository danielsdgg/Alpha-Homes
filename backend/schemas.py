from marshmallow import Schema, fields

class ProfileSchema(Schema):
    id = fields.Integer()
    user_id = fields.Integer()
    firstname = fields.String()
    lastname = fields.String()
    phone_number = fields.String()
    blocked = fields.Boolean()
    image = fields.String()

class BookingSchema(Schema):
    id = fields.Integer()
    property_id = fields.Integer()
    user_id = fields.Integer()
    price = fields.Integer()
    date = fields.Date()
    
class SalesSchema(Schema):
    id = fields.Integer()
    customer_id = fields.Integer()
    description = fields.String()
    property_id = fields.Integer()
    payment_type = fields.String()

class ViewingSchema(Schema):
    id = fields.Integer()
    date = fields.Date()
    fees = fields.Integer()
    client_id = fields.Integer()
    property_id = fields.Integer()
    payment_type = fields.String()
    
class UserSchema(Schema):
    id = fields.Integer()
    username = fields.String()
    email = fields.String()
    password = fields.String()
    role = fields.String()
    profile = fields.Nested(ProfileSchema, many=True)
    bookings = fields.Nested(BookingSchema, many=True)
    
class ImagesSchema(Schema):
    id = fields.Integer()
    property_id = fields.Integer()
    image1 = fields.String()
    image2 = fields.String()
    image3 = fields.String()

class AmenitiesSchema(Schema):
    id = fields.Integer()
    property_id = fields.Integer()
    name = fields.String()

class PropertiesSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    property_type = fields.String()
    location = fields.String()
    selling_price = fields.Integer()
    leasing_price = fields.Integer()
    description = fields.String()
    leasing = fields.Boolean()
    status = fields.Boolean()
    images = fields.Nested(ImagesSchema, many=True)
    amenities = fields.Nested(AmenitiesSchema, many=True)
    bookings = fields.Nested(BookingSchema, many=True)

class FeedbackSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    email = fields.String()
    message = fields.String()






                            


