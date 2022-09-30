

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
      console.log(this);

      function changeMaterialColor(pHex, pTarget, pContainer) {
        console.log(pTarget);

        if(pTarget == 'material') {
          pContainer.querySelectorAll('.st0').forEach((elem)=> {
            elem.style.fill = pHex; 
          }); 
        } else {
          pContainer.querySelectorAll('.st5').forEach((elem)=> {
            elem.style.fill = pHex; 
          });       
        }

      }

      this.querySelectorAll('[data-hat-color]').forEach((elem) => {
        elem.addEventListener('click', (event) => {
          console.log(event.currentTarget.value);
          changeMaterialColor(event.currentTarget.value, event.currentTarget.dataset.colorTarget,this); 
        }); 
      })
    }

}); 