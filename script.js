const searchToggle = document.querySelector('.search-toggle');
const searchInput = document.querySelector('.mobile-search-input');

searchToggle.addEventListener('click', () => {
    if (searchInput.style.display === 'block') {
        searchInput.style.display = 'none';
    } else {
        searchInput.style.display = 'block';
        searchInput.focus();
    }
});