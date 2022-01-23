import { create } from 'react-test-renderer'
import { MockedProvider } from '@apollo/client/testing'
import Submit from './Submit'

const noop = () => {}

it('Submit should be disabled on empty value', async () => {
  const component = create(
    <MockedProvider mocks={[]} addTypename={false}>
      <Submit value={''} onSuccess={noop}/>
    </MockedProvider>
  )

  component.root.findByProps({ disabled: true })
})
