( function( api ) {

	// Extends our custom "online-portfolio" section.
	api.sectionConstructor['online-portfolio'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );
