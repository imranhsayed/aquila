<?php
/**
 * Loadmore Single Posts
 *
 * @package Aquila
 */

namespace AQUILA_THEME\Inc;

use AQUILA_THEME\Inc\Traits\Singleton;
use \WP_Query;

class Loadmore_Single {

	use Singleton;

	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	protected function setup_hooks() {

		/**
		 * Load more script ajax hooks
		 */
		add_action( 'wp_ajax_nopriv_single_load_more', [ $this, 'ajax_script_single_post_load_more' ] );
		add_action( 'wp_ajax_single_load_more', [ $this, 'ajax_script_single_post_load_more' ] );

		/**
		 * Create a short code.
		 *
		 * Usage echo do_shortcode('[single_post_listings]');
		 */
		add_shortcode( 'single_post_listings', [ $this, 'single_post_load_more_container' ] );

		/**
		 * Modify the Query to start WordPress loop from
		 * after the current single post id
		 */
		add_filter( 'posts_where', [ $this, 'posts_where' ], 10, 2 );
	}

	/**
	 * Load more script call back
	 *
	 * @param bool $initial_request Initial Request( non-ajax request to load initial post ).
	 *
	 */
	public function ajax_script_single_post_load_more( bool $initial_request = false ) {

		if ( ! $initial_request && ! check_ajax_referer( 'loadmore_post_nonce', 'ajax_nonce', false ) ) {
			wp_send_json_error( __( 'Invalid security token sent.', 'text-domain' ) );
			wp_die( '0', 400 );
		}

		// Check if it's an ajax call.
		$is_ajax_request = ! empty( $_SERVER['HTTP_X_REQUESTED_WITH'] ) &&
		                   strtolower( $_SERVER['HTTP_X_REQUESTED_WITH'] ) === 'xmlhttprequest';
		/**
		 * Page number.
		 * If get_query_var( 'paged' ) is 2 or more, its a number pagination query.
		 * If $_POST['page'] has a value which means its a loadmore request, which will take precedence.
		 */
		$page_no        = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
		$page_no        = ! empty( $_POST['page'] ) ? filter_var( $_POST['page'], FILTER_VALIDATE_INT ) + 1 : $page_no;
		$single_post_id = ! empty( $_POST['single_post_id'] ) ? $_POST['single_post_id'] : 0;

		$query = $this->get_single_load_more_query( $page_no, $single_post_id );

		if ( $query->have_posts() ):
			// Loop Posts.
			while ( $query->have_posts() ): $query->the_post();
				get_template_part( 'template-parts/content' );
			endwhile;

		else:
			// Return response as zero, when no post found.
			wp_die( '0' );
		endif;

		wp_reset_postdata();

		/**
		 * Check if its an ajax call, and not initial request
		 *
		 * @see https://wordpress.stackexchange.com/questions/116759/why-does-wordpress-add-0-zero-to-an-ajax-response
		 */
		if ( $is_ajax_request && ! $initial_request ) {
			wp_die();
		}
	}

	/*
	* Single Load more posts container.
	*/
	function single_post_load_more_container() {

		$single_post_id  = get_the_ID();
		$load_more_query = $this->get_single_load_more_query( 1, $single_post_id );
		$has_next_page   = ! empty( $load_more_query->posts );
		$total_pages     = $load_more_query->max_num_pages;

		// If the no next post is available, return null;
		if ( empty( $has_next_page ) ) {
			return null;
		}

		?>
		<div class="single-post-loadmore-wrap">
			<div id="single-post-load-more-content" class="single-post-loadmore">
				<?php // This is where more posts will be added ?>
			</div>
			<div class="text-center mb-5 mt-5">
				<button
					id="single-post-load-more-btn"
					data-page="0"
					data-single-post-id="<?php echo esc_attr( $single_post_id ); ?>"
					class="btn btn-info"
					data-max-pages="<?php echo esc_attr( $total_pages ); ?>"
				>
					<span><?php esc_html_e( 'Load More Stories', 'aquila' ); ?></span>
				</button>
				<span id="single-loading-text"
				      class="mt-1 hidden"><?php esc_html_e( 'Loading...', 'aquila' ); ?></span>
			</div>
		</div>
		<?php
	}


	public function get_single_load_more_query( $page_no, $single_post_id ) {
		// Default Argument.
		$args = [
			'post_status'      => 'publish',
			'posts_per_page'   => 1, // Number of posts per page - default
			'paged'            => $page_no,
			'starting_post_id' => intval( $single_post_id ),
		];

		return new WP_Query( $args );
	}


	/**
	 * Checking the custom query param called `starting_post_id` from our query
	 * in `ajax_script_single_post_load_more()` function.
	 * If this parameter exists in the query,
	 * we modify the where clause to ensure we get all the post ids that are less than the
	 * starting_post_id (current single post id).
	 *
	 * @param $where
	 * @param $query
	 *
	 * @return mixed|string
	 */
	function posts_where( $where, $query ) {

		global $wpdb;

		$start = $query->get( 'starting_post_id' );

		// If the query does not have our custom param 'starting_post_id' return default where clause.
		if ( empty( $start ) ) {
			return $where;
		}

		$where .= " AND {$wpdb->posts}.ID < $start";

		return $where;
	}

}
