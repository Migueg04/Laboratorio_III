
import { apiFoodToFoods } from "./foodAdapters";

async function apiComida() {
    try {
        const response = await fetch('https://api-colombia.com/api/v1/TypicalDish');
        const data = await response.json(); // data es un array, no un objeto con `.data`
        const adapt = apiFoodToFoods(data); // usa directamente el adaptador correcto
        return adapt;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default apiComida;


