// Test user data
let users = [
    { id: 1, name: 'John Doe', profileImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg' },
    { id: 2, name: 'Jane Smith', profileImage: 'profile2.jpg' },
    // Add more users as needed
];

// Test post data
let posts = [
    { userId: 1, content: 'Hello, world!', image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", timestamp: '2 hours ago', likes: 0, comments: [] },
    { userId: 2, content: 'This is a test post.', image: "https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_1600,c_limit/phonepicutres-TA.jpg", timestamp: '1 hour ago', likes: 0, comments: [] },
    // Add more posts as needed
];

// Function to display posts
function displayPosts() {
    let postFeed = document.querySelector('.post-feed');
    postFeed.innerHTML = ''; // Clear existing posts

    posts.forEach(post => {
        let user = users.find(u => u.id === post.userId);
        let postHTML = `
            <div class="post mb-3">
                <div class="post-header">
                    <img src="${user.profileImage}" alt="Profile" class="poster-pic profile-image rounded-circle">
                    <div class="post-info">
                        <span class="post-author">${user.name}</span>
                        <span class="post-time">${post.timestamp}</span>
                    </div>
                </div>
                <div class="post-content">
                    ${post.content}
                    <img src="${post.image}" class="post-pic img-fluid img-thumbnail">
                </div>
                <div class="post-actions">
                    <button type="button" class="btn btn-outline-primary" onclick="likePost(${post.likes})">Like (${post.likes})</button>
                    <button type="button" class="btn btn-outline-primary" onclick="commentOnPost(${post.comments})">Comment (${post.comments.length})</button>
                    <button type="button" class="btn btn-outline-primary">Share</button>
                </div>
            </div>
        `;
        postFeed.innerHTML += postHTML;
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
function likePost(likes) {
    // Increment the number of likes
    likes++;
    
}

// Function to comment on a post
function commentOnPost(comments) {
    // Add a comment to the post
    comments.push({ userId: 1, comment: 'This is a comment' }); // Assuming the user is always the first user in the users array
}

// Initial display of posts
displayPosts();

