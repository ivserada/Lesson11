// Написать функцию, которая отправляет запрос и выводит результат в консоль, в случае ошибки возвратить null
// Нужны только данные с completed === true
// Добавить логи по этапам
// Добавить искусственную задержку в две секунду
// https://jsonplaceholder.typicode.com/todos

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}[];

function delay(time: number) {
  const promiseTimer = new Promise((res) => {
    setTimeout(() => res(null), time);
  });
  return promiseTimer;
}
async function request() {
  console.log("start request");
  await delay(2000);
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (response.ok) {
    console.log("get data");
    const data: Data = await response.json();
    console.log("filter data");
    const filteredData = data.filter((v) => v.completed);
    return filteredData;
  }
  return null;
}
request().then(console.log);
