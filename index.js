// function Create an async function getUser() that uses fetch() to get data from:


// async function getUser() {
//     const api_url = "https://jsonplaceholder.typicode.com/users/1";
//     try {
//         const response = await fetch(api_url);
//         const data = await response.json();
//         console.log(`Name: ${data.name}`);
//         console.log(`Email: ${data.email}`);
//         console.log(`City: ${data.address.city}`);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getUser();
//  Create an async function that fetches:

// async function getUser() {
//     const api_url = "https://jsonplaceholder.typicode.com/users/99999";
//     try {
//         const response = await fetch(api_url);

//         // Throw an error if the status is not in the 200-299 range
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("User not found");
//     }
// }

// getUser();


//  3. Create a Delay
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function rundelayExample() {
//     console.log("starting delay function");
//     await delay(2000);
//     console.log("after 2 sec");
//     await delay(2000);
//     console.log("after 2 sec");
//     await delay(2000);
//     console.log("after 2 sec");
//     await delay(2000);
//     console.log("after 2 sec");
// }
// rundelayExample();

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
// async function runDelay() {
//     console.log("Start delay");
//     await delay(1000);
//     console.log("1 sec passed");
//     await delay(1000);
//     console.log("1 sec passed");
//     await delay(1000);
//     console.log("1 sec passed");
//     await delay(1000);
//     console.log("1 sec passed");
//     await delay(1000);
//     console.log("1 sec passed");
// }
// runDelay();

// 4. Fetch Posts
// async function fetchPosts() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const posts = await response.json();

//         // Loop through the first 5 posts
//         for (let i = 0; i < 5; i++) {
//             console.log(`Post ${i + 1}: ${posts[i].title}`);
//         }
//     } catch (error) {
//         console.log("Error fetching posts:", error);
//     }
// }

// fetchPosts();

// async function fetchPosts() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const posts = await response.json();
//         for (let i = 0; i < 5; i++) {
//             console.log(`Post ${i + 1}: ${posts[i].title}`);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchPosts();

// async function fetchPosts() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();

//         for (let i = 0; i <= 5; i++) {
//             console.log(`Post ${i + 1}: ${data[i].title}`);
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchPosts();

// 5. Sequential API Calls
// Create two async functions: First fetch the user and then fetch the posts. 

// async function fetchUser(userId) {
//     console.log(`Fetching user ${userId}...`);
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     return await response.json();
// }

// async function fetchUserPosts(userId) {
//     console.log(`Fetching posts for user ${userId}...`);
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//     return await response.json();
// }

async function fetchUser(userId) {
    console.log(`Fetching user ${userId}...`);
    const responsive = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return await responsive.json();
}

async function fetchUserPosts(userId) {
    console.log(`Fetching posts for user ${userId}...`);
    const responsive = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return await responsive.json();
}
async function displayUserAndPosts() {
    try {
        const userId = 1;

        // 1. Fetch user first
        const user = await fetchUser(userId);
        console.log(`Successfully fetched user: ${user.name}`);

        // 2. Fetch posts after the user is retrieved
        const posts = await fetchUserPosts(userId);
        console.log(`Successfully fetched ${posts.length} posts for ${user.name}`);
        console.log(`First post title: ${posts[0].title}`);

    } catch (error) {
        console.log("Error during sequential fetch:", error);
    }
}

displayUserAndPosts();