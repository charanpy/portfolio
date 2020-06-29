var tl = gsap.timeline();
tl.from("header",{duration:1,height:"0vh !important",width:"0% !important"})
.from("#vid",{duration:1,height:"0vh !important",width:"0% !important"})
.from("nav",{duration:1,transform:"translateY(-1000px)"})
.from(".ac",{duration:1,transform:"translateX(-1000px)"})
.from(".web",{duration:1,transform:"translateX(1000px)"})
.from(".button",{duration:1,transform:"translateY(1000px)"})

//"#vid",{duration:1,height:"0vh",width:"0%",backfaceVisibility: "hidden" ,backgroundPosition:"topCenter",backgroundSize:"cover",objectFit:"cover"}

document.querySelector(".button-pro button").addEventListener("click",function(){
    document.querySelector(".card-container").classList.toggle("visible");
    document.querySelector(".para").classList.toggle("visible2");
    document.querySelector(".button-pro i").classList.toggle("rotate");
})



const year=new Date()
const CurrentYear=year.getFullYear();

const spanElement=document.getElementById("year");
spanElement.innerHTML=CurrentYear;

document.querySelector(".menu").addEventListener("click",()=>{
    if(document.querySelector(".pop").classList.contains("dis")){
        document.querySelector(".pop").classList.remove("dis")
        document.querySelector(".pop").classList.add("disappear");
    }
    document.querySelector(".pop").classList.add("disappear");
})

document.querySelector(".topo").addEventListener("click",()=>{
    document.querySelector(".pop").classList.add("dis");
})

const li=document.querySelectorAll(".pop ul li");
li.forEach(function(item){
    item.addEventListener("click",()=>{
        document.querySelector(".pop").classList.add("dis");
    })
})

//preloader
const pre=document.querySelector(".preloader");

window.addEventListener('load',function(){
    pre.classList.add("hide-pre");
})
