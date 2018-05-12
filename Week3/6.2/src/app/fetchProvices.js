function fetchProvices() {
    fetch(
        "https://raw.githubusercontent.com/Cerberus/Thailand-Address/master/provinces.json"
    )
        .then(response => {
            return response.json();
        })
        .then(provinces => {
            let mySelect = ``;
            for (let i in provinces) {
                mySelect += `<option>${provinces[i]["PROVINCE_NAME"]}</option>`;
            }
            document.getElementById("selector").innerHTML = mySelect;
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

export {
    fetchProvices
}
