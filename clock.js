let second = document.querySelector(".secHand");
let minute = document.querySelector(".minHand");
let hour = document.querySelector(".hrHand");



function getTime(){
    let degreeSec, degreeMin, degreeHr;

    let todaySec = new Date().getSeconds();
    let todayHr = new Date().getHours();
    let todayMin = new Date().getMinutes();
    console.log(todayHr+" "+todayMin+" "+todaySec);

    
    // console.log(today);
    degreeSec = (todaySec * 6)+90; 
    degreeMin = (todayMin * 6)+90;
    degreeHr = (todayHr * 30)+90;
    second.style.transform = `rotate(${degreeSec}deg)`;
    minute.style.transform = `rotate(${degreeMin}deg)`;
    hour.style.transform = `rotate(${degreeHr}deg)`;
    // console.log(degree);
}

setInterval(getTime, 1000);






// second.addEventListener()
// console.log(second);