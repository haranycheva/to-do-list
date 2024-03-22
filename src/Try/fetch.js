const BASE__URL = "https://65ef66c8ead08fa78a5065ee.mockapi.io/tasks";

export function postToDo(task) {
  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(task),
  };
  return fetch(`${BASE__URL}`, options).then((res) => res.json());
}

export function deleteToDo(idToDelete) {
    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    return fetch(`${BASE__URL}/${idToDelete}`, options).then((res) => res.json());
  }

export function getToDo() {
  return fetch(`${BASE__URL}`).then((res) => res.json());
}
