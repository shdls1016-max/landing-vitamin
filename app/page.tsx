"use client";

import Image from "next/image";
import { useState } from "react";

const comparisonRows = [
  ["핵심 성분 함량", "영양성분 기준치 100%", "최대 3,000% 고함량"],
  ["하루 복용 알약 수", "하루 3~4알", "단 1알"],
  ["흡수율 최적화 설계", "단일 레이어", "이중 정제 기술"],
  ["프리미엄 원산지 공개", "원산지 미공개", "DSM사 100% 유럽산"],
  ["하루 비용", "2,500원", "1,100원"],
];

const plans = [
  { id: "one", months: "1개월분", detail: "30정 · 1병", price: "39,900원", original: "49,000원", badge: "가볍게 시작" },
  { id: "three", months: "3개월분", detail: "30정 · 3병", price: "99,000원", original: "165,000원", badge: "BEST · 40% OFF", recommended: true },
  { id: "six", months: "6개월분", detail: "30정 · 6병", price: "186,000원", original: "330,000원", badge: "최대 구성" },
];

const reviews = [
  { quote: "오후 3시만 되면 눈 꺼지던 직장인입니다. 꾸준히 챙겨 먹으니 바쁜 날에도 컨디션 관리가 한결 수월해졌어요.", name: "김*우 님", age: "32세", tag: "사무직 · 2개월 섭취" },
  { quote: "알약 여러 개 먹기 귀찮았는데 한 알이라 너무 편합니다. 저부터 먹어보고 부모님도 사드렸어요.", name: "이*진 님", age: "29세", tag: "재구매 · 3개월 구성" },
  { quote: "식후에 한 알이면 끝이라 부담이 적어요. 빠뜨리는 날이 줄어서 벌써 세 번째 재구매입니다.", name: "박*현 님", age: "41세", tag: "재구매 3회" },
];

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState("three");

  const scrollToOffer = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="VERDANT 23 홈">
          <span className="brand-mark">V</span>
          <span>VERDANT 23</span>
        </a>
        <div className="header-note"><span className="live-dot" /> 오늘 주문 시 무료배송</div>
        <button className="header-cta" onClick={scrollToOffer}>40% 혜택 보기</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span>누적 판매</span> 500,000병 돌파</div>
          <h1>퇴근길 피로,<br />영양제 4알씩<br className="mobile-break" /> 챙겨 드시나요?</h1>
          <p className="hero-lead">하루 한 알로 끝내는 23가지 활력 설계<br /><strong>프리미엄 고함량을 한 번에.</strong></p>
          <button className="primary-cta" onClick={scrollToOffer}>지금 40% 할인가로 시작하기 <span>→</span></button>
        </div>
        <div className="hero-visual">
          <Image src="/verdant23-product.png" alt="VERDANT 23 데일리 멀티비타민 병과 패키지" fill priority sizes="(max-width: 900px) 100vw, 55vw" />
          <div className="product-chip" aria-label="첫 구매 스페셜 오프 40퍼센트">
            <span>40%</span>
            <p>첫 구매<br />SPECIAL OFF</p>
          </div>
        </div>
      </section>

      <section className="problem section-pad">
        <div className="section-shell problem-grid">
          <div className="problem-heading reveal-block">
            <span className="section-index">01 · WHY VERDANT</span>
            <p className="kicker">왜 비타민을 먹어도 여전히 피곤할까요?</p>
            <h2>매일 먹는 것보다 중요한 건,<br /><span>제대로 채우는 것</span>입니다.</h2>
          </div>
          <div className="problem-list">
            <div><span className="x-icon">×</span><p><b>함량이 부족한 일반 비타민</b><small>기준치만 겨우 채운 배합으로는 아쉬우니까</small></p></div>
            <div><span className="x-icon">×</span><p><b>챙겨 먹기 번거로운 여러 알의 수고</b><small>아침마다 복잡한 루틴은 오래가기 어려우니까</small></p></div>
            <div><span className="x-icon">×</span><p><b>흡수율 고려 없는 저가 원료</b><small>얼마나 먹느냐만큼 어떻게 설계했는지가 중요하니까</small></p></div>
          </div>
        </div>
        <div className="solution-strip">
          <div className="section-shell solution-inner">
            <span className="solution-number">THE<br />SOLUTION</span>
            <p>핵심은 <strong>‘고함량 B군’</strong>과<br /><strong>‘수용성·지용성 이중 설계’</strong>입니다.</p>
            <span className="solution-pill">VERDANT 23 FORMULA</span>
          </div>
        </div>
      </section>

      <section className="comparison section-pad" id="comparison">
        <div className="section-shell narrow-shell">
          <div className="center-heading">
            <span className="section-index">02 · COMPARE</span>
            <p className="compare-kicker">같은 한 알이어도, 설계는 다릅니다</p>
            <h2>현재 드시는 제품과<br /><span>VERDANT 23을 비교해보세요</span></h2>
            <p>함량부터 복용 편의성, 원료 출처까지 중요한 기준만 선명하게 정리했습니다.</p>
          </div>
          <div className="compare-showcase">
            <article className="compare-option compare-basic">
              <div className="option-topline"><span>BEFORE</span><small>일반 종합비타민</small></div>
              <div className="before-product-image"><Image src="/generic-vitamin-bottle.png" alt="무라벨 일반 비타민 용기" fill sizes="(max-width: 720px) 76vw, 330px" /></div>
              <h3>여러 알로 채우는<br />일반적인 영양 루틴</h3>
              <div className="option-specs">
                {comparisonRows.map(([label, normal]) => <div key={label}><small>{label}</small><span>{normal}</span></div>)}
              </div>
            </article>
            <div className="upgrade-flow" aria-hidden="true"><b>→</b></div>
            <article className="compare-option compare-featured">
              <div className="option-topline"><span>AFTER · VERDANT 23</span></div>
              <div className="compare-product-image"><Image src="/verdant23-product.png" alt="VERDANT 23 멀티비타민" fill sizes="(max-width: 720px) 86vw, 430px" /></div>
              <h3>하루 한 알로 완성하는<br /><strong>23가지 고함량 설계</strong></h3>
              <div className="option-specs featured-specs">
                {comparisonRows.map(([label, , ours]) => <div key={label}><small>{label}</small><strong>{ours}</strong></div>)}
              </div>
            </article>
          </div>
          <p className="table-note">* 함량은 영양성분 기준치 대비 최대치 기준이며 성분별 함량은 제품 라벨을 확인해 주세요. 가격은 3개월 정기 구성 기준입니다.</p>
        </div>
      </section>

      <section className="ingredients section-pad">
        <div className="section-shell">
          <div className="split-heading">
            <div><span className="section-index">03 · INGREDIENTS</span><h2>투명하게 공개하는<br />23가지 활력 성분</h2></div>
            <p>필요한 성분만 빼곡하게.<br />원료사와 함량, 설계 이유까지 숨김없이 담았습니다.</p>
          </div>
          <div className="bento-grid">
            <article className="bento-card bento-primary">
              <div className="bento-top"><span className="chem">B<sup>8</sup></span><span className="tag">CORE FORMULA</span></div>
              <div><p className="bento-label">ENERGY METABOLISM</p><h3>비타민 B군 8종<br /><em>최대 3,000%</em></h3><p>탄수화물과 에너지 대사에 필요한 B1부터 정상적인 엽산 대사에 필요한 B12까지, 하루 한 정에 균형 있게.</p></div>
              <div className="mini-bars" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /></div>
            </article>
            <article className="bento-card">
              <div className="bento-top"><span className="chem small">C+E</span><span className="card-no">01</span></div>
              <div><p className="bento-label">ANTIOXIDANT</p><h3>비타민 C &amp; E</h3><p>유해산소로부터 세포를 보호하는 항산화 영양 설계.</p></div>
            </article>
            <article className="bento-card">
              <div className="bento-top"><span className="chem small">Zn·Se</span><span className="card-no">02</span></div>
              <div><p className="bento-label">IMMUNE FUNCTION</p><h3>아연 &amp; 셀렌</h3><p>정상적인 면역 기능과 세포 보호에 필요한 핵심 미네랄.</p></div>
            </article>
            <article className="bento-card bento-wide">
              <div className="cert-mark"><span>DSM</span><small>PREMIUM<br />INGREDIENTS</small></div>
              <div><p className="bento-label">EUROPEAN QUALITY</p><h3>100% DSM사<br />프리미엄 원료</h3><p>원료 출처부터 다른 유럽산 프리미엄 비타민을 사용하고 원산지를 투명하게 공개합니다.</p></div>
              <div className="origin-stamp">EU<br /><span>ORIGIN</span></div>
            </article>
          </div>
          <div className="formula-line"><span>23 INGREDIENTS</span><div /> <p>비타민 13종 · 미네랄 10종</p></div>
        </div>
      </section>

      <section className="reviews section-pad">
        <div className="section-shell">
          <div className="reviews-header">
            <div><span className="section-index light">04 · REAL REVIEWS</span><h2>내돈내산 실구매자의<br />생생한 변화</h2></div>
            <div className="score-box"><strong>4.9</strong><div><span>★★★★★</span><p>12,480개 구매 후기</p></div></div>
          </div>
          <div className="review-grid">
            {reviews.map((review, index) => (
              <article className="review-card" key={review.name}>
                <div className="review-top"><span className="review-stars">★★★★★</span><span className="verified">✓ 검증된 구매자</span></div>
                <p className="review-quote">“{review.quote}”</p>
                <div className="review-meta"><div className="review-avatar">{review.name[0]}</div><p><b>{review.name} · {review.age}</b><span>{review.tag}</span></p><span className="review-index">0{index + 1}</span></div>
              </article>
            ))}
          </div>
          <p className="review-disclaimer">* 개인의 경험을 바탕으로 작성된 후기이며, 섭취 결과는 개인에 따라 다를 수 있습니다.</p>
        </div>
      </section>

      <section className="offer section-pad" id="offer">
        <div className="section-shell">
          <div className="center-heading offer-heading">
            <span className="section-index">05 · SPECIAL OFFER</span>
            <h2>오늘부터 한 알로 시작하세요</h2>
            <p>많이 선택할수록 한 달 부담은 더 가벼워집니다.</p>
            <div className="offer-timer"><span className="live-dot" /> 첫 구매 40% 쿠폰 적용 중</div>
          </div>
          <div className="plan-grid" role="radiogroup" aria-label="구매 구성 선택">
            {plans.map((plan) => (
              <button key={plan.id} className={`plan-card ${selectedPlan === plan.id ? "selected" : ""} ${plan.recommended ? "recommended" : ""}`} onClick={() => setSelectedPlan(plan.id)} role="radio" aria-checked={selectedPlan === plan.id}>
                {plan.recommended && <span className="best-ribbon">가장 많이 선택해요</span>}
                <div className="plan-radio"><span /><small>{plan.badge}</small></div>
                <div><h3>{plan.months}</h3><p>{plan.detail}</p></div>
                <div className="plan-price"><del>{plan.original}</del><strong>{plan.price}</strong></div>
                {plan.recommended && <span className="saving">한 달 33,000원</span>}
              </button>
            ))}
          </div>
          <div className="purchase-panel">
            <div className="purchase-product">
              <div className="purchase-image"><Image src="/verdant23-product.png" alt="VERDANT 23 제품" fill sizes="180px" /></div>
              <div><span>SELECTED OPTION</span><h3>{plans.find((p) => p.id === selectedPlan)?.months}</h3><p>VERDANT 23 데일리 멀티비타민</p></div>
            </div>
            <div className="purchase-action">
              <div className="benefits"><span>✓ 무료배송</span><span>✓ 30일 안심 보장</span><span>✓ 첫 구매 쿠폰</span></div>
              <button onClick={() => alert("선택하신 구성으로 구매 단계로 이동합니다.")}>40% 혜택 받고 구매하기 <span>→</span></button>
            </div>
          </div>
          <p className="safe-note">식품의약품안전처 기준에 따라 제조된 건강기능식품입니다. 질병의 예방 및 치료를 위한 의약품이 아닙니다.</p>
        </div>
      </section>

      <footer>
        <div className="footer-inner section-shell">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark">V</span><span>VERDANT 23</span></a><p>하루 한 알, 복잡했던 영양 루틴의 새로운 기준.</p></div>
          <div className="footer-info"><p>상호명 버던트웰니스 주식회사 · 대표 홍길동</p><p>사업자등록번호 000-00-00000 · 고객센터 1588-0000</p><p>평일 10:00–17:00 (점심 12:30–13:30)</p><p><a href="https://unsplash.com/photos/hNE0qEmN9pA" target="_blank" rel="noreferrer">배경 사진 Kirill Chukhnov · Unsplash</a></p></div>
          <span className="footer-copy">© 2026 VERDANT WELLNESS</span>
        </div>
      </footer>

      <div className="sticky-bar">
        <div className="sticky-copy"><span className="discount-badge">40%</span><p><b>첫 구매 한정 특별 할인</b><small>3개월분 월 33,000원 · 무료배송</small></p></div>
        <button onClick={scrollToOffer}>혜택 받고 구매하기 <span>→</span></button>
      </div>
    </main>
  );
}
