from flask import Flask, request, jsonify, redirect, url_for
from models import db, User
from flask_migrate import Migrate
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from server.routes.users import users
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://mohamed:mohamed@localhost/alpha'  # Replace with your database URI (e.g., MySQL, PostgreSQL, etc.)

migrate = Migrate(app, db)
db.init_app(app)

jwt =JWTManager(app )

app.register_blueprint(users, url_prefix='/users')
@app.route('/home')
def home():
    return "msg: welcome"

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
        metadata = {
                    "role": user.role,
                    "username": user.username
                }
        return redirect(url_for(f'users.{user.role}', token = token))
    return make_response(jsonify(metadata),200)

@users.route('/common')
@jwt_required()
def common():
   details = get_jwt()
   return jsonify(detail=f"Welcome{details['name']}")



@users.route('/info')
@jwt_required(optional=True)
def info():
    return jsonify(detail="info")


@app.route('/admin/<token>')
@jwt_required(optional=True )
def admin(token):
 return jsonify(token=f"admin:(token)")


@app.route('/tenant/<token>')
@jwt_required()
def tenant(token):
 return jsonify(token=f"tenant:(token)")

@app.route('/superadmin/<token>')
@jwt_required()
def superadmin(token):
     return jsonify(token=f"superadmin:(token)")


@app.route('/potentialClient/<token>')
@jwt_required()
def potentialClient(token):
     details=get_jwt()
     if details['user_role']!='admin':
         return redirect (url_for('common'))
     return jsonify(detail="regestering in progress")

if __name__ == "__main__":
    app.run(debug=True)
