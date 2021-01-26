/**
* He definido una función que se encargará de atribuir los estilos a los elementos seleccionados.
**/
$( function ( ) {
	
	// Fondo.
	$( 'tr:nth-child(odd)' )
	.addClass( "alt" );

	$( 'td:contains("Henry")' )
	.addClass( "highlight" );
	$( 'td:contains("History")' )
	.addClass( "highlight" );
	$( 'td:contains("Tragedy")' )
	.addClass( "highlight" );
	
	// Lista.
	$( 'tr' )
	.find( 'td' )
	.eq( 8 )
	.addClass( "highlight" );
	$( 'tr' )
	.find( 'td' )
	.eq( 11 )
	.addClass( "highlight" );
	$( 'tr' )
	.find( 'td' )
	.eq( 14 )
	.addClass( "highlight" );
	
	$( 'tr:contains("et")' )
	.first( )
	.addClass( "highlight" );
} );
