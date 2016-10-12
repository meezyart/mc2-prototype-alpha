<?php
namespace MC\Controller\ProfilePage;


use MC\Controller\User\Profile\ProfileController;

class ProfilePageController
{

    /**
     * @var string
     */
    private $directory;

    /**
     * @var ProfileController
     */
    private $user_profile;

    /**
     * ProfileController constructor.
     * @param $directory
     */
    public function __construct( $directory ){
        $this->directory = $directory;
        $this->user_profile = new ProfileController();
    }

    /**
     * renders our page
     * @return string
     */
    public function render() {
        $loader = new \Twig_Loader_Filesystem( $this->directory );
        $twig = new \Twig_Environment( $loader, array(
            'debug' => true,
        ) );

        return $twig->render( 'profile.twig', array(
            "user" => $this->user_profile
        ) );
    }
}