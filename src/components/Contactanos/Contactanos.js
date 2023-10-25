import { useForm } from "react-hook-form";

const Contactanos = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (
        <div className="containerContacto">
            <h2>CONTÁCTANOS!</h2>
            <p>NUESTRA TIENDA VIRTUAL LLEGA A TODOS LADOS!</p>
            <p>por las dudas te dejamos nuestro número y nos llamás si tenés consultas: +549 2612057661</p>

            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>
    
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
    
                <button className="enviar" type="submit">Enviar</button>
    
            </form>
        </div>
    )
}

export default Contactanos