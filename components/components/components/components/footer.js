class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-gray-900 text-gray-300 py-10 mt-10">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                
                <div>
                    <h3 class="text-lg font-bold mb-3 text-white">GirarDidi</h3>
                    <p>Your favorite meals delivered fast.</p>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-3 text-white">Quick Links</h3>
                    <ul>
                        <li><a href="#" class="hover:text-orange-400">Restaurants</a></li>
                        <li><a href="#" class="hover:text-orange-400">Offers</a></li>
                        <li><a href="#" class="hover:text-orange-400">Help</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-3 text-white">Follow Us</h3>
                    <div class="flex space-x-4">
                        <i data-feather="facebook"></i>
                        <i data-feather="instagram"></i>
                        <i data-feather="twitter"></i>
                    </div>
                </div>
            </div>

            <p class="text-center mt-6 text-gray-500">© 2025 GirarDidi. All rights reserved.</p>
        </footer>
        `;
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);
