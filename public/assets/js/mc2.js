/**
 * using Firebase for first iteration ( possibly more )
 * Since Firebase does not use a REST or API endpoints,
 * need to natively load SDK in the app.
 * Think GraphQL.
 */

'use strict';

var currentU;
var auth = firebase.auth();
var ajax_data = {};
var u;


/**
 *
 * @type {{login: user.login, register: user.register, profile: user.profile}}
 */
var user = {
    login : function ( user, pass ) {
        return auth.signInWithEmailAndPassword(user, pass);
    },
    register : function ( user, pass ) {
        return auth.createUserWithEmailAndPassword(user, pass);
    },
    profile : function ( send ) {
        console.log(send);
        return $.ajax({
            url: send.req_to,
            type: send.method,
            data: send.data,
            dataType: "json"
        });
    }
};

$('form').on( 'submit', function ( e ) {
    var f = $(this);

    var form_obj = {};
    f.serializeArray().map(function(x) {
        form_obj[x.name] = x.value;
    } );

    var fb = false;
    switch( $(this)[0].name ) {
        case 'loginForm':
            fb = true;
            u = user.login( form_obj.userName, form_obj.password, auth );
            break;
        case 'regForm' :
            fb = true;
            u = user.register( form_obj.userName, form_obj.password, auth );
            break;
        case 'profileForm' :
            form_obj.req_to = "profile-form.php";
            form_obj.method = "POST";
            console.log( form_obj );
            u = user.profile( form_obj );
    }

    if ( fb ) {
        u.then(function ( results ) {
            console.log(results);
            createCookie( 'uid', results.uid, 15 );
            createCookie( 'email', results.email, 15 );
            // refresh token for auth calls. May need to set this lower
            createCookie( 'token', results.refreshToken, 15 );
        }).catch(function (error) {
            // need some fancy error handling
            var errorCode = error.code;
            var errorMessage = error.message;
            e.preventDefault();
        });
    }
    else {
        u.success(function (res) {
            console.log(res);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        });
    }
    return false;
} );

$('document').ready(function(){
    var query_obj = {};
    query_obj.data = {};
    var uid = $('input[name=uid]').val();
    var action = $('input[name=action]').val();
    query_obj.req_to = 'profile-form.php';
    query_obj.method = 'GET';
    query_obj.data['action'] = action;
    query_obj.data['uid'] = uid;
    user.profile( query_obj )
        .success(function ( res ) {
            if ( res.success === true && res.data !== undefined ) {
                $.each( res.data, function ( k, v ) {
                    $('input:text[name='+k+']').val(v);
                    console.log(k);
                    if ( k === 'gender'
                        || k === 'maritalStatus'
                        || k === 'host' ) {
                        $('input:radio[name='+k+'][value='+v+']').prop('checked', true);
                    }
                    else if ( k === 'profession' ) {
                        $('option[value='+v+']').attr('selected', 'selected');
                    }

                });
            }

        }).fail(function (a, b, c) {
            console.log(a);
            console.log(b);
            console.log(c);
        });
});

function createCookie( name, value, days ) {
    var expires;
    if ( days ) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires="+date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name+"="+value+expires+"; domain=.mc2.com";
}