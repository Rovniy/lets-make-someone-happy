<script lang="ts">
    import Header from './lib/Header.svelte'
    import Section_one from './lib/Section_one.svelte'
    import Section_two from './lib/Section_two.svelte'
    import Section_three from './lib/Section_three.svelte'
    import Section_four from './lib/Section_four.svelte'
</script>

<main class="main">
	<section class="wrapper">
		<Header />
		<Section_one />
		<Section_two />
		<Section_three />
	</section>

	<section class="wrapper_color_1">
		<article class="article">
			<Section_four />
		</article>
	</section>
</main>

<style lang="sass">
@import "src/assets/styles/_vars"

*
	font-family: -apple-system, BlinkMacSystemFont, 'Montserrat', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

.main
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center
	background: #F4F4F4

	.wrapper
		position: relative
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		max-width: $width_content

	.wrapper_color_1
		width: 100%
		background: #262626
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		margin-top: 120px

		.article
			max-width: $width_content
			padding: 0 40px
</style>
