const URL_API = "http://localhost:3000";
const myHeaders = new Headers({
    "Content-Type": "application/json"
});
const getCustomers = async() => {
    try {
        const respuesta = await fetch(`${URL_API}/customers`);
		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
            viewDataHtml(datos);
		} else if(respuesta.status === 401){
            console.log('La url no es correcta');
		} else if(respuesta.status === 404){
            console.log('El cliente que buscas no existe');
		} else {
            console.log('Se presento un error en la peticion consulte al Administrador');
		} 
	} catch(error){
        console.log(error);
	}
    
}
const postCustomer = (datos) =>{

    fetch(`${URL_API}/customers`,
	{
		method: "POST",
		headers: myHeaders,
		body:JSON.stringify(datos)
	}
    ).then(res=>{
        return res.json()
    }).then(res=>{
        //idUser=res.id;
    }).catch(err=>{
        console.log(err);
    })

}
export {
    getCustomers,
    postCustomer
};