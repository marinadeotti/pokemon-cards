import {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import type {Config} from 'jest';

export const config: Config = {
  verbose: true,
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {...options})

export * from '@testing-library/react'
export {customRender as render}