import React from 'react'

const AnasayfaPage = () => {
  return (
    <div className="pb-43 bg-white text-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pb-32">
        <div className="space-y-5">
          <span className="text-6xl/18 text font-bold">Kurumsal B2B Yazılım <br /> ve Web Teknolojileri <br /> Ajansı | İstanbul</span>
          <br />
          <span className='text-3xl font-light text-amber-600'>Kurumsal Yazılımda 20 Yıllık Güç</span>
          <br />
          <span>Enterprise seviye yazılım, B2B e-ticaret ve dijital pazarlama çözümleriyle <br /> 
          işletmenizi rekabette öne çıkarıyoruz.</span>
            <form className="w-150 pt-9">   
                <div className="relative ">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
                        <svg className="w-4 h-4 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-black border border-gray-300 rounded-sm bg-gray-50 text-white dark:placeholder-gray-600 dark:text-white  " placeholder="Size hangi konularda yardımcı olabilriz?" required />
                    <button type="submit" className="text-white absolute end-0 bottom-0 h-13.5 cursor-pointer font-medium rounded-sm text-sm w-15 dark:bg-amber-600 ">Bul</button>
                </div>
            </form>
        </div>
        <div>
          <img src="/fotograf.webp" alt="" className='' />
        </div>
      </div>
        <div className='bg-gray-100 pt-25'>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <div>
              <span className="text-6xl/18 text font-bold">Çözümlerimiz</span>
            </div>
            <div>
              <button className="cursor-pointer group relative z-0 h-15 w-66 overflow-hidden text-base/11.5 overflow-x-hidden rounded-4xl bg-gray-100 border-2 border-black px-8 py-2 text-black text-m font-semibold">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Hizmetleri İnceleyin</span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 aspect-video w-full origin-center translate-x-full rounded-full bg-black transition-all duration-600 group-hover:-translate-x-0 group-hover:scale-150"></span></span>
              </button>
            </div>
          </div>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <ul className="flex wrap">
              <li>
                <div>
                  <div>
                    
                  </div>
                  <div>

                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>

                  </div>
                  <div>

                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>

                  </div>
                  <div>

                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>

                  </div>
                  <div>

                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default AnasayfaPage