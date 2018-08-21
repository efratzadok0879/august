let rows = 3;
let cols = 3;
let metrix;

onload = () => {
    metrix = document.getElementById("matrix");
    createMetrix();
}

createMetrix = () => {
    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < cols; j++) {
            let col = document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
        }
        metrix.appendChild(row);
    }
}

paintMainDiagonal = () => {
    for (let i = 0; i < rows; i++) {
        metrix.children[i].children[i].classList.add("background");
    }
}

paintSideDiagonal = () => {
    for (let i = 0; i < rows; i++) {
        metrix.children[i].children[rows - 1 - i].classList.add("background");
    }
}

paintDiagonals = () => {
    reset();
    paintMainDiagonal();
    paintSideDiagonal();
}

paintBorder = () => {
    reset();
    for (let i = 0; i < rows; i++) {
        metrix.children[0].children[i].classList.add("background");//first row
        metrix.children[rows - 1].children[i].classList.add("background");//last row
        metrix.children[i].children[0].classList.add("background");//first col
        metrix.children[i].children[rows - 1].classList.add("background");//last col
    }
}

paintUpperPart = () => {
    reset();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j + i < rows; j++) {
            metrix.children[i].children[j].classList.add("background");//first row

        }
    }
}

paintDownPart = () => {
    reset();
    for (let i = 0; i < rows; i++) {
        for (let j = rows - 1; j + i >= rows - 1; j--) {
            metrix.children[i].children[j].classList.add("background");//first row

        }
    }
}

reset = () => {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            metrix.children[i].children[j].classList.remove("background");
        }
    }
}