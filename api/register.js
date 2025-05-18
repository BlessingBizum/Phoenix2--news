let register = document.getElementById("registerButton");
let result = document.getElementById("result");

register.addEventListener('click', (e) => {
  e.preventDefault();

  let registerData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    team_name: document.getElementById("team").value
  };

  fetch('https://test.blockfuselabs.com/api/register', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registerData)
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return res.json();
    } else {
      return res.text();
    }
  })
  .then(data => {
    if (typeof data === 'object') {
      console.log('Registration successful:', data);
      result.textContent = 'Registration successful!';
    } else {
      console.error('Unexpected response:', data);
      result.textContent = 'Registration failed: Unexpected response from server.';
    }
  })
  .catch(error => {
    console.error('Registration failed', error);
    result.textContent = 'Registration failed: ' + error.message;
  });
});