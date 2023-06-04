// BEGIN
const extractData = (elementToParse) => {
    const parFromElement = elementToParse.getElementsByTagName('p');
    const arrayOfPar = Array.from(parFromElement);
    return arrayOfPar.map(par => par.textContent.trim());
}

export default extractData;
// END