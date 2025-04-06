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
                <style>
                    .container{
                        display: flex;
                        align-items: center;
                        justify-content: center;   
                        width: 1200px;
                        flex-direction: column;          
                    }

                    .titulo-principal {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        font-size: 50px;
                        color: #f0a500; /* amarillo dorado */
                        text-align: center;
                        margin: 24px 0;
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
                        letter-spacing: 1px;
                        position: relative;
                        }

                        .titulo-principal::after {
                        content: '';
                        display: block;
                        width: 800px;
                        height: 4px;
                        background-color: #f0c000;
                        margin: 12px auto 0;
                        border-radius: 2px;
                    }
                
                </style>
                    
                    <div class="container">
                        <div>
                            <h1 class='titulo-principal'> La Mejor Comida del Mundo </h1>
                        </div>
                        <card-component></card-component>
                    </div>
                `


        }
    }        
}
export default Section