import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import "./post.module.scss";
import { tasksStore } from "../store";

const fetchPosts = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((result) => result.json())
    .catch((error) => console.log(error));

const Post = observer(() => {
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetchPosts(id).then((data) => setData(data));
  }, [id]);

  console.log(tasksStore.tasks);

  if (!data?.id) {
    return <span>Нет ничего</span>;
  }
  return (
    <div>
      <Link to="/">{`< Назад`}</Link>
      <h1>{data.title}</h1>
      <span>{data.body}</span>
    </div>
  );
});

export { Post };
