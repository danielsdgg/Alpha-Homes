from flask import jsonify, request, make_response, Blueprint
from server.models import Profile
from server.schemas import ProfileSchema
from server import db

profile = Blueprint("profile", __name__)

@profile.route('/profile', methods=['GET'])
def get_all_profiles():
    profile_list = Profile.query.all()
    profile_data = ProfileSchema(many = True).dump(profile_list)  
    return make_response(jsonify(profile_data), 200)

@profile.route("/profile/<int:id>", methods=["GET"])
def profile_item(id):
    profile = Profile.query.filter_by(id=id).first()
    if not profile:
        return make_response(jsonify({"message": "profile not found"}), 404)

    serialized_profile = ProfileSchema().dump(profile)
    return make_response(jsonify(serialized_profile), 200)


@profile.route('/profile', methods=['POST'])
def create_profile():
    data = request.get_json()
    profile = ProfileSchema().load(data)
    new_profile = Profile(**profile)
    db.session.add(new_profile)
    db.session.commit()
    profile_data = ProfileSchema().dump(new_profile)
    return make_response(jsonify(profile_data), 201)


@profile.route('/profile/<int:id>', methods=['PATCH'])
def update_profile_details(id):
    profile = Profile.query.filter_by(id = id).first()
    data = request.get_json()
    profiles = ProfileSchema().load(data)
    for field, value in profiles.items():
        setattr(profile, field, value)
    db.session.add(profile)
    db.session.commit() 

    profiles_data = ProfileSchema().dump(profile)
    return make_response(jsonify(profiles_data))


@profile.route('/profile/<int:id>', methods=['PUT'])
def update_profile(id):
    profile = Profile.query.filter_by(id = id).first()
    data = request.get_json()
    profiles = ProfileSchema().load(data)
    for field, value in profiles.items():
        setattr(profile, field, value)
    db.session.add(profile)
    db.session.commit() 

    profiles_data = ProfileSchema().dump(profile)
    return make_response(jsonify(profiles_data))

@profile.route('/profile/<int:id>', methods=['DELETE'])
def delete_profile(id):
    profile = Profile.query.filter_by(id = id).first()
    if not profile:
        return jsonify(message='profile not found'), 404
    
    db.session.delete(profile)
    db.session.commit()

    return make_response(jsonify(message='profile deleted successfully'),200)