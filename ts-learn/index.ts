import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  // todo 有 id, title, completed
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    这个todo的ID为: ${id},
    它的标题是: ${title},
    是否完成: ${completed}
  `);
}