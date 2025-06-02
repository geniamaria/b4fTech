import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-5 bg-slate-100">
        <section className="flex  h-[400px]  overflow-hidden">
          <div>
            <img src="/img/techZone.jpg" alt="" className="w-50" />
          </div>
          <div className="text-black p-10  ">
            <p>Bem-vindo a nossa Plataforma de cursos!</p>
            <p>Explore nossos cursos e aprenda algo novo hoje mesmo.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
