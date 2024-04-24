$(document).ready(function() {
	let users = [{
		id: 1,
		name: 'John Doe',
		profile_image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/John_Doe%2C_born_John_Nommensen_Duchac.jpg'
	},
	{
		id: 2,
		name: 'Jane Smith',
		profile_image: ''
	},
	{
		id: 3,
		name: 'Alice Johnson',
		profile_image: ''
	},
	{
		id: 4,
		name: 'Michael Brown',
		profile_image: ''
	},
	{
		id: 5,
		name: 'Emily Wilson',
		profile_image: ''
	},
	{
		id: 6,
		name: 'David Martinez',
		profile_image: ''
	},
	{
		id: 7,
		name: 'Sarah Lee',
		profile_image: ''
	},
	{
		id: 8,
		name: 'Daniel Taylor',
		profile_image: ''
	},
	{
		id: 9,
		name: 'Olivia Garcia',
		profile_image: ''
	},
	{
		id: 10,
		name: 'James Rodriguez',
		profile_image: ''
	}];

	let posts = [{
		user_id: 1,
		content: 'Hello, world!',
		image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		timestamp: '2 hours ago',
		likes: 0,
		comments: []
	},
	{
		user_id: 2,
		content: 'This is a test post.',
		image: "https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_1600,c_limit/phonepicutres-TA.jpg",
		timestamp: '1 hour ago',
		likes: 0,
		comments: []
	},
	{
		user_id: 3,
		content: 'Another post!',
		image: "",
		timestamp: '30 minutes ago',
		likes: 0,
		comments: []
	},
	{
		user_id: 4,
		content: 'FOR THE EMPEROR',
		image: "https://example.com/image.jpg",
		timestamp: '1 day ago',
		likes: 0,
		comments: []
	},
	{
		user_id: 5,
		content: 'Birb',
		image: "",
		timestamp: '5 hours ago',
		likes: 0,
		comments: []
	},
	{
		user_id: 6,
		content: 'Something about a fox being quick',
		image: "",
		timestamp: '10 minutes ago',
		likes: 0,
		comments: []
	},
	{
		user_id: 7,
		content: 'Why did they teach us C++?????',
		image: "https://example.com/image.jpg",
		timestamp: '3 days ago',
		likes: 0,
		comments: []
	},
	{
		user_id: 8,
		content: 'What kind of music is everyone listening to?',
		image: "",
		timestamp: '1 hour ago',
		likes: 0,
		comments: []
	},
	{
		user_id: 9,
		content: 'HELLLLLLOOOOOOOO!!!!!!!!',
		image: "",
		timestamp: '20 minutes ago',
		likes: 0,
		comments: []
	},
	{
		user_id: 10,
		content: 'Meep',
		image: "",
		timestamp: '2 hours ago',
		likes: 0,
		comments: []
	},
	// Add more posts as needed
	];

	// Keep track of users who liked each post
	let liked_posts = {};

	// Function to display posts
	function display_posts() {
		let post_feed = $('.post-feed');
		post_feed.empty(); // Clear existing posts

		posts.forEach(post => {
			let user = users.find(u => u.id === post.user_id);
			if (!user.profile_image) {
				user.profile_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgpAPoj3uAFcnqWKgYgThNuzx0WnrlZDdPQjYSZHo2dg&s";
			}

			let post_div = $('<div class="post mb-3 p-2 card">');
			post_div.attr('id', `post - $ {
				post.user_id
			}`);
			let card_header = $('<div class="card-header">');
			let profile_img = $('<img class="user-small profile-image rounded-circle">').attr('src', user.profile_image).attr('alt', 'Profile');
			let post_author = $('<span>').append($('<a>').attr('href', 'john').text(user.name));
			let post_time = $('<span>').text(post.timestamp);
			card_header.append(profile_img, post_author, post_time);

			let card_body = $('<div class="card-body">').text(post.content);
			if (post.image) {
				let post_img = $('<img class="img-fluid img-thumbnail">').attr('src', post.image);
				card_body.append(post_img);
			}

			let post_actions = $('<div class="post-actions card-footer">');
			let like_button = $('<button type="button" class="btn btn-outline-primary">').text(`Like($ {
				post.likes
			})`).click(function() {
				like_post(post.user_id);
			});
			let like_icon = $('<i class="fas fa-thumbs-up">');
			like_button.append(like_icon);

			let comment_button = $('<button type="button" class="btn btn-outline-primary">').text(`Comment($ {
				post.comments.length
			})`).click(function() {
				comment_on_post(post.user_id);
			});
			let comment_icon = $('<i class="fas fa-comment">');
			comment_button.append(comment_icon);

			let share_button = $('<button type="button" class="btn btn-outline-primary">').text('Share');
			let share_icon = $('<i class="fas fa-share">');
			share_button.append(share_icon);

			post_actions.append(like_button, comment_button, share_button);

			post_div.append(card_header, card_body, post_actions);
			post_feed.append(post_div);
		});
	}

	// Function to handle liking a post
	function like_post(post_id) {
		let post = posts.find(post => post.user_id === post_id);
		if (post) {
			// Check if the post has been liked by the user
			if (!liked_posts[post_id]) {
				post.likes++;
				liked_posts[post_id] = true; // Mark the post as liked by the user
				display_posts(); // Refresh the post feed

				// Add bounce animation and change color to blue
				$(`#like - button - $ {
					post_id
				}`).animate({
					fontSize: '+=10px',
					color: 'blue'
				},
				200,
				function() {
					$(this).animate({
						fontSize: '-=10px'
					},
					200);
				});
			} else {
				post.likes--;
				delete liked_posts[post_id]; // Remove the user's like from the post
				display_posts(); // Refresh the post feed

				// Add shake animation and revert color to default
				$(`#like - button - $ {
					post_id
				}`).animate({
					left: '+=10px'
				},
				100,
				function() {
					$(this).animate({
						left: '-=20px'
					},
					100,
					function() {
						$(this).animate({
							left: '+=20px'
						},
						100,
						function() {
							$(this).animate({
								left: '-=20px'
							},
							100,
							function() {
								$(this).animate({
									left: '+=10px'
								},
								100,
								function() {
									$(this).css('color', '');
								});
							});
						});
					});
				});
			}
		} else {
			console.error('Post not found!');
		}
	}

	// Function to handle commenting on a post
	function comment_on_post(post_id) {
		let post = posts.find(post => post.user_id === post_id);
		if (post) {
			// Show or hide comment input field
			let comment_input = $(`#post - $ {
				post_id
			}.comment - input`);
			comment_input.toggle();
		} else {
			console.error('Post not found!');
		}
	}

	// Function to handle adding a new post
	function add_new_post() {
		let content = $('#post-content').val();
		let image = $('#post-image').val();
		let timestamp = new Date().toLocaleString();
		let user_id = 1; // Assuming the user is always the first user in the users array
		posts.push({
			user_id,
			content,
			image,
			timestamp,
			likes: 0,
			comments: []
		});
		display_posts(); // Refresh the post feed
	}

	// Event listener for submitting a new post
	$('#post-form').submit(function(e) {
		e.preventDefault();
		add_new_post();
	});

	// Event listener for file upload
	$('#image-upload').change(function(e) {
		let file = e.target.files[0];
		// Handle file upload here
	});

	// Event listener for search form submission
	$('#search-form').submit(function(e) {
		e.preventDefault();
		let query = $('#search-form input').val();
		// Perform search based on the query
		// Display search results
	});

	// Initial display of posts
	display_posts();

	// Function to search posts and move to the first found post
	function search_posts(query) {
		// Get all post elements
		var posts = document.querySelectorAll('.post-feed .post');
		var found = false;

		// Loop through each post to check for query
		posts.forEach(function(post) {
			var post_text = post.textContent.toLowerCase(); // Get post text in lowercase
			if (post_text.includes(query.toLowerCase())) { // Check if post contains query text
				// Scroll to the post
				post.scrollIntoView({
					behavior: 'smooth'
				});
				found = true;
				return; // Exit loop if post is found
			}
		});

		// If no post is found, show alert
		if (!found) {
			alert('No posts found containing: ' + query);
		}
	}

	// Event listener for form submission to perform search
	$('form.form-inline').submit(function(event) {
		event.preventDefault(); // Prevent default form submission

		// Get search query
		var query = $(this).find('input[type="search"]').val();

		// Perform search
		search_posts(query);

		// Function to handle adding a new post
		function add_new_post() {
			let content = $('#post-content').val();
			let image = $('#post-image').val();
			let timestamp = new Date().toLocaleString();
			let user_id = 1; // Assuming the user is always the first user in the users array
			posts.push({
				user_id,
				content,
				image,
				timestamp,
				likes: 0,
				comments: []
			});
			display_posts(); // Refresh the post feed
		}

	});

	// Function to toggle dark mode
	function toggle_dark_mode() {
		const body = document.body;
		body.classList.toggle("dark-mode");

		// Change icon based on dark mode state
		const dark_mode_icon = document.getElementById('dark-mode-icon');
		if (body.classList.contains("dark-mode")) {
			dark_mode_icon.classList.remove("fa-moon");
			dark_mode_icon.classList.add("fa-sun");
		} else {
			dark_mode_icon.classList.remove("fa-sun");
			dark_mode_icon.classList.add("fa-moon");
		}
	}

	// Event listener for dark mode toggle switch
	document.getElementById("darkModeToggle").addEventListener("change",
	function() {
		toggle_dark_mode();
	});

});