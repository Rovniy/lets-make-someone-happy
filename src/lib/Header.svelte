<header class="header">
	<a href="/" class="action">
		<img src="/images/logo.png" alt="logo" class="logo" />
		<span class="logo_title">{SITE_NAME}</span>
	</a>
	<a href="{telegramLink}" target="_blank" class="name">
		<img class="author" src="/images/ravy.png" alt="ravy" />
	</a>
</header>

<script>
	import { SITE_NAME, SOCIAL } from '/src/constants'

	export let telegramLink = SOCIAL.find(i => i.name === 'telegram').link
</script>
<style lang="sass">
@import "src/assets/styles/_vars"

.header
	position: absolute
	top: 0
	display: flex
	flex-direction: row
	justify-content: space-between
	align-items: center
	background: transparent
	width: 100%
	z-index: 2
	margin-top: 40px

	.action
		margin-left: 20px
		display: flex
		align-items: flex-end
		justify-items: center
		text-decoration: none
		@media screen and (min-width: $content_md)
			font-size: 20px
		@media screen and (min-width: $content_xl)
			margin-left: 0

		.logo
			max-height: 60px
		.logo_title
			color: $color_primary
			font: 700 16px/16px $main_font_family
			margin: 0 0 10px 15px

		&:hover
			text-decoration: underline

	.name
		color: rgba(0, 0, 0, 0.5)
		margin-right: 20px
		font: 700 12px/12px $main_font_family
		text-decoration: none
		@media screen and (min-width: $content_md)
			font-size: 16px
		@media screen and (min-width: $content_xl)
			margin-right: 0

		.author
			max-height: 40px

		&:hover
			text-decoration: underline
</style>
