
for(let i=1;i<4;i++){
const container= document.querySelector('#list')
let item= document.createElement('li');
item.classList.add('container');
item.innerHTML=`item ${i}`;
container.append(item)


}
let list2=document.querySelector("#list > li:nth-child(2)")
 list2.remove()

// const image=document.createElement('img')
// image.src=`https://imgs.search.brave.com/FtJ0f51iAzqo8bsJVqsJNiiH-LgnTHdYXOomJwCmL9w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w`
// image.setAttribute('alt', 'Sample Image')
// container.append(image)