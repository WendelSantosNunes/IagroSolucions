import Image from 'next/image'

// Images
import Coapi from '@/app/assets/COAPI.jpg'
import Asccop from '@/app/assets/ASCCOP.png'
import Ascobina from '@/app/assets/ASCOBINA.png'
import Ascofran from '@/app/assets/ASCOFRAN.jpeg'
import Ufpi from '@/app/assets/UFPI.png'
import Ifpi from '@/app/assets/IFPI.png'
import Uespi from '@/app/assets/UESPI.jpg'
import DArthesa from '@/app/assets/DArthesã.png'
import DCorTHEs from '@/app/assets/DCorTHEs.png'
import Innova from '@/app/assets/Innova.jpg'

export function Apoio() {
  return (
    <footer className="align-center w-full">
      <div className="m-auto flex max-w-7xl flex-col items-center	 px-16 py-6">
        <div>
          <h2 className="mb-10 text-center text-2xl	text-black">Realização</h2>
          <Image
            src={Coapi}
            alt="Logo da Coapi"
            className="w-full	max-w-imagem object-cover"
          />
        </div>
        <div className="mt-10">
          <h2 className="mb-10 text-center text-2xl	text-black ">
            Co-realização
          </h2>
          <div className="flex flex-wrap justify-between gap-3 max-[540px]:justify-center">
            {' '}
            <Image
              src={Asccop}
              alt="Logo da Asccop"
              className="w-full max-w-imagem"
            />
            <Image
              src={Ascobina}
              alt="Logo da Ascobina"
              className="w-full max-w-imagem"
            />
            <Image
              src={Ascofran}
              alt="Logo da Ascofran"
              className="w-full max-w-imagem"
            />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="mb-10 text-center text-2xl	text-black">
            Apoio e Parceria
          </h2>
          <div className="flex flex-wrap justify-between max-[540px]:justify-center">
            {' '}
            <Image
              src={Ufpi}
              alt="Logo da UFPI"
              className="w-full	max-w-imagem object-cover"
            />
            <Image
              src={Ifpi}
              alt="Logo da IFPI"
              className="w-full	max-w-imagem object-cover"
            />
            <Image
              src={Uespi}
              alt="Logo da UESPI"
              className="w-full	max-w-imagem object-cover"
            />
            <Image
              src={DCorTHEs}
              alt="Logo da D'CorTHEs"
              className="w-full	max-w-imagem object-cover"
            />
            <Image
              src={DArthesa}
              alt="Logo da D'Arthesã"
              className="w-full	max-w-imagem object-cover"
            />
            <Image
              src={Innova}
              alt="Logo da Innova"
              className="w-full	max-w-imagem object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
