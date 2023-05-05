export class MainMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */ `
        
        `
    }
}
customElements.define("main-menu",MainMenu);