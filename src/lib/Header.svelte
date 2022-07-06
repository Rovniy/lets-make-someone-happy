<header class="header">
	<span class="action">Let’s make someone happy</span>
	<span class="name">by A.Rovniy</span>
</header>

<style lang="sass">
@import "src/assets/styles/_vars"

.header
	position: absolute
	top: 20px
	display: flex
	flex-direction: row
	justify-content: space-between
	align-items: center
	font-family: 'Montserrat', sans-serif
	background: transparent
	width: 100%
	z-index: 1
	margin-top: 40px

	@media screen and (min-width: 720px)
		margin-top: 0

	.action
		font-size: 16px
		color: #262626
		font-weight: 700
		margin-left: 20px

		@media screen and (min-width: 720px)
			font-size: 20px

		@media screen and (min-width: 1240px)
			margin-left: 0

	.name
		font-size: 12px
		color: rgba(0, 0, 0, 0.5)
		font-weight: 700
		margin-right: 20px

		@media screen and (min-width: 720px)
			font-size: 16px

		@media screen and (min-width: 1240px)
			margin-right: 0
</style>
