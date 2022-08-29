<script xmlns="http://www.w3.org/1999/html">
	// export let step = {}
</script>

<div class="modal">
	<form action="#">
		<input class="form_item" placeholder="Your name" />
		<input class="form_item" placeholder="Contact address" />
		<input class="form_item" placeholder="Social link" />
		<input type="submit" value="Let's go!" />
	</form>
</div>

<style lang="sass">
@import "src/assets/styles/_vars"

.step_block
	width: 85%
	background: linear-gradient(90deg, #FFFFFF 0%, $color_light 100%)
	border-radius: 4px
	position: relative
	padding: 58px 0 30px 30px
	@media screen and (min-width: $content_xl)
		max-width: 610px

		&.align-self-start
			align-self: flex-start

		&.align-self-end
			align-self: flex-end

	.number
		position: absolute
		top: -42px
		left: 60px
		color: $color_highlight
		font: 700 64px/1 $main_font_family

	.description
		color: $color_primary
		font: 500 18px/1 $main_font_family

	.image
		position: absolute
		top: -35px
		right: 60px
		z-index: 1

</style>
