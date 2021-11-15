window.onload = () => {
  const modal = document.querySelector('[data-module="modal-video"]')
  const modalIframe = document.querySelector('[data-module="modal-video"] iframe')
  const modalCloseActions = document.querySelectorAll('[data-module-action="close-modal-video"]')
  const modalOpenActions = document.querySelectorAll('[data-module="action-modal-video"]')
  
  modalCloseActions.forEach(action => {
    action.onclick = () => {
      modal.classList.add('modal-video--hidden')
      modalIframe.setAttribute('src', '')
    }
  })
  
  modalOpenActions.forEach(button => {
    button.onclick = event => {
      modal.classList.remove('modal-video--hidden')
      modalIframe.setAttribute('src', event.target.dataset.video)
    }
  })
}

