from flask import jsonify, request, make_response
from server import db
from server.models import Amenities
from server.schemas import AmenitiesSchema
from flask import Blueprint

amenities = Blueprint("amenities", __name__)

@amenities.route('/amenities', methods=['GET'])
def get_all_amenitiess():
    amenities_list = Amenities.query.all()
    amenities_data = AmenitiesSchema(many = True).dump(amenities_list)  
    return make_response(jsonify(amenities_data), 200)

@amenities.route("/amenities/<int:id>", methods=["GET"])
def amenities_item(id):
    amenities = Amenities.query.filter_by(id=id).first()
    if not amenities:
        return make_response(jsonify({"message": "amenities not found"}), 404)

    serialized_amenities = AmenitiesSchema().dump(amenities)
    return make_response(jsonify(serialized_amenities), 200)


@amenities.route('/amenities', methods=['POST'])
def create_amenities():
    data = request.get_json()
    amenities = AmenitiesSchema().load(data)
    new_amenities = Amenities(**amenities)
    db.session.add(new_amenities)
    db.session.commit()
    amenities_data = AmenitiesSchema().dump(new_amenities)
    return make_response(jsonify(amenities_data), 201)

@amenities.route('/amenities/<int:id>', methods=['PATCH'])
def update_amenities_details(id):
    amenity = Amenities.query.filter_by(id = id).first()
    data = request.get_json()
    amenities = AmenitiesSchema().load(data)
    for field, value in amenities.items():
        setattr(amenity, field, value)
    db.session.add(amenity)
    db.session.commit() 

    amenities_data = AmenitiesSchema().dump(amenity)
    return make_response(jsonify(amenities_data))


@amenities.route('/amenities/<int:id>', methods=['PUT'])
def update_amenities(id):
    amenity = Amenities.query.filter_by(id = id).first()
    data = request.get_json()
    amenities = AmenitiesSchema().load(data)
    for field, value in amenities.items():
        setattr(amenity, field, value)
    db.session.add(amenity)
    db.session.commit() 

    amenities_data = AmenitiesSchema().dump(amenity)
    return make_response(jsonify(amenities_data))

@amenities.route('/amenities/<int:id>', methods=['DELETE'])
def delete_amenities(id):
    amenities = Amenities.query.filter_by(id = id).first()
    if not amenities:
        return jsonify(message='amenities not found'), 404
    
    db.session.delete(amenities)
    db.session.commit()

    return make_response(jsonify(message='amenities deleted successfully'),200)