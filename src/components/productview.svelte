<script>
	import CartButton from './cartButton.svelte';
	import Lightbox from './lightbox.svelte';
    import products from '../model/products.json'

    let {rrp, price, discount, currency, id, name, description, images} = products[0]

	export let selected = 1;

	export let isOpen = false;
</script>

<div class="w-full py-20 xl:px-20 flex justify-between gap-x-20">
	<Lightbox bind:isOpen {images} {selected} />
	<!-- Images -->
	<div class="w-1/2 max-w-[500px]">
		<button on:click={() => (isOpen = true)}>
			<img src={images[selected]} alt="selected" class="w-full rounded-lg" />
		</button>
		<div class="flex justify-between gap-x-6 mt-6 w-full">
			<button
				on:click={() => (selected = 1)}
				class={`rounded-lg hover:opacity-50 ${selected == 1 && 'opacity-50 ring-2 ring-orange'}`}
			>
				<img src="images/image-product-1-thumbnail.jpg" alt="selected" class="rounded-lg" />
			</button>
			<button
				on:click={() => (selected = 2)}
				class={`rounded-lg hover:opacity-50 ${selected == 2 && 'opacity-50 ring-2 ring-orange'}`}
			>
				<img src="images/image-product-2-thumbnail.jpg" alt="selected" class="rounded-lg" />
			</button>
			<button
				on:click={() => (selected = 3)}
				class={`rounded-lg hover:opacity-50 ${selected == 3 && 'opacity-50 ring-2 ring-orange'}`}
			>
				<img src="images/image-product-3-thumbnail.jpg" alt="selected" class="rounded-lg" />
			</button>
			<button
				on:click={() => (selected = 4)}
				class={`rounded-lg hover:opacity-50 ${selected == 4 && 'opacity-50 ring-2 ring-orange'}`}
			>
				<img src="images/image-product-4-thumbnail.jpg" alt="selected" class="rounded-lg" />
			</button>
		</div>
	</div>

	<!-- Description -->
	<div class="w-1/2">
		<!-- Heading -->
		<p class="text-orange font-bold text-xs">SNEAKER COMPANY</p>
		<h1 class="font-bold text-3xl">{name}</h1>

		<!-- Description -->
		<p class="my-6 text-sm text-gray-500">
			{description}
		</p>

		<!-- Prices -->
		<span class="flex gap-x-2 items-center">
			<p class="text-2xl font-bold">{currency}{price.toFixed(2)}</p>
			<p class="bg-paleorange text-orange px-1 text-xs font-bold">{discount * 100}%</p>
		</span>
		<p class="line-through text-gray-400 text-sm font-bold mb-6">{currency}{rrp.toFixed(2)}</p>

		<!-- Cart Buttons -->
		<CartButton id={id} />
	</div>
</div>
