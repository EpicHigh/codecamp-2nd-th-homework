fetch("homework2_1.json")
    .then(response => {
        return response.json();
    })
    .then(peopleSalary => {
        let peopleOldSalary = [];
        const pushPeopleSalary = (a, b, c, d) => {
            peopleOldSalary.push(parseInt(peopleSalary[a]["salary"]));
            peopleOldSalary.push(parseInt(peopleSalary[b]["salary"]));
            peopleOldSalary.push(parseInt(peopleSalary[c]["salary"]));
            peopleOldSalary.push(parseInt(peopleSalary[d]["salary"]));
        };
        pushPeopleSalary(0, 1, 2, 3);

        let peopleLowSalaryFilter = peopleOldSalary.filter(
            salary => salary < 100000
        );
        let peopleHighSalary = peopleOldSalary.filter(salary => salary > 100000);
        let peopleLowSalaryMap = peopleLowSalaryFilter.map(salary => salary * 2);

        let peopleNewSalary = peopleHighSalary.concat(peopleLowSalaryMap);
        let sumSalary = peopleNewSalary.reduce((x, y) => x + y);

        const innerHTML = (a, b, c, d) => {
            document.getElementById(
                "peopleLowSalary"
            ).innerHTML = `<table>
            <thead>
            <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>peopleLowSalary</th>
            <th>sumSalary</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>${peopleSalary[a]['firstname']}</td>
            <td>${peopleSalary[a]['lastname']}</td>
            <td>${peopleLowSalaryMap[a]}</td>
            <td rowspan="2" class="flex-center">${sumSalary}</td>
            </tr>
            <tr>
            <td>${peopleSalary[c]['firstname']}</td>
            <td>${peopleSalary[c]['lastname']}</td>
            <td>${peopleLowSalaryMap[b]}</td>
            </tr>
            </tbody>
            </table>`;
        };
        innerHTML(0, 1, 2, 3);
    })
    .catch(error => {
        console.log("Error:", error);
    });

