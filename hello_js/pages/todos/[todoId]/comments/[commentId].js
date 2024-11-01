import Link from "next/link";
import { useRouter } from "next/router";

export default function Comment() {
  const router = useRouter();

  const todoId = router.query.todoId;
  const commentId = router.query.commentId;

  return (
    <>
      <Link href={`/todos/${todoId}`}>back</Link>
      <h1>Show comment number: {commentId}</h1>
      <p>task: {todoId}</p>
    </>
  );
}
