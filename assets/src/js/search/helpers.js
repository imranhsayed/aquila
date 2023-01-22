/* eslint-disable prettier/prettier */
/**
 * Get Filters From Url.
 *
 * @param {Object} url URl.
 * @param {Array} filterKeys Filter keys.
 *
 * @return {Object} data Data containing filters and pageNo.
 */
export const getFiltersFromUrl = ( url = {}, filterKeys = [] ) => {
	const data = {};
	
	if ( ! url || ! filterKeys.length ) {
		return data;
	}
	
	/**
	 * Build filter's data.
	 *
	 * Loop through each filter keys( constant ) and if
	 * they exist in the url, push them to the filters data.
	 */
	filterKeys.forEach( ( filterKey ) => {
		const paramValue = url.searchParams.get( filterKey );
		
		// If the value does not exits, return.
		if ( ! paramValue ) {
			return;
		}
		
		// Set page no.
		if ( 'pageNo' === filterKey ) {
			data.pageNo = parseInt( paramValue );
			return;
		}
		
		// Get filter values.
		const filterValues = paramValue.split( ',' )
			.map( ( itemValue ) => parseInt( itemValue ) );
		
		// Add paramValue to filters.
		data.filters = {
			...data.filters,
			[ filterKey ]: filterValues,
		};
	} );
	
	return data;
};

/**
 * Get Url by Adding Filters.
 *
 * @param {Object} filters Filters.
 * @param {String} rootUrl Root url.
 */
export const getUrlWithFilters = ( filters = {} = {}, rootUrl = '' ) => {
	
	// Build URL.
	let url = new URL( rootUrl );
	
	// 2.Add the given keys value pairs in search params.
	Object.keys( filters ).forEach( ( key ) => {
		url.searchParams.set( key, filters[ key ] );
	} );
	
	// Covert url to string.
	url = url.toString();
	
	return url;
};

/**
 * Get Results markup.
 *
 * @param posts
 * @return {string}
 */
export const getResultMarkup = ( posts = [] ) => {
	if ( ! Array.isArray( posts ) || ! posts.length ) {
		return '';
	}
	
	let img = '';
	let markup = ``;
	
	posts.forEach( post => {
		img = post.thumbnail ? post.thumbnail : '<img src="https://via.placeholder.com/526x300" width="526" height="300"/>';
		markup += `
		<section id="post-${ post?.id ?? 0 }" class="col-lg-4 col-md-6 col-sm-12 pb-4">
			<header>
				<a href="${ post?.permalink ?? '' }" class="block">
				<figure class="img-container">
					${ img }
				</figure>
			</header>
			<div class="post-excerpt my-4">
				<a href="${ post?.permalink ?? '' }" title="${ post?.title ?? '' }">
					<h3 class="post-card-title">${ post?.title ?? '' }</h3>
				</a>
				<div class="mb-4 truncate-4">
					${ post?.content ?? '' }
				</div>
				<a href="${ post?.permalink ?? '' }"  class="btn btn-primary"  title="${ post?.title ?? '' }">
					View More
				</a>
			</div>
		</section>
		`;
	} );
	
	return markup;
};

export const getLoadMoreMarkup = ( noOfPages = 0, currentPageNo = 1 ) => {
	if ( parseInt( currentPageNo ) >= parseInt( noOfPages ) ) {
		return '';
	}
	
	return `<aquila-load-more
				class="load-more-wrap"
				next-page-no="${ parseInt( currentPageNo ) + 1 }"
			>
				<button class="btn btn-primary">Load More</button>
			</aquila-load-more>`;
}
