'use client'
import { createClient } from '@/src/lib/server'
  const supabase = await createClient()
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
export default function ProductCard() {

  return (
  <>
{products?.map(task => (

    <div>
        {products.map(task =>(
        <div key={task.id}>
          {task.title}
          <p>{task.description}</p>
        </div>
      ))

     }
    </div>
))}
  
  </>);}