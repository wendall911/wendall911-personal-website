<script lang="ts">
    import { careerHtml, education, experience, insight, writing } from '$lib/content';
    import { NAVIGATION } from '$meta/links';
    import { METADATA } from '$meta/info';
    import { CircleChevronDown } from '@lucide/svelte';
    import { Accordion } from 'bits-ui';
    import Contacts from '$comp/Contacts.svelte';

    const sectionName = Object.fromEntries(
        NAVIGATION.map(({ name, url }) => [url.replace('/#', ''), name])
    );
</script>

<main>
    <div id="hello">
        <div class="flex flex-col justify-center items-center">
            <a href="/#career"><h4>Say Hello</h4></a>
            <a href="/#career"><CircleChevronDown size={48} /></a>
        </div>
    </div>
    <section id="cv">
        <section id="career" class="pt-25">
            <header>
                <h2>{sectionName['career']}</h2>
            </header>
            <div class="[&_strong]:font-semibold content text-lg">
                {@html careerHtml}
            </div>
        </section>

        <section id="education">
            <header>
                <h2>{sectionName['education']}</h2>
            </header>
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
            <header>
                <h2>{sectionName['experience']}</h2>
            </header>
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
            <header>
                <h2>{sectionName['insight']}</h2>
            </header>
            <div class="flex content sm:flex-row flex-col">
                <div class="flex flex-col insight-image">
                    <img src="images/portrait.webp" width="100" alt="{METADATA.title} portrait." />
                </div>
                <Accordion.Root type="single" id="insight-tree" value={insight[0]?.title}>
                    {#each insight as item}
                        <Accordion.Item value={item.title} class="flex flex-col item">
                            <Accordion.Header class="flex flex-col sm:flex-row">
                                <Accordion.Trigger class="flex flex-row w-full">
                                    <div class="flex flex-col">
                                        <h4>{item.title}</h4>
                                    </div>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content forceMount={true}>
                                {#snippet child({ open })}
                                    {#if open}
                                        <div
                                            class="insight-accordion ml-6 mr-6 transition-all duration-300 ease-out {open ? 'animate-accordion-down' : 'animate-accordion-up'}"
                                        >
                                            {@html item.html}
                                        </div>
                                    {/if}
                                {/snippet}
                            </Accordion.Content>
                        </Accordion.Item>
                    {/each}
                </Accordion.Root>
            </div>
        </section>
    </section>

    <section id="writings">
        <header>
            <h2>{sectionName['writings']}</h2>
        </header>
        <div class="content">
            <ul class="m-4 space-y-6">
                {#each writing as entry}
                    <li>
                        <p>
                            <a href="/writing/{entry.slug}">
                                {entry.title}
                            </a> | {entry.date}
                        </p>
                        {#if entry.summary}
                            <p>{entry.summary}</p>
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    </section>

    <section id="contact" class="mx-auto w-full max-w-content">
        <header>
            <h2>{sectionName['contact']}</h2>
        </header>
        <Contacts />
    </section>

</main>
