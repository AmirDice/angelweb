document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('responseMessage').innerHTML = '';
});

let moveCount = 0;

document.getElementById('noButton').addEventListener('mouseover', function(event) {
    if (moveCount < 3) {
        const button = event.target;
        const container = button.parentElement;
        const containerRect = container.getBoundingClientRect();

        let newX, newY;
        newX = Math.random() * (containerRect.width - button.offsetWidth);
        newY = Math.random() * (containerRect.height - button.offsetHeight);

        button.style.left = newX + 'px';
        button.style.top = newY + 'px';
        button.style.position = 'absolute';

        moveCount++;

        if (moveCount === 2) {
            alert("Are you sure about this?");
        } else if (moveCount === 3) {
            alert("Are you 100% sure? This is the last chance.");
        }
    }
});


function isNear(current, target, threshold) {
    return Math.abs(current - target) < threshold;
}


function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // Random duration
    snowflake.style.opacity = Math.random();
    snowflake.style.transform = `scale(${Math.random()})`; // Random size
  
    document.getElementById('snow').appendChild(snowflake);
  
    // Remove snowflake after it falls
    setTimeout(() => {
      snowflake.remove();
    }, 10000); // Adjust to match animation-duration
  }
  
  setInterval(createSnowflake, 200); // Adjust for snowflake frequency

  var words = ['Hi i like HTL', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
  
