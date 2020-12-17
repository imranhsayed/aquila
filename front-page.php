<?php
/**
 * Front page template
 *
 * @package aquila
 */


get_header();

?>

	<div id="primary">
		<main id="main" class="site-main mt-5" role="main">
			<div class="home-page-wrap">
				<?php
				if ( have_posts() ) :
					while ( have_posts() ) : the_post();

						get_template_part( 'template-parts/content', 'page' );

					endwhile;
					?>

				<?php

				else :

					get_template_part( 'template-parts/content-none' );

				endif;
				get_template_part( 'template-parts/components/posts-carousel' );
				?>
			</div>
		</main>
	</div>

<?php
get_footer();

