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
