<article class="section_one">
	<h1 class="title">Just give $1 that will change the life of one of us</h1>

	<div class="amount_area">
		<div class="amount">$1.200</div>
		<span class="message">Already collected</span>
	</div>

	<div class="button_area">
		<button type="button" class="button">Make you happy for $1</button>
		<span class="info">You already sent $1</span>
	</div>
</article>

<style lang="sass">
@import "src/assets/styles/_vars"

.section_one
	display: flex
	flex-direction: column
	justify-content: space-around
	align-items: center
	height: 100vh
	max-width: $width_content

	.title
		font-size: 30px
		color: #262626
		font-weight: 900
		text-align: center
		line-height: 95%
		text-transform: uppercase
		padding: 0 20px
		margin-top: 100px

		@media screen and (min-width: 720px)
			font-size: 64px

	.amount_area
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center

		.amount
			font-size: 64px
			color: #017AF1
			font-weight: 800

		.message
			font-size: 20px
			color: #3A3A3A
			font-weight: 800
			text-transform: uppercase

	.button_area
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		gap: 30px

		.button
			background: #34FFB6
			border: 1px solid #34FFB6
			border-radius: 50px
			padding: 20px 50px
			font-size: 16px
			font-weight: 700
			color: #262626
			cursor: pointer

		.info
			font-weight: 700
			font-size: 14px
			color: rgba(0, 0, 0, 0.5)
</style>
