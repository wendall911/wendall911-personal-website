<script lang="ts">
    import { page } from '$app/state';
</script>

<main>
    <article class="mb-8 flex flex-col gap-16">
        <div class="flex flex-col items-center gap-4 self-center">
            <h1 class="pb-1 text-5xl">Error {page.status}</h1>
            <span class="text-lg">{page.error?.message ?? 'Page Not Found'}</span>
        </div>

        <a href="/" data-sveltekit-reload> Home </a>
    </article>
</main>
