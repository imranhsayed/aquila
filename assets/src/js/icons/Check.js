import * as React from 'react';

/**
 * SVG check.
 *
 * @param {Object} props Props.
 *
 * @return {Object} SVG content.
 */
function SvgCheck( props ) {
	return (
		<svg width={ 20 } height={ 20 } viewBox="0 0 417.813 417" { ...props }>
			<path
				xmlns="http://www.w3.org/2000/svg"
				d="M159.988 318.582c-3.988 4.012-9.43 6.25-15.082 6.25s-11.094-2.238-15.082-6.25L9.375 198.113c-12.5-12.5-12.5-32.77 0-45.246l15.082-15.086c12.504-12.5 32.75-12.5 45.25 0l75.2 75.203L348.104 9.781c12.504-12.5 32.77-12.5 45.25 0l15.082 15.086c12.5 12.5 12.5 32.766 0 45.246zm0 0"
				fill="#06ab1c"
				data-original="#2196f3"
			/>
		</svg>
	);
}

export default SvgCheck;
