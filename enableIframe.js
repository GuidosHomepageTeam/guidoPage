document.querySelector('button.enableIframe').onclick = function () {
  document.querySelector('button.enableIframe').remove()
  var iframe = document.querySelector('iframe')
  iframe.classList.remove('preview')
  iframe.src = iframe.dataset.src
}
