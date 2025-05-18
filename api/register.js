

      let register = document.getElementById("registerButton")
      let result = document.getElementById("result")

      register.addEventListener('click', (e) => {
        e.preventDefault

        let registerData = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
          team_name: document.getElementById("team").value
        }

        fetch('https://test.blockfuselabs.com/api/register', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(registerData)
        })
        .then((res) => {
          if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`)
          }
          return res.json()
        })
        .then(data => {
          console.log('Registration successful:', data)
          result.textContent = 'Registration successful!'
        })
        .catch(error => {
          console.error('Registrattion failed', error)
          result.textContent ='Registration failed'
        })
      })
    