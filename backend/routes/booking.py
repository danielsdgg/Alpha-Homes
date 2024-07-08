from flask import jsonify, request, make_response, Blueprint
from server.models import Booking
from server.schemas import BookingSchema
from server import db

booking = Blueprint("booking", __name__)

@booking.route('/booking', methods=['GET'])
def get_all_bookings():
    booking_list = Booking.query.all()
    booking_data = BookingSchema(many = True).dump(booking_list)  
    return make_response(jsonify(booking_data), 200)

@booking.route("/booking/<int:id>", methods=["GET"])
def booking_item(id):
    booking = Booking.query.filter_by(id=id).first()
    if not booking:
        return make_response(jsonify({"message": "booking not found"}), 404)

    serialized_booking = BookingSchema().dump(booking)
    return make_response(jsonify(serialized_booking), 200)


@booking.route('/booking', methods=['POST'])
def create_booking():
    data = request.get_json()
    booking = BookingSchema().load(data)
    new_booking = Booking(**booking)
    db.session.add(new_booking)
    db.session.commit()
    booking_data = BookingSchema().dump(new_booking)
    return make_response(jsonify(booking_data), 201)

@booking.route('/booking/<int:id>', methods=['PATCH'])
def update_booking_details(id):
    booking = Booking.query.filter_by(id = id).first()
    data = request.get_json()
    bookings = BookingSchema().load(data)
    for field, value in bookings.items():
        setattr(booking, field, value)
    db.session.add(booking)
    db.session.commit() 

    booking_data = BookingSchema().dump(booking)
    return make_response(jsonify(booking_data))


@booking.route('/booking/<int:id>', methods=['PUT'])
def update_booking(id):
    booking = Booking.query.filter_by(id = id).first()
    data = request.get_json()
    bookings = BookingSchema().load(data)
    for field, value in bookings.items():
        setattr(booking, field, value)
    db.session.add(booking)
    db.session.commit() 

    booking_data = BookingSchema().dump(booking)
    return make_response(jsonify(booking_data))

@booking.route('/booking/<int:id>', methods=['DELETE'])
def delete_booking(id):
    booking = Booking.query.filter_by(id = id).first()
    if not booking:
        return jsonify(message='booking not found'), 404
    
    db.session.delete(booking)
    db.session.commit()

    return make_response(jsonify(message='Booking deleted successfully'),200)