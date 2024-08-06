# User
## Add new user
 Post request
Request-http://localhost:5001/api/v1/user/signin
{
"email":"asd@gmail.com",
"password":"12345"
}
Response
{
"message": "Success",
"data": {
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFhMzgwYzJmY2VkOGVjMjcyZWY2NGUiLCJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJpYXQiOjE3MjI0MzE1MDB9.zwWr5NKkGQeVPGSUZEjKR_x5WGOojsN42TZW2F79Ucg",
"id": "66aa380c2fced8ec272ef64e",
"name": ""
}
}

Update user information and upload profile image
Request-
url-http://localhost:5001/api/v1/user/uploadinfo
send “profileimage” and “name” and “token” in bearer token in post request
Response-
{
"message": "Success",
"data": {
"updateduser": {
"_id": "66aa380c2fced8ec272ef64e",
"email": "asd@gmail.com",
"name": "abnbn",
"password": "$2b$10$JA1UrH318/uEqQFxcQzcte5gzytXijEBd02JTL8vu/pLRD8qHNOQW",
"profileimage": "profileimage\\66aa380c2fced8ec272ef64e.jpg",
"cart": [],
"createdAt": "2024-07-31T13:11:40.786Z",
"updatedAt": "2024-07-31T13:15:39.017Z",
"__v": 0
}
}
}

## Login Request
Request-Post
url-http://localhost:5001/api/v1/user/login
request body-
{
"email":"asd@gmail.com",
"password":"12345"
}
Response-
{
"message": "Success",
"data": {
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFhMzgwYzJmY2VkOGVjMjcyZWY2NGUiLCJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJpYXQiOjE3MjI0MzIwMTl9.DZzCxH3KOH3tDBA5xVcOtkP3xHKFqgKywDrOpF-SVXk",
"id": "66aa380c2fced8ec272ef64e",
"name": "abnbn"
}
}
## Get Info
 Request-Get
url-http://localhost:5001/api/v1/user/getinfo
Response-
{
"_id": "66aa380c2fced8ec272ef64e",
"email": "asd@gmail.com",
"name": "abnbn",
"password": "$2b$10$JA1UrH318/uEqQFxcQzcte5gzytXijEBd02JTL8vu/pLRD8qHNOQW",
"profileimage": "profileimage\\66aa380c2fced8ec272ef64e.jpg",
"cart": [],
"createdAt": "2024-07-31T13:11:40.786Z",
"updatedAt": "2024-07-31T13:15:39.017Z",
"__v": 0
}

## Add to cart
 Request-post
url-http://localhost:5001/api/v1/user/addtocart
send bearer token in auth, “itemId”, “number”
{
  "_id":"66aaffa1bfd7082a8e43a9de",
  "number":1
}
Response-
{
  "message": "Success",
  "data": {
    "email": "guptasatyamml@gmail.com",
    "cart": [
      "66aaffa1bfd7082a8e43a9de",
      "66aaffa1bfd7082a8e43a9de",
      "66aaffa1bfd7082a8e43a9de"
    ]
  }
}

# Seller
## Signin
 Request-post
url-http://localhost:5001/api/v1/seller/signin
{
  "email":"sdwd@gmail.com",
  "password":"12345"
}
Response-
{
  "message": "Success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFhNDAzMTc1MGQ4NzczNzExNTI4MDAiLCJlbWFpbCI6InNkd2RAZ21haWwuY29tIiwiaWF0IjoxNzIyNDMzNTg2fQ.sjFnB5xTX0dJcPtcRTqnh0ABQXlC6N_0jb3WpWBW5xA",
    "id": "66aa4031750d877371152800",
    "name": ""
  }
}

## Upload info
Request-post
url-http://localhost:5001/api/v1/seller/uploadinfo
Send “name”, “address”, “mobile”, “profileimage”and beared token
Response-
{
  "message": "Success",
  "data": {
    "updatedseller": {
      "_id": "66aa4031750d877371152800",
      "email": "sdwd@gmail.com",
      "name": "qew2e",
      "password": "$2b$10$IRVHH5oSBXKslw2x1QrgfuzYTkk4ae692SStlZMeD7EjG4KAcFHMm",
      "profileimage": "profileimage\\66aa4031750d877371152800.jpg",
      "adress": "fcgvbh",
      "mobile": "234567",
      "items": [],
      "createdAt": "2024-07-31T13:46:25.885Z",
      "updatedAt": "2024-07-31T13:56:05.122Z",
      "__v": 0
    }
  }
}

## Login
Request-post
url-http://localhost:5001/api/v1/seller/login
{
  "email":"sdwd@gmail.com",
  "password":"12345"
}
Response-
{
  "message": "Success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFhNDAzMTc1MGQ4NzczNzExNTI4MDAiLCJlbWFpbCI6InNkd2RAZ21haWwuY29tIiwiaWF0IjoxNzIyNDM0MjgwfQ.qvL-tQlAj7R7MaRFYcMRc8T8AGqDBoyw0fpvk29y9js",
    "id": "66aa4031750d877371152800",
    "name": "qew2e"
  }
}

## GetInfo
Request-get
url-http://localhost:5001/api/v1/seller/getinfo
send bearer token
Response-
{
  "_id": "66aa4031750d877371152800",
  "email": "sdwd@gmail.com",
  "name": "qew2e",
  "password": "$2b$10$IRVHH5oSBXKslw2x1QrgfuzYTkk4ae692SStlZMeD7EjG4KAcFHMm",
  "profileimage": "profileimage\\66aa4031750d877371152800.jpg",
  "adress": "fcgvbh",
  "mobile": "234567",
  "items": [],
  "createdAt": "2024-07-31T13:46:25.885Z",
  "updatedAt": "2024-07-31T13:56:05.122Z",
  "__v": 0
}

# Item
## Add new
Request-post
url- http://localhost:5001/api/v1/item/addnewitem
send token of seller and “type”, “size”, “quantity”, “color” and “images”
Response-
{
  "message": "Success",
  "data": {
    "id": "66aa538de9b5dfdbcee3b75f"
  }
}
Get Info
Request-get
url- http://localhost:5001/api/v1/item/getiteminfo
send “itemid”
{
  "itemid":"66aa538de9b5dfdbcee3b75f"
}
Response-
{
  "_id": "66aa538de9b5dfdbcee3b75f",
  "type": "pant",
  "size": "32",
  "quantity": "3",
  "images": [
    "profileimage\\66aa4031750d877371152800.jpg"
  ],
  "color": "blue",
  "createdAt": "2024-07-31T15:09:01.928Z",
  "updatedAt": "2024-07-31T15:09:01.928Z",
  "__v": 0
}

## delete
Request-delete
url- http://localhost:5001/api/v1/item/ deleteitem
send “itemid”
{
  "itemid":"66aa538de9b5dfdbcee3b75f"
}
Response-
{
  "message": "Deleted Sucessfully"
}

# Order
## create
Request-post
url- http://localhost:5001/api/v1/order/makeorder
{
  "userid":"6692b0a0eb4400f54926f28e",
  "itemid":"66952acd52eed7250aa3e4d5",
  "quantity":1,
  "sellerid":"66aa4031750d877371152800"
}
Response-
{
  "message": "Success",
  "data": {
    "id": "66aa57ff1be2e3482706b588"
  }
}

## Make order delievered
Request-post
url- http://localhost:5001/api/v1/order/orderdelievered
{
  "orderid":"66aa57ff1be2e3482706b588"
}
Response-
{
  "message": "Success",
  "data": {
    "updatedorder": {
      "_id": "66aa57ff1be2e3482706b588",
      "userid": "6692b0a0eb4400f54926f28e",
      "sellerid": "66aa4031750d877371152800",
      "itemid": "66952acd52eed7250aa3e4d5",
      "delieverydate": null,
      "isdelevered": true,
      "quantity": 1,
      "createdAt": "2024-07-31T15:27:59.579Z",
      "updatedAt": "2024-07-31T15:31:05.154Z",
      "__v": 0
    }
  }
}

## cancel order
Request-post
url- http://localhost:5001/api/v1/order/cancelorder
{
  "orderid":"66aa57ff1be2e3482706b588"
}
Response-
{
  "message": "Order cancelled"
}

## Get info of order
Request-get
url- http://localhost:5001/api/v1/order/getinfo
{
  "orderid":"66aa57ff1be2e3482706b588"
}
Response-
{
  "_id": "66aa57ff1be2e3482706b588",
  "userid": "6692b0a0eb4400f54926f28e",
  "sellerid": "66aa4031750d877371152800",
  "itemid": "66952acd52eed7250aa3e4d5",
  "delieverydate": null,
  "isdelevered": true,
  "quantity": 1,
  "createdAt": "2024-07-31T15:27:59.579Z",
  "updatedAt": "2024-07-31T15:31:05.154Z",
  "__v": 0
}








