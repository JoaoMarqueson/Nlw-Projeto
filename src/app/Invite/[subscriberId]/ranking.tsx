import { getRanking } from '@/http/api'
import Image from 'next/image'
import Cooper from '../../../assets/assets/medal-cooper.svg'
import Gold from '../../../assets/assets/medal-gold.svg'
import Silver from '../../../assets/assets/medal-silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-300 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={item.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}°</span>|{' '}
                {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={Gold}
                  alt="logodeouro"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 2 && (
                <Image
                  src={Silver}
                  alt="logodeouro"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 3 && (
                <Image
                  src={Cooper}
                  alt="logodeouro"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
