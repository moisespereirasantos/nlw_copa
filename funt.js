function CriarJogo(play1, hora, play2) {
    return `
    <li>
    <img src="arq.extra/${play1}.svg" alt="">
    <strong>${hora}</strong>
    <img src="arq.extra/${play2}.svg" alt="">
    </li>
    `


}

let deleyy = -0.4;
function CriarHor (date, day, game) {
    deleyy = deleyy + 0.4;
    return `
    <div class="tabela" style="animation-delay: ${deleyy}s" >
     <h2>${date} <span>${day}</span>  </h2>  
    
    <ul>
    ${game}
   
    </ul>

    
    `
}

document.querySelector(".home" ).innerHTML = `



 <div class="tabela">
     <h2>24/11 <span>QUINTA</span>  </h2>

     <ul>
         <li>
             <img src="arq.extra/logo01.svg" alt="">
             <strong>07:00</strong>
             <img src="arq.extra/logo04.svg" alt="">
         </li>
     </ul>

     <ul>
         <li class="a">
             <img src="arq.extra/logo02.svg" alt="">
             <strong>14:00</strong>
             <img src="arq.extra/logo05.svg" alt="">
         </li>
     </ul>

     <ul>
         <li>
             <img src="arq.extra/logo03.svg" alt="">
             <strong>19:00</strong>
             <img src="arq.extra/logo06.svg" alt="">
         </li>
     </ul>
 </div>

 
    ${CriarHor("11/12", "QUINTA",
     CriarJogo(
        "logo01", 
        "18:00", 
        "logo02"))} <br> 
    ${CriarHor("07/06", "TENÇA", 
    CriarJogo(
        "logo01", 
        "20:00", 
        "logo02") ) } 
         <br> 
    ${CriarHor("10/04", "DOMINGO", 
    CriarJogo(
        "logo01", 
        "13:00", 
        "logo02"))} <br> 
 
     
    


   

</div>

`