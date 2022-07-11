let submit=document.querySelector("button")

submit.addEventListener('click',()=>{
    let email=document.querySelector("input");
    let error=document.getElementById("error");
    let msgerror=document.getElementById("msgerror")
    var re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(re.test(email.value)===false){
       email.style.borderColor="var(--primary-soft-red)";
       error.style.display="block";
       msgerror.style.color="var(--primary-soft-red)"
       msgerror.innerText="Please provide a valid email";
   }else if(re.test(email.value)) {
     email.style.borderColor="var(--primary-desaturated-red)"
       email.style.boxShadow="0 0 10px var(--primary-desaturated-red)";
       error.style.display="none";
       msgerror.style.color="var(--primary-desaturated-red)"
       msgerror.innerText="Thank you !!"
   }
   
})
