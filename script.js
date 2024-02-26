document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var postContent = document.getElementById('postContent').value;
    var postDiv = document.createElement('div');
    postDiv.textContent = postContent;
    document.getElementById('posts').appendChild(postDiv);
    document.getElementById('postContent').value = ''; // Clear the textarea after posting
});

document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var postContent = document.getElementById('postContent').value;
    var postDiv = document.createElement('div');
    postDiv.classList.add('post');

    var img = document.createElement('img');
    img.src = 'Images/download (1).png'; // Path to your profile picture
    img.alt = 'Profile Picture';
    img.classList.add('post-profile-pic');

    var usernameSpan = document.createElement('span');
    usernameSpan.textContent = 'Lucas Keats'; // Lucas Keats
    usernameSpan.classList.add('post-username');

    var contentSpan = document.createElement('span');
    contentSpan.textContent = postContent;
    contentSpan.classList.add('post-content');

    postDiv.appendChild(img);
    postDiv.appendChild(usernameSpan);
    postDiv.appendChild(contentSpan);

    document.getElementById('posts').appendChild(postDiv);
    document.getElementById('postContent').value = ''; // Clear the textarea after posting
});

document.querySelectorAll('.dropdown-content a').forEach(function(item) {
    var acceptButton = item.querySelector('.accept');
    acceptButton.addEventListener('click', function(event) {
        event.preventDefault();
        var username = item.getAttribute('data-username');
        var profilePic = item.getAttribute('data-profile-pic');

        var friendDiv = document.createElement('div');
        friendDiv.classList.add('friend');

        var img = document.createElement('img');
        img.src = "Images/download (1).png";
        img.alt = username;
        img.classList.add('friend-profile-pic');

        var nameSpan = document.createElement('span');
        nameSpan.textContent = username;
        nameSpan.classList.add('friend-username');

        friendDiv.appendChild(img);
        friendDiv.appendChild(nameSpan);

        document.querySelector('.box2 .box-title2').appendChild(friendDiv);

        item.remove(); // Remove the request from the dropdown
    });

    var declineButton = item.querySelector('.decline');
    declineButton.addEventListener('click', function(event) {
        event.preventDefault();
        item.remove(); // Remove the request from the dropdown
    });
});