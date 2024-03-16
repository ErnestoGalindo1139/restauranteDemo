
export const Nosotros = () => {
    return (
        <>
            <div className="color2">
                <div className="ml-[5rem] py-[6rem] grid grid-cols-2 items-center justify-items-start">
                    <img 
                        src="./Logos/nosotros1.jpg"
                        alt="nosotros1.jpg"
                        className="w-11/12"
                    />

                    <div className="mr-[5rem]">
                        <h4 className="text-[#6b7280] font-bold text-[1.3rem] mb-[1rem]">• ACERCA DE NOSOTROS</h4>
                        <p className="text-white text-[1.8rem] text-justify">Adéntrate en el corazón de Sinaloa, donde la tradición y el sabor se fusionan para crear una experiencia única. Desde sus paisajes hasta su cocina, cada aspecto te sumerge en la autenticidad de esta tierra.</p>
                    </div>

                </div>
                
                <div className="ml-[5rem] py-[6rem] grid grid-cols-2 items-center justify-items-end gap-[4rem]">

                    <div>
                        <h4 className="text-[#6b7280] font-bold text-[1.3rem] mb-[1rem]">• CHEF CARLOS TIZNADO LOPEZ</h4>
                        <p className="text-white text-[1.8rem] text-justify">Adéntrate en el corazón de Sinaloa, donde la tradición y el sabor se fusionan para crear una experiencia única. Desde sus paisajes hasta su cocina, cada aspecto te sumerge en la autenticidad de esta tierra.</p>
                    </div>

                    <img 
                        src="./Logos/nosotros2.jpg"
                        alt="nosotros1.jpg"
                        className="mr-[6rem] w-4/5"
                    />

                </div>

            </div>

        </>
    )
}
