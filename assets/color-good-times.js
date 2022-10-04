

 customElements.define('color-good-times', class ColorGoodTimes extends HTMLElement {
    constructor() {
      super();
      
      this.mediaQueries = {
          largeUp: window.matchMedia('(min-width: 975px)')
      }
      this.init(); 

    }

    init() {
        console.log('hello')
        import('./swiper.module.js').then((Swiper) => {
          this.mediaQueries.largeUp.addEventListener("change", this.handleQueryChange.bind(this, Swiper)); 
          this.handleQueryChange(Swiper, this.mediaQueries.largeUp)
         }); 

        this.initializeEvents(); 
    }

    initializeEvents() {
      this.colorButtons();
    }

    handleQueryChange(Swiper, pEvent) {

      this.initHatNav(Swiper); 

       if(pEvent.matches) {
         this.initHatSlideshow(Swiper, 'large')
       } else {
         this.initHatSlideshow(Swiper, 'small')
       }
    }

    initHatNav(Swiper) {

      let props = {
        slidesPerView: 4, 
        spaceBetween: 20
      }; 

      let selectors = {
        slideshow: '[data-hat-thumbs]', 
        slideshowWrapper: '[data-hat-thumbs-wrapper]',
        slides: '[data-hat-thumb]'
      }
      
      if(this.navSlideshow) {
          this.destroy('slideshow'); 
      }
      
      const slideshowElem = this.querySelector(selectors.slideshow); 
      slideshowElem.classList.add('swiper'); 
      slideshowElem.querySelector(selectors.slideshowWrapper).classList.add('swiper-wrapper');
      slideshowElem.querySelectorAll(selectors.slides).forEach(element => {
          element.classList.add('swiper-slide');
      });

      this.navSlideshow = new Swiper.default(this.querySelector(selectors.slideshow), props);
  }

    initHatSlideshow(Swiper, pWindowSize) {

      let props =   {}; 

      let selectors = {
        slideshow: '[data-hat-slideshow]', 
        slideshowWrapper: '[data-hat-slideshow-wrapper]',
        slides: '[data-hat-slideshow-slide]'
      }

      if(pWindowSize === 'large') {
        props =  {
          loop: false,
          grabCursor: false, 
          centeredSlides: false,
          allowTouchMove: false, 
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          spaceBetween: 40, 
          thumbs: {
            swiper: this.navSlideshow 
          }
        }
      } else {
        props = {
          direction: 'horizontal', 
          loop: true,
          grabCursor: true, 
          centeredSlides: true,
          effect: 'slide',
          spaceBetween: 40,
          thumbs: {
            swiper: this.navSlideshow 
          }
        }
      }


      if(this.hatSlideshow) {
          this.destroy('slideshow'); 
      }
      
      const slideshowElem = this.querySelector(selectors.slideshow); 
      slideshowElem.classList.add('swiper'); 
      slideshowElem.querySelector(selectors.slideshowWrapper).classList.add('swiper-wrapper');
      slideshowElem.querySelectorAll(selectors.slides).forEach(element => {
          element.classList.add('swiper-slide');
      });

      this.hatSlideshow = new Swiper.default(this.querySelector(selectors.slideshow), props);
    }

    destroy(pToDestroy) {
      if(pToDestroy == 'slideshow'  && this.hatSlideshow) {

          let selectors = {
            slideshow: '[data-hat-slideshow]', 
            slideshowWrapper: '[data-hat-slideshow-wrapper]',
            slides: '[data-hat-slideshow-slide]'
          }
  
          this.querySelector(selectors.slideshow).classList.remove('swiper');
          this.querySelector(selectors.slideshowWrapper).classList.remove('swiper-wrapper');
          this.hatSlideshow.detachEvents(); 
          this.hatSlideshow.destroy(true, true); 
          this.hatSlideshow = null; 
      }
    }

    colorButtons() {

      let activeColor = this.querySelector('[data-current-swatch]').dataset.currentSwatch || '#fff';
      let container = this; 

      function changeSelectedColor(pHex, pTarget, pContainer) {
       activeColor = pHex;
       console.log(pContainer);
       pContainer.querySelector('[data-current-swatch]').style.backgroundColor = activeColor;
      }

      function changeOtherColorAreas(pColorAreaClass, pNewColor) {
        container.querySelectorAll('.' + pColorAreaClass).forEach((elem) => {
          elem.style.fill = pNewColor; 
        }); 
      }

      function colorMe() {
          this.style.fill = activeColor; 
          let colorAreaClass = this.classList[0]; 
         changeOtherColorAreas(colorAreaClass, activeColor);
      }

      this.querySelectorAll('[data-color-option]').forEach((elem) => {
        console.log(elem);
        elem.addEventListener('click', (event) => {
          changeSelectedColor(event.currentTarget.value, event.currentTarget.dataset.colorTarget,this); 
        }); 
      })

     
      this.querySelectorAll('.color-area' ).forEach((elem)=> {
        elem.addEventListener('click',colorMe); 
      })
    }; 

}); 