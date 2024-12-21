const billinput=document.querySelector('#bill-input')
const custominput=document.querySelector("#tip-input")
const splitinput=document.querySelector("#split-input")
const tip=document.querySelector(".tip")
const total=document.querySelector(".total")
const numberperson=document.querySelector(".number-person")
const reset =document.querySelector('.reset')
const buttoncontainer=document.querySelector('.button-container')
const generatebtn=document.querySelector('.generate-btn')

let tipPercentage=0


generatebtn.addEventListener('click',()=>{

  

   const billamount=parseInt(billinput.value);
   const numberofperson=parseInt(splitinput.value);
  


   const tipamount=billamount* (tipPercentage/100)
   const tippercentage=billamount+tipamount
   const eachpersonamount= tippercentage/numberofperson


   numberperson.innerHTML=`₹ ${eachpersonamount.toFixed(2)}`
   total.innerHTML=`₹ ${tippercentage.toFixed(2)}`
   tip.innerHTML=`₹ ${tipamount.toFixed(2)}`

   reset.disabled=false
   
})
buttoncontainer.addEventListener('click',(e)=>{
  tipPercentage=(parseInt(e.target.innerHTML));


})
custominput.addEventListener('input',()=>{
    tipPercentage=(parseInt(custominput.value
    ));
})


reset.addEventListener('click',()=>{
tipPercentage=0
   numberperson.innerHTML=''
   total.innerHTML=''
   tip.innerHTML=''
   custominput.value=''
   billinput.value=''
   splitinput.value=''
   reset.disabled=true
   

})


