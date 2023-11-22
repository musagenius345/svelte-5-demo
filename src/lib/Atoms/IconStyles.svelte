<script>
	let { select, children, ...rest } = $props()
	let notSelect = $state(!select)
</script>
<svg class:select class:notSelect>
	{@render children()}
</svg>
<style>
	svg{
  display: inline-block;
  vertical-align: middle;
	}
  .notSelect {
    width: 100%;
    height: 100%;
	}

  .select {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: -1;
  }
</style>
