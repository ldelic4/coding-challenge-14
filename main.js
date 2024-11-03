//task 2

async function getData(Unresolved.Tickets) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${Unresolved.Tickets}`);
        
        if (!response.ok) {
            throw new Error('Not found');
        }

        const product = await response.json();
        console.log(`Unresolved Ticket: ${unresolved.tickets}found`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

//task 3
const productList = document.getElementById('ticket.display');


const apiUrl =https://jsonplaceholder.typicode.com/posts


fetch(apiUrl)
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${ticket.id} - $${customer.name}-${issue.description}-${details}`;
            productList.appendChild(listItem);
        });
    })
    //error
    .catch(error => console.error('failed to load products. please try again later.', error));

    