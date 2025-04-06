class Button extends HTMLElement{
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

                <button id="departamentoButton">Ver Departamento</button>
            `
        }
    }

    addEvents(){
        const button = this.shadowRoot?.querySelector("#departamentoButton");
        if (button){
            button.addEventListener("click", ()=>{
                console.log("departamentos");
            })
        }
    }
}
export default Button 