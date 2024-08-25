document.addEventListener('DOMContentLoaded', function() {
    const hobbies = [
        {
            title: 'Project One',
            description: 'A web application for tracking fitness activities.',
            image: 'https://via.placeholder.com/300x200'
        },
        {
            title: 'Project Two',
            description: 'An e-commerce website for selling digital products.',
            image: 'https://via.placeholder.com/300x200'
        },
        {
            title: 'Project Three',
            description: 'A social media platform for connecting with friends.',
            image: 'https://via.placeholder.com/300x200'
        }
    ];

    const hobbyList = document.querySelector('.hobby-list');

    hobbies.forEach(hobby => {
        const hobbyElement = document.createElement('div');
        hobbyElement.classList.add('hobby');

        const hobbyImage = document.createElement('img');
        hobbyImage.src = hobby.image;

        const hobbyTitle = document.createElement('h3');
        hobbyTitle.textContent = hobby.title;

        const hobbyDescription = document.createElement('p');
        hobbyDescription.textContent = hobby.description;

        hobbyElement.appendChild(hobbyImage);
        hobbyElement.appendChild(hobbyTitle);
        hobbyElement.appendChild(hobbyDescription);

        hobbyList.appendChild(hobbyElement);
    });
});

