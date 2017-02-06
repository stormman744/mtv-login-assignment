$(document).ready(function () {
    $('#toggle-create').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        return false;
    });

    $('#toggle-signin').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        return false;
    });

    $('#logon').click(function () {
        var user = $('#name').val();
        var pw = $('#pw').val();
        console.log('Username: ', user);
        console.log('Password: ', pw);
        if (user === 'mtv' && pw === 'password') {
            localStorage.setItem("loggedInUser", JSON.stringify({ user: user, pw: pw }));
            logInCheck();
        } else {
            alert('Error: Incorrect username or password')
            return false;
        }

    });
    
    $('#logout').click(function () {
        localStorage.setItem("loggedInUser", null);
        logInCheck();
    });

    $('#forgot').click(function () {
        alert('You forgot your password...');
        return false;
    });

    $('#create').click(function () {
        var user = { name: $('#create-name').val(), email: $('#create-email').val(), pw: $('#create-pw').val() }
        var users = JSON.parse(localStorage.getItem("users"));
        if (users === null) {
            users = [];
        }
        users.push(user);
        console.log('Users: ', users);
        localStorage.setItem("users", JSON.stringify(users));
        return false;
    });


    function logInCheck() {
        var localUsers = JSON.parse(localStorage.getItem("users"));
        console.log('Users', localUsers);
        var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        console.log('loggedInUser', loggedInUser);
        if (loggedInUser != null) {
            $('.loggedin-page').show();
            $('.login-page').hide();
            if(localUsers != null){
                var userList = $("#userlist");
                userList.empty();
                for(i=0; i<localUsers.length; i++){
                    $("<li class=\"message\"><a >"+localUsers[i].name+"</a></li>").appendTo(userList);
                }
            }
           
        } else {
            $('.loggedin-page').hide();
            $('.login-page').show();

        }
    }

    logInCheck();
});