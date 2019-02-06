class Dropdown {
    constructor(dropElement){
        this.dropElement = dropElement;
      
        this.button = document.getElementsByClassName("hide");

        this.button.addEventListener('click', () => this.toggleContent());
    }
    toggleContent() {
        this.content.classList.toggle("drop-menu");
    }
}
  

let dropdowns = document.getElementsByClassName('.drop-menu').forEach( el => new Dropdown(el));