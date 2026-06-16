import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/order')({
  component: OrderPage,
})

function OrderPage() {
  return (
   <a href="tel:+15038109369" className="btn btn--primary">
  Order Now
</a>
  )
}
