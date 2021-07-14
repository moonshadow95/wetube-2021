let videos = [
  {
    title: 'Video #1',
    rating: 5,
    comments: 2,
    creatAt: '2 minutes ago',
    views: 512,
    id: 1,
  },
  {
    title: 'Video #2',
    rating: 5,
    comments: 2,
    creatAt: '2 minutes ago',
    views: 1,
    id: 2,
  },
  {
    title: 'Video #3',
    rating: 5,
    comments: 2,
    creatAt: '2 minutes ago',
    views: 1,
    id: 3,
  },
  {
    title: 'Video #4',
    rating: 5,
    comments: 2,
    creatAt: '2 minutes ago',
    views: 512,
    id: 4,
  },
  {
    title: 'Video #5',
    rating: 5,
    comments: 2,
    creatAt: '2 minutes ago',
    views: 512,
    id: 5,
  },
];

export const recommended = (req, res) => {
  return res.render('home', { pageTitle: 'Home', videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render('watch', { pageTitle: `Watching ${video.title}`, video });
};
export const edit = (req, res) => res.render('edit', { pageTitle: 'Edit' });
export const search = (req, res) => res.send('Search');
export const upload = (req, res) => res.send('Upload');
export const deleteVideo = (req, res) => res.send('Delete Video');
