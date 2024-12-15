const showtoast=document.querySelector('#show-toast')
const verticalside=document.querySelector('#vertical-side')
const horizontalside=document.querySelector('#horizontal-side')
const meassgeside=document.querySelector('#mesage-type')
const toastcontainer=document.querySelector('.toast-container')

showtoast.addEventListener('click',()=>{

    const newtoast=document.createElement('p')
    newtoast.innerHTML='this is topup'

    console.log(newtoasts)
    toastcontainer.append(toasts).classList.add('toast')
    if(horizontalside.value==='right')
        {
            toastcontainer.classList.add('right')
    }
    else {
        toastcontainer.classList.remove('right')
    }
    if(verticalside.value==='bottom')
        {
            toastcontainer.classList.add('bottom')
    }
    else {
        toastcontainer.classList.remove('bottom')
    }


    


    // console.log(verticalside.value);
    // console.log(horizontalside.value);

})
