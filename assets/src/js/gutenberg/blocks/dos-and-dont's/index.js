/**
 * Do's and don'ts block.
 *
 * @package Aquila
 */

/**
 * Internal dependencies.
 */
import Edit from './edit';

/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType( 'aquila-blocks/dos-and-donts', {
	/**
	 * Block title.
	 *
	 * @type {string}
	 */
	title: __( 'Heading with Icon', 'aquila' ),

	/**
	 * Block icon.
	 *
	 * @type {string}
	 */
	icon: 'admin-customizer',

	/**
	 * Block description.
	 *
	 * @type {string}
	 */
	description: __( 'Add Heading and select Icons', 'aquila' ),

	/**
	 * Block category.
	 *
	 * @type {string}
	 */
	category: 'widgets',

	/**
	 * Attributes.
	 */
	attributes: {
		option: {
			type: 'string',
			default: 'dos'
		},
	},

	edit: Edit,

	save( { attributes: { option } } ) {

		const HeadingIcon = getIconComponent( option );

		return (
			<div className="aquila-icon-heading">
		        <span className="aquila-icon-heading__heading">
		          <HeadingIcon/>
		        </span>
				<InnerBlocks.Content/>
			</div>
		);
	},
} );
