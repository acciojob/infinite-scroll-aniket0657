document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("infi-list"); // Ensure ID is correct

    function addItems(count = 10) {
        for (let i = 0; i < count; i++) {
            const item = document.createElement("li");
            item.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(item);
        }
    }

    // Add initial items
    addItems();

    // Infinite scrolling logic
    list.addEventListener("scroll", function () {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            addItems(2); // Add 2 more items when reaching the end
        }
    });
});
