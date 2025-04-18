import "./../assets/estilos.css"
import "./../assets/menu"

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-sm bgColor navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="menuItem nav-link active" href="#">
              INICIO
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="menuItem nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CATEGORIAS
            </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">ENSALADAS Y ALIÑOS</a></li>
                <li><a className="dropdown-item" href="#">ENTRANTES Y TAPAS</a></li>
                <li><a className="dropdown-item" href="#">MASAS Y PANES</a></li>
                <li><a className="dropdown-item" href="#">ARROCES</a></li>
                <li><a className="dropdown-item" href="#">PASTAS</a></li>
                <li><a className="dropdown-item" href="#">HUEVOS</a></li>
                <li><a className="dropdown-item" href="#">SOPAS Y CREMAS</a></li>
                <li><a className="dropdown-item" href="#">VERDURAS</a></li>
                <li><a className="dropdown-item" href="#">LEGUMBRES Y COCIDOS</a></li>
                <li><a className="dropdown-item" href="#">PESCADOS Y MARISCOS</a></li>
                <li><a className="dropdown-item" href="#">CARNE</a></li>
                <li><a className="dropdown-item" href="#">POLLO Y AVES</a></li>
                <li><a className="dropdown-item" href="#">SALSAS Y GUARNICIONES</a></li>
                <li><a className="dropdown-item" href="#">POSTRES</a></li>
                <li><a className="dropdown-item" href="#">BEBIDAS</a></li>
                <li><a className="dropdown-item" href="#">DESAYUNOS</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="menuItem nav-link active" href="#">
              RECETAS PARA FREIDORA DE AIRE
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="menuItem nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              BLOG
            </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">CUADERNO DE COCINA</a></li>
                <li><a className="dropdown-item" href="#">IDEAS Y MENÚS</a></li>
                <li><a className="dropdown-item" href="#">TRUCOS Y TÉCNICAS DE COCINA</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="menuItem nav-link active" href="#">
              VIDEO RECETAS
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="menuItem nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              RECETAS TEMPORADA
            </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">RECETAS DE SEMANA SANTA</a></li>
                <li><a className="dropdown-item" href="#">RECETAS DE PRIMAVERA</a></li>
                <li><a className="dropdown-item" href="#">RECETAS DE VERANO</a></li>
                <li><a className="dropdown-item" href="#">RECETAS DE OTOÑO</a></li>
                <li><a className="dropdown-item" href="#">RECETAS DE INVIERNO</a></li>
                <li><a className="dropdown-item" href="#">RECETAS PARA HALLOWEEN</a></li>
                <li><a className="dropdown-item" href="#">RECETAS DE NAVIDAD</a></li>
                <li><a className="dropdown-item" href="#">10 MENÚS DE NAVIDAD</a></li>
            </ul>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li> */}
        </ul>
        <div className="d-flex justify-content-end align-items-center">
          <button className="btn" id="searchButton" type="button">
            <i className="bi bi-search"><img className="lupa" src={"https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png"} alt="" /></i>
          </button>
          <input type="text" className="form-control d-none ms-2" id="searchInput" placeholder="Ingresa tu búsqueda..."/>
        </div>
      </div>
    </nav>
  );
}
