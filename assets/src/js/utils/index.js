/**
 * Toggle Accordion Content.
 *
 * @param {Event} event Event.
 * @param {Object} accordionEl Accordion Element
 * @param {Object} contentEl Content Element.
 *
 * @return {null} null
 */
export const toggleAccordionContent = ( event, accordionEl, contentEl ) => {
	event.preventDefault();
	event.stopPropagation();
	
	if ( ! accordionEl || ! contentEl ) {
		return null;
	}
	
	accordionEl.toggleAttribute( 'active' );
	
	if ( ! accordionEl.hasAttribute( 'active' ) ) {
		slideElementUp( contentEl, 600 );
	} else {
		slideElementDown( contentEl, 600 );
	}
};

/**
 * Slide element down.
 *
 * @param {Object} element Target element.
 * @param {number} duration Animation duration.
 * @param {Function} callback Callback function.
 */
export const slideElementDown = ( element, duration = 300, callback = null ) => {
	element.style.height = `${ element.scrollHeight }px`;
	setTimeout( () => {
		element.style.height = 'auto';
		if ( callback ) {
			callback();
		}
	}, duration );
};

/**
 * Slide element up.
 *
 * @param {Object} element Target element.
 * @param {number} duration Animation duration.
 * @param {Function} callback Callback function.
 */
export const slideElementUp = ( element, duration = 300, callback = null ) => {
	element.style.height = `${ element.scrollHeight }px`;
	element.offsetHeight; // eslint-disable-line
	element.style.height = '0px';
	setTimeout( () => {
		element.style.height = null;
		if ( callback ) {
			callback();
		}
	}, duration );
};
