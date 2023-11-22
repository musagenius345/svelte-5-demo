<script>
  let { children, color, level, grade, noMargin, size, ...rest } = $props()
  let nums = [1, 2, 3, 4, 5, 6]
  /**
   * typedef Sizes = small | regular | big | medium | xl | large
   **/
</script>
<div class:grade class:noMargin class:notGrade={!grade} class:margin={!noMargin} {size} style:color>

  {#if level == 1}
  <h1>{@render children()}</h1>
  {/if}
  {#if level == 2}
  <h2>{@render children()}</h2>
  {/if}
  {#if level == 3}
  <h3>{@render children()}</h3>
  {/if}
  {#if level == 4}
  <h4>{@render children()}</h4>
  {/if}
  {#if level == 5}
  <h5>{@render children()}</h5>
  {/if}
  {#if level == 6}
  <h6>{@render children()}</h6>
  {/if}
  {#if level == 7}
  <span>{@render children()}</span>
  {/if}


</div>

<style>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font);
  }

  .notGrade {
    /* font-variation-settings: "wght" ${var(--fw-.bold}; */
    line-height: var(--lh-heading);
  }

  .margin {
    margin: 0 0 calc(var(--spacing-margin * 1.5));
  }

  .noMargin {
    margin: 0;
  }

  [size="tiny"] {
    font-size: var(--step-tiny);
    `
  }

  [size="small"] {
    font-size: var(--step-small);
    `
  }

  [size="regular"] {
    font-size: var(--step-regular);
  }

  [size="medium"] {
    font-size: var(--step-medium);
  }

  [size="big"] {
    font-size: var(--step-big);
  }

  [size="large"] {
    font-size: var(--step-large);
  }

  [size="xl"] {
    font-size: var(--step-xl);
  }

  .grade {
    color: var(--foreground);
    font-size: var(--step-large);
    /* font-variation-settings: "wght" ${var(--fw-.thick}; */
    line-height: 0.85;
  }

  @media (min-width: 992px) {
    .grade {
      font-size: var(--step-xl);
    }
  }
</style>
