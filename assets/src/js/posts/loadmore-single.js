( function( $ ) {
	class LoadMoreSingle {
		constructor() {
			this.ajaxUrl = siteConfig?.ajaxUrl ?? '';
			this.ajaxNonce = siteConfig?.ajax_nonce ?? '';
			this.loadMoreBtn = $( '#single-post-load-more-btn' );
			this.loadingTextEl = $( '#single-loading-text' );
			this.isRequestProcessing = false;
			
			this.init();
			
		}
		
		init() {
			
			if ( ! this.loadMoreBtn.length ) {
				return;
			}
			
			this.totalPagesCount = this.loadMoreBtn.data( 'max-pages' );
			
			this.loadMoreBtn.on( 'click', () => {
				this.handleLoadMorePosts();
			} );
			
		}
		
		
		/**
		 * Load more posts.
		 *
		 * 1.Make an ajax request, by incrementing the page no. by one on each request.
		 * 2.Append new/more posts to the existing content.
		 * 3.If it's the last page, remove the load-more button from DOM.
		 *
		 * @return null
		 */
		handleLoadMorePosts() {
			
			// Get page no from data attribute of load-more button.
			const page = this.loadMoreBtn.data( 'page' );
			const singlePostId = this.loadMoreBtn.data( 'single-post-id' );
			if ( undefined === page || this.isRequestProcessing ) {
				return null;
			}
			
			const nextPage = parseInt( page ) + 1; // Increment page count by one.
			
			this.toggleLoading( true );
			
			$.ajax( {
				url: this.ajaxUrl,
				type: 'post',
				data: {
					page: page,
					single_post_id: singlePostId,
					action: 'single_load_more',
					ajax_nonce: this.ajaxNonce,
				},
				success: ( response ) => {
					
					this.loadMoreBtn.data( 'page', nextPage );
					$( '#single-post-load-more-content' ).append( response );
					this.removeLoadMoreIfOnLastPage( nextPage );
					
					this.toggleLoading( false );
				},
				error: ( response ) => {
					console.log( response );
					this.toggleLoading( false );
				},
			} );
		}
		
		/**
		 * Remove Load more Button If on last page.
		 *
		 * @param {int} nextPage New Page.
		 */
		removeLoadMoreIfOnLastPage( nextPage ) {
			if ( nextPage + 1 > this.totalPagesCount ) {
				this.loadMoreBtn.remove();
			}
		};
		
		/**
		 * Toggle Loading
		 *
		 * Show or hide the loading text.
		 *
		 * @param isLoading
		 */
		toggleLoading( isLoading ) {
			this.isRequestProcessing = isLoading;
			
			if ( isLoading ) {
				this.loadingTextEl.addClass( 'block' );
				this.loadingTextEl.removeClass( 'hidden' );
			} else {
				this.loadingTextEl.addClass( 'hidden' );
				this.loadingTextEl.removeClass( 'block' );
			}
		};
	}
	
	new LoadMoreSingle();
	
} )( jQuery );
