const span=document.querySelector('.value')
const increment=document.querySelector('#increment')
const decrement=document.querySelector('#decrement')
const reset=document.querySelector('#reset')
const data=document.querySelector('#data')

increment.addEventListener('click',()=>{
    span.textContent= parseInt(span.textContent) + parseInt(data.value);
})

decrement.addEventListener('click', () => {
    span.textContent = parseInt(span.textContent) - parseInt(data.value);
  });

  reset.addEventListener('click', () => {
    span.textContent = 0;
  });