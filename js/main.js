const endDate = "21 December 2023 12:00 PM";

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll('input');
//anonymous function
const clock = () => {

    const end = new Date(endDate);
    const now = new Date();
    //find difference and /by 1000 to convert miliseconds into seconds
    const diff = (end - now) / 1000;
    if (diff < 0) {
        return;
    }
    //cpnvert into days, hours, min, sec
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 24;
    inputs[3].value = Math.floor(diff) % 60;


}
clock();
//to call clock function after every second
setInterval(
    () => {
        clock();
    },
    1000
)
