<script>
	let {id, rows, large, ...rest} = $props();
	/** @typedef CopyProps {
  id: string
  rows: number
  large: bolean
  normal: !large
 */
 	let copy 
	let defaultText = 'Click/Tap to edit me. That Biff, what a character. Always trying to get away with something. Been on top of Biff ever since high school. Although, if it wasn\'t for him - Yes, yes, I\'m George, George McFly, and I\'m your density. I mean, I\'m your destiny. Right. Alright, take it up, go. Doc. Something wrong with the starter, so I hid it.';
	function checkDataInput() {
    if (copy.value.length === 0) {
      copy.value = defaultText;
    }
		return
  }
</script>
<textarea
  {id}
  {rows}
	bind:this={copy}
  value={defaultText}
  onblur={checkDataInput}
  class:large 
  class:normal={!large}
  ></textarea>

<style>
	textarea{
  display: block;
  width: 100%;
  max-width: 575px;
  height: auto;
  margin-top: calc(var(--spacing-margin * 1.5));
  padding-top: 0;
  padding-right: 0;
  padding-bottom: calc(var(--spacing-padding) / 2);
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
