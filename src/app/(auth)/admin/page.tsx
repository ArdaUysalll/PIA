// src/app/dashboard/page.tsx
import { createClient } from '@/src/lib/server'
import { redirect } from 'next/navigation'
import { addTask, toggleTask, deleteTask, signOut } from '@/src/app/(auth)/admin/actions'
import FilestackUpload from '@/src/components/Upload'
 
export default async function Dashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
 
  if (!user) redirect('/login')
 
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
 
  return (
    <div className="min-h-screen bg-slate-50/50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">İçerik Yönetim Paneli</h1>
          </div>
          <form action={signOut}>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-xl transition-all duration-200"
            >
              Çıkış Yap
            </button>
          </form>
        </div>
 
        {/* Main Content Grid (Full Page Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Add Item Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 sticky top-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">+</span>
              Yeni Öğe Ekle
            </h2>

            <form action={addTask} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Başlık</label>
                <input
                  name="title"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Marka</label>
                  <input
                    name="brand"
                    placeholder="Bosch, İzeltaş . . . "
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Kategori</label>
                  <input
                    name="category"
                    placeholder="Kesici Takımlar , Ölçü . . ."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Açıklama</label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Bu öğe hakkında detaylar sağlayın..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-sm resize-none"
                />
              </div>    

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Medya Yükleme</label>
                <div className="p-4 bg-slate-50 border border-dashed border-slate-200 rounded-xl">
                  <FilestackUpload />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-200 text-sm">
                Öğeyi Yayınla
              </button>
            </form>
          </div>
 
          {/* Right Column: Item List Section */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-lg font-semibold text-slate-900">Aktif Site Öğeleri</h2>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
                {products?.length || 0} Toplam
              </span>
            </div>

            {products?.length === 0 && (
              <div className="text-center py-16">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-3 text-xl">📂</div>
                <p className="text-slate-500 font-medium text-sm">Henüz öğe eklenmedi.</p>
                <p className="text-slate-400 text-xs mt-1">Soldaki formu doldurarak başlayın.</p>
              </div>
            )}
   
            <div className="space-y-3 max-h-[calc(100vh-16rem)] overflow-y-auto pr-1">
              {products?.map((task) => (
                <div
                  key={task.id}
                  className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-50 border border-slate-200/60 rounded-xl transition-all duration-200 gap-4"
                >
                  <div className="flex items-start gap-4 w-full sm:w-auto">
                    <form action={toggleTask.bind(null, task.id, task.completed)} className="mt-0.5 sm:mt-0">
                      <button 
                        type="submit" 
                        className={`h-7 w-7 rounded-lg flex items-center justify-center border transition-all duration-200 text-xs ${
                          task.completed 
                            ? 'bg-rose-50 border-rose-200 text-rose-600' 
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                        title={task.completed ? "Stokta Var olarak işaretle" : "Tükendi olarak işaretle"}
                      >
                        {task.completed ? '✕' : ''}
                      </button>
                    </form>

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
                  </div>
   
                  <form action={deleteTask.bind(null, task.id)} className="self-end sm:self-center">
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg transition-all duration-200"
                    >
                      Sil
                    </button>
                  </form>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}