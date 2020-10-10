/**
 * External Dependencies.
 */
import {isEmpty} from 'lodash';

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
			content: '<span class="stats-heading">Dos</span>',
		},
	],
];

const ALLOWED_BLOCKS = [ 'core/heading' ];

const Edit = ( { attributes, setAttributes } ) => {
	const {
		      option,
	      } = attributes;

	useEffect( () => {
		// If option not set, set the initial value of the option to 'dos'.
		if ( isEmpty( option ) && ! ( 0 < option ) ) {
			setAttributes( { option: 'dos' } );
		}
	}, [] );

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
						onChange={ ( option ) => { setAttributes( { option } ) } }
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
};

export default Edit;
