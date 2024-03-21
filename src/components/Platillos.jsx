export const Platillos = () => {

    const imagenes = [
        {
            src: "https://media.istockphoto.com/id/502840530/es/foto/restaurante-de-lujo-mesa-en-la-puesta-de-sol.jpg?s=612x612&w=0&k=20&c=Ppc5w5KPdlsSq4mYXFwLRiYEdG1NFVmSA-yogXTcymM=",
            alt: "Platillo 1"
        },
        {
            src: "https://media.istockphoto.com/id/501823974/es/foto/lujo-mesa-del-restaurante-en-la-playa.jpg?s=612x612&w=0&k=20&c=97ihIX0zseJbBznvDpAP9YvHryPrGFgfwVeUpAXgQRU=",
            alt: "Platillo 2"
        },
        {
            src: "https://media.istockphoto.com/id/540590170/es/foto/restaurante-mesa-con-plato-sushi-y-copas-de-champa%C3%B1a.jpg?s=612x612&w=0&k=20&c=crK-is88rDqDkC7y5GotXXex9EPiaYYAkLRyKriozIM=",
            alt: "Platillo 3"
        },
        {
            src: "https://media.istockphoto.com/id/183214284/es/foto/cocina-gourmet-reci%C3%A9n.jpg?s=612x612&w=0&k=20&c=09rqe10GMN8QRRoz573Wqiz6iRMw5s_P_bd301sS7OM=",
            alt: "Platillo 4"
        },
        {
            src: "https://media.istockphoto.com/id/1065204508/es/foto/postre-gourmet.jpg?s=612x612&w=0&k=20&c=_90_U3mKKSOKnWOtHZxnvUsCgUgOiZpeE_74ltesWyM=",
            alt: "Platillo 5"
        },
        {
            src: "https://media.istockphoto.com/id/466034192/es/foto/cangrejo-la-cena.jpg?s=612x612&w=0&k=20&c=d-NoPQ0aageD24qov4K-DnpX-3HBcfvr4CJTgZNte08=",
            alt: "Platillo 6"
        },
        {
            src: "https://media.istockphoto.com/id/456060307/es/foto/la-los-alimentos.jpg?s=612x612&w=0&k=20&c=Gxz8-mV3hozrylwQQ4A-2ixui8ZiXS3nyLAnrRCFfgQ=",
            alt: "Platillo 7"
        },
        {
            src: "https://media.istockphoto.com/id/515379402/es/foto/pescados-y-mariscos-aperitivos-camar%C3%B3n.jpg?s=612x612&w=0&k=20&c=yf6wzkK0J2wxeK5B6JTQhm3JsoCY7J0koB9p0vT7DjU=",
            alt: "Platillo 8"
        },
        {
            src: "https://media.istockphoto.com/id/1209221523/es/foto/sushi-and-rolls-philadelphia-cocina-japonesa.jpg?s=612x612&w=0&k=20&c=9fk2gMCX2zC5ym8upjBPb0Z8um5_78LWHZtUIQMKBvU=",
            alt: "Platillo 9"
        },
        {
            src: "https://media.istockphoto.com/id/1145669016/es/foto/cena-en-la-cama-en-la-bandeja-de-comida-sushi-frutas-queso-y-vino-blanco.jpg?s=612x612&w=0&k=20&c=Jjs5gYBg-AcukX00A4cviOTWlOcXMD4_vBnHrD457sk=",
            alt: "Platillo 10"
        },
        {
            src: "https://media.istockphoto.com/id/1457946880/es/foto/mariscos-de-lujo-servidos-en-un-crucero.jpg?s=612x612&w=0&k=20&c=MCZQ7H2UBSnIrBV48nErlBCzJsEiyDwssinLm31jRy8=",
            alt: "Platillo 11"
        },
        {
            src: "https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_1280.jpg",
            alt: "Platillo 12"
        },
        {
            src: "https://cdn.pixabay.com/photo/2016/03/05/09/22/eat-1237431_640.jpg",
            alt: "Platillo 13"
        },
        {
            src: "https://media.istockphoto.com/id/104704117/es/foto/restaurante-placas-de.jpg?s=612x612&w=0&k=20&c=98vr9Kq-s9lpto15bX8hs0Okg-Drild_0g0cK8J0hEY=",
            alt: "Platillo 14"
        },
        {
            src: "https://media.istockphoto.com/id/137737392/es/foto/el-chef-prepara-platos-de-cocina.jpg?s=612x612&w=0&k=20&c=VTMEsRo9--agO3I3b57wYcXKED-BUamPQ2CvfUl7GOY=",
            alt: "Platillo 15"
        },
        {
            src: "https://media.istockphoto.com/id/1160577908/es/foto/dos-platos-de-carne-con-hojas-de-ensalada-y-ensalada-de-verano-en-la-mano-de-camarero.jpg?s=612x612&w=0&k=20&c=E0HaWnfGhltYRnh241JhtUSAGCihEviDrkq7zMObOT0=",
            alt: "Platillo 16"
        },
        {
            src: "https://media.istockphoto.com/id/1165399909/es/foto/deliciosa-comida-en-un-plato-negro-vista-superior-espacio-de-copia.jpg?s=612x612&w=0&k=20&c=WVPqUu2friqxwlr385Ax-QQ_IvylhR_5wl46P5jQbb4=",
            alt: "Platillo 17"
        },
        {
            src: "https://media.istockphoto.com/id/882125314/es/foto/beef-steak-filete-de-ternera-lentejas-negras-mezcladas-con-vegetales-a-la-parrilla-co%C3%B1ac-o.jpg?s=612x612&w=0&k=20&c=LtJ2BXY_JACTA38Y3pknsMz79yMqioh6eQRJXCWIQIc=",
            alt: "Platillo 18"
        },
        {
            src: "https://media.istockphoto.com/id/692557700/es/foto/hamburguesa.jpg?s=612x612&w=0&k=20&c=f1if837zaRtq7oBa8a5D7k2aamhMaAWQIv-XLxSdLCo=",
            alt: "Platillo 19"
        },
        {
            src: "https://media.istockphoto.com/id/913931820/es/foto/chef-en-cocina-de-restaurante-de-cocina-de-alta-llamas-ardientes.jpg?s=612x612&w=0&k=20&c=jTObHXwBm9tHIYHV_7lFFH3nCYzeKrg-DYTx9FVHpqA=",
            alt: "Platillo 20"
        },
    ];
    
    return (
        <>
            <div className="color2 py-[3rem] ">
                <h2 className="text-white font-bold text-2xl lg:text-5xl text-center mb-[4rem]"> Conoce Nuestros Platillos </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem] mx-auto w-[90%] max-w-[120rem]">
                    
                    {
                        imagenes.map( (imagen, index) => (
                            <img key={ index } src={ imagen.src } alt={ imagen.alt } className="h-full object-cover" />
                        ))
                    }

                </div>
            </div>
        </>
    )
}
