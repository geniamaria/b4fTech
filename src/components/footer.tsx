export const Footer = () => {
  return (
    <>
      <footer className="bg-cyan-900 text-sm h-[100px] text-white">
        <div className="flex justify-between items-center p-10">
          <p>
            &copy;{new Date().getFullYear()} plataforma de Cursos. Todos os
            direitos reservados.
          </p>
          <p> Desenvolvido por TechZone</p>
        </div>
      </footer>
    </>
  );
};
