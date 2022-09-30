

 customElements.define('color-good-times', class ColorGoodTimes extends HTMLElement {
    constructor() {
      super();
      this.init(); 
    }

    init() {
        console.log('hello')
        this.initializeEvents(); 
    }

    initializeEvents() {
      this.colorButtons();
    }

    colorButtons() {

      let activeColor = this.querySelector('[data-current-swatch]').dataset.currentSwatch || '#fff';

      function changeSelectedColor(pHex, pTarget, pContainer) {
       activeColor = pHex;
       console.log(pContainer);
       pContainer.querySelector('[data-current-swatch]').style.backgroundColor = activeColor;
      }

      function colorMe() {
        this.style.fill = activeColor; 
      }

      this.querySelectorAll('[data-color-option]').forEach((elem) => {
        elem.addEventListener('click', (event) => {
          changeSelectedColor(event.currentTarget.value, event.currentTarget.dataset.colorTarget,this); 
        }); 
      })

     
      this.querySelectorAll('.color-area' ).forEach((elem)=> {
        elem.addEventListener('click',colorMe); 
      })
    }; 

}); 