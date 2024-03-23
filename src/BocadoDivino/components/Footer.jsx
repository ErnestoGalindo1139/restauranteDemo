
export const Footer = () => {
    return (
        <>
        
            <div className="color1  p-[1.6rem] flex justify-between items-center">
                {/* <p className="text-white text-[1.1rem]">© 2024 Bocado Divino. Todos los derechos reservados.</p> */}
                <img
                    className="h-[80px] w-auto cursor-pointer"
                    src="./Logos/BocadoDivinoLogo_Footer.png"
                    alt="BocadoDivinoLogo.png"
                />
                <div className="flex gap-[1rem]">
                    <img 
                        width="36" 
                        height="36" 
                        src="https://img.icons8.com/ios-filled/36/FFFFFF/facebook-f.png" 
                        alt="facebook-f"
                        className="cursor-pointer"
                    />
                    <img 
                        width="36" 
                        height="36" 
                        src="https://img.icons8.com/fluency-systems-regular/36/FFFFFF/instagram-new--v1.png" 
                        alt="instagram-new--v1"
                        className="cursor-pointer"
                    />
                    <img 
                        width="36" 
                        height="36" 
                        src="https://img.icons8.com/material-outlined/36/FFFFFF/whatsapp--v1.png" 
                        alt="whatsapp--v1"
                        className="cursor-pointer"
                    />
                </div>
                
            </div>
        
        </>
    )
}
