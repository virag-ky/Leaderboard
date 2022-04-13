/* eslint-disable */
import _ from "lodash";
/* eslint-enable */

import './style.css';

import { setScores } from '../modules/submit.js';
import displayScores from '../modules/refresh.js';

const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');
const player = document.getElementById('name');
const score = document.getElementById('score');
const errorMessage = document.getElementById('error');
const regex1 = /^\s+$/;
const regex2 = /^[0-9]+$/;

errorMessage.style.display = 'none';

window.addEventListener('DOMContentLoaded', () => {
  displayScores();

  refreshBtn.addEventListener('click', () => {
    displayScores();
  });

  submitBtn.addEventListener('click', () => {
    if (player.value.length === 0 || player.value.match(regex1)) {
      return;
    }

    if (!score.value.match(regex2)) {
      errorMessage.style.display = 'block';
      errorMessage.style.color = 'yellow';
      errorMessage.style.fontSize = '12px';
      errorMessage.style.lineHeight = '24px';
      return;
    }
    errorMessage.style.display = 'none';

    setScores(player.value, score.value);
    player.value = '';
    score.value = '';
  });
});
