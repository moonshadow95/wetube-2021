const videoContainer = document.querySelector("#videoContainer");
const form = document.querySelector("#commentForm");
const submitBtn = form.querySelector("button");

const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  textarea.value = "";
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
