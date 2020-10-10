/**
 * External Dependencies.
 */
import { isEmpty } from 'lodash';

/**
 * Internal Dependencies.
 */
import { getIconComponent } from './icons-map'

/**
 * WordPress Dependencies.
 */
import {
	PanelBody,
	RadioControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

const INNER_BLOCKS_TEMPLATE = [
	[
		'core/heading',
		{
			label: __( 'Heading with Icon', 'aquila' ),
			level: 4,
			content: '<strong><span class="icon-heading">Dos</span></strong>',
		},
	],
];

const ALLOWED_BLOCKS = ['core/heading'];

const Edit = ( { attributes, setAttributes } ) => {
	const {
		      option,
	      } = attributes;

	const HeadingIcon = getIconComponent( option );

	return (
		<div className="aquila-icon-heading">
	      <span className="aquila-icon-heading__heading">
	        <HeadingIcon/>
	      </span>
			<InnerBlocks
				template={ INNER_BLOCKS_TEMPLATE }
				allowedBlocks={ ALLOWED_BLOCKS }
				templateLock={ true }
			/>

			<InspectorControls>
				<PanelBody
					title={ __( 'Block Settings', 'aquila' ) }
				>
					<RadioControl
						label={ __(
							'Select the icon',
							'aquila'
						) }
						help={ __(
							'Controls icon selection',
							'aquila'
						) }
						selected={ option }
						options={ [
							{ label: 'Dos', value: 'dos' },
							{ label: 'Dont\'s', value: 'donts' },
						] }
						onChange={ ( option ) => {
							setAttributes( { option } )
						} }
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
};

export default Edit;
