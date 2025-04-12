type comidaRespuesta = {
    id: number;
    name: string;
    description: string;
    ingredients: string;
    imageUrl ?: string;
    departmentId: number;
}

export const adaptSingleFood = (apiFood : comidaRespuesta) => {
    return {
        id: apiFood.id,
        name: apiFood.name,
        description: apiFood.description,
        ingredients: apiFood.ingredients,
        imageUrl: apiFood.imageUrl,
        departmentId: apiFood.departmentId,
    }
}

export const apiFoodToFoods = (foods: comidaRespuesta[]): comidaRespuesta[] => {
    return foods.map(adaptSingleFood);
}

