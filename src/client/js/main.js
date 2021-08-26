import "regenerator-runtime";
import "../scss/styles.scss";
import { displayedAt } from "./createdAtFormat";

const createdAts = document.querySelectorAll(".createdAt");
const video = document.querySelector("video");

if (video) {
  video.setAttribute("crossorigin", "");
}

createdAts.forEach((item) => {
  const createdAt = item.innerText;
  const span = item;
  span.innerText = displayedAt(createdAt);
});
