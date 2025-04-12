type deptoApi = {
    id: number;
    name: string;
    description: string;
    surface: number;
    population: number;
    cityCapital: {
        id: number;
        name: string;
    };
};

export type DepartamentoAdaptado = {
    id: number;
    name: string;
    description: string;
    surface: number;
    population: number;
    capitalName: string;
};

export const adaptSingleDepto = (apiDepto: deptoApi): DepartamentoAdaptado => {
    return {
        id: apiDepto.id,
        name: apiDepto.name,
        description: apiDepto.description,
        surface: apiDepto.surface,
        population: apiDepto.population,
        capitalName: apiDepto.cityCapital?.name || "Sin capital",
    };
};

export const apiDeptosToDeptos = (deptos: deptoApi[]): DepartamentoAdaptado[] => {
    return deptos.map(adaptSingleDepto);
};
