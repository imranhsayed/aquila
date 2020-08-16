<?php
/**
 * Enqueue theme assets
 *
 * @package Aquila
 */

namespace AQUILA_THEME\Inc;

use AQUILA_THEME\Inc\Traits\Singleton;

class Assets {
	use Singleton;

	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'wp_enqueue_scripts', [ $this, 'register_styles' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'register_scripts' ] );
	}

	public function register_styles() {
		// Register styles.
		wp_register_style( 'style-css', get_stylesheet_uri(), [], filemtime( AQUILA_DIR_PATH . '/style.css' ), 'all' );
		wp_register_style( 'main-css', AQUILA_BUILD_CSS_URI . '/main.css', [], filemtime( AQUILA_BUILD_CSS_DIR_PATH . '/main.css' ), 'all' );
		wp_register_style( 'bootstrap-css', AQUILA_BUILD_LIB_URI . '/css/bootstrap.min.css', [], false, 'all' );
		wp_enqueue_style( 'fonts-css', get_template_directory_uri() . '/assets/src/library/fonts/fonts.css', [], false, 'all' );

		// Enqueue Styles.
		wp_enqueue_style( 'bootstrap-css' );
		wp_enqueue_style( 'style-css' );
		wp_enqueue_style( 'main-css' );
	}

	public function register_scripts() {
		// Register scripts.
		wp_register_script( 'main-js', AQUILA_BUILD_JS_URI . '/main.js', ['jquery'], filemtime( AQUILA_BUILD_JS_DIR_PATH . '/main.js' ), true );
		wp_register_script( 'bootstrap-js', AQUILA_BUILD_LIB_URI . '/js/bootstrap.min.js', ['jquery'], false, true );

		// Enqueue Scripts.
		wp_enqueue_script( 'main-js' );
		wp_enqueue_script( 'bootstrap-js' );
	}


}
