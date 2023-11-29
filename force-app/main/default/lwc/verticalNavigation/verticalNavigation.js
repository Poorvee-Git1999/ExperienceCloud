import { LightningElement } from 'lwc';
export default class VerticalNavigation extends LightningElement {
    connectedCallback() {
        const navItems = this.template.querySelectorAll('.nav-item');
        navItems.forEach((item) => {
            item.addEventListener('click', this.handleItemClick);
        });
    }

    handleItemClick(event) {
        const selectedItem = event.currentTarget.textContent;
        // Perform actions based on the selected item
    }


}