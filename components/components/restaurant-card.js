class CustomRestaurantCard extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute("name");
        const rating = this.getAttribute("rating");
        const time = this.getAttribute("delivery-time");
        const image = this.getAttribute("image");
        const category = this.getAttribute("category");

        this.innerHTML = `
        <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-3 cursor-pointer">
            <img src="${image}" class="rounded-xl w-full h-40 object-cover">
            <h3 class="mt-3 text-xl font-bold">${name}</h3>
            <p class="text-gray-600 text-sm">${category}</p>
            <div class="flex items-center justify-between mt-2">
                <span class="flex items-center text-yellow-500 font-semibold">
                    <i data-feather="star" class="mr-1"></i> ${rating}
                </span>
                <span class="text-gray-500">${time}</span>
            </div>
        </div>
        `;
        feather.replace();
    }
}

customElements.define('custom-restaurant-card', CustomRestaurantCard);
