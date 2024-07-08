from flask import jsonify, request, make_response, Blueprint
from server.models import Properties
from server.schemas import PropertiesSchema
from server import db

properties = Blueprint("properties", __name__)

@properties.route('/propertyes', methods=['GET'])
def get_all_properties():
    properties_list = Properties.query.all()
    properties_data = PropertiesSchema(many = True).dump(properties_list)  
    return make_response(jsonify(properties_data), 200)

@properties.route("/properties/<int:id>", methods=["GET"])
def properties_item(id):
    properties = Properties.query.filter_by(id=id).first()
    if not properties:
        return make_response(jsonify({"message": "properties not found"}), 404)

    serialized_properties = PropertiesSchema().dump(properties)
    return make_response(jsonify(serialized_properties), 200)

@properties.route('/properties', methods=['POST'])
def create_properties():
    data = request.get_json()
    properties = PropertiesSchema().load(data)
    new_properties = Properties(**properties)
    
    db.session.add(new_properties)
    db.session.commit()
    properties_data = PropertiesSchema().dump(new_properties)
    return make_response(jsonify(properties_data), 201)

@properties.route('/properties/<int:id>', methods=['PATCH'])
def update_properties_details(id):
    property = Properties.query.filter_by(id = id).first()
    data = request.get_json()
    properties = PropertiesSchema().load(data)
    for field, value in properties.items():
        setattr(property, field, value)
    db.session.add(property)
    db.session.commit() 

    properties_data = PropertiesSchema().dump(property)
    return make_response(jsonify(properties_data))

@properties.route('/properties/<int:id>', methods=['PUT'])
def update_properties(id):
    property = Properties.query.filter_by(id = id).first()
    data = request.get_json()
    properties = PropertiesSchema().load(data)
    for field, value in properties.items():
        setattr(property, field, value)
    db.session.add(property)
    db.session.commit() 

    properties_data = PropertiesSchema().dump(property)
    return make_response(jsonify(properties_data))

@properties.route('/properties/<int:id>', methods=['DELETE'])
def delete_properties(id):
    properties = Properties.query.filter_by(id = id).first()
    if not properties:
        return jsonify(message='properties not found'), 404
    
    db.session.delete(properties)
    db.session.commit()

    return make_response(jsonify(message='properties deleted successfully'),200)