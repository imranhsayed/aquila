/**
 * External dependencies.
 */
import { getFiltersFromUrl, getUrlWithFilters } from './helpers';

const { persist, create, stores } = window.zustand;

/**
 * Internal dependencies.
 */
import { STORE_NAME } from './constants';

/**
 * Constants.
 */
export const DEFAULT_STATE = {
	restApiUrl: '',
	url: '',
	filterKeys: [ 'categories', 'post_tag' ],
	filters: {},
	filterIds: [],
	pageNo: 1,
	resultMarkup: '',
	loading: false,
};
const PERSISTENT_STATE_KEYS = [];

/**
 * Initialize.
 *
 * @param {Object} settings settings.
 */
const initialize = ( settings = {} ) => {
	const stateFromUrl = getStateFromUrl( settings?.filter_ids ?? {} );
	setStateFromUrl( settings || {}, stateFromUrl || {} );
	getResult();
};

/**
 * Get State From Url.
 *
 * @param {Object} filterIds Filter Ids.
 *
 * @return {Object} data Data containing filters, page no, and url.
 */
const getStateFromUrl = ( filterIds = {} ) => {
	const { filterKeys } = getState();
	const url = new URL( window.location.href );
	let data = {};
	
	// Build data from URL.
	// If it's a non-legacy URL, add filters and page no to data.
	data = getFiltersFromUrl( url );
	
	// // Get 'Selected Items Values' from filters, and add it to 'data' object.
	// const selectedItemValues = getSelectedItemsFromFilters( data?.filters ?? {}, filterIds, filterKeys );
	// data.selectedItems = selectedItemValues || [];
	//
	// // Get the 'Selected Items Labels Data' from selectedItemValues, and add it to 'data' object..
	// const labelsDataForMarkup = getSelectedFiltersLabels( selectedItemValues, filterKeys );
	// data.selectedItemsLabelsData = labelsDataForMarkup || [];
	//
	// // Get url with filter selection.
	// data.url = getUrlWithFilters( data?.filters ?? {}, filterKeys );
	
	return data;
};

/**
 * Set State From Url.
 *
 * @param {Object} settings Initial Settings.
 * @param {Object} stateFromUrl State From Url.
 */
const setStateFromUrl = ( settings = {}, stateFromUrl = {} ) => {
	
	// Set data to state.
	setState( {
		rootUrl: settings?.root_url ?? '',
		restApiUrl: settings?.rest_api_url ?? '',
		filterIds: settings?.filter_ids ?? {},
		loading: true,
		...stateFromUrl,
	} );
	
	// Action: Get trips with data from state.
	getResult();
};

/**
 * Get Trips.
 */
const getResult = () => {
	const { restApiUrl, filters, pageNo } = getState();
	if ( ! restApiUrl ) {
		return;
	}
	
	// Add query-params to rest api url.
	const params = {
		...filters,
		page_no: pageNo
	};
	const fetchUrl = restApiUrl + '?' + ( new URLSearchParams( params ) ).toString();
	
	fetch( fetchUrl )
		.then( ( response ) => response.json() )
		.then( ( responseData ) => {
			console.log( 'responseData', responseData );
			// setState( {
			// 	loading: false,
			// 	resultCount: responseData?.data,
			// 	resultMarkup: responseData?.rendered,
			// } );
		} );
};

/**
 * Add Filter.
 *
 * @param {Object} currentSelection currentSelection
 */
const addFilter = ( currentSelection = {} ) => {
	const { filters, filterKeys } = getState();
	const { key, value } = currentSelection || {};
	console.log( 'currentSelection', currentSelection, filters[key] );
	
	// Get new filter values.
	let newFilters = { ...filters };
	const filterValues = filters[ key ] ? [ ...filters[ key ], value ] : [ value ];
	newFilters = {
		...newFilters,
		[ key ]: [ ...new Set( filterValues ) ],
	};
	console.log( 'newFilters', newFilters );
	
	// Add filter selections to URL and update URL.
	// const url = getUrlWithFilters( newFilters, filterKeys );
	// updateUrl( url );
	
	/**
	 * Update state with the new data.
	 * We set loading to true, before getting trips.
	 */
	setState( {
		url: '',
		currentSelection,
		filters: newFilters,
		loading: true,
	} );
	
	// Get Trips.
	getResult();
};

/**
 * Delete Filter.
 *
 * @param currentSelection
 */
const deleteFilter = ( currentSelection = {} ) => {
	const { filters, filterKeys } = getState();
	const { key, value } = currentSelection || {};
	
	let newFilters = { ...filters };
	let filterValues = filters[ key ] || [];
	
	// Loop through previous filter values and delete the value in question.
	filterValues.forEach( ( prevFilterValue, index ) => {
		// If a match is found delete it from the array.
		if ( prevFilterValue === value ) {
			filterValues.splice( index, 1 );
		}
	} );
	
	newFilters = {
		...newFilters,
		[ key ]: filterValues,
	};
	
	// Delete empty keys.
	Object.keys( newFilters ).forEach( ( key ) => {
		if ( ! newFilters[ key ] || ! newFilters[ key ].length ) {
			delete newFilters[ key ];
		}
	} );
	
	setState( {
		url: '',
		currentSelection,
		filters: newFilters,
		loading: true,
	} );
	
	getResult();
}

/**
 * Update Url.
 *
 * @param {string} url Url.
 *
 * @return {null} Null.
 */
const updateUrl = ( url ) => {
	if ( ! url ) {
		return null;
	}
	
	if ( window.history.pushState ) {
		window.history.pushState( { path: url }, '', url );
	} else {
		window.location.href = url;
	}
};

/**
 * Create store.
 */
export const store = create(
	persist(
		() => ( {
			...DEFAULT_STATE,
			initialize,
			addFilter,
			deleteFilter,
		} ),
		{
			name: STORE_NAME,
			partialize: ( state ) => {
				const persistentState = {};
				PERSISTENT_STATE_KEYS.forEach( ( key ) => {
					persistentState[ key ] = state[ key ];
				} );
				return persistentState;
			},
		},
	),
);
const { getState, setState } = store;

// Add store to window.
stores[ STORE_NAME ] = store;
