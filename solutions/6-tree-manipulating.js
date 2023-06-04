// BEGIN
const changeTextToParagraph = () => {
    const divs = document.getElementsByTagName('div');

    for (let i = 0; i < divs.length; i++) {
        const div = divs[i];
        const childNodes = div.childNodes;

        for (let j = 0; j < childNodes.length; j++) {
            const node = childNodes[j];

            if (node instanceof Text) {
                const trimmedText = node.textContent.trim();

                if (trimmedText !== '') {
                    const paragraphElement = document.createElement('p');
                    paragraphElement.textContent = trimmedText;
                    node.replaceWith(paragraphElement);
                }
            }
        }
    } 
}


export default changeTextToParagraph;
// END