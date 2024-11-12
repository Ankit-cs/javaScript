const parent= document.querySelector('.parent')
   console.log(parent);
   for(let i=0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML);
    
    
   }
   parent.children[1].style.color="orange"
   console.log(parent.firstElementChild);
   console.log(parent.lasttElementChild);
   const day=document.querySelector('.day')
   console.log(day.parentElement);
   console.log(day.nextElementSibling);

   console.log("NODES:",parent.childNodes);// it can print form all the above tree nodes each and every 
   