<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import { counter } from '$store/store.svelte'
  import { copy } from '@svelte-put/copy'
  let trigger
  let copied = ''
  function handleCopied(e) {
    copied = e.detail.text
    alert(copied)
  }

</script>

<main>
  <!--{JSON.stringify(new Event())}-->
<p>{counter.count}</p>
  
  <Counter />
  <button type="button" bind:this={trigger}>Copy text below</button>
  <p use:copy={{trigger}} on:copied={handleCopied}>Hello New World</p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
