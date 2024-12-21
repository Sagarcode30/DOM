

 
  const guessinput=document.querySelector('#guess-input')
const submitbtn=document.querySelector('#submitbtn')
const strtbtn=document.querySelector('#strtbtn')
const result=document.querySelector('#result')
const guessnumber=document.querySelector('#guessnumber')
const form= document.querySelector('form');

function strtgame(){
  strtbtn.disabled=true
  submitbtn.disabled=false
  guessnumber.innerHTML=''
  result.innerHTML='' 
 guessarray=[]
  random=Math.round(Math.random()*100)
}


let guessarray=[]
let random ;
form.addEventListener('submit',(e)=>{
    e.preventDefault()   ;
  

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
      form.reset();
      

      
})
strtbtn.addEventListener('click',strtgame)
strtgame();

