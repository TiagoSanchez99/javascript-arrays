const avengers = [
    {
        id: 1,
        name: 'IronMan'
    },
    {
        id: 2,
        name: 'Captain America'
    },
    {
        id: 3,
        name: 'Ant-man'
    },
    {
        id: 4,
        name: 'Wolverine'
    },
    {
        id: 5,
        name: 'Beast'
    },
    {
        id: 6,
        name: 'Carol Denvers'
    }
]

const xmen = [
    {
        id: 1,
        name: 'Professor X'
    },
    {
        id: 2,
        name: 'Wolverine'
    },
    {
        id: 3,
        name: 'Beast'
    },
    {
        id: 4,
        name: 'Havok'
    },
    {
        id: 5,
        name: 'Iceman'
    }
]

function MatchFilter(avengers,xmen){
    return Hero= xmen.filter(x => {return avengers.some(avenger => avenger.name === x.name)});
}

console.log(MatchFilter(avengers,xmen));