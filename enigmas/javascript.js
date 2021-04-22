const luz= document.getElementById("click-1");
const luz_content=document.getElementById("modal-1");
// enigma 1
const contra=document.getElementById("contra");
const pasar=document.getElementById("pasar");
// enigma 2
const contra2=document.getElementById("contra2");
const pasar2=document.getElementById("pasar2");
// enigma 3
const contra3=document.getElementById("contra3");
const pasar3=document.getElementById("pasar3");
// enigma 4
const contra4=document.getElementById("contra4");
const pasar4=document.getElementById("pasar4");
// enigma 5
const contra5=document.getElementById("contra5");
const pasar5=document.getElementById("pasar5");
// modal de fase
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";
const closeEls = document.querySelectorAll("[data-close]");


luz.addEventListener("click",function(){
    luz_content.style.display="block"
});

luz_content.addEventListener('mouseleave',e=>{
    luz_content.style.display="none"
})

 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);  
  });
}
for (const el of closeEls) {
    el.addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
   
    });
  }
  document.addEventListener("click", e => {
    if (e.target == document.querySelector(".next-page.is-visible")) {
      document.querySelector(".next-page.is-visible").classList.remove(isVisible);

    }
  });
if(pasar){
  pasar.addEventListener("click",e=>{
    if(contra.value=="123456"){
      window.location = "http://127.0.0.1:5500/enigmas/enigma2.html";
    }
  })
}
if(pasar2){
  pasar2.addEventListener("click",e=>{
    if(contra2.value=="123456"){
      window.location = "http://127.0.0.1:5500/enigmas/enigma3.html";
    }
  })
}
if(pasar3){
  pasar3.addEventListener("click",e=>{
    if(contra3.value=="123456"){
      window.location = "http://127.0.0.1:5500/enigmas/enigma4.html";
    }
  })
}
if(pasar4){
  pasar4.addEventListener("click",e=>{
    if(contra4.value=="123456"){
      window.location = "http://127.0.0.1:5500/enigmas/enigma5.html";
    }
  })
}
if(pasar5){
  pasar5.addEventListener("click",e=>{
    if(contra5.value=="123456"){
      window.location = "http://127.0.0.1:5500/enigmas/final.html";
    }
  })
}