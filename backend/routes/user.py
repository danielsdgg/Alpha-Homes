from flask import jsonify, request, make_response,redirect, url_for, Blueprint
from server.models import User
from server.schemas import UserSchema
from server import app, db
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token,get_jwt, unset_jwt_cookies, jwt_required, JWTManager

jwt = JWTManager(app)

users = Blueprint('users',__name__)

@users.route('/users', methods=['GET'])
def get_all_users():
    users_list = User.query.all()
    user_data = UserSchema(many = True).dump(users_list)  
    return make_response(jsonify(user_data), 200)

@users.route("/users/<string:email>", methods=["GET"])
def user_item(email):
    user = User.query.filter_by(email=email).first()
    if not user:
        return make_response(jsonify({"message": "User not found"}), 404)

    serialized_user = UserSchema().dump(user)
    return make_response(jsonify(serialized_user), 200)


@users.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = UserSchema().load(data)
    new_user = User(**user)
    db.session.add(new_user)
    db.session.commit()
    user_data = UserSchema().dump(new_user)
    return make_response(jsonify(user_data), 201)


@users.route('/users/<int:id>', methods=['PATCH'])
def update_user_details(id):
    user = User.query.filter_by(id = id).first()
    data = request.get_json()
    users = UserSchema().load(data)
    for field, value in users.items():
        setattr(user, field, value)
    db.session.add(user)
    db.session.commit() 

    users_data = UserSchema().dump(user)
    return make_response(jsonify(users_data))


@users.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.filter_by(id = id).first()
    data = request.get_json()
    users = UserSchema().load(data)
    for field, value in users.items():
        setattr(user, field, value)
    db.session.add(user)
    db.session.commit() 

    users_data = UserSchema().dump(user)
    return make_response(jsonify(users_data))

@users.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.filter_by(id = id).first()
    if not user:
        return jsonify(message='User not found'), 404
    
    db.session.delete(user)
    db.session.commit()

    return make_response(jsonify(message='User deleted successfully'),200)


@users.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data["email"]
    password = data["password"]
    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({'message': 'Wrong Email or Password'}), 401
    if user:

        token = create_access_token(identity=email)
        # metadata = {
        #             "role": user.role,
        #             "username": user.username
        #         }
        # return redirect(url_for(f'users.{user.role}', token = token))
        return redirect(url_for('users.get_token', token = token))
    return make_response(jsonify(token),200)

@users.route('/signup', methods=['POST'])
def signup():
    data=request.get_json()
    username = data["username"]
    email = data["email"]
    password = data["password"]
    role = data["role"]    
    
    password_hash = generate_password_hash(password)

    if User.query.filter_by(email=email).first():
        return jsonify(detail = 'User exists')
    
    else:
        
        nuser=User(
            email=email,
            password=password_hash,
            username=username, 
            role = role
        )    
        db.session.add(nuser)
        db.session.commit()
        response_body={f'Welcome {nuser.username}':True,'message':'You are added successfully'}
        res=make_response(jsonify(response_body),201)
        res.headers["Content-Type"]="application/json"
        return res
                                                        
@users.route('/logout', methods = ["GET"])
def logout():
    response = jsonify(detail = "Logout successful")
    unset_jwt_cookies(response)
    return response


@users.route('/common')
@jwt_required()
def common():
   details = get_jwt()
   return jsonify(detail=f"Welcome{details['name']}")


@users.route('/info')
@jwt_required(optional=True)
def info():
    return jsonify(detail="info")


@users.route('/admin/<token>', methods = ["GET"])
@jwt_required(optional=True)
def admin(token):
   return jsonify(token=f"admin:{token}")


@users.route('/client/<token>', methods = ["GET"])
@jwt_required(optional=True)
def tenant(token):
    return jsonify(token=f"tenant:{token}")

@users.route('/agent/<token>', methods = ["GET"])
@jwt_required(optional=True)
def agent(token):
    return jsonify(token=f"agent:{token}")


@users.route('/potentialClient/<token>')
@jwt_required(optional=True )
def potentialClient(token):
     details=get_jwt()
     if details['user_role']!='admin':
         return redirect (url_for('common'))
     return jsonify(detail="regestering in progress")

@users.route('/token/<token>', methods = ["GET"])
@jwt_required(optional=True)
def get_token(token):
    return jsonify(token)