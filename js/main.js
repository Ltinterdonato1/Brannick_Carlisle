
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

    const form = document.getElementById('appointment-form');
const successMessage = document.getElementById('form-success');

form.addEventListener('submit', async function(e) {
  e.preventDefault(); // prevent default page reload
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // show success message
      successMessage.classList.remove('hidden');
      form.reset();
    } else {
      alert('Oops! There was a problem submitting your form.');
    }
  } catch (error) {
    alert('Oops! There was a problem submitting your form.');
    console.error(error);
  }
});