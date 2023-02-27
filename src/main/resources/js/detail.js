const URLParams = new URLSearchParams(window.location.search);
const pizzaId = URLParams.get('id');

axios.get(`http://localhost:8080/api/${pizzaId}`).then((res) => {
    console.log('richiesta ok', res);
  

    document.querySelector('#name').innerHTML = res.data.name;
    document.querySelector('#description').innerHTML = res.data.description;
    document.querySelector('#price').innerHTML = res.data.price;
    document.querySelector('#imgPath').innerHTML = '<img src="' + res.data.imgPath + '" width=300px />' ;

   
}).catch((res) => {
    console.error('errore nella richiesta', res);
    alert('Errore durante la richiesta!');
});