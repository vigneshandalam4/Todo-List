let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let btn = document.querySelector("button");

function myFunction() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    console.log("Item added successfully!");
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    // Add event listener to the delete button as soon as it is created
    delbtn.addEventListener("click", function() {
        ul.removeChild(item);
        console.log("Item deleted successfully!")
    });

    item.appendChild(delbtn);
    ul.appendChild(item);

    inp.value = "";
}
    
btn.addEventListener("click",myFunction);
    
inp.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        myFunction();
    }
});
    