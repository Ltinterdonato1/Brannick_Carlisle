.menu--open {
  width: 300px; /* or whatever width you prefer */
  max-width: 80vw; /* ensures it doesn't exceed screen width on small devices */
}
function openModal(title, img, desc) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-img').src = img;
        document.getElementById('modal-desc').textContent = desc;
        document.getElementById('product-modal').classList.remove('hidden');
    }

    function closeModal() {
        document.getElementById('product-modal').classList.add('hidden');
    }

    // Close on backdrop click
    document.getElementById('product-modal').addEventListener('click', (e) => {
        if (e.target.classList.contains('backdrop')) closeModal();
    });