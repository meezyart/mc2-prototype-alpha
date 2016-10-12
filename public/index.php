<?php
namespace MC\View\Login;

require_once( "../vendor/autoload.php" );

use MC\Controller\LoginPage;

$dir = __DIR__ . '/templates';

$login = new LoginPage\LoginPageController( $dir );
echo $login->render();
