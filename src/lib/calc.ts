import { bathroomPack, cities, type CityId, type CostLine, models, type ModelId } from "./plan-data";

export type Plan = {
  city: (typeof cities)[CityId];
  model: (typeof models)[ModelId];
  area: number;
  rentMonth: number;
  propertyMonth: number;
  deposit: number;
  decorate: number;
  capex: CostLine[];
  capexTotal: number;
  opex: CostLine[];
  opexTotal: number;
  staffMonth: number;
  ticket: number;
  ordersM1: number;
  ordersM6: number;
  cogsPerOrder: number;
  laborPerOrder: number;
  grossPerOrder: number;
  months: MonthRow[];
  breakevenMonth: number | null;
  yearRevenue: number;
  yearProfit: number;
  cashMin: number;
  runwayHint: string;
  verdictScore: number;
};

export type MonthRow = {
  m: number;
  orders: number;
  revenue: number;
  cogs: number;
  opex: number;
  profit: number;
  cash: number;
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function buildPlan(cityId: CityId, modelId: ModelId, extraCapital = 0): Plan {
  const city = cities[cityId];
  const model = models[modelId];
  const area = model.area;
  const rentMonth = Math.round(city.rentDay * Math.max(area, 0) * 30);
  const propertyMonth = Math.round(city.property * area);
  const deposit = rentMonth * city.depositMonths;

  const decorateRate = modelId === "store" ? city.decorateStore : city.decorateLite;
  const decorate = modelId === "zero" ? 0 : Math.round(decorateRate * area);

  const license: CostLine[] = [
    { name: "个体工商户登记 + 印章 + 银行卡", note: "线上办照大多 0 元，印章 80–150", amount: 180 },
    { name: "二类医疗器械经营备案（可选）", note: "卖血压计/轮椅才需要；只做扶手可暂缓", amount: modelId === "zero" ? 0 : 800 },
  ];

  const capex: CostLine[] = [...license];

  if (modelId === "zero") {
    capex.push(
      { name: "安装工具包", note: "电钻、冲击钻、水平仪、卷尺、梯子、膨胀管、防护", amount: 860 },
      { name: "高频样品 6 件", note: "扶手×3、浴椅、防滑垫、夜灯，可后续卖出", amount: model.sample },
      { name: "公众责任险 + 意外险（首年）", note: "建议保额 ≥50 万，安装行业刚需", amount: city.insurance },
      { name: "工服 / 大字报价单 / 名片 / 二维码立牌", note: "打印店当天能做", amount: 220 },
      { name: "交通备用（无车则租/买电瓶车）", note: "深圳建议有电瓶车；老家可公交起步", amount: cityId === "sz" ? 2800 : 800 },
    );
  } else {
    capex.push(
      { name: `房租押金（${city.depositMonths} 个月）`, note: "2026 年社区底商空置高，可谈 1 个月免租", amount: deposit },
      { name: "首月租金（计入启动，不算进月度盈亏重复）", note: "进场当月就要付", amount: rentMonth },
      { name: "装修（体验陈列，非精装餐饮级）", note: modelId === "lite" ? "乳胶漆+防滑地胶+下沉货架+休息椅" : "含微缩卫浴/厨房样板间、无障碍通道", amount: decorate },
      { name: "货架 / 灯箱 / 休息区家具", note: "二手办公家具可再砍 30%", amount: modelId === "lite" ? 4200 : 12800 },
      { name: "样品与首批周转货", note: "一件代发为主，店内只放可试用款", amount: model.inventory },
      { name: "收银 / 扫码枪 / 监控 / 宽带开通", note: "用微信收款即可，监控防纠纷", amount: 1600 },
      { name: "公众责任险 + 财产险（首年）", note: "含店内滑倒与安装责任", amount: city.insurance + 600 },
      { name: "开业物料与社区地推", note: "海报、易拉宝、户口袋、 pen", amount: 1800 },
      { name: "安装工具 + 兼职师傅备用金", note: "自装或按单找师傅", amount: 2500 },
    );
  }

  const capexTotal = capex.reduce((s, x) => s + x.amount, 0);

  const staffMonth =
    model.staffCount === 0 ? 0 : model.staffCount * (city.staff + city.social);

  const opex: CostLine[] =
    modelId === "zero"
      ? [
          { name: "交通油费/公交/停车", note: "按日均 4 户评估测算", amount: city.traffic },
          { name: "通讯与短视频流量", note: "不要买粉", amount: 120 },
          { name: "耗材（膨胀管、玻璃胶、美缝）", note: "随单增长", amount: 180 },
          { name: "保险月摊", note: "年险 / 12", amount: Math.round(city.insurance / 12) },
          { name: "打印与小区物料补货", note: "物业门口常被撕，要补", amount: 150 },
        ]
      : [
          { name: "租金", note: `${area}㎡ × ${city.rentDay} 元/㎡/天 × 30`, amount: rentMonth },
          { name: "物业费", note: `${city.property} 元/㎡/月`, amount: propertyMonth },
          { name: "水电宽带", note: "体验店空调是大头", amount: Math.round(city.utility50 * (area / 50)) },
          { name: "人工含社保", note: `${model.staffCount} 人`, amount: staffMonth },
          { name: "保险月摊", note: "", amount: Math.round((city.insurance + 600) / 12) },
          { name: "地推 / 社群 / 美团本地", note: "深圳要留足获客费", amount: cityId === "sz" ? 1800 : 600 },
          { name: "耗材与杂费", note: "", amount: 350 },
        ];

  const opexTotal = opex.reduce((s, x) => s + x.amount, 0);

  const packCost = bathroomPack.cost;
  const packPrice = bathroomPack.price + bathroomPack.install;
  const mixTicket = city.ticket;
  const cogsRatio = packCost / packPrice;
  const cogsPerOrder = Math.round(mixTicket * cogsRatio);
  const laborPerOrder = Math.round(city.installerDay * (modelId === "zero" ? 0.45 : 0.55));
  const grossPerOrder = mixTicket - cogsPerOrder - laborPerOrder;

  const startCash = extraCapital + Math.max(0, extraCapital === 0 ? 0 : 0);
  let cash = extraCapital - capexTotal;
  if (extraCapital === 0) cash = -capexTotal;

  const months: MonthRow[] = [];
  for (let m = 1; m <= 12; m++) {
    const t = Math.min(1, (m - 1) / 5);
    const orders = Math.round(lerp(city.ordersM1, city.ordersM6, t) * (modelId === "zero" ? 1 : modelId === "lite" ? 1.25 : 1.55));
    const revenue = orders * mixTicket;
    const cogs = orders * (cogsPerOrder + laborPerOrder);
    const opexM = opexTotal;
    const profit = revenue - cogs - opexM;
    cash += profit;
    months.push({ m, orders, revenue, cogs, opex: opexM, profit, cash });
  }

  const breakevenMonth = months.find((x) => x.cash >= 0)?.m ?? null;
  const yearRevenue = months.reduce((s, x) => s + x.revenue, 0);
  const yearProfit = months.reduce((s, x) => s + x.profit, 0);
  const cashMin = Math.min(...months.map((x) => x.cash), extraCapital - capexTotal);

  const needed = Math.max(0, capexTotal + opexTotal * 2 - extraCapital);
  const runwayHint =
    extraCapital >= capexTotal + opexTotal
      ? "现金覆盖启动 + 1 个月运营，可按此模式开工。"
      : extraCapital >= capexTotal
        ? "启动装得上，但没有运营缓冲，前 60 天必须出单。"
        : `还差约 ${Math.round(needed / 100) * 100} 元才能安全启动该模式，请先选更轻的模式或补齐资金。`;

  const score =
    (city.ticket / 40) * 0.22 +
    (1 / (city.rentDay + 0.4)) * 18 * (modelId === "zero" ? 1.4 : 1) +
    city.convert * 40 +
    (modelId === "zero" ? 18 : modelId === "lite" ? 12 : 6) +
    (cityId === "county" && modelId === "store" ? -15 : 0) +
    (cityId === "sz" && modelId === "store" ? -8 : 0) +
    (cityId === "sz" && modelId === "zero" ? 6 : 0);

  return {
    city,
    model,
    area,
    rentMonth,
    propertyMonth,
    deposit,
    decorate,
    capex,
    capexTotal,
    opex,
    opexTotal,
    staffMonth,
    ticket: mixTicket,
    ordersM1: months[0].orders,
    ordersM6: months[5].orders,
    cogsPerOrder,
    laborPerOrder,
    grossPerOrder,
    months,
    breakevenMonth,
    yearRevenue,
    yearProfit,
    cashMin,
    runwayHint,
    verdictScore: Math.round(score),
  };
}

export function compareCities(modelId: ModelId, capital: number) {
  return (Object.keys(cities) as CityId[]).map((id) => buildPlan(id, modelId, capital));
}
