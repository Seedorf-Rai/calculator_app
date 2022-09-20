const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users')
const msg = document.querySelector('.msg');
myForm.addEventListener('submit',onSubmit);
function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value == '' || emailInput.value == ''){
      msg.classList.add('error');
      msg.innerHTML = "Please fill all the fields"
      setTimeout(()=>msg.remove(),3000)
    }
    else{
        console.log('success');
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li)
        nameInput.value = '';
        emailInput.value = '';

    }
}