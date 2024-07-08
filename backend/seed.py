from server import app,db
from server.models import *

with app.app_context():
    users= [
    {
        "username": "cynthia",  
        "email":"cynthiaochieng@gmail.com",      
        "password":"12345",   
        "role":"Client",
    },]

    for user in users:
        user_item = User(
            username = user["username"],
            email = user["email"],
            password = user["password"],
            role = user["role"],
            )
    # db.session.add(user_item)
    # db.session.commit()

    properties = [
        {
            "name":"Nestle Park",           
            "property_type":"Apartment",            
            "location":"South C, Nairobi",
            "selling_price":20000,       
            "leasing_price" :10000,       
            "description":"Nestle Park",        
            "leasing":False ,     
            "status": True
        }
    ]

    for property in properties:
        property_item = Properties(
            name = property["name"],
            property_type = property["property_type"],
            location = property["location"],
            selling_price = property["selling_price"],
            leasing_price = property["leasing_price"],
            description = property["description"],
            leasing = property["leasing"],
            status = property["status"],
        )
        
    db.session.add(property_item)
    db.session.commit()

    sales = [
        {
            "customer_id":2,
            "description":"MPESA",
            "property_id":1,
            "payment_type":"MPESA",            

        }
    ]

    for sale in sales:
        sale_item = Sales(
            customer_id = sale["customer_id"],
            description = sale["description"],
            property_id = sale["property_id"],
            payment_type = sale["payment_type"],
        )
        
    # db.session.add(sale_item)
    # db.session.commit()

    bookings =[ 
        {
            "price": 2000,
            "date": '12-7-2023',
            "property_id":1,
            "user_id":2
        }
    ]

    for booking in bookings:
        booking_item = Booking(
            price = booking["price"], 
            date = booking["date"],            
            property_id = booking["property_id"],
            user_id = booking["user_id"],  
        )
        
    # db.session.add(booking_item)
    # db.session.commit()

    profiles =[ 
        {
           
            "user_id": 2,
            "firstname": 'Daniel',
            "lastname":"Muiruri",
            "phone_number":"0712345678",
            "blocked":False,
            "image":"https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]

    for profile in profiles:
        profile_item = Profile(
            user_id = profile["user_id"], 
            firstname = profile["firstname"],            
            lastname = profile["lastname"],
            phone_number = profile["phone_number"], 
            blocked = profile["blocked"],
            image = profile["image"] 
        )
    # db.session.add(profile_item)
    # db.session.commit()

    images =[ 
        {
           
            "property_id": 1,
            "image1":"https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "image2":"https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "image3":"https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]

    for image in images:
        image_item = Images(
            property_id = image["property_id"], 
            image1 = image["image1"], 
            image2 = image["image2"], 
            image3 = image["image3"] 
        )
    # db.session.add(image_item)
    # db.session.commit()


    
        
     

    


