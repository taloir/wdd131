const button = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("list");



button.addEventListener('click', function() {
    if(input.value.trim() !== ""){
        const output = document.createElement("li");
        const deleteButton = document.createElement("button");

        output.innerHTML = input.value;
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", function() {
            list.RemoveChild(output);
            input.focus();
        })

        output.append(deleteButton);
        list.append(output);

        input.value = "";
    }
    else{}

    input.focus();
})