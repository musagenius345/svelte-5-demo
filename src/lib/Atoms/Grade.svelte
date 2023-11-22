<script>
	let {color, children, ...rest} = $props()
</script>
<span
  style:color>
	{@render children()}
</span>

<style>
	span{
	width: 65%;
  color: inherit;
  font-size: var(--step-tiny);
  /* font-variation-settings: "wght" ${var(--fw-.medium}; */
  line-height: 1;
  word-break: break-word;	
	}

	@media (min-width: 375px){
		span {
			width: 65%;
		 font-size: var(--step-small);
		}
	}
	@media (min-width: 640px){
		span {
			word-break: normal
		}
	}
	@media (min-width: 768px){
		span {
			width: auto;
		 }
	}
</style>
