const addTaskForm = document.querySelector('#add_task');
const memos_ul = document.querySelector("#memos");

let memos = [
	{
		id: 0,
		value: "aaa"
	}
];  // List[structure]

addTaskForm.addEventListener('submit', (e) => {
	e.preventDefault();
    const input = document.querySelector('#add_new_memo');
    const input_value = input.value
	if (input_value !== '') {
		appendMemo(input_value);
		addTaskForm.reset();
		appendChildLiTag(input_value);
	}
	else {
		alert('please input');
	}
});

// 後々データベースから取ってくる処理
let fetchMemos = () => {
	return memos;
};

let initialRender = () => {
	const init_memos = fetchMemos();
	for (let i=0; i < memos.length; i++) {
		appendChildLiTag(init_memos[i].value + ' ');
	}
}

// memos に structure を追加する処理
let appendMemo = (input_value) => {
	memos.push(
		{
			id: memos.length,
			value: input_value
		}
	);
}

// submit された input_value を innerText を持つ li を ul の子要素のラストに追加する
let appendChildLiTag = (input_value) => {
	const newLi = document.createElement('li');
	newLi.innerText = input_value + ' ';
	const newButton = document.createElement('button');
	newButton.innerText = 'delete';
	newLi.appendChild(newButton);
	newButton.addEventListener('click', () => {
		memos_ul.removeChild(newLi);
	});
	memos_ul.appendChild(newLi);
}
initialRender();
