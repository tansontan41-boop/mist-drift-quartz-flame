export type CityId = "sz" | "t2" | "t3" | "county";
export type ModelId = "zero" | "lite" | "store";

export type CostLine = {
  name: string;
  note: string;
  amount: number;
};

export const cities: Record<
  CityId,
  {
    id: CityId;
    name: string;
    short: string;
    tag: string;
    sample: string;
    aging: string;
    rentDay: number;
    staff: number;
    social: number;
    installerDay: number;
    ticket: number;
    convert: number;
    ordersM1: number;
    ordersM6: number;
    traffic: number;
    utility50: number;
    property: number;
    decorateLite: number;
    decorateStore: number;
    depositMonths: number;
    insurance: number;
    policy: string[];
    risks: string[];
    strengths: string[];
  }
> = {
  sz: {
    id: "sz",
    name: "深圳",
    short: "深圳",
    tag: "一线 · 客单高 · 租金贵",
    sample: "龙岗 / 宝安 / 罗湖成熟社区，不对标南山核心商圈",
    aging: "常住老龄约 7%–8%，2029 年将过 10%。绝对人数约 140 万+，子女支付力全国前列。",
    rentDay: 5.2,
    staff: 6500,
    social: 2100,
    installerDay: 520,
    ticket: 3200,
    convert: 0.28,
    ordersM1: 5,
    ordersM6: 14,
    traffic: 900,
    utility50: 780,
    property: 8,
    decorateLite: 850,
    decorateStore: 1600,
    depositMonths: 2,
    insurance: 1800,
    policy: [
      "失能老人养老服务消费券：居家服务 50% 抵扣，每月最高 800 元（含非深户籍，服务地址在深圳即可）",
      "2026 智能家居（含适老化家居）购新：15%，单件最高 1500 元（智能床、电动轮椅、外骨骼等）",
      "民生实事持续推进居家适老化改造与 15 分钟养老服务圈",
      "罗湖等区在建银发科技孵化与社区展销点，可对接街道资源",
    ],
    risks: [
      "获客贵，小区物业进场费/禁止摆摊常见",
      "人力与社保是老家的 1.6–2 倍",
      "老人绝对数量够，但比例低，需精准选老龄化社区（如福田益田老龄化已超 21%）",
      "二类医疗器械备案、安装安全责任要求更高",
    ],
    strengths: [
      "客单价约为县城 2–3 倍，子女愿为父母付钱",
      "产品国补可直接降低成交阻力",
      "供应链近（广东辅具/智能硬件产地）",
      "验证成功后更容易做出可复制的标准化服务",
    ],
  },
  t2: {
    id: "t2",
    name: "老家 · 二线省会",
    short: "二线省会",
    tag: "样本：长沙 / 合肥 / 郑州 / 济南",
    sample: "老城区 + 成熟家属院，避开新开发空城",
    aging: "户籍老龄化普遍 15%–20%，退休金与子女就近照顾并存。",
    rentDay: 2.2,
    staff: 4500,
    social: 1300,
    installerDay: 320,
    ticket: 2100,
    convert: 0.34,
    ordersM1: 7,
    ordersM6: 16,
    traffic: 500,
    utility50: 520,
    property: 3.5,
    decorateLite: 620,
    decorateStore: 1100,
    depositMonths: 2,
    insurance: 1200,
    policy: [
      "居家适老化改造：特殊困难老人政府项目户均约 2000–6000 元",
      "消费品以旧换新/适老家居补贴力度弱于深圳，但街道养老驿站场地更容易谈",
      "可申请创业担保贷款、就业困难人员社保补贴（各地口径不同）",
    ],
    risks: [
      "客单低于深圳，不能靠卖货，必须靠安装服务",
      "政府改造项目账期长、关系门槛高，前 6 个月不要指望中标",
      "中端产品供给少，容易做成低价五金店",
    ],
    strengths: [
      "租金与人力压力明显低于深圳",
      "熟人介绍转化高",
      "可把深圳/广东货源做地域差",
      "适合开 40–60㎡ 社区体验点",
    ],
  },
  t3: {
    id: "t3",
    name: "老家 · 地级市",
    short: "地级市",
    tag: "样本：地级市主城区老小区",
    sample: "市政府/三甲医院周边老社区，或大型国企家属区",
    aging: "老龄化快于一线，口碑半径约 3–5 公里即可吃饱。",
    rentDay: 1.2,
    staff: 3800,
    social: 950,
    installerDay: 260,
    ticket: 1500,
    convert: 0.4,
    ordersM1: 8,
    ordersM6: 18,
    traffic: 350,
    utility50: 380,
    property: 2,
    decorateLite: 480,
    decorateStore: 850,
    depositMonths: 1,
    insurance: 900,
    policy: [
      "困难老人适老化改造多为民政招标，户均 1500–4000 元",
      "社区日间照料中心、农村幸福院有辅具采购需求",
      "县城以上通常能办个体户 + 二类医疗器械备案",
    ],
    risks: [
      "市场天花板明显，做到月净利润 2–3 万后要靠乡镇复制",
      "支付能力两极：体制内家庭能买，普通家庭只买最便宜扶手",
      "师傅安装质量参差，出事故会毁口碑",
    ],
    strengths: [
      "固定成本极低，上门模式 1 个月可回本",
      "物业/居委会更好说话，场地几乎免费",
      "竞争者少，容易成为「县里就这一家专业的」",
    ],
  },
  county: {
    id: "county",
    name: "老家 · 县城",
    short: "县城",
    tag: "样本：人口 30–80 万县域",
    sample: "老城关镇临街或乡镇卫生院合作点",
    aging: "留守老人比例高，刚需强，现金支付弱，信任靠宗族/邻居。",
    rentDay: 0.55,
    staff: 3000,
    social: 700,
    installerDay: 200,
    ticket: 980,
    convert: 0.48,
    ordersM1: 10,
    ordersM6: 22,
    traffic: 220,
    utility50: 260,
    property: 0,
    decorateLite: 350,
    decorateStore: 600,
    depositMonths: 1,
    insurance: 700,
    policy: [
      "农村困难老人家庭改造、厕所革命、无障碍改造有县域打包项目",
      "乡镇卫生院/村医是最好的转介渠道",
      "创业补贴、扶贫车间类政策因地而异，需问人社局",
    ],
    risks: [
      "客单太低，一单毛利可能只有 200–400 元",
      "不会上网的老人多，必须地面扫楼",
      "冬季农闲、春节回流会让订单暴涨，平时要靠政府单",
      "不适合重装修体验店",
    ],
    strengths: [
      "启动资金可以压到 3000 元以内",
      "你若是本地人，信任成本接近于零",
      "可做「产品差价 + 安装 + 代办补贴材料」三笔钱",
    ],
  },
};

export const models: Record<
  ModelId,
  {
    id: ModelId;
    name: string;
    blurb: string;
    area: number;
    staffCount: number;
    inventory: number;
    sample: number;
    fit: string;
    notFor: string;
  }
> = {
  zero: {
    id: "zero",
    name: "模式 A · 零资金上门",
    blurb: "不租店。免费评估 → 下单订货 → 上门安装。对标上海店里「改造意向远大于货架销售」的那一块。",
    area: 0,
    staffCount: 0,
    inventory: 0,
    sample: 800,
    fit: "现在没有启动资金、或要先验证自己能不能成交",
    notFor: "想靠门面等客、想立刻做品牌店的人",
  },
  lite: {
    id: "lite",
    name: "模式 B · 社区体验点",
    blurb: "30–50㎡ 底商或驿站合作点。样品展示 + 政策讲解 + 预约安装，货走一件代发。",
    area: 48,
    staffCount: 1,
    inventory: 12000,
    sample: 8000,
    fit: "有 6–12 万、能盯店、已有 10 单以上成交经验",
    notFor: "还没成交过一单就租铺的人",
  },
  store: {
    id: "store",
    name: "模式 C · 标准体验店",
    blurb: "80–100㎡，含卫生间/厨房微缩样板间。缩小版上海银发商店，不做 1000㎡ 大馆。",
    area: 90,
    staffCount: 2,
    inventory: 35000,
    sample: 22000,
    fit: "有 18–35 万、或已有街道/物业合作承诺",
    notFor: "零资金、以及县城客单撑不起样板间折旧的情况",
  },
};

export const shanghaiBenchmark = {
  opened: "2025-12-23",
  place: "普陀区大渡河路普熙金融广场",
  week1: { product: 150000, serviceIntent: 300000 },
  week2: { product: 300000, serviceIntent: 550000 },
  month1: { product: 505000, serviceIntent: 1490000 },
  q1: { sales: 1688000, serviceIntent: 2390000 },
  insight:
    "上海店开业首月，改造服务意向约为产品销售的 3 倍。对普通人的启示：不要学它的 1000㎡ 和政府馆，要学它的结构——体验获客，服务收钱。",
};

export const sku = [
  { name: "卫生间一字扶手 38/58cm", cost: 58, price: 168, install: 80, hot: true },
  { name: "马桶 U 型上翻扶手", cost: 128, price: 328, install: 120, hot: true },
  { name: "L 型淋浴扶手", cost: 95, price: 258, install: 100, hot: true },
  { name: "免打孔马桶扶手", cost: 86, price: 238, install: 40, hot: false },
  { name: "防滑地垫（卫生间套）", cost: 42, price: 99, install: 0, hot: true },
  { name: "浴室防滑处理（每㎡材料）", cost: 38, price: 120, install: 40, hot: true },
  { name: "洗澡椅 / 淋浴凳", cost: 110, price: 268, install: 0, hot: true },
  { name: "马桶增高器", cost: 75, price: 198, install: 20, hot: false },
  { name: "床边护栏", cost: 168, price: 398, install: 60, hot: true },
  { name: "人体感应夜灯 2 只", cost: 28, price: 69, install: 20, hot: true },
  { name: "紧急呼叫器 / 跌倒提醒", cost: 160, price: 399, install: 80, hot: false },
  { name: "门槛斜坡垫", cost: 55, price: 139, install: 30, hot: true },
  { name: "助行车 / 购物座椅车", cost: 220, price: 499, install: 0, hot: false },
  { name: "血压计（需器械备案）", cost: 95, price: 219, install: 0, hot: false },
  { name: "智能马桶盖（国补友好）", cost: 680, price: 1299, install: 150, hot: false },
];

export const bathroomPack = {
  name: "卫生间安全基础包（最高频）",
  items: "一字扶手 + U 型马桶扶手 + 浴椅 + 防滑垫 + 夜灯",
  cost: 58 + 128 + 110 + 42 + 28,
  price: 168 + 328 + 268 + 99 + 69,
  install: 80 + 120 + 0 + 0 + 20,
};

export const timelineZero = [
  { week: "第 1 周", title: "搞懂本地补贴与合规", items: ["查「城市名+居家适老化改造补贴」", "办个体户（免费或几十元）", "买 50 万责任险", "列 20 家社区/驿站名单"] },
  { week: "第 2 周", title: "样品与话术", items: ["进 6 件高频样品", "写一页报价单（大字号）", "练 3 分钟政策讲解", "拍摄安装前后对比（亲戚家先做）"] },
  { week: "第 3–4 周", title: "扫楼成交", items: ["每天 8 户免费评估", "转化 4–8 单即达标", "加子女微信发施工照片", "不达标就改话术，不要租店"] },
  { week: "第 5–8 周", title: "稳定现金流", items: ["固定 2 个社区深耕", "找 1 名兼职安装师傅", "对接 1 家五金/辅具供应商账期", "月单过 12 再考虑体验点"] },
  { week: "第 3–6 月", title: "决定开店城市", items: ["用真实客单、转化率、差评回头看深圳 vs 老家", "有街道合作再租铺", "没有 10 个好评不做模式 B"] },
];
