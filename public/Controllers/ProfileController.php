<?php

namespace MC\Controller\User\Profile;


use MC\Controller\User\UserController;

/**
 * Class ProfileController
 * @package MC\Controller\User\Profile
 */
class ProfileController extends UserController
{
    /**
     * @var mixed
     */
    private $uid;

    /**
     * @var mixed
     */
    private $email;

    /**
     * @var mixed
     */
    private $token;

    /**
     * @var UserController
     */
    private $user;

    /**
     * @var \Firebase\Firebase
     */
    private $firebase;

    /**
     * ProfileController constructor.
     */
    public function __construct() {
        $this->user = new UserController();
        $this->uid = $this->user->GetUid();
        $this->email = $this->user->GetEmail();
        $this->token = $this->user->GetToken();
        $this->uid = $this->user->GetUid();
        $this->firebase = $this->user->LoadFirebase();
    }

    // @todo these methods might sit better in the user controller.
    // @todo something to think about ...

    /**
     * @todo need plenty of error logging
     *
     * @param array $query
     * @return string
     */
    public function fb_set( array $query = [] ) {
        $action = $query['action'];
        unset( $query['action'], $query['uid'] );
        $fb = $this->firebase->set( "/{$action}/{$this->uid}", $query);
        if ( $fb ) {
            return json_encode( array( 'success' => true ) );
        }
        return json_encode( array( 'success' => false ) );
    }

    /**
     * @todo need plenty of error logging
     *
     * @param $query
     * @return string
     */
    public function fb_query( array $query = [] ) {
        $action = $query['action'];
        unset( $query['action'], $query['uid'] );
        $fb = $this->firebase->get( "{$action}/{$this->uid}" );
        if ( $fb ) {
            return json_encode( array(
                'success' => true,
                'data' => $fb
            ) );
        }
        return json_encode( array(
            'success' => false,
        ) );
    }

}