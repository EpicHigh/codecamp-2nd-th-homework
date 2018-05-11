fetch("http://free.currencyconverterapi.com/api/v5/convert?q=EUR_THB&compact=y")
    .then(response => {
        return response.json();
    })
    .then(EUR => {
        document
            .getElementById("convert")
            .addEventListener("click", convertCurrency);

        function convertCurrency() {
            let inputRef = document.getElementById("paperInputs1");
            let convertInput = parseInt(inputRef.value);
            console.log(convertInput);
            if (isNaN(convertInput)) {
                document.getElementById(
                    "result"
                ).innerHTML = `<p>Pleases input the number.</p>`;
            } else {
                document.getElementById("result").innerHTML = `<p>${convertInput *
                EUR["EUR_THB"]["val"]}</p>`;
            }
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });