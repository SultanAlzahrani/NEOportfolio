<script lang="ts">
  import ProjectCard from "./ProjectCard.svelte";

  interface Project {
    name: string;
    description: string;
    stargazers_count: number;
    language: string;
    url?: string;
    color?: string;
    websiteUrl?: string;
    readmeUrl?: string;
    year?: number;
    image?: string;
    expandable?: boolean;
    expandedContent?: string;
  }

  const languageColors: Record<string, string> = {
    JavaScript: "bg-yellow",
    TypeScript: "bg-blue",
    Python: "bg-[#3572A5]",
    Java: "bg-peach",
    Rust: "bg-[#dea584]",
    C: "bg-[#555555]",
    "C++": "bg-[#f34b7d]",
    Go: "bg-sapphire",
    Astro: "bg-[#ff5a03]",
    Svelte: "bg-[#ff3e00]",
    React: "bg-blue",
  };

  const getColor = (lang: string) => languageColors[lang] ?? "bg-overlay0";

  let activeProject: Project | null = null;

  function openModal(project: Project) {
    if (project.expandable) activeProject = project;
  }

  function closeModal() {
    activeProject = null;
  }

  const withReadme = (url?: string) => {
    if (!url) return undefined;

    if (url.includes("/tree/")) {
      return url.replace("/tree/", "/blob/") + "/README.md";
    }

    return `${url.replace(/\/$/, "")}/blob/main/README.md`;
  };

  let leftColumn: Project[] = [
    {
      name: "SultanOnline The Game",
      description: "Interactive online environment for viewers.",
      stargazers_count: 0,
      language: "C#-Unity Python",
      url: "https://github.com/SultanAlzahrani/SultanOnline-The-Game",
      readmeUrl: withReadme(
        "https://github.com/SultanAlzahrani/SultanOnline-The-Game",
      ),
      image: "./projects/SultanOnline.webp",
      expandable: true,
      expandedContent:
        "Multi-layered system with Unity client, backend, and tools for community interaction.",
      color: getColor("C"),
    },
    {
      name: "SKATEAWAY",
      description: "Frontend clothing shop inspired by Vans.",
      stargazers_count: 0,
      language: "React",
      url: "https://github.com/SultanAlzahrani/SKATEAWAY",
      readmeUrl: withReadme("https://github.com/SultanAlzahrani/SKATEAWAY"),
      websiteUrl: "https://skateaway.vercel.app/",
      image: "./projects/skateaway.webp",
      expandable: true,
      expandedContent: "Still in development. Optimized for Chromium browsers.",
      color: getColor("React"),
    },
    {
      name: "Silly Spotify",
      description: "Spotify analytics and playlist remixing app.",
      stargazers_count: 0,
      language: "React Node.js",
      image: "./projects/SillySpotify.webp",
      color: getColor("React"),
    },
    {
      name: "The Weather App",
      description: "Simple weather app using an API.",
      stargazers_count: 0,
      language: "React",
      url: "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/TheWeatherApp",
      readmeUrl:
        "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/blob/main/TheWeatherApp/README.md",
      websiteUrl: "https://sultanalzahrani.github.io/TheWeatherApp/",
      image: "./projects/The-Weather-App-Logo.webp",
      color: getColor("React"),
    },
    {
      name: "DoWhat?!",
      description: "To-do list productivity app.",
      stargazers_count: 0,
      language: "React",
      url: "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/DoWhat",
      readmeUrl:
        "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/blob/main/DoWhat/README.md",
      websiteUrl: "https://sultanalzahrani.github.io/DoWhat/",
      image: "./projects/ToDo.webp",
      color: getColor("React"),
    },
  ];

  let rightColumn: Project[] = [
    {
      name: "Personal Blog",
      description: "Personal blog about my hobbies and media coverage.",
      stargazers_count: 0,
      language: "React Node.js PostgreSQL",
      readmeUrl: "https://blog.sultanonline.app/post/94",
      websiteUrl: "https://blog.sultanonline.app/",
      image: "./projects/blog.webp",
      color: getColor("React"),
    },
    {
      name: "GG: Memory Game",
      description: "A memory card game.",
      stargazers_count: 0,
      language: "React",
      url: "https://github.com/SultanAlzahrani/GG-MemoryCardGame",
      readmeUrl: withReadme(
        "https://github.com/SultanAlzahrani/GG-MemoryCardGame",
      ),
      websiteUrl: "https://gg-memory-card-game.vercel.app/",
      image: "./projects/ggame.png",
      color: getColor("React"),
    },
    {
      name: "My Portfolio Website",
      description:
        "Personal portfolio showcasing projects & more! You're currently looking at it!",
      stargazers_count: 0,
      language: "Astro Svelte Tailwind",
      image: "./projects/portfolio.webp",
      url: "https://github.com/SultanAlzahrani/NEOportfolio",
      readmeUrl: withReadme("https://github.com/SultanAlzahrani/NEOportfolio"),
      websiteUrl: "https://sultanonline.app",
      color: getColor("Astro"),
    },
    {
      name: "Validation Form",
      description: "Functional signup/register form UI.",
      stargazers_count: 0,
      language: "React",
      url: "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/SignUpForm",
      readmeUrl:
        "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/blob/main/SignUpForm/README.md",
      websiteUrl: "https://sultanalzahrani.github.io/SignUpForm/",
      color: getColor("React"),
    },
    {
      name: "Bakery Front Page",
      description: "Simple clean UI with image slider.",
      stargazers_count: 0,
      language: "React",
      url: "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/BakeryFrontPage",
      readmeUrl:
        "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/blob/main/BakeryFrontPage/README.md",
      websiteUrl: "https://sultanalzahrani.github.io/BakeryFrontPage/",
      color: getColor("React"),
    },
    {
      name: "Tic-Tac-Toe",
      description: "Classic game for 2 players.",
      stargazers_count: 0,
      language: "React",
      url: "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/tree/main/TicTacToe",
      readmeUrl:
        "https://github.com/SultanAlzahrani/SultanAlzahrani.github.io/blob/main/TicTacToe/README.md",
      websiteUrl: "https://sultanalzahrani.github.io/TicTacToe/",
      color: getColor("React"),
    },
  ];
</script>

{#snippet projectColumn(data: Project[])}
  <div class="flex flex-col gap-4">
    {#each data as project}
      <ProjectCard
        name={project.name}
        description={project.description}
        sourceUrl={project.url}
        websiteUrl={project.websiteUrl}
        readmeUrl={project.readmeUrl}
        stars={project.stargazers_count}
        color={project.color}
        language={project.language}
        image={project.image}
        year={project.year}
        on:expand={() => openModal(project)}
      />
    {/each}
  </div>
{/snippet}

<div class="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
  {@render projectColumn(leftColumn)}
  {@render projectColumn(rightColumn)}
</div>

{#if activeProject}
  <div
    class="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    on:click={closeModal}
  >
    <div
      class="bg-base p-6 rounded-xl max-w-lg w-full relative"
      on:click|stopPropagation
    >
      <button class="absolute top-2 right-3 text-lg" on:click={closeModal}>
        ✕
      </button>

      <h2 class="text-xl font-bold mb-2">{activeProject.name}</h2>
      <p class="opacity-80">{activeProject.expandedContent}</p>
    </div>
  </div>
{/if}
