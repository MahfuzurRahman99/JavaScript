console.log(location);
var pContainer = document.querySelectorAll('p');
pContainer[0].textContent = location.href;
pContainer[1].textContent = location.protocol;
pContainer[2].textContent = location.hostname;
pContainer[3].textContent = location.port;
pContainer[4].textContent = location.pathname;