<?php
namespace MC\Controller\User;

use Firebase\Firebase;
use Firebase\Auth\TokenGenerator;

/**
 * Class UserController
 * @package MC\Controller\User
 */
class UserController
{

    /**
     * @var Firebase
     */
    private $fb;

    /**
     * @var Auth\TokenGenerator
     */
    private $auth_token;

    /**
     * base url
     */
    const FIREBASE_URL = 'https://myclassroom-ab829.firebaseio.com';

    /**
     * secret
     */
    const FIREBASE_SECRET = '76VPvsXfz2c5GIFS9oe03QjC9wB0F62zIzP1q657';

    /**
     * @return Firebase
     */
    public function LoadFirebase() {

        $this->fb = Firebase::initialize( self::FIREBASE_URL, self::FIREBASE_SECRET );

        return $this->fb;
    }

    /**
     * @param $email
     * @return Firebase|static
     */
    public function authenticate( $email = '' ) {

        if ( $email === '' ) {
            $email = $this->GetEmail();
        }

        $tokenGenerator = new TokenGenerator(self::FIREBASE_SECRET);

        $this->auth_token = $tokenGenerator->generateToken(array(
            'email' => $email,
            'admin' => true,
            'debug' => true
        ) );

        $this->fb = Firebase::initialize(self::FIREBASE_URL, $this->auth_token);

        return $this->fb;
    }

    /**
     * @return mixed
     */
    public function GetToken() {
        return $_COOKIE['token'];
    }

    /**
     * @return mixed
     */
    public function GetEmail() {
        return $_COOKIE['email'];
    }

    /**
     * @return mixed
     */
    public function GetUid() {
        return $_COOKIE['uid'];
    }


}

