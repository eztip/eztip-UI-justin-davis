class Carousel {
    constructor(carouselElement){
        this.carouselElement = carouselElement;

        this.rgtBtn = document.querySelector('.right-button');
        this.lftBtn = document.querySelector('.left-button');
        this.imgs = document.querySelectorAll('.user-image');

        this.index = 0;
        this.imgs[this.index].style.display="block";

        this.right.addEventListener("click", () => this.rightClick());
        this.left.addEventListener("click", () => this.leftClick());
    }

    rightClick() {
        console.log('Hello');
        this.imgs[this.index].style.display = 'none';
		this.index === this.imgs.length - 1 ? this.index = 0 : this.index++;
        this.imgs[this.index].style.display = 'block';
    }

    leftClick() {
        this.imgs[this.index].style.display = 'none';
		this.index === 0 ? this.index = this.imgs.length - 1 : this.index--;
        this.imgs[this.index].style.display = 'block';
    }
}

class CarouselImg {
    constructor(imgElement) {
        this.imgElement = imgElement;
    } 
    selectImg() {
        this.imgElement.style.display = "block";
    }
}

let carousels = document.querySelectorAll('.testimonials-container').forEach( caro => new Carousel(caro));