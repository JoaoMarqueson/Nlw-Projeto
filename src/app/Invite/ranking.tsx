import Cooper from '../../assets/assets/medal-cooper.svg'
import Gold from '../../assets/assets/medal-gold.svg'
import Silver from '../../assets/assets/medal-silver.svg'
import Image from 'next/image'


export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-300 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1°</span>| João Marqueson
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            src={Gold}
            alt="logodeouro"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2°</span>| Paulo Henrique Ganso
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            987
          </span>

          <Image
            src={Silver}
            alt="logodeprata"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3°</span>| Neymar da Silva Santos
          </span>
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            876
          </span>

          <Image
            src={Cooper}
            alt="logodebronzze"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
