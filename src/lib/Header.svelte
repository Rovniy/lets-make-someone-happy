<header class="header">
	<a href="/" class="action">{SITE_NAME}</a>
	<a href="{telegramLink}" target="_blank" class="name">by {AUTHOR_SHORT}</a>
</header>

<script>
	import { SITE_NAME, AUTHOR_SHORT, SOCIAL } from '/src/constants'

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
		color: $color_primary
		margin-left: 20px
		font: 700 16px/16px $main_font_family
		text-decoration: none
		@media screen and (min-width: $content_md)
			font-size: 20px
		@media screen and (min-width: $content_xl)
			margin-left: 0
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
		&:hover
			text-decoration: underline
</style>
