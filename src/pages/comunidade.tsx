import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { UserTable } from "@/components/userTable";

export const Comunidade = () => {
  return (
    <>
      <div>
        <Header />
        <main className="flex-1">
          <h1 className=" text-cyan-900 font-bold mx-auto">
            Usuários da comunidade
          </h1>
          <UserTable />
        </main>
        <Footer />
      </div>
    </>
  );
};
