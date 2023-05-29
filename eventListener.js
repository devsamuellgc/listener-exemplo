// Consts
const modal = document.querySelector('#modal')
const openModal = document.getElementById('openModal')
const closeModal = document.querySelector('#closeModal')

// Funções
function handleModal() {
    modal.classList.toggle('modalOpen')
}

//Listeners
openModal.addEventListener('click', handleModal)
closeModal.addEventListener('click', handleModal)