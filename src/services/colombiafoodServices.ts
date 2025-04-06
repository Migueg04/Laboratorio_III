
function apiComida() {
    return fetch ('https://api-colombia.com/api/v1/TypicalDish')
        .then(response => response.json())
        .catch((error) =>{
            console.error ("Ha ocurrido un error", error)
        })
}
export default apiComida;

