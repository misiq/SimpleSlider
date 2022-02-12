const ACTIVE_CLASS = 'active';

class Slider {
    constructor(){
        this.index = 0;
        this.slides = this.getImages();
        this.showControls = true;
    }

    getImages() {
       return document.querySelectorAll('#example img')
    }

    siblings(element) {
        const slides = [...this.slides];
        return slides.filter(node => node !== element);
    }

    setActive(element){
        const siblings = this.siblings(element);
        siblings.map(element => element.classList.remove(ACTIVE_CLASS))
        element.classList.toggle(ACTIVE_CLASS);
    }

    nextSlide() {
        this.index = this.index < this.slides.length - 1 ? this.index + 1: 0;
        this.setActive(this.slides[this.index])
    }

    prevSlide(){
        this.index = this.index > 0 ? this.index -1 : this.slides.length -1;
        this.setActive(this.slides[this.index])
    }

    controls() {
        const nextButton = document.querySelector('#next');
        const prevButton = document.querySelector('#prev');

        if(!this.showControls){
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        }

        nextButton.addEventListener('click', this.nextSlide.bind(this))
        prevButton.addEventListener('click', this.prevSlide.bind(this))
    }

    start(){
        if(!this.slides) {
            console.error('There is no slides')
            return;
        };
        this.controls();
        this.setActive(this.slides[this.index])
    }
}



//Execution
const CustomSlider = new Slider();
CustomSlider.start()