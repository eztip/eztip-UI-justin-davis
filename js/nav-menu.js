class DropLinks {
    constructor(dropLink){
        this.dropLink = dropLink;
      
        this.button = document.getElementsByClassName("drop-menu");

        this.button.addEventListener('click', () => this.toggleContent());
    }
    toggleContent() {
        this.dropLink.classList.toggle("drop-links");
    }
}
  

let dropLinks = document.getElementsByClassName('.drop-links').forEach( el => new DropLinks(el));