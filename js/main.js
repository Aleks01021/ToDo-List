//Присвоение переменных
var form  = document.getElementById('#form');
var check = document.getElementById('#check');
var formControl = document.getElementById('form_control')
var texter = document.getElementById('#texter');
var todoList = document.getElementById('#todoList');

function newItem() {

//Checkbox
	/*var isChecked = document.getElementById('check').value;
	var check = document.createTextNode(isChecked);
	var newItem1 = document.createElement("li");
	newItem1.appendChild(check);
	document.getElementById("todoList").appendChild(newItem1);*/

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

$(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
         if($(this).prop("checked") == true){
           alert("Checkbox is checked.");
         }
         else if($(this).prop("checked") == false){
           alert("Checkbox is unchecked.");
         }
     });
 });

$(function () {
$('#datetimepicker2').datetimepicker(
      {language: 'ru'}
   );
});

$(document).ready(function(){
    $('#close').click(function(){
        $("#todoList").empty();
    });
});







