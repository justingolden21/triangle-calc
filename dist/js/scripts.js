const TAB_INPUTS = {
	sss: ['side-a', 'side-b', 'side-c'],
	sas: ['side-a', 'angle-b', 'side-c'],
	ssa: ['side-a', 'side-b', 'angle-a'],
	aas: ['side-a', 'angle-a', 'angle-b'],
	asa: ['side-a', 'angle-b', 'angle-c'],
};

const DIAGRAM_IDS = {
	'side-a': 'a',
	'side-b': 'b',
	'side-c': 'c',
	'angle-a': 'alpha',
	'angle-b': 'beta',
	'angle-c': 'gamma',
}

$( ()=> {

	// tooltips
	$('button[data-title]').each( (idx, elm)=> {
		$(elm).addClass('tooltip').append( $(`<div class="tooltiptext">${$(elm).attr('data-title')}</div>`) );
	});

	$('.tab-content').css('display', 'none');
	$('.tab').click( (e)=> {
		// tab active classes
		$('.tab').removeClass('active');
		$(e.target).addClass('active');

		const tabName = $(e.target).attr('data-tab');

		// highlight correct labels, disable correct inputs
		$('#side-inputs input, #angle-inputs input').attr('disabled', true);
		$('#side-inputs input label, #angle-inputs input label').removeClass('active');
		$('#diagram path[id]').css('stroke', '');
		for(const inputName of TAB_INPUTS[tabName]) {
			$(`#${inputName}-input`).attr('disabled', false);
			$(`label[for=${inputName}-input]`).addClass('active');
			$(`#diagram #${DIAGRAM_IDS[inputName]}`).css('stroke', 'rgb(99, 102, 241)'); // indigo-500
		}

		// display tab content
		openTab(tabName);
	});

	// focusable tabs
	$('.tab').attr('tabindex', 0);

	// if tab focused with enter then click it
	$('.tab').keypress( function(e) {
		if(e.keyCode == 13) { // enter
			$(this).click();
		}
	});

	$('.tab[data-tab="sss"]').click();



});

function openTab(tabName) {
	
	// $('.tab-content').css('display', 'none');
	// $(`#${tabName}`).show();

	console.log('before');
	$('#side-a-input').focus().select();
	console.log('after');

	// $('#side-a-input')[0].select().focus();

	// console.log($(`#inputs input:not([disabled])`).first().focus() );
	// $(`#${tabName}`).next()
	// .find(':focusable').eq(0).focus();
}
