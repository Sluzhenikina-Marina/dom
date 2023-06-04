import camelCase from 'lodash/camelCase';

// BEGIN
const normalize = () => {
    const allElements = document.body.getElementsByTagName('*');

    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];  
        const classList = element.classList;
        const originalClasses = Array.from(classList);

        originalClasses.forEach(className => {
        const normalizedClassName = camelCase(className);
        
        classList.replace(className, normalizedClassName);
        });
    }
}


export default normalize;
// END