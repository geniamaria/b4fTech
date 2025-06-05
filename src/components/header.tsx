import { NavLink } from "react-router-dom";
//import { Button } from "./ui/button";

//import { useSession } from "../context/sessionContext";

export const Header = () => {
  //const { isUserAuthenticated, toggleAuthentication } = useSession();
  return (
    <>
      <header>
        <div
          className="flex justify-between
       items-center  bg-gradient-to-r from-cyan-500 to-cyan-900   text-white p-4"
        >
          <h1 className="text-2xl font-bold text-cinha-200"> B4F TechZone</h1>
          <div
            className="flex justify-around
       items-center gap-3 text-white p-2 "
          >
            <nav className="flex gap-4 text-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-300 hover:text-cyan-300"
                    : "hover:text-cyan-300"
                }
              >
                Inicio
              </NavLink>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-300 hover:text-cyan-300"
                    : "hover:text-cyan-300"
                }
              >
                Cursos
              </NavLink>
              <NavLink
                to="/comunidade"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-300 hover:text-cyan-300"
                    : "hover:text-cyan-300"
                }
              >
                Comunidade
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-300 hover:text-cyan-300"
                    : "hover:text-cyan-300"
                }
              >
                Sobre
              </NavLink>
              <NavLink
                to="/contactos"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-300 hover:text-cyan-300"
                    : "hover:text-cyan-300"
                }
              >
                Contacto
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-300 hover:text-cyan-300"
                    : "hover:text-cyan-300"
                }
              >
                <button className="bg-white text-cyan-600 rounded-2xl p-2 ">
                  Iniciar Sessao
                </button>
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
