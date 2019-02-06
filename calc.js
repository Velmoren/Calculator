
var rowS = [];
var view = {
	//выводим на экран
	displayText: function(msg){
		var massageArea = document.getElementById("massageArea");
		massageArea.innerHTML = msg;
	},
	//считываем с экрана
	getText: function() {
		var text = document.getElementById("massageArea").innerHTML;
		return text;
	}
};
//создаем объект, отвечающий за счет
var resulter = {
	num1: 0,
	num2: 0,
	act: 0,
	memory: 0,
	btnSumClick: function() {
		resulter.num1 = view.getText();
		rowS = [];
		resulter.act = 1;
		view.displayText("+");
	// метод суммы
	},
	btnMinusClick: function() {
		resulter.num1 = view.getText();
		rowS = [];
		resulter.act = 2;
		view.displayText("-");
	// метод вычитания
	},
	btnMultiplyClick: function() {
		resulter.num1 = view.getText();
		rowS = [];
		resulter.act = 3;
		view.displayText("*");
	// метод умножения
	},
	btnShareClick: function() {
		resulter.num1 = view.getText();
		rowS = [];
		resulter.act = 4;
		view.displayText("/");
	// метод деления
	},
	btnClearClick: function() {
		rowS = [];
		resulter.num1 = 0;
		resulter.num2 = 0;
		view.displayText(0);
		//console.log(rowS);
	// функция очистки экрана
	},
	btnMemoryPlusClick: function() {
		// добавляем данные с экрана в переменную memory
		resulter.memory = parseInt(resulter.memory) + parseInt(view.getText()); 
		//console.log(resulter.memory);
	},
	btnMemoryMinusClick: function() {
		//вычитаем из переменной memory значение на экране
		resulter.memory = parseInt(resulter.memory) - parseInt(view.getText()); 
		//console.log(resulter.memory);
	},
	btnMemoryClearClick: function() {
		//назначаем переменной memory значение 0
		resulter.memory = 0;
		//console.log(resulter.memory);
	},
	btnMemoryReadClick: function() {
		//выводим на экране значение memory
		view.displayText(resulter.memory); 
		//console.log(resulter.memory);
	},
	btnPow2Click: function () {
		// возводим число на экране во вторую степень
		resulter.num1 = view.getText();
		resulter.num1 = parseInt(resulter.num1) * parseInt(resulter.num1);
		view.displayText(resulter.num1);
	},
	btnPow3Click: function() {
		// возводим число на экране в третью степень
		resulter.num1 = view.getText();
		resulter.num1 = parseInt(resulter.num1) * parseInt(resulter.num1) * parseInt(resulter.num1);
		view.displayText(resulter.num1);
	},
	btnResultClick: function() {
			if (resulter.act === 1) {
			resulter.num2 = view.getText();
			result1 = parseInt(resulter.num1) + parseInt(resulter.num2);
			view.displayText(result1);
			//console.log(result1, resulter.num1, resulter.num2);
		} else if (resulter.act === 2) {
			resulter.num2 = view.getText();
			result2 = parseInt(resulter.num1) - parseInt(resulter.num2);
			view.displayText(result2);
		//	console.log(result2, resulter.num1, resulter.num2);
		}else if (resulter.act === 3) {
			resulter.num2 = view.getText();
			result3 = parseInt(resulter.num1) * parseInt(resulter.num2);
			view.displayText(result3);
			//console.log(result3, resulter.num1, resulter.num2);
		}else if (resulter.act === 4) {
			resulter.num2 = view.getText();
			result4 = parseInt(resulter.num1) / parseInt(resulter.num2);
			view.displayText(result4);
			//console.log(result4, resulter.num1, resulter.num2, resulter.act);
		}
		// метод расчета результатов
	}
};


function btnClick(eventObj) {
	var textObject = eventObj.target;
	var text = textObject.value;
	var massageArea = document.getElementById("massageArea");
	rowS.push(parseInt(text));
	var textExit = rowS.join("");
	//console.log(rowS);
	massageArea.innerHTML = textExit;
	//console.log(resulter.num1);
	//console.log(resulter.act);
//функция, считывающая значения кнопок и добавляет в массив rowS
}


window.onload = init;
function init() {
	view.displayText(0);
	var clickClear = document.getElementById("clear");
	clickClear.onclick = resulter.btnClearClick;
	var clickButtons = document.getElementsByClassName("button_num");
	for (i = 0; i < clickButtons.length; i++) {
	clickButtons[i].onclick = btnClick;
	}
	var sumButton = document.getElementById("summ");
	sumButton.onclick = resulter.btnSumClick;

	var minusButton = document.getElementById("minus");
	minusButton.onclick = resulter.btnMinusClick;

	var multiplyButton = document.getElementById("multiply");
	multiplyButton.onclick = resulter.btnMultiplyClick;

	var shareButton = document.getElementById("share");
	shareButton.onclick = resulter.btnShareClick;

	var resultButton = document.getElementById("result");
	resultButton.onclick = resulter.btnResultClick;

	var memoryPlusButton = document.getElementById("mPlus");
	memoryPlusButton.onclick = resulter.btnMemoryPlusClick;

	var memoryMinusButton = document.getElementById("mMinus");
	memoryMinusButton.onclick = resulter.btnMemoryMinusClick;

	var memoryClearButton = document.getElementById("mClear");
	memoryClearButton.onclick = resulter.btnMemoryClearClick;

	var memoryReadButton = document.getElementById("mRead");
	memoryReadButton.onclick = resulter.btnMemoryReadClick;

	var pow2Button = document.getElementById("pow2");
	pow2Button.onclick = resulter.btnPow2Click;

	var pow3Button = document.getElementById("pow3");
	pow3Button.onclick = resulter.btnPow3Click;
	// задаем обработчики нажатий кнопок
}
