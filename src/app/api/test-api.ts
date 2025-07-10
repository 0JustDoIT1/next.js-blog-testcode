import { getFetch } from "@/lib/fetch/get-fetch";

export const TestFetchApi = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (res) => {
      if (!res.ok) {
        throw new Error("Error");
      }

      return res.json();
    }
  );
};

export const TestFetchApi2 = async (id: string) => {
  return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error("Error");
      }

      return res.json();
    }
  );
};

const isServer = () => typeof window === "undefined";

export const FetchModuleApi = async (id: string) => {
  return await getFetch(isServer(), `/todos/${id}`);
};
