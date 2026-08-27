/* 话术数据 3/5：产品专家（配件/大疆防御/OEM/认证）+ 报价谈判 */
window.CARDS3 = [
{
id:"c18", cat:"产品专家", langs:["EN"],
title:"桨叶/电机配件复购话术",
tags:["配件","桨叶","电机","复购","FPV"],
body:`Two parts FPV pilots replace constantly: propellers and motors (after crashes), plus batteries every 1–2 seasons. Our wholesale packs: propellers in sets of 4 pairs (CW/CCW), motors in matched sets of 4. If your customers fly 5-inch, I'd stock 2207/2306 motors and 5-inch props in bulk. Want a stocking recommendation for your shop?`,
trans:`FPV 玩家要常换的两样：桨叶和电机（炸机后），电池每 1–2 个季节换一轮。我们的批发装：桨叶 4 对一套（正反桨 CW/CCW），电机 4 只匹配套装。如果你的客户飞 5 寸，我建议你常备 2207/2306 电机和 5 寸桨。需要我给您出一份店铺备货清单吗？`,
note:"对经销商卖配件的角度：不是「你需要配件」，而是「你的客户会回头找你买配件」——帮他做备货方案，配件订单自然就来了。"
},
{
id:"c19", cat:"产品专家", langs:["EN"],
title:"电池/充电器话术（合并发货引导）",
tags:["电池","充电器","配件","运输","合并发货"],
body:`For charging, a dual-channel charger handles two 6S packs at once; we supply chargers, parallel boards, and battery bags (fire-safe). For shipping loose batteries, we use land/special channels due to airline rules — usually 7–15 days. Buying batteries with the drone is the smartest move since shipping is consolidated.`,
trans:`充电用双通道充电器一次充两块 6S 电池；我们供应充电器、并充板和防爆电池袋。散装电池因航空规定走陆运/专线，通常 7–15 天。电池随整机一起买最划算——可以合并发货。`,
note:"电池话术三件事：推荐充电方案（配件销售）、说明运输限制（管理预期）、引导随整机购买（合并发货省运费）。"
},
{
id:"c20", cat:"产品专家", langs:["EN"],
title:"对比推荐通用话术",
tags:["对比","二选一","推荐","犹豫"],
body:`Both options are good — the difference is what you optimize for:
• [Model A] is the cost-effective choice if [X] is your main job;
• [Model B] is worth the extra if you need [Y] (digital video / RTK / bigger tank / longer endurance).

For your use case of [use case], I'd lean [A/B], because [one-sentence reason]. I can send a side-by-side spec sheet — you decide with full data.`,
trans:`两款都好——区别在于您优化什么：[型号A] 如果主要是 [X] 用途，是性价比之选；[型号B] 如果您需要 [Y]（数字图传/RTK/大药箱/长续航），多花的钱值得。针对您的 [用途]，我倾向 [A/B]，因为 [一句话理由]。我可以发一份并排对比参数表——您用完整数据做决定。`,
note:"对比话术的心理学：先给客户「决策框架」（优化目标不同），再给倾向建议，最后给数据。客户按你的框架思考，成交方向就由你引导。"
},
{
id:"c21", cat:"产品专家", langs:["ZH"],
title:"专家话术 4 必杀技（内功）",
tags:["专家","技巧","内功","心法"],
body:`1. 数字说话：每个推荐至少带一个参数（尺寸/KV/载药量/亩效/续航）
2. 给「够用就好」选项：主动推荐便宜款，赢得信任，客户反而买贵的
3. 每段话带反问：单向介绍变对话，持续挖需求
4. 收尾给下一步："Want the quote / spec sheet / factory video?"`,
note:"专业感的来源不是背参数，而是「按客户场景给方案」。每句话术都要落到客户的田、客户的飞场、客户的店铺。"
},
{
id:"c22", cat:"产品专家", langs:["EN"],
title:"大疆防御 · 客户问「有没有大疆」",
tags:["大疆","防御","品牌","兜底"],
body:`Honest answer: we don't carry DJI — we're not an authorized DJI channel. Our focus is working directly with Shenzhen factories on FPV drones, agricultural spray drones, and parts, where we can offer you three things DJI channels typically can't: factory-direct pricing, OEM/customization, and spare-parts flexibility. If your project specifically requires a DJI product, I can still help source it from the market — but pricing will just follow market rate, and warranty stays with the official channel.`,
trans:`诚实回答：我们不卖大疆——我们不是大疆授权渠道。我们的重心是与深圳工厂直接合作做 FPV、植保机和配件，能给您三样大疆渠道通常给不了的东西：工厂直供价、OEM 定制、配件灵活供应。如果您的项目明确要大疆产品，我也可以帮您从市场上找——但价格只能随行就市，保修走官方渠道。`,
note:"大疆防御三原则：①不贬低大疆（显格局）；②立刻转场到自己的价值（工厂价/OEM/配件）；③留兜底（可帮找但不承诺低价）。这样既不丢单也不丢人。"
},
{
id:"c23", cat:"产品专家", langs:["EN"],
title:"大疆防御 · 「为什么不做大疆」",
tags:["大疆","防御","商业模式","经销商"],
body:`Good question. We chose factory partnerships over big brands for a simple reason: in FPV and agricultural drones, the value is in configurability and parts. DJI is an excellent brand, but its channels are transparent — thin margins, fixed configurations, no OEM, and after-sales runs through its own network. With factory-direct models, we control quality checks, offer OEM, and keep a parts pipeline for years. That's what a distributor actually needs.`,
trans:`问得好。我们选择工厂合作而不是大品牌，原因很简单：在 FPV 和植保机领域，价值在于可配置性和配件。大疆是优秀的品牌，但它的渠道透明——利润薄、配置固定、没有 OEM、售后走自家体系。工厂直供机型，我们能把控质检、提供 OEM，还能维持多年的配件管道。这才是经销商真正需要的。`,
note:"被问「为什么不做大疆」时，不要贬低产品，要讲「商业逻辑」：渠道透明=利润薄。经销商听完这句，反而认同你的商业模式。"
},
{
id:"c24", cat:"产品专家", langs:["EN"],
title:"大疆防御 · 拿大疆价格压价",
tags:["大疆","压价","比价","TCO","防御"],
body:`If you're comparing with a DJI consumer model, it's a different product category: a DJI Mini is a camera drone, not a repairable FPV machine. Our FPV builds are modular — crash an arm, replace an arm for a few dollars; with DJI, a crash often means an expensive official repair. For your [freestyle / spraying] use, the total cost of ownership over a year is what matters, not just the box price. Shall I compare the two for your use case?`,
trans:`如果您拿大疆消费级来比，那是不同品类：大疆 Mini 是航拍机，不是可维修的 FPV 机型。我们的 FPV 是模块化的——炸一根机臂，几美元换一根；大疆炸机往往意味着昂贵的官方维修。对您的 [花飞/喷洒] 用途，一年下来的总持有成本才是关键，不只是盒子价格。需要我按您的用途做个对比吗？`,
note:"大疆压价的标准拆解：品类不同 + 维修成本不同 = 总持有成本（TCO）不同。把战场从「单价」拉到「一年总成本」，FPV 的可维修性就是杀手锏。"
},
{
id:"c25", cat:"产品专家", langs:["EN"],
title:"OEM 定制话术（logo/配色/包装）",
tags:["OEM","贴牌","定制","起订量","打样"],
body:`Yes, we do OEM. Depending on the factory, options include: your logo on frame/arms, custom colors, branded packaging, and custom manual. Typical MOQ for OEM branding starts around [X] units, with a small one-time setup/design fee [waived above X units]. For a first order, we can do a trial run with just logo printing at [X] pcs. What's your target MOQ and branding idea?`,
trans:`可以，我们做 OEM。视工厂而定，选项包括：机架/机臂印 logo、定制配色、品牌包装、定制说明书。OEM 贴牌起订量通常 [X] 台起，一次性制版/设计费 [超过 X 台可免]。首单可以先用 [X] 台做纯 logo 印刷试跑。您的目标起订量和贴牌方案是？`,
note:"OEM 话术要点：先给肯定答案，再给「选项清单→起订量→费用结构→试跑方案」四段式。OEM 是 B 端客户的核心信号，答得专业，单子就稳了。"
},
{
id:"c26", cat:"产品专家", langs:["EN"],
title:"认证话术（CE/FCC/EAC/阿联酋注册）",
tags:["认证","CE","FCC","EAC","DCAA","注册"],
body:`On certifications: our factory models come with the documentation they hold — typically CE and FCC for electronics. For Russia, EAC (Eurasian conformity) certification is normally arranged by the importer on your side; for the UAE, drone registration with DCAA/GCAA is also on the operator's side. We provide the technical files and test documentation we have to support your process. Which market certification do your buyers require?`,
trans:`关于认证：我们工厂的机型随附工厂已有的文件——电子部分通常有 CE 和 FCC。俄罗斯的 EAC（欧亚合格认证）通常由进口方办理；阿联酋的 DCAA/GCAA 无人机注册也在运营方一侧。我们提供手头有的技术文件和测试文档支持您的流程。你们的买家需要哪个市场的认证？`,
note:"认证问题诚实且专业地答：自己有什么给什么（CE/FCC），当地的（EAC/DCAA）明确归属客户办理，同时给「提供技术文件支持」的态度。切忌随口承诺「所有认证都有」。"
},
{
id:"c27", cat:"产品专家", langs:["ZH"],
title:"认证速查表（内功）",
tags:["认证","CE","FCC","EAC","GACA","UN38.3","内功"],
body:`CE（欧盟）/ FCC（美国）：电子类通常出厂自带，俄罗斯/中东市场普遍认可
EAC：俄罗斯及欧亚经济联盟强制，进口商办理，需俄文文件——问客户「需要 EAC 文件吗」即显专业
阿联酋：商用无人机需 DCAA/GCAA 注册（设备注册+运营许可），由当地运营方办理
沙特：GACA 注册
电池运输：UN38.3 检测报告是锂电池出口标配文件，MSDS 随货`,
note:"客户问认证时，报出「EAC/DCAA/GACA/UN38.3」这些词，直接建立专业信任。文件归属（谁的谁办）必须讲清，避免成交后背锅。"
},
{
id:"c28", cat:"产品专家", langs:["ZH"],
title:"电池运输速查（内功）",
tags:["电池","运输","UN3480","UN3481","MSDS","内功"],
body:`UN3480：单独的锂电池（空运限制最严，多数快递不收，走专线/陆运）
UN3481：电池装在设备里或与设备同包（可随整机走，部分航线仍有限制）
UN38.3：锂电池运输检测报告（出口标配，向工厂索要）
MSDS：材料安全数据表，随货提供

话术原则：整机含电池→走专线/陆运时效正常；纯电池→单独渠道 7–15 天，运费另算`,
note:"电池是无人机外贸最常出问题的一环。客户问「电池能不能一起发」时，用 UN3480/3481 分情况答，专业且避坑。"
},
{
id:"d01", cat:"报价谈判", langs:["EN"],
title:"报价单模板 · 双币种（USD/RMB+汇率锁定）",
tags:["报价","PI","双币种","汇率","模板"],
body:`Dear [Name],

Please find our quotation:
• Product: [5-inch FPV BnF kit / 20L spray drone / ...] × [Qty]
• Configuration: [FC, ESC, motors, VTX, battery, spare parts...]
• Unit price: [USD] / [RMB] (both quoted; exchange rate fixed at [rate], valid until [date])
• Sample policy: samples 1–10 pcs at [sample price]; bulk price from [X] pcs
• Delivery: small orders shipped from factory [to your China forwarder / by international express]; bulk orders handed over at factory after inspection
• Lead time: [X] days after deposit
• Payment: [deposit%] deposit, balance before shipment/handover
• QC: video inspection (serial numbers, test flight) before dispatch

This offer is valid until [date]. Shall we adjust the configuration first, or shall I prepare the PI?`,
trans:`尊敬的 [名字]：请查收报价：产品：[5 寸 FPV BnF 套机/20L 植保机/…] × [数量]；配置：[飞控、电调、电机、图传、电池、配件…]；单价：[美元]/[人民币]（双币种报价，汇率按 [汇率] 锁定，有效期至 [日期]）；样品政策：样品 1–10 台按 [样品价]，[X] 台起批按批量价；交付：小单工厂发货 [发至您的中国货代/国际快递]，批量到厂验收交付；交期：定金后 [X] 天；付款：[定金比例]% 定金，尾款发货/交付前结清；质检：发货前视频验货（序列号、试飞）。本报价有效期至 [日期]。您是先调整配置，还是我直接准备 PI？`,
note:"双币种报价+汇率锁定日期，是俄罗斯市场（卢布/人民币结算）的专业标配。样品价和批量价同时列出，让「样品加价」策略看起来像行业惯例而非临时起意。"
},
{
id:"d02", cat:"报价谈判", langs:["ZH"],
title:"样品分层报价法 · 总则（内功）",
tags:["样品","分层报价","B端","内功","策略"],
body:`核心策略：样品默认加价 10–30%（覆盖小单的采购、验货、包装成本），但识别到 B 端潜质客户（见「B端潜质7信号」）时，样品直接给批发价，并把让价「显性化」。

执行三步：
1. 第一版报价：样品价（加价），批量价另列；
2. 识别信号：客户出现 B 端信号 → 主动说「鉴于您是要做分销，样品我按批量价给您破例」；
3. 绑定钩子：让价同时埋一句「这个价格基于我们看好长期合作，批量订单请优先考虑我们」。

禁忌：对所有客户一律批发价=白让；对所有客户一律加价=赶走大客户。`,
note:"这套方法就是你「样品价高一点、B 端潜质视情况放价」策略的话术化。核心心法：让出去的每一分钱都要让客户知道，并且要换回一个长期承诺。"
},
{
id:"d03", cat:"报价谈判", langs:["EN"],
title:"样品默认加价话术（散单）",
tags:["样品","加价","散单","报价"],
body:`For samples of 1–10 pcs, our price is [sample price] — this covers individual procurement, full QC video, and dedicated packaging, which bulk orders don't need. From [X] pcs, the bulk price drops to [bulk price]. If you're testing before a larger order, many clients start with 1–2 pcs, and the sample margin is credited back on your first bulk order.`,
trans:`1–10 台的样品，我们的价格是 [样品价]——因为要单独采购、逐台视频验货、单独包装，这些成本批量订单不需要。[X] 台起，批量价降到 [批量价]。如果您是先测试再上量，很多客户先买 1–2 台，样品差价可以在首个批量订单里抵扣返还。`,
note:"样品加价的正当性包装：不是「我要赚你钱」，而是「单独采购+逐台验货+单独包装的成本」。「差价抵扣首单」是把散单客户转化为批量订单的钩子，一句话就埋下了复购动机。"
},
{
id:"d04", cat:"报价谈判", langs:["EN"],
title:"B端潜质客户 · 样品放价话术",
tags:["样品","放价","B端","批发价"],
body:`I can see you're building a distribution business here, not just buying one unit. So let me do this: for your samples, I'll apply the bulk price directly — that's [price] instead of [sample price]. This is a one-time courtesy we extend to partners we see long-term potential with. In return, when you scale up, I'd ask that we get your first bulk order.`,
trans:`看得出您是在做分销生意，不只是买一台。那我这样处理：您的样品直接按批量价 [价格]，而不是样品价 [样品价]。这是我们给有长期合作潜力的伙伴的一次性优待。作为回报，您上量后的首个批量订单，希望能交给我们。`,
note:"B 端放价的三要素：①先恭维客户身份（做分销的）让让价显得自然；②显性化让价金额（让客户知道让了多少）；③明确交换条件（首单批量归我）。让价不白让，这是谈判的基本原则。"
},
{
id:"d05", cat:"报价谈判", langs:["EN"],
title:"放价绑定批量订单（锁价钩子）",
tags:["样品","放价","锁价","批量","钩子"],
body:`Here's my proposal: samples at bulk price [price] for up to [X] pcs, and I'll hold today's price for your first bulk order if it's placed within [30] days. That way you test at distributor cost, and your margin on the first batch is protected from price changes. Shall I put both in the PI?`,
trans:`我的方案：样品按批量价 [价格] 最多 [X] 台，并且您的首个批量订单若在 [30] 天内下，我按今天的价格锁定。这样您以经销商成本测试，首批的利润也不受价格波动影响。我把这两条都写进 PI 可以吗？`,
note:"「锁价」是把样品让价转化为批量订单的经典钩子：客户怕的不是样品贵，是批量时涨价。给他一个 30 天锁价承诺，散单变批量的概率大增。"
},
{
id:"d06", cat:"报价谈判", langs:["EN"],
title:"价格锚定话术（先报高配再推标准款）",
tags:["锚定","高配","标准款","报价","心理"],
body:`Two configurations for your 5-inch build:
• Standard: [F405 FC, 45A ESC, 2207 motors, analog VTX] — [price], solid for most flying;
• Pro: [F722 FC, 55A ESC, 2306 motors, Walksnail digital] — [price], for pilots who want HD and more headroom.

Most of our resellers start with the Standard for volume and add Pro later. Which fits your market?`,
trans:`您的 5 寸机有两个配置：标准版：[F405 飞控、45A 电调、2207 电机、模拟图传]——[价格]，满足大多数飞行；Pro 版：[F722 飞控、55A 电调、2306 电机、Walksnail 数字图传]——[价格]，适合要高清和更大余量的飞手。我们大多数经销商先从标准版上量，之后再上 Pro。哪个适合您的市场？`,
note:"价格锚定原理：先报高配（锚点）再报标准款，标准款显得划算；同时用「大多数经销商先上标准版」的从众心理引导成交标准款。两个选项永远比一个选项成交率高。"
},
{
id:"d07", cat:"报价谈判", langs:["EN"],
title:"比价应对深版（拆穿低价来源）",
tags:["比价","压价","拆穿","低价","谈判"],
body:`I understand — price matters. One honest note before you compare: in FPV drones, a lower price usually hides something — cheaper ESC chips, no-name motors, recycled batteries, or no QC. The same-looking 5-inch can be [X] cheaper with parts that fail in weeks. Our quote includes: brand motors and FC, per-unit video QC, and a spare-parts pipeline. If you have the other quote, send it over — I'll tell you honestly whether it's the same configuration and whether we can match it.`,
trans:`我理解——价格很重要。比价前给您一个诚实提醒：FPV 无人机里，更低的价格通常藏着东西——便宜的杂牌电调芯片、无牌电机、回收电池、或者没有质检。看起来一样的 5 寸机，用几周就坏的配件能便宜 [X]。我们的报价包含：品牌电机和飞控、逐台视频验货、配件供应管道。如果您有对方的报价，发我——我诚实告诉您是不是同样配置、我们能不能匹配。`,
note:"比价深版三招：①拆穿低价来源（具体到「电调芯片/电机/电池」层面，专业感拉满）；②列出你的价格里包含什么；③要对方报价单做「免费审单」。客户一旦把对手报价发给你，你就掌握了谈判主动。"
},
{
id:"d08", cat:"报价谈判", langs:["RU"],
title:"比价应对 · 俄语",
tags:["比价","俄语","压价","Русский"],
body:`Понимаю, цена важна. Честное замечание: в FPV-дронах слишком низкая цена обычно что-то скрывает — дешёвые регуляторы, безымянные моторы, б/у батареи или отсутствие проверки. Наша цена включает фирменные моторы и контроллер, видео-проверку каждой единицы и поставку запчастей. Пришлите другое предложение — честно скажу, та же ли это комплектация и сможем ли мы повторить цену.`,
trans:`我理解，价格很重要。诚实提醒：FPV 无人机价格过低通常藏着东西——廉价电调、无牌电机、二手电池或没有质检。我们的价格包含品牌电机和飞控、逐台视频验货和配件供应。把对方报价发我——我诚实告诉您配置是否相同、我们能否匹配价格。`
}
];
