<script>
  const text = 'Hello World'

  import { counter } from '$store/store.svelte'
  import Button from '$atom/Button.svelte'
  import Copy from '$atom/Copy.svelte'
  import Badge from '$atom/Badge.svelte'
  import Divider from '$atom/Divider.svelte'
  import Grade from '$atom/Grade.svelte'
  import Heading from '$atom/Heading.svelte'
  import Icon from '$atom/Icon.svelte'
</script>
<div class=''>
<Button onclick={counter.increment}>{counter.count}</Button>
<Copy large row='5'/>
<Badge color='red'>Badge</Badge>
<Divider color='red'/>
  <Grade color='blue'>Grade</Grade>
  <Heading level='1'>Heading 1</Heading>
  <Heading level='2'>Heading 2</Heading>
  <Heading level='3'>Heading 3</Heading>
  <Heading level='4'>Heading 4</Heading>
  <Heading level='5'>Heading 5</Heading>
  <Heading level='6'>Heading 6</Heading>
  <Heading level='7'>Heading span </Heading>
  <Icon github />
  <Icon clipboard />
  <Icon twitter />
  <Icon cross />
  <Icon tick/>
  <Icon  chevron/>
</div>
<style>
 :global(:selection){
   color: #222;
 }
</style>
