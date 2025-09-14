import { nanoid } from 'nanoid';
import refs from './refs';
console.log(refs);

const KEY_LOCALSTORAGE = 'localNotes';
// let arrObj = [];
// if (localStorage.getItem(KEY_LOCALSTORAGE)) {
//   arrObj = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
// }
const arrObj = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)) ?? [];
console.log(arrObj);

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const { taskName, taskDescription } = event.target.elements;

  const object = {
    id: nanoid(),
    taskName: taskName.value,
    taskDescription: taskDescription.value,
  };

  arrObj.push(object);
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(arrObj));
  console.log(localStorage);
});
