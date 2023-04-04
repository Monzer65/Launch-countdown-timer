countDown();

function countDown() {
  let launchDate = new Date('2023-07-13').getTime();
  let now = new Date().getTime();
  let diff = launchDate - now;
  let [days, hours, minutes, seconds] = [
    Math.floor(diff / (1000 * 60 * 60 * 24)),
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    Math.floor((diff % (1000 * 60)) / 1000),
  ];

  flip(document.querySelector('.days'), days);
  flip(document.querySelector('.hours'), hours);
  flip(document.querySelector('.minutes'), minutes);
  flip(document.querySelector('.seconds'), seconds);

  setTimeout(function () {
    countDown();
  }, 1000);
}

function flip(card, time) {
  const topEl = card.querySelector('.top');
  const bottomEl = card.querySelector('.bottom');
  const topFlippingEl = document.createElement('div');
  const bottomFlippingEl = document.createElement('div');
  const start = parseInt(topEl.textContent);
  if (time === start) return;
  topFlippingEl.classList.add('top-flip');
  bottomFlippingEl.classList.add('bottom-flip');

  topFlippingEl.addEventListener('animationstart', () => {
    topEl.textContent = time;
    bottomEl.textContent = time + 1;
    topFlippingEl.textContent = time + 1;
  });
  topFlippingEl.addEventListener('animationend', () => {
    topEl.textContent = time;
    topFlippingEl.remove();
  });
  bottomFlippingEl.addEventListener('animationend', () => {
    bottomEl.textContent = time;
    bottomFlippingEl.remove();
  });

  card.append(topFlippingEl, bottomFlippingEl);
}
