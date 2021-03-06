//Importacion del hook proporcionado por Auth0.
import { useAuth0 } from "@auth0/auth0-react";
import style from '../../styles/auth/Logout.module.scss';

//Componente padre para la salida del usuario
const LogoutButton = () => {
  //Uso del hook, para sacar al usuario de la applicacion con Auth0.
  const { logout } = useAuth0();

  //Boton para ejecutar la salida del usuario, manualmente.
  return (
    <button onClick={
      () => logout({ returnTo: window.location.origin })
    }
    className={ style.button }
    >
      Log Out
    </button>
  );
};

//Exportacion del componente LogoutButton
export default LogoutButton;