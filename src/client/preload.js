import pathToRegExp from 'path-to-regexp-es6'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Account/Login'
import Logout from './components/Account/Logout'

// All your server side prefetching is done here
// When a route is matched, the static function is executed
const routes = [
    {
        pattern: '/',
        execute: Home.onEnter
    },
    {
        pattern: '/page/about',
        execute: About.onEnter
    },
    {
        pattern: '/page/login',
        execute: Login.onEnter
    },
    {
        pattern: '/page/logout',
        execute: Logout.onEnter
    }
]

// Execute server-side async methods to refetch data
export default (stores, url) => {
    const matches = routes.filter(r => !!pathToRegExp(r.pattern).exec(url))
    return Promise.all(matches.map(route => route.execute(stores)))
}
