<script>
$effect( () => {
	
})
	let body
	let hue = $state(0);
	let saturation = $state(0);
	let lightness = $state(0);
	let color = $derived(`hsl(${hue}, ${saturation}%, ${lightness}%)`)
	let hsl

	const changeBg = (node, color) => {
		//body = document.querySelector('main')
	  node.style.backgroundColor = `${color})`
		//console.log('Initial ', `${color}`)
		//console.log('Initial ', node.style.backgroundColor)

		return {
	  update(newColor){
			node.style.backgroundColor = `${newColor}`
		  //console.log(newColor)
		}
		}
	}

	function increment() {
		count += 1;
	}
</script>
<main use:changeBg={color} style="--color: {color}" bind:this={body}>
<input type='range' max="360" bind:value={hue}>
<input type='range' bind:value={saturation}>
<input type='range' bind:value={lightness}>
	<p>HSL: ({hue}, {saturation}, {lightness})</p>
	<p>Color: {JSON.stringify(color)}</p>
	<p>hslColor: {hsl}</p>
</main>
<style>
	/* @property --color {
  syntax: "<color>";
  inherits: false;
  initial-value: #fff;
} */

	main{
		--color: #fff;
		margin: 0;
		min-height: 100%;
		background-color:  var(--color);
	}
p{
	filter: contrast(5%);
}
</style>
