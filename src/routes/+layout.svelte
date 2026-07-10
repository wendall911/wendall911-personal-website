<script lang="ts">
    import '../app.css';
    import { METADATA } from '$meta/info';
    import { mode } from '$lib/mode.svelte';
    import { page } from '$app/state';
    import Nav from '$comp/Nav.svelte';
    import ModeToggle from '$comp/ModeToggle.svelte';

    let { children } = $props();

    // Re-assert the theme on every client-side navigation so the <html> class
    // stays correct across route/error-boundary transitions.
    $effect(() => {
        void page.url.pathname;
        mode.apply();
    });
</script>

<svelte:head>
    <title>{METADATA.title}</title>
    <meta name="description" content={METADATA.description} />
    <meta property="og:site_name" content={METADATA['og:site_name']} />
    <meta property="og:type" content={METADATA['og:type']} />
    <meta property="og:title" content={METADATA.title} />
    <meta property="og:description" content={METADATA.description} />
    <meta property="og:url" content={METADATA.url} />
    <meta property="og:image" content={METADATA['og:image']} />
</svelte:head>

<div class="background-image" role="img" aria-label="Background image of a mountain and valley landscape with a lake in the distance, at sunrise."></div>
<Nav />

<ModeToggle />

<div id="page-layout" class="flex min-h-screen justify-center">
    <div id="page-content">
        {@render children()}
    </div>
</div>