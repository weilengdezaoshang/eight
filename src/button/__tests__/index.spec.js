import Button from '../index'
import { createApp } from 'vue'

test('test button use', () => {
  const app = createApp({}).use(Button)
  expect(app.component(Button.name)).toBeTruthy()
})
