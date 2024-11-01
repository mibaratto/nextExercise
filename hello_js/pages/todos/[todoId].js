import Link from "next/link";

import { useRouter } from "next/router";

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );

  const todo = await data.json();
  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Todo({ todo }) {
  // const router = useRouter();
  // const todoId = router.query.todoId;

  return (
    <>
      <Link href="/todos">voltar</Link>
      <h1>Show todo id: {todo.id} </h1>
      <p>Título: {todo.title}</p>
      <p>
        coments: aaaa...
        <Link href={`/todos/${todo.id}/comments/1`}>Details</Link>
      </p>
      <p>
        coments: eeeee...
        <Link href={`/todos/${todo.id}/comments/2`}>Details</Link>
      </p>
      <p>
        coments: ooooo...
        <Link href={`/todos/${todo.id}/comments/3`}>Details</Link>
      </p>
    </>
  );
}
