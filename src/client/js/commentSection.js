const videoContainer = document.querySelector("#videoContainer");
const form = document.querySelector("#commentForm");
const submitBtn = form.querySelector("button");

const addComment = (text) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.className = "video__comment";
  const span = document.createElement("span");
  const avatar = document.createElement("img");
  span.innerText = text;
  newComment.appendChild(span);
  newComment.appendChild(avatar);
  videoComments.prepend(newComment);
};
const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const { status } = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  textarea.value = "";
  if (status === 201) {
    addComment(text);
  }
};

const handleKeypress = (event) => {
  const key = event.code;
  if (key === "Enter") {
    submitBtn.click();
  }
  return;
};

if (form) {
  form.addEventListener("submit", handleSubmit);
  form.addEventListener("keypress", handleKeypress);
}
