const mainGrid = document.querySelector(".grids");
const body = document.querySelector("body");

for (let row = 0; row < 64; row++){
    const gridContainer = document.createElement("div");
    mainGrid.appendChild(gridContainer);
    gridContainer.classList.add("gridContainer");
    for(let col = 0; col < 64; col++){
        const newElem = document.createElement('div');
        gridContainer.appendChild(newElem);
        newElem.classList.add("gridChild");
    };
};

var checker = false;

body.addEventListener("mousedown", (e) => {
    if (-1 < e.button < 3){
        checker = true;
    }
});

body.addEventListener("mouseup", (e) => {
    if (-1 < e.button < 3){
        checker = false;
    }
});

mainGrid.childNodes.forEach(gridContainer => {
    gridContainer.childNodes.forEach(gridChild => {
        gridChild.addEventListener("mouseenter", function (e){
            if (checker) {
                e.target.style["background-color"] = "black";
            }   
        });
    });
});