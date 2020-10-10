import * as SvgIcons from '../../../icons';

export const getIconComponent = (option) => {
	const IconsMap = {
		dos: SvgIcons.Check,
		donts: SvgIcons.Cross
	}
	return ('undefined' !== option && (option in IconsMap) ) ? IconsMap[option] : IconsMap['dos']
}
