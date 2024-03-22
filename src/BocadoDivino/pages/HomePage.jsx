import { Hero } from "../components/Hero"
import { NavBar } from "../components/NavBar"
import { Nosotros } from "../components/Nosotros"
import { Platillos } from "../components/Platillos"
import { Sucursales } from "../components/Sucursales"

export const HomePage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Nosotros />
            <Sucursales />
            <Platillos />
        </>
    )
}
