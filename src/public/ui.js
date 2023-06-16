const notesList = document.getElementById('notes');

const appendNote = note => {
    console.log(notesList);
    notesList.innerHTML += `
        <div class="card card-body rounded-0 mb-2 ">
            <div class="d-flex justify-content-between">
                <h1 class="h3 card-title">${note.title}</h1>
                <div>
                    <button class="btn btn-danger">delete</button>
                    <button class="btn btn-secondary">update</button>
                </div>
            </div>
            <p>${note.description}</p> 
        </div>
    `;
};

const loadNotes = notes => {
    notes.forEach(note => appendNote(note))
}

