


class FeatCollectionProductSlideshow extends HTMLElement {
    constructor() {
        super(); 
        this.selectors = {
            slideshow: '[data-product-images-slideshow]', 
            slideshowWrapper: '[data-product-images-slideshow-wrapper]',
            slides: '[data-product-images-slideshow-slide]',
            thumbnails: '[data-product-images-slideshow-thumbs]',
            thumbnailsWrapper: '[data-product-images-slideshow-thumbs-wrapper]',
            thumbnailSlides: '[data-product-images-slideshow-thumb]',
            pagination: '[data-product-images-slideshow-pagination]',
            paginationWrapper: '[data-product-images-slideshow-pagination-wrapper]',
            paginationThumbs: '[data-product-images-slideshow-pagination-thumb]'
        }

        this.mediaQueries = {
            largeUp: window.matchMedia('(min-width: 930px)')
        }
        
        this.init(); 
    }
  
    init() {
        import('./swiper.module.js').then((Swiper) => {
           // this.mediaQueries.largeUp.addEventListener("change", this.handleLargeUp.bind(this)); 
            this.handleLargeUp(this.mediaQueries.largeUp, Swiper); 
        }); 
    } 

    initNavSlideshow(Swiper) {

        let props = {
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '[data-slideshow-navigation-next]',
                prevEl: '[data-slideshow-navigation-prev]'
            },
            controller: {
                control: this.slideshow
            }, 
            breakpoints: {
                600: {
                    slidesPerView: 2
                },  990: {
                    slidesPerView: 1
                }
            }
        }; 

        let selectors = {
            slideshow: '[data-nav-slideshow]', 
            slideshowWrapper: '[data-slideshow-wrapper]',
            slides: '[data-slideshow-slide]',
            navigation: '[data-slideshow-nav]',
            navigationNext: '[data-slideshow-navigation-next]',
            navigationPrev: '[data-slideshow-navigation-prev]',
        };


        
        this.querySelector(selectors.slideshow).querySelector(selectors.navigation).innerHTML = ` 
        <div class="swiper-button-prev" data-slideshow-navigation-prev><svg> <use href="#slideshow-arrow"/></svg><span class="visually-hidden">Previous Product</span></div>
        <div class="swiper-button-next" data-slideshow-navigation-next><svg> <use href="#slideshow-arrow"/></svg><span class="visually-hidden">Next Product</span></div>`;

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
        this.slideshow.controller.control = this.navSlideshow; 
        this.slideshow.update(); 
    }

    initProductsSlideshow(Swiper) {

     
        let props =   {
            direction: 'horizontal', 
            loop: true,
            grabCursor: false, 
            preventInteractionOnTransition: true,
            centeredSlides: true,
            breakpoints: {
                600: {
                    slidesPerView: 2
                },  990: {
                    slidesPerView: 1,
                    spaceBetween: 50
                }
            }
        }


        if(this.slideshow) {
            this.destroy('slideshow'); 
        }
        
        const slideshowElem = this.querySelector(this.selectors.slideshow); 
        slideshowElem.classList.add('swiper'); 
        slideshowElem.querySelector(this.selectors.slideshowWrapper).classList.add('swiper-wrapper');
        slideshowElem.querySelectorAll(this.selectors.slides).forEach(element => {
            element.classList.add('swiper-slide');
        });

        this.slideshow = new Swiper.default(this.querySelector(this.selectors.slideshow), props);
    }


    handleLargeUp(pEvent, Swiper) {

        let slideshowProps = {}; 

      
        this.initProductsSlideshow(Swiper); 
        this.initNavSlideshow(Swiper); 

        // if(pEvent.matches) {
        //     this.appendThumbImages();
        //     document.querySelector(this.selectors.thumbnails).classList.add('swiper'); 
        //     document.querySelector(this.selectors.thumbnails).querySelector(this.selectors.thumbnailsWrapper).classList.add('swiper-wrapper');
        //     document.querySelector(this.selectors.thumbnails).querySelectorAll(this.selectors.thumbnailSlides).forEach(element => {
        //         element.classList.add('swiper-slide');
        //     });

        //     this.slideshowThumbs = new Swiper.default(this.querySelector(this.selectors.thumbnails), {
        //         spaceBetween: 14,
        //         slidesPerView: 4,
        //         direction: 'horizontal',
        //         loop: false
        //     });

        // } else {
        //     this.destroy('thumbs'); 
        // }


        // if(pEvent.matches) {
        //     slideshowProps =  {
        //         direction: 'horizontal', 
        //         loop: true,
        //         loopedSlides: 6,
        //         grabCursor: false, 
        //         preventInteractionOnTransition: true,
        //         pagination: {
        //             el: this.selectors.pagination,
        //             clickable: true,
        //             renderBullet: function (index, className) {
        //                 return '<button aria-label="Slide to product image ' + (index + 1) + '" class="' + className + '"><span class="visually-hidden">' + 'Slide to product image ' + (index + 1) + "</span></button>";
        //             }
        //         },
        //         thumbs: {
        //             swiper: this.slideshowThumbs
        //         }
        //     }
        // } else {
        //     slideshowProps = {
        //         direction: 'horizontal', 
        //         loop: true,
        //         loopedSlides: 6,
        //         grabCursor: false, 
        //         preventInteractionOnTransition: true,
        //         pagination: {
        //             el: this.selectors.pagination,
        //             clickable: true,
        //             renderBullet: function (index, className) {
        //                 return '<button aria-label="Slide to product image ' + (index + 1) + '" class="' + className + '"><span class="visually-hidden">' + 'Slide to product image ' + (index + 1) + "</span></button>";
        //             }
        //         }
        //     }
        // }   

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


customElements.define('feat-collection-product-slideshow', FeatCollectionProductSlideshow);

