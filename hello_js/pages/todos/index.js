import Link from "next/link";
import styles from "../../styles/Todos.module.css";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await data.json();
  return {
    props: { todos },
  };
}

export default function Todos({ todos }) {
  return (
    <>
      <h1>Tarefas para fazer:</h1>
      <ul className={styles.todoslist}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <Link href={`todos/${todo.id}`}> ver mais</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
