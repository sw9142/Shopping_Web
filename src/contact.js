window.onload = function() {
  let form = document.querySelector('#contactus-form');
  let inlineRadio3 = document.querySelector('#inlineRadio3');
  let inlineRadio1 = document.querySelector('#inlineRadio1');
  let inlineRadio2 = document.querySelector('#inlineRadio2');
  document.querySelector('#ordernumberbox').style.display = 'none';
  inlineRadio3.addEventListener('click', function() {
    document.querySelector('#ordernumberbox').style.display = 'block';
  });
  inlineRadio1.addEventListener('click', function() {
    document.querySelector('#ordernumberbox').style.display = 'none';
  });
  inlineRadio2.addEventListener('click', function() {
    document.querySelector('#ordernumberbox').style.display = 'none';
  });

  form.onsubmit = function(event) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      event.preventDefault();
      return false;
    }
    return true;
  };
  let searchButton = document.querySelector('#searchicon');
  let searchContents = document.querySelector('#search');
  searchContents.classList.add('hidden');

  searchButton.addEventListener('click', function() {
    if (searchContents.classList.contains('hidden')) {
      searchContents.classList.remove('hidden');
    } else {
      searchContents.classList.add('hidden');
    }
  });

  let menuButton = document.querySelector('#imenu');
  let menuContents = document.querySelector('#imenucontents');
  menuContents.classList.add('hidden');

  menuButton.addEventListener('click', function() {
    if (menuContents.classList.contains('hidden')) {
      menuContents.classList.remove('hidden');
    } else {
      menuContents.classList.add('hidden');
    }
  });
};
