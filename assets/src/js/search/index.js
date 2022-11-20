/**
 * Global variables.
 */
import { toggleAccordionContent } from '../utils';

const { customElements, HTMLElement } = window;

/**
 * Initialize data store.
 */
import { store } from './data';
const { getState, subscribe } = store;

/**
 * AquilaSearch Class.
 */
class AquilaSearch extends HTMLElement {
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		
		// Subscribe to updates.
		subscribe( this.update.bind( this ) );
		
		// Initialize State.
		const state = getState();
		state.initialize( search_settings );
	}
	
	/**
	 * Update the component.
	 *
	 * @param {Object} currentState Current state.
	 */
	update( currentState = {} ) {
		console.log( 'currentState', currentState );
	}
}

/**
 * AquilaFilters Class.
 */
class AquilaFilters extends HTMLElement {
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		
		// Subscribe to updates.
		subscribe( this.update.bind( this ) );
	}
	
	/**
	 * Update the component.
	 *
	 * @param {Object} currentState Current state.
	 */
	update( currentState = {} ) {
		console.log( 'currentState', currentState );
	}
}

/**
 * AquilaCheckboxAccordion Class.
 */
class AquilaCheckboxAccordion extends HTMLElement {
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		
		// Elements.
		this.filterKey = this.getAttribute( 'key' );
		this.content = this.querySelector( '.checkbox-accordion__content' );
		this.accordionHandle = this.querySelector( '.checkbox-accordion__handle' );
		
		if ( ! this.accordionHandle || ! this.content || ! this.filterKey ) {
			return;
		}
		
		// Subscribe to store.
		subscribe( this.update.bind( this ) );
		
		this.accordionHandle.addEventListener( 'click', ( event ) => toggleAccordionContent( event, this, this.content ) );
	}
	
	/**
	 * Update.
	 *
	 * @param {Object} currentState CurrentState.
	 */
	update( currentState = {} ) {
		if ( ! this.filterKey ) {
			return;
		}
		const { checkboxItems } = currentState;
		
		/**
		 * If the state of this checkbox filter is open, then set then
		 * active state of this component to true, so it can be opened.
		 */
		// if ( checkboxItems[ this.filterKey ].isOpen ) {
		// 	this.setAttribute( 'active', 'true' );
		// 	this.content.style.height = 'auto';
		// } else {
		// 	this.removeAttribute( 'active' );
		// 	this.content.style.height = '0';
		// }
	}
}

/**
 * AquilaCheckboxAccordionChild Class.
 */
class AquilaCheckboxAccordionChild extends HTMLElement {
	/**
	 * Constructor.
	 */
	constructor() {
		super();
		this.content = this.querySelector( '.checkbox-accordion__child-content' );
		this.accordionHandle = this.querySelector( '.checkbox-accordion__child-handle-icon' );
		this.inputEl = this.querySelector('input');
		
		if ( this.accordionHandle && this.content ) {
			this.accordionHandle.addEventListener( 'click', ( event ) => toggleAccordionContent( event, this, this.content ) );
		}
		if ( this.inputEl ) {
			this.inputEl.addEventListener( 'click', ( event ) => this.handleCheckboxInputClick( event ) );
		}
	}
	
	handleCheckboxInputClick( event ) {
		const { addFilter, deleteFilter } = getState();
		const targetEl = event.target;
		this.filterKey = targetEl.getAttribute('data-key');
		
		if ( targetEl.checked ) {
			addFilter({
				key: this.filterKey,
				value: parseInt( targetEl.value ),
			});
		} else {
			deleteFilter({
				key: this.filterKey,
				value: parseInt( targetEl.value ),
			});
		}
	}
}

/**
 * Initialize.
 */
customElements.define( 'aquila-checkbox-accordion', AquilaCheckboxAccordion );
customElements.define( 'aquila-checkbox-accordion-child', AquilaCheckboxAccordionChild );
customElements.define( 'aquila-search', AquilaSearch );
