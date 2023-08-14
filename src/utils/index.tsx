/* eslint-disable react/display-name, react/prop-types */

import React, { FC, PropsWithChildren } from 'react'
import * as Components from '@root/components'
import { providers } from '@root/components/providers'

type ComponentName = keyof typeof Components

type Providers = FC<PropsWithChildren<any>>[]

const combineProviders = (providers: Providers): FC<PropsWithChildren> =>
  providers.reduce(
    (AccumulatedProviders, Provider) =>
      function ({ children }) {
        return (
          <AccumulatedProviders>
            <Provider>{children}</Provider>
          </AccumulatedProviders>
        )
      },
    ({ children }) => children
  )

export const getProviders = () => {
  const Providers = providers.map((provider) => {
    const Provider = Components[provider as ComponentName]

    if (!Provider || typeof Provider !== 'function') {
      throw new Error(`Provider ${provider} not found`)
    }

    return Provider
  })

  return combineProviders(Providers)
}
