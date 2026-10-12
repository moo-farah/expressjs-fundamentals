const output = document.querySelector('#posts-container');
const getPostsBtn = document.querySelector('#get-posts-btn');
const postForm = document.querySelector('#post-form');

// Get and show posts
async function showPosts() {
    try {
        const response = await fetch('http://localhost:8000/api/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const posts = await response.json();
        output.innerHTML = '';

        posts.forEach((post) => {
            const postEl = document.createElement('div');
            postEl.textContent = post.title;
            output.appendChild(postEl);
        }); 
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Submit a new post
async function addPost(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');

    try {
        const res = await fetch('http://localhost:8000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        })

        if (!res.ok) throw new Error('Failed to create post');
        const post = await res.json();

        const postEl = document.createElement('div');
        postEl.textContent = post.title;
        output.appendChild(postEl);
        showPosts();
    } catch (error) {
        console.error('Error creating post:', error);
    }
}


// Add event listener to the button
getPostsBtn.addEventListener('click', showPosts);
postForm.addEventListener('submit', addPost);