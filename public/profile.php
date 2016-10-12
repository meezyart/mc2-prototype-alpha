<?php
namespace MC\View\Profile;
require_once( "../vendor/autoload.php" );
use MC\Controller\ProfilePage;
$dir = __DIR__ . '/templates';
$profile = new ProfilePage\ProfilePageController( $dir );

echo $profile->render();