import { type ComponentProps, ReactNode } from 'react'

interface IconButtonprops extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonprops) {
  return (
    <button
      className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover: hover:text-gray-900"
      {...props}
    />
  )
}
