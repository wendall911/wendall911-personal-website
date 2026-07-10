<script lang="ts">
    import { SunIcon, MoonIcon } from '@lucide/svelte';
    import { toggleMode, mode } from '$lib/mode.svelte';
</script>

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
