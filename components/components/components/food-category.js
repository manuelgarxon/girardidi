class FoodCategory extends HTMLElement {
    connectedCallback() {
        const icon = this.getAttribute("icon");
        const name = this.getAttribute("name");
        const color = this.getAttribute("color");

        this.innerHTML = `
        <div class="flex flex-col items-center p-4 rounded-xl ${color} cursor-pointer hover:scale-105 transition">
            <div class="p-3 rounded-full bg-white shadow">
                <i data-feather="${icon}" class="w-6 h-6 ${color.split(" ")[1]}"></i>
            </div>
            <p class="mt-2 font-medium">${name}</p>
        </div>
        `;
        feather.replace();
    }
}

customElements.define('custom-food-category', FoodCategory);
