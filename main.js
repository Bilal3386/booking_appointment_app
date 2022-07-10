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

               /*storing single user Details in the local storage */
    // localStorage.setItem('Name:', name.value )
    // localStorage.setItem('Email:', email.value )
    // localStorage.setItem('Phone:', phone.value)
    // localStorage.setItem('Date:',  date.value)
    // localStorage.setItem('Time:',  time.value)


               /*storing user Details as an object in the local storage */
    // create an object and enter the keys and its' values 
    let obj = {
        personName: name.value,
        personEmail: email.value,
        personPhone: phone.value,
        personMeetDate: date.value,
        personMeetTime: time.value 
    }
    // setting object to localStorage
    localStorage.setItem('obj',JSON.stringify(obj))
    }
})

// details will pop up after refresh on the screen
let data = document.createElement('p')
data.className = "details"


// create a getItem
let obj_details = JSON.parse(localStorage.getItem('obj'))
// add details to para
let temp = " "
 for(let x in obj_details)
 {
    temp += x +': ' +obj_details[x];
}
data.textContent = temp
document.querySelector('.container').appendChild(data)
