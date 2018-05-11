function calculate() {
    let inputRef = document.getElementById("paperInputs1");
    let convertInput = parseInt(inputRef.value);
    if (isNaN(convertInput)) {
        document.getElementById(
            "result"
        ).innerHTML = `<p>Pleases input the number.</p>`;
    } else {
        document.getElementById(
            "result"
        ).innerHTML = `<p>${convertInput
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>`;
    }
}