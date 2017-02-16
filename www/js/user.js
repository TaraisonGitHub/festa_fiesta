$(document).ready(function() {

    //Getting registration details
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var username = $('#username');
    var password = $('#password');
    var email = $('#email');

    $('#regButton').on('click', submitRegistration);

    function submitRegistration(event) {
        console.log('Name is ' + firstname.val() + ' ' + lastname.val());
        event.preventDefault();

        if(!firstname.val().trim() || !lastname.val().trim() || !username.val().trim()
        || !password.val().trim() || !email.val().trim()) {
            alert('empty');
            return;
        }

        //Create a registration object
        var user = {
            firstname: firstname.val().trim(),
            lastname: lastname.val().trim(),
            username: username.val().trim(),
            password: password.val().trim(),
            email: email.val().trim()
        };
        console.log(user);

        $.ajax({
            type: 'POST',
            url: '/api/register',
            data: user,
            done: function(){
                alert('done');
            }
        });
    }


});
