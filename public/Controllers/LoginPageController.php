<?php
namespace MC\Controller\LoginPage;

/**
 * Class McLoginController
 * @package MC\Login
 */
class LoginPageController
{
    /**
     * @var string
     */
    private $directory;

    /**
     * McLoginController constructor.
     */
	public function __construct( $directory ){
	    $this->directory = $directory;
    }

    /**
     * renders our page
     * @return string
     */
	public function render(){

        $loader = new \Twig_Loader_Filesystem( $this->directory );
        $twig = new \Twig_Environment( $loader, array(
            'debug' => true,
        ));
        return $twig->render( 'login.twig', array() );
    }

}

