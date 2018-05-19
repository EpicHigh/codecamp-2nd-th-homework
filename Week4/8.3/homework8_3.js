let progress = 25;
let tableHead = ``;
let tableBody = ``;

function isError() {
    alert(`Error: can not load.`);
}

function isLoaded() {
    progress += 25;
    let progressBar = document.getElementById(`myProgress`);
    progressBar.getAttributeNode(`aria-valuenow`).value = progress;
    progressBar.getAttributeNode(`style`).value = `width: ${progress}%`;
    progressBar.innerText = `${progress}`;
    if (progress === 100) {
        $("#myModal").modal("hide");
    }
}

function spreadData(data) {
    let newData = [...data];
    newData.forEach(i => createTable(i));
}

function createTable(i) {
    tableBody += `<tr><td>${i.id}</td><td>${i.firstname}</td><td>${
        i.lastname
        }</td><td>${i.company}</td><td>${i.salary}</td></tr>`;
    document.getElementById(`tableBody`).innerHTML = tableBody;
}

fetch(`homework2_1.json`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        tableHead += `<tr>`;
        for (let i in data[0]) {
            tableHead += `<th>${i}</th>`;
        }
        tableHead += `</tr>`;
        document.getElementById(`tableHead`).innerHTML = tableHead;
        spreadData(data);
    })
    .catch(error => {
        console.log(`Error:`, error);
    });
