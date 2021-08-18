const videoContainer = document.querySelector("#videoContainer");
const form = document.querySelector("#commentForm");
const submitBtn = form.querySelector("button");

const addComment = (text, newCommentId, user, createdAt) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  const avatarUrl = user.avatarUrl;
  const commentMetadata = document.createElement("div");
  const divCol1 = document.createElement("div");
  const divCommentText = document.createElement("div");
  const commentOwner = document.createElement("span");
  const commentCreatedAt = document.createElement("span");
  const commentText = document.createElement("span");
  const button = document.createElement("button");
  const deleteBtn = document.createElement("i");
  newComment.dataset.id = newCommentId;
  newComment.className = "video__comment";
  commentMetadata.className = "comment__metadata";
  divCommentText.className = "comment__text";
  commentOwner.className = "comment__owner";
  commentCreatedAt.className = "comment__createdAt";
  button.className = "comment__delete";
  deleteBtn.className = "far fa-trash-alt";

  newComment.appendChild(commentMetadata);
  commentMetadata.appendChild(divCol1);
  divCol1.appendChild(commentOwner);
  commentOwner.innerText = user.username;
  divCol1.appendChild(commentCreatedAt);
  commentCreatedAt.innerText = createdAt.substr(0, 19);
  commentMetadata.appendChild(divCommentText);
  button.prepend(deleteBtn);
  divCommentText.appendChild(commentText);
  commentText.innerText = text;
  divCommentText.appendChild(button);
  videoComments.prepend(newComment);

  if (!user.avatarUrl) {
    const defaultAvatar = document.createElement("i");
    defaultAvatar.className = "fas fa-user-circle";
    defaultAvatar.classList.add("comment__default-avatar");
    newComment.prepend(defaultAvatar);
  } else {
    const avatar = document.createElement("img");
    avatar.src = `/${avatarUrl}`;
    avatar.className = "comment__avatar";
    newComment.prepend(avatar);
  }
};
const handleSubmit = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    const { newCommentId, user, createdAt } = await response.json();
    textarea.value = "";
    addComment(text, newCommentId, user, createdAt);
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
