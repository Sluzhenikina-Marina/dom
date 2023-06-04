import 'whatwg-fetch';

export default () => {
  // BEGIN
  const autocompleteElements = document.querySelectorAll('input[data-autocomplete]');
  autocompleteElements.forEach((el) => {
    const route = el.dataset.autocomplete;
    const dataAutocompleteName = el.dataset.autocompleteName;
    el.addEventListener('input', async (e) => {
      const list = document.querySelector(`ul[data-autocomplete-name="${dataAutocompleteName}"]`);
      const response = await fetch(`${route}?search=${encodeURIComponent(e.target.value)}`);
      const items = await response.json();
      const options = items.length === 0 ? ['Nothing'] : items;
      const listHTML = options.map((item) => `<li>${item}</li>`).join('\n');
      list.innerHTML = listHTML;
    });
  });
  // END
};
