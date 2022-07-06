<footer class="footer">
	<article class="about">
		<p class="description">The project is not a lottery and does not guarantee a win. Any contribution and payment is a donation. Making a payment means agreeing to this offer.
			Project letsmakesomeonehappy.com does not take commission or payment for transactions. The commission of 3% is provided only by the acquiring system when transferring funds. The payment of taxes is the responsibility of the recipient of the funds.</p>

		<div class="social">
			<div class="links">
				<a href="#" rel="noopener">
					<img src="./src/assets/images/telegram.svg" alt="telegram" width="30" height="30">
				</a>
				<a href="#" rel="noopener">
					<img src="./src/assets/images/twitter.svg" alt="twitter" width="30" height="30">
				</a>
				<a href="#" rel="noopener">
					<img src="./src/assets/images/github.svg" alt="github" width="30" height="30">
				</a>
			</div>
			<span class="info">Idea and implementation by Andrew (Ravy) Rovniy</span>
			<a class="email" href="mailto:contact@ravy.pro" rel="noopener">contact@ravy.pro</a>
		</div>
	</article>
</footer>

<style lang="sass">
@import "src/assets/styles/_vars"

.footer
	font-family: 'Montserrat', sans-serif
	background: transparent
	width: 100%
	margin-top: 120px

	.about
		display: flex
		flex-direction: column
		justify-content: space-between
		align-items: center
		gap: 120px

		.description
			font-size: 14px
			color: #262626
			font-weight: 600
			text-align: center
			padding: 0 20px

		.social
			display: flex
			flex-direction: column
			justify-content: center
			align-items: center
			gap: 20px
			margin-bottom: 50px

			.links
				display: flex
				flex-direction: row
				justify-content: center
				align-items: center
				gap: 40px

			.info
				font-size: 12px
				font-weight: 600

			.email
				font-size: 14px
				color: #017AF1
				font-weight: 700
				text-decoration: none

				&:hover
					text-decoration: underline
</style>
