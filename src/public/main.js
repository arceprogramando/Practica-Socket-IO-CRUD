//cliente

const noteForm = document.getElementById('noteForm');
const title = document.getElementById('title');
const description = document.getElementById('description');



noteForm.addEventListener('submit', event => {
    event.preventDefault();

    if (savedId) {
        updateNote(savedId, title.value, description.value)
    } else {
        saveNote(title.value, description.value);
    }
    title.value = ""
    description.value = ""

    title.focus()

})