<script>
	let {large, ...rest} = $props()
</script>

<textarea 
  class:large 
  class:normal={!large}></textarea>
<style>
	textarea{
  display: block;
  width: 100%;
  max-width: 575px;
  height: auto;
  margin-top: calc(var(--spacing-margin * 1.5));
  padding-top: 0;
  padding-right: 0;
  padding-bottom: calc(var(--spacing-padding / 2);
  padding-left: 0;
  border: none;
  background-color: transparent;
  font-family: var(--copy);
  line-height: inherit;
  resize: none;
}
  .normal {
    font-size: 1rem !important;
  }

  .large {
    font-size: 18pt;
  }
</style>
