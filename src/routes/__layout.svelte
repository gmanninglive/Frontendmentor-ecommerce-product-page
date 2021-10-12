<script>
	import '../app.css';

	import Nav from "../components/nav.svelte"
</script>

<div class="w-screen">
<div class="w-full md:w-10/12 mx-auto">
	<Nav />
<slot />
</div>
</div>