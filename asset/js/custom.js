
function digitalClock() {

  let datefunction = new Date()
  let day = datefunction.getDay()
  let hours = datefunction.getHours()
  let minits = datefunction.getMinutes()
  let second = datefunction.getSeconds()
  let timeFormat = 'AM'
  let tarikh = datefunction.getDate()
  let month = datefunction.getMonth()
  let year = datefunction.getFullYear()


  timeFormat = hours >= 12 ? 'PM' : 'AM'
  hours = hours == 0 ? 12 : hours
  hours = hours > 12 ? hours - 12 : hours
  hours = hours < 10 ? '0' + hours : hours
  minits = minits < 10 ? '0' + minits : minits
  second = second < 10 ? '0' + second : second
  tarikh  = tarikh < 10 ? '0' + tarikh : tarikh
  month = month < 10 ? '0' + month : month


  document.querySelector('.hours').innerHTML= hours
  document.querySelector('.minit').innerHTML= minits
  document.querySelector('.secend').innerHTML= second
  document.querySelector('.fotmat').innerHTML = timeFormat
  
  let todaysDay = document.querySelector(`.weekdays :nth-child(${day + 1})`)
  todaysDay.classList.add('active')

  document.querySelector('.tarikh').innerHTML = tarikh
  document.querySelector('.month').innerHTML = month
  document.querySelector('.year').innerHTML = year
}
setInterval(digitalClock, 1000)