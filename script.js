let a = document.querySelectorAll(".box");
let win = document.querySelector("#h1_1")
let resetGames = document.querySelector(".resetGame")
let newGames = document.querySelector(".newGame")
let turn0 = true;
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

Array.from(a).forEach((i) => {
    i.addEventListener("click", () => {
        if (turn0) {
            i.innerText = "O";
            turn0 = false;
        } else {
            i.innerText = "X";
            turn0 = true;
        }
        i.disabled = true;
        checkWinner();
    });
});
let disableAllButton =()=>{
    for (let disBOx of a) {
        disBOx.disabled =true;
    }
}
let enableAllButton =()=>{
    for (let disBOx of a) {
        disBOx.disabled =false;
    }
}

let Winner = (pos1) => {
    win.innerText = `Winner ${pos1}`;
    win.classList.remove("hidden");
    
}

let checkWinner = () => {
    for (let temp of winPatterns) {
        let pos1 = a[temp[0]].innerText;
        let pos2 = a[temp[1]].innerText;
        let pos3 = a[temp[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                Winner(pos1);
                disableAllButton();
            }
        }
    }
};
let resetGameTicTac=()=>{
    turn0=true;
    enableAllButton();
    for (const resetBoxx of a) {
        resetBoxx.innerText="";
    }
    win.classList.add("hidden");

}
newGames.addEventListener("click",resetGameTicTac);
resetGames.addEventListener("click",resetGameTicTac);