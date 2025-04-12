import { apiDeptosToDeptos } from "./departmentAdapters";

async function apiDepartamentos() {
    try {
        const response = await fetch("https://api-colombia.com/api/v1/Department");
        const data = await response.json();
        return apiDeptosToDeptos(data); 
    } catch (error) {
        console.error("Ha ocurrido un error", error);
        return [];
    }
}

export default apiDepartamentos;
