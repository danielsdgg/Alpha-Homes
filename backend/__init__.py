from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__,
    static_url_path='',
    static_folder='../../alpha-frontend/build',
    template_folder='../../alpha-frontend/build')

CORS(app)

# app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://ngare:ZshwQ7z875L7cMwGf7KsSuTT2cXCIoO7@dpg-cj5lrk1itvpc73enkisg-a.oregon-postgres.render.com/alphahomes"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = "b'j~S\xcf\x11\x85\x04\x00D\xf0\x91\xc13\xb1\xc0\x04'"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"

app.config["API_ENVIRONMENT"] = "sandbox" #sandbox or production
app.config["APP_KEY"] = "vbxsneeZ9IMFoyKKIgOIQQZFlawAADnP" # App_key from developers portal
app.config["APP_SECRET"] = "WAzDhQVhitIXwiTc" #App_Secret from developers portal


db = SQLAlchemy(app)
ma = Marshmallow(app)
migrate = Migrate(app, db)
ma.init_app(app)


@app.route("/", methods= ["GET"])
def display():
    return render_template("index.html")

