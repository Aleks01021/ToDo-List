var form  = document.forms.form,
	check = form.elements.check,
	year = form.elements.year,
	texter = form.elements.texter,
	month = form.elements.month,
	numberMont = form.elements.number_mont,
	day = form.elements.day,
	sub = form.elements.submit;

sub.addEventListener('click',getData);
function getData(){
	var isChecked = check.checked,
	content = texter.value,
	yearContent = year.value,
	monthContent = month.value,
	numberMontContent = number_mont.value,
	dayContent = day.value;
	generationTodo({
		check:isChecked,
		texter:content,
		year:yearContent,
		month:monthContent,
		numberMont:numberMontContent,
		day:dayContent

	});



};
function generationTodo(params){

};



