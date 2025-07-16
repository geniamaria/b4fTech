"use client";

import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-10">
        <section className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-cyan-900 mb-4">
            Sobre o Projeto
          </h1>
          <p className="text-lg leading-relaxed">
            Esta página tem como objetivo apresentar informações sobre a aplicação,
            sua missão, visão e o propósito da comunidade que a sustenta. Nosso foco
            é promover a colaboração, aprendizado e crescimento mútuo entre os
            usuários por meio de tecnologias acessíveis e modernas.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};
