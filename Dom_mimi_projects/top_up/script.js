const showtoast=document.querySelector('#show-toast')
const verticalside=document.querySelector('#vertical-side')
const horizontalside=document.querySelector('#horizontal-side')
const meassgeside=document.querySelector('#mesage-type')
const toastcontainer=document.querySelector('.toast-container')
const messagetype=document.querySelector('#message-type')
const message=document.querySelector('#message')
const duratrion =document.querySelector('#duration')




showtoast.addEventListener('click',()=>{
    
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

const newtoast =document.createElement('div')
newtoast.classList.add('toast')
newtoast.classList.add(messagetype.value)
newtoast.innerHTML=`${message.value} `
toastcontainer.append(newtoast);

const closeIcon=document.createElement('span')
closeIcon.innerHTML=`X`    
closeIcon.classList.add('close')
newtoast.append(closeIcon)

function removetoast(){
    newtoast.classList.add('to_left')
    setTimeout(() => {
        newtoast.remove()
        
    }, 300);
}

closeIcon.addEventListener('click' ,()=>{   
removetoast()
})


setTimeout(() => {
    removetoast()
    
}, parseInt(duratrion.value)*1000);



})

   
   
  

   

