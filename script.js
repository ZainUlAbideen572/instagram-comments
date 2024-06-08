document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('reply')) {
        const addcmnt = event.target.nextElementSibling;
        if (addcmnt.classList.contains('hidden')) {
            addcmnt.classList.add('active');
            addcmnt.classList.remove('hidden');
        } else {
            addcmnt.classList.add('hidden');
            addcmnt.classList.remove('active');
        }
    }
});

function addReply(text) {
    let div = document.createElement('div');
    div.setAttribute('class', 'cmnt-details mx-8');
    div.innerHTML = `
        <h1 class="px-4">${text}</h1>
        <button class="reply text-xs text-blue-400 px-6">Add Reply</button>
        <div class="flex flex-row py-1 pl-[3.75rem] hidden rounded-lg">
            <input type="text" class="px-1" placeholder="add comment" name="reply"/>
            <button class="p-2 bg-blue-400 submit">submit</button>
        </div>
    `;
    return div;
}

document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('submit')) {
        const addCmnt = event.target.parentElement;
        const commentText = addCmnt.children[0].value;
        if (commentText) {
            const parentComment = addCmnt.parentElement;
            parentComment.appendChild(addReply(commentText));
            addCmnt.classList.add('hidden');
            addCmnt.classList.remove('active');
        }
    }
});