from flask import jsonify, request, make_response, Blueprint
from server.models import Images
from server.schemas import ImagesSchema
from server import db

images = Blueprint("images", __name__)

@images.route('/images', methods=['GET'])
def get_all_imagess():
    images_list = Images.query.all()
    images_data = ImagesSchema(many = True).dump(images_list)  
    return make_response(jsonify(images_data), 200)

@images.route("/images/<int:id>", methods=["GET"])
def images_item(id):
    images = Images.query.filter_by(id=id).first()
    if not images:
        return make_response(jsonify({"message": "images not found"}), 404)

    serialized_images = ImagesSchema().dump(images)
    return make_response(jsonify(serialized_images), 200)


@images.route('/images', methods=['POST'])
def create_images():
    data = request.get_json()
    images = ImagesSchema().load(data)
    new_images = Images(**images)
    db.session.add(new_images)
    db.session.commit()
    images_data = ImagesSchema().dump(new_images)
    return make_response(jsonify(images_data), 201)

@images.route('/images/<int:id>', methods=['PATCH'])
def update_images_details(id):
    image = Images.query.filter_by(id = id).first()
    data = request.get_json()
    images = ImagesSchema().load(data)
    for field, value in images.items():
        setattr(image, field, value)
    db.session.add(image)
    db.session.commit() 

    images_data = ImagesSchema().dump(image)
    return make_response(jsonify(images_data))


@images.route('/images/<int:id>', methods=['PUT'])
def update_images(id):
    image = Images.query.filter_by(id = id).first()
    data = request.get_json()
    images = ImagesSchema().load(data)
    for field, value in images.items():
        setattr(image, field, value)
    db.session.add(image)
    db.session.commit() 

    images_data = ImagesSchema().dump(image)
    return make_response(jsonify(images_data))

@images.route('/images/<int:id>', methods=['DELETE'])
def delete_images(id):
    images = Images.query.filter_by(id = id).first()
    if not images:
        return jsonify(message='images not found'), 404
    
    db.session.delete(images)
    db.session.commit()

    return make_response(jsonify(message='images deleted successfully'),200)