<script>
	import PayButton from './components/PayButton.svelte'
</script>

<article class="section_four">
	<div class="description">I Doing good to others will definitely get it back!</div>
	<PayButton isWhiteText="true"/>
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

	@media screen and (min-width: 1240px)
		flex-direction: row
		gap: 370px

	.description
		font-weight: 800
		font-size: 36px
		color: #FFFFFF
</style>
