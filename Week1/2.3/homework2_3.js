const peopleSalary = [
    {
        "id": "1001",
        "firstname": "Luke",
        "lastname": "Skywalker",
        "company": "Walt Disney",
        "salary": "40000"
    },
    {
        "id": "1002",
        "firstname": "Tony",
        "lastname": "Stark",
        "company": "Marvel",
        "salary": "1000000"
    },
    {
        "id": "1003",
        "firstname": "Somchai",
        "lastname": "Jaidee",
        "company": "Love2work",
        "salary": "20000"
    },
    {
        "id": "1004",
        "firstname": "Monkey D",
        "lastname": "Luffee",
        "company": "One Piece",
        "salary": "9000000"
    }
];
const tableHeader = peopleSalary[0];
for (let i in tableHeader) {
    if (i !== "company") {
        $("#header").append("<th>" + i + "</th>");
    }
}
for (let i = 0; i < peopleSalary.length; i++) {
    let changeRow = "#" + (1001 + i);
    for (let j in tableHeader) {
        let currentSalary = parseInt(peopleSalary[i][j]);
        if (j !== "company") {
            if (j !== "salary") {
                $(changeRow).append("<td>" + peopleSalary[i][j] + "</td>");
            }
            if (j === "salary") {
                let salaryList = "<ol>";
                for (let k = 0; k < 3; k++) {
                    salaryList += "<li>" + currentSalary + "</li>";
                    currentSalary += (currentSalary * 0.1);
                }
                salaryList += "</ol>";
                $(changeRow).append(salaryList);
            }
        }
    }
}