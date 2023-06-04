export default () => {
    // BEGIN
    const button = document.querySelector('#alert-generator');
    const alerts = document.querySelector('.alerts');

    let alertsCount = 1;

    button.addEventListener('click', () => {

        const newAlert = document.createElement('div');

        newAlert.className = 'alert alert-primary';
        newAlert.textContent = `Alert ${alertsCount}`;
        alertsCount++;

        alerts.prepend(newAlert);

    })
    // END
};