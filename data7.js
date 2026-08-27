/* 话术数据 7/7：销售SOP + 技术调参 + 竞品对比 + 俄阿语全流程 */
window.CARDS7 = [
/* ========== 销售 SOP（内部操作指南） ========== */
{
id:"sop_overview", cat:"销售SOP", langs:["ZH"],
title:"SOP · 全流程 7 阶段总览",
tags:["SOP","流程","总览","内功"],
body:`① 准备 → ② 开发获客 → ③ 询盘响应 → ④ 需求诊断推荐 → ⑤ 报价谈判 → ⑥ 成交收款 → ⑦ 交付售后复购

每单都走这 7 步；卡在任一步，回到对应阶段的话术解决。
核心心法：散单求「快、稳」，B端求「深、专业」。先判断客户层级，再决定话术和让价。`,
note:"记住这条主链路，任何客户、任何阶段都能对号入座。"
},
{
id:"sop_prepare", cat:"销售SOP", langs:["ZH"],
title:"SOP · 阶段① 准备（开卖前必做）",
tags:["SOP","准备","内功"],
body:`开卖前备齐 5 样：
1. 产品参数表背熟（FPV 配置链、植保载药量梯度——见「产品专家」分类）
2. 报价单模板（双币种 USD/RMB、EXW、定金尾款、免责声明）
3. 素材包：产品图、试飞视频、验货视频样例、工厂视频
4. 价格政策：样品价 / 批发价 / 批量价的档位
5. 本话术库（遇事搜关键词即出）

没备齐不要开客户——第一印象决定客户走不走。`,
note:"准备阶段决定你后面所有动作的底气。素材包和报价模板是硬要求。"
},
{
id:"sop_develop", cat:"销售SOP", langs:["ZH"],
title:"SOP · 阶段② 开发获客",
tags:["SOP","开发","获客","节奏"],
body:`渠道：WhatsApp / Telegram / LinkedIn / 群组（FPV群、进出口群、植保群）
每日动作：触达 10–20 个新客户（首条消息用「破冰」卡）
跟进节奏（未回复）：第 1 天破冰 → 第 2-3 天发价值（价格/视频）→ 第 5-7 天痛点三选一 → 第 14 天库存/价格提示 → 之后每月 1 次

判断：回复即进入阶段③；三次跟进无果降为低优先级。`,
note:"开发是数量×节奏的生意。坚持每天触达 + 1-3-7-14 跟进，不催不断。"
},
{
id:"sop_inquiry", cat:"销售SOP", langs:["ZH"],
title:"SOP · 阶段③ 询盘响应（黄金 4 小时）",
tags:["SOP","询盘","响应","三连问"],
body:`收到询盘 → 工作时间内 4 小时内回复
第一步：三连问（型号/尺寸？数量？整机还是配件？）—— 见「询盘诊断」分类
第二步：同时声明信任锚点（正品、视频验货、样品1台起、批量到厂交付）
第三步：判断客户层级（见「客户分级」卡）

拿到三连问答案再报价，不要直接甩价格。`,
note:"响应速度=专业度第一印象。三连问让你报价精准，也筛选掉比价党。"
},
{
id:"sop_tier", cat:"销售SOP", langs:["ZH"],
title:"SOP · 客户分级 A/B/C",
tags:["SOP","分级","ABC","内功"],
body:`A 级（B端潜质，重点）：报公司名/网站、问MOQ/年采购量、问OEM、问账期、要PI发票、自称经销商、一次问多型号 → 样品直接放批发价 + 深度跟进
B 级（明确意向，正常）：报了型号+数量+用途 → 精准报价 + 正常节奏
C 级（询价比价，低优先）：只问价不给信息 → 给区间价 + 反抛问题，不恋战

对照「B端潜质7信号」卡（询盘诊断分类）判定。`,
note:"分级决定你把时间花在哪。80% 精力给 A 级，C 级别纠缠。"
},
{
id:"sop_recommend", cat:"销售SOP", langs:["ZH"],
title:"SOP · 阶段④ 需求诊断 + 产品推荐",
tags:["SOP","诊断","推荐","专家"],
body:`按场景问诊（农业/巡检/FPV/测绘/物流）→ 匹配机型 → 用参数说话 → 给「够用就好」选项 → 反问收口

农业：面积→载药量→地形→配件包
FPV：尺寸→电机KV→电池→图传制式→套机形态
巡检：热成像 vs 目视→续航→防护

推荐话术见「产品专家」分类；每个推荐带一个参数。`,
note:"诊断式提问 + 参数化推荐 = 专家感。客户按你的框架思考，成交方向你引导。"
},
{
id:"sop_quote", cat:"销售SOP", langs:["ZH"],
title:"SOP · 阶段⑤ 报价谈判",
tags:["SOP","报价","谈判","让价"],
body:`报价：条款完整（EXW、双币种、含不含税、定金尾款、交期、免责）
样品：默认加价；识别到 A 级客户放批发价 + 显性化让价 + 绑首单批量
比价：先拆「正品+验货+配件」价值，再谈价
让价：三档（象征→绑加量→绑付款），绝不无理由降价
催单：库存/排产/汇率/运费 四个真实理由

话术见「报价谈判」分类。`,
note:"报价永远留 3-8% 谈判空间；让价必须换条件；催单给真实理由。"
},
{
id:"sop_close", cat:"销售SOP", langs:["ZH"],
title:"SOP · 阶段⑥ 成交收款",
tags:["SOP","成交","收款","PI"],
body:`成交确认：复述订单要点 → 发 PI → 书面总结留痕
付款：小单全款 / 大单 30-40-30（定金锁产、见验货中期款、现场尾款）
收定金当天启动 + 发确认
尾款前先发验货视频再催

话术见「付款收款」分类。`,
note:"成交后立刻 PI + 书面总结，把口头承诺变留痕，降低反悔与纠纷。"
},
{
id:"sop_deliver", cat:"销售SOP", langs:["ZH"],
title:"SOP · 阶段⑥ 交付验货",
tags:["SOP","交付","验货","留痕"],
body:`发货/交付前：视频验货（序列号、试飞、装箱）→ 客户确认 → 收尾款 → 发货/交接
留痕：验货视频存档 + 交接单/签收记录 + 「仅境内代采、出口买方负责」声明出现一次

大单到厂交付：现场验收 → 签交接单（货物与风险转移）→ 交付文件包（合同/发票/装箱单/质检视频/序列号）

话术见「物流发货」+「大单来华」分类。`,
note:"验货视频是尾款催收的钥匙，也是售后纠纷的挡箭牌。每单必做。"
},
{
id:"sop_aftersales", cat:"销售SOP", langs:["ZH"],
title:"SOP · 阶段⑦ 售后 + 复购",
tags:["SOP","售后","复购","锁客"],
body:`交付后 3 天内：问使用体验
保修：视频诊断→寄配件→返厂（三步流程，见「售后复购」）
月度触达：配件复购（桨叶/电机/电池/喷头）+ 新品 + 行业信息
锁定客户四根绳：配件、新品、保修、优先分货

复购是这个生意最稳的利润来源，别只做一锤子买卖。`,
note:"成交不是结束，是复购的开始。每月对老客户做一次价值触达。"
},
{
id:"sop_daily", cat:"销售SOP", langs:["ZH"],
title:"SOP · 每日/每周动作 + KPI",
tags:["SOP","每日","KPI","复盘"],
body:`每日（约 2-3 小时）：
□ 触达新客户 10–20 个
□ 回复全部询盘（4 小时内）
□ 跟进待回复客户（按 1-3-7-14 节奏）
□ 更新客户档案（来源/需求/报价/状态）

每周复盘：
□ 新增询盘数、回复率、转化率、成交额
□ 丢单原因归类（价格/交期/信任/配置）
□ 调整：哪类客户转化好就加大投入

客户档案建议用表格：姓名/公司/国家/渠道/型号需求/报价/状态/下次跟进时间。`,
note:"SOP 落到每日清单才算数。先跑两周，再按数据调。"
},
/* ========== 技术调参（客户高频问） ========== */
{
id:"tech_betaflight", cat:"技术调参", langs:["EN"],
title:"技术问答 · Betaflight 装机/调参",
tags:["技术","Betaflight","调参","FPV","装机"],
body:`Betaflight setup basics for our FPV builds: (1) flash the matching target (most units come pre-flashed); (2) set receiver protocol (CRSF for ELRS, SBUS for FrSky); (3) configure modes (ARM, angle/horizon/acro); (4) set failsafe and OSD. I can send a step-by-step video — and bulk orders ship with factory-tuned presets so it flies right out of the box.`,
trans:`Betaflight 基础设置：(1) 刷对应固件目标（我们多数已预刷）；(2) 设接收机协议（ELRS 用 CRSF，FrSky 用 SBUS）；(3) 配置模式（解锁、自稳/半自稳/手动）；(4) 设失控保护与 OSD。我可以发一步步视频——批量订单出厂已调好预设，到手即飞。`,
note:"客户问「怎么设置」，先给四步框架显专业，再给视频/预设兜底。"
},
{
id:"tech_pid", cat:"技术调参", langs:["EN"],
title:"技术问答 · PID 调参入门",
tags:["技术","PID","调参","FPV"],
body:`For tuning: start with default PIDs, fly, then adjust only if you see issues — fast oscillation means P is too high; slow/mushy response means P is too low; wobble on throttle points to I-term. Our BnF kits ship with factory-tuned PIDs, so you rarely need to touch them. Tell me the symptom (video helps) and I'll suggest the exact change.`,
trans:`调参：先用默认 PID 试飞，有问题再调——快速抖动说明 P 太高；反应迟钝说明 P 太低；加油门晃动看 I 项。我们 BnF 套机出厂已调好，基本不用动。告诉我症状（最好有视频），我告诉你具体改哪个。`,
note:"用「P 高/低、I 项」这些术语，飞手客户立刻觉得你懂行。"
},
{
id:"tech_vtx", cat:"技术调参", langs:["EN"],
title:"技术问答 · 图传对频/频率设置",
tags:["技术","图传","VTX","对频"],
body:`VTX setup: pick a band/channel and power (we ship at a safe level or as you specify), make sure VTX and goggles are on the same band/channel. Digital systems bind goggles to the air unit. If your team flies together, I can set each unit to a different channel to avoid interference.`,
trans:`图传设置：选好频段/频道和功率（我们默认安全功率或按你要求），确保图传和眼镜同频段同频道；数字图传是眼镜对天空端绑定。团队一起飞的话，我可以给每台设不同频道避免干扰。`,
note:"多人同飞干扰是 FPV 团体的常见痛点，主动提「分频道」很加分。"
},
{
id:"tech_elrs", cat:"技术调参", langs:["EN"],
title:"技术问答 · ELRS 对频绑定",
tags:["技术","ELRS","对频","接收机"],
body:`ELRS binding: power the receiver 3 times quickly (or Betaflight CLI "bind_rx"), then press Bind on the radio. Kits ordered with a radio ship pre-bound. On the radio, create a model, enable the ELRS module, and it connects. I can walk you through it live on a video call if needed.`,
trans:`ELRS 对频：接收机快速上电 3 次（或 Betaflight CLI 输 bind_rx），再按遥控 Bind。套机+遥控一起订的出厂已对好频。遥控端建好模型、开启 ELRS 模块即可连上。需要的话我视频带你操作。`,
note:"对频是新手最常卡住的一步，主动给「视频带你操作」的兜底。"
},
{
id:"tech_battery", cat:"技术调参", langs:["EN"],
title:"技术问答 · 电池保养（寿命）",
tags:["技术","电池","保养","LiPo"],
body:`LiPo care (the #1 way to make batteries last): never fly below 3.5V per cell — land at 3.6–3.7V; store at 3.8V per cell (storage voltage); always balance-charge; in hot weather keep batteries shaded and never leave them in a hot car.`,
trans:`锂电池保养（让电池长寿的第一要诀）：飞行别放低到单片 3.5V 以下——3.6–3.7V 就返航；存放电压 3.8V/片；一定用平衡充；高温天电池遮阴、绝不放暴晒车里。`,
note:"电池是复购品，教客户正确保养反而延长复购周期——但换来的是信任和口碑，长期划算。"
},
/* ========== 竞品对比 ========== */
{
id:"comp_other_supplier", cat:"竞品对比", langs:["EN"],
title:"竞品对比 · 别家供应商更便宜",
tags:["竞品","对比","比价","供应商"],
body:`If another supplier is cheaper, the question is what's inside: no-name ESCs or motors, recycled batteries, no per-unit QC, no spare parts later. Send me their quote and I'll tell you honestly whether it's the same build. If it is and the price is real, I'll try to match it; if not, you'll see exactly where the money went.`,
trans:`别家更便宜时，关键看「里面是什么」：杂牌电调/电机、回收电池、不逐台质检、后期没配件。把对方报价发我，我诚实告诉你是不是同样配置。如果是、价格又真实，我尽量匹配；如果不是，你会看清钱省在了哪里。`,
note:"把「更便宜」拆解成「配置缩水」+「免费审单」，客户反而更信你。"
},
{
id:"comp_brand", cat:"竞品对比", langs:["EN"],
title:"竞品对比 · 大品牌 vs 工厂直供",
tags:["竞品","品牌","工厂","对比"],
body:`Big-brand vs factory-direct is a trade-off: brands give recognition and their own after-sales, but fixed configurations, no customization, and thinner dealer margin. Our factory models give you configurable builds, OEM, and a parts pipeline — which is what a distributor's long-term margin actually depends on.`,
trans:`大品牌 vs 工厂直供是取舍：品牌给知名度和自家售后，但配置固定、不能定制、经销商利润薄。我们的工厂机型给你可定制配置、OEM、配件供应——这才是一个经销商长期利润真正依赖的东西。`,
note:"不贬低品牌，讲「经销商长期利润」的商业逻辑，更容易说服 B 端。"
},
/* ========== 俄语/阿语 全流程常用句 ========== */
{
id:"ru_full", cat:"高频问答", langs:["RU"],
title:"俄语全流程常用句速查",
tags:["俄语","全流程","Русский","常用句"],
body:`您好 — Здравствуйте
感谢询价 — Спасибо за запрос
样品1台起 — образцы от 1 шт.
请确认型号/数量 — уточните модель и количество
报价 — предложение/цена
交期 — срок поставки
付款：定金+尾款 — предоплата + остаток
发货前视频验货 — видео-проверка перед отправкой
到货时效 7–15天 — доставка 7–15 дней
清关由您负责 — таможня на вашей стороне
如需帮助请告知 — сообщите, если нужна помощь`,
trans:`常用俄语速查（依次）：您好 / 感谢询价 / 样品1台起 / 请确认型号数量 / 报价 / 交期 / 付款：定金+尾款 / 发货前视频验货 / 到货时效7-15天 / 清关由您负责 / 如需帮助请告知`,
note:"把全流程最高频的 11 句俄语做成速查，聊俄罗斯客户时复制粘贴即可。"
},
{
id:"ar_full", cat:"高频问答", langs:["AR"], rtl:true,
title:"阿语全流程常用句速查",
tags:["阿拉伯语","全流程","عربي","常用句"],
body:`مرحباً — 您好
شكراً على استفساركم — 感谢询价
عينات من قطعة واحدة — 样品1台起
يرجى تأكيد الموديل والكمية — 请确认型号/数量
عرض السعر — 报价
مدة التسليم — 交期
دفعة مقدمة + الرصيد — 定金+尾款
فحص بالفيديو قبل الشحن — 发货前视频验货
الشحن 5–10 أيام — 到货5-10天
التخليص الجمركي مسؤوليتكم — 清关由您负责
أخبروني إن احتجتم مساعدة — 如需帮助请告知`,
trans:`常用阿语速查（依次）：您好 / 感谢询价 / 样品1台起 / 请确认型号数量 / 报价 / 交期 / 定金+尾款 / 发货前视频验货 / 到货5-10天 / 清关由您负责 / 如需帮助请告知`,
note:"中东市场全流程最高频 11 句阿语速查，聊阿联酋客户复制即用。"
}
];
