
export const PlatilloPage = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row mt-[10rem] max-w-[100rem] mx-auto gap-[6rem]">    
                <img 
                    src="https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_1280.jpg" 
                    alt=""
                    className="w-[100%] lg:w-[60%] px-[1rem] lg:px-0 lg:mx-auto"
                />

                <div className="mx-5">
                    <h1 className="text-white text-[3rem]">Mar y Tierra</h1>
                    <div className="flex gap-2 mt-1 border-b-2 pb-3">
                        <p className="bg-white p-1 rounded-md text-[1rem] font-bold">ENTRADAS</p>
                        <p className="bg-[#16a34a] p-1 rounded-md text-[1rem] text-white font-bold">$179.00 MX</p>
                    </div>
                    <div>
                        <p className="text-white mt-3 text-[1.2rem] text-justify"> El sushi mar y tierra combina ingredientes del mar, como pescado fresco, con ingredientes terrestres, como aguacate o carne de res, para crear una mezcla única de sabores y texturas.</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
