const color = document.getElementById('color')
const btn = document.getElementById('btn')
const wrap = document.getElementById('wrap')
let hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function(){
     let bgColor = '#'
 for ( let i=1;i<=6;i++){
     bgColor += randHexValue()// bgcolor=bgcolor+randhexvalue
 }
   wrap.style.backgroundColor = bgColor
   color.innerHTML = bgColor
})


function randHexValue(){
    let randomIndex = Math.floor(Math.random()*16)
    return hex[randomIndex]
}


