//your code here!
document.addEeventListener("DOMContentLoaded", function(){
	const list = document.getElementById("Infinite-list");

	function addItem(count = 10) {
		for (let i = 0;i < count; i++){
			const item = document.createElement("li");
			item.textContent = `Item ${list.children.length + 1}`;
			list.appendChild(item);
		}
		
	}
	addItem();
	list.addEventListener("scroll", function () {
		if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
			addItem(2);
		}
	});
});
