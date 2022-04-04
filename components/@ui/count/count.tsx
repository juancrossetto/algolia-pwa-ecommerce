import { useClassNames } from '@/hooks/useClassNames'

export type CountProps = {
  children: React.ReactNode
  className?: string
}

export function Count({ children, className }: CountProps) {
  const cn = useClassNames(
    'bg-neutral-lightest w-5 h-5 small-bold rounded-full flex items-center justify-center',
    className,
    [className]
  )
  return <div className={cn}>{children}</div>
}
