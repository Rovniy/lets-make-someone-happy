<script>
	import PayButton from './components/PayButton.svelte'
</script>

<article class="section_six">
	<div class="description">I want to participate in this!</div>
	<PayButton isWhiteText="true"/>
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

	@media screen and (min-width: 1500px)
		flex-direction: row
		width: 1000px
		gap: 0

	@media screen and (min-width: 2000px)
		justify-content: space-between
		width: 100%

	.description
		font-weight: 800
		font-size: 36px
		color: #FFFFFF
		padding: 0 20px
</style>
