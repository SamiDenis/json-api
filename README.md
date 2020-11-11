# json-api
MAKEUP API LINK: https://japi-pro.herokuapp.com/Makeup


(Using GET) http://localhost:9000/Makeup/ ==> 
*page accessing the info for Fenty Madamoiselle lipsticks and their shades

(Using GET) http://localhost:9000/Makeup/:id ==> 
*page will give info on the product colors and their individual id numbers

(Using POST) http://localhost:9000/Makeup/ ==>
*page will now have a new document with new info regarding product type, price, and name

(Using PUT) http://localhost:9000/Makeup/currency/:currency ==>
*page updating the currencies from USA to EUR 

(Using DELETE) http://localhost:9000/Makeup/:currency ==>
*page deleting all files containing currency with EUR (only one that remains is document with USA)
