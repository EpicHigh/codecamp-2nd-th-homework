fetch('homework1-4.json').then(response => {
    return response.json();
}).then(data => {

}).catch(error => {
    console.log("Error:", error);
});