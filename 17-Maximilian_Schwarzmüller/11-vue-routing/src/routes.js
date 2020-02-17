import { Home, User, Users, UserEdit } from './components';
export const routes = [
    { path: '', component: Home, name: 'home' },
    {
        path: '/users', component: Users, name: 'usersList', children: [
            { path: ':id', component: User, name: 'singleUser' },
            { path: ':id/edit/:mode', component: UserEdit, name: 'editUser' }
        ]
    }
]