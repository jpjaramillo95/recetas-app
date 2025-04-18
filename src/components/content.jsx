import "./../assets/estilos.css"
import Card from "./card";
import SeccionImg from "./seccionImg";
import SeccionTxt from "./seccionTxt";


export default function Content() {
  return (
    <div className="col-sm-8">
      <nav aria-label="breadcrumb" style={{"--bs-breadcrumb-divider":"'>'"}}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Inicio</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Divina Cocina - Recetas Fáciles
          </li>
        </ol>
      </nav>
      <h2 className="textColor text-center">Divina Cocina – Recetas Fáciles</h2>
      <Card />
      <div className="row">
        <div className="col-sm-6">
          <Card />
        </div>
        <div className="col-sm-6">
          <Card />
        </div>
        <div className="col-sm-6">
          <Card />
        </div>
        <div className="col-sm-6">
          <Card />
        </div>
        <div className="col-sm-6">
          <Card />
        </div>
        <div className="col-sm-6">
          <Card />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link textColor" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
              <li className="page-item"><a class="page-link textColor" href="#">1</a></li>
              <li className="page-item"><a class="page-link textColor" href="#">2</a></li>
              <li className="page-item"><a class="page-link textColor" href="#">3</a></li>
              <li className="page-item">
              <a className="page-link textColor" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <SeccionTxt />
        <SeccionImg />
        <SeccionImg />
      </div>
    </div>
  );
}
