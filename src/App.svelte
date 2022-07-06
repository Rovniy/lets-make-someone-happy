<script lang="ts">
    import Header from './lib/Header.svelte'
    import Section_one from './lib/Section_one.svelte'
    import Section_two from './lib/Section_two.svelte'
    import Section_three from './lib/Section_three.svelte'
    import Section_four from './lib/Section_four.svelte'
    import Section_five from './lib/Section_five.svelte'
    import Section_six from './lib/Section_six.svelte'
    import Footer from './lib/Footer.svelte'
</script>

<main class="main">
	<section class="main_wrapper">
		<article class="wrapper">
			<Header />
			<Section_one />
		</article>
	</section>

	<section class="wrapper">
		<Section_two />
		<Section_three />
	</section>

	<section class="wrapper_color_1">
		<article class="article">
			<Section_four />
		</article>
	</section>

	<section class="wrapper">
		<Section_five />
	</section>

	<section class="wrapper_color_2">
		<article class="article">
			<Section_six />
		</article>
		<img class="image" src="./src/assets/images/take_money.svg" alt="take money">
	</section>

	<section class="wrapper">
		<Footer />
	</section>

	<img class="blur_dot" src="./src/assets/images/dot_blur.svg" alt="blur_dot">
</main>

<style lang="sass">
@import "src/assets/styles/_vars"
@import "normalize.css"

.main
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center
	background: #F4F4F4
	z-index: 1

	.main_wrapper
		width: 100%
		height: 100vh
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		background-repeat: no-repeat
		background-size: cover
		background-position: center
		background-image: url('./assets/images/image_main.png')

		@media screen and (min-width: 720px)
			height: 115vh
			&:after
				content: ""
				position: absolute
				margin: -20px
				width: calc(100% - 2px)
				height: 140px
				transform: rotate(1deg)
				background-color: #F4F4F4
				bottom: -286px

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

	.wrapper_color_2
		position: relative
		width: 100%
		background: #017AF1
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		margin-top: 120px

		.article
			width: 100%
			height: 600px
			@media screen and (min-width: 1240px)
				padding: 0 40px
				width: $width_content
				height: auto

	.image
		position: absolute
		bottom: 0
		width: 300px

		@media screen and (min-width: 480px)
			width: auto !important

		@media screen and (min-width: 1240px)
			right: 0
			top: -20px

	.blur_dot
		position: absolute
		left: -200px
		top: 1400px
</style>
