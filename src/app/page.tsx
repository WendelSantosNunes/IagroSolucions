import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen">
      <Header />

      <div className="m-auto max-w-7xl text-black">
        <h1 className="m-auto mt-12 flex max-w-2xl justify-center text-center text-3xl font-bold max-sm:text-xl">
          Workshop:Transferência de tecnologias no APL da ovinocaprinocultura
        </h1>

        <div className="m-auto mt-28 flex flex-wrap justify-around text-2xl font-bold max-sm:text-lg">
          <p className="text-center  max-md:w-full ">15 de Junho</p>
          <p className="text-center  max-md:w-full ">
            Parque de Exposições Jacobina - PI
          </p>
          <p className="text-center  max-md:w-full ">Programação</p>
        </div>

        <div className="mt-20">
          <div className="w-full max-w-[12.25rem]	rounded-br-lg bg-container-green">
            <p className="pl-2 text-xl font-bold text-white">
              8:00 h às 8:30 h:
            </p>
          </div>
          <p className="ml-5 mt-7">
            <strong> Abertura oficial:</strong> Prefeitura Municipal de
            Jacobina-PI, MIDR, SADA, COAPI, UFPI, UESPI e IFPI.
          </p>
        </div>

        <div className="mt-7">
          <div className="w-full max-w-[12.25rem] rounded-br-lg bg-container-green">
            <p className="pl-2 text-xl font-bold text-white">
              8:30 h às 9:00 h:
            </p>
          </div>
          <p className="ml-5 mt-7">
            <strong>Palestra:</strong> Abertura com a palestra “Desafios e
            soluções da Ovinocaprinocultura no Vale do Itaim”. Palestrante:
            Prof. Daniel Louçana da Costa Araújo - DZO/CCA/UFPI.
          </p>
        </div>

        <div className="mt-7">
          <div className="w-full max-w-[12.25rem]	rounded-br-lg bg-container-green">
            <p className="pl-2 text-xl font-bold text-white">
              9:00 h às 9:30 h:
            </p>
          </div>
          <p className="ml-5 mt-7 ">
            <strong> Mesa redonda:</strong>
          </p>
          <ul className="ml-10 mt-5">
            <li>
              <strong>Moderador:</strong> Prof. Arnaud Azevêdo Alves -
              DZO/CCA/UFPI
            </li>
            <li>
              <strong>Participantes:</strong> UFPI, COAPI, D´CORTHES, ASCCOP,
              ASCOBINA, ASCOFRAN, CAPRINOVA, SADA, SENAR, SEBRAE, Innova, UESPI,
              IFPI
            </li>
          </ul>
        </div>

        <div className="mt-7">
          <div className="w-full max-w-[12.25rem]	rounded-br-lg bg-container-green">
            <p className="pl-2 text-xl font-bold text-white">
              9:30 h às 12:00 h:
            </p>
          </div>
          <p className="ml-5 mt-7 ">
            <strong>Oficinas Técnicas e Assistência aos criadores:</strong>
          </p>
          <ul className="ml-10 mt-5">
            <li>
              <strong>Coordenadora:</strong> Profa. Dinnara Layza Souza da Silva
              - UESPI
            </li>
            <li>
              <strong>Atividades:</strong>
              <ul className="ml-4 mt-2">
                <li>{'->'} Realização de exame Andrológico</li>
                <li>{'->'} Coleta e congelamento de sêmem</li>
                <li>{'->'} Diagnóstico de gestação</li>
                <li>{'->'} Seleção de Matrizes e Reprodutores</li>
                <li>{'->'} Dietas alimentares</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mt-7">
          <div className="w-full max-w-[12.25rem]	rounded-br-lg bg-container-green">
            <p className="pl-2 text-xl font-bold text-white">
              12:00 h às 14:00 h:
            </p>
          </div>
          <p className="ml-5 mt-7 ">
            <strong>Intervalo para o almoço </strong>
          </p>
        </div>

        <div className="mt-7">
          <div className="w-full max-w-[12.25rem]	rounded-br-lg bg-container-green">
            <p className="pl-2 text-xl font-bold text-white">
              14:00 h às 17:00 h:
            </p>
          </div>
          <p className="ml-5 mt-7 ">
            <strong>Oficinas Técnicas e Assistência aos criadores:</strong>
          </p>
          <ul className="ml-10 mt-5">
            <li>
              <strong>Coordenadora:</strong> Prof - IFPI
            </li>
            <li>
              <strong>Atividades:</strong>
              <ul className="ml-4 mt-2">
                <li>{'->'} Coleta de fezes para OPG</li>
                <li>{'->'} Exames de OPG</li>
                <li>{'->'} Famacha (FamachaApp)</li>
                <li>
                  {'->'} Escrituração Zootécnica: Implante de microchip e BEGO
                </li>
                <li>{'->'} PredPeso</li>
                <li>{'->'} Mineralização de caprinos e ovinos</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mt-7">
          <div className="w-full max-w-[12.25rem] rounded-br-lg bg-container-green">
            <p className="pl-2 text-xl font-bold text-white">
              17:00 h às 17:30 h:
            </p>
          </div>
          <p className="ml-5 mt-7 ">
            <strong> Mesa redonda:</strong>
          </p>
          <ul className="ml-10 mt-5">
            <li>
              <strong>Moderador:</strong> Prof. Ricardo de Andrade Lira Rabêlo –
              UFPI
            </li>
            <li>
              <strong>Participantes:</strong> Tiago (MIDR), Edmundo (Coordenador
              dos Polos de ITAPARICA PE), Sinval Andrade Neto (D´CORTHES) e
              COAPI.
            </li>
          </ul>
        </div>

        <div className="mt-7">
          <div className="w-full max-w-[12.25rem] rounded-br-lg bg-container-green">
            <p className="pl-2 text-xl font-bold text-white">
              17:30 h às 17:45 h:
            </p>
          </div>
          <p className="ml-5 mt-7 ">
            <strong> Mesa redonda:</strong>
          </p>
          <ul className="ml-10 mt-5">
            <li>
              <strong>Brindes, Degustação e Sessão de Encerramento:</strong>{' '}
            </li>
            <li>
              <strong>Coordenadora:</strong> Edcácio – Secretaria de Agricultura
              de Jacobina do Piauí
            </li>
          </ul>
        </div>

        <div className="mb-10 mt-7">
          <div className="w-full max-w-[12.25rem] rounded-br-lg bg-container-green">
            <p className="pl-2 text-xl font-bold text-white">
              17:45 h às 18:00 h:
            </p>
          </div>
          <p className="ml-5 mt-7 ">
            <strong>Convite ao CNPA 2023:</strong>
          </p>
          <ul className="ml-10 mt-5">
            <li>
              <strong>Brindes, Degustação e Sessão de Encerramento:</strong>{' '}
            </li>
            <li>
              <strong>Coordenadora:</strong> Prof. Dr. José Lindenberg da Rocha
              Sarmento – UFPI
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  )
}
