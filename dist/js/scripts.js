$( ()=> {
	$('.tab-content').css('display', 'none');
	$('.tab').click( (e)=> {
		$('.tab').removeClass('active');
		$(e.target).addClass('active');

		openTab($(e.target).attr('data-tab') );
	});
	$('.tab[data-tab="sss"]').click();
});

function openTab(tabName) {
	$('.tab-content').css('display', 'none');
	$(`#${tabName}`).fadeIn();
}
