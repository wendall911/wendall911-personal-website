<script lang="ts">
    import '../app.css';
    import { Menu, X, SunIcon, MoonIcon } from '@lucide/svelte';
    import { METADATA, INFO } from '$meta/info';
    import { NAVIGATION } from '$meta/links';
    import { toggleMode, mode } from 'mode-watcher';
    import { ModeWatcher } from 'mode-watcher';

    let { children } = $props();

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

<ModeWatcher defaultMode="dark" />

<div bind:this={sentinel} aria-hidden="true"></div>
<div class="background-image" role="img" aria-label="Background image of a mountain and valley landscape with a lake in the distance, at sunrise."></div>
<nav id="nav" aria-label="Page navigation">
    <div hidden={scrolled} class="flex flex-col gap-3 items-center py-2 header">
        <h1>{METADATA.title}</h1>
        <h4 id="tagline">{INFO.tagline}</h4>
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
        class="flex flex-col gap-2 backdrop-blur"
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

<button
    id="mode-toggle"
    type="button"
    onclick={toggleMode}
    aria-label={mode.current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
    {#if mode.current === 'dark'}
        <SunIcon aria-label="Switch to light mode" size={20} strokeWidth={1.5} />
    {:else}
        <MoonIcon aria-label="Switch to dark mode" size={20} strokeWidth={1.5} />
    {/if}
</button>

<div id="page-layout" class="flex min-h-screen justify-center">
    <div id="page-content">
        {@render children()}
    </div>
</div>