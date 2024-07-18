const button = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("list");

const chaptersArray = GetChapterList() || [];

chaptersArray.forEach(chapter => {displaylist();});

button.addEventListener('click', function() {
    if(input.value.trim() !== ""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
    }
    else{}
    input.focus();
})

function SetChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function GetChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function DisplayList(item){
        const output = document.createElement("li");
        const deleteButton = document.createElement("button");

        output.innerHTML = item;
        deleteButton.textContent = "❌";
        deleteButton.classList.add('delete')
        output.append(deleteButton);
        list.append(output);
        deleteButton.addEventListener("click", function() {
            list.RemoveChild(output);
            deleteChapter(output.textContent);
        })

        output.append(deleteButton);
        list.append(output);

    input.focus();
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}