// let name = document.querySelector('#name')
// let email = document.querySelector('#email') 
// let phone = document.querySelector('#phone') 
// let date = document.querySelector('#date') 
// let time = document.querySelector('#appt') 

// let btn = document.querySelector('.btn')
function saveToLocalStorage(event)
{
    event.preventDefault()
    const name = event.target.userName.value
    const email = event.target.emailId.value
    const phoneNumber = event.target.phoneNumber.value
    const date = event.target.userDate.value
    const time = event.target.userTime.value
    const obj = {name, email, phoneNumber, date, time}
    localStorage.setItem(obj.email, JSON.stringify(obj))


    let data = document.createElement('li')
    data.className = "details"
    let obj_details = JSON.parse(localStorage.getItem(obj.email))
    let temp = " "
    for(let x in obj_details)
        {
        temp +=obj_details[x];
        }
        data.textContent = temp

        document.querySelector('.container').appendChild(document.getElementById('userList').appendChild(data))
}
window.addEventListener('DOMContentLoaded', (event))
{
    Object.keys(localStorage).forEach((key) => {



        stringifiedDetailsOfPeople = localStorage.getItem(key);
        
        detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        let data = document.createElement('li')
       // data.textContent = detailsOfPeople
        let temp = " "
        for(let x in detailsOfPeople)
        {
        temp +=' ' + detailsOfPeople[x];
        }
        data.textContent = temp
        data.style.background = "#f6f6f6f"
        
        document.querySelector('.container').appendChild(document.getElementById('userList').appendChild(data))
        
        
        
        });
}

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     if (name.value == "" && email.value == "" && phone.value == "" && date.value == "" && time.value == '')
//     {
//         alert('Please enter value to every field')
//     }else {

//                /*storing single user Details in the local storage */
//     // localStorage.setItem('Name:', name.value )
//     // localStorage.setItem('Email:', email.value )
//     // localStorage.setItem('Phone:', phone.value)
//     // localStorage.setItem('Date:',  date.value)
//     // localStorage.setItem('Time:',  time.value)


//                /*storing user Details as an object in the local storage */
//     // create an object and enter the keys and its' values 
//     let obj = {
//         personName: name.value,
//         personEmail: email.value,
//         personPhone: phone.value,
//         personMeetDate: date.value,
//         personMeetTime: time.value 
//     }
//     // setting object to localStorage
//     localStorage.setItem(obj.email.value,JSON.stringify(obj))
//     }
// })

// details will pop up after refresh on the screen
// let data = document.createElement('p')
// data.className = "details"


// // create a getItem
// let obj_details = JSON.parse(localStorage.getItem('obj.email'))
// // add details to para
// let temp = " "
//  for(let x in obj_details)
//  {
//     temp += x +': ' +obj_details[x];
// }
// data.textContent = temp
// document.querySelector('.container').appendChild(data)
