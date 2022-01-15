
<?php
/**
 * Author Header Template Part.
 *
 * @package Aquila
 */

$author_email = get_the_author_meta( 'user_email' );
$has_avatar   = aquila_has_gravatar( $author_email );
$avatar       = get_avatar( $author_email, 240, '', '', [ 'class'   => 'rounded-circle', 'default' => '404' ] );

?>
<header class="page-header row mb-4">
	<!--author-col-one-->
	<div class="author-col-one mb-3 col-lg-3 col-md-3 col-sm-12">
		<div id="author-avatar" class="author-avatar d-flex align-items-start">
			<?php
			if ( ! empty( $has_avatar ) ) {
				echo wp_kses_post( $avatar );
			} else {
				printf(
					'<span id="author-firstname" class="d-none">%1$s</span><span id="author-lastname" class="d-none">%2$s</span><div id="author-profile-img" style="width: 230px; height: 230px;" class="rounded-circle bg-secondary position-relative"><span class="h1 text-white inset-center"></span></div>',
					esc_html( get_the_author_meta( 'first_name' ) ),
					esc_html( get_the_author_meta( 'last_name' ) )
				);
			}
			?>
		</div><!-- #author-avatar -->
	</div>
	<!--author-col-two-->
	<div class="author-col-two text-left col-lg-9 col-md-9 col-sm-12 ml-0 pl-3">
		<?php
		if ( ! empty( get_the_author() ) ) {
			printf(
				'<h1 class="inline-block uppercase text-26px leading-30px mt-0 mb-3">%s</h1>',
				get_the_author()
			);
		}
		// If a user has filled out their description, show a bio on their entries.
		if ( get_the_author_meta( 'description' ) ) : ?>
			<div id="author-info">
				<div id="author-description">
					<p class="text-left md:text-left"><?php the_author_meta( 'description' ); ?></p>
				</div>
			</div>
		<?php endif; ?>
	</div>
</header>
