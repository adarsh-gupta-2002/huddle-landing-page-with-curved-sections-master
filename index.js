


const form = document.querySelector('.form')
const email = document.getElementById('email')
const btn = document.getElementById('btn')

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
     
    return (false)
}


btn.addEventListener('click' , (e) => {
    e.preventDefault()
    if(ValidateEmail(email.value)){
        email.value = ''
    }else{
        form.classList.add('show-error')
        setTimeout(() =>{
            form.classList.remove('show-error')
            email.value = ''
        }, 3000)

    }
})