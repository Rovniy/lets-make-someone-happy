<script>
	export let step = {}
</script>

<div class="step_block {step.idx % 2 === 0 ? 'align-self-end' : 'align-self-start'}">
	<span class="description">{step.description}</span>
	<span class="number">{step.idx}</span>
	<img class="image" src="./src/assets/images/step_{step.idx}.svg" alt="step">
</div>

<style lang="sass">
@import "src/assets/styles/_vars"

.step_block
	width: 90%
	background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)
	border-radius: 4px
	position: relative
	padding: 58px 0 30px 30px

	@media screen and (min-width: 1100px)
		max-width: 610px

		&.align-self-start
			align-self: flex-start

		&.align-self-end
			align-self: flex-end

	.number
		position: absolute
		top: -42px
		left: 60px
		color: #017AF1
		font-size: 64px
		font-weight: 700

	.image
		position: absolute
		top: -35px
		right: 60px

</style>
