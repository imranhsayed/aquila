<?php
/**
 * Register Custom Taxonomies
 *
 * @package Aquila
 */

namespace AQUILA_THEME\Inc;

use AQUILA_THEME\Inc\Traits\Singleton;

class Register_Taxonomies {
	use Singleton;

	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'init', [ $this, 'create_genre_taxonomy' ] );
		add_action( 'init', [ $this, 'create_year_taxonomy' ] );

	}

	// Register Taxonomy Genre
	public function create_genre_taxonomy() {

		$labels = [
			'name'              => _x( 'Genres', 'taxonomy general name', 'aquila' ),
			'singular_name'     => _x( 'Genre', 'taxonomy singular name', 'aquila' ),
			'search_items'      => __( 'Search Genres', 'aquila' ),
			'all_items'         => __( 'All Genres', 'aquila' ),
			'parent_item'       => __( 'Parent Genre', 'aquila' ),
			'parent_item_colon' => __( 'Parent Genre:', 'aquila' ),
			'edit_item'         => __( 'Edit Genre', 'aquila' ),
			'update_item'       => __( 'Update Genre', 'aquila' ),
			'add_new_item'      => __( 'Add New Genre', 'aquila' ),
			'new_item_name'     => __( 'New Genre Name', 'aquila' ),
			'menu_name'         => __( 'Genre', 'aquila' ),
		];
		$args   = [
			'labels'             => $labels,
			'description'        => __( 'Movie Genre', 'aquila' ),
			'hierarchical'       => true,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_nav_menus'  => true,
			'show_tagcloud'      => true,
			'show_in_quick_edit' => true,
			'show_admin_column'  => true,
			'show_in_rest'       => true,
		];

		register_taxonomy( 'genre', [ 'movies' ], $args );

	}

	// Register Taxonomy Year
	public function create_year_taxonomy() {

		$labels = [
			'name'              => _x( 'Years', 'taxonomy general name', 'aquila' ),
			'singular_name'     => _x( 'Year', 'taxonomy singular name', 'aquila' ),
			'search_items'      => __( 'Search Years', 'aquila' ),
			'all_items'         => __( 'All Years', 'aquila' ),
			'parent_item'       => __( 'Parent Year', 'aquila' ),
			'parent_item_colon' => __( 'Parent Year:', 'aquila' ),
			'edit_item'         => __( 'Edit Year', 'aquila' ),
			'update_item'       => __( 'Update Year', 'aquila' ),
			'add_new_item'      => __( 'Add New Year', 'aquila' ),
			'new_item_name'     => __( 'New Year Name', 'aquila' ),
			'menu_name'         => __( 'Year', 'aquila' ),
		];
		$args   = [
			'labels'             => $labels,
			'description'        => __( 'Movie Release Year', 'aquila' ),
			'hierarchical'       => false,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_nav_menus'  => true,
			'show_tagcloud'      => true,
			'show_in_quick_edit' => true,
			'show_admin_column'  => true,
			'show_in_rest'       => true,
		];
		register_taxonomy( 'movie-year', [ 'movies' ], $args );

	}

}
