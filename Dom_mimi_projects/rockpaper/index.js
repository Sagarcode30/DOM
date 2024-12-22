const rockbtn=document.querySelector('.rock-btn')
const paperbtn=document.querySelector('.paper-btn')
const scissorsbtn=document.querySelector('.scissors-btn')
const userhand= document.querySelector('.user.hand-icon')
const comphand= document.querySelector('.computer.hand-icon')
const result=document.querySelector('.result')
const rockicon='✊'
const papericon=' 🖐️ '
const scissoricon=' ✌️'
const userscore=document.querySelector('.user-score')
const compscore=document.querySelector('.computer-score')
const reset= document.querySelector('#reset')




const iconlist=[rockicon,papericon,scissoricon]



rockbtn.addEventListener('click', ()=>{
    userhand.innerHTML='🤜'
    comphand.innerHTML='🤛'
    userhand.classList.add('shakeUserHands')
    comphand.classList.add('shakeComputerHands')
    

setTimeout(()=>{
    
    userhand.classList.remove('shakeUserHands')
    comphand.classList.remove('shakeComputerHands')
    userhand.innerHTML=rockicon
    const computerchoice=Math.floor(Math.random()*3);
    comphand.innerHTML=iconlist[computerchoice]
    if(comphand.innerHTML===rockicon){
        result.innerHTML='Draw!!'
    }else if(comphand.innerHTML===papericon){
        result.innerHTML='Computer Win!!'
        compscore.innerHTML=parseInt(compscore.innerHTML)+1
    }else{
        result.innerHTML="You Win"
        userscore.innerHTML=parseInt(userscore.innerHTML)+1
    }
},1000
)

})

paperbtn.addEventListener('click', ()=>{
     userhand.innerHTML='🤜'
    comphand.innerHTML='🤛'
    userhand.classList.add('shakeUserHands')
    comphand.classList.add('shakeComputerHands')

setTimeout(()=>{
    userhand.classList.remove('shakeUserHands')
    comphand.classList.remove('shakeComputerHands')
    userhand.innerHTML=papericon
    const computerchoice=Math.floor(Math.random()*3);
    comphand.innerHTML=iconlist[computerchoice]
    if(comphand.innerHTML===papericon){
        result.innerHTML='Draw!!'
    }else if(comphand.innerHTML===scissoricon){
        result.innerHTML='Computer Win!!'
        compscore.innerHTML=parseInt(compscore.innerHTML)+1
    }else{
        result.innerHTML="You win!!"
        userscore.innerHTML=parseInt(userscore.innerHTML)+1
    }

},1000

)
})

scissorsbtn.addEventListener('click', ()=>{
     userhand.innerHTML='🤜'
    comphand.innerHTML='🤛'
    userhand.classList.add('shakeUserHands')
    comphand.classList.add('shakeComputerHands')

setTimeout(()=>{
    userhand.classList.remove('shakeUserHands')
    comphand.classList.remove('shakeComputerHands')
    userhand.innerHTML=scissoricon
    const computerchoice=Math.floor(Math.random()*3);
    comphand.innerHTML=iconlist[computerchoice]
    if(comphand.innerHTML===scissoricon){
        result.innerHTML='Draw!!'
    }else if(comphand.innerHTML===papericon){
        result.innerHTML='You Win!!'
        userscore.innerHTML=parseInt(userscore.innerHTML)+1
    }else{
        result.innerHTML="Computer Win!!"
        compscore.innerHTML=parseInt(compscore.innerHTML)+1
    }

},1000
)
})
reset.addEventListener('click',()=>{
    result.innerHTML=''
    userscore.innerHTML=0
    compscore.innerHTML=0
})