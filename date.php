<?php
/**
 * Date Archive Page template file.
 *
 * @package Aquila
 */

get_header();

global $wp_query;

$the_date           = '';
$the_date_permalink = get_home_url();

// Is Year Archive '/{year}/'
if ( is_year() ) {
	$the_date           = get_the_date( 'Y' );
	$the_date_permalink = sprintf(
		'%1$s%2$s/',
		trailingslashit( $the_date_permalink ),
		get_query_var( 'year' )
	);
}

// Is Monthly Archive '/{year}/{month}/'
if ( is_month() ) {
	$the_date           = get_the_date( 'F, Y' );
	$the_date_permalink = sprintf(
		'%1$s%2$s/%3$s/',
		trailingslashit( $the_date_permalink ),
		get_query_var( 'year' ),
		get_query_var( 'monthnum' )
	);
}

// Is Daily Archive '/{year}/{month}/{day}/'
if ( is_day() ) {
	$the_date           = get_the_date( 'F j, Y' );
	$the_date_permalink = sprintf(
		'%1$s%2$s/%3$s/%4$s/',
		trailingslashit( $the_date_permalink ),
		get_query_var( 'year' ),
		get_query_var( 'monthnum' ),
		get_query_var( 'day' )
	);
}

$current_page_no = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
$first_page_url  = $the_date_permalink;
$last_page_url   = sprintf(
	'%1$spage/%2$s',
	esc_url( $the_date_permalink ),
	esc_attr( $wp_query->max_num_pages )
);


?>
	<div id="primary">
		<main id="main" class="site-main my-5" role="main">
			<div class="container">

				<header class="page-header">
					<?php

					if ( ! empty( $the_date ) ) {
						printf(
							'<h1 class="page-title h1 inline-block mb-4">%s</h1>',
							$the_date
						);
					}
					?>
				</header><!-- .page-header -->
				<div class="site-content">
					<div class="row">
						<?php
						if ( $wp_query->have_posts() ) :
							while ( $wp_query->have_posts() ) : $wp_query->the_post();
								get_template_part( 'template-parts/content', '', [ 'container_classes' => 'col-lg-4 col-md-6 col-sm-12 pb-4' ] );
							endwhile;
						else :
							get_template_part( 'template-parts/content-none' );
						endif;
						?>
					</div>
					<div>
						<?php aquila_the_post_pagination( $current_page_no, AQUILA_ARCHIVE_POST_PER_PAGE, $wp_query, $first_page_url, $last_page_url, false ); ?>
					</div>
				</div>
			</div>
		</main>
	</div>

<?php

get_footer();

