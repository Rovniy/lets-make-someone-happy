<script>
	import PayButton from './components/PayButton.svelte'

	export let global = undefined;
</script>

<article class="section_six">
	<div class="description">I want to participate in this!</div>
	<PayButton isWhiteText="true" bind:global />
</article>

<style lang="sass">
@import "src/assets/styles/_vars"

.section_six
	display: flex
	flex-direction: column
	justify-content: space-around
	align-items: center
	width: 100%
	padding: 70px 0
	gap: 50px
	@media screen and (min-width: $content_xxl)
		flex-direction: row
		width: 1000px
		gap: 0
	@media screen and (min-width: $content_big)
		justify-content: space-between
		width: 100%

	.description
		color: $color_white
		padding: 0 20px
		font: 800 36px/1 $main_font_family
		position: relative
		z-index: 2
</style>
