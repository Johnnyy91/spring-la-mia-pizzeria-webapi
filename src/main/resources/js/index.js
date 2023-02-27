console.log('HELLO JS');

pizzaList();

function pizzaList() {
    axios.get('http://localhost:8080/api').then((res) => {

        document.querySelector('#pizza_table').innerHTML = '';
        res.data.forEach(pizza => {
            console.log(pizza);
            document.querySelector('#pizza_table').innerHTML += `
            <tr>
                <td>
                    <a href="./detail.html?id=${pizza.id}">${pizza.id}</a>
                </td>
                <td>${pizza.name}</td>
                <td>${pizza.description}</td>
                <td>${pizza.price}</td>    
                <td>
                    <a class="btn btn-primary" href="detail.html?id=${pizza.id}">
                        <i class="fa-solid fa-pen-to-square"> </i>
                    </a>
                </td>         
            </tr>
            `
        });
    }).catch((res) => {
    
        console.error('errore nella richiesta', res);
        alert('Errore durante la richiesta!');
    })
}