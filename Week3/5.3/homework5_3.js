fetch("https://swapi.co/api/people/?format=json")
    .then(response => {
        return response.json();
    })
    .then(people => {
        let myBodyTable = ``;
        for (let i in people["results"]) {
            myBodyTable += `<tr><td>${people["results"][i]["name"]}</td><td>${
                people["results"][i]["gender"]
                }</td><td><label class="paper-btn margin" for="modal-${i}">
        View</label><input class="modal-state" id="modal-${i}" type="checkbox"><div class="modal"><label class="modal-bg" 
        for="modal-${i}"></label><div class="modal-body" id="modal-body-${i}"></div></div></td></tr>`;
        }

        document.getElementById("myTableBody").innerHTML = myBodyTable;
        for (let i in people["results"]) {
            let myModalBody = `<label class="btn-close" for="modal-${i}">X</label><ul>`;

            for (let j in people["results"][i]) {
                if (j === "homeworld") {
                    myModalBody += `<li id="${j}-${i}"></li>`;
                    fetchhomeworld(`${people["results"][i][j]}?format=json`, i);
                } else {
                    myModalBody += `<li>${j}: ${people["results"][i][j]}</li>`;
                }
            }
            myModalBody += `</ul>`;
            document.getElementById(`modal-body-${i}`).innerHTML = myModalBody;
        }
    })
    .catch(error => {
        console.log("Error:", error);
    });

function fetchhomeworld(homeworld, number) {
    fetch(homeworld)
        .then(response => {
            return response.json();
        })
        .then(homeworld => {
            console.log(homeworld["name"]);
            document.getElementById(`homeworld-${number}`).innerHTML = `homeworld: ${
                homeworld["name"]
                }`;
        })
        .catch(error => {
            console.log("Error:", error);
        });
}
