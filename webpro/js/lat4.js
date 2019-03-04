let numBtn = document.getElementsByClassName('number');
let funcBtn = document.getElementsByClassName('func');
let operBtn = document.getElementsByClassName('oper');
let result = document.getElementById('result-view');
let delBtn = document.getElementById('del');
let v1, v2, v3;
let isV1 = true;
let oper = '';
let isClearable = false;

for (var i = 0; i < numBtn.length; i++) {
	if (isClearable) {
		isClearable = false;
	}
	numBtn[i].addEventListener('click', function() {
		if (result.innerHTML === '0' || isClearable) {
			console.log('reset');
			result.innerHTML = this.innerHTML;
		} else {
			result.innerHTML += this.innerHTML;
		}
		if (isV1) {
			v1 += this.innerHTML;
		} else {
			v2 += this.innerHTML;
		}
		if (isV1) {
			console.log(v1);
		} else {
			console.log(v2);
		}
	});
}

for (var i = 0; i < operBtn.length; i++) {
	operBtn[i].addEventListener('click', function() {
		oper = this.id;
		isV1 = false;
		v1 = parseInt(result.innerHTML);
		console.log(oper);
		result.innerHTML = '0';
	});;
}

delBtn.addEventListener('click', function() {
	let afterDel = result.innerHTML.slice(0,-1);
	if (afterDel === '') {
		result.innerHTML = 0;
	} else {
		result.innerHTML = afterDel;
	}
	if (isV1) {
		v1 = result.innerHTML;
	} else {
		v2 = result.innerHTML;
	}
});

document.getElementById('cls').addEventListener('click', function() {
	document.getElementById('result-view').innerHTML = '0';
	v1 = 0;
	v2 = 0;
	isV1 = true;
	isClearable = false;
});

document.getElementById('=').addEventListener('click', function() {
	v1 = parseInt(v1);
	v2 = parseInt(result.innerHTML);
	console.log(oper);
	if (oper === '+') {
		v3 = add(v1, v2);
		result.innerHTML = v3;
	} else if (oper === '-') {
		v3 = sub(v1, v2);
		result.innerHTML = v3;
	} else if (oper === '*') {
		v3 = mtply(v1, v2);
		result.innerHTML = v3;
	} else if (oper === '/') {
		v3 = div(v1, v2);
		result.innerHTML = v3;
	} else if (oper === '') {
		// do nothing
	} else {
		console.log('WRONG OPERATOR');
	}
	isV1 = true;
	isClearable = true;
	oper = '';
});

function add(a,b) {
	return a + b;
}
function sub(a,b) {
	return a - b;
}
function mtply(a,b) {
	return a * b;
} 
function div(a,b) {
	return a / b;
}

let addDataBtn = document.getElementById('addDataBtn');
let dataTable = document.getElementById('dataTable');

addDataBtn.addEventListener('click', function() {
	let row = dataTable.insertRow(-1);
	row.insertCell(-1).innerHTML = document.getElementById('nim').value;
	row.insertCell(-1).innerHTML = document.getElementById('name').value;
	row.insertCell(-1).innerHTML = document.getElementById('origin').value;
});