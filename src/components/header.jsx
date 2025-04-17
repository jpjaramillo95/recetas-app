import "./../assets/estilos.css";

export default function Header() {
  return (
    <div>
      <div className="p-5 bg-primary text-white text-center">
        <h1>
            <img className="logo" src={"https://png.pngtree.com/png-clipart/20240615/original/pngtree-a-chefs-logo-with-face-vector-png-image_15329716.png"} alt="" />
            Restaurante Don Jediondo</h1>
        <p>Lo mejor en gastronomia Chilapa</p>
      </div>
    </div>
  );
}
