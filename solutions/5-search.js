export default (document) => {
    // BEGIN

    const categoryTitle = document.querySelector('.content h1').textContent;
    const categoryDescription = document.querySelector('.content .description').textContent;
    const links = document.querySelectorAll('.content .links > div');

    const articles = Array.from(links).map(link => {
        const title = link.querySelector('h2 a').textContent;
        const description = link.querySelector('p').textContent;

        return { title, description };
    });

    return { title: categoryTitle, description: categoryDescription, items: articles };
    // END
};
