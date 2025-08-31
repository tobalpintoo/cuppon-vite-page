import React from 'react'

const Form = () => {
    return (
        <section class="container-fluid pt-0 mt-4 bg-green">
            <div class="container py-4">
                <h2 class="text-center my-3 text-white form-text fs-5">Recibe cupones en tu correo</h2>
                <form>
                    <div class="form-group mb-3">
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nombre" />
                    </div>
                    <div class="form-group mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Correo Electrónico" />
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-light btn-lg px-4 fs-6 ">Enviar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form