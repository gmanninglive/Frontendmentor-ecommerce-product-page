<script>
    export let menuIsOpen;
</script>

{#if menuIsOpen}
<div class="w-full absolute top-0 h-screen z-10 bg-black/[0.75]">
    <div class="w-8/12 bg-white h-screen">
        <!-- Close button -->
			<button on:click={() => (menuIsOpen = false)} class="py-6 px-2">
				<img src="/images/icon-close.svg" alt="close" />
			</button>
<!-- Nav Links-->
<ul class="text-sm flex flex-col gap-y-6 py-6 px-2 gap-x-6 text-gray-500 font-bold">
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
</div>
</div>
{/if}