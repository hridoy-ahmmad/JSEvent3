document.getElementById('btn')
    .addEventListener('click', function () {
        const commentBox = document.getElementById('Comment-box')
        const claimComment = commentBox.value;
        const commentPlace = document.getElementById('comment-place')

        const newElement = document.createElement('P');
        newElement.classList.add('comments')
        newElement.innerText = claimComment;
        commentPlace.appendChild(newElement);
        commentBox.value = ''
    })