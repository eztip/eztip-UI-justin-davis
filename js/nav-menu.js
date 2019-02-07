class DropLink {
    constructor(dropElement){
        this.dropElement = dropElement;
      
        this.button = document.getElementsByClassName("drop-menu");

        this.button.addEventListener('click', () => this.toggleMenu());
    }
    toggleMenu() {
        dropLinks.style.display = 'none';
    }
}
  

let dropLinks = document.getElementsByClassName('.drop-links').forEach( el => new DropLink(el));