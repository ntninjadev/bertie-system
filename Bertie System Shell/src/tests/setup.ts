import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Only extend expect with React Testing Library matchers if we're in a React test
if (process.env.NODE_ENV === 'test') {
  expect.extend(matchers as any)
}

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
}) 