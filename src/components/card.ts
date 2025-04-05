import apiComida from "../services/colombiafoodServices";

type comidaRespuesta = {
    id: number;
    name: string;
    description: string;
    ingredients: string;
    imageUrl ?: string;
    departmentId: number;
}

class Card extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    async render(){
        if (this.shadowRoot) {
            const llamadoApiComida = await apiComida();
            console.log (llamadoApiComida)

            this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background-color: #fffbe6; /* amarillo claro */
                    border: 1px solid #f0c000;
                    border-radius: 12px;
                    padding: 10px;
                    margin: 16px 0;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    font-family: sans-serif;
                    max-width: 300px;
                    transition: transform 0.2s ease;
                }

                .card:hover {
                    transform: scale(1.02);
                }

                .card img {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin-bottom: 12px;
                }

                .card h1 {
                    font-size: 1.4rem;
                    color: #c79200;
                    margin: 0 0 8px;
                }

                .card p {
                    font-size: 0.95rem;
                    color: #444;
                    margin: 6px 0;
                }

                .card button {
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

                .card button:hover {
                    background-color: #f0b800;
                }
            </style>
                <h1>La mejor comida del Mundo</h1>
                    ${llamadoApiComida.map((comida: comidaRespuesta) => {
                        return`
                            <div class="card">
                                <img src="${comida.imageUrl || 'https://via.placeholder.com/150'}" alt="${comida.name}">
                                <h1>${comida.name}</h1>
                                <p>${comida.description}</p>
                                <strong>Ingredientes:</strong>
                                <p>${comida.ingredients}</p>
                                <button>Ver Departamento</button>
                            </div>
                        `
                    }).join("")}
        `
        }
    }
}

export default Card;