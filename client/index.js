window.addEventListener('click', async function(event){
  let response = await fetch('http://127.0.0.1:8090/thing/list');
  let body = await response.json();
  renderThings(body);  
});

function renderThings(things){
    let container = document.getElementById('things');
    for(let thing of things){
      let item = document.createElement('li');
      item.innerHTML= thing;
    container.appendChild(item);
    }
}
