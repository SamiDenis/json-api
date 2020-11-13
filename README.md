# json-api
MAKEUP API LINK: http://makeup-api.herokuapp.com/api/v1/products.json?brand=fenty&product_type=lipstick

API CREATED LINK : https://japi-pro.herokuapp/Makeup


(Using GET) https://japi-pro.herokuapp/Makeup/ ==> 
*page accessing the info for Fenty Madamoiselle lipsticks and their shades

(Using GET) https://japi-pro.herokuapp/Makeup/:id ==> 
*page will give info on the product colors and their individual id numbers

(Using POST) https://japi-pro.herokuapp/Makeup/ ==>
*page will now have a new document with new info regarding product type, price, and name

(Using PUT) https://japi-pro.herokuapp/Makeup/currency/:currency ==>
*page updating the currencies from USA to EUR 

(Using DELETE) https://japi-pro.herokuapp/Makeup/:currency ==>
*page deleting all files containing currency with EUR (only one that remains is document with USA)