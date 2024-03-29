// let name = document.querySelector('#name')
// let email = document.querySelector('#email') 
// let phone = document.querySelector('#phone') 
// let date = document.querySelector('#date') 
// let time = document.querySelector('#appt') 

// let btn = document.querySelector('.btn')
function saveToLocalStorage(event)
{
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const phoneNumber = event.target.phone.value
    const date = event.target.date.value
    const time = event.target.appt.value
    const obj = {name, email, phoneNumber, date, time}
    axios.post('https://crudcrud.com/api/b648dec734034a67b17c28ee9fd65674/appointmentData', obj)
    .then((res)=>(
        console.log(res),
        showNewUserOnScreen(res.data)
        ))
    //localStorage.setItem(obj.email, JSON.stringify(obj))
}



window.addEventListener('DOMContentLoaded', () =>
{
    axios.get('https://crudcrud.com/api/b648dec734034a67b17c28ee9fd65674/appointmentData')
    .then(res =>
        {
            // const localStorageObj = res.data
            // //console.log(localStorageObj)
            // const localStorageKeys = Object.keys(localStorageObj)
            //console.log(localStorageKeys)
            for(var i=0; i<res.data.length; i++){
            // const key = localStorageKeys[i]
            // const userDetailsString = localStorageObj[key];
            // const userDetailsObj = JSON.parse(userDetailsString);
            showNewUserOnScreen(res.data[i]);
            //console.log(userDetailsObj.email)
        }
        })
    .catch(err => console.log(err))
    // const localStorageObj = localStorage
    // const localStorageKeys = Object.keys(localStorageObj)

    // for(var i=0; i<localStorageKeys.length; i++)
    // {
    //     const key = localStorageKeys[i]
    //     const userDetailsString = localStorageObj[key];
    //     const userDetailsObj = JSON.parse(userDetailsString);
    //     showNewUserOnScreen(userDetailsObj);
    //     console.log(userDetailsObj.email)
    //}
})
// {
    

//         // stringifiedDetailsOfPeople = localStorage.getItem(key);
        
//         // detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
//         // let data = document.createElement('li')
//        // data.textContent = detailsOfPeople
//         // for(let x in detailsOfPeople)
//         // {
//         //     const obj = detailsOfPeople[x]
//         //     showNewUserOnScreen(obj)
//         // }
//         // data.textContent = temp
        
//         // data.style.background = "#f6f6f6f"
        
//         // document.querySelector('.container').appendChild(document.getElementById('userList').appendChild(data)) 
// }

function showNewUserOnScreen(user) {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value ='';
    document.getElementById('date').value = '';
    document.getElementById('appt').value = '';
    
    
    

            if(user._id !== undefined )
            {
                console.log(user._id)
                removeUserFromScreen(user._id)
            }
    const parentNode = document.getElementById('userList');
                const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                                        <button style="margin: 10px 2px; background: green" onclick=editUser('${user.email}','${user.name}','${user.phoneNumber}','${user.time}','${user.date}','${user._id}')>Edit User</button>
                                        <button style="margin: 10px 2px" onclick=deleteUser('${user._id}')>Delete User</button>
                                        </li>`
                parentNode.innerHTML = parentNode.innerHTML + childHTML;
                document.querySelector('.container').appendChild(parentNode)

                
    // let data = document.createElement('li')
    // data.className = "details"
    // let obj_details = JSON.parse(localStorage.getItem(obj.email))
    // //console.log(obj_details)
    // //console.log(obj_details.email)
    // if(obj.email !== null)
    // {
    //     removeUserFromScreen(obj_details.email)
    // }
    // let temp = " "
    // for(let [key, value] of Object.entries(obj_details))
    //     {
    //     temp += obj_details[value];
    //     data.id = obj_details[key]
    //     }
    //     //console.log(temp)
    //     data.textContent = temp
    //     //data.id = obj_details.email
    //     document.querySelector('.container').appendChild(document.getElementById('userList').appendChild(data))
}
// edit user

axios.put(`https://crudcrud.com/api/b648dec734034a67b17c28ee9fd65674/appointmentData/${userId}`)
.then(res =>
    {
        editUser(email, name, phone, time, date, userId)
    })
    .catch(err => console.log(err))

function editUser(email, name, phone, time, date, userId)
{
    
    document.getElementById('email').value = email;
    document.getElementById('name').value = name;
    document.getElementById('phone').value = phone;
    document.getElementById('date').value = date; 
    document.getElementById('appt').value = time;
    console.log(userId)
    deleteUser(userId)
}


// delete user
function deleteUser(obj) {
    axios.delete(`https://crudcrud.com/api/b648dec734034a67b17c28ee9fd65674/appointmentData/${obj}`)
    .then(res => removeUserFromScreen(res))
    .catch(err => console.log(err))
    //localStorage.removeItem(obj)
    //console.log(obj)
    //removeUserFromScreen(obj)
}

function removeUserFromScreen(obj)
{
    const parentNode = document.getElementById('userList')
    const childNodeToBeDeleted = document.getElementById(obj)
    console.log(childNodeToBeDeleted)
    if(childNodeToBeDeleted)
    {
        parentNode.removeChild(childNodeToBeDeleted)
    }  
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
