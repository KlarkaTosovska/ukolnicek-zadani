export const Task = (props) => {
    const { done, due, id, name } = props;
    if (done === true) {
        return `
        <div class="task">
            <div class="task__body">
                <div class="task__name">${name}</div>
                <div class="task__due">${due}</div>
            </div>
            <div class="task__done">✓</div>
        </div>
    `;  
    } else {
        return `
        <div class="task">
            <div class="task__body">
                <div class="task__name">${name}</div>
                <div class="task__due">${due}</div>
            </div>
            <div class="task__done">X</div>
        </div>
    `;   
    }};