<div class="button_area">
	<button type="button" class="button" on:click="{donateRequest}">Make you happy for ${global?.initial_value || 1}</button>
	{#if false}<span class="info" class:text_white={isWhiteText}>You already sent $1</span>{/if}
</div>

<script>
	import { API } from '/src/constants'

	export let isWhiteText = false
	export let global = undefined

	async function donateRequest() {
		const response = await fetch(API._BASE + API.DONATE)
		console.log(123, await response.json())
	}
</script>

<style lang="sass">
.button_area
	display: flex
	flex-direction: column
	justify-content: center
	align-items: center
	gap: 30px
	font-family: 'Montserrat', sans-serif

	.button
		background: #34FFB6
		border: 1px solid #34FFB6
		border-radius: 50px
		padding: 20px 50px
		font-size: 16px
		font-weight: 700
		color: #262626
		cursor: pointer
		width: 280px

	.info
		font-weight: 700
		font-size: 14px
		color: rgba(0, 0, 0, 0.5)

.text_white
	color: #FFF !important

</style>
