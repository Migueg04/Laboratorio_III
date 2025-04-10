class Button extends HTMLElement{
    static observedAttributes = ["value"]

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()
        this.addEvents()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <style>
                    button {
                        margin-top: 12px;
                        padding: 8px 12px;
                        background-color: #ffcb05;
                        border: none;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: bold;
                        color: #333;
                        transition: background-color 0.3s ease;
                    }

                    button:hover {
                        background-color: #f0b800;
                    }
                </style>

                <button id="departamentoButton" value="${this.getAttribute("value")}">Ver Departamento</button>
            `
        }
    }

    addEvents(){
        const button = this.shadowRoot?.querySelector("#departamentoButton") as HTMLButtonElement;
        const deptoId = this.getAttribute("value")
        if (button){
            button.addEventListener("click", ()=>{
                console.log(deptoId);
                
               const llamarDetalle = new CustomEvent('detalleLlamado', {
                detail: {departmentId: Number(deptoId)},
                bubbles: true,
                composed: true
               });
               this.dispatchEvent(llamarDetalle);
            });
        }
    }
}
export default Button 