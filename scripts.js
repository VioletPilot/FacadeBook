let users = [
    { id: 1, name: 'John Doe', profileImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg' },
    { id: 2, name: 'Jane Smith', profileImage: 'https://example.com/profile_image.jpg' },
    { id: 3, name: 'Alice Johnson', profileImage: 'https://example.com/profile_image.jpg' },
    { id: 4, name: 'Michael Brown', profileImage: 'https://example.com/profile_image.jpg' },
    { id: 5, name: 'Emily Wilson', profileImage: 'https://example.com/profile_image.jpg' },
    { id: 6, name: 'David Martinez', profileImage: 'https://example.com/profile_image.jpg' },
    { id: 7, name: 'Sarah Lee', profileImage: 'https://example.com/profile_image.jpg' },
    { id: 8, name: 'Daniel Taylor', profileImage: 'https://example.com/profile_image.jpg' },
    { id: 9, name: 'Olivia Garcia', profileImage: 'https://example.com/profile_image.jpg' },
    { id: 10, name: 'James Rodriguez', profileImage: 'https://example.com/profile_image.jpg' }
];

let posts = [
    { userId: 1, content: 'Hello, world!', image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", timestamp: '2 hours ago', likes: 0, comments: [] },
    { userId: 2, content: 'This is a test post.', image: "https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_1600,c_limit/phonepicutres-TA.jpg", timestamp: '1 hour ago', likes: 0, comments: [] },
    { userId: 3, content: 'Another post!', image: "", timestamp: '30 minutes ago', likes: 0, comments: [] },
    { userId: 4, content: 'Post number 4', image: "https://example.com/image.jpg", timestamp: '1 day ago', likes: 0, comments: [] },
    { userId: 5, content: 'Post number 5', image: "", timestamp: '5 hours ago', likes: 0, comments: [] },
    { userId: 6, content: 'Post number 6', image: "", timestamp: '10 minutes ago', likes: 0, comments: [] },
    { userId: 7, content: 'Post number 7', image: "https://example.com/image.jpg", timestamp: '3 days ago', likes: 0, comments: [] },
    { userId: 8, content: 'Post number 8', image: "", timestamp: '1 hour ago', likes: 0, comments: [] },
    { userId: 9, content: 'Post number 9', image: "", timestamp: '20 minutes ago', likes: 0, comments: [] },
    { userId: 10, content: 'Post number 10', image: "", timestamp: '2 hours ago', likes: 0, comments: [] },
    // Add more posts as needed
];


// Function to display posts
function displayPosts() {
    let postFeed = document.querySelector('.post-feed');
    postFeed.innerHTML = ''; // Clear existing posts


    posts.forEach(post => {
    let user = users.find(u => u.id === post.userId);
    // Check if the user has a profile image, if not, set a default image
    if (!user.profileImage) {
        user.profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpAPoj3uAFcnqWKgYgThNuzx0WnrlZDdPQjYSZHo2dg&s";
    }
    
    // Create post container div
    let postDiv = document.createElement('div');
    postDiv.classList.add('post', 'mb-3', 'p-2', 'card');
    
    // Create card header
    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    
    // Create profile image
    let profileImg = document.createElement('img');
    profileImg.src = user.profileImage;
    profileImg.alt = 'Profile';
    profileImg.classList.add('user-small', 'profile-image', 'rounded-circle');
    
    // Create post author
    let postAuthor = document.createElement('span');
    let authorLink = document.createElement('a');
    authorLink.href = 'john';
    authorLink.textContent = user.name;
    postAuthor.appendChild(authorLink);
    
    // Create post time
    let postTime = document.createElement('span');
    postTime.textContent = post.timestamp;
    
    // Append profile image, author, and time to card header
    cardHeader.appendChild(profileImg);
    cardHeader.appendChild(postAuthor);
    cardHeader.appendChild(postTime);
    
    // Create card body
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.textContent = post.content;
    
    // If post has image, create image element and append to card body
    if (post.image) {
        let postImg = document.createElement('img');
        postImg.src = post.image;
        postImg.classList.add('img-fluid', 'img-thumbnail');
        cardBody.appendChild(postImg);
    }
    
    // Create post actions card footer
    let postActions = document.createElement('div');
    postActions.classList.add('post-actions', 'card-footer');
    
    // Create like button
    let likeButton = document.createElement('button');
    likeButton.type = 'button';
    likeButton.classList.add('btn', 'btn-outline-primary');
    likeButton.textContent = `Like (${post.likes})`;
    likeButton.onclick = function() {
        likePost(post.likes);
    };
    let likeIcon = document.createElement('i');
    likeIcon.classList.add('fas', 'fa-thumbs-up');
    likeButton.appendChild(likeIcon);
    
    // Create comment button
    let commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.classList.add('btn', 'btn-outline-primary');
    commentButton.textContent = `Comment (${post.comments.length})`;
    commentButton.onclick = function() {
        commentOnPost(post.comments);
    };
    let commentIcon = document.createElement('i');
    commentIcon.classList.add('fas', 'fa-comment');
    commentButton.appendChild(commentIcon);
    
    // Create share button
    let shareButton = document.createElement('button');
    shareButton.type = 'button';
    shareButton.classList.add('btn', 'btn-outline-primary');
    shareButton.textContent = 'Share';
    let shareIcon = document.createElement('i');
    shareIcon.classList.add('fas', 'fa-share');
    shareButton.appendChild(shareIcon);
    
    // Append buttons to post actions card footer
    postActions.appendChild(likeButton);
    postActions.appendChild(commentButton);
    postActions.appendChild(shareButton);
    
    // Append card header, card body, and post actions to post container div
    postDiv.appendChild(cardHeader);
    postDiv.appendChild(cardBody);
    postDiv.appendChild(postActions);
    
    // Append post container div to post feed container
    postFeed.appendChild(postDiv);
});

}    

// Function to add a new post
function addNewPost() {
    let content = document.querySelector('.post-creation-box textarea').value;
    let timestamp = new Date().toLocaleString();
    let userId = 1; // Assuming the user is always the first user in the users array
    posts.push({ userId, content, timestamp, likes: 0, comments: [] });
    displayPosts(); // Refresh the post feed
}

// Function to like a post
function likePost(postId) {
    // Find the post in the posts array
    let post = posts.find(post => post.userId === postId);
    if (post) {
        // Increment the number of likes
        post.likes++;
        // Refresh the post feed
        displayPosts();
    } else {
        console.error('Post not found!');
    }
}

// Function to comment on a post
function commentOnPost(postId) {
    let post = posts.find(post => post.userId === postId);
    if (post) {
        let postDiv = $(`#post-${postId}`);
        if (postDiv.length) {
            let commentDropdown = postDiv.find('.comment-dropdown');
            if (!commentDropdown.length) {
                commentDropdown = $('<div class="comment-dropdown my-2 d-none">');
                let commentTextarea = $('<textarea class="form-control mb-2 comment-textarea" placeholder="Write your comment...">');
                let submitButton = $('<button class="btn btn-primary comment-submit">Submit</button>').click(function() {
                    let commentText = commentTextarea.val();
                    if (commentText.trim() !== '') {
                        post.comments.push({ userId: 1, comment: commentText }); // Assuming user ID is 1
                        displayPosts();
                    }
                });
                commentDropdown.append(commentTextarea, submitButton);
                postDiv.append(commentDropdown);
            } else {
                commentDropdown.toggleClass('d-none');
            }
        } else {
            console.error('Post container not found!');
        }
    } else {
        console.error('Post not found!');
    }
}

// Function to display posts
function displayPosts() {
    let postFeed = $('.post-feed');
    postFeed.empty(); // Clear existing posts

    posts.forEach(post => {
        let user = users.find(u => u.id === post.userId);
        if (!user.profileImage) {
            user.profileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpAPoj3uAFcnqWKgYgThNuzx0WnrlZDdPQjYSZHo2dg&s";
        }

        let postDiv = $('<div class="post mb-3 p-2 card">');
        let cardHeader = $('<div class="card-header">');
        let profileImg = $('<img class="user-small profile-image rounded-circle">').attr('src', user.profileImage).attr('alt', 'Profile');
        let postAuthor = $('<span>').append($('<a>').attr('href', 'john').text(user.name));
        let postTime = $('<span>').text(post.timestamp);
        cardHeader.append(profileImg, postAuthor, postTime);

        let cardBody = $('<div class="card-body">').text(post.content);
        if (post.image) {
            let postImg = $('<img class="img-fluid img-thumbnail">').attr('src', post.image);
            cardBody.append(postImg);
        }

        let postActions = $('<div class="post-actions card-footer">');
        let likeButton = $('<button type="button" class="btn btn-outline-primary">').text(`Like (${post.likes})`).click(function() {
            likePost(post.likes);
        });
        let likeIcon = $('<i class="fas fa-thumbs-up">');
        likeButton.append(likeIcon);

        let commentButton = $('<button type="button" class="btn btn-outline-primary">').text(`Comment (${post.comments.length})`).click(function() {
            commentOnPost(post.userId);
        });
        let commentIcon = $('<i class="fas fa-comment">');
        commentButton.append(commentIcon);

        let shareButton = $('<button type="button" class="btn btn-outline-primary">').text('Share');
        let shareIcon = $('<i class="fas fa-share">');
        shareButton.append(shareIcon);

        postActions.append(likeButton, commentButton, shareButton);

        postDiv.append(cardHeader, cardBody, postActions);
        postFeed.append(postDiv);
    });
}

// Initial display of posts
displayPosts();


