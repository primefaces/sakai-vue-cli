<template>
    <Landing v-if="$route.path === '/landing'" />
    <Login v-else-if="$route.path === '/login'" />
    <Error v-else-if="$route.path === '/error'" />
    <NotFound v-else-if="$route.path === '/notfound'" />
    <Access v-else-if="$route.path === '/access'" />
    <App v-else />
</template>

<script>
import App from './App';
import Landing from './pages/LandingDemo';
import Login from './pages/Login';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import Access from './pages/Access';

export default {
    components: {
        App,
        Landing,
        Login,
        Error,
        NotFound,
        Access
    }
}
</script>