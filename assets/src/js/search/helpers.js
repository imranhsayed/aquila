/**
 * Get Filters From Url.
 *
 * @param {Object} url URl.
 *
 * @return {Object} data Data containing filters and pageNo.
 */
export const getFiltersFromUrl = ( url = {}, filterKeys = [] ) => {
	const data = {};
	
	if ( ! filterKeys.length ) {
		return data;
	}
	
	/**
	 * Build filter's data.
	 *
	 * Loop through each filter keys( constant ) and if
	 * they exist in the url, push them to the filters data.
	 */
	filterKeys.forEach( ( filterKey ) => {
		const paramName = filterKeys[ filterKey ].name;
		const paramValue = url.searchParams.get( paramName );
		
		// If the value does not exits, return.
		if ( ! paramValue ) {
			return;
		}
		
		// Set page no.
		if ( filterKeys.pageNo.name === paramName ) {
			data.pageNo = parseInt( paramValue );
			return;
		}
		
		// Get translated filter values.
		const translatedFilterValues = paramValue.split( ',' )
			.map( ( itemValue ) => parseInt( itemValue ) );
		
		// Add paramValue to filters.
		data.filters = {
			...data.filters,
			[ paramName ]: translatedFilterValues,
		};
	} );
	
	return data;
};

/**
 * Get Url by Adding Filters.
 *
 * @param {Object} filters Filters.
 * @param {Object} filterKeys Keys.
 */
export const getUrlWithFilters = ( filters = {}, filterKeys = {} ) => {
	// Extract root url, excluding the currentSelection @todo check if we can get this via PHP.
	const rootUrl = window.location.href.replace( window.location.search, '' );
	
	// Build URL.
	let url = new URL( rootUrl );
	
	// Remove the page parameter whenever any filter value is changed. (Pages should start over from Page 1)
	url.searchParams.delete( filterKeys.pageNo.name );
	
	// 1.Add page number if it does not already exists and at least one filter is available.
	if ( ! url.searchParams.has( filterKeys.pageNo.name ) && Object.keys( filters ).length ) {
		url.searchParams.append( filterKeys.pageNo.name, '1' );
	}
	
	// 2.Add the given keys value pairs in search params.
	Object.keys( filters ).forEach( ( key ) => {
		url.searchParams.set( key, filters[ key ] );
	} );
	
	// Covert url to string.
	url = url.toString();
	
	return url;
};
