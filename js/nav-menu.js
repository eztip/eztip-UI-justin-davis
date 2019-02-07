class Dropdown {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector(".drop-icon");
        this.content = this.element.querySelector(".drop-menu");
        this.button.addEventListener('click', e => this.toggleMenu());
        window.addEventListener("resize", () => this.resize(), true);
    }
    toggleMenu() {
        this.content.classList.toggle("drop-toggle");
    }
    resize() {

        this.content.classList.remove('drop-toggle');
    }
}

let dropdowns = document.querySelectorAll(".drop-component").forEach(e => new Dropdown(e));