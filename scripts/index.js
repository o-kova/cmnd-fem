// первым блоком script для модального окна и формы отправки

// для строки поиска

// для отрисовки карточек и их анимации

// const modal = document.querySelector('#modal');
// const close = document.querySelector('.modal__card-close');
const demo = document.querySelector('.demo');
const cardList = document.querySelector('.cards');
// const test = document.querySelector('.card');


// close.onclick = function () {
//   modal.style.display = 'none';
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// };

function autoComplete () {
  fetch ("http://localhost:8080/cards")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // const namesList = data;
    // const namesList = data.map(item => item.name);

    let card = "";
    for (let i = 0; i <= data.length; i++) {
const item = new Object(data[i]);
// const cardName = item['name'];
// const cardDescription = item['description'];
      card += ` <label>
        <input type="checkbox"  />
        <div class="card">
          <div class="front">
            <p class="card-titly">${item['name']}</p>
          </div>
          <div class="back">
            <p class="card-titly">${item['name']}</p>
            <p class="card-text">${item['description']}</p>
          </div>
        </div>
      </label>`
    }
    cardList.innerHTML = card;
    
    // cardList.onclick = function (event) {
    //   let div = event.target.closest('div'); 
    //   const children = div.lastElementChild;

    //   if (!div) return; 
    
    //   if (!cardList.contains(div)) return; 
      
      // modal.style.display = 'block';

      // children.classList.toggle('none');
      // div.style.height = "200px";


    // }
    
  })
  .catch ((e) => {
    console.error(e);
    demo.style.display = 'flex';
  })


};

autoComplete();