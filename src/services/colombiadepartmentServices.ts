function apiDepartamentos(){
    return fetch ('https://api-colombia.com/api/v1/Department')
        .then(response => response.json())
        .catch((error) =>{
            console.error ("Ha ocurrido un error", error)
        })
}
export default apiDepartamentos;