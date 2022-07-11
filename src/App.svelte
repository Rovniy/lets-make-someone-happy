<script lang="ts">
    import Header from './lib/Header.svelte'
    import Section_one from './lib/Section_one.svelte'
    import Section_two from './lib/Section_two.svelte'
    import Section_three from './lib/Section_three.svelte'
    import Section_four from './lib/Section_four.svelte'
    import Section_five from './lib/Section_five.svelte'
    import Section_six from './lib/Section_six.svelte'
    import Footer from './lib/Footer.svelte'

	import {onMount} from "svelte";
	import {API} from "./constants";

	let global = {}

	onMount(async function () {
		const response = await fetch(API._BASE + API.NOW)
		global = await response.json()
	});
</script>

<main class="main">
	<section class="main_wrapper">
		<article class="wrapper">
			<Header />
			<Section_one bind:global />
		</article>
	</section>

	<section class="wrapper">
		<Section_two />
	</section>

	<section class="wrapper">
		<Section_three />
	</section>

	<section class="wrapper_color_1">
		<article class="article">
			<Section_four bind:global />
		</article>
	</section>

	<section class="wrapper">
		<Section_five />
	</section>

	<section class="wrapper_color_2">
		<article class="article">
			<Section_six bind:global />
		</article>
		<img class="image" src="/images/take_money.svg" alt="take money" loading="lazy">
	</section>

	<section class="wrapper">
		<Footer />
	</section>

	<img class="blur_dot" src="/images/dot_blur.svg" alt="blur_dot" loading="lazy">
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
	overflow-x: hidden
	max-width: 100%

	.main_wrapper
		width: 100%
		height: 100vh
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		background: url('/images/image_main.png') no-repeat center center / cover
		@media screen and (min-width: 720px)
			height: 100vh

		&:after
			$_height: 90px

			content: ""
			position: absolute
			height: 0
			width: 0
			border-style: solid
			border-width: $_height 0 0 100vw
			border-color: transparent transparent transparent $color_light
			bottom: -1px


	.wrapper
		position: relative
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		max-width: $width_content
		width: 100%

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
			max-height: 100%

		@media screen and (min-width: 1240px)
			right: 0
			top: -20px

	.blur_dot
		position: absolute
		left: -200px
		top: 1400px
</style>
