<script>
  let {name, age, ...rest} = $props()
  let count = $state(0)
  let doubled = $derived(count * 2)
  const onclick = () => {
    const prev = count
    count++
    console.log(`${prev} + 1 = ${count}`)
  }
</script>
{count}
<h3>Hello, {name}</h3>
<p>Age: {age}</p>
<button {onclick}>
  count is {count}; double is {doubled}
</button>
