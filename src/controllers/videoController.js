export const recommended = (req, res) => {
  const videos = [
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
      views: 512,
      id: 1,
    },
    {
      title: 'Video #3',
      rating: 5,
      comments: 2,
      creatAt: '2 minutes ago',
      views: 512,
      id: 1,
    },
    {
      title: 'Video #4',
      rating: 5,
      comments: 2,
      creatAt: '2 minutes ago',
      views: 512,
      id: 1,
    },
    {
      title: 'Video #5',
      rating: 5,
      comments: 2,
      creatAt: '2 minutes ago',
      views: 512,
      id: 1,
    },
  ];
  return res.render('home', { pageTitle: 'Home', videos });
};
export const see = (req, res) => res.render('watch', { pageTitle: 'Watch' });
export const edit = (req, res) => res.render('edit', { pageTitle: 'Edit' });
export const search = (req, res) => res.send('Search');
export const upload = (req, res) => res.send('Upload');
export const deleteVideo = (req, res) => res.send('Delete Video');
