document.addEventListener('DOMContentLoaded', () => {

    let cardes = document.querySelectorAll('.card')
    cardes.forEach(e => {
        e.addEventListener('click', () => {
            document.querySelector('.modal_img').src = e.firstElementChild.src
            document.querySelector('.mdn').textContent = e.children[1].children[1].children[0].textContent
            document.querySelector('.md_prix').textContent = e.children[1].children[3].children[1].textContent
            document.querySelector('.desk_modal').textContent = e.children[1].children[2].textContent
            document.querySelector('.notes_modal').textContent = e.children[1].children[0].children[1].textContent
                //activation de la boite modal
            document.querySelector('.viewer').style.display = "block"
        })
    })
    document.querySelector('.modalClose').addEventListener('click', () => {
        document.querySelector('.viewer').style.display = "none"
    })


})