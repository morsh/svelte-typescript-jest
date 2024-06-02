<script lang="ts">
	import VerticalTabs from './components/VerticalTabs.svelte';
	// import { CounterBadge } from '@fluentui/web-components';

	let recentSearches = ["produktchef", "developer", "project manager"];
  let search = "";
  let index = ["Linda", "Johan", "Fredrik", "John"]

  $: searches = (search.length > 2 ? [...recentSearches, ...index] : recentSearches);

	function handlePick(ev) {
		console.log(ev.target.value);
		search = ev.target.value;
	}

	export let name: string;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<VerticalTabs />

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<fluent-combobox data-testid="combo-expt" placeholder="Find experts" autocomplete="both" value={search} on:change={handlePick}>
		{#each searches as s}
			<fluent-option value={s}>{s}</fluent-option>
			<!-- <fluent-option value="4" disabled>GTX 1090</fluent-option> -->
		{/each}
	</fluent-combobox>
	<br />
	<fluent-text-field data-testid="text" appearance="outline" placeholder="">Email</fluent-text-field>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>