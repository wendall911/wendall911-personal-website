<script lang="ts">
    let { data } = $props();
    const entry = $derived(data.entry);
    const html = $derived(data.html);
</script>

<article id="writing">
    <header>
        <h1>{entry.title}</h1>
        <p>{entry.date}</p>
    </header>
    <div class="content">
        {@html html}
    </div>
</article>
