<script>
  let { color, children, ...rest } = $props()
  let el
  let defaultColor = $state((color !== '#222222') && (color !== '#ffffff'))
  let light = $state(color === '#ffffff')
  let dark = $state(color === '#222222')

  $effect(() => {
    if (el) {
      // console.log(color)
      let variable = el.style.getPropertyValue('--color')
      // console.log(variable)
    }
  });
</script>

<span bind:this={el} 
      class:dark
      class:defaultColor 
      class:light
      style:color>{@render children()}</span>



<style>
  /* Shared styles for Badge */
  span {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    /* spacing-margin should be in px*/
    gap: calc((var(--spacing-margin) / 2) * 1px);
    padding: calc(var(--spacing-padding) / 3) var(--spacing-padding);
    border-radius: 4px;
    font-variation-settings: "wght" var(--fw-medium);
    line-height: normal;
  }

  svg {
    width: auto;
    height: auto;
    flex: 0 0 24px;
  }


  /* Media query for minWidth(768) */
  @media (min-width: 768px) {
    span {
      padding-top: calc((var(--spacing-padding) / 2) * 1px);
      padding-bottom: calc((var(--spacing-padding) / 2) * 1px);
      font-size: var(---heading-size-small);
    }
  }

  /* Styling based on color prop */

  .dark {
    background-color: var(--color);
    color: var(--colors-light);
  }

  .light {
    --color-dark: #222222;
    background-color: var(--color);
    color: var(--colors-dark);
  }

  .defaultColor {
    background-color: var(--color);
    color: var(--background);
  }
</style>
