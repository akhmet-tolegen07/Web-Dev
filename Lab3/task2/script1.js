const btnNewTask = document.getElementById("add-button");
const form = document.getElementById("create-new-task");
const list = document.getElementById("todo-list");
const ul = document.createElement("ul");

btnNewTask.addEventListener("click", function (event) {
  event.preventDefault();

  const input = form.querySelector("input[name=newTask]");

  if (input.value.trim() === "") {
    input.focus();
    return;
  }

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const deleteBtn = document.createElement("button");
  let p = document.createElement("p");

  checkbox.type = "checkbox";
  deleteBtn.type = "button";

  deleteBtn.innerHTML =
    "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd63Ix3zwAkL61PZme1N5Ndx0dImJWE25h7g&s>";
  deleteBtn.classList.add("delete-btn");
  p.textContent = input.value;

  list.appendChild(ul);
  ul.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(p);
  li.appendChild(deleteBtn);

  input.value = "";
});

list.addEventListener("click", function (event) {
  const deleteButton = event.target.closest(".delete-btn");

  if (deleteButton) {
    const li = deleteButton.closest("li");
    li.remove();
    if (ul.children.length === 0) {
      ul.remove();
    }
  }
});

list.addEventListener("click", function (event) {
  if (event.target.type == "checkbox") {
    const li = event.target.parentNode;
    const p = li.querySelector("p");

    p.classList.toggle("done");
  }
});
