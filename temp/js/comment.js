const deleteCommentBtn = document.querySelector('button.btn-delete');
const commentContainers = document.querySelectorAll('article.comment');

// user has logged in all delete buttons are viewable
// for now all the delete buttons are visible because we are using
// classList.add but we need to use classList.remove instead by default
function userHasLoggedIn() {
    deleteCommentBtn.addEventListener("click", () => {
        deleteCommentBtn.classList.add('active'); // trigger css "active" class when user logged in
        deleteComments();
    })
}

function deleteComments() {
    commentContainers.forEach(container => {
        container.style.display = 'none';
    })
}

function userHasLoggedOut() {
    deleteCommentBtn.classList.remove('active');
}

// When user logs out this function will be called
// and the delete buttons for comments will be hidden
// Also, the default behavior is the delete buttons are hidden always using css
// userHasLoggedOut()

// when a user logs in set class to active to show
// delete buttons using css
userHasLoggedIn();
