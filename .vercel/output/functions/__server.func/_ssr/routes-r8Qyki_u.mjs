import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Printer, c as CircleAlert, i as Shield, l as Check, o as MapPin, r as Sparkles, s as House, t as Wallet, u as Building2 } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { a as CartesianGrid, i as Area, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-r8Qyki_u.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var cities = {
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
		convert: .28,
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
			"罗湖等区在建银发科技孵化与社区展销点，可对接街道资源"
		],
		risks: [
			"获客贵，小区物业进场费/禁止摆摊常见",
			"人力与社保是老家的 1.6–2 倍",
			"老人绝对数量够，但比例低，需精准选老龄化社区（如福田益田老龄化已超 21%）",
			"二类医疗器械备案、安装安全责任要求更高"
		],
		strengths: [
			"客单价约为县城 2–3 倍，子女愿为父母付钱",
			"产品国补可直接降低成交阻力",
			"供应链近（广东辅具/智能硬件产地）",
			"验证成功后更容易做出可复制的标准化服务"
		]
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
		convert: .34,
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
			"可申请创业担保贷款、就业困难人员社保补贴（各地口径不同）"
		],
		risks: [
			"客单低于深圳，不能靠卖货，必须靠安装服务",
			"政府改造项目账期长、关系门槛高，前 6 个月不要指望中标",
			"中端产品供给少，容易做成低价五金店"
		],
		strengths: [
			"租金与人力压力明显低于深圳",
			"熟人介绍转化高",
			"可把深圳/广东货源做地域差",
			"适合开 40–60㎡ 社区体验点"
		]
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
		convert: .4,
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
			"县城以上通常能办个体户 + 二类医疗器械备案"
		],
		risks: [
			"市场天花板明显，做到月净利润 2–3 万后要靠乡镇复制",
			"支付能力两极：体制内家庭能买，普通家庭只买最便宜扶手",
			"师傅安装质量参差，出事故会毁口碑"
		],
		strengths: [
			"固定成本极低，上门模式 1 个月可回本",
			"物业/居委会更好说话，场地几乎免费",
			"竞争者少，容易成为「县里就这一家专业的」"
		]
	},
	county: {
		id: "county",
		name: "老家 · 县城",
		short: "县城",
		tag: "样本：人口 30–80 万县域",
		sample: "老城关镇临街或乡镇卫生院合作点",
		aging: "留守老人比例高，刚需强，现金支付弱，信任靠宗族/邻居。",
		rentDay: .55,
		staff: 3e3,
		social: 700,
		installerDay: 200,
		ticket: 980,
		convert: .48,
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
			"创业补贴、扶贫车间类政策因地而异，需问人社局"
		],
		risks: [
			"客单太低，一单毛利可能只有 200–400 元",
			"不会上网的老人多，必须地面扫楼",
			"冬季农闲、春节回流会让订单暴涨，平时要靠政府单",
			"不适合重装修体验店"
		],
		strengths: [
			"启动资金可以压到 3000 元以内",
			"你若是本地人，信任成本接近于零",
			"可做「产品差价 + 安装 + 代办补贴材料」三笔钱"
		]
	}
};
var models = {
	zero: {
		id: "zero",
		name: "模式 A · 零资金上门",
		blurb: "不租店。免费评估 → 下单订货 → 上门安装。对标上海店里「改造意向远大于货架销售」的那一块。",
		area: 0,
		staffCount: 0,
		inventory: 0,
		sample: 800,
		fit: "现在没有启动资金、或要先验证自己能不能成交",
		notFor: "想靠门面等客、想立刻做品牌店的人"
	},
	lite: {
		id: "lite",
		name: "模式 B · 社区体验点",
		blurb: "30–50㎡ 底商或驿站合作点。样品展示 + 政策讲解 + 预约安装，货走一件代发。",
		area: 48,
		staffCount: 1,
		inventory: 12e3,
		sample: 8e3,
		fit: "有 6–12 万、能盯店、已有 10 单以上成交经验",
		notFor: "还没成交过一单就租铺的人"
	},
	store: {
		id: "store",
		name: "模式 C · 标准体验店",
		blurb: "80–100㎡，含卫生间/厨房微缩样板间。缩小版上海银发商店，不做 1000㎡ 大馆。",
		area: 90,
		staffCount: 2,
		inventory: 35e3,
		sample: 22e3,
		fit: "有 18–35 万、或已有街道/物业合作承诺",
		notFor: "零资金、以及县城客单撑不起样板间折旧的情况"
	}
};
var shanghaiBenchmark = {
	opened: "2025-12-23",
	place: "普陀区大渡河路普熙金融广场",
	week1: {
		product: 15e4,
		serviceIntent: 3e5
	},
	week2: {
		product: 3e5,
		serviceIntent: 55e4
	},
	month1: {
		product: 505e3,
		serviceIntent: 149e4
	},
	q1: {
		sales: 1688e3,
		serviceIntent: 239e4
	},
	insight: "上海店开业首月，改造服务意向约为产品销售的 3 倍。对普通人的启示：不要学它的 1000㎡ 和政府馆，要学它的结构——体验获客，服务收钱。"
};
var sku = [
	{
		name: "卫生间一字扶手 38/58cm",
		cost: 58,
		price: 168,
		install: 80,
		hot: true
	},
	{
		name: "马桶 U 型上翻扶手",
		cost: 128,
		price: 328,
		install: 120,
		hot: true
	},
	{
		name: "L 型淋浴扶手",
		cost: 95,
		price: 258,
		install: 100,
		hot: true
	},
	{
		name: "免打孔马桶扶手",
		cost: 86,
		price: 238,
		install: 40,
		hot: false
	},
	{
		name: "防滑地垫（卫生间套）",
		cost: 42,
		price: 99,
		install: 0,
		hot: true
	},
	{
		name: "浴室防滑处理（每㎡材料）",
		cost: 38,
		price: 120,
		install: 40,
		hot: true
	},
	{
		name: "洗澡椅 / 淋浴凳",
		cost: 110,
		price: 268,
		install: 0,
		hot: true
	},
	{
		name: "马桶增高器",
		cost: 75,
		price: 198,
		install: 20,
		hot: false
	},
	{
		name: "床边护栏",
		cost: 168,
		price: 398,
		install: 60,
		hot: true
	},
	{
		name: "人体感应夜灯 2 只",
		cost: 28,
		price: 69,
		install: 20,
		hot: true
	},
	{
		name: "紧急呼叫器 / 跌倒提醒",
		cost: 160,
		price: 399,
		install: 80,
		hot: false
	},
	{
		name: "门槛斜坡垫",
		cost: 55,
		price: 139,
		install: 30,
		hot: true
	},
	{
		name: "助行车 / 购物座椅车",
		cost: 220,
		price: 499,
		install: 0,
		hot: false
	},
	{
		name: "血压计（需器械备案）",
		cost: 95,
		price: 219,
		install: 0,
		hot: false
	},
	{
		name: "智能马桶盖（国补友好）",
		cost: 680,
		price: 1299,
		install: 150,
		hot: false
	}
];
var bathroomPack = {
	name: "卫生间安全基础包（最高频）",
	items: "一字扶手 + U 型马桶扶手 + 浴椅 + 防滑垫 + 夜灯",
	cost: 366,
	price: 932,
	install: 220
};
var timelineZero = [
	{
		week: "第 1 周",
		title: "搞懂本地补贴与合规",
		items: [
			"查「城市名+居家适老化改造补贴」",
			"办个体户（免费或几十元）",
			"买 50 万责任险",
			"列 20 家社区/驿站名单"
		]
	},
	{
		week: "第 2 周",
		title: "样品与话术",
		items: [
			"进 6 件高频样品",
			"写一页报价单（大字号）",
			"练 3 分钟政策讲解",
			"拍摄安装前后对比（亲戚家先做）"
		]
	},
	{
		week: "第 3–4 周",
		title: "扫楼成交",
		items: [
			"每天 8 户免费评估",
			"转化 4–8 单即达标",
			"加子女微信发施工照片",
			"不达标就改话术，不要租店"
		]
	},
	{
		week: "第 5–8 周",
		title: "稳定现金流",
		items: [
			"固定 2 个社区深耕",
			"找 1 名兼职安装师傅",
			"对接 1 家五金/辅具供应商账期",
			"月单过 12 再考虑体验点"
		]
	},
	{
		week: "第 3–6 月",
		title: "决定开店城市",
		items: [
			"用真实客单、转化率、差评回头看深圳 vs 老家",
			"有街道合作再租铺",
			"没有 10 个好评不做模式 B"
		]
	}
];
function lerp(a, b, t) {
	return a + (b - a) * t;
}
function buildPlan(cityId, modelId, extraCapital = 0) {
	const city = cities[cityId];
	const model = models[modelId];
	const area = model.area;
	const rentMonth = Math.round(city.rentDay * Math.max(area, 0) * 30);
	const propertyMonth = Math.round(city.property * area);
	const deposit = rentMonth * city.depositMonths;
	const decorateRate = modelId === "store" ? city.decorateStore : city.decorateLite;
	const decorate = modelId === "zero" ? 0 : Math.round(decorateRate * area);
	const capex = [...[{
		name: "个体工商户登记 + 印章 + 银行卡",
		note: "线上办照大多 0 元，印章 80–150",
		amount: 180
	}, {
		name: "二类医疗器械经营备案（可选）",
		note: "卖血压计/轮椅才需要；只做扶手可暂缓",
		amount: modelId === "zero" ? 0 : 800
	}]];
	if (modelId === "zero") capex.push({
		name: "安装工具包",
		note: "电钻、冲击钻、水平仪、卷尺、梯子、膨胀管、防护",
		amount: 860
	}, {
		name: "高频样品 6 件",
		note: "扶手×3、浴椅、防滑垫、夜灯，可后续卖出",
		amount: model.sample
	}, {
		name: "公众责任险 + 意外险（首年）",
		note: "建议保额 ≥50 万，安装行业刚需",
		amount: city.insurance
	}, {
		name: "工服 / 大字报价单 / 名片 / 二维码立牌",
		note: "打印店当天能做",
		amount: 220
	}, {
		name: "交通备用（无车则租/买电瓶车）",
		note: "深圳建议有电瓶车；老家可公交起步",
		amount: cityId === "sz" ? 2800 : 800
	});
	else capex.push({
		name: `房租押金（${city.depositMonths} 个月）`,
		note: "2026 年社区底商空置高，可谈 1 个月免租",
		amount: deposit
	}, {
		name: "首月租金（计入启动，不算进月度盈亏重复）",
		note: "进场当月就要付",
		amount: rentMonth
	}, {
		name: "装修（体验陈列，非精装餐饮级）",
		note: modelId === "lite" ? "乳胶漆+防滑地胶+下沉货架+休息椅" : "含微缩卫浴/厨房样板间、无障碍通道",
		amount: decorate
	}, {
		name: "货架 / 灯箱 / 休息区家具",
		note: "二手办公家具可再砍 30%",
		amount: modelId === "lite" ? 4200 : 12800
	}, {
		name: "样品与首批周转货",
		note: "一件代发为主，店内只放可试用款",
		amount: model.inventory
	}, {
		name: "收银 / 扫码枪 / 监控 / 宽带开通",
		note: "用微信收款即可，监控防纠纷",
		amount: 1600
	}, {
		name: "公众责任险 + 财产险（首年）",
		note: "含店内滑倒与安装责任",
		amount: city.insurance + 600
	}, {
		name: "开业物料与社区地推",
		note: "海报、易拉宝、户口袋、 pen",
		amount: 1800
	}, {
		name: "安装工具 + 兼职师傅备用金",
		note: "自装或按单找师傅",
		amount: 2500
	});
	const capexTotal = capex.reduce((s, x) => s + x.amount, 0);
	const staffMonth = model.staffCount === 0 ? 0 : model.staffCount * (city.staff + city.social);
	const opex = modelId === "zero" ? [
		{
			name: "交通油费/公交/停车",
			note: "按日均 4 户评估测算",
			amount: city.traffic
		},
		{
			name: "通讯与短视频流量",
			note: "不要买粉",
			amount: 120
		},
		{
			name: "耗材（膨胀管、玻璃胶、美缝）",
			note: "随单增长",
			amount: 180
		},
		{
			name: "保险月摊",
			note: "年险 / 12",
			amount: Math.round(city.insurance / 12)
		},
		{
			name: "打印与小区物料补货",
			note: "物业门口常被撕，要补",
			amount: 150
		}
	] : [
		{
			name: "租金",
			note: `${area}㎡ × ${city.rentDay} 元/㎡/天 × 30`,
			amount: rentMonth
		},
		{
			name: "物业费",
			note: `${city.property} 元/㎡/月`,
			amount: propertyMonth
		},
		{
			name: "水电宽带",
			note: "体验店空调是大头",
			amount: Math.round(city.utility50 * (area / 50))
		},
		{
			name: "人工含社保",
			note: `${model.staffCount} 人`,
			amount: staffMonth
		},
		{
			name: "保险月摊",
			note: "",
			amount: Math.round((city.insurance + 600) / 12)
		},
		{
			name: "地推 / 社群 / 美团本地",
			note: "深圳要留足获客费",
			amount: cityId === "sz" ? 1800 : 600
		},
		{
			name: "耗材与杂费",
			note: "",
			amount: 350
		}
	];
	const opexTotal = opex.reduce((s, x) => s + x.amount, 0);
	const packCost = bathroomPack.cost;
	const packPrice = bathroomPack.price + bathroomPack.install;
	const mixTicket = city.ticket;
	const cogsRatio = packCost / packPrice;
	const cogsPerOrder = Math.round(mixTicket * cogsRatio);
	const laborPerOrder = Math.round(city.installerDay * (modelId === "zero" ? .45 : .55));
	const grossPerOrder = mixTicket - cogsPerOrder - laborPerOrder;
	extraCapital + Math.max(0, extraCapital === 0 ? 0 : 0);
	let cash = extraCapital - capexTotal;
	if (extraCapital === 0) cash = -capexTotal;
	const months = [];
	for (let m = 1; m <= 12; m++) {
		const t = Math.min(1, (m - 1) / 5);
		const orders = Math.round(lerp(city.ordersM1, city.ordersM6, t) * (modelId === "zero" ? 1 : modelId === "lite" ? 1.25 : 1.55));
		const revenue = orders * mixTicket;
		const cogs = orders * (cogsPerOrder + laborPerOrder);
		const opexM = opexTotal;
		const profit = revenue - cogs - opexM;
		cash += profit;
		months.push({
			m,
			orders,
			revenue,
			cogs,
			opex: opexM,
			profit,
			cash
		});
	}
	const breakevenMonth = months.find((x) => x.cash >= 0)?.m ?? null;
	const yearRevenue = months.reduce((s, x) => s + x.revenue, 0);
	const yearProfit = months.reduce((s, x) => s + x.profit, 0);
	const cashMin = Math.min(...months.map((x) => x.cash), extraCapital - capexTotal);
	const needed = Math.max(0, capexTotal + opexTotal * 2 - extraCapital);
	const runwayHint = extraCapital >= capexTotal + opexTotal ? "现金覆盖启动 + 1 个月运营，可按此模式开工。" : extraCapital >= capexTotal ? "启动装得上，但没有运营缓冲，前 60 天必须出单。" : `还差约 ${Math.round(needed / 100) * 100} 元才能安全启动该模式，请先选更轻的模式或补齐资金。`;
	const score = city.ticket / 40 * .22 + 1 / (city.rentDay + .4) * 18 * (modelId === "zero" ? 1.4 : 1) + city.convert * 40 + (modelId === "zero" ? 18 : modelId === "lite" ? 12 : 6) + (cityId === "county" && modelId === "store" ? -15 : 0) + (cityId === "sz" && modelId === "store" ? -8 : 0) + (cityId === "sz" && modelId === "zero" ? 6 : 0);
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
		verdictScore: Math.round(score)
	};
}
function compareCities(modelId, capital) {
	return Object.keys(cities).map((id) => buildPlan(id, modelId, capital));
}
var usePlan = create((set) => ({
	city: "sz",
	model: "zero",
	capital: 0,
	setCity: (city) => set({ city }),
	setModel: (model) => set({ model }),
	setCapital: (capital) => set({ capital })
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function yuan(n) {
	const abs = Math.abs(Math.round(n));
	const sign = n < 0 ? "-" : "";
	if (abs >= 1e4) {
		const wan = abs / 1e4;
		return `${sign}¥${wan >= 10 ? wan.toFixed(1).replace(/\.0$/, "") : wan.toFixed(2).replace(/0$/, "").replace(/\.$/, "")}万`;
	}
	return `${sign}¥${abs.toLocaleString("zh-CN")}`;
}
function yuanExact(n) {
	return `¥${Math.round(n).toLocaleString("zh-CN")}`;
}
var cityOrder = [
	"sz",
	"t2",
	"t3",
	"county"
];
var modelOrder = [
	"zero",
	"lite",
	"store"
];
var nav = [
	{
		id: "verdict",
		label: "结论"
	},
	{
		id: "shanghai",
		label: "上海对标"
	},
	{
		id: "city",
		label: "选址"
	},
	{
		id: "capex",
		label: "启动费"
	},
	{
		id: "opex",
		label: "月成本"
	},
	{
		id: "cash",
		label: "12个月"
	},
	{
		id: "sku",
		label: "产品"
	},
	{
		id: "play",
		label: "90天"
	},
	{
		id: "risk",
		label: "合规风险"
	}
];
function PlanApp() {
	const { city, model, capital, setCity, setModel, setCapital } = usePlan();
	const plan = (0, import_react.useMemo)(() => buildPlan(city, model, capital), [
		city,
		model,
		capital
	]);
	const peers = (0, import_react.useMemo)(() => compareCities(model, capital), [model, capital]);
	const [tab, setTab] = (0, import_react.useState)("sz");
	const rec = recommend(capital);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "relative border-b border-border bg-surface/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.22em] text-primary",
							children: "SILVER HOME PLAN · 2026"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-serif text-3xl font-bold sm:text-4xl",
							children: "银居计划"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
							children: "把上海银发商店拆成普通人能做的三种模式，并按深圳 / 二线省会 / 地级市 / 县城逐项测算费用。 老家城市未指定，用三类样本代替。数字按 2026 年社区底商行情取中位，不是报价单。"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => window.print(),
						className: "no-print inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-bg px-4 text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "打印 / 导出 PDF"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2 sm:px-6",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${n.id}`,
						className: "shrink-0 rounded-full px-3 py-2 text-sm text-muted hover:bg-bg-deep hover:text-fg",
						children: n.label
					}, n.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative mx-auto max-w-6xl space-y-10 px-4 py-8 sm:px-6 sm:py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-border bg-surface p-4 shadow-sm sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 lg:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "落地城市",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2",
										children: cityOrder.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
											active: city === id,
											onClick: () => setCity(id),
											children: cities[id].short
										}, id))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "经营模式",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 gap-2",
										children: modelOrder.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
											active: model === id,
											onClick: () => setModel(id),
											children: models[id].name.replace("模式 ", "")
										}, id))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
									label: `可用启动资金  ${yuanExact(capital)}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 0,
										max: 3e5,
										step: 2e3,
										value: capital,
										onChange: (e) => setCapital(Number(e.target.value)),
										className: "mt-3 w-full accent-primary"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex justify-between text-xs text-faint",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "8万" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "18万" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "30万" })
										]
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted",
							children: [
								plan.city.sample,
								" · ",
								plan.model.fit
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "verdict",
						className: "scroll-mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								kicker: "01 先看结论",
								title: "深圳还是回老家？"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 lg:grid-cols-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-2xl border border-primary/20 bg-primary p-5 text-primary-fg lg:col-span-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs tracking-widest opacity-80",
											children: "针对当前资金档位的建议"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-serif text-2xl",
											children: rec.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-7 opacity-90",
											children: rec.body
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-4 space-y-2 text-sm",
											children: rec.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
											}, b))
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-3 lg:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											label: "本方案启动资金",
											value: yuan(plan.capexTotal),
											hint: plan.runwayHint
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											label: "月固定成本",
											value: yuan(plan.opexTotal),
											hint: `盈亏平衡约 ${Math.max(1, Math.ceil(plan.opexTotal / Math.max(plan.grossPerOrder, 1)))} 单 / 月`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											label: "第 12 月累计现金",
											value: yuan(plan.months[11].cash),
											hint: plan.breakevenMonth ? `累计回本约第 ${plan.breakevenMonth} 个月` : "12 个月内未回本",
											warn: !plan.breakevenMonth || plan.months[11].cash < 0
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 overflow-x-auto rounded-2xl border border-border bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[720px] text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-bg-deep text-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 font-medium",
											children: "维度"
										}), cityOrder.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 font-medium",
											children: cities[id].short
										}, id))] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmpRow, {
											label: "启动资金（当前模式）",
											cells: peers.map((p) => yuan(p.capexTotal))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmpRow, {
											label: "月固定成本",
											cells: peers.map((p) => yuan(p.opexTotal))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmpRow, {
											label: "客单价（含安装）",
											cells: peers.map((p) => yuanExact(p.ticket))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmpRow, {
											label: "单均毛利",
											cells: peers.map((p) => yuanExact(p.grossPerOrder))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmpRow, {
											label: "第 6 月单量",
											cells: peers.map((p) => `${p.ordersM6} 单`)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmpRow, {
											label: "年利润（测算）",
											cells: peers.map((p) => yuan(p.yearProfit))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CmpRow, {
											label: "适合指数",
											cells: peers.map((p) => String(p.verdictScore))
										})
									] })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "shanghai",
						className: "scroll-mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								kicker: "02 上海银发商店",
								title: "学结构，不学体量"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 md:grid-cols-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
										n: "首周",
										a: shanghaiBenchmark.week1.product,
										b: shanghaiBenchmark.week1.serviceIntent
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
										n: "两周",
										a: shanghaiBenchmark.week2.product,
										b: shanghaiBenchmark.week2.serviceIntent
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
										n: "首月",
										a: shanghaiBenchmark.month1.product,
										b: shanghaiBenchmark.month1.serviceIntent
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
										n: "一季度意向",
										a: shanghaiBenchmark.q1.sales,
										b: shanghaiBenchmark.q1.serviceIntent
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-3xl text-sm leading-7 text-muted",
								children: shanghaiBenchmark.insight
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-faint",
								children: "数据来源：普陀区政府、上观新闻、证券时报对「上海老博会创新产品体验馆」开业报道（2025.12–2026.03）。服务金额多为意向，不等于已回款。"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "city",
						className: "scroll-mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								kicker: "03 城市画像",
								title: plan.city.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 text-sm text-muted",
								children: plan.city.aging
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: tab === "sz",
									onClick: () => setTab("sz"),
									children: "看深圳"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: tab === "home",
									onClick: () => setTab("home"),
									children: "看当前城市"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CityCard, { id: tab === "sz" ? "sz" : city })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "scroll-mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							kicker: "04 三种模式",
							title: "不要一上来复制 1000㎡ 展馆"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 lg:grid-cols-3",
							children: modelOrder.map((id) => {
								const m = models[id];
								const p = buildPlan(city, id, capital);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setModel(id),
									className: cn("rounded-2xl border p-5 text-left transition", model === id ? "border-primary bg-surface shadow-md" : "border-border bg-surface/70"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-primary",
											children: m.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-6 text-muted",
											children: m.blurb
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 font-serif text-2xl",
											children: yuan(p.capexTotal)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-faint",
											children: ["启动 · 月固定 ", yuan(p.opexTotal)]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 text-xs text-muted",
											children: ["适合：", m.fit]
										})
									]
								}, id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "capex",
						className: "scroll-mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								kicker: "05 启动费用明细",
								title: `一共 ${yuanExact(plan.capexTotal)}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostTable, { rows: plan.capex }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted",
								children: capital >= plan.capexTotal ? `你的资金覆盖启动后还剩 ${yuan(capital - plan.capexTotal)} 作为周转。` : `按当前资金还缺 ${yuan(plan.capexTotal - capital)}。建议改选模式 A，或先用上门赚出缺口。`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "opex",
						className: "scroll-mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								kicker: "06 每月固定支出",
								title: `${yuanExact(plan.opexTotal)} / 月`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CostTable, { rows: plan.opex }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid gap-3 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "单均收入",
										value: yuanExact(plan.ticket)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "单均货本+安装人工",
										value: yuanExact(plan.cogsPerOrder + plan.laborPerOrder)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "单均毛利",
										value: yuanExact(plan.grossPerOrder)
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "cash",
						className: "scroll-mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								kicker: "07 十二个月现金流",
								title: "保守爬坡，不是暴利表"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-4 max-w-3xl text-sm leading-7 text-muted",
								children: "订单从第 1 月爬到第 6 月后持平；未计入政府招标和爆单。启动资金在第 0 月一次性扣除。现金为负表示还要垫钱。"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-64 rounded-2xl border border-border bg-surface p-3 sm:h-80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
										data: plan.months,
										margin: {
											top: 8,
											right: 8,
											left: 0,
											bottom: 0
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
												stroke: "var(--color-line)",
												vertical: false
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
												dataKey: "m",
												tickFormatter: (v) => `${v}月`,
												stroke: "var(--color-faint)",
												fontSize: 12
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
												tickFormatter: (v) => `${Math.round(Number(v) / 1e4)}万`,
												stroke: "var(--color-faint)",
												fontSize: 12,
												width: 40
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
												formatter: (v, n) => {
													const num = typeof v === "number" ? v : Number(v);
													const name = String(n);
													const label = name === "cash" ? "累计现金" : name === "profit" ? "当月利润" : name;
													return [yuanExact(num), label];
												},
												labelFormatter: (l) => `第 ${l} 月`
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
												type: "monotone",
												dataKey: "cash",
												stroke: "var(--color-primary)",
												fill: "var(--color-primary)",
												fillOpacity: .15
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
												type: "monotone",
												dataKey: "profit",
												stroke: "var(--color-accent)",
												fill: "var(--color-accent)",
												fillOpacity: .12
											})
										]
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 overflow-x-auto rounded-2xl border border-border bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[640px] text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-bg-deep text-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
											"月",
											"单量",
											"收入",
											"货本+人工",
											"固定成本",
											"利润",
											"累计现金"
										].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-2 font-medium",
											children: h
										}, h)) })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: plan.months.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-line",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2",
												children: r.m
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2 tabular-nums",
												children: r.orders
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2 tabular-nums",
												children: yuanExact(r.revenue)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2 tabular-nums",
												children: yuanExact(r.cogs)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2 tabular-nums",
												children: yuanExact(r.opex)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: cn("px-3 py-2 tabular-nums", r.profit < 0 ? "text-bad" : "text-good"),
												children: yuanExact(r.profit)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: cn("px-3 py-2 tabular-nums", r.cash < 0 ? "text-bad" : "text-good"),
												children: yuanExact(r.cash)
											})
										]
									}, r.m)) })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "sku",
						className: "scroll-mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								kicker: "08 产品与定价",
								title: "服务毛利大于货架毛利"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 rounded-2xl border border-accent/30 bg-accent-soft p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: bathroomPack.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: bathroomPack.items
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 font-serif text-xl",
										children: [
											"进货 ",
											yuanExact(bathroomPack.cost),
											" · 零售 ",
											yuanExact(bathroomPack.price),
											" · 安装 ",
											yuanExact(bathroomPack.install),
											" · 合计收客 ",
											yuanExact(bathroomPack.price + bathroomPack.install)
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-x-auto rounded-2xl border border-border bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full min-w-[640px] text-left text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
										className: "bg-bg-deep text-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
											"SKU",
											"进货",
											"建议零售",
											"安装费",
											"毛利",
											"热度"
										].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-3 py-2 font-medium",
											children: h
										}, h)) })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: sku.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-t border-line",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2",
												children: s.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2 tabular-nums",
												children: yuanExact(s.cost)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2 tabular-nums",
												children: yuanExact(s.price)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2 tabular-nums",
												children: yuanExact(s.install)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2 tabular-nums text-good",
												children: yuanExact(s.price + s.install - s.cost)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: "px-3 py-2",
												children: s.hot ? "高频" : "选配"
											})
										]
									}, s.name)) })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "play",
						className: "scroll-mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							kicker: "09 落地节奏",
							title: "先成交，再租铺"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "grid gap-3 md:grid-cols-2",
							children: timelineZero.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl border border-border bg-surface p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-primary",
										children: t.week
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-serif text-lg",
										children: t.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 space-y-1 text-sm text-muted",
										children: t.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", i] }, i))
									})
								]
							}, t.week))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "risk",
						className: "scroll-mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							kicker: "10 合规与风险",
							title: "这行能出事的点"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl border border-border bg-surface p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-serif text-lg",
										children: "必须办的"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-2 space-y-2 text-sm leading-6 text-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "个体户或一人公司（安装服务开票、进街道的前提）" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "公众责任险：老人滑倒、打孔打到水管是真实风险" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "卫生间防水与承重：承重墙打孔要会判断，不会就外包" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "卖血压计、轮椅、护理床：二类医疗器械经营备案" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "广告语禁止治疗、防癌、包治——适老不是保健品" })
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-2xl border border-border bg-surface p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-5 text-accent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-serif text-lg",
										children: "当前城市特别注意"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 space-y-2 text-sm leading-6 text-muted",
										children: plan.city.risks.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", r] }, r))
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-2xl border border-border bg-fg p-6 text-bg sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.2em] text-accent-soft",
								children: "FINAL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-serif text-2xl sm:text-3xl",
								children: "一句话决策"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-3xl text-sm leading-7 text-bg/85",
								children: "上海店证明了「体验 + 改造服务」能卖出去。没有启动资金时，唯一可落地的是模式 A。 人在深圳、能进社区：留在深圳上门，客单养活你。人脉只在老家、深圳进不了小区：回老家做上门或驿站合作。 两边都别先租 80㎡ 店。用 10 个真实好评再决定开店城市。"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-fg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "size-4" }), "先赚安装费"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full bg-bg/10 px-4 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }), "再谈驿站"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 rounded-full bg-bg/10 px-4 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" }), "最后才租铺"]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pb-10 text-center text-xs leading-5 text-faint",
						children: "费用为 2026 年 9 月市场中位估算，含深圳社区底商约 3–8 元/㎡/天、适老家居国补 15%、失能服务消费券等公开政策。 实际以当地房东、人社、民政口径为准。本页用于决策，不构成投资建议。"
					})
				]
			})
		]
	});
}
function recommend(capital) {
	if (capital < 8e3) return {
		title: "现在不要在任何城市开店",
		body: "启动资金不够付押金。唯一路径是模式 A：免费上门评估 + 按单订货安装。城市选择看你人在哪，不看哪个市场更大。",
		bullets: [
			"人身在深圳：就在老龄化社区做上门，客单约 3000 元，5 单就能滚出工具和保险钱。",
			"人脉只在老家：回老家扫楼更快，客单低但转化高，适合先活下来。",
			"不要因为深圳风口而借钱租铺，也不要因为老家便宜就上样板间。"
		]
	};
	if (capital < 8e4) return {
		title: "有一点钱：优先老家轻店或深圳坚持上门",
		body: "8 万以下在深圳租 50㎡ 会很紧（押金+装修+2 个月空窗）。同样的钱在二线或地级市可以撑起体验点。",
		bullets: [
			"深圳：继续上门，把钱当周转货和兼职师傅备用金。",
			"二线省会 / 地级市：可试 30–40㎡ 驿站合作或次新社区底商。",
			"县城：仍然不要装修店，把钱花在样品和电动车上。"
		]
	};
	return {
		title: "资金过 8 万：才进入选城市开店",
		body: "这时才比较深圳体验点 vs 老家体验点。标准店只建议在已经跑通订单、并有街道或物业书面意向后再做。",
		bullets: [
			"深圳体验点：赌客单和政策补贴，月固定成本高，容错低。",
			"老家体验点：赌信任半径，利润绝对额可能低于深圳，但睡得着。",
			"上海那种 1000㎡ 馆是政企项目，不是你的下一张图纸。"
		]
	};
}
function CityCard({ id }) {
	const c = cities[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 grid gap-4 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-2xl border border-border bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-serif text-lg",
					children: "优势"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-2 text-sm text-muted",
					children: c.strengths.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", s] }, s))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-2xl border border-border bg-surface p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-accent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-serif text-lg",
					children: "2026 政策抓手"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-2 text-sm text-muted",
					children: c.policy.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", s] }, s))
				})
			]
		})]
	});
}
function SectionTitle({ kicker, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-[0.18em] text-primary",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-1 font-serif text-2xl sm:text-3xl",
			children: title
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 text-xs font-medium tracking-wide text-muted",
		children: label
	}), children] });
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-10 rounded-full px-3 text-sm", active ? "bg-primary text-primary-fg" : "bg-bg-deep text-fg hover:bg-border"),
		children
	});
}
function Stat({ label, value, hint, warn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-1 font-serif text-2xl", warn && "text-bad"),
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs leading-5 text-faint",
				children: hint
			})
		]
	});
}
function CmpRow({ label, cells }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
		className: "border-t border-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
			className: "px-4 py-3 text-muted",
			children: label
		}), cells.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
			className: "px-4 py-3 tabular-nums",
			children: c
		}, `${label}-${i}`))]
	});
}
function Quote({ n, a, b }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-faint",
				children: "产品销售"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-xl",
				children: yuan(a)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-faint",
				children: "改造服务意向"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-xl text-accent",
				children: yuan(b)
			})
		]
	});
}
function CostTable({ rows }) {
	const total = rows.reduce((s, r) => s + r.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-2xl border border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[560px] text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-bg-deep text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-2 font-medium",
						children: "科目"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-2 font-medium",
						children: "说明"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-2 font-medium",
						children: "金额"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-t border-line",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-2",
						children: r.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-2 text-muted",
						children: r.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-2 tabular-nums",
						children: r.amount ? yuanExact(r.amount) : "—"
					})
				]
			}, r.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-t border-border bg-bg-deep font-medium",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-2",
						children: "合计"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: "px-4 py-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-2 tabular-nums",
						children: yuanExact(total)
					})
				]
			})] })]
		})
	});
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-serif text-lg",
			children: value
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanApp, {});
}
//#endregion
export { Home as component };
