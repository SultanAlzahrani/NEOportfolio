<script lang="ts">
  interface Props {
    name: string;
    description: string;
    sourceUrl?: string;
    websiteUrl?: string;
    readmeUrl?: string;
    stars: number;
    color?: string;
    language: string;
    image?: string;
    year?: number;
  }

  let {
    name,
    description,
    sourceUrl,
    websiteUrl,
    readmeUrl,
    stars,
    color,
    language,
    image,
    year,
  }: Props = $props();
</script>

<div
  class="group relative hover:-translate-y-1 transition-transform duration-200"
>
  <section
    class="h-full flex flex-col transition-colors group-hover:border-peach/50"
  >
    {#if year}
      <span
        class="absolute top-2 left-2 bg-peach text-base px-2 py-1 rounded-full text-xs font-medium z-10 shadow-md"
      >
        {year}
      </span>
    {/if}

    {#if image}
      <div class="relative overflow-hidden">
        <img
          src={image}
          loading="lazy"
          alt="thumbnail"
          class="rounded-t-lg object-cover aspect-video w-full"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-mantle/90 via-mantle/30 to-transparent"
        ></div>
      </div>
    {/if}

    <div class="p-4 flex flex-col flex-1">
      <h1
        class="font-medium text-xl mb-1 text-nowrap overflow-hidden text-ellipsis w-11/12"
      >
        {name}
      </h1>

      <p class="mb-4 text-sm text-subtext0">{description}</p>

      <div class="text-sm flex items-center justify-between mt-auto">
        <div class="flex gap-6">
          <!-- <div class="flex items-center gap-1">
            ⭐ <span>{stars}</span>
          </div> -->

          <div class="flex items-center gap-1.5">
            <div class={`size-3 rounded-full ${color ?? "bg-overlay0"}`}></div>
            <span>{language}</span>
          </div>
        </div>

        {#if readmeUrl}
          <a
            href={readmeUrl}
            target="_blank"
            class="text-xs text-peach hover:opacity-80 transition"
          >
            README ↗
          </a>
        {/if}
      </div>

      <hr class="border-surface0 my-4" />

      <div class={`grid gap-2 ${websiteUrl ? "grid-cols-2" : "grid-cols-1"}`}>
        {#if sourceUrl}
          <a
            href={sourceUrl}
            target="_blank"
            class="bg-surface0/50 border border-surface1/50 text-subtext1 font-medium p-2 rounded-md flex justify-center items-center text-sm"
          >
            Source
          </a>
        {/if}

        {#if websiteUrl}
          <a
            href={websiteUrl}
            target="_blank"
            class="bg-peach/25 border border-peach/50 text-peach font-medium p-2 rounded-md flex justify-center items-center text-sm"
          >
            Website
          </a>
        {/if}
      </div>
    </div>
  </section>
</div>
