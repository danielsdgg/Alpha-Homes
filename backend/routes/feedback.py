from flask import jsonify, request, make_response,Blueprint
from server import db
from server.models import Feedback
from server.schemas import FeedbackSchema

feedback = Blueprint("feedback", __name__)

@feedback.route('/feedback', methods=['GET'])
def get_all_feedbacks():
    feedback_list = Feedback.query.all()
    feedback_data = FeedbackSchema(many = True).dump(feedback_list)  
    return make_response(jsonify(feedback_data), 200)

@feedback.route("/feedback/<int:id>", methods=["GET"])
def feedback_item(id):
    feedback = Feedback.query.filter_by(id=id).first()
    if not feedback:
        return make_response(jsonify({"message": "feedback not found"}), 404)

    serialized_feedback = FeedbackSchema().dump(feedback)
    return make_response(jsonify(serialized_feedback), 200)


@feedback.route('/feedback', methods=['POST'])
def create_feedback():
    data = request.get_json()
    feedback = FeedbackSchema().load(data)
    new_feedback = Feedback(**feedback)
    db.session.add(new_feedback)
    db.session.commit()
    feedback_data = FeedbackSchema().dump(new_feedback)
    return make_response(jsonify(feedback_data), 201)

@feedback.route('/feedback/<int:id>', methods=['PATCH'])
def update_feedback_details(id):
    feedback = Feedback.query.filter_by(id = id).first()
    data = request.get_json()
    feedbacks = FeedbackSchema().load(data)
    for field, value in feedbacks.items():
        setattr(feedback, field, value)
    db.session.add(feedback)
    db.session.commit() 

    feedbacks_data = FeedbackSchema().dump(feedback)
    return make_response(jsonify(feedbacks_data))


@feedback.route('/feedback/<int:id>', methods=['PUT'])
def update_feedback(id):
    feedback = Feedback.query.filter_by(id = id).first()
    data = request.get_json()
    feedbacks = FeedbackSchema().load(data)
    for field, value in feedbacks.items():
        setattr(feedback, field, value)
    db.session.add(feedback)
    db.session.commit() 

    feedbacks_data = FeedbackSchema().dump(feedback)
    return make_response(jsonify(feedbacks_data))

@feedback.route('/feedback/<int:id>', methods=['DELETE'])
def delete_feedback(id):
    feedback = Feedback.query.filter_by(id = id).first()
    if not feedback:
        return jsonify(message='feedback not found'), 404
    
    db.session.delete(feedback)
    db.session.commit()

    return make_response(jsonify(message='feedback deleted successfully'),200)