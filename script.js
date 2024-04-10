const monthEl = document.querySelector(".month_name")
const dayNum = document.querySelector(".day_number")
const dayName = document.querySelector(".day_name")
const year = document.querySelector(".year")
const hour = document.querySelector(".hour")
const min = document.querySelector(".minuet")
const sec = document.querySelector(".second")

function updateDatetime(){
    const date = new Date()
    const month = date.getMonth()
    monthEl.innerText = date.toLocaleString("en",{
        month:"long"
    })
    dayName.innerText = date.toLocaleString("en",{
        weekday:"long"
    })
    dayNum.innerText = date.getDate()
    year.innerText = date.getFullYear()
    hour.innerText =date.getHours()
    min.innerText =date.getMinutes()
    sec.innerText =date.getSeconds()
    setTimeout(updateDatetime,1000)
}
updateDatetime()

