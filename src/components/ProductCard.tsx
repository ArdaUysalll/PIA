import { createClient } from '@/src/lib/server' 
  const supabase = await createClient()
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

export default function ProductCatalog() {

  return (
  <>{products?.map((task) => (
                      <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className={`font-semibold text-sm transition-all duration-200 ${task.completed ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                          {task.title}
                        </p>
                        {task.completed && (
                          <span className="px-2 py-0.5 bg-rose-50 text-rose-600 border border-rose-100 text-[10px] font-semibold rounded-md">
                            Tükendi
                          </span>
                        )}
                      </div>

                      {(task.brand || task.category) && (
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {task.brand && (
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-medium rounded-md">
                              {task.brand}
                            </span>
                          )}
                          {task.category && (
                            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[11px] font-medium rounded-md">
                              {task.category}
                            </span>
                          )}
                        </div>
                      )}

                      {task.description && (
                        <p className="text-xs text-slate-500 leading-relaxed">{task.description}</p>
                      )}
                        
                      {task.image && (
                        <div className="pt-2">
                          <img 
                            src={task.image} 
                            alt="Yüklenen Öğe Görseli" 
                            className="w-20 h-20 object-cover rounded-lg border border-slate-200 shadow-sm" 
                          />
                        </div>
                      )}
                    </div>
  
  
                    )}
  
  </>);}