var tl = gsap.timeline();
tl.from("#vid",{duration:1,height:"0%",width:"0%",backfaceVisibility: "hidden" ,margin:"4%",backgroundPosition:"topCenter",backgroundSize:"cover",objectFit:"cover"})
.from("header",{duration:1.5,width:"0%",height:"0%"})
.from("nav",{duration:1,transform:"translateY(-1000px)"})
.from(".ac",{duration:1,transform:"translateX(-1000px)"})
.from(".web",{duration:1,transform:"translateX(1000px)"})
.from(".button",{duration:1,transform:"translateY(1000px)"})



document.querySelector(".button-pro button").addEventListener("click",function(){
    document.querySelector(".card-container").classList.toggle("visible");
    document.querySelector(".para").classList.toggle("visible2");
    document.querySelector(".button-pro i").classList.toggle("rotate");
})



const year=new Date()
const CurrentYear=year.getFullYear();

const spanElement=document.getElementById("year");
spanElement.innerHTML=CurrentYear;