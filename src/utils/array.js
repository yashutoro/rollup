export function find ( array, fn ) {
	let arrLen = array.length;
	for ( let i = 0; i < arrLen; i += 1 ) {
		if ( fn( array[i], i ) ) return array[i];
	}

	return null;
}
