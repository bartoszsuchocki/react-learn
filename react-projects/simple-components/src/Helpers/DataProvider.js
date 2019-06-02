const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
function getTodoTasks(successHandler, errorHandler){
    fetch(TODOS_URL)
    .then(resp => {
        return resp.json();
    })
    .then(successHandler,errorHandler);  
}
export {getTodoTasks};