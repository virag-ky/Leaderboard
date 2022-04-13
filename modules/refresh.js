import { setData } from './submit.js';

const listContainer = document.getElementById('list-container');

const displayScores = () => {
  listContainer.innerHTML = '';
  setData().then((result) => {
    const orderScores = result.result.sort((a, b) => b.score - a.score);
    orderScores.forEach((score) => {
      const li = document.createElement('li');
      li.innerHTML = `<li>${score.user}: ${score.score}</li>`;
      li.style.listStyle = 'none';
      listContainer.appendChild(li);
    });
  });
};

export default displayScores;
