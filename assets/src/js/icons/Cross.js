import * as React from 'react';

/**
 * SVG cross.
 *
 * @param {Object} props Props.
 *
 * @return {Object} SVG content.
 */
function SvgCross( props ) {
	return (
		<svg
			width={ 20 }
			height={ 20 }
			viewBox="0 0 123.05 123.05"
			{ ...props }
		>
			<path
				d="M121.325 10.925l-8.5-8.399c-2.3-2.3-6.1-2.3-8.5 0l-42.4 42.399L18.726 1.726c-2.301-2.301-6.101-2.301-8.5 0l-8.5 8.5c-2.301 2.3-2.301 6.1 0 8.5l43.1 43.1-42.3 42.5c-2.3 2.3-2.3 6.1 0 8.5l8.5 8.5c2.3 2.3 6.1 2.3 8.5 0l42.399-42.4 42.4 42.4c2.3 2.3 6.1 2.3 8.5 0l8.5-8.5c2.3-2.3 2.3-6.1 0-8.5l-42.5-42.4 42.4-42.399a6.13 6.13 0 00.1-8.602z"
				fill="#e30101"
				data-original="#000000"
				xmlns="http://www.w3.org/2000/svg"
			/>
		</svg>
	);
}

export default SvgCross;
