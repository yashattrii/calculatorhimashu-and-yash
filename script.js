document.querySelectorAll(".a").forEach(button =>{ button.addEventListener('click',(e)=>{
    let value = e.target.innerText;
    
    console.log("Button clicked",value);
})
})