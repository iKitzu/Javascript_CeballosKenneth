const results = document.querySelector('#results');

document.querySelector('#buttons').addEventListener('click', e => {
    asyncFetch(e.target.textContent.trim().toLowerCase())
})