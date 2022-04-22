import Masonry from 'react-masonry-css'
import { groupBy, max } from 'lodash'
import ScrollToTop from 'react-scroll-to-top'
import { BiUpArrow } from 'react-icons/bi'
import InfiniteScroll from 'react-infinite-scroll-component'

import Card from '../components/Card'
import { Crane } from '../components/Crane'

import { response } from '../helper/data'
import { en, jp, zh_TW, zh_CN, kr } from '../helper/lang'
import { useRouter } from 'next/router'
import { useState } from 'react'

const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  1000: 2,
  700: 1,
}

const OFFSET = 25

export default function Home() {
  const router = useRouter()
  const { locale } = router
  const t = (() => {
    switch (locale) {
      case 'ja': return jp
      case 'zh-TW': return zh_TW
      case 'zh-CN': return zh_CN
      case 'ko': return kr
      default: return en
    }
  })();
  const isJP = locale === 'ja'
  const isKR = locale === 'ko'
  const changeLanguage = (e: any) => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }
  const [currentIndex, setCurrentIndex] = useState(OFFSET)
  const [items, setItems] = useState(response.slice(0, OFFSET))
  const fetchMore = () => {
    const nextIndex = max([currentIndex + OFFSET, response.length]) || 0
    setItems([...items, ...response.slice(currentIndex, nextIndex)])
    setCurrentIndex(nextIndex)
  }

  return (
    <div className="relative flex flex-col items-center p-2 pt-10">
      <ScrollToTop
        smooth
        component={
          <div className="flex h-full w-full items-center justify-center rounded-md bg-white ">
            <BiUpArrow />
          </div>
        }
        style={{
          zIndex: 100,
          bottom: '1rem',
          right: '1rem',
        }}
      />
      <div className="absolute top-4 right-4">
        <select
          onChange={changeLanguage}
          defaultValue={locale}
          className="text-shadow-sm cursor-pointer  rounded-md bg-blue-500 bg-opacity-50 p-2 text-lg tracking-wide text-white"
        >
          <option className="text-white" value="en">
            EN
          </option>
          <option className="text-white" value="ja">
            JP
          </option>
          <option className="text-white" value="zh-TW">
            zh-TW
          </option>
          <option className="text-white" value="zh-CN">
            zh-CN
          </option>
          <option className="text-white" value="ko">
            KR
          </option>
        </select>
      </div>
      <div className="halo_body mb-8 flex w-full flex-col items-center">
        <img
          className="mb-4"
          src={'/TENKAI_HALO_WORLD.webp'}
          width={600}
          alt="halo-world"
        />
        <div className="box mb-4 flex items-center rounded-md bg-blue-500 bg-opacity-50 p-6 text-lg text-white">
          <div className="intro flex items-center pl-4">
            <img src="kanata_slep.webp" alt="kanata-slep" width={300} />
            <p className="mb-4 lg:pl-6">
              <p className="mb-4 font-bold">{t.p1}</p>
              <p className="mb-4">{t.p2}</p>
              <p className="mb-4">{t.p3}</p>
              <p className="mb-4">{t.p4}</p>
              <p>
                {t.p5
                  .replace('XXX', response.length.toString())
                  .replace(
                    'YYY',
                    (
                      Object.keys(groupBy(response, 'country')).length - 1
                    ).toString()
                  )}
              </p>
              {isJP && <p className="mt-4">{(t as any).pJP}</p>}
              {isKR && <p className="mt-4">{(t as any).pKR}</p>}
            </p>
          </div>
        </div>
        <div className="intro box mb-4 flex items-center rounded-md bg-blue-500 bg-opacity-50 p-4 text-lg text-white">
          <div className="mb-4 flex items-center lg:mb-0">
            <p>
              {t.p6}
              <span className="font-bold">{t.p7}</span>
              {t.p8}
              <a
                href="https://twitter.com/hashtag/1000CranesForKanatan"
                target="_blank"
                rel="noreferrer"
                className="ml-2  items-center justify-center rounded-lg bg-blue-400 py-1 px-4"
              >
                #1000CranesForKanatan
              </a>
            </p>
          </div>
          <div className="flex h-full w-40 items-center justify-center">
            <Crane />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full justify-center">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMore}
          hasMore={currentIndex < response.length}
          loader={<div>loading...</div>}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {items.map((response, i) => (
              <Card response={response} key={`${i}_${response.name}`} />
            ))}
          </Masonry>
        </InfiniteScroll>
      </div>
    </div>
  )
}
