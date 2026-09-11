import { useMemo, useState, type ReactNode } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Building2,
  Check,
  CircleAlert,
  Home,
  MapPin,
  Printer,
  Shield,
  Sparkles,
  Wallet,
} from "lucide-react";
import { buildPlan, compareCities } from "@/lib/calc";
import {
  bathroomPack,
  cities,
  type CityId,
  models,
  type ModelId,
  shanghaiBenchmark,
  sku,
  timelineZero,
} from "@/lib/plan-data";
import { usePlan } from "@/lib/store";
import { cn, yuan, yuanExact } from "@/lib/utils";

const cityOrder: CityId[] = ["sz", "t2", "t3", "county"];
const modelOrder: ModelId[] = ["zero", "lite", "store"];
const nav = [
  { id: "verdict", label: "结论" },
  { id: "shanghai", label: "上海对标" },
  { id: "city", label: "选址" },
  { id: "capex", label: "启动费" },
  { id: "opex", label: "月成本" },
  { id: "cash", label: "12个月" },
  { id: "sku", label: "产品" },
  { id: "play", label: "90天" },
  { id: "risk", label: "合规风险" },
];

export function PlanApp() {
  const { city, model, capital, setCity, setModel, setCapital } = usePlan();
  const plan = useMemo(() => buildPlan(city, model, capital), [city, model, capital]);
  const peers = useMemo(() => compareCities(model, capital), [model, capital]);
  const [tab, setTab] = useState<"sz" | "home">("sz");
  const rec = recommend(capital);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="relative border-b border-border bg-surface/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs tracking-[0.22em] text-primary">SILVER HOME PLAN · 2026</p>
            <h1 className="mt-1 font-serif text-3xl font-bold sm:text-4xl">银居计划</h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              把上海银发商店拆成普通人能做的三种模式，并按深圳 / 二线省会 / 地级市 / 县城逐项测算费用。
              老家城市未指定，用三类样本代替。数字按 2026 年社区底商行情取中位，不是报价单。
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="no-print inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-bg px-4 text-sm font-medium"
          >
            <Printer className="size-4" />
            打印 / 导出 PDF
          </button>
        </div>
      </header>

      <div className="no-print sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2 sm:px-6">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="shrink-0 rounded-full px-3 py-2 text-sm text-muted hover:bg-bg-deep hover:text-fg"
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>

      <main className="relative mx-auto max-w-6xl space-y-10 px-4 py-8 sm:px-6 sm:py-12">
        <section className="rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Field label="落地城市">
              <div className="grid grid-cols-2 gap-2">
                {cityOrder.map((id) => (
                  <Chip key={id} active={city === id} onClick={() => setCity(id)}>
                    {cities[id].short}
                  </Chip>
                ))}
              </div>
            </Field>
            <Field label="经营模式">
              <div className="grid grid-cols-1 gap-2">
                {modelOrder.map((id) => (
                  <Chip key={id} active={model === id} onClick={() => setModel(id)}>
                    {models[id].name.replace("模式 ", "")}
                  </Chip>
                ))}
              </div>
            </Field>
            <Field label={`可用启动资金  ${yuanExact(capital)}`}>
              <input
                type="range"
                min={0}
                max={300000}
                step={2000}
                value={capital}
                onChange={(e) => setCapital(Number(e.target.value))}
                className="mt-3 w-full accent-primary"
              />
              <div className="mt-2 flex justify-between text-xs text-faint">
                <span>0</span>
                <span>8万</span>
                <span>18万</span>
                <span>30万</span>
              </div>
            </Field>
          </div>
          <p className="mt-4 text-sm text-muted">
            {plan.city.sample} · {plan.model.fit}
          </p>
        </section>

        <section id="verdict" className="scroll-mt-16">
          <SectionTitle kicker="01 先看结论" title="深圳还是回老家？" />
          <div className="grid gap-4 lg:grid-cols-5">
            <article className="rounded-2xl border border-primary/20 bg-primary p-5 text-primary-fg lg:col-span-3">
              <p className="text-xs tracking-widest opacity-80">针对当前资金档位的建议</p>
              <h3 className="mt-2 font-serif text-2xl">{rec.title}</h3>
              <p className="mt-3 text-sm leading-7 opacity-90">{rec.body}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {rec.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
            <div className="grid gap-3 lg:col-span-2">
              <Stat label="本方案启动资金" value={yuan(plan.capexTotal)} hint={plan.runwayHint} />
              <Stat
                label="月固定成本"
                value={yuan(plan.opexTotal)}
                hint={`盈亏平衡约 ${Math.max(1, Math.ceil(plan.opexTotal / Math.max(plan.grossPerOrder, 1)))} 单 / 月`}
              />
              <Stat
                label="第 12 月累计现金"
                value={yuan(plan.months[11].cash)}
                hint={plan.breakevenMonth ? `累计回本约第 ${plan.breakevenMonth} 个月` : "12 个月内未回本"}
                warn={!plan.breakevenMonth || plan.months[11].cash < 0}
              />
            </div>
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-bg-deep text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">维度</th>
                  {cityOrder.map((id) => (
                    <th key={id} className="px-4 py-3 font-medium">
                      {cities[id].short}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <CmpRow label="启动资金（当前模式）" cells={peers.map((p) => yuan(p.capexTotal))} />
                <CmpRow label="月固定成本" cells={peers.map((p) => yuan(p.opexTotal))} />
                <CmpRow label="客单价（含安装）" cells={peers.map((p) => yuanExact(p.ticket))} />
                <CmpRow label="单均毛利" cells={peers.map((p) => yuanExact(p.grossPerOrder))} />
                <CmpRow label="第 6 月单量" cells={peers.map((p) => `${p.ordersM6} 单`)} />
                <CmpRow label="年利润（测算）" cells={peers.map((p) => yuan(p.yearProfit))} />
                <CmpRow label="适合指数" cells={peers.map((p) => String(p.verdictScore))} />
              </tbody>
            </table>
          </div>
        </section>

        <section id="shanghai" className="scroll-mt-16">
          <SectionTitle kicker="02 上海银发商店" title="学结构，不学体量" />
          <div className="grid gap-4 md:grid-cols-4">
            <Quote n="首周" a={shanghaiBenchmark.week1.product} b={shanghaiBenchmark.week1.serviceIntent} />
            <Quote n="两周" a={shanghaiBenchmark.week2.product} b={shanghaiBenchmark.week2.serviceIntent} />
            <Quote n="首月" a={shanghaiBenchmark.month1.product} b={shanghaiBenchmark.month1.serviceIntent} />
            <Quote n="一季度意向" a={shanghaiBenchmark.q1.sales} b={shanghaiBenchmark.q1.serviceIntent} />
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{shanghaiBenchmark.insight}</p>
          <p className="mt-2 text-xs text-faint">
            数据来源：普陀区政府、上观新闻、证券时报对「上海老博会创新产品体验馆」开业报道（2025.12–2026.03）。服务金额多为意向，不等于已回款。
          </p>
        </section>

        <section id="city" className="scroll-mt-16">
          <SectionTitle kicker="03 城市画像" title={plan.city.name} />
          <p className="mb-4 text-sm text-muted">{plan.city.aging}</p>
          <div className="flex gap-2">
            <Chip active={tab === "sz"} onClick={() => setTab("sz")}>
              看深圳
            </Chip>
            <Chip active={tab === "home"} onClick={() => setTab("home")}>
              看当前城市
            </Chip>
          </div>
          <CityCard id={tab === "sz" ? "sz" : city} />
        </section>

        <section className="scroll-mt-16">
          <SectionTitle kicker="04 三种模式" title="不要一上来复制 1000㎡ 展馆" />
          <div className="grid gap-4 lg:grid-cols-3">
            {modelOrder.map((id) => {
              const m = models[id];
              const p = buildPlan(city, id, capital);
              const on = model === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setModel(id)}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition",
                    on ? "border-primary bg-surface shadow-md" : "border-border bg-surface/70",
                  )}
                >
                  <p className="text-xs text-primary">{m.name}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{m.blurb}</p>
                  <p className="mt-4 font-serif text-2xl">{yuan(p.capexTotal)}</p>
                  <p className="text-xs text-faint">启动 · 月固定 {yuan(p.opexTotal)}</p>
                  <p className="mt-3 text-xs text-muted">适合：{m.fit}</p>
                </button>
              );
            })}
          </div>
        </section>

        <section id="capex" className="scroll-mt-16">
          <SectionTitle kicker="05 启动费用明细" title={`一共 ${yuanExact(plan.capexTotal)}`} />
          <CostTable rows={plan.capex} />
          <p className="mt-3 text-sm text-muted">
            {capital >= plan.capexTotal
              ? `你的资金覆盖启动后还剩 ${yuan(capital - plan.capexTotal)} 作为周转。`
              : `按当前资金还缺 ${yuan(plan.capexTotal - capital)}。建议改选模式 A，或先用上门赚出缺口。`}
          </p>
        </section>

        <section id="opex" className="scroll-mt-16">
          <SectionTitle kicker="06 每月固定支出" title={`${yuanExact(plan.opexTotal)} / 月`} />
          <CostTable rows={plan.opex} />
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Mini label="单均收入" value={yuanExact(plan.ticket)} />
            <Mini label="单均货本+安装人工" value={yuanExact(plan.cogsPerOrder + plan.laborPerOrder)} />
            <Mini label="单均毛利" value={yuanExact(plan.grossPerOrder)} />
          </div>
        </section>

        <section id="cash" className="scroll-mt-16">
          <SectionTitle kicker="07 十二个月现金流" title="保守爬坡，不是暴利表" />
          <p className="mb-4 max-w-3xl text-sm leading-7 text-muted">
            订单从第 1 月爬到第 6 月后持平；未计入政府招标和爆单。启动资金在第 0 月一次性扣除。现金为负表示还要垫钱。
          </p>
          <div className="h-64 rounded-2xl border border-border bg-surface p-3 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={plan.months} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="var(--color-line)" vertical={false} />
                <XAxis dataKey="m" tickFormatter={(v) => `${v}月`} stroke="var(--color-faint)" fontSize={12} />
                <YAxis
                  tickFormatter={(v) => `${Math.round(Number(v) / 10000)}万`}
                  stroke="var(--color-faint)"
                  fontSize={12}
                  width={40}
                />
                <Tooltip
                  formatter={(v, n) => {
                    const num = typeof v === "number" ? v : Number(v);
                    const name = String(n);
                    const label = name === "cash" ? "累计现金" : name === "profit" ? "当月利润" : name;
                    return [yuanExact(num), label];
                  }}
                  labelFormatter={(l) => `第 ${l} 月`}
                />
                <Area type="monotone" dataKey="cash" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.15} />
                <Area type="monotone" dataKey="profit" stroke="var(--color-accent)" fill="var(--color-accent)" fillOpacity={0.12} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-surface">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-bg-deep text-muted">
                <tr>
                  {["月", "单量", "收入", "货本+人工", "固定成本", "利润", "累计现金"].map((h) => (
                    <th key={h} className="px-3 py-2 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plan.months.map((r) => (
                  <tr key={r.m} className="border-t border-line">
                    <td className="px-3 py-2">{r.m}</td>
                    <td className="px-3 py-2 tabular-nums">{r.orders}</td>
                    <td className="px-3 py-2 tabular-nums">{yuanExact(r.revenue)}</td>
                    <td className="px-3 py-2 tabular-nums">{yuanExact(r.cogs)}</td>
                    <td className="px-3 py-2 tabular-nums">{yuanExact(r.opex)}</td>
                    <td className={cn("px-3 py-2 tabular-nums", r.profit < 0 ? "text-bad" : "text-good")}>
                      {yuanExact(r.profit)}
                    </td>
                    <td className={cn("px-3 py-2 tabular-nums", r.cash < 0 ? "text-bad" : "text-good")}>
                      {yuanExact(r.cash)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="sku" className="scroll-mt-16">
          <SectionTitle kicker="08 产品与定价" title="服务毛利大于货架毛利" />
          <div className="mb-4 rounded-2xl border border-accent/30 bg-accent-soft p-4">
            <p className="text-sm font-medium">{bathroomPack.name}</p>
            <p className="mt-1 text-sm text-muted">{bathroomPack.items}</p>
            <p className="mt-2 font-serif text-xl">
              进货 {yuanExact(bathroomPack.cost)} · 零售 {yuanExact(bathroomPack.price)} · 安装 {yuanExact(bathroomPack.install)} · 合计收客 {yuanExact(bathroomPack.price + bathroomPack.install)}
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-bg-deep text-muted">
                <tr>
                  {["SKU", "进货", "建议零售", "安装费", "毛利", "热度"].map((h) => (
                    <th key={h} className="px-3 py-2 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sku.map((s) => (
                  <tr key={s.name} className="border-t border-line">
                    <td className="px-3 py-2">{s.name}</td>
                    <td className="px-3 py-2 tabular-nums">{yuanExact(s.cost)}</td>
                    <td className="px-3 py-2 tabular-nums">{yuanExact(s.price)}</td>
                    <td className="px-3 py-2 tabular-nums">{yuanExact(s.install)}</td>
                    <td className="px-3 py-2 tabular-nums text-good">{yuanExact(s.price + s.install - s.cost)}</td>
                    <td className="px-3 py-2">{s.hot ? "高频" : "选配"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="play" className="scroll-mt-16">
          <SectionTitle kicker="09 落地节奏" title="先成交，再租铺" />
          <ol className="grid gap-3 md:grid-cols-2">
            {timelineZero.map((t) => (
              <li key={t.week} className="rounded-2xl border border-border bg-surface p-4">
                <p className="text-xs text-primary">{t.week}</p>
                <h3 className="mt-1 font-serif text-lg">{t.title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted">
                  {t.items.map((i) => (
                    <li key={i}>· {i}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="risk" className="scroll-mt-16">
          <SectionTitle kicker="10 合规与风险" title="这行能出事的点" />
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-border bg-surface p-5">
              <Shield className="size-5 text-primary" />
              <h3 className="mt-2 font-serif text-lg">必须办的</h3>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-muted">
                <li>个体户或一人公司（安装服务开票、进街道的前提）</li>
                <li>公众责任险：老人滑倒、打孔打到水管是真实风险</li>
                <li>卫生间防水与承重：承重墙打孔要会判断，不会就外包</li>
                <li>卖血压计、轮椅、护理床：二类医疗器械经营备案</li>
                <li>广告语禁止治疗、防癌、包治——适老不是保健品</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-border bg-surface p-5">
              <CircleAlert className="size-5 text-accent" />
              <h3 className="mt-2 font-serif text-lg">当前城市特别注意</h3>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-muted">
                {plan.city.risks.map((r) => (
                  <li key={r}>· {r}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-fg p-6 text-bg sm:p-8">
          <p className="text-xs tracking-[0.2em] text-accent-soft">FINAL</p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl">一句话决策</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-bg/85">
            上海店证明了「体验 + 改造服务」能卖出去。没有启动资金时，唯一可落地的是模式 A。
            人在深圳、能进社区：留在深圳上门，客单养活你。人脉只在老家、深圳进不了小区：回老家做上门或驿站合作。
            两边都别先租 80㎡ 店。用 10 个真实好评再决定开店城市。
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-fg">
              <Wallet className="size-4" />
              先赚安装费
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-bg/10 px-4 py-2">
              <Home className="size-4" />
              再谈驿站
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-bg/10 px-4 py-2">
              <Building2 className="size-4" />
              最后才租铺
            </span>
          </div>
        </section>

        <p className="pb-10 text-center text-xs leading-5 text-faint">
          费用为 2026 年 9 月市场中位估算，含深圳社区底商约 3–8 元/㎡/天、适老家居国补 15%、失能服务消费券等公开政策。
          实际以当地房东、人社、民政口径为准。本页用于决策，不构成投资建议。
        </p>
      </main>
    </div>
  );
}

function recommend(capital: number) {
  if (capital < 8000) {
    return {
      title: "现在不要在任何城市开店",
      body: "启动资金不够付押金。唯一路径是模式 A：免费上门评估 + 按单订货安装。城市选择看你人在哪，不看哪个市场更大。",
      bullets: [
        "人身在深圳：就在老龄化社区做上门，客单约 3000 元，5 单就能滚出工具和保险钱。",
        "人脉只在老家：回老家扫楼更快，客单低但转化高，适合先活下来。",
        "不要因为深圳风口而借钱租铺，也不要因为老家便宜就上样板间。",
      ],
    };
  }
  if (capital < 80000) {
    return {
      title: "有一点钱：优先老家轻店或深圳坚持上门",
      body: "8 万以下在深圳租 50㎡ 会很紧（押金+装修+2 个月空窗）。同样的钱在二线或地级市可以撑起体验点。",
      bullets: [
        "深圳：继续上门，把钱当周转货和兼职师傅备用金。",
        "二线省会 / 地级市：可试 30–40㎡ 驿站合作或次新社区底商。",
        "县城：仍然不要装修店，把钱花在样品和电动车上。",
      ],
    };
  }
  return {
    title: "资金过 8 万：才进入选城市开店",
    body: "这时才比较深圳体验点 vs 老家体验点。标准店只建议在已经跑通订单、并有街道或物业书面意向后再做。",
    bullets: [
      "深圳体验点：赌客单和政策补贴，月固定成本高，容错低。",
      "老家体验点：赌信任半径，利润绝对额可能低于深圳，但睡得着。",
      "上海那种 1000㎡ 馆是政企项目，不是你的下一张图纸。",
    ],
  };
}

function CityCard({ id }: { id: CityId }) {
  const c = cities[id];
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <article className="rounded-2xl border border-border bg-surface p-5">
        <MapPin className="size-5 text-primary" />
        <h3 className="mt-2 font-serif text-lg">优势</h3>
        <ul className="mt-2 space-y-2 text-sm text-muted">
          {c.strengths.map((s) => (
            <li key={s}>· {s}</li>
          ))}
        </ul>
      </article>
      <article className="rounded-2xl border border-border bg-surface p-5">
        <Sparkles className="size-5 text-accent" />
        <h3 className="mt-2 font-serif text-lg">2026 政策抓手</h3>
        <ul className="mt-2 space-y-2 text-sm text-muted">
          {c.policy.map((s) => (
            <li key={s}>· {s}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-4">
      <p className="text-xs tracking-[0.18em] text-primary">{kicker}</p>
      <h2 className="mt-1 font-serif text-2xl sm:text-3xl">{title}</h2>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium tracking-wide text-muted">{label}</p>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 rounded-full px-3 text-sm",
        active ? "bg-primary text-primary-fg" : "bg-bg-deep text-fg hover:bg-border",
      )}
    >
      {children}
    </button>
  );
}

function Stat({ label, value, hint, warn }: { label: string; value: string; hint: string; warn?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className={cn("mt-1 font-serif text-2xl", warn && "text-bad")}>{value}</p>
      <p className="mt-1 text-xs leading-5 text-faint">{hint}</p>
    </div>
  );
}

function CmpRow({ label, cells }: { label: string; cells: string[] }) {
  return (
    <tr className="border-t border-line">
      <td className="px-4 py-3 text-muted">{label}</td>
      {cells.map((c, i) => (
        <td key={`${label}-${i}`} className="px-4 py-3 tabular-nums">
          {c}
        </td>
      ))}
    </tr>
  );
}

function Quote({ n, a, b }: { n: string; a: number; b: number }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <p className="text-xs text-muted">{n}</p>
      <p className="mt-2 text-xs text-faint">产品销售</p>
      <p className="font-serif text-xl">{yuan(a)}</p>
      <p className="mt-2 text-xs text-faint">改造服务意向</p>
      <p className="font-serif text-xl text-accent">{yuan(b)}</p>
    </div>
  );
}

function CostTable({ rows }: { rows: { name: string; note: string; amount: number }[] }) {
  const total = rows.reduce((s, r) => s + r.amount, 0);
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-bg-deep text-muted">
          <tr>
            <th className="px-4 py-2 font-medium">科目</th>
            <th className="px-4 py-2 font-medium">说明</th>
            <th className="px-4 py-2 font-medium">金额</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-line">
              <td className="px-4 py-2">{r.name}</td>
              <td className="px-4 py-2 text-muted">{r.note}</td>
              <td className="px-4 py-2 tabular-nums">{r.amount ? yuanExact(r.amount) : "—"}</td>
            </tr>
          ))}
          <tr className="border-t border-border bg-bg-deep font-medium">
            <td className="px-4 py-2">合计</td>
            <td className="px-4 py-2" />
            <td className="px-4 py-2 tabular-nums">{yuanExact(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-3">
      <p className="text-xs text-muted">{label}</p>
      <p className="font-serif text-lg">{value}</p>
    </div>
  );
}
