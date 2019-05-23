import App from './App.svelte'

// eslint-disable-next-line no-constant-condition
if (3 != 4) {
  console.log('ooh er')
}

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
})

export default app
