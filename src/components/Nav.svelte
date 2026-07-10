<script lang="ts">
    import { Menu, X } from '@lucide/svelte';
    import { METADATA, INFO } from '$meta/info';
    import { NAVIGATION } from '$meta/links';
    import { page } from '$app/state';

    let sentinel = $state<HTMLElement>();
    let scrolled = $state(false);
    let menuOpen = $state(false);

    $effect(() => {
        if (!sentinel) return;

        const observer = new IntersectionObserver(([entry]) => {
            scrolled = !entry.isIntersecting;
            if (entry.isIntersecting) menuOpen = false;
        });
        observer.observe(sentinel);

        return () => observer.disconnect();
    });
</script>

<div bind:this={sentinel} aria-hidden="true"></div>
<nav id="nav" aria-label="Page navigation" data-sveltekit-reload={page.status >= 400 ? true : undefined}>
    <div hidden={scrolled} class="flex flex-col gap-3 items-center py-2 header">
        <h1>{METADATA.title}</h1>
        <h5 id="tagline">{INFO.tagline}</h5>
    </div>

    <div hidden={!scrolled} class="flex header">
        <div class="flex flex-col items-center px-4 py-2">
            <h3>{METADATA.title}</h3>
        </div>
        <div class="flex px-4 py-2 ml-auto button">
            <button
                type="button"
                onclick={() => (menuOpen = !menuOpen)}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="nav-menu"
            >
                {#if menuOpen}
                    <X size={24} />
                {:else}
                    <Menu size={24} />
                {/if}
            </button>
        </div>
    </div>

    <ul
        id="nav-menu"
        hidden={scrolled && !menuOpen}
        class="flex flex-col gap-2 backdrop-blur mb-1"
    >
        {#each NAVIGATION as { name, url }}
            <li class="pl-1 pr-1">
                <a
                    href={url}
                    onclick={() => (menuOpen = false)}
                    class="px-4 py-2 block hover:invert"
                >{name}</a>
            </li>
        {/each}
    </ul>
</nav>
