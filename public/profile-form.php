<?php
namespace MC\Action\profile;

require_once( "../vendor/autoload.php" );

use MC\Controller\User;
use MC\Controller\User\Profile;

$user = new Profile\ProfileController();

if ( $_POST ) {
    $query_vars = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
    echo $user->fb_set( $query_vars );
} else {
    $query_vars = filter_input_array( INPUT_GET, FILTER_SANITIZE_STRING );
    echo $user->fb_query( $query_vars );
}


