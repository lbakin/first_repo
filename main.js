const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Take me out to the ballgame',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Order Chinese take out',
        isCompleted: true
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);