<script>
	import PayButton from './components/PayButton.svelte'

	export let global = undefined;
</script>

<article class="section_four">
	<div class="description">I Doing good to others will definitely get it back!</div>
	<PayButton isWhiteText="true" bind:global />
</article>

<style lang="sass">
@import "src/assets/styles/_vars"

.section_four
	display: flex
	flex-direction: column
	justify-content: space-around
	align-items: center
	gap: 50px
	width: 100%
	padding: 100px 0
	@media screen and (min-width: $content_xl)
		flex-direction: row
		gap: 370px

	.description
		color: $color_white
		padding: 0 40px
		text-align: center
		font: 800 36px/1 $main_font_family
		@media screen and (min-width: $content_xl)
			text-align: left
</style>
