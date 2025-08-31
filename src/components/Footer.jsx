import React from 'react'
import logoBlack from '../assets/imgs/logo-black.png'

const Footer = () => {
    return (
        <footer className="text-center my-4 text-secondary">
            <img src={logoBlack} className="mb-2" width="82px" />
            <p className="mx-5">© 2018 Cuppon Latam .Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer