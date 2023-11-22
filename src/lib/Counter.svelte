<script>
  import { counter } from '$store/store.svelte'
  let {children, onclick, ...rest} = $props()
  
</script>
{JSON.stringify(rest)}
<button id={crypto.randomUUID()} onclick={counter.increment}>
  Increment
</button>

<button id={crypto.randomUUID()} onclick={counter.decrement}>
  Decrement
</button>

<button id={crypto.randomUUID()} onclick={counter.reset}>
  Reset
</button>
