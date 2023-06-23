//your JS code here. If required.
let btn=document.getElementById("submit");
let va=document.getElementById("colorSelect");

btn.addEventListener("click",()=>{
 // console.log(va.children.length);
   if (va.hasChildNodes()) {
     for(let i=0;i<va.children.length;i++){
      if(va.children[i].innerHTML==va.value){
         va.removeChild(va.children[i]);
      }
     }
    }

})
