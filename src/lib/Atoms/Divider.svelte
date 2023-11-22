<script>
  let { color, ...rest } = $props()
</script>
<hr style="border-color: {color}" />

<style>
  hr {
    display: block;
    margin-top: 0;
    margin-bottom: calc(var(--spacing-margin * 4);
    padding-top: calc(var(--spacing-padding) * 1.5);
    background-color: transparent;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom-width: 2px;
        border-color: var(--foreground);

    }
</style>
