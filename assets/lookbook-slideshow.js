
let Swiper = null; 

class LookbookSlideshow extends HTMLElement {
    constructor() {
        super(); 
        this.selectors = {
            slideshow: '[data-slideshow]', 
            slideshowWrapper: '[data-slideshow-wrapper]',
            slides: '[data-slideshow-slide]',
            navigation: '[data-slideshow-navigation]',
            dragCursor: '[data-drag-cursor]'
        }

        this.mediaQueries = {
            largeUp: window.matchMedia('(min-width: 930px)')
        }
        
        this.init(); 
    }
  
    init() {
        import('./swiper.module.js').then((pSwiper) => {
            console.log(pSwiper); 
                Swiper = pSwiper;
                this.mediaQueries.largeUp.addEventListener("change", this.startSlideshow.bind(this)); 
                this.startSlideshow(this.mediaQueries.largeUp); 
                this.initDragCursor();
            }); 
    } 


    initDragCursor() {  
        let dragCursor = this.querySelector(this.selectors.dragCursor);
        let activeArea = this.querySelector(this.selectors.slideshowWrapper);

        class getMouseCursor {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
        }

        let mousePos = new getMouseCursor(0,0); 

        activeArea.addEventListener('mousemove', (event) => {

            mousePos.x = event.clientX - 50; 
            mousePos.y = event.clientY - 50; 

            dragCursor.style.opacity = 1; 
            dragCursor.style.top = mousePos.y + "px"; 
            dragCursor.style.left = mousePos.x + "px"; 

        }, false); 

        activeArea.addEventListener('mouseleave', (event) => {
            dragCursor.style.opacity = 0; 
        }, false); 

    }
    
    startSlideshow(pEvent) {
        let slideshowProps = {}; 

        slideshowProps = {
            direction: 'horizontal', 
            preventInteractionOnTransition: true,
            slidesPerView: 1,
            spaceBetween: 40,
            breakpoints: {
                600: {
                    slidesPerView: 2,
                    spaceBetween: 60,
                    grabCursor: true
                },
                990: {
                    spaceBetween: 50,
                    slidesPerView: 3,
                    centeredSlides: true,
                    grabCursor: true
                }
            }
        }

        if(this.slideshow) {
            this.destroy('slideshow'); 
        }
        
        const slideshowElem = this.querySelector(this.selectors.slideshow); 
        const that = this; 
        slideshowElem.classList.add('swiper'); 
        slideshowElem.querySelector(this.selectors.slideshowWrapper).classList.add('swiper-wrapper');
        slideshowElem.querySelectorAll(this.selectors.slides).forEach(element => {
            element.classList.add('swiper-slide');
        });

        this.slideshow = new Swiper.default(this.querySelector(this.selectors.slideshow), slideshowProps);
        console.log(this.slideshow); 
    }

    destroy(pToDestroy) {
        if(pToDestroy == 'slideshow'  && this.slideshow) {
            document.querySelector(this.selectors.slideshow).classList.remove('swiper');
            document.querySelector(this.selectors.slideshowWrapper).classList.remove('swiper-wrapper');
            this.slideshow.detachEvents(); 
            this.slideshow.destroy(true, true); 
            this.slideshow = null; 
        }
    }
}


customElements.define('lookbook-slideshow', LookbookSlideshow);

