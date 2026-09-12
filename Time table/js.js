let timetable = document.getElementById("timetable");
let timetableStore = [];

loadData();

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    showTimetable();
});

function showTimetable() {
    let time = prompt("Enter your time");
    let scientific1 = prompt("Enter your Scientific material for Monday");
    let scientific2 = prompt("Enter your Scientific material for Tuesday");
    let scientific3 = prompt("Enter your Scientific material for Wednesday");
    let scientific4 = prompt("Enter your Scientific material for Thursday");
    let scientific5 = prompt("Enter your Scientific material for Friday");

    if (time.trim() && scientific1.trim() && scientific2.trim() && scientific3.trim() && scientific4.trim() && scientific5.trim()) {
        let timetableData = {
            time: time,
            scientific1: scientific1,
            scientific2: scientific2,
            scientific3: scientific3,
            scientific4: scientific4,
            scientific5: scientific5
        };

        timetableStore.push(timetableData);

        savedata();
        renderTimetable();
    } else {
        alert("Rewrite the timetable correctly");
        return;
    }
}

function renderTimetable() {
    timetable.innerHTML = `
        <tr>
            <th>Time</th>
            <th>Monday</th>
            <th class="active">Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Remove</th>
        </tr>`
    ;

    timetableStore.forEach((item, index) => {
        let content = document.createElement("tr");

        content.innerHTML = `
            <td>${item.time}</td>
            <td>${item.scientific1}</td>
            <td class="active">${item.scientific2}</td>
            <td>${item.scientific3}</td>
            <td>${item.scientific4}</td>
            <td>${item.scientific5}</td>
            <td>
                <button class="delete" onclick="deleteTimetable(${index})">
                    delete
                </button>
            </td>
        `;

        timetable.appendChild(content);
    });

    let timetable_tr = timetable.querySelectorAll("tr");

    timetable_tr.forEach((tr, index) => {
        if (index % 2 === 0) {
            tr.style.backgroundColor = "#ccc";
        }
    });
}

function deleteTimetable(index) {
    timetableStore.splice(index, 1);

    savedata();
    renderTimetable();
}

function savedata() {
    localStorage.setItem("timetable", JSON.stringify(timetableStore));
}

function loadData() {
    let data = localStorage.getItem("timetable");

    if (data != null) {
        timetableStore = JSON.parse(data);
        renderTimetable();
    }
}

