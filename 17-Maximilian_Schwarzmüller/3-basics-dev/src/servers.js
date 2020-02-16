const servers = [
    {name: 'server1',  id: 1},
    {name: 'server2',  id: 2},
    {name: 'server3',  id: 3},
    {name: 'server4',  id: 4},
    {name: 'server5',  id: 5},
    {name: 'server6',  id: 6},
    {name: 'server7',  id: 7},
    {name: 'server8',  id: 8},
    {name: 'server9',  id: 9}
];
const send = true;
export default function getServers () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(servers);
        }, 2000)
        if(!send) reject()
    });

}