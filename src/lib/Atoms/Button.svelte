<script>
  // import { color } from '$store/color'
  let color = $state('#222222')
  let { copy, children, onclick, ...rest} = $props()
  let light = color === '#222222' 
  let dark = color === '#ffffff' 
  // let copy = type="copy"
  $effect( () => {
    dark = color === '#ffffff'
    light = color === '#222222'
  })
  let defaultColor = !dark && !light
</script>

  <pre>dark: {dark}, light:{light}, defaultColor: {defaultColor}</pre>
<button  
        {onclick}
        class:copy
        style:color
        class:dark 
        class:defaultColor
        class:light>
        {@render children()}
</button>


<style>
  button {
    display: block;
    width: 100%;
    margin-bottom: calc(var(--spacing-margin) * 1.5px);
    padding: calc(var(--spacing-padding) * 1.3px) calc(var(--spacing-padding) * 1.5px);
    border-radius: 4px;
    font-size: var(---body-size-regular);
    /* font-variation-settings: "wght"$ {var(--fw-.medium}; */
  }

  @media (min-width: 768px) {
    button {
      display: inline-block;
      width: auto;
      margin-bottom: 0;
      vertical-align: middle;
    }

    button:first-child {
      margin-right: calc(var(--spacing-margin) * 1px);
    }

  }

  @media(min-width: 992px) {
    button:first-child {
      margin-right: calc(var(--spacing-margin) * 2px)
    }
  }

  /* lightOnDark when color is #222222*/
  .light {
    background-color: var(--color);
    color: var(--colors-light);
  }

  /* white on dark when color is #ffffff */
  .dark {
    background-color: var(--color);
    color: var(--colors-dark);
  }

  /* deraultColor when color is neither #222222 nor #ffffff */
  .defaultColor {
    background-color: var(--colors-core);
    color: var(--background);
  }

  .copy {
    position: absolute;
    top: 50%;
    right: 0;
    width: 25px;
    height: 25px;
    border: none;
    outline: none;
    transform: translateY(-50%);
  }

  .copy:is(:active svg, :focus svg) {
    outline: -webkit-focus-ring-color auto 5px;
    outline-offset: -2px;
  }

  @media(min-width: 640px) {
    .copy {
      width: 30px;
      height: 30px;
    }
  }
</style>
