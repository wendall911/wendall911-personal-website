<script lang="ts">
    import { careerHtml, education, experience, insight, writing, contact } from '$lib/content';
    import { NAVIGATION } from '$meta/links';
    import { CircleChevronDown } from '@lucide/svelte';
    import { Accordion } from 'bits-ui';

    const sectionName = Object.fromEntries(
        NAVIGATION.map(({ name, url }) => [url.replace('/#', ''), name])
    );
</script>

<main>
    <div id="hello">
        <div class="flex flex-col justify-center items-center">
            <a href="/#career" class="text-lg">Say Hello</a>
            <a href="/#career"><CircleChevronDown size={48} /></a>
        </div>
    </div>
    <section id="cv" class="px-8 py-8">
        <section id="career" class="pt-25">
            <div class="header">
                <h2>{sectionName['career']}</h2>
            </div>
            <div class="[&_strong]:font-semibold content text-lg">
                {@html careerHtml}
            </div>
        </section>

        <section id="education">
            <div class="header">
                <h2>{sectionName['education']}</h2>
            </div>
            <div class="flex flex-col content">
                {#each education as entry}
                <div class="flex item">
                    <div class="flex flex-col m-5">
                        <img src="{entry.logo}" alt="{entry.institution}" height={70} width={70} />
                    </div>
                    <div class="flex flex-col mt-5">
                        <h3 class="font-semibold">{entry.institution}</h3>
                        <p>
                            {#if entry.degree}{entry.degree},  {/if}{entry.program} | {entry.startDate}–{entry.endDate}
                        </p>
                    </div>
                </div>
                {/each}
            </div>
        </section>

        <section id="experience">
            <div class="header">
                <h2>{sectionName['experience']}</h2>
            </div>
            <div class="flex content">
                <Accordion.Root type="single" id="experience-tree" value={experience[0]?.company}>
                    {#each experience as entry}
                        <Accordion.Item value={entry.company} class="item">
                            <Accordion.Header class="flex flex-col sm:flex-row">
                                <Accordion.Trigger class="flex flex-row w-full">
                                    <div class="flex flex-col">
                                        <h3>{entry.company}</h3>
                                        <p>{entry.startDate}–{entry.endDate}</p>
                                    </div>
                                </Accordion.Trigger>
                                <div class="flex items-start pt-0 sm:pt-5">
                                    {#if entry.url}
                                        <a href={entry.url} class="truncate -mx-3 mb-3 px-3 max-w-60">{entry.url}</a>
                                    {/if}
                                </div>
                            </Accordion.Header>
                            <Accordion.Content forceMount={true}>
                                {#snippet child({ open })}
                                    {#if open}
                                        <Accordion.Root
                                            type="single"
                                            class="role-accordion transition-all duration-600 ease-out {open ? 'animate-accordion-down' : 'animate-accordion-up'}"
                                            value={entry.roles[0]?.slug}
                                        >
                                            {#each entry.roles as role}
                                                <Accordion.Item value={role.slug}>
                                                    <Accordion.Header class="flex">
                                                        <Accordion.Trigger class="flex flex-row">
                                                            <div class="flex flex-col">
                                                                {role.title} {role.startDate}–{role.endDate}
                                                            </div>
                                                        </Accordion.Trigger>
                                                    </Accordion.Header>
                                                    <Accordion.Content forceMount={true} class="overflow-hidden">
                                                        {#snippet child({ open })}
                                                            {#if open}
                                                                <div
                                                                    class="ml-6 transition-all duration-300 ease-out {open ? 'animate-accordion-down' : 'animate-accordion-up'}"
                                                                >
                                                                    {#if role.clientUrl}
                                                                        <a href={role.clientUrl}>{role.client}</a>
                                                                    {:else}
                                                                        <strong>{role.client}</strong>
                                                                    {/if}
                                                                {#if role.html}
                                                                    {@html role.html}
                                                                {/if}
                                                                </div>
                                                            {/if}
                                                        {/snippet}
                                                    </Accordion.Content>
                                                </Accordion.Item>
                                            {/each}
                                        </Accordion.Root>
                                    {/if}
                                {/snippet}
                            </Accordion.Content>
                        </Accordion.Item>
                    {/each}
                </Accordion.Root>
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
