import React from 'react'
import cupon1 from '../assets/imgs/cupon-1.jpg'
import cupon2 from '../assets/imgs/cupon-2.jpg'
import cupon3 from '../assets/imgs/cupon-3.jpg'
import cupon4 from '../assets/imgs/cupon-4.jpg'
import cupon5 from '../assets/imgs/cupon-5.jpg'
import cupon6 from '../assets/imgs/cupon-6.jpg'
const Card = () => {
    return (
        <main className="container">
            <section className="row">
                <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
                    <div className="card mx-2">
                        <img src={cupon1} className="card-img-top" alt="Plumon" />
                        <div className="card-body">
                            <h5 className="card-title fw-light mb-3">Plumón Coral Fleece estampado en modelo y tamaño a elección</h5>
                            <p className="card-text h6 fw-light">Plumones Manolino</p>
                            <p className="fw-light">
                                <i className="fas fa-map-marker-alt fa-xs"></i>
                                9191 Avenida Vitacura, Chile
                            </p>
                            <hr />
                            <ul className="list-group list-group-flush text-right">
                                <li className="
                                        list-group-item
                                        ms-auto
                                        fw-light
                                        gris
                                        py-0
                                        pe-1
                                        2
                                        1
                                        5
                                        py-0
                                        pe-1
                                        2
                                        1
                                        5
                                    ">
                                    $45.990
                                    <span className="h5 fw-bold green ms-3">$22.990</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
                    <div className="card mx-2">
                        <img src={cupon2} className="card-img-top" alt="Plumon" />
                        <div className="card-body">
                            <h5 className="card-title fw-light mb-3">Entrada para compartir + platos de fondo + postres + bebestibles</h5>
                            <p className="card-text h6 fw-light">V for Vegan</p>
                            <p className="fw-light">
                                <i className="fas fa-map-marker-alt fa-xs"></i>
                                777 Jesse Pinkman, Chile
                            </p>
                            <hr />
                            <ul className="list-group list-group-flush text-right">
                                <li className="list-group-item ms-auto fw-light gris py-0">
                                    $30.990
                                    <span className="h5 fw-bold green ms-3">$12.990</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
                    <div className="card mx-2">
                        <img src={cupon3} className="card-img-top" alt="Plumon" />
                        <div className="card-body">
                            <h5 className="card-title fw-light mb-3">Evaluación integral + blanqueamiento dental led + limpieza +fluoración</h5>
                            <p className="card-text h6 fw-light">Clínica Dental Quijada</p>
                            <p className="fw-light">
                                <i className="fas fa-map-marker-alt fa-xs"></i>
                                1342, Blanco Encalada, Chile
                            </p>
                            <hr />
                            <ul className="list-group list-group-flush text-right">
                                <li className="list-group-item ms-auto fw-light gris py-0">
                                    $300.000
                                    <span className="h5 fw-bold green ms-3">$25.990</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
                    <div className="card mx-2">
                        <img src={cupon4} className="card-img-top" alt="Plumon" />
                        <div className="card-body">
                            <h5 className="card-title fw-light mb-3">Colación para 2 personas + postre (no incluye bebidas)</h5>
                            <p className="card-text h6 fw-light">Suricata almacen</p>
                            <p className="fw-light">
                                <i className="fas fa-map-marker-alt fa-xs"></i>
                                1071 Miguel Claro, Chile
                            </p>
                            <hr />
                            <ul className="list-group list-group-flush text-right">
                                <li className="list-group-item ms-auto fw-light gris py-0">
                                    $4.200
                                    <span className="h5 fw-bold green ms-3">$2.100</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
                    <div className="card mx-2">
                        <img src={cupon5} className="card-img-top" alt="Plumon" />
                        <div className="card-body">
                            <h5 className="card-title fw-light mb-3">1, 2 o 4 tickets para Stukids. Elige sucursal</h5>
                            <p className="card-text h6 fw-light">Stukids Centro de Eventos</p>
                            <p className="fw-light">
                                <i className="fas fa-map-marker-alt fa-xs"></i>
                                133 El tranque, Chile
                            </p>
                            <hr />
                            <ul className="list-group list-group-flush text-right">
                                <li className="list-group-item ms-auto fw-light gris py-0">
                                    $4.000
                                    <span className="h5 fw-bold green ms-3">$2.500</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4">
                    <div className="card mx-2">
                        <img src={cupon6} className="card-img-top" alt="Plumon" />
                        <div className="card-body">
                            <h5 className="card-title fw-light mb-3">San Pedro de Atacama : 1 o 2 noches en alojamiento a elección</h5>
                            <p className="card-text h6 fw-light">
                                <i className="fas fa-map-marker-alt fa-xs"></i>
                                D-Latam Travel</p>
                            <hr />
                            <ul className="list-group list-group-flush text-right">
                                <li className="list-group-item ms-auto fw-light gris py-0">
                                    $80.200
                                    <span className="h5 fw-bold green ms-3">$44.100</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Card