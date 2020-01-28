var app = {

    init: function() {
        // Allows mobile menu opening
          const burger = document.querySelector('.burger');
          const nav = document.querySelector('#'+burger.dataset.target);
  
          burger.addEventListener('click', function(){
            burger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
          });


          // Controls home text
          const welcomeDiv = document.getElementById("hello");
          const text = welcomeDiv.dataset.label;
          let i = 0;

          function showMessage() {
              let timeOut;
              if (i < text.length) {
                welcomeDiv.innerHTML += `<span>${text[i]}</span>`;
                timeOut = setTimeout(showMessage, 70)
                i++
              }
              else {
                  clearTimeout(timeOut);

                  const setIconContainer = document.createElement('div');
                  const icon = document.createElement('i')
                  const anchor = document.createElement('a');

                  anchor.href = '#skills';
                  icon.className = "fas fa-arrow-alt-circle-down"
                  icon.id = 'arrow';
                  anchor.appendChild(icon)
                  setIconContainer.appendChild(anchor);
                  welcomeDiv.appendChild(setIconContainer);
              }
          }
          showMessage();
        }
  };
  
  document.addEventListener('DOMContentLoaded', app.init);