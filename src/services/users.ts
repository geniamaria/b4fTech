import type { UserProps } from "../types/users";

const host = import.meta.env.VITE_API_HOST;
//para buscar todos usuarios
export async function getUsers(): Promise<UserProps[] | undefined> {
  try {
    const response = await fetch(`${host}/users/`);
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error(error);
  }
}

//para buscar um usuario
export async function getUser({
  id,
}: {
  id: number;
}): Promise<UserProps | undefined> {
  try {
    const response = await fetch(`${host}/users/${id}`);
    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error(error);
  }
}

//criar um usuario
export async function createUser({
  data,
}: {
  data: { name: string; email: string; password: string };
}): Promise<UserProps | undefined> {
  try {
    const response = await fetch(`${host}/users/`, {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    return result.user;
  } catch (error) {
    console.error(error);
  }
}
