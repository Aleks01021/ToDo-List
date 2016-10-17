//Присвоение переменных
var form  = document.forms.form,
	check = form.elements.check,
	year = form.elements.year,
	texter = form.elements.texter,
	month = form.elements.month,
	numberMont = form.elements.number_mont,
	day = form.elements.day,
	btn = form.elements.btn;

btn.addEventListener('click',getData);
function getData(){
	var isChecked = check.checked,
	content = texter.value,
	yearContent = year.value,
	monthContent = month.value,
	numberMontContent = number_mont.value,
	dayContent = day.value;
	generateTodo({
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
function todoList(){


	/*var item = document.getElementByid('texter').value
	var texter = document.createTextNode(item);
	var newItem = document.createElement('li');
	newItem.appendChild(texter)
	document.getElementById('todoList').appendChild(newItem)*/
};

