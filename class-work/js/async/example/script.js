async function getPosts() {
  let loading = false;
  console.log("Загрузка");
  try {
    loading = true;
    console.clear();
    const response = await fetch("https://2jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    console.log(result);
  } catch (e) {
    console.log(e + " Ошибка");
  } finally {
    loading = false;
    console.log("finally");
  }
}
console.log("1");
getPosts();
console.log("2");
