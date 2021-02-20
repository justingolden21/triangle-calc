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

window.addEventListener('load', () => {


	u('.tab-content').addClass('hidden');
	u('.tab').on('click', (e)=> {
		// tab active classes
		u('.tab').removeClass('active');
		u(e.target).addClass('active');

		const tabName = u(e.target).attr('data-tab');

		// highlight correct labels, disable correct inputs
		u('#side-inputs input, #angle-inputs input').attr('disabled', true);
		u('#side-inputs input label, #angle-inputs input label').removeClass('active');
		// u('#diagram path[id]').css('stroke', '');
		for(const inputName of TAB_INPUTS[tabName]) {
			u(`#${inputName}-input`).attr('disabled', false);
			u(`label[for=${inputName}-input]`).addClass('active');
			document.querySelector(`#diagram #${DIAGRAM_IDS[inputName]}`).style.stroke = 'rgb(99, 102, 241)'; // indigo-500
		}

		// display tab content
		openTab(tabName);
	});

	// focusable tabs
	u('.tab').attr('tabindex', 0);

	// if tab focused with enter then click it
	u('.tab').on('keypress', function(e) {
		if(e.keyCode == 13) { // enter
			u(this).trigger('click');
		}
	});


	// read url param
	let url = new URL(window.location.href);
	let tabName = url.searchParams.get('type');
	if(tabName) {
		// open url tab
		u(`.tab[data-tab="${tabName}"]`).trigger('click');
	} else {
		// open first tab
		u('.tab[data-tab="sss"]').trigger('click');
	}


});

function openTab(tabName) {

	// open the tab, hide others
	u('.tab-content').addClass('hidden');
	u(`#${tabName}`).removeClass('hidden');

	// focus and select input (side-a is always enabled)
	u('#side-a-input').trigger('focus').trigger('select');

	// url param
	history.replaceState({}, '', '?type=' + tabName); // set url param
}

// note: if it doesnt work in prod maybe purgecss is removing the styles for hidden class and not scanning this file