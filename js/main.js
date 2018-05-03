var select = document.querySelector('select');
var para = document.getElementById('label');
select.addEventListener('change', setWeather);
document.querySelector('#button').addEventListener('click',foor);

function setWeather() {
  var choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}

function displayMessage() {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);
    
    var msg = document.createElement('p');
    msg.textContent = 'This is a message box';
    panel.appendChild(msg);
    
    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);
    
    closeBtn.onclick = function() {
      panel.parentNode.removeChild(panel);
    };
}

function add(a,b) {
  return a + b;
}

function cal( func ) {
  if(typeof(func) === 'function') {

    console.log( func(1,2) );
  }
}
function foor(e) {
  cal(add);
  console.log(e);
}