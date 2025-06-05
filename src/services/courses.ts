import type { CourseProps } from "../types/courses";

const host = import.meta.env.VITE_API_HOST;
//para buscar todos usuarios
export async function getUsers(): Promise<CourseProps[] | undefined> {
  try {
    const response = await fetch(`${host}/Courses/`);
    const data = await response.json();
    return data.Courses;
  } catch (error) {
    console.error(error);
  }
}

//para buscar um usuario
export async function getCouse({
  id,
}: {
  id: number;
}): Promise<CourseProps | undefined> {
  try {
    const response = await fetch(`${host}/Courses/${id}`);
    const data = await response.json();
    return data.Course;
  } catch (error) {
    console.error(error);
  }
}

//criar um usuario
export async function createCouse({
  data,
}: {
  data: {
    id: string;
    title: string;
    description: string;
    duration: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    language: string;
    isFree: boolean;
  };
}): Promise<CourseProps | undefined> {
  try {
    const response = await fetch(`${host}/courses/`, {
      method: "POST",
      body: JSON.stringify({
        id: data.id,
        title: data.title,
        description: data.description,
        duration: data.duration,
        level: data.level,
        language: data.language,
        isFree: data.isFree,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    return result.Course;
  } catch (error) {
    console.error(error);
  }
}
