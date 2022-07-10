let name = document.querySelector('#name')
let email = document.querySelector('#email') 
let phone = document.querySelector('#phone') 
let date = document.querySelector('#date') 
let time = document.querySelector('#appt') 

let btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (name.value == "" && email.value == "" && phone.value == "" && date.value == "" && time.value == '')
    {
        alert('Please enter value to every field')
    }else {
    localStorage.setItem('Name:', name.value )
    localStorage.setItem('Email:', email.value )
    localStorage.setItem('Phone:', phone.value)
    localStorage.setItem('Date:',  date.value)
    localStorage.setItem('Time:',  time.value)
    }
})