const clickhere=document.getElementById('clickhere');
const clickhere1=document.getElementById('clickhere1');
const clickhere2=document.getElementById('clickhere2');
const clickhere3=document.getElementById('clickhere3');

const python=document.getElementById('python')
const java=document.getElementById('java')
const React=document.getElementById('React')
const NODE=document.getElementById('NODE')


let pythoncount=0
let javacount=0
let Reactcount=0
let nodecount=0

clickhere.addEventListener('click',()=>{
    pythoncount++;
   
    python.innerHTML=pythoncount
})


clickhere1.addEventListener('click',()=>{
    javacount++;
   
    java.innerHTML=javacount
})
clickhere2.addEventListener('click',()=>{
    Reactcount++;
    
    React.innerHTML=Reactcount
})
clickhere3.addEventListener('click',()=>{
    nodecount++;
   
    NODE.innerHTML=nodecount
})





