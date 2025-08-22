// document.getElementById('btn')
//     .addEventListener('click', function () {
//         const commentBox = document.getElementById('Comment-box')
//         const claimComment = commentBox.value;
//         const commentPlace = document.getElementById('comment-place')

//         const newElement = document.createElement('P');
//         newElement.classList.add('comments')
//         newElement.innerText = claimComment;
//         commentPlace.appendChild(newElement);
//         commentBox.value = ''
//     })




document.getElementById('btn')
    .addEventListener('click', function () {
        const commentBox = document.getElementById('Comment-box');
        const claimComment = commentBox.value;
        const commentPlace = document.getElementById('comment-place');
        const newElement = document.createElement('p');
        newElement.classList.add('comments')
        newElement.innerText = claimComment;
        commentPlace.appendChild(newElement);
        commentBox.value = '' 
    })







/**
 * কিছু সাধারণ Mouse Event:

click → মাউস দিয়ে ক্লিক করলে ইভেন্ট ট্রিগার হয়।

dblclick → ডাবল ক্লিক করলে ট্রিগার হয়।

mouseenter → কোনো এলিমেন্টের উপর মাউস গেলে।

mouseleave → এলিমেন্টের উপর থেকে মাউস সরলে।

mousemove → মাউস নড়াচড়া করলে (X-Y পজিশনও ধরা যায়)।

mousedown → মাউস বাটন চাপা হলে।

mouseup → মাউস বাটন ছেড়ে দিলে।
 */










