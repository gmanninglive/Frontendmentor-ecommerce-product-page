<script>
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cartItems } from '../stores/cart.js';
	import products from '../model/products.json';

	let { rrp, price, discount, currency, id, name, images, thumbnails } = products[0];

	export let cartvisible = false;
</script>

{#if cartvisible}
	<div
		transition:fade
		class="absolute top-28 right-0 bg-white shadow-xl rounded-lg flex flex-col gap-y-4"
	>
		<p class="w-full p-4 border-b-2 ">Cart</p>

		{#if !$cartItems[0]}<p class="px-10 py-6">Your Cart is Empty!</p>{/if}
		{#if $cartItems.length > 0}
			{#each $cartItems as item, i}
				<div class="flex items-center gap-x-10 p-4">
					{item.id}
					<img
						src={products[item.id - 1].thumbnails[0]}
						alt="thumbnail"
						class="w-12 h-12 rounded-lg"
					/>
					<div class="text-sm text-gray-500">
						<p class="">{products[item.id - 1].name}</p>
						<span class="flex gap-x-2">
							<p class="">
								{`${currency}${products[item.id - 1].price.toFixed(2)} x ${item.quantity}`}
							</p>
							<p class="font-bold text-black">
								{currency}{(item.quantity * products[item.id - 1].price).toFixed(2)}
							</p>
						</span>
					</div>

                    <!-- Remove Item from Cart -->
                    <!-- Temp hacky way of removing specific item based on Index in store -->
					<button
						on:click={() => {
							$cartItems.length > 1
								? cartItems.update((items) => items.splice(i - 1, 1))
								: cartItems.set([]);
						}}
					>
						<img src="/images/icon-delete.svg" alt="remove item" class="h-4" />
					</button>
				</div>
			{/each}

			<button class="w-full py-4 bg-orange text-white m-4 rounded-lg font-bold">Checkout</button>
		{/if}
	</div>
{/if}
