const users = [
    {
        "id": 1,
        "first": "Aidan",
        "last": "Wang",
        "dob": "1973-10-16",
        "gender": "male",
        "email": "aidan.wang@example.com",
        "picture": "https://randomuser.me/api/portraits/med/men/93.jpg",
        "country": "New Zealand",
        "description": "This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang."
    },
    {
        "id": 2,
        "first": "Anna",
        "last": "Horten",
        "dob": "1972-03-15",
        "gender": "female",
        "email": "anna.horten@example.com",
        "picture": "https://randomuser.me/api/portraits/med/women/48.jpg",
        "country": "Norway",
        "description": "This character description generator will generate a fairly random description of a belonging to Anna Horten. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Anna Horten."
    },
    {
        "id": 3,
        "first": "Max",
        "last": "Arnold",
        "dob": "1954-04-22",
        "gender": "male",
        "email": "max.arnold@example.com",
        "picture": "https://randomuser.me/api/portraits/med/men/27.jpg",
        "country": "Ireland",
        "description": "This character description generator will generate a fairly random description of a belonging to Max Arnold. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Max Arnold."
    },
    {
        "id": 4,
        "first": "محمدپارسا",
        "last": "صدر",
        "dob": "1953-06-01",
        "gender": "male",
        "email": "mhmdprs.sdr@example.com",
        "picture": "https://randomuser.me/api/portraits/med/men/34.jpg",
        "country": "Iran",
        "description": "This character description generator will generate a fairly random description of a belonging to محمدپارسا صدر. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of محمدپارسا صدر."
    },
    {
        "id": 5,
        "first": "Emilia",
        "last": "Gonzalez",
        "dob": "1949-10-07",
        "gender": "female",
        "email": "emilia.gonzalez@example.com",
        "picture": "https://randomuser.me/api/portraits/med/women/90.jpg",
        "country": "Spain",
        "description": "This character description generator will generate a fairly random description of a belonging to Emilia Gonzalez. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emilia Gonzalez."
    },
    {
        "id": 6,
        "first": "Alicia",
        "last": "Ma",
        "dob": "1995-11-23",
        "gender": "female",
        "email": "alicia.ma@example.com",
        "picture": "https://randomuser.me/api/portraits/med/women/91.jpg",
        "country": "Canada",
        "description": "This character description generator will generate a fairly random description of a belonging to Alicia Ma. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Alicia Ma."
    },
    {
        "id": 7,
        "first": "یاسمن",
        "last": "كامياران",
        "dob": "1985-06-24",
        "gender": "female",
        "email": "ysmn.kmyrn@example.com",
        "picture": "https://randomuser.me/api/portraits/med/women/64.jpg",
        "country": "Iran",
        "description": "This character description generator will generate a fairly random description of a belonging to یاسمن كامياران. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of یاسمن كامياران."
    },
    {
        "id": 8,
        "first": "Reingard",
        "last": "Barz",
        "dob": "1985-03-24",
        "gender": "female",
        "email": "reingard.barz@example.com",
        "picture": "https://randomuser.me/api/portraits/med/women/95.jpg",
        "country": "Germany",
        "description": "This character description generator will generate a fairly random description of a belonging to Reingard Barz. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Reingard Barz."
    },
    {
        "id": 9,
        "first": "Felix",
        "last": "Douglas",
        "dob": "1984-07-05",
        "gender": "male",
        "email": "felix.douglas@example.com",
        "picture": "https://randomuser.me/api/portraits/med/men/53.jpg",
        "country": "United Kingdom",
        "description": "This character description generator will generate a fairly random description of a belonging to Felix Douglas. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Felix Douglas."
    },
    {
        "id": 10,
        "first": "Ege",
        "last": "Akman",
        "dob": "1991-08-08",
        "gender": "male",
        "email": "ege.akmn@example.com",
        "picture": "https://randomuser.me/api/portraits/med/men/50.jpg",
        "country": "Turkey",
        "description": "This character description generator will generate a fairly random description of a belonging to Ege Akman. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Ege Akman."
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const userList = document.getElementById("user-list");
    const searchInput = document.getElementById("search");

    function displayUsers(users) {
        userList.innerHTML = "";
        users.forEach(user => {
            const userCard = document.createElement("div");
            userCard.className = "user-card";
            userCard.innerHTML = `
                <img src="${user.picture}" alt="${user.first} ${user.last}">
                <h2>${user.first} ${user.last}</h2>
                <div class="user-details">
                    <p><strong>DOB:</strong> ${user.dob}</p>
                    <p><strong>Gender:</strong> ${user.gender}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Country:</strong> ${user.country}</p>
                    <p>${user.description}</p>
                </div>
            `;
            userCard.addEventListener("click", () => {
                userCard.classList.toggle("open");
            });
            userList.appendChild(userCard);
        });
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = this.value.toLowerCase();
        const filteredUsers = users.filter(user => {
            return user.first.toLowerCase().includes(searchTerm) ||
                user.last.toLowerCase().includes(searchTerm) ||
                user.email.toLowerCase().includes(searchTerm) ||
                user.country.toLowerCase().includes(searchTerm);
        });
        displayUsers(filteredUsers);
    });

    displayUsers(users);
});
