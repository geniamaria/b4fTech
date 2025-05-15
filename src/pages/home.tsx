import { Footer } from "../components/footer";
import { Header } from "../components/header";


export const Home=()=>{
    return(
        <>
        <Header/>
        <main>
            <section>
                <div>
                <img src="/img/techZone.jpg" alt=""/>
                </div>
                <div>
                    <p>
                        Bem-vindo a nossa Plataforma de cursos!
                    </p>
                    <p>
                        Explore  nossos cursos e aprenda algo novo hoje mesmo.
                    </p>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}