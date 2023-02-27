function createPizza(event) {
    axios.post('http://localhost:8080/api', {
        title: document.querySelector('#name').value,
        author: document.querySelector('#description').value,
        price: document.querySelector('#price').value,


    }).then((res) => {


    }).catch((res) => {
    })

}