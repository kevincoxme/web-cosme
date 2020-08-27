jQuery( function ( $ ) {
	'use strict';

	$( '.js-atdi-import-data' ).on( 'click', function () {

		// Reset response div content.
		$( '.js-atdi-ajax-response' ).empty();

		// Prepare data for the AJAX call
		var data = new FormData();
		data.append( 'action', 'ATDI_import_demo_data' );
		data.append( 'security', atdi.ajax_nonce );
		data.append( 'selected', $( '#ATDI__demo-import-files' ).val() );
		if ( $('#ATDI__content-file-upload').length ) {
			data.append( 'content_file', $('#ATDI__content-file-upload')[0].files[0] );
		}
		if ( $('#ATDI__widget-file-upload').length ) {
			data.append( 'widget_file', $('#ATDI__widget-file-upload')[0].files[0] );
		}
		if ( $('#ATDI__customizer-file-upload').length ) {
			data.append( 'customizer_file', $('#ATDI__customizer-file-upload')[0].files[0] );
		}

		// AJAX call to import everything (content, widgets, before/after setup)
		ajaxCall( data );

	});

	function ajaxCall( data ) {
		$.ajax({
			method:     'POST',
			url:        atdi.ajax_url,
			data:       data,
			contentType: false,
			processData: false,
			beforeSend: function() {
				$( '.js-atdi-ajax-loader' ).show();
			}
		})
		.done( function( response ) {

			if ( 'undefined' !== typeof response.status && 'newAJAX' === response.status ) {
				ajaxCall( data );
			}
			else if ( 'undefined' !== typeof response.message ) {
				$( '.js-atdi-ajax-response' ).append( '<p>' + response.message + '</p>' );
				$( '.js-atdi-ajax-loader' ).hide();
			}
			else {
				$( '.js-atdi-ajax-response' ).append( '<div class="notice  notice-error  is-dismissible"><p>' + response + '</p></div>' );
				$( '.js-atdi-ajax-loader' ).hide();
			}
		})
		.fail( function( error ) {
			$( '.js-atdi-ajax-response' ).append( '<div class="notice  notice-error  is-dismissible"><p>Error: ' + error.statusText + ' (' + error.status + ')' + '</p></div>' );
			$( '.js-atdi-ajax-loader' ).hide();
		});
	}

	// Switch preview images on select change event, but only if the img element .js-atdi-preview-image exists.
	// Also switch the import notice (if it exists).
	$( '#ATDI__demo-import-files' ).on( 'change', function(){
		if ( $( '.js-atdi-preview-image' ).length ) {

			// Attempt to change the image, else display message for missing image.
			var currentFilePreviewImage = atdi.import_files[ this.value ]['import_preview_image_url'] || '';
			$( '.js-atdi-preview-image' ).prop( 'src', currentFilePreviewImage );
			$( '.js-atdi-preview-image-message' ).html( '' );

			if ( '' === currentFilePreviewImage ) {
				$( '.js-atdi-preview-image-message' ).html( atdi.texts.missing_preview_image );
			}
		}

		// Update import notice.
		var currentImportNotice = atdi.import_files[ this.value ]['import_notice'] || '';
		$( '.js-atdi-demo-import-notice' ).html( currentImportNotice );
	});

});
