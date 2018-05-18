fetch('homework1-4.json').then(response => {
    return response.json();
}).then(data => {
    let dataArr = [...data];
    let newArr = dataArr.filter(i => i['gender'] === 'male' && i['friends'].length > 1);
    newArr.map(i => divideByTen(i));
    let newArr2 = newArr.map(i => fieldIntersted(i));
    newArr2.forEach(i => createTable(i))
}).catch(error => {
    console.log("Error:", error);
});
let myBody = ``;

function divideByTen(i) {
    let current = String(i['balance']).match(/\d/g);
    current = `$` + String(parseInt(current.join("")) / 1000);
    i['balance'] = current;
}

function fieldIntersted(i) {
    return {
        name: i.name,
        gender: i.gender,
        company: i.company,
        email: i.email,
        friends: i.friends,
        balance: i.balance
    }
}

function createTable(i) {
    myBody += `<tr><td>${i.name}</td><td>${i.gender}</td><td>${i.company}</td><td>${i.email}</td><td>${i.friends.length}</td>
    <td>${i.balance}</td></tr>`;
    document.getElementById('myBody').innerHTML = myBody;
}