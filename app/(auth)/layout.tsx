import type { ReactNode, FC } from 'react'

const RootAuthLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <head />
    <body className="bg-black">{children}</body>
  </html>
)
export default RootAuthLayout
