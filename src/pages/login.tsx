"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const formSchema = z.object({
  userName: z.string().min(2, {
    message: "O Nome deve ter pelo menos 2 caracteris.",
  }),
  email: z.string().min(2, {
    message: "Email Invalido.",
  }),
  Password: z.string().min(2, {
    message: "Messagem muito curta.",
  }),
});

export const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      Password: "",
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <Header />
      <main className=" h-screen">
        <div className="max-w-2xl  w-130 mx-auto p-5 bg-white shadow-md rounded-lg mt-20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-gradient-to-r from-cyan-600 to-cyan-900 w-130 text-center"
              >
                Entrar
              </Button>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </>
  );
};
