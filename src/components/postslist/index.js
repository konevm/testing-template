import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { tasksStore } from "../../store";

export const PostsList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ).then((res) => res.json());
        tasksStore.setTaskData(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (data.length === 0) {
    return <h2>Пока нет ничего</h2>;
  }

  return (
    <div>
      <h1>Simple posts</h1>
      {data.map((todo) => (
        <div key={todo.id}>
          <Link to={`post/${todo.id}`}>
            <h2 style={{ color: "red" }}>{todo.title}</h2>
          </Link>
          <p>{todo.body}</p>
        </div>
      ))}
    </div>
  );
};
