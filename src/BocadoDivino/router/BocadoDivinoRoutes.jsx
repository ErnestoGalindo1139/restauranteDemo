import { Navigate, Route, Routes } from "react-router-dom"
import { MenuCompleto } from "../pages/MenuCompleto"
import { HomePage } from "../pages/HomePage"
import { PlatilloPage } from "../pages/PlatilloPage"
import { Footer } from "../components/Footer"

export const BocadoDivinoRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="inicio" element={<HomePage />} />
                <Route path="menuCompleto" element={<MenuCompleto />} />

                <Route path="platilloInfo" element={<PlatilloPage />} />

                <Route path="/*" element={<Navigate to="inicio"/>}/>

            </Routes>

            <Footer />
        </>
    )
}
