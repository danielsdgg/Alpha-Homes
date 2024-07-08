from flask import request
import requests
from requests.auth import HTTPBasicAuth
from server import app

@app.route('/payments', methods=['POST'])
def init_stk():
    amount = request.get_json()["amount"]
    phone = request.get_json()["phone"]

    endpoint = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
    access_token = get_access_token()
    headers = { "Authorization": "Bearer %s" % access_token }

    data = {
    
    "BusinessShortCode": 174379,
    "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMxMTE2MTUyNzQw",
    "Timestamp": "20231116152740",
    "TransactionType": "CustomerPayBillOnline",
    "Amount": amount,
    "PartyA": phone,
    "PartyB": 174379,
    "PhoneNumber": phone,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "Alpha Homes",
    "TransactionDesc": "Payment of Booking Fees" 
  }
  

    res = requests.post(endpoint, json = data, headers = headers)
    return res.json()

def get_access_token():
    consumer_key = "s8eDwoTXNIRsxgYqCaaQGTAOUFi1U39p"
    consumer_secret = "MDvTAPvFY9TFXf4i"
    endpoint = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'

    r = requests.get(endpoint, auth=HTTPBasicAuth(consumer_key, consumer_secret))
    data = r.json()
    return data['access_token']

# @app.route('/payments', methods=['POST'])
# def init_stk():
#     amount = request.get_json()["amount"]
#     phone = request.get_json()["phone"]

#     endpoint = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest'
#     access_token = get_access_token()
#     headers = { "Authorization": "Bearer %s" % access_token }

#     data = {
    
#     "BusinessShortCode": 174379,
#     "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMwOTI5MTUyNjAz",
#     "Timestamp": "<timeStamp>",
#     "TransactionType": "CustomerPayBillOnline",
#     "Amount": amount,
#     "PartyA": phone,
#     "PartyB": 174379,
#     "PhoneNumber": phone,
#     "CallBackURL": "https://mydomain.com/path",
#     "AccountReference": "Lakucha Dishes",
#     "TransactionDesc": "Payment of Dishes" 
#   }
  

#     res = requests.post(endpoint, json = data, headers = headers)
#     return res.json()

# def get_access_token():
#     consumer_key = "4IcwUdC0enLhQ5Muc6CBJA6zumb7tqbX"
#     consumer_secret = "kegPo5b7DigJUEDZ"
#     endpoint = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'

#     r = requests.get(endpoint, auth=HTTPBasicAuth(consumer_key, consumer_secret))
#     data = r.json()
#     return data['access_token']



