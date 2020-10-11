/**
 *  Get Block Column.
 *
 * @param {String} optionVal Option
 * @param {String} colClassName ClassName
 * @param {String} heading Heading
 * @return {Array} Block column.
 */
const getBlockColumn = ( optionVal, colClassName, heading ) => {
	return [
		'core/column',
		{ className: colClassName },
		[
			[
				'aquila-blocks/heading',
				{
					className: 'aquila-dos-and-donts__heading',
					option: optionVal,
					content: `<strong><span>${ heading }</span></strong>`,
				},
			],
			[ 'core/list', { className: 'aquila-dos-and-donts__list' } ],
		],
	];
};

export const blockColumns = [
	[
		'core/columns',
		{
			className: 'aquila-dos-and-donts__cols',
		},
		[
			getBlockColumn( 'dos', 'aquila-dos-and-donts__col-one', 'Dos' ),
			getBlockColumn(
				'donts',
				'aquila-dos-and-donts__col-two',
				"Dont's"
			),
		],
	],
];
