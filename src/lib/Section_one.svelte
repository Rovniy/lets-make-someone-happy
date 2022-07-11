<article class="section_one">
	<h1 class="title">Just donate {#if global?.initial_value}${global?.initial_value}{:else}1{/if} that will change the life of one of us</h1>

	<div class="amount_area">
		{#if global?.money_pool}
			<div class="amount">$ {thousands(global?.money_pool)}</div>
		{:else}
			<div class="amount">$ {thousands(1)}</div>
		{/if}

		<span class="message">Already collected</span>

		{#if global?.target_date}
			<span class="remaining">{getRemainingTime}</span>
		{/if}
	</div>

	<PayButton bind:global/>
</article>

<script>
	import PayButton from './components/PayButton.svelte'
	import { thousands, parseSecondsToRemainingTime } from '/src/helpers'

	export let global = undefined;

	$: getRemainingTime = parseSecondsToRemainingTime(global?.target_date)
</script>

<style lang="sass">
@import "src/assets/styles/_vars"

.section_one
	display: flex
	flex-direction: column
	justify-content: space-around
	align-items: center
	height: 100vh
	max-width: $width_content
	z-index: 1

	.title
		font: 900 30px/95% $main_font_family
		color: $color_primary
		text-align: center
		text-transform: uppercase
		padding: 0 20px
		margin-top: 100px
		@media screen and (min-width: $content_md)
			font-size: 64px

	.amount_area
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		gap: 30px

		.amount
			font: 800 80px/80px $main_font_family
			color: $color_highlight
			@media screen and (min-width: $content_md)
				font: 800 124px/124px $main_font_family

		.message
			font: 800 20px/20px $main_font_family
			color: $color_secondary
			text-transform: uppercase

		.remaining
			font: 500 16px/16px $main_font_family
			color: $color_secondary
</style>
