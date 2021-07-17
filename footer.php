<?php
/**
 * Footer template
 *
 * @package Aquila
 */
?>


<footer id="site-footer" class="bg-light p-4">
	<div class="container color-gray">
		<div class="row">
			<section class="col-lg-4 col-md-6 col-sm-12">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cum cupiditate, dolores doloribus eos
				facere fugit in ipsum nisi, nostrum obcaecati, optio porro quidem reiciendis sunt unde ut vitae.
				Aperiam.
			</section>
			<section class="col-lg-4 col-md-6 col-sm-12">
				<?php if ( is_active_sidebar( 'sidebar-2' ) ) { ?>
					<aside>
						<?php dynamic_sidebar( 'sidebar-2' ); ?>
					</aside>
				<?php } ?>
			</section>
			<section class="col-lg-4 col-md-6 col-sm-12">
				<ul class="d-flex">
					<li class="list-unstyled">
						<a href="https://www.facebook.com/codeytek" title="facebook" target="_blank">
							<svg width="48">
								<use href="#icon-facebook"></use>
							</svg>
						</a>
					</li>
					<li class="list-unstyled">
						<a href="https://www.linkedin.com/" title="linkedin" target="_blank">
							<svg width="48">
								<use href="#icon-linkedin"></use>
							</svg>
						</a>
					</li>
					<li class="list-unstyled">
						<a href="https://twitter.com/codeytek" title="twitter" target="_blank">
							<svg width="48">
								<use href="#icon-twitter"></use>
							</svg>
						</a>
					</li>
				</ul>
			</section>
		</div>
	</div>
</footer>
</div>
</div>
<?php
get_template_part( 'template-parts/content', 'svgs' );
wp_footer();
?>
</body>
</html>

