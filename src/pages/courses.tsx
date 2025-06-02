import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

import { Footer } from "../components/footer";
import { Header } from "../components/header";

import type { CourseProps } from "../types/courses";
import { coursesData } from "../data/courses";

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
          <button
            className="bg-cyan-700 hover:bg-cyan-600 px-4 py-2 text-white rounded-md mt-3"
            onClick={() => setRefresh(refresh + 1)}
          >
            Actualisar Lista
          </button>
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
              <p className="text-gray-700 mb-4">
                Duração: {course.durationInHours}
              </p>
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
