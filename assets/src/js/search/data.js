/**
 * External dependencies.
 */
import { getFiltersFromUrl, getResultMarkup, getUrlWithFilters } from './helpers';

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
	rootUrl: '',
	url: '',
	filterKeys: [ 'category', 'post_tag' ],
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
	const stateFromUrl = getStateFromUrl( settings?.root_url ?? {} );
	setStateFromUrl( settings || {}, stateFromUrl || {} );
	getResult();
};

/**
 * Get State From Url.
 *
 * @param {String} rootUrl Root Url.
 *
 * @return {Object} data Data containing filters, page no, and url.
 */
const getStateFromUrl = ( rootUrl = '' ) => {
	const { filterKeys } = getState();
	const url = new URL( window.location.href );
	let data = {};
	
	// Build data from URL.
	// Add filters and page no to data.
	data = getFiltersFromUrl( url, filterKeys );
	
	// Get url with filter selection.
	data.url = getUrlWithFilters( data?.filters ?? {}, rootUrl );
	
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
	
	// Action: Get results with data from state.
	getResult();
};

/**
 * Get Results.
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
			const resultMarkup = getResultMarkup( responseData?.posts ?? [], responseData?.total_posts ?? 0 );
			setState( {
				loading: false,
				resultCount: responseData?.total_posts ?? 0,
				resultPosts: responseData?.posts ?? [],
				resultMarkup: resultMarkup || '',
				noOfPages: responseData?.no_of_pages ?? 0,
			} );
		} );
};

/**
 * Add Filter.
 *
 * @param {Object} currentSelection currentSelection
 */
const addFilter = ( currentSelection = {} ) => {
	const { filters, filterKeys, rootUrl } = getState();
	const { key, value } = currentSelection || {};
	console.log( 'currentSelection', currentSelection, filters[key] );
	
	// Get new filter values.
	let newFilters = { ...filters };
	const filterValues = filters[ key ] ? [ ...filters[ key ], value ] : [ value ];
	newFilters = {
		...newFilters,
		[ key ]: [ ...new Set( filterValues ) ],
	};
	
	// Add filter selections to URL and update URL.
	const url = getUrlWithFilters( newFilters, rootUrl );
	updateUrl( url );
	
	/**
	 * Update state with the new data.
	 * We set loading to true, before getting results.
	 */
	setState( {
		url,
		currentSelection,
		filters: newFilters,
		loading: true,
	} );
	
	// Get Results.
	getResult();
};

/**
 * Delete Filter.
 *
 * @param currentSelection
 */
const deleteFilter = ( currentSelection = {} ) => {
	const { filters, rootUrl } = getState();
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
	
	// Add filter selections to URL and update URL.
	const url = getUrlWithFilters( newFilters, rootUrl );
	updateUrl( url );
	
	setState( {
		url,
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
