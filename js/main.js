function replaceTextAreaContents(fileUrl, textArea) {
  fetch(fileUrl)
    .then(r => r.text())
    .then(rText => {
      textArea.innerHTML = rText
      remark.create({ highlightStyle: 'ir-black' })
    })
}

replaceTextAreaContents('markdown/slides.md', document.getElementById('source'))
