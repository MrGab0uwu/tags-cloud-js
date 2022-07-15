const TagCloud = require('TagCloud');

const container = '.tagcloud';
const texts = [
    '3D', 'TagCloud', 'JavaScript',
    'CSS3', 'Animation', 'Interactive',
    'Mouse', 'Rolling', 'Sphere',
    '6KB', 'v2.x', 'GSAP', 'ReactJS',
    'VueJS'
];


const responsiveRadius = () => {
  const screen = window.innerWidth;
  if(screen <= 400) return screen - screen*.58;
  if(screen <= 700) return screen - screen*.65;
  else return screen - screen*.75;
}

let cloudContainer;
const createTagCloud = () => {

  if(cloudContainer) cloudContainer.destroy();

  const options = {
    radius: responsiveRadius(),
    maxSpeed: 'fast',
    itemClass: 'tagcloud--item-text',
  };
  
  cloudContainer = new TagCloud(container, texts, options);
}

createTagCloud();

window.addEventListener('resize', createTagCloud);