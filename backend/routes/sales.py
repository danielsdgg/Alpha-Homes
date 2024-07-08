from flask import jsonify, request, make_response,Blueprint
from server.models import Sales
from server.schemas import SalesSchema
from server import db

sales = Blueprint("sales", __name__)

@sales.route('/sales', methods=['GET'])
def get_all_saless():
    sales_list = Sales.query.all()
    sales_data = SalesSchema(many = True).dump(sales_list)  
    return make_response(jsonify(sales_data), 200)

@sales.route("/sales/<int:id>", methods=["GET"])
def sales_item(id):
    sales = Sales.query.filter_by(id=id).first()
    if not sales:
        return make_response(jsonify({"message": "sales not found"}), 404)

    serialized_sales = SalesSchema().dump(sales)
    return make_response(jsonify(serialized_sales), 200)


@sales.route('/sales', methods=['POST'])
def create_sales():
    data = request.get_json()
    sales = SalesSchema().load(data)
    new_sales = Sales(**sales)
    db.session.add(new_sales)
    db.session.commit()
    sales_data = SalesSchema().dump(new_sales)
    return make_response(jsonify(sales_data), 201)

@sales.route('/sales/<int:id>', methods=['PATCH'])
def update_sales_details(id):
    sale = Sales.query.filter_by(id = id).first()
    data = request.get_json()
    sales = SalesSchema().load(data)
    for field, value in sales.items():
        setattr(sale, field, value)
    db.session.add(sale)
    db.session.commit() 

    sales_data = SalesSchema().dump(sale)
    return make_response(jsonify(sales_data))


@sales.route('/sales/<int:id>', methods=['PUT'])
def update_sales(id):
    sale = Sales.query.filter_by(id = id).first()
    data = request.get_json()
    sales = SalesSchema().load(data)
    for field, value in sales.items():
        setattr(sale, field, value)
    db.session.add(sale)
    db.session.commit() 

    sales_data = SalesSchema().dump(sale)
    return make_response(jsonify(sales_data))

@sales.route('/sales/<int:id>', methods=['DELETE'])
def delete_sales(id):
    sales = Sales.query.filter_by(id = id).first()
    if not sales:
        return jsonify(message='sales not found'), 404
    
    db.session.delete(sales)
    db.session.commit()

    return make_response(jsonify(message='sales deleted successfully'),200)