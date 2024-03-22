import { Route, Routes } from "react-router-dom"
import { BocadoDivinoRoutes } from "../BocadoDivino/router/BocadoDivinoRoutes"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<BocadoDivinoRoutes />} />
            </Routes>
        </>
    )
}
