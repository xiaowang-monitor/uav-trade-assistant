/* 话术数据 4/5：报价谈判（续）+ 付款收款 + 物流发货 */
window.CARDS4 = [
{
id:"d09", cat:"报价谈判", langs:["AR"], rtl:true,
title:"比价应对 · 阿拉伯语",
tags:["比价","阿拉伯语","压价","عربي"],
body:`أتفهم أن السعر مهم. ملاحظة صادقة قبل المقارنة: في طائرات FPV، السعر المنخفض جداً يخفي شيئاً عادةً — قطع تحكم رخيصة، محركات مجهولة، بطاريات مستعملة، أو بدون فحص. سعرنا يشمل محركات ومتحكم معروفين، فحص فيديو لكل قطعة، وخط توريد قطع غيار. أرسلوا لي عرض الطرف الآخر — وسأخبركم بصدق إن كانت نفس التجهيزات وهل نستطيع مطابقة السعر.`,
trans:`我理解价格很重要。比价前一个诚实提醒：FPV 无人机里价格过低通常藏着东西——廉价电调、无牌电机、二手电池或没有质检。我们的价格包含品牌电机和飞控、逐台视频验货和配件供应管道。把对方报价发我——我诚实告诉您配置是否相同、能否匹配价格。`
},
{
id:"d10", cat:"报价谈判", langs:["EN"],
title:"三档让价 · 第一档（象征性诚意）",
tags:["让价","折扣","第一档","谈判"],
body:`I've checked with the factory — for this order we can do a small courtesy: [X]% off, or free spare propellers set. This is the standard we extend to clients starting a relationship with us. If that works, I'll update the PI right away.`,
trans:`我和工厂确认过了——这单可以给个小诚意：[X]% 折扣，或送一套备用桨叶。这是我们给开始合作客户的标配。可以的话，我立刻更新 PI。`,
note:"第一档让价=象征性诚意，只让利润率的一小部分。注意话术是「我和工厂确认过了」——把让价的来源挂到工厂头上，你始终保持好人角色，也为后续「工厂不给再让」留退路。"
},
{
id:"d11", cat:"报价谈判", langs:["EN"],
title:"三档让价 · 第二档（绑定加量）",
tags:["让价","加量","绑定","谈判"],
body:`We can improve the price to [X] if we adjust the order: add [a spare-parts kit / 2 extra batteries / 5 more units] — which you'll need anyway and which lowers the factory's unit cost. That way you get the better unit price and avoid downtime later. Does that make sense?`,
trans:`如果我们调整一下订单，价格可以做到 [X]：加购 [一套备件包/2 块备用电池/再多 5 台]——反正您也需要，而且能拉低工厂的单台成本。这样您拿到更低单价，后期还不停机。这样处理合理吗？`,
note:"第二档让价必须换东西。心理学：客户为了拿到更低单价会「顺便」加购他本来就需要的东西，客单价反而上升。这是谈判中最划算的一步。"
},
{
id:"d12", cat:"报价谈判", langs:["EN"],
title:"三档让价 · 第三档（绑定付款条件）",
tags:["让价","底价","付款","锁定","谈判"],
body:`This is the best I can do: [final price] with [50%] deposit today and the balance before shipment. The price is conditional on this payment structure — earlier cash flow lets the factory give us the best rate. I can hold this until [date]. Shall I prepare the PI now?`,
trans:`这是我能给的最低价：[最终价]，条件是今天付 [50%] 定金、发货前付清尾款。这个价格绑定这个付款结构——早回款工厂才给最低价。我可以保留到 [日期]。现在准备 PI 吗？`,
note:"第三档底价必须绑条件（付款结构/时效）。让客户感觉「低价是我用付款条件换来的」，既守住现金流，又让价格显得不可再谈。"
},
{
id:"d13", cat:"报价谈判", langs:["EN"],
title:"守住底价话术",
tags:["底价","守住","质量","谈判"],
body:`I respect that you need the best number. The honest situation: at [final price] we can guarantee brand parts, per-unit video QC, and on-time handover; below that, something has to give — and in drones, that something is usually quality. If [final price] works, I'll reserve the stock today.`,
trans:`我尊重您要最优价。诚实地说：在 [最终价]，我们能保证品牌配件、逐台视频验货、准时交付；再低，就得牺牲点什么——无人机这个行业，牺牲的通常是质量。如果 [最终价] 可以，我今天就锁库存。`,
note:"守底价话术的精髓：不说不让，说「再低就要牺牲质量」——把继续砍价等同于「你愿意接受质量风险」。绝大多数正经客户会在这句话停下。"
},
{
id:"d14", cat:"报价谈判", langs:["EN"],
title:"催单 · 库存/排产理由",
tags:["催单","库存","排产","push"],
body:`Quick note: the factory has [X] units of [model] in stock right now, and their production line is booked for the next [X] days. If we confirm with a deposit today, your order goes out [this week]; after that, lead time extends. I've attached the PI — only the deposit is needed to lock stock and price.`,
trans:`快速提醒：工厂目前 [型号] 现货 [X] 台，产线未来 [X] 天已经排满。今天付定金确认，您的订单 [本周] 就能发出；之后交期会拉长。PI 已附——只需定金即可锁库存锁价格。`,
note:"催单要「真实且可验证」：现货数、排产天数都是硬理由。俄罗斯/中东客户经历过太多「说好有货最后没货」的供应商，用工厂排产细节催单最有效。"
},
{
id:"d15", cat:"报价谈判", langs:["EN"],
title:"催单 · 汇率/运费变动理由",
tags:["催单","汇率","运费","push"],
body:`Two things moving this week: the exchange rate [USD/RMB] shifted [X]%, and freight rates on [route] are rising. Your quote is locked until [date] at today's rate — after that I'll need to re-quote. If you're close to deciding, locking now costs you nothing extra and protects the price.`,
trans:`本周两件事在动：汇率 [美元/人民币] 波动了 [X]%，[航线] 运费也在涨。您的报价按今天汇率锁定到 [日期]——之后我需要重新报价。如果您接近决策，现在锁定不多花一分钱，还能保住价格。`,
note:"汇率+运费催单对俄罗斯客户尤其有效（卢布波动大）。要点：催的是「锁定报价」而不是「赶紧付钱」，客户觉得你在保护他，而不是逼单。"
},
{
id:"d16", cat:"报价谈判", langs:["ZH"],
title:"账期阶梯谈判（内功）",
tags:["账期","阶梯","B端","内功","谈判"],
body:`B 端客户要账期，不要直接拒绝，用阶梯换信任：
首单：100% 或 50% 定金 + 发货前结清（没有合作记录，无法赊销）
第二单起：30% 定金 + 尾款见验货视频
合作 3 单以上且金额稳定：谈 OA 15–30 天，上限=单批货值 × 30%

话术锚点："Payment terms follow trust history — first order proves reliability on both sides, then we open terms step by step."

注意：俄罗斯市场当前环境账期风险高，原则上不赊销，可用「批量锁价」替代账期让步。`,
note:"账期谈判的核心是「用历史换额度」，让客户理解账期是合作资历的奖励而非默认权利。对高风险市场，锁价、备货、专线这些让步比账期安全得多。"
},
{
id:"f01", cat:"付款收款", langs:["EN"],
title:"收款路径菜单（人民币优先引导）",
tags:["付款","收款","人民币","USD","T/T"],
body:`On payment, here's what we accept — in order of preference:
1. T/T in RMB to our China account (fastest, lowest fees);
2. T/T in USD to our USD account;
3. Other compliant routes your finance team uses — tell me what works on your side, and I'll confirm what we can support.

All payments must be transparent and documented — this protects both of us long-term.`,
trans:`关于付款，我们接受的路径（按优先顺序）：1. 人民币电汇到我们国内账户（最快、费用最低）；2. 美元电汇到我们美元账户；3. 贵司财务使用的其他合规路径——告诉我你们那边方便的方式，我确认我们能否支持。所有付款必须透明、有单据——长期看这保护我们双方。`,
note:"收款话术的艺术：把人民币排第一（用「最快、费用最低」引导），把「合规透明」包装成保护客户。俄罗斯客户的付款通道五花八门，先问「你们财务方便什么」再定，永远留弹性。"
},
{
id:"f02", cat:"付款收款", langs:["RU"],
title:"俄罗斯付款 · 灵活但合规",
tags:["付款","俄罗斯","合规","人民币","Русский"],
body:`Понимаю, что с международными платежами из России бывают сложности. Мы гибкие, но работаем только по прозрачным и законным каналам: приоритет — юани (RMB) переводом на наш счёт в Китае, также возможен USD. Скажите, какой способ удобен вашей финансовой службе — и я подтвержу, что мы можем принять. Все платежи должны быть документально подтверждены.`,
trans:`我理解，俄罗斯的国际付款有时会遇到困难。我们灵活，但只走透明合法的通道：优先人民币（RMB）汇到我们中国账户，也支持美元。告诉我贵司财务方便哪种方式——我确认我们能否接收。所有付款必须有单据确认。`,
note:"俄罗斯付款话术三原则：①共情（理解付款难）②灵活但合规（RMB 优先/USD 可谈）③要单据。绝不主动提规避渠道——合规红线，也是你自己的安全线。"
},
{
id:"f03", cat:"付款收款", langs:["EN"],
title:"定金/尾款节奏（按订单类型）",
tags:["付款","定金","尾款","节奏","结构"],
body:`Our payment structure by order type:
• Samples (1–10 pcs): 100% before shipment — factory ships fast, no deposit admin on small orders.
• Bulk orders: [50]% deposit to lock production, balance before handover/shipment — after you receive the video QC.
• Bulk with factory handover: deposit to reserve stock, balance on-site after your inspection at the factory.

Which structure fits your order?`,
trans:`我们按订单类型的付款结构：样品（1–10 台）：发货前 100% 付清——工厂直发快，小单不折腾定金。批量订单：[50]% 定金锁定排产，尾款在交付/发货前结清——也就是您收到视频验货之后。批量到厂交付：定金锁货，工厂现场验收后结清尾款。哪种结构适合您的订单？`,
note:"付款结构跟着交付模式走：小单全款（快），大单定金+验货后尾款（稳），到厂交付现场结清（三方透明）。把选择权给客户的同时，每种结构都保护了你的现金流。"
},
{
id:"f04", cat:"付款收款", langs:["EN"],
title:"客户要求「先发货后付款」的应对",
tags:["付款","先发货","风险","试单","信任"],
body:`I understand the concern — and for a first order, payment before shipment is exactly what protects you: you see the video QC of your exact units before the balance is due. What I can do to reduce risk: start with a small trial order (1–2 pcs) at 100% prepay, and once that arrives clean, we move to deposit/balance terms for the bulk order. Most of our long-term clients started exactly this way.`,
trans:`我理解您的顾虑——其实首单「先款后货」恰恰保护您：尾款到期前，您先看到您这批货的视频验货。我能做的降风险方案：先小单试单（1–2 台）100% 预付，货干净收到后，批量订单我们走定金+尾款。我们大多数长期客户都是这么开始的。`,
note:"「先发货后付款」的应对心法：不直接拒绝，把话题转向「用小单建立信任」。对方真正的顾虑是怕收不到货——用视频验货和小单试错两个方案正面解决，而不是让步账期。"
},
{
id:"f05", cat:"付款收款", langs:["EN"],
title:"汇率锁定与中途改币种",
tags:["汇率","币种","锁定","USD","RMB"],
body:`We quote in both USD and RMB. The exchange rate is fixed on the PI with a validity date — so the number on the PI is exactly what you pay, no surprises. If you prefer to pay in [RMB/USD] for this order, tell me and I'll re-issue the PI at today's rate.`,
trans:`我们美元和人民币都报。汇率在 PI 上锁定并写有效期——PI 上的数字就是您实际要付的数字，没有意外。如果这单您想用 [人民币/美元] 付，告诉我，我按今天的汇率重开 PI。`,
note:"双币种客户最怕汇率损失。话术核心给确定性：「PI 上的数=你付的数」。俄罗斯客户常中途改币种（卢布换汇时机），重开 PI 的效率本身就是竞争力。"
},
{
id:"f06", cat:"付款收款", langs:["EN"],
title:"定金催付话术",
tags:["定金","催付","锁价","PI"],
body:`Just a gentle reminder — to lock today's price and reserve the factory stock, the [50]% deposit ([amount]) is due. I've attached the PI with our account details. Once I see the deposit, I'll start the order the same day and send you the production/sourcing confirmation.`,
trans:`温和提醒——为了锁定今天的价格和工厂库存，需要付 [50]% 定金（[金额]）。PI 和收款账户已附。我收到定金当天启动订单，并给您发排产/采购确认。`,
note:"催定金绑定两个「今天不做就没了」的东西：价格和库存。收定金后的「当天启动+发确认」承诺，让客户感觉钱花出去立刻有回应。"
},
{
id:"f07", cat:"付款收款", langs:["EN"],
title:"尾款催付话术（先发验货视频）",
tags:["尾款","催付","验货","视频"],
body:`Your order [Order #] passed QC — I've attached the inspection video (serial numbers, test flight, packing). The balance of [amount] is due before shipment. Once received, the factory dispatches [today], and I'll send the tracking details to your forwarder / you.`,
trans:`您的订单 [订单号] 已通过质检——验货视频已附（序列号、试飞、装箱）。发货前需要结清尾款 [金额]。收到后工厂 [今天] 发出，我会把物流信息发给您的货代/您。`,
note:"尾款催付的顺序永远是：先给验货视频（安全感）→ 再提尾款 → 给「当天发出」的行动承诺。视频让尾款从「风险」变成「提货前的最后一步」。"
},
{
id:"f08", cat:"付款收款", langs:["ZH"],
title:"付款合规底线（内功）",
tags:["付款","合规","底线","内功"],
body:`1. 所有付款走可追溯通道（对公/对私转账均可），拒绝现金+无凭证交易
2. 拒绝任何「隐藏交易、第三方代付规避、低报金额」要求——这是你自己的法律安全线
3. 俄罗斯客户通道优先序：人民币 T/T > 美元 T/T > 客户提出的其他合规通道
4. 大额订单建议对公账户 + 正式 PI/合同，留痕完整
5. 若客户坚持加密货币：先确认你公司的合规政策与收款工具，不承诺、不引导`,
note:"付款合规不只是法律问题，也是生意问题：一个愿意帮你「藏钱」的客户，也会有一天「藏」你的货。守住底线，客户反而更信任你。"
},
{
id:"g01", cat:"物流发货", langs:["EN"],
title:"物流口径A · 发国内货代（境内交付）",
tags:["物流","货代","境内","EXW","口径"],
body:`For your order, we have two shipping options. Option A: the factory delivers to your freight forwarder's warehouse in China — export, customs, and international shipping are handled by your forwarder. This is the standard for clients who already have their own shipping agent. Please provide your forwarder's address and we'll arrange delivery there.`,
trans:`您的订单有两种发货方案。方案 A：工厂发货到您货代在中国的仓库——出口、报关和国际运输由您的货代处理。这是已有自己货代的客户的标准做法。请提供您货代的地址，我们安排送达。`,
note:"口径 A 的边界必须一次讲清：你的服务终点=中国境内货代仓。用「这是有自己货代客户的标准做法」的说法，让边界听起来像行业惯例而不是推卸。"
},
{
id:"g02", cat:"物流发货", langs:["EN"],
title:"物流口径B · 工厂直发国际（小单）",
tags:["物流","直发","国际快递","时效","专线"],
body:`Option B: for small orders, the factory can ship internationally by express or dedicated line — typically [7–15] days to Russia, [5–10] days to the UAE. Freight is quoted per shipment and paid by you (usually [range] for a [X] kg package). Please note: customs clearance and destination duties are the receiver's responsibility; loose batteries may need a separate channel.`,
trans:`方案 B：小单可由工厂直接国际快递或专线发货——到俄罗斯通常 [7–15] 天，到阿联酋 [5–10] 天。运费按票另报、由您承担（[X] 公斤的包裹通常 [区间]）。请注意：目的国清关和关税由收件方负责；散装电池可能需要单独渠道。`,
note:"直发国际话术三要素：时效（分市场报）、运费（另报+区间）、责任（清关归客户）。把时效报成区间而非承诺，是外贸的老练。"
},
{
id:"g03", cat:"物流发货", langs:["EN"],
title:"时效参考话术（分市场）",
tags:["物流","时效","俄罗斯","阿联酋","转运"],
body:`For reference, current transit times from China: express/air to UAE 5–10 days, to Russia 7–15 days; dedicated land line to Russia 15–25 days (batteries OK); sea is rarely used for small drone orders. Actual time depends on customs at destination, which neither we nor the factory control.`,
trans:`供参考，中国出发的当前时效：快递/空运到阿联酋 5–10 天，到俄罗斯 7–15 天；专线陆运到俄罗斯 15–25 天（可带电池）；无人机小单很少走海运。实际时间取决于目的国清关速度——这既不在我们也不在工厂的控制范围内。`,
note:"时效话术的铁律：给区间+声明「清关不可控」。中东和俄罗斯的清关时长波动大，提前免责能避免 90% 的时效纠纷。"
},
{
id:"g04", cat:"物流发货", langs:["EN"],
title:"运费报价口径",
tags:["运费","报价","体积重","分开发票"],
body:`Freight is charged separately from the product price and quoted per shipment — it depends on weight, volume, and whether batteries are included. For your order of [X] pcs, rough freight is [range] via [express/line]. I'll give you the exact freight once the package is packed and weighed. Product price and freight are invoiced separately for transparency.`,
trans:`运费与货价分开，按票另报——取决于重量、体积和是否含电池。您这批 [X] 台，走 [快递/专线] 的运费大约是 [区间]。打包称重后我给您精确运费。货价和运费分开开票，透明清楚。`,
note:"运费「打包称重后精确报」是行业规矩，也是防止亏运费的关键。货价运费分开开票，避免客户误以为运费包含在报价里。"
},
{
id:"g05", cat:"物流发货", langs:["EN"],
title:"电池空运限制话术",
tags:["电池","空运","UN3480","专线","陆运"],
body:`One shipping note for batteries: loose LiPo batteries (UN3480) can't go by regular air express — they ship via special/land channels, which adds a few days. Batteries inside the drone or packed with it (UN3481) are easier. To keep things simple, batteries are best ordered together with the drone. For battery-only orders, expect [7–15] days via the special channel.`,
trans:`电池发货说明：散装锂电（UN3480）不能走普通空运快递——要走专线/陆运渠道，时效多几天。电池装在机身内或随整机同包（UN3481）更方便。所以电池最好随整机一起订。纯电池订单走专线，预计 [7–15] 天。`,
note:"用 UN 编号讲电池运输，是专业感的巅峰体现。核心商业目的：引导客户「电池随整机买」——既解决运输难题，又提高客单价。"
},
{
id:"g06", cat:"物流发货", langs:["EN"],
title:"清关/关税责任话术",
tags:["清关","关税","责任","海关"],
body:`To be clear on responsibilities: the factory and we handle everything up to dispatch; customs clearance, import duties, and any registration in your country are the receiver's responsibility. If your shipment is held at customs, we'll support with commercial invoice, packing list, and any technical documents — but the clearance process itself runs on your side.`,
trans:`责任明确一下：工厂和我们负责到「发出」为止；贵国的清关、进口关税、以及任何注册手续由收件方负责。如果货被海关扣留，我们会提供商业发票、装箱单和技术文件支持——但清关流程本身在您那边。`,
note:"清关责任必须在发货前讲清并留痕。被扣货时你的角色是「文件支持者」而非「清关承包者」——话术里就把这个位置摆好。"
},
{
id:"g07", cat:"物流发货", langs:["EN"],
title:"延误/丢件/破损应对",
tags:["延误","丢件","破损","索赔","物流"],
body:`[Delay] — I've checked with the carrier: your package is at [status], running about [X] days behind due to [reason]. New ETA is [date]. I'm monitoring it daily and will update you the moment it moves.

[Lost/damaged] — I'm sorry about this. Please send photos of the damage / the carrier's confirmation of loss. For insured shipments, we file the claim together — compensation follows the carrier's process. For damage, the factory will send replacement parts at cost for anything outside the claim.`,
trans:`[延误]——我和承运商查过了：您的包裹状态是 [状态]，因 [原因] 延迟约 [X] 天。新的预计到达是 [日期]。我每天跟进，一动就告诉您。
[丢件/破损]——很抱歉。请发破损照片/承运商的丢失确认。已投保的件我们一起提交索赔——按承运商流程赔付。破损件索赔范围外的部分，工厂按成本价补发配件。`,
note:"延误要主动报（别等客户催），丢件要立刻进入流程。索赔话术的关键词是「一起」——你和客户站同一边，而不是推给承运商。"
}
];
