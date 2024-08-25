document.addEventListener('DOMContentLoaded', function() {
    const clubs = [
        {
            name: 'Coding Club',
            description: 'Learn and practice coding with friends. All skill levels welcome!',
            meetingTime: 'Wednesdays, 3:00 PM - 4:30 PM',
            contact: 'codingclub@example.com'
        },
        {
            name: 'Art Club',
            description: 'Explore various forms of art and improve your skills.',
            meetingTime: 'Mondays, 4:00 PM - 5:30 PM',
            contact: 'artclub@example.com'
        },
        {
            name: 'Science Club',
            description: 'Participate in exciting experiments and science projects.',
            meetingTime: 'Fridays, 2:30 PM - 4:00 PM',
            contact: 'scienceclub@example.com'
        },
        // Add more clubs as needed
    ];

    const clubList = document.querySelector('.club-list');

    clubs.forEach(club => {
        const clubElement = document.createElement('div');
        clubElement.classList.add('club');

        const clubName = document.createElement('h2');
        clubName.textContent = club.name;

        const clubDescription = document.createElement('p');
        clubDescription.textContent = club.description;

        const clubMeetingTime = document.createElement('p');
        clubMeetingTime.textContent = `Meeting Time: ${club.meetingTime}`;

        const clubContact = document.createElement('p');
        clubContact.textContent = `Contact: ${club.contact}`;

        clubElement.appendChild(clubName);
        clubElement.appendChild(clubDescription);
        clubElement.appendChild(clubMeetingTime);
        clubElement.appendChild(clubContact);

        clubList.appendChild(clubElement);
    });
});
