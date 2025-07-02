import "server-only";

export const serverSideFunction = () => {
  console.log(
    `use client windows objects,
        use multiple libraries,
        use environment variables,
        interact with a database,`
  );
  return "client result";
};
