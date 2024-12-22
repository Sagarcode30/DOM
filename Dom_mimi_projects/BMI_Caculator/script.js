const weightinput=document.querySelector('#weight')
const heightinput=document.querySelector('#height')
const calculate=document.querySelector('.calculate')
const result=document.querySelector('.result') 
const reset=document.querySelector('.reset') 


calculate.addEventListener('click',()=>{ 
let weight=parseInt(weightinput.value);
let height=parseInt(heightinput.value);
const bmi=weight/(height/100*height/100)
result.innerHTML=`Your BMI is ${bmi.toFixed(2)}`

if(weight===''||height===''||isNaN(weight)||isNaN(height)){
    result.innerHTML='Please Enter valid Height and Weight'
}
})
reset.addEventListener('click',()=>{
weightinput.value=''
heightinput.value=
result.innerHTML=''
})




 

