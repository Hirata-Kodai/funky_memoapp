const button = document.querySelector('button');
button.addEventListener('click', () => {
    const input = document.querySelector('#add_new_memo');
    const input_value = input.value
	if (input_value !== '') {
		console.log(input_value);
		input.value = '';
		const newLi = document.createElement('li');
		newLi.innerText = input_value+' ';
		const newButton = document.createElement('button');
		newButton.innerText = 'delete';
		newLi.appendChild(newButton);
		newButton.addEventListener('click', () => {
			document.querySelector('ul').removeChild(newLi);
		});
		document.querySelector('ul').appendChild(newLi);
	}
	else {
		alert('please input');
	}
});