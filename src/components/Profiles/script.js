let counter = 1;

setInterval(() => {
  const radiobtn = document.querySelectorAll('.m-btn');
  radiobtn.forEach((radio) => {
    radio.addEventListener('click',()=>{
      var num = radio.getAttribute('for');
      var count = num.charAt(5);
      counter = parseInt(count);
    })
  })

  document.getElementById('radio'+counter).checked = true;
  counter++;

  if (counter>6) {
    counter=1;
  }
}, 3500);