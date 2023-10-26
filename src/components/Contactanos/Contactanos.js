import { useForm } from "react-hook-form";

const Contactanos = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (
        <div className="containerContacto">
            <h2 className="contacto-titulo">CONTÁCTANOS!</h2>
            <p className="contacto-texto">NUESTRA TIENDA VIRTUAL LLEGA A TODOS LADOS!
            por las dudas te dejamos nuestro número y nos llamás si tenés consultas: +549 2612057661
            </p>

            <div className="contactanos">
            <h1 className="main-title-contacto">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
    
                <input className='form-input' type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input className='form-input' type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input className='form-input' type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
    
                <button className="enviar" type="submit">Enviar</button>
    
            </form>
            </div>
        </div>
    )
}

export default Contactanos