// Image Carousel Setup
const images = [
    'https://picsum.photos/seed/1/400/250',
    'https://picsum.photos/seed/2/400/250',
    'https://picsum.photos/seed/3/400/250',
    'https://picsum.photos/seed/4/400/250'
  ];
  let currentImage = 0;
  
  function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById('carousel-image').src = images[currentImage];
  }
  
  // Fetch Joke with Dynamic Theme
  async function fetchJoke() {
    const spinner = document.getElementById('loading-spinner');
    const jokeText = document.getElementById('joke-text');
    spinner.classList.remove('hidden');
    jokeText.textContent = '';
  
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
  
      setTimeout(() => {
        jokeText.textContent = `${data.setup} 🤔 ... ${data.punchline} 😂`;
        spinner.classList.add('hidden');
        changeTheme();
      }, 1500);
  
    } catch (error) {
      jokeText.textContent = 'Oops! Could not fetch a joke.';
      spinner.classList.add('hidden');
    }
  }
  
  // Change Background Randomly on Every Joke
  function changeTheme() {
    const colors = [
      'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
      'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
      'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)'
    ];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
  }
  