let tableau = document.getElementsByClassName("tab");
let tableau2 = Array.from(tableau);
let tabDiv = document.getElementsByClassName("content");
let tabDiv2 = Array.from(tabDiv);

tableau2.forEach(element => {
    element.addEventListener("click", function(){
        tableau2.forEach(tab =>{
            tab.classList.remove("tab_active");
        });
        tabDiv2.forEach(tab => {
            tab.classList.remove("active");
        });
        this.classList.add("tab_active");
        let active;
        if(this.classList.contains("tab_presentation")){
            active = document.querySelector(".presentation");
        }
        else if(this.classList.contains("tab_passion")){
            active = document.querySelector(".passion");
        }
        else{
            active = document.querySelector(".projet");
        }
        active.classList.add("active");
    });
});