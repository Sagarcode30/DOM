// setTimeout(function sayhi(){

//     console.log('ring')
// },9000)

// setTimeout(function sayhi(){
    
//     console.log('ring')
// },5000)

// setTimeout(function sayhi(){
    
//     console.log('ring')
// },1000)
let mvar=setInterval(time,7000)

function time(){

    const d=new Date();
console.log(`the time is ${d.toLocaleTimeString()}`);

}
clearInterval(mvar)


