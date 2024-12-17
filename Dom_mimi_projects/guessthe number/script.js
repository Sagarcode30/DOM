const guessinput=document.querySelector('#guess-input')
const submitbtn=document.querySelector('#submitbtn')
const strtbtn=document.querySelector('#strtbtn')
const result=document.querySelector('#result')
const guessnumber=document.querySelector('#guessnumber')
const form= document.querySelector('form')


function a(){
    const guessarray=[]
let random=Math.round(Math.random()*100)
form.addEventListener('submit',(e)=>{
    e.preventDefault()   
  if(guessinput.value > random)
    {
    result.innerHTML="Too High!!"
  }

  else if (guessinput.value < random)
    {
        result.innerHTML="Too Low!!"
      }
      else{
        result.innerHTML="You Did it Congrats!!"
        strtbtn.disabled=false
        submitbtn.disabled=true
      }

      guessarray.push(guessinput.value)
      guessnumber.innerHTML='Your Guess : '+ guessarray.join(',');    
      guessinput.value='';
      
})

strtbtn.addEventListener('click',()=>{
    strtbtn.disabled=true
    submitbtn.disabled=false
    guessnumber.innerHTML=''
    result.innerHTML=''
    random=Math.round(Math.random()*100)
})

}
a()
