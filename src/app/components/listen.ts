export default {
    listenselectBook() {
        document.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (target.closest('.book')) {
                location.hash = `book/${target.getAttribute('id')}`;
            }
        });
    },
};
