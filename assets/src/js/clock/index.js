( function ( $ ) {
	/**
	 * Clock Class.
	 */
	class Clock {
		/**
		 * Constructor
		 */
		constructor() {
			this.initializeClock();
		}

		/**
		 * initializeClock
		 */
		initializeClock() {
			setInterval( () => this.time(), 1000 );
		}

		/**
		 * Numpad
		 *
		 * @param {String} str String
		 *
		 * @return {string} String
		 */
		numPad( str ) {
			const cStr = str.toString();
			if ( 2 > cStr.length ) {
				str = 0 + cStr;
			}
			return str;
		}

		/**
		 * Time
		 */
		time() {
			const currDate = new Date();
			const currSec = currDate.getSeconds();
			const currMin = currDate.getMinutes();
			const curr24Hr = currDate.getHours();
			const ampm = 12 <= curr24Hr ? 'pm' : 'am';
			let currHr = curr24Hr % 12;
			currHr = currHr ? currHr : 12;

			const stringTime =
				currHr +
				':' +
				this.numPad( currMin ) +
				':' +
				this.numPad( currSec );
			const timeEmojiEl = $( '#time-emoji' );

			if ( 5 <= curr24Hr && 17 >= curr24Hr ) {
				timeEmojiEl.text( '🌞' );
			} else {
				timeEmojiEl.text( '🌜' );
			}

			$( '#time' ).text( stringTime );
			$( '#ampm' ).text( ampm );
		}
	}

	new Clock();
} )( jQuery );
