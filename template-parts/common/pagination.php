<?php
/**
 * Pagination.
 *
 * @package Aquila
 */

if ( empty( $args['total_pages'] ) || empty( $args['current_page'] ) ) {
	return null;
}

if ( 1 < $args['total_pages'] ) {
	?>
	<div id="post-pagination" class="hidden-pagination hide" data-max-pages="<?php echo esc_attr( $args['total_pages'] ); ?>">
		<?php
		echo paginate_links( [
			'base' => get_pagenum_link( 1 ) . '%_%',
			'format' => 'page/%#%',
			'current' => $args['current_page'],
			'total' => $args['total_pages'],
			'prev_text' => __( '« Prev', 'aquila' ),
			'next_text' => __( 'Next »', 'aquila' ),
		] );
		?>
	</div>
	<?php
}
