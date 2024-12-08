export default {
  title: 'Spectral Hub',
  description: 'Spectral Hub Official',
  base: '/Spectral-Hub-Site/',
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/MuradKil/Spectral-Hub-Site/refs/heads/main/docs/images/spectralicon.png',
    sidebar: [
      {
        text: 'Spectral Hub',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Scripts', link: '/scripts' }
        ]
      }
    ]
  },
  markdown: {
      lineNumbers: true, 
  }
};