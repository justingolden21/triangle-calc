window.onload = ()=> {
	console.log('page loaded');


	// tooltips
	u('button[data-title]').each( (elm, idx)=> {
		u(elm).addClass('tooltip').append( u(`<div class="tooltiptext">${u(elm).attr('data-title')}</div>`) );
	});
};
