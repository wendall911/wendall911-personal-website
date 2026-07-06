<script lang="ts">
    import { careerHtml, education, experience, insight, writing, contact } from '$lib/content';
    import { NAVIGATION } from '$meta/links';
    import { CircleChevronDown } from '@lucide/svelte';

    const sectionName = Object.fromEntries(
        NAVIGATION.map(({ name, url }) => [url.replace('/#', ''), name])
    );
</script>

<main class="">
    <div id="hello">
        <div class="flex flex-col gap-3 py-0 px-4"></div>
        <div class="flex flex-col justify-center items-center">
            <a href="/#career">Say Hello</a>
            <br/>
            <a href="/#career"><CircleChevronDown size={48} /></a>
        </div>
    </div>
    <section id="cv" class="px-8 py-8">
        <section id="career" class="pt-25">
            <div class="flex flex-col gap-3 py-2 px-4 header">
                <h2>{sectionName['career']}</h2>
            </div>
            <div class="[&_strong]:font-semibold content">
                {@html careerHtml}
            </div>
        </section>

        <section id="education">
            <div class="flex flex-col gap-3 py-2 px-4 header">
                <h2>{sectionName['education']}</h2>
            </div>
            <div class="flex content">
                <ul class="mt-4 space-y-6">
                    {#each education as entry}
                        <li>
                            <p class="font-semibold">
                                {#if entry.url}
                                    <a href={entry.url}>{entry.institution}</a>
                                {:else}
                                    {entry.institution}
                                {/if}
                            </p>
                            <p>
                                {#if entry.degree}{entry.degree} · {/if}{entry.program}
                            </p>
                            <p>{entry.startDate}–{entry.endDate}</p>
                        </li>
                    {/each}
                </ul>
            </div>
        </section>

        <section id="experience">
            <div class="flex flex-col gap-3 py-2 px-4 header">
                <h2>{sectionName['experience']}</h2>
            </div>
            <div class="flex content">
                <ul class="mt-4 space-y-10">
                    {#each experience as entry}
                        <li>
                            <div class="mb-2 flex flex-wrap items-baseline gap-x-4">
                                <p>
                                    {#if entry.url}
                                        <a href={entry.url}>{entry.company}</a>
                                    {:else}
                                        {entry.company}
                                    {/if}
                                </p>
                                <p>{entry.startDate}–{entry.endDate}</p>
                            </div>
                            {#if entry.html}
                                <div class="mb-4">
                                    {@html entry.html}
                                </div>
                            {/if}
                            <ul class="space-y-4">
                                {#each entry.roles as role}
                                    <li>
                                        <p>{role.title}</p>
                                        {#if role.client}
                                            <p>
                                                {#if role.clientUrl}
                                                    <a href={role.clientUrl}>{role.client}</a>
                                                {:else}
                                                    {role.client}
                                                {/if}
                                            </p>
                                        {/if}
                                        <p>{role.startDate}–{role.endDate}</p>
                                        {#if role.slug !== 'index' && role.html}
                                            <div class="mt-2">
                                                {@html role.html}
                                            </div>
                                        {/if}
                                    </li>
                                {/each}
                            </ul>
                        </li>
                    {/each}
                </ul>
            </div>
        </section>

        <section id="insight">
            <h2>{sectionName['insight']}</h2>
            <ul class="mt-4 space-y-10">
                {#each insight as item}
                    <li>
                        <h3>{item.title}</h3>
                        <div>
                            {@html item.html}
                        </div>
                    </li>
                {/each}
            </ul>
        </section>

    </section>

    <section id="personal" class="mx-auto w-full max-w-content px-8">
        <section id="writings" class="mb-10">
            <h2>{sectionName['writings']}</h2>
            <ul class="mt-4 space-y-6">
                {#each writing as entry}
                    <li>
                        <p>
                            <a href="/writings/{entry.slug}">
                                {entry.title}
                            </a>
                        </p>
                        <p>{entry.date}</p>
                        {#if entry.summary}
                            <p>{entry.summary}</p>
                        {/if}
                    </li>
                {/each}
            </ul>
        </section>
    </section>

    <section id="contact" class="mx-auto w-full max-w-content px-8 mb-10">
        <h2>{sectionName['contact']}</h2>
        <p class="mt-4">
            <a href="mailto:{contact.messaging.p1}@{contact.messaging.p2}.{contact.messaging.p3}">
                {contact.messaging.p1}@{contact.messaging.p2}.{contact.messaging.p3}
            </a>
        </p>
        {#if contact.accounts.length}
            <ul class="mt-4 space-y-2">
                {#each contact.accounts as account}
                    <li>
                        <a href={account.url} class="text-sm">{account.name}</a>
                    </li>
                {/each}
            </ul>
        {/if}
    </section>

</main>
