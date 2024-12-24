const dateinput = document.getElementById("dateinput");
const forminput = document.getElementById("forminput");
// endDate = "17 September 2023 12:00 AM";

// if(dateinput.value === ""){
//     let endDate = "22 December 2023 06:20 AM";
// }else{
//     endDate = dateinput.value;
// }

forminput.addEventListener('submit', (e)=>{
    e.preventDefault();
    endDate = dateinput.value;

    dateinput.value = "";

    
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();

    // diff b/w end , now
    const diff = (end - now) / 1000;

    if(diff < 0) return;
    
    // conver into days
    inputs[1].value = Math.floor(diff / 3600 / 24);
    // convert into hours
    inputs[2].value = Math.floor((diff / 3600) % 24);
    // convert into minutes
    inputs[3].value = Math.floor((diff / 60) % 60);
    // convert into seconds
    inputs[4].value = Math.floor((diff) % 60);

};

// initial call
clock();

/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 60 min = 3600 sec 
 */

setInterval(()=>{
    clock();
},1000);

});
