/*navbar */

let navbar = document.querySelector('.navbar');
menu.onclick=()=>{
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
}

/*car-booking validation*/

document.getElementById("car-booking form").addEventListener("submit",function(event){
    event.preventDefault();

    if(this.checkValidity()){
        alert("Your car is booked!");
    }
    this.reset();
})

