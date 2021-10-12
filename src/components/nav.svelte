<script>
	import { beforeUpdate, afterUpdate } from 'svelte';
	import MediaQuery from '../helpers/MediaQuery.svelte';

	import Mobilemenu from './mobilemenu.svelte';
	import Cart from './cart.svelte';
	import { cartItems } from '../stores/cart.js';
	export let cartvisible = false;

	export let cartSize;

	afterUpdate(() => {
		cartSize = 0;
		$cartItems.forEach((item) => {
			cartSize += item.quantity;
		});
	});

	export let menuIsOpen;
	function handleClick () {
		menuIsOpen = true;
		console.log(menuIsOpen);
	}
</script>

<nav
	class="px-2 py-4 md:px-0 md:py-10 w-full flex justify-between items-center gap-x-12
    border-b-2 border-b-gray-200
    relative"
>
	<div class="flex gap-x-12 items-center">
	<MediaQuery query="(max-width: 1281px)" let:matches>
		{#if matches}
			<button on:click={handleClick}>
				<img src="/images/icon-menu.svg" alt="menu" />
			</button>
			<Mobilemenu bind:menuIsOpen />
		{/if}
	</MediaQuery>
		<!--/* Logo */-->
		<img src="/images/logo.svg" alt="Logo" />

		<MediaQuery query="(min-width: 1281px)" let:matches>
			{#if matches}
				<!-- Nav Links-->
				<ul class="text-sm inline-flex gap-x-6 text-gray-500">
					<li>
						<a href="/">Collections</a>
					</li>
					<li>
						<a href="/">Men</a>
					</li>
					<li>
						<a href="/">Women</a>
					</li>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
			{/if}
		</MediaQuery>
	</div>

	<div class="flex gap-x-6 items-center">
		<!--Cart Icon-->
		<button on:click={() => (cartvisible = !cartvisible)} class="relative focus:text-orange">
			<img src="/images/icon-cart.svg" alt="Cart-Icon" class="h-4" />

			{#if cartSize > 0}
				<p
					class="absolute -top-2 -right-2 text-orange text-xs bg-gray-600 shadow-md rounded-full px-1 z-10"
				>
					{cartSize}
				</p>
			{/if}
		</button>

		<!--Avatar-->
		<button class="focus:ring-2 ring-orange rounded-full">
			<img src="/images/image-avatar.png" alt="User Avatar" class="h-8" />
		</button>
	</div>
	<Cart bind:cartvisible />
</nav>
