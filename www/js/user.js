$(document).ready(function() {
    console.log('User.js loaded');

    //Getting registration details
    var fullname = $('#fullname');
    var username = $('#username');
    var password = $('#password');
    var email = $('#email');
    // $('#fblogin').on('click', authenticatefb);

    // function authenticatefb() {
    //     alert('go to facebook');
    //     location.href = 'auth/facebook';
    // }

    $('#regButton').on('click', submitRegistration);

    function submitRegistration(event) {
        console.log('Name is ' + fullname.val());
        event.preventDefault();

        if(!fullname.val().trim() || !username.val().trim()
        || !password.val().trim() || !email.val().trim()) {
            // alert('empty');
            return;
        }

        //Create a registration object
        var user = {
            name: fullname.val().trim(),
            username: username.val().trim(),
            password: password.val().trim(),
            email: email.val().trim()
        };
        console.log(user);

        $.ajax({
            type: 'POST',
            url: '/register',
            data: user,
            success: function(data){
                if(data === 'undefined'){
                    window.location.href='/login';
                }

            }
        });
    }


});
