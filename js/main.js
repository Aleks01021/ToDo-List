//Присвоение переменных
//var form  = document.getElementById('#form');
var check = document.getElementById('#check');
var formControl = document.getElementById('form_control')
var texter = document.getElementById('#texter');
var todoList = document.getElementById('#todoList');

function newItem() {

	//Checkbox
	var isChecked = document.getElementById('check').value;
	var check = document.createTextNode(isChecked);
	var newItem1 = document.createElement("li");
	newItem1.appendChild(check);
	document.getElementById("todoList").appendChild(newItem1);
	var ch = document.getElementById("check").checked;
    document.getElementById("todoList").innerHTML = ch;
	//Date

	var dataControl = document.getElementById('form_control').value;
	var formControl = document.createTextNode(dataControl);
	var newItem2 = document.createElement('li');
	newItem2.appendChild(formControl);
	document.getElementById('todoList').appendChild(newItem2);



	//Textarea
	var item = document.getElementById("texter").value;
	var texter = document.createTextNode(item);
	var newItem3 = document.createElement("li");
	newItem3.appendChild(texter);
	document.getElementById("todoList").appendChild(newItem3);



};


$(function () {
$('#datetimepicker2').datetimepicker(
      {language: 'ru'}
   );
});










/*function todoList(){
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
/*function todoList(){

	var item = document.getElementByid('texter').value
	var texter = document.createTextNode(item)
	var newItem = document.createElement('li')
	newItem.appendChild(texter)
	document.getElementById('todoList').appendChild(newItem)
};
*/
