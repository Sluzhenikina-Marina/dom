// BEGIN
const body = document.querySelector('body');
const content = body.innerHTML;
const bodyLines = content.trim().split('\n');
const bodyNiceContent = bodyLines.map(i => `<p>${i}</p>`).join('');
body.innerHTML = bodyNiceContent;
// END