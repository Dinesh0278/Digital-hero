// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const subject = form.querySelectorAll('input[type="text"]')[1];
    const message = form.querySelector("textarea");

    if(name.value.trim()===""){
        alert("Please enter your name.");
        return;
    }

    if(email.value.trim()===""){
        alert("Please enter your email.");
        return;
    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){
        alert("Enter a valid email.");
        return;
    }

    if(subject.value.trim()===""){
        alert("Please enter a subject.");
        return;
    }

    if(message.value.trim().length<10){
        alert("Message should contain at least 10 characters.");
        return;
    }

    alert("🎉 Thank you! Your message has been submitted successfully.");

    form.reset();

});

// Sticky Navbar Shadow
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>30){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 2px 12px rgba(0,0,0,.08)";

}

});

// Service Card Animation
const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="all .8s ease";

observer.observe(card);

});

// Pricing Card Hover
document.querySelectorAll(".price-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

if(card.classList.contains("popular")){

card.style.transform="scale(1.05)";

}else{

card.style.transform="translateY(0)";

}

});

});

// Back to Top Button
const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#2563eb";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});