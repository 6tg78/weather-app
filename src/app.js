const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = searchForm.city.value.trim();
    searchForm.reset();
    console.log(city);
});
