$(document).ready(function() {

    //Getting registration details
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var username = $('#username');
    var password = $('#password');
    var email = $('#email');

    $('#register').on('submit', submitRegistration);

    function submitRegistration(event) {
        event.preventDefault();

        if(!firstname.val().trim() || !lastname.val().trim() || username.val().trim()
        || password.val().trim() || email.val().trim()) {
            return;
        }

        //Create a registration object
        var registeredUser = {
            firstname: firstname.val().trim(),
            lastname: lastname.val().trim(),
            username: username.val().trim(),
            password: password.val().trim(),
            email: email.val().trim()
        }
    }
}
