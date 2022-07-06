<script>
	import Step from './components/Step.svelte'
	let steps = [
		{
			description: 'You only send $1 to the general account',
			idx: 1,
		},
		{
			description: 'We collect money within a week',
			idx: 2,
		},
		{
			description: 'Choosing the lucky one among the benefactors',
			idx: 3,
		},
		{
			description: 'We transfer all funds to the lucky one',
			idx: 4,
		},
		{
			description: 'We repeat the collection again',
			idx: 5,
		},
	]
</script>

<article class="section_three">
	<h2 class="title">How its works</h2>

	<div class="steps">
		{#each steps as step}
			<Step step={step}/>
		{/each}
	</div>
</article>

<style lang="sass">
@import "src/assets/styles/_vars"

.section_three
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center
	width: 100%

	.title
		font-size: 30px
		line-height: 95%
		font-weight: 700
		margin-bottom: 120px
		text-transform: uppercase

		@media screen and (min-width: 720px)
			font-size: 36px

	.steps
		width: 100%
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		gap: 100px

		@media screen and (min-width: 1100px)
			width: 900px
</style>
