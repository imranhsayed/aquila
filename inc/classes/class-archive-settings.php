<?php
/**
 * Archive Settings
 *
 * @package Aquila
 */

namespace AQUILA_THEME\Inc;

use AQUILA_THEME\Inc\Traits\Singleton;

class Archive_Settings {
	use Singleton;

	protected function __construct() {

		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Filters.
		 */
		add_filter( 'pre_get_posts', [ $this, 'change_archive_posts_per_page' ] );
	}

	/**
	 * Change Posts Per Page for Archive.
	 *
	 * @param object $query data
	 *
	 */
	function change_archive_posts_per_page( $query ) {

		if ( $query->is_archive && ! is_admin() && $query->is_main_query() ) {

			$query->set( 'posts_per_page', strval( AQUILA_ARCHIVE_POST_PER_PAGE ) );

		} elseif ( ! empty( $query->query_vars['s'] ) && ! is_admin() ) {

			// For search result page only
			$query->set( 'posts_per_page', strval( AQUILA_SEARCH_RESULTS_POST_PER_PAGE ) );

		}

		return $query;
	}

}
