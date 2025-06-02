"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  userName: z.string().min(2, {
    message: "O Nome deve ter pelo menos 2 caracteris.",
  }),
  subject: z.string().min(2, {
    message: "O Assunto e obrigatorio.",
  }),
  email: z.string().min(2, {
    message: "Email Invalido.",
  }),
  message: z.string().min(2, {
    message: "Messagem muito curta.",
  }),
});

export const Contactos = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      subject: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <div className="max-w-2xl  w-130 mx-auto p-5 bg-white shadow-md rounded-lg mt-20">
        <h1 className="text-cyan-700 text-3xl font-medium">Contacte-nos</h1>
        <p>
          Precisa de ajuda? Entre em contacto connosco e responderemos o mais.
        </p>
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
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assunto</FormLabel>
                  <FormControl>
                    <Input placeholder="Assunto" {...field} />
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
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Mensagem" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-cyan-600 to-cyan-900 w-130 text-center"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};
