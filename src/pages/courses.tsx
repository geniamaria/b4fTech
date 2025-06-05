import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Footer } from "../components/footer";
import { Header } from "../components/header";

import type { CourseProps } from "../types/courses";
import { coursesData } from "../data/courses";
const formSchema = z.object({
  title: z.string().min(2, {
    message: "O Nome deve ter pelo menos 2 caracteris.",
  }),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  language: z.string().min(2, {
    message: "Selecione 1 idioma.",
  }),
  message: z.string().min(2, {
    message: "Messagem muito curta.",
  }),
  description: z.string().min(2, {
    message: "Messagem muito curta.",
  }),
  duration: z.number().min(1).max(100),

  category: z.enum(["free", "comfortable"]),
});

export const Courses = () => {
  const [refresh, setRefresh] = useState(0);
  const [Courses, setCouses] = useState<CourseProps[]>([]);
  useEffect(() => {
    setCouses(coursesData);
  }, [refresh]);
  function handleCourseSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const searchQuery = form.get("search") as string;
    const filteredCourses = coursesData.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCouses(filteredCourses);
  }
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      level: "beginner",
      description: "",
      duration: 1,
      message: "",
      category: "free",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Header />
      <main className="min-h-screen p-5 bg-slate-100">
        <div className="flex justify-between items-center mb-5">
          <form
            onSubmit={handleCourseSearch}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              name="search"
              required
              placeholder="Procurar curso..."
              className="outline-1 outline-cyan-700 border border-gray-300 rounded-md py-2 px-5 "
            />
            <MagnifyingGlassIcon className="w-6 h-6 -ml-9 text-gray-500" />
          </form>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="bg-cyan-700 hover:bg-cyan-600 px-4 py-2 text-white rounded-md mt-3"
              onClick={() => setRefresh(refresh + 1)}
            >
              Actualisar Lista
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-cyan-700 hover:bg-cyan-600 px-4 py-2 text-white rounded-md mt-3"
                  onClick={() => setRefresh(refresh + 1)}
                >
                  Adicionar Curso
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle> Adicionar Curso</DialogTitle>
                  <DialogDescription>
                    Adicione um novo curso, e no final clique em adicionar
                    quando terminar.
                  </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="title">Titulo</Label>
                          <FormControl>
                            <Input
                              id="title"
                              defaultValue="Pedro Duarte"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="level"
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="level">Nivel</Label>
                          <FormControl>
                            <Select {...field}>
                              <SelectTrigger
                                className="w-[380px]"
                                id="level"
                                name="level"
                              >
                                <SelectValue placeholder="Selecione o Nivel" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup {...field}>
                                  <SelectLabel>Niveis</SelectLabel>
                                  <SelectItem value="beginner">
                                    Iniciante
                                  </SelectItem>
                                  <SelectItem value="intermediate">
                                    Intermediário
                                  </SelectItem>
                                  <SelectItem value="advanced">
                                    Avançado
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="language">Idioma</Label>
                          <FormControl>
                            <Select {...field}>
                              <SelectTrigger className="w-[380px]" id="name-1">
                                <SelectValue placeholder="Selecione o Nivel" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Idioma</SelectLabel>
                                  <SelectItem value="portuguese">
                                    Português
                                  </SelectItem>
                                  <SelectItem value="english">
                                    Inglês
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
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
                    <FormField
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Duração</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select {...field}>
                              <SelectTrigger
                                className="w-[380px]"
                                id="level"
                                name="level"
                              >
                                <SelectValue placeholder="Selecione o Nivel" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Categoria</SelectLabel>
                                  <SelectItem value="free">Pago</SelectItem>
                                  <SelectItem value="comfortable">
                                    Gratuito
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          variant="outline"
                          className="bg-cyan-700 hover:bg-cyan-600 px-4 py-2 text-white rounded-md mt-3"
                        >
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button
                        className="bg-cyan-700 hover:bg-cyan-600 px-4 py-2 text-white rounded-md mt-3"
                        type="submit"
                      >
                        Adicionar
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <h1 className="text-cyan-700 text-3xl font-medium"> Nossos Cursos </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5">
          {Courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-4"> Nivel: {course.level}</p>
              <p className="text-gray-700 mb-4"> Idioma: {course.language}</p>
              <p className="text-gray-700 mb-4">Duração: {course.duration}</p>
              <p
                className={`bg-white shadow-md w-fit rounded-lg p-3 ${
                  course.isFree
                    ? "text-green-500"
                    : "bg-yellow-500 text-white font-bold"
                }`}
              >
                {course.isFree ? "Gratuito" : "Pago"}
              </p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};
