import { Hero } from "../components/Hero"
import { NavBar } from "../components/NavBar"
import { Nosotros } from "../components/Nosotros"
import { Sucursales } from "../components/Sucursales"

export const HomePage = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Nosotros />
            <Sucursales />
        </>
    )
}
