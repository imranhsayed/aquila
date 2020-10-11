/**
 * Heading with Icon block.
 *
 * @package
 */

import { getIconComponent } from './icons-map';

/**
 * Internal dependencies.
 */
import Edit from './edit';

/**
 * WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

/**
 * Register block type.
 */
registerBlockType( 'aquila-blocks/heading', {
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
	category: 'aquila',

	/**
	 * Attributes.
	 */
	attributes: {
		option: {
			type: 'string',
			default: 'dos',
		},
		content: {
			type: 'string',
			source: 'html',
			selector: 'h4',
			default: __( 'Dos', 'aquila' ),
		},
	},

	edit: Edit,

	/**
	 * Save function.
	 *
	 * @param {Object} props Props
	 *
	 * @return {Object} Content.
	 */
	save( props ) {
		const {
			attributes: { option, content },
		} = props;
		const HeadingIcon = getIconComponent( option );

		return (
			<div className="aquila-icon-heading">
				<span className="aquila-icon-heading__heading">
					<HeadingIcon />
				</span>
				{ /* Saves <h2>Content added in the editor...</h2> to the database for frontend display */ }
				<RichText.Content tagName="h4" value={ content } />
			</div>
		);
	},
} );
