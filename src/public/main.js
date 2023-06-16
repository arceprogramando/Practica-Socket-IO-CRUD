//cliente

const noteForm = document.getElementById('noteForm');
const title = document.getElementById('title');
const description = document.getElementById('description');



noteForm.addEventListener('submit', event => {
    event.preventDefault();

    saveNote(title.value, description.value)
})