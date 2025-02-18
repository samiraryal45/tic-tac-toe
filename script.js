const buttons = document.querySelectorAll(".box");
const resetButton = document.querySelector("#resetBtn");
const newButton = document.querySelector("#new__btn")
let turn0 = true;
let winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]

]
buttons.forEach(button => {
    button.addEventListener("click", function () {
        if (button.innerHTML !== "") return;
        button.innerHTML = turn0 ? "X" : "O";
        turn0 = !turn0;

        winner();
    })
});



const winner = () => {
    for (pattern of winningPattern) {

        let pos1Val = buttons[pattern[0]].innerText;
        let pos2Val = buttons[pattern[1]].innerText;
        let pos3Val = buttons[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            alert(`${pos1Val} wins!`);
            
        return;

    }
}

}
newButton.addEventListener("click",function () {
    buttons.forEach(button => {
        button.innerHTML = '';
        button.disabled = false;
    });
    turn0 = true;
})
resetButton.addEventListener("click", function () {
    buttons.forEach(button => {
        button.innerHTML = '';
        button.disabled = false;
    });
    turn0 = true;
}); 












