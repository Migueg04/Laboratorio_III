class Section extends HTMLElement {
        constructor(){
            super();
            this.attachShadow({mode: "open"})
        }
        connectedCallback(){
            this.render();
        }

        async render(){
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `

                `


        }
    }        
}
export default Section