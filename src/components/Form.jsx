import React from 'react'

const Form = () => {
    return (
        <section className="container-fluid pt-0 mt-4 bg-green">
            <div className="container py-4">
                <h2 className="text-center my-3 text-white form-text fs-5">Recibe cupones en tu correo</h2>
                <form>
                    <div className="form-group mb-3">
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nombre" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Correo Electrónico" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-light btn-lg px-4 fs-6 ">Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form