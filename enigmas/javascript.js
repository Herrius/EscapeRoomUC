const luz= document.getElementById("click-1")
const luz_content=document.getElementById("modal-1")
const textbox=document.getElementById("contra")
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
    textbox.value=""    
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