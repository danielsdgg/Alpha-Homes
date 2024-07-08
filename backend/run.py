from . import app
from routes.amenities import amenities
from routes.booking import booking
from routes.images import images
from routes.profile import profile
from routes.property import properties
from routes.sales import sales
from routes.user import users
from routes.viewing import viewing
from routes.feedback import feedback
import payment

app.register_blueprint(amenities)
app.register_blueprint(booking)
app.register_blueprint(images)
app.register_blueprint(profile)
app.register_blueprint(sales)
app.register_blueprint(users)
app.register_blueprint(viewing)
app.register_blueprint(properties)
app.register_blueprint(feedback)

if __name__ == "__main__":
    app.run(debug = True)