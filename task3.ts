// Написать функции loadTodos, которая принимает массив todo и возвращает массив id, если же запрос упал, тогда возвращает null

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function loadTodo(num: number): Promise<Todo | null> {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`);

  if (data.ok) {
    const result: Todo = await data.json();

    return result;
  }

  return null;
}

async function loadTodos(nums: number[]): Promise<(number | null)[]> {
  const todos = await Promise.all(nums.map((num) => loadTodo(num)));

  return todos.map((todo) => (todo ? todo.id : null));
}

loadTodos([1, 2, 3]).then((result) => console.log(result)); // [1, 2, 3] или [1, null, 3]
