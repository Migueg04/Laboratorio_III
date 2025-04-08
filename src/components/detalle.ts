import apiDepartamentos from "../services/colombiadepartmentServices";

type deptoRespuesta = {
    id: number;
    name: string;
    description: string;
    surface: number;
    population: number;
    cityCapital:{
        id: number;
        name: string;
    }
}

class Departamento extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    async render (){
        if (this.shadowRoot){
            const llamadoApiDeptos = await apiDepartamentos();
            console.log(llamadoApiDeptos);

            this.shadowRoot.innerHTML = `
                <style>
                .popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    animation: fadeIn 0.3s ease-in-out;
                }

                .popup-card {
                    background-color: #fffdf0;
                    border-radius: 16px;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                    max-width: 500px;
                    width: 90%;
                    padding: 24px;
                    position: relative;
                    animation: slideUp 0.4s ease-out;
                    font-family: 'Segoe UI', sans-serif;
                }

                .popup-card h2 {
                    margin-top: 0;
                    color: #c79200;
                    font-size: 1.8rem;
                }

                .popup-card p {
                    color: #333;
                    margin: 10px 0;
                    line-height: 1.5;
                    font-size: 1rem;
                }

                .popup-card strong {
                    color: #555;
                }

                .close-button {
                    position: absolute;
                    top: 12px;
                    right: 16px;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #999;
                    transition: color 0.2s;
                }

                .close-button:hover {
                    color: #333;
                }
                </style>
                <div class="popup-overlay">
                    ${llamadoApiDeptos.map((deptos:deptoRespuesta) =>{
                        return `
                            <div class="popup-card">
                                <button class="close-button">&times;</button>
                                <h2>${deptos.name}</h2>
                                <p><strong>Capital:</strong> ${deptos.cityCapital.name}</p>
                                <p><strong>Descripción:</strong>${deptos.description}</p>
                                <p><strong>Población:</strong>${deptos.population}</p>
                                <p><strong>Área:</strong> ${deptos.surface}km²</p>
                            </div>
                        `;
                    }).join("")}
                </div>
            `
        }
    }
}
export default Departamento