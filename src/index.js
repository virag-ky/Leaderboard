/* eslint-disable */
import _ from "lodash";
/* eslint-enable */

import sendData from "../modules/submit.js";
import getData from "../modules/refresh.js";

const submitBtn = document.getElementById("submit");
const refreshBtn = document.getElementById("refresh");

window.addEventListener("DOMContentLoaded", () => {
  submitBtn.addEventListener("submit", sendData);
  refreshBtn.addEventListener("click", getData);
});
