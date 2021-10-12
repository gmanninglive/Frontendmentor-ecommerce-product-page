<script>
	import { clickOutside } from '../helpers/clickOutside.js';
	export let isOpen;
	export let images;
	export let selected;

	// Closes Lightbox on click outside image
	function handleClickOutside(event) {
		isOpen = false;
	}
	// Closes Lightbox on esc key press
	function handleKeydown(event) {
		let keyCode = event.keyCode;
		if (keyCode === 27) {
			isOpen = false;
		}
		console.log(keyCode);
	}
</script>

<!-- Keydown listener -->
<svelte:window on:keydown={handleKeydown} />

<!-- Wrapper -->
<div class={`flex justify-center items-center 
absolute top-0 left-0 z-10 
w-full h-full bg-black/[0.75] ${isOpen ? 'block ' : 'hidden '} `}
>
	<!-- Images -->
	<div use:clickOutside on:click_outside={handleClickOutside} class="w-1/2 max-w-[500px]">
		<div class="relative">

			<!-- Main Image -->
			<button on:click={() => (isOpen = true)}>
				<img src={images[selected]} alt="selected" class="w-full rounded-lg" />
			</button>

			<!-- Previous button -->
			<button
				on:click={() => {
					if (selected > 1) selected--;
				}}
				class="absolute top-1/2 bottom-1/2 h-10 w-10 -left-5 hover:opacity-50 p-4 rounded-full bg-white flex justify-center items-center"
			>
				<img src="/images/icon-previous.svg" alt="previous" />
			</button>

			<!-- Forward button -->
			<button
				on:click={() => {
					if (selected < 4) selected++;
				}}
				class="absolute top-1/2 bottom-1/2 h-10 w-10 -right-5 hover:opacity-50 p-4 rounded-full bg-white flex justify-center items-center"
			>
				<img src="/images/icon-next.svg" alt="next" />
			</button>

			<!-- Close button -->
			<button on:click={() => (isOpen = false)} class="absolute -top-4 -right-4 ">
				<img src="/images/icon-close.svg" alt="close" />
			</button>
		</div>

		<!-- Thumbnails -->
		<div class="flex justify-between gap-x-6 mt-6 w-full">
			<button
				on:click={() => (selected = 1)}
				class={`rounded-lg hover:opacity-100  ${selected != 1 && 'opacity-50 ring-2 ring-orange'}`}
			>
				<img src="images/image-product-1-thumbnail.jpg" alt="selected" class="rounded-lg" />
			</button>
			<button
				on:click={() => (selected = 2)}
				class={`rounded-lg hover:opacity-100 ${selected != 2 && 'opacity-50 ring-2 ring-orange'}`}
			>
				<img src="images/image-product-2-thumbnail.jpg" alt="selected" class="rounded-lg" />
			</button>
			<button
				on:click={() => (selected = 3)}
				class={`rounded-lg hover:opacity-100 ${selected != 3 && 'opacity-50 ring-2 ring-orange'}`}
			>
				<img src="images/image-product-3-thumbnail.jpg" alt="selected" class="rounded-lg" />
			</button>
			<button
				on:click={() => (selected = 4)}
				class={`rounded-lg hover:opacity-100 ${selected != 4 && 'opacity-50 ring-2 ring-orange'}`}
			>
				<img src="images/image-product-4-thumbnail.jpg" alt="selected" class="rounded-lg" />
			</button>
		</div>
	</div>
</div>
