import express from 'express';

const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route
app.get('/users', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
  
    res.send(
      `<h1 class="text-2xl font-bold my-4">Users (came from server)</h1>
      <ul>
        ${users.map((user) => `<li>${user.name}</li>`).join('')}
      </ul>
      `
    );
  } catch (error) {
    console.log(`ERROR at /users: ${error}`);
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});
