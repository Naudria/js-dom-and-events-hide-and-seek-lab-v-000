// Define a function getFirstSelector(selector), which accepts a selector 
// and returns the first element that matches.

// Define a function nestedTarget() that pulls a .target out of #nested 
// (# is used for IDs in selectors — but you knew that because you read 
// 	the docs, right? :) ). (Note that in index.html #nested and .target
// 	 just happen to be divs. This method should work with arbitrary elements.)

// Define a function increaseRankBy(n) that increases the ranks in all 
// of the .ranked-lists by n. (You might need to make use of parseInt()

// Define a function deepestChild() that pulls out the most deeply nested 
// child from div#grand-node. (Remember, you can iterate over elements and 
// call querySelector() and querySelectorAll() on them. This is challenging 
// to implement correctly, but not beyond your ability!)

function getFirstSelector(li) {
	return document.querySelector(li);
}

function nestedTarget() {
	return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
	let elementsToIncrease = document.querySelectorAll('.ranked-list li');

    for (let i = 0; i < elementsToIncrease.length; i++) {
        elementsToIncrease[i].innerHTML = parseInt(elementsToIncrease[i].innerHTML) + n;
    }
}

function deepestChild() {
    let node = document.getElementById('grand-node');
    let childNode = node.children[0];

    while (childNode) {
        node = childNode;
        childNode = node.children[0]
    }
    return node;
}