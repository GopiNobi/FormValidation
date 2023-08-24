# FormValidation
Simple registration form validation using HTML,CSS and JavaScript
#HTML
Within the form tag i create five input-group class and within the class i just created text tag for username,email id.
And i created password tag for password and confirm password(that is shown as cpassword).
And at last i created error class for every input group.
if error occurs i just add error with input-group with the help of javascript so it can show what mistake you have made.
one submit button.
#CSS
I done simple understandable styling.
#javascript
Get all the tag using Dom model.
creating addeventlistener for form and create function (Validate()).
PreventDefault();-->it is used to prevent from submiting the form.
seterror-->getting parent element of our passing element and in that parentclass get our error class.
if error occurs add (error) to the element's parent class and show message to user what error they made. 
if error not occurs add (succes) to the element's parent class


........that's it ...it's done..
