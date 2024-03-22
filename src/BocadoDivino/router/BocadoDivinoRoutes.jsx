import { Navigate, Route, Routes } from "react-router-dom"
import { MenuCompleto } from "../pages/MenuCompleto"
import { HomePage } from "../pages/HomePage"

export const BocadoDivinoRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="inicio" element={<HomePage />} />
                <Route path="menuCompleto" element={<MenuCompleto />} />

                <Route path="/*" element={<Navigate to="inicio"/>}/>

            </Routes>
        </>
    )
}
