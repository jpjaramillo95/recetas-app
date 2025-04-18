import "./../assets/estilos.css";

export default function Header() {
  return (
    <div>
      <div className="p-5 bg-white text-black text-center">
        <h1>
            <img className="logo" src={"https://www.divinacocina.es/wp-content/uploads/2020/07/divina-cocina.png"} alt="" />
        </h1>
        <h5>Recetas Sencillas Para Alegrarte La Vida</h5>
      </div>
    </div>
  );
}
