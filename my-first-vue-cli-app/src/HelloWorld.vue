<script>
import NavLink from './components/NavLink.vue'

export default {
	name: 'App',
	components: {
		NavLink
	}
}
</script>

<template>
	<div id="app">
		<nav>
			<NavLink url="/" text="Accueil" />
			<NavLink url="/about" text="À propos" />
			<NavLink url="/contact" text="Contact" />
		</nav>
	</div>
</template>

<template>
    <h1>Je suis un nouveau composant !</h1>
</template>

<script>
    export default {
        data: { msg: 'Bonjour !' },
        beforeCreate() { console.log('Je ne suis pas encore  créé') },
        created() { console.log('Je suis créé !') },
        beforeMount() { console.log('Je vais bientôt être monté sur le DOM!') },
        mounted() { console.log('Je suis monté sur le DOM!') },
        beforeDestroy() { console.log('Je suis sur le point de disparaître du DOM !') },
        destroyed() { console.log('Je suis supprimé') }
    }
</script>