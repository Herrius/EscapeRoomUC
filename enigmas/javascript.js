const luz= document.getElementById("click-1")
const luz_content=document.getElementById("modal-1")
let estado=false
luz.addEventListener("click",function(){
    luz_content.style.display="block"
    estado=true
});

luz_content.addEventListener('mouseleave',e=>{
    luz_content.style.display="none"
})