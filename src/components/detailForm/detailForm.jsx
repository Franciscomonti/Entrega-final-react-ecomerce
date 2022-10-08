

const DetailForm = (form, id) => {
    return (
        <div>
        <p>Detalle de compra:</p>
        <p>Titular de compra: {form.name}</p>
        <p>Telefono de contacto: {form.phone}</p>
        <p>Correo electronico: {form.email}</p>
        <p>Tu numero de pedido es : {id} </p>
    </div>
    )
    }


export default DetailForm