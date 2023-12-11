function fun(e){

let search=document.getElementById('t1').value
let show=document.getElementsByClassName("weather")[0]
let name1=document.getElementById('title')
let temp=document.getElementById('temp')
let hum=document.getElementById('hum')
let press=document.getElementById('press')

let t=document.getElementById('mayur')
let icon=document.getElementById('img1')
let clear=document.getElementById('clr')


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=eedd52cc943dd9174f2c65178d154bdd`)
.then((res)=>res.json()).then((data)=>{
    const icon1 = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    fetch(icon1) .then((res) => {
        // Handle the image directly, not as JSON
        return res.blob();
    })
    .then((blob) => {
        // Create an object URL from the blob
        const objectURL = URL.createObjectURL(blob);

        // Use the object URL as the source for an img element
        const iconImage = icon;
        iconImage.src = objectURL;

       
        // document.getElementById('img').appendChild(iconImage);
    });
    
        
    console.log(data.weather[0].icon);
    console.log(data.main.pressure);
    name1.innerHTML=data.name
    temp.innerText=data.main.temp_max
    hum.innerHTML=data.main.temp_max
    // press.innerHTML=data.main.pressure
    t.innerText=data.main.temp
    clear.innerText=data.weather[0].main
   
    

})
}