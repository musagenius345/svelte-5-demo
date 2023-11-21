<script>
  import { counter } from '$store/store.svelte'
  let {children, onclick, ...rest} = $props()
  console.log(rest)
</script>
<button id={crypto.randomUUID()} onclick={counter.increment}>
  Increment
</button>

<button id={crypto.randomUUID()} onclick={counter.decrement}>
  Decrement
</button>

<button id={crypto.randomUUID()} onclick={counter.reset}>
  Reset
</button>
