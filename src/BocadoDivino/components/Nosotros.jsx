
export const Nosotros = () => {

    return (
        <>
            <div id="nosotros" className="color2 ">
                <div className="mx-auto w-[90%] max-w-[120rem] py-[4rem]">
                    <div className="py-[2rem] grid  grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]">
                        
                        <div className="order-1 lg:order-none">
                            <img 
                                src="./Logos/nosotros1.jpg"
                                alt="nosotros1.jpg"
                                className="object-cover w-4/5 mx-auto"
                            />
                        </div>
                        

                        <div className="">
                            <h4 className="text-[#6b7280] font-bold text-[1.3rem] my-[1rem]">• ACERCA DE NOSOTROS</h4>
                            <p className="text-white text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem] text-justify">Adéntrate en el corazón de Sinaloa, donde la tradición y el sabor se fusionan para crear una experiencia única. Desde sus paisajes hasta su cocina, cada aspecto te sumerge en la autenticidad de esta tierra.</p>
                        </div>

                    </div>
                    
                    <div className="py-[2rem] grid grid-cols-1 lg:grid-cols-2 items-center justify-items-end gap-[1rem] lg:gap-[4rem] ">

                        <div>
                            <h4 className="text-[#6b7280] font-bold text-[1.2rem] my-[1rem]">• CHEF CARLOS TIZNADO LOPEZ</h4>
                            <p className="text-white text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[1.8rem] text-justify">Adéntrate en el corazón de Sinaloa, donde la tradición y el sabor se fusionan para crear una experiencia única. Desde sus paisajes hasta su cocina, cada aspecto te sumerge en la autenticidad de esta tierra.</p>
                        </div>

                        <img 
                            src="./Logos/nosotros2.jpg"
                            alt="nosotros1.jpg"
                            className="object-contain w-4/5 h-4/5 mx-auto"
                        />

                    </div>

                </div>

            </div>

        </>
    )
}
