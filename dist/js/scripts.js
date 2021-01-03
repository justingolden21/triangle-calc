$( ()=> {

	// tooltips
	$('button[data-title]').each( (idx, elm)=> {
		$(elm).addClass('tooltip').append( $(`<div class="tooltiptext">${$(elm).attr('data-title')}</div>`) );
	});
});