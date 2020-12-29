const TAB_INPUTS = {
	sss: ['side-a', 'side-b', 'side-c'],
	sas: ['side-a', 'angle-b', 'side-c'],
}

$( ()=> {
	$('.tab-content').css('display', 'none');
	$('.tab').click( (e)=> {
		// tab active classes
		$('.tab').removeClass('active');
		$(e.target).addClass('active');

		// display tab content
		const tabName = $(e.target).attr('data-tab');
		openTab(tabName);

		// highlight correct labels, disable correct inputs
		$('#side-angle-inputs input').attr('disabled', true);
		$('#side-angle-inputs label').removeClass('active');
		for(const inputName of TAB_INPUTS[tabName]) {
			$(`#${inputName}-input`).attr('disabled', false);
			$(`label[for=${inputName}-input]`).addClass('active');
		}

	});
	$('.tab[data-tab="sss"]').click();
});

function openTab(tabName) {
	$('.tab-content').css('display', 'none');
	$(`#${tabName}`).show();
}
