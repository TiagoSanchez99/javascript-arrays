const characters = [
    {
        id: 1,
        name: 'IronMan',
        teams: ['avengers'],
    },
    {
        id: 2,
        name: 'SpiderMan',
        teams: ['avengers']
    },
    {
        id: 3,
        name: 'Thor',
        teams: ['guardians of the galaxy', 'avengers', 'the defenders']
    },
    {
        id: 4,
        name: 'Hulk',
        teams: ['avengers']
    },
    {
        id: 5,
        name: 'Doctor Strange',
        teams: ['avengers', 'the defenders', 'illuminati']
    },
    {
        id: 6,
        name: 'Beast',
        teams: ['avengers', 'x-men']
    },
    {
        id: 7,
        name: 'Professor X',
        teams: ['x-men', 'illuminati']
    },
    {
        id: 8,
        name: 'Moon Knight',
        teams: ['illuminati', 'avengers']
    },
    {
        id: 9,
        name: 'Wolverine',
        teams: ['x-men', 'avengers']
    },
    {
        id: 10,
        name: 'Nightcrawler',
        teams: ['x-men']
    }
]

function XMenFilter(characters){
    return XMenCharacter= characters.filter(xmen => xmen.teams.includes('x-men'));
}

console.log(XMenFilter(characters));