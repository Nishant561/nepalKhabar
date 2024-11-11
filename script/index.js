const links = [
  "गृहपृष्‍ठ",
  "राजनीति",
  "समाज",
  "कारोबार",
  "कला",
  "खेल",
  "विचार",
  "ब्लग",
  "विशेष",
  "ग्लोबल",
];

const unicode = [
    "युनिकोड",
    "ENGLISH",
    "हङकङ",
    "संग्रह"
]

const hastagLinks = [

"हङकङ",
"वर्षा",
"नेपाली कांग्रेस",
"नेकपा एमाले",
"राशिफल",
"दुर्घटना",
"तापक्रम",
"अमेरिका",
"उपनिर्वाचन",
"रास्वपा"

]

const linksContainer = document.querySelector(".links");
const hastagContainer = document.querySelector(".hashtag-container");

function addLinks() {
  const links_ul = document.createElement("ul");
  const closeButton = document.createElement("button")
  const unicode_ul = document.createElement("ul")
    const hastag_ul = document.createElement("ul")
  links_ul.classList.add('page-links','slider');
  const lists = links
    .map((items) => `<li><a href="#">${items}</a></li>`)
    .join("");

    links_ul.innerHTML = lists;

    closeButton.classList.add('closeNav')
    closeButton.innerText = "Close"

    links_ul.appendChild(closeButton)

    unicode_ul.classList.add('unicode','page-links')
    
    const unicode_list = unicode.map((items)=>(
        `<li><a href="#">${items}</a></li>`
    )).concat(`<i style="cursor:pointer; font-size:1.2rem; color:gray;" class="fa-solid fa-magnifying-glass"></i>`).join('')
    

    unicode_ul.innerHTML = unicode_list

    hastag_ul.classList.add('hastags')
    const hastag_list = hastagLinks.map((items)=>(
        `<li><a href='#'>#${items} </a> </li>`
    )).join('')
    hastag_ul.innerHTML = hastag_list

  linksContainer.appendChild(links_ul);
  linksContainer.appendChild(unicode_ul);
  hastagContainer.appendChild(hastag_ul)





}
addLinks();


// making the sliding nav bar
const hamButton = document.querySelector('.ham-burger')
const sliderNav =document.querySelector('.slider')
hamButton.addEventListener('click',()=>{
    sliderNav.style.left = "0%"
})

const closeButton = document.querySelector('.closeNav')

closeButton.addEventListener('click',()=>{
  sliderNav.style.left = "-100%"
  console.log("hello")
})