import { Task } from "./Task/index.js";

const renderTasks = (items) => {
    const toDo = document.querySelector('.todo__tasks');
    toDo.innerHTML = items
    .map((item) => Task(item))
    .join('');
};

// vytvořím funkci s podmínkou, která bude ověřovat, zda je checkbox zaškrtlý či nikoli

function checkboxControl() {
    if (checkbox.checked == true) {
        // toto bude provedeno, pokud checkbox bude zaškrtnutý (nehotové úkoly)
        fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            renderTasks(data);
        });
    } else {
        // toto bude provedeno, pokud checkbox nebude zaškrtnutý (všechny úkoly)
        fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            renderTasks(data);
        });        
    }
}

// po kliknutí na checkbox se spustí funkce checkboxControl, která zobrazí správná data
const checkbox = document.getElementById('checkbox-undone');
console.log(checkbox.checked);

checkbox.addEventListener('click', checkboxControl);

// aby se úkoly zobrazily na stráncw ihned po spuštění
checkboxControl();






