let progress = 25;
let tableHead = ``;
let tableBody = ``;
const image1URL = `http://www.effigis.com/wp-content/uploads/2015/02/Iunctus_SPOT5_5m_8bit_RGB_DRA_torngat_mountains_national_park_8bits_1.jpg
`;
const image2URL = `http://www.effigis.com/wp-content/uploads/2015/02/Infoterra_Terrasar-X_1_75_m_Radar_2007DEC15_Toronto_EEC-RE_8bits_sub_r_12.jpg
`;
const image3URL = `http://www.effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView1_50cm_8bit_BW_DRA_Bangkok_Thailand_2009JAN06_8bits_sub_r_1.jpg
`;

const myImageAddress = [image1URL, image2URL, image3URL];

function createImgTag() {
    for (let i = 0; i < myImageAddress.length; i++) {
        document.getElementById(`image-${i + 1}`).innerHTML = `<img id="img-${i}">`;
    }
    loadImage(0);
}

function loadImage(counter) {
    let myImage = document.getElementById(`img-${counter}`);
    myImage.onload = () => {
        counter++;
        if (counter < 3) {
            loadImage(counter);
        }
    };
    myImage.onerror = () => {
        alert(`Error: Can not load an image.`);
    };
    myImage.addEventListener(`load`, isLoaded);
    myImage.addEventListener(`error`, isError);
    myImage.src = myImageAddress[counter];
    myImage.width = 500;
    myImage.height = 200;
    if (progress === 100) {
        setTimeout(() => {
            $("#myModal").modal("hide");
        }, 2000);
    }
}

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
        setTimeout(() => {
            $("#myModal").modal("hide");
        }, 2000);
    }
}

function spreadData(data) {
    let newData = [...data];
    newData.forEach(i => createTableBody(i));
}

function createTableBody(i) {
    tableBody += `<tr><td>${i.id}</td><td>${i.firstname}</td><td>${
        i.lastname
        }</td><td>${i.company}</td><td>${i.salary}</td></tr>`;
    document.getElementById(`tableBody`).innerHTML = tableBody;
}

function createTableHead(data) {
    tableHead += `<tr>`;
    for (let i in data[0]) {
        tableHead += `<th>${i}</th>`;
    }
    tableHead += `</tr>`;
    document.getElementById(`tableHead`).innerHTML = tableHead;
}

async function fetchHomeWork2_1() {
    const homework = `homework2_1.json`;
    const response = await fetch(homework);
    const data = await response.json();
    createTableHead(data);
    spreadData(data);
}

createImgTag();
fetchHomeWork2_1();