<script lang="ts">
    import '../app.css';
    import { Menu, X } from '@lucide/svelte';
    import { METADATA, INFO } from '$meta/info';
    import { NAVIGATION } from '$meta/links';

    let { children } = $props();

    let scrolled = $state(false);
    let menuOpen = $state(false);

    $effect(() => {
        const onScroll = () => {
            const wasScrolled = scrolled;
            scrolled = window.scrollY > 50;
            if (wasScrolled && !scrolled) menuOpen = false;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    });
</script>

<div class="background-image page-layout" role="img" aria-label="Background image of a mountain and valley landscape with a lake in the distance, at sunrise."></div>
<div class="page-layout">
    <nav id="nav" class="page-nav" aria-label="Page navigation">
        <div hidden={scrolled} class="flex flex-col gap-3 items-center py-2 header">
            <h1>{METADATA.title}</h1>
            <h4>{INFO.tagline}</h4>
        </div>

        <div hidden={!scrolled} class="flex header">
            <div class="flex items-center px-4 py-2">
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
            class="flex flex-col gap-2 mt-1 backdrop-blur"
        >
            {#each NAVIGATION as { name, url }}
                <li>
                    <a
                        href={url}
                        onclick={() => (menuOpen = false)}
                        class="px-4 py-2 block hover:invert"
                    >{name}</a>
                </li>
            {/each}
        </ul>
    </nav>

    {@render children()}

    <div class="page-aside"></div>
</div>
