export default () => {
    // BEGIN

    const blocksOfTabs = document.querySelectorAll('.row');
    blocksOfTabs.forEach((tabBlock) => {
        const tabList = tabBlock.querySelectorAll('[role="tab"]');
        tabList.forEach((tab) => {
            tab.addEventListener('click', () => {
                const navLinkActive = tabBlock.querySelector('.nav-link.active');
                const tabPane = tabBlock.querySelector('.tab-pane.active');
                const tabTarget = tabBlock.querySelector(tab.getAttribute('data-bs-target'));
                navLinkActive.classList.remove('active');
                tabPane.classList.remove('active');
                tabTarget.classList.add('active');
                tab.classList.add('active');

            })
        })
    })


    
    // END
};
