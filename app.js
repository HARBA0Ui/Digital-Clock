
const hours = document.querySelector('.h')
const minutes = document.querySelector('.m')
const seconds = document.querySelector('.s')
var dn = document.querySelector('.d-n')

setInterval(() => {
    let d = new Date()
    let hr = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()

    
    
    if(hr<12){
        hr = "0" + hr
    }
    if(m<10){
        m = "0" + hr
    }
    if(s<10){
        s = "0" + s
    }
    if(hours.textContent > 12){
        dn.textContent = "PM"
    }else{
        dn.textContent = "AM"
    }


    hours.textContent = hr
    minutes.textContent = m
    seconds.textContent = s
}, );