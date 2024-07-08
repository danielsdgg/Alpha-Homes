from flask import jsonify, request, make_response,Blueprint
from server import db
from server.models import Viewing
from server.schemas import ViewingSchema

viewing = Blueprint("viewing", __name__)

@viewing.route('/viewing', methods=['GET'])
def get_all_viewings():
    viewing_list = Viewing.query.all()
    viewing_data = ViewingSchema(many = True).dump(viewing_list)  
    return make_response(jsonify(viewing_data), 200)

@viewing.route("/viewing/<int:id>", methods=["GET"])
def viewing_item(id):
    viewing = Viewing.query.filter_by(id=id).first()
    if not viewing:
        return make_response(jsonify({"message": "viewing not found"}), 404)

    serialized_viewing = ViewingSchema().dump(viewing)
    return make_response(jsonify(serialized_viewing), 200)


@viewing.route('/viewing', methods=['POST'])
def create_viewing():
    data = request.get_json()
    viewing = ViewingSchema().load(data)
    new_viewing = Viewing(**viewing)
    db.session.add(new_viewing)
    db.session.commit()
    viewing_data = ViewingSchema().dump(new_viewing)
    return make_response(jsonify(viewing_data), 201)

@viewing.route('/viewing/<int:id>', methods=['PATCH'])
def update_viewing_details(id):
    viewing = Viewing.query.filter_by(id = id).first()
    data = request.get_json()
    viewings = ViewingSchema().load(data)
    for field, value in viewings.items():
        setattr(viewing, field, value)
    db.session.add(viewing)
    db.session.commit() 

    viewings_data = ViewingSchema().dump(viewing)
    return make_response(jsonify(viewings_data))


@viewing.route('/viewing/<int:id>', methods=['PUT'])
def update_viewing(id):
    viewing = Viewing.query.filter_by(id = id).first()
    data = request.get_json()
    viewings = ViewingSchema().load(data)
    for field, value in viewings.items():
        setattr(viewing, field, value)
    db.session.add(viewing)
    db.session.commit() 

    viewings_data = ViewingSchema().dump(viewing)
    return make_response(jsonify(viewings_data))

@viewing.route('/viewing/<int:id>', methods=['DELETE'])
def delete_viewing(id):
    viewing = Viewing.query.filter_by(id = id).first()
    if not viewing:
        return jsonify(message='viewing not found'), 404
    
    db.session.delete(viewing)
    db.session.commit()

    return make_response(jsonify(message='viewing deleted successfully'),200)