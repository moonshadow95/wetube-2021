let videos = [
  {
    title: "Video #1",
    rating: 5,
    comments: 2,
    creatAt: "2 minutes ago",
    views: 512,
    id: 0,
  },
  {
    title: "Video #2",
    rating: 5,
    comments: 2,
    creatAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Video #3",
    rating: 5,
    comments: 2,
    creatAt: "2 minutes ago",
    views: 1,
    id: 2,
  },
  {
    title: "Video #4",
    rating: 5,
    comments: 2,
    creatAt: "2 minutes ago",
    views: 512,
    id: 3,
  },
  {
    title: "Video #5",
    rating: 5,
    comments: 2,
    creatAt: "2 minutes ago",
    views: 512,
    id: 4,
  },
];

export const recommended = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  // here i will add a video to the videos array
  const newVideo = {
    title: req.body.title,
    rating: 5,
    comments: 2,
    creatAt: "2 minutes ago",
    views: 512,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
