let TaskDetails = ["content", "datetime"];

function getCurrentList() {
    let list = localStorage.getItem("taskList");  //if "taskList" does not exist in the local storage we will get null
    return (list) ? JSON.parse(list) : [];
}

function showCurrentList(fade) {
    let noteClasses = "dropzone wrapperNote";
    if (fade == 'fadeAll')
        noteClasses += ' fadeIn';
    document.getElementById("res").innerHTML = "";
    for (task of getCurrentList()) {
        document.getElementById("res").innerHTML +=
            `<div class="${noteClasses}">
                <div class="yes-drop draggable drag-drop note post-it-note" id=${task.id}>
                    <i class="remove glyphicon glyphicon-trash"></i>
                    <textarea rows="3">${task.content}</textarea>
                    <label>${task.datetime}</label>
                </div>
            <div>`;
    }
    if (fade == 'fadeLast') {
        let notes = document.getElementsByClassName("note");
        notes[notes.length - 1].classList.add('fadeIn');
    }
    Array.from(document.getElementsByClassName("remove")).forEach(note =>
        note.addEventListener("click", function (e) {
            removeTask(e);
        })
    );
    Array.from(document.getElementsByTagName("textarea")).forEach(textarea =>
        textarea.addEventListener("change", function (e) {
            changeTaskContent(e);
        })
    );
}

function addTask() {
    let newTask = {};
    for (key of TaskDetails) {
        newTask[key] = document.getElementById(key).value;
    }
    let isValidDatetime = checkDatetimeValidation(newTask.datetime);
    let isValidTask = checkTaskValidation(newTask.content);
    if (!isValidDatetime || !isValidTask)
        return false;
    for (key of TaskDetails) {
        document.getElementById(key).value = "";
    }
    let currentList = getCurrentList();
    newTask.id =currentList.length==0?0: Math.max(...currentList.map(task=>task.id))+1;
    currentList.push(newTask);
    localStorage.setItem("taskList", JSON.stringify(currentList));
    showCurrentList('fadeLast');
    return false;
}

function removeTask(e) {
    console.log(e.target);
    e.target.parentElement.parentElement.classList.add("fadeOut");

    setTimeout(() => {
        let id = e.target.parentElement.id;
        let currentList = getCurrentList()
        let index = currentList.findIndex(task => task.id == id)
        currentList.splice(index, 1);
        localStorage.setItem("taskList", JSON.stringify(currentList));
        showCurrentList();
    }, 1000);
   
}
function changeTaskContent(event){
    let currentList = getCurrentList();
    let id=event.target.parentElement.id;
    let task=currentList.find(task=>task.id==id);
    task.content=event.target.value;
    localStorage.setItem("taskList", JSON.stringify(currentList));
}
function changeTasksOrder() {
    let newList = [];
    let currentList = getCurrentList();
    Array.from(document.getElementsByClassName('note')).forEach(note => {
        let id = note.id;
        let task = currentList.splice(currentList.findIndex(tast => tast.id == id), 1)[0];
        newList.push(task);
    });
    localStorage.setItem("taskList", JSON.stringify(newList));
    console.log("changed Successfully")
}

function checkDatetimeValidation(value) {
    let messageDiv = document.getElementById("vForDateTime");
    if (value == "") {
        messageDiv.innerText = "Required field";
        return false;
    }
    let pattern = new RegExp("^(3[01]|[12][0-9]|0[1-9])-(1[0-2]|0[1-9])-[0-9]{4} (2[0-3]|[01]?[0-9]):([0-5]?[0-9])$");
    isValidFormat = pattern.test(value)
    console.log(isValidFormat);
    if (!isValidFormat) {
        messageDiv.innerHTML = "Format date is not valid";
        return false;
    }
    messageDiv.innerText = "";
    return true;
}

function checkTaskValidation(value) {
    let messageDiv = document.getElementById("vForTaskContent")
    if (value == "") {
        messageDiv.innerText = "Required field";
        return false;
    }
    if (value.length < 2) {
        messageDiv.innerText = "Task has to contain at least two letters";
        return false
    }
    messageDiv.innerText = "";
    return true;
}

// ======================== date-time-picker ========================

let defaults = {
    calendarWeeks: true,
    showClear: true,
    showClose: true,
    allowInputToggle: true,
    useCurrent: false,
    ignoreReadonly: true,
    minDate: new Date(),
    toolbarPlacement: 'top',
    locale: 'nl',
    icons: {
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar',
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
        previous: 'fa fa-angle-left',
        next: 'fa fa-angle-right',
        today: 'fa fa-dot-circle-o',
        clear: 'fa fa-trash',
        close: 'fa fa-times'
    }
};

$(function () {
    var optionsDatetime = $.extend({}, defaults, { format: 'DD-MM-YYYY HH:mm' });
    $('.datetimepicker').datetimepicker(optionsDatetime)
    $('.datetimepicker').on('dp.change', function (e) { checkDatetimeValidation(e.target.children[0].value); })

});
// ======================== end-date-time-picker ========================
