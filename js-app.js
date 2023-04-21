const menuBar = document.querySelector('#menu-bar');
const xIcon = document.querySelector('#x-icon');
const popupList = document.querySelector('.popup-list');

xIcon.style.display = 'none';
popupList.style.display = 'none';

menuBar.addEventListener('click', () => {
  xIcon.style.display = 'block';
  popupList.style.display = 'block';
  menuBar.style.display = 'none';
});

xIcon.addEventListener('click', () => {
  menuBar.style.display = 'block';
  popupList.style.display = 'none';
  xIcon.style.display = 'none';
});

const cards = [{
  card: 1,
  image: './images/Snapshoot Portfolio (2).png',
  heading: 'Tonic',
  paragraph: 'A daily selection of privately personalised reads; no accounts or sign-ups required',
  application: 'CANOPY',
  stack: 'Back End Dev',
  year: '2015',
  languages: ['html', 'css', 'javascript'],
  button: 'See Project',
},
{
  card: 2,
  image: './images/Snapshoot Portfolio (2).png',
  heading: 'Multi-Post Stories',
  paragraph: 'Experiemental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends',
  application: 'FACEBOOK',
  stack: 'Full Stack Dev',
  year: '2015',
  languages: ['html', 'ruby on rails', 'css', 'javascript'],
  button: 'See Project',
},
{
  card: 3,
  image: './images/Snapshoot Portfolio (1).png',
  heading: 'Facebook 360',
  paragraph: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR",
  application: 'FACEBOOK',
  stack: 'Full Stack Dev',
  year: '2015',
  languages: ['html', 'ruby on rails', 'css', 'javascript'],
  button: 'See Project',
},
{
  card: 4,
  image: './images/Snapshoot Portfolio (3).png',
  heading: 'Uber Navigation',
  paragraph: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  application: 'Uber',
  stack: 'Lead Developer',
  year: '2015',
  languages: ['html', 'ruby on rails', 'css', 'javascript'],
  button: 'See Project',
}];

let detailsForPopUpDiv = document.createElement("div");
let popClose = document.querySelector("#close");

const popUpDiv = (element) => {

    detailsForPopUpDiv.innerHTML = `
        <div class="pop-up-div">
            
            <i class="bi bi-x-lg" id="close"></i>
            
            <div class="pop-up-div-container">
            <div class="pop-up-div-container-details-heading">
            <h1>${element.heading}</h1>
            </div>
            <div class="pop-up-div-container-details-details">
                    <h3>${element.application}</h3>
                    <li></li>
                    <h4>${element.stack}</h4>
                    <li></li>
                    <h4>${element.year}</h4>
                </div>
            <div class="pop-up-div-container-img">
                <img src="${element.image}" alt="picture card">
            </div>
            <div class="pop-up-div-container-details">
                <p>
                    ${element.paragraph}
                </p>

                <ul class="languages">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
                <button class="beg-btn"><a href="#"> ${element.button}</a>
                <i class="bi bi-box-arrow-up-right"></i>
                </button>
                <button class="beg-btn"><a href="#"> ${element.button}</a>
                <i class="bi bi-github"></i>
                </button>
            </div>
        </div>
  `

    let section = document.querySelector(`.${element.class}`)
    section.appendChild(detailsForPopUpDiv)

        popClose.addEventListener("click", () => {
            detailsForPopUpDiv.style.display = "none"
        })
    
}


cards.forEach((element, index) => {
let section = document.querySelector("#Portfolio")
let div = document.createElement("div")


div.innerHTML = `
   <div class= "first-card ${element.class}">

            <div class="img-container">
              <img class="card-img" src="${element.image}" alt="picture card">
            </div>
            <div class="details-container">
                <div class="heading">
                  <h1 id="card-h1">${element.heading}</h1>
                </div>

                <div class="details">
                  <h3 id="card-h3">${element.application}</h3>
                  <h4>${element.stack}</h4>
                  <h4>${element.year}</h4>
                </div>

                <p>
                  ${element.paragraph}
                </p>
          
                <ul class="languages">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
                <button class="beg-btn"><a href="#">
                  ${element.button}</a></button>
            </div>
          </div>



          
`


section.appendChild(div)


div.addEventListener("click", () => {
  popUpDiv(element)
})
})
            
            
    
            