class CustomNavbar extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <nav class="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
            <div class="container mx-auto flex items-center justify-between">

                <!-- LOGO -->
                <div class="flex items-center space-x-3">
                    <i data-feather="shopping-bag" class="text-orange-500"></i>
                    <h1 class="text-2xl font-bold text-orange-500">GirarDidi</h1>
                </div>

                <!-- MENU DESKTOP -->
                <div class="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
                    <a href="#" class="hover:text-orange-500 transition">Home</a>
                    <a href="#" class="hover:text-orange-500 transition">Restaurants</a>
                    <a href="#" class="hover:text-orange-500 transition">Offers</a>
                    <a href="#" class="hover:text-orange-500 transition">Help</a>

                    <button class="relative hover:text-orange-500" id="cartButton">
                        <i data-feather="shopping-cart"></i>
                        <span id="cartCount"
                              class="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full px-1">
                              0
                        </span>
                    </button>

                    <button class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                        Login
                    </button>
                </div>

                <!-- MENU HAMBURGUESA -->
                <button id="menuToggle" class="md:hidden">
                    <i data-feather="menu"></i>
                </button>
            </div>

            <!-- MOBILE MENU -->
            <div id="mobileMenu"
                 class="hidden flex-col bg-white shadow-lg p-4 mt-4 rounded-xl md:hidden text-gray-700">

                <a href="#" class="py-2 border-b hover:text-orange-500">Home</a>
                <a href="#" class="py-2 border-b hover:text-orange-500">Restaurants</a>
                <a href="#" class="py-2 border-b hover:text-orange-500">Offers</a>
                <a href="#" class="py-2 border-b hover:text-orange-500">Help</a>

                <div class="flex items-center justify-between py-3">
                    <button class="flex items-center space-x-2" id="cartButtonMobile">
                        <i data-feather="shopping-cart"></i>
                        <span>Cart (<span id="cartCountMobile">0</span>)</span>
                    </button>

                    <button class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                        Login
                    </button>
                </div>
            </div>
        </nav>
        `;

        this.activateNavbar();
    }

    activateNavbar() {
        feather.replace();

        // ELEMENTOS
        const menuToggle = this.querySelector("#menuToggle");
        const mobileMenu = this.querySelector("#mobileMenu");

        const cartButton = this.querySelector("#cartButton");
        const cartButtonMobile = this.querySelector("#cartButtonMobile");

        const cartCount = this.querySelector("#cartCount");
        const cartCountMobile = this.querySelector("#cartCountMobile");

        let cart = 0;

        // TOGGLE DEL MENÚ EN MÓVILES
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        // FUNCIÓN SIMULADA DEL CARRITO
        const addToCart = () => {
            cart++;
            cartCount.textContent = cart;
            cartCountMobile.textContent = cart;
        };

        cartButton.addEventListener("click", addToCart);
        cartButtonMobile.addEventListener("click", addToCart);
    }
}

customElements.define("custom-navbar", CustomNavbar);
