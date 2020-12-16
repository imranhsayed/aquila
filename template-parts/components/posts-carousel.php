<?php
/**
 * Posts Carousel
 *
 * @package aquila
 */

$args = [
	'posts_per_page'         => 5,
	'post_type'              => 'post',
	'update_post_meta_cache' => false,
	'update_post_term_cache' => false,
];

$post_query = new \WP_Query( $args );
?>
<div class="posts-carousel px-5">
	<?php
	if ( $post_query->have_posts() ) :
		while ( $post_query->have_posts() ) :
			$post_query->the_post();
			?>
			<div class="card">
				<?php
				if ( has_post_thumbnail() ) {
					the_post_custom_thumbnail(
						get_the_ID(),
						'featured-thumbnail',
						[
							'sizes' => '(max-width: 350px) 350px, 233px',
							'class' => 'w-100',
						]
					);
				} else {
					?>
					<img src="https://via.placeholder.com/510x340" class="w-100" alt="Card image cap">
					<?php
				}
				?>
				<div class="card-body">
					<?php the_title( '<h3 class="card-title">', '</h3>' ); ?>
					<?php aquila_the_excerpt(); ?>
					<a href="<?php echo esc_url( get_the_permalink() ); ?>" class="btn btn-primary">
						<?php esc_html_e( 'View More', 'aquila' ); ?>
					</a>
				</div>
			</div>
		<?php
		endwhile;
	endif;
	wp_reset_postdata();
	?>
</div>
