<?php
/**
 * Main template file.
 *
 * @package Aquila
 */

get_header();

?>

<div class="content">
	<?php esc_html_e( 'Content', 'aquila' ); ?>
</div>

<?php

get_footer();

