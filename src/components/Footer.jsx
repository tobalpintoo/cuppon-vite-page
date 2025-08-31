import React from 'react'
import logoBlack from '../assets/imgs/logo-black.png'

const Footer = () => {
    return (
        <footer class="text-center my-4 text-secondary">
            <img src={logoBlack} class="mb-2" width="82px" />
            <p class="mx-5">© 2018 Cuppon Latam .Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer