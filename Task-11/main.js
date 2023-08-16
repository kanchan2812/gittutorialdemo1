
        const userForm = document.getElementById('userForm');

        userForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');

            const userDetails = {
                name: nameInput.value,
                email: emailInput.value
            };

            let storedUsers = JSON.parse(localStorage.getItem('userDetails')) || [];

            storedUsers.push(userDetails);

            localStorage.setItem('userDetails', JSON.stringify(storedUsers));

            alert('User details stored in local storage.');
        });
    






