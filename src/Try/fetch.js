import axios from "axios";

axios.defaults.baseURL = "https://65ef66c8ead08fa78a5065ee.mockapi.io/tasks";

export async function postToDo(task) {
  const res =  await axios.post("", task)
  return res.data
}

export function deleteToDo(idToDelete) {
    return axios.delete(`/${idToDelete}`)
  }

export async function getToDo() {
  const res = await axios.get("")
  return res.data
}
