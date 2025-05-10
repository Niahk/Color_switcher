const buttons = document.querySelectorAll('.color-button')
const bod = document.querySelectorAll('body')

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e.target);
    switch (e.target.dataset.color) {
      case 'red':
        document.body.style.backgroundColor = 'red';
        break;
      case 'green':
        document.body.style.backgroundColor = 'green';
        break;
      case 'gold':
        document.body.style.backgroundColor = 'gold';
        break;
      case 'blue':
        document.body.style.backgroundColor = 'blue';
        break;
      default:
        document.body.style.backgroundColor = 'white';
    }
    
  });
});