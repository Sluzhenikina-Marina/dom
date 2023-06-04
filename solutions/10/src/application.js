import escapeHtml from 'escape-html';

// BEGIN
const formToHtml = () => {
    const feedbackForm = document.querySelector('.feedback-form');
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.elements.email.value;
        const name = form.elements.name.value;
        const comment = form.elements.comment.value;

        const escapeEmail = escapeHtml(email);
        const escapeName = escapeHtml(name);
        const escapeComment = escapeHtml(comment);

        const feedback = document.createElement('div');
        feedback.innerHTML = `
            <p>Feedback has been sent</p>
            <div>Email: ${escapeEmail}</div>
            <div>Name: ${escapeName}</div>
            <div>Comment: ${escapeComment}</div>
        `;

        form.replaceWith(feedback);
    })
}

export default formToHtml;
// END