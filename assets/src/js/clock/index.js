( function ( $ ) {
	class Clock {
		constructor() {
			this.initializeClock();
		}

		initializeClock() {
			let t = setInterval( () => this.time(), 1000 );
		}

		numPad( str ) {
			let cStr = str.toString();
			if ( cStr.length < 2 ) str = 0 + cStr;
			return str;
		}

		time() {
			let currDate = new Date();
			let currSec  = currDate.getSeconds();
			let currMin  = currDate.getMinutes();
			let curr24Hr = currDate.getHours();
			let ampm     = curr24Hr >= 12 ? 'pm' : 'am';
			let currHr   = curr24Hr % 12;
			currHr       = currHr ? currHr : 12;

			let stringTime = currHr + ':' + this.numPad( currMin ) + ':' + this.numPad( currSec );
			const timeEmojiEl = $( '#time-emoji' );

			if ( curr24Hr >= 5 && curr24Hr <= 17 ) {
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
