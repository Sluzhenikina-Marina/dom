// BEGIN
const browserName = (siteSrc) => {
    const userAgent = navigator.userAgent.split(' ')[0].split('/');
    const name = userAgent[0];
    const version = userAgent[1];

    return `${name}/${version} ${siteSrc}`;
}


export default browserName;
// END