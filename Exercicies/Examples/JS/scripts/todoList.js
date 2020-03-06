let newItem = document.getElementById("newItem");
let addbtn = document.getElementById("addButton");
let allItems = document.getElementById("allItems");

function onAddItem() {
  let newTodoText = newItem.value;
  if (newTodoText.trim() == "") {
    return;
  } else {
    allItems.innerHTML = allItems.innerHTML + "<li>" + newTodoText + "</li>";
    newItem.value = "";
  }
}

function validate() {
  //   addbtn.disabled = newItem.value.trim() == "";
  if (newItem.value.trim() == "") {
    addbtn.disabled = true;
  } else {
    addbtn.disabled = false;
  }
}

addbtn.addEventListener("click", onAddItem);

newItem.addEventListener("keyup", validate);