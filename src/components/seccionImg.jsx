export default function SeccionImg() {
  return (
    <>
          <h2 className="mt-5 textColor text-center">Las mejores recetas de cocina caseras</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia deserunt reiciendis veniam neque, officia sequi facere voluptates ipsam similique assumenda. Animi quia voluptatem ratione illum architecto, itaque necessitatibus quas, id ut suscipit assumenda et explicabo vero. Reiciendis dolore omnis distinctio porro molestias veniam, excepturi quisquam accusantium incidunt nam eligendi necessitatibus.</p>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                                <img src={"https://danzadefogones.com/wp-content/uploads/2024/10/cuscus-con-verduras.jpg"} className="d-block w-100 img-fluid imgReceta" alt="..."/>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-10">
                                        <img src={"https://danzadefogones.com/wp-content/uploads/2024/10/cuscus-con-verduras.jpg"} className="d-block w-100 img-fluid imgReceta" alt="..."/>                                        
                                    </div>
                                    <div className="col-10">
                                        <img src={"https://danzadefogones.com/wp-content/uploads/2024/10/cuscus-con-verduras.jpg"} className="d-block w-100 img-fluid imgReceta" alt="..."/>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                                <img src={"https://saposyprincesas.elmundo.es/assets/2017/10/recetas-faciles-con-cinco-ingredientes-pollo-caprese.jpg"} className="d-block w-100 img-fluid imgReceta" alt="..."/>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-10">
                                        <img src={"https://saposyprincesas.elmundo.es/assets/2017/10/recetas-faciles-con-cinco-ingredientes-pollo-caprese.jpg"} className="d-block w-100 img-fluid imgReceta" alt="..."/>                                        
                                    </div>
                                    <div className="col-10">
                                        <img src={"https://saposyprincesas.elmundo.es/assets/2017/10/recetas-faciles-con-cinco-ingredientes-pollo-caprese.jpg"} className="d-block w-100 img-fluid imgReceta" alt="..."/>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                                <img src={"https://static01.nyt.com/images/2024/12/09/espanol/09MOSTPOPULAR-TOP-ART-kchw-ES-copy1/09MOSTPOPULAR-TOP-ART-kchw-articleLarge.jpg?quality=75&auto=webp&disable=upscale"} className="d-block w-100 img-fluid imgReceta" alt="..."/>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-10">
                                        <img src={"https://static01.nyt.com/images/2024/12/09/espanol/09MOSTPOPULAR-TOP-ART-kchw-ES-copy1/09MOSTPOPULAR-TOP-ART-kchw-articleLarge.jpg?quality=75&auto=webp&disable=upscale"} className="d-block w-100 img-fluid imgReceta" alt="..."/>                                        
                                    </div>
                                    <div className="col-10">
                                        <img src={"https://static01.nyt.com/images/2024/12/09/espanol/09MOSTPOPULAR-TOP-ART-kchw-ES-copy1/09MOSTPOPULAR-TOP-ART-kchw-articleLarge.jpg?quality=75&auto=webp&disable=upscale"} className="d-block w-100 img-fluid imgReceta" alt="..."/>                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </>
  )
}
