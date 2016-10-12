<?php

namespace MC\Controller\Login;

use MC\Controller\User\UserController;
use Kreait\Firebase\Firebase;
use Kreait\Firebase\Query;

/**
 * Class Login
 * @package MC\Controller\Login
 */
class Login extends UserController
{
    /**
     * @var Firebase Context
     */
    private $u;

    /**
     * @var array
     */
    private $query;

    /**
     * Login constructor.
     * @param array $query
     */
    public function __construct( array $query = [] ){
        $this->u = new UserController();
        $this->u->LoadFirebase();
        $this->query = $query;
    }

    /**
     * @return string
     */
    public function GetUser() {
        return json_encode( [ "data" => true ] );
    }
}