<article class="section_five">
    <h2 class="title">Who has already received the long-awaited gift of fate?</h2>

    {#each db as post}
        {@html post}
    {/each}
</article>

<script>
    import {onMount} from "svelte";
    import DB from '/src/assets/db/twitts'

    let db = []

    onMount(() => db = DB)
</script>

<style lang="sass">
  @import "src/assets/styles/_vars"

  .section_five
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    gap: 50px
    width: 100%

    .title
      margin: 120px 0
      text-align: center
      text-transform: uppercase
      padding: 0 20px
      font: 700 30px/95% $main_font_family

      @media screen and (min-width: 720px)
        font-size: 36px
</style>
