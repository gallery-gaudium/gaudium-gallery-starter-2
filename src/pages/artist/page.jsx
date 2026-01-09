import React from "react";

export default function Artist() {
  return (
    <section className="bg-white">
      {/* ===== Artist 헤더 ===== */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-neutral-900">
          Artist
        </h1>

        <nav className="mt-3 flex items-center gap-4 text-sm md:text-base text-neutral-600">
          <a href="#projects" className="font-medium hover:text-neutral-900">
            Projects With
          </a>
        </nav>
      </header>

      <div className="max-w-6xl mx-auto px-6 pb-16 md:pb-20">
        {/* ===== Projects With ===== */}
        <section id="projects">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-10 text-center">
            Projects With
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">
                2025.05 Group Exhibition
              </h3>
              <p className="text-ink/80">
                이상미, 채현정, 강채화, 윤지영, 최정희, 이현정, 박가람, 박지원, 구지희
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">
                2025.06 Group Exhibition
              </h3>
              <p className="text-ink/80">
                백혜숙, 박예반, 최금곤, 윤혜성, 권미선, 신승혜, 양현숙, 박주현, 이해민
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">
                2025.07 Group Exhibition
              </h3>
              <p className="text-ink/80">
                이지성, 권영심, 김성우, 이수향, 천미진, 정다솜, 정현준, 서한나, 구지희
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">
                2025.08 Group Exhibition
              </h3>
              <p className="text-ink/80">
                김섭인, 남주희, 김이엘, 박은정, 이미애, 김지향, 신윤지, 김상현, 이유림
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">
                2025.09 Group Exhibition
              </h3>
              <p className="text-ink/80">
                이 하, 장도경, 이승비, 이채목, 오현정, 김희정, 오정숙, 박재영, 김윤기
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">
                2025.10 Group Exhibition
              </h3>
              <p className="text-ink/80">
                박정현, 조유진, 최희주, 윤지선, 김은진, 김란수, 타이미, 이수연, 안형준
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">
                2025.11 Group Exhibition
              </h3>
              <p className="text-ink/80">
                오지우, 백희경, 고희진, 양경혜, 김정은, 문혜영, 함효린, 김은재, 김경원
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
