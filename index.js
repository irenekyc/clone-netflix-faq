

document.getElementById('faq-container').addEventListener('click', e=>{
   if(e.target.parentNode.id.includes("faq-")){
       e.target.parentNode.classList.toggle("faq-close")
       e.target.parentNode.classList.toggle("faq-open")
   } else if (e.target.parentNode.parentNode.id.includes("faq-")){
        e.target.parentNode.parentNode.classList.toggle("faq-close")
        e.target.parentNode.parentNode.classList.toggle("faq-open")
   }
})