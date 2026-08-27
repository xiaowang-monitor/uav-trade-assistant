/* 话术数据 6/6：客户高频问答速答 + 转化跟进（厂家/外贸/客户三视角补缺） */
window.CARDS6 = [
{
id:"faq_factory", cat:"高频问答", langs:["EN"],
title:"高频问答 · 你们是工厂还是贸易商？",
tags:["高频问答","工厂","贸易商","身份","信任"],
body:`We work directly with several drone factories as a sourcing and QC partner — we don't own the factories, but we manage production quality, configuration, inspection and handover on your behalf. That's how we give you factory-direct pricing while staying accountable to you. If you'd like, I can show you the factory floor and our inspection process on a live video call.`,
trans:`我们直接与多家无人机工厂合作，作为采购与质检伙伴——工厂不是我们自己开的，但我们替您把控生产质量、配置、验货和交付。所以我们既能给到工厂直供价，又对您负责。您愿意的话，我可以视频连线带您看工厂产线和我们的质检流程。`,
note:"客户问身份时的标准答法：不撒谎、不贬低「贸易/代采」身份，把重点转到「工厂直供价 + 对你负责 + 可视频看厂」三个信任点。"
},
{
id:"faq_custom", cat:"高频问答", langs:["EN"],
title:"高频问答 · 能按我的配置定制吗？",
tags:["高频问答","定制","选配","飞控","电机","图传"],
body:`Yes. On FPV builds you can choose the flight controller (F405/F722/H743), ESC rating, motors (size/KV), video system (analog / Walksnail / HDZero / DJI O3-compatible), receiver and battery connector. Tell me your flying style and budget, and I'll put together the best combo — then quote it as one package.`,
trans:`可以。FPV 机型上，飞控（F405/F722/H743）、电调规格、电机（尺寸/KV）、图传（模拟/Walksnail/HDZero/兼容大疆 O3）、接收机、电池接口都可以按您选。告诉我您的飞行风格和预算，我帮您配出最优组合，再整体报价。`,
note:"客户问定制时的要点：先给「可选项清单」证明灵活，再用「风格+预算→组合→整体报价」三步收口，把定制变成成交动作。"
},
{
id:"faq_testvideo", cat:"高频问答", langs:["EN"],
title:"高频问答 · 有没有试飞/工厂视频？",
tags:["高频问答","试飞","视频","工厂","眼见为实"],
body:`Yes — I'll send you a test-flight video of the exact model you're ordering (takeoff, hover, flight, landing), plus a short clip of the factory floor and packaging. If you want, we can also do a live video call so you watch the test flight and the packing of your own order in real time.`,
trans:`可以——我会发您所订型号的试飞视频（起飞、悬停、飞行、降落），再配一段工厂产线和打包的短视频。您想更放心的话，我们还能视频连线，让您实时看您这单的试飞和装箱。`,
note:"「眼见为实」是打消跨境顾虑最有效的招。试飞视频 + 工厂视频 + 实时连线三级递进，客户放心度逐级上升。"
},
{
id:"faq_reference", cat:"高频问答", langs:["EN"],
title:"高频问答 · 有客户案例/背书吗？",
tags:["高频问答","案例","背书","信任","references"],
body:`We work with distributors and buyers in Russia and the Middle East. For privacy we don't publish client names, but I can share: recent order summaries (model, quantity, market), and the kind of repeat parts orders we fulfill. What I can't share are client contacts — same as we'd protect yours.`,
trans:`我们与俄罗斯和中东的经销商、买家有合作。出于隐私，我们不公开客户名单，但可以分享：最近的订单概况（型号、数量、市场），以及我们持续供应的配件复购情况。客户联系方式不能给——就像我们同样会保护您的信息一样。`,
note:"被要案例时的平衡：既给「证据感」（订单概况/复购情况），又守住「保密」——反而显得更专业可信。"
},
{
id:"faq_training", cat:"高频问答", langs:["EN"],
title:"高频问答 · 怎么学飞？有培训吗？",
tags:["高频问答","培训","上手","教程"],
body:`For most models we include a quick-start guide, and for FPV I can share recommended simulator setup (free sims work with your radio) plus setup/tuning video guides. For agricultural drones, the factory provides operation videos and basic field training materials. Bulk orders can include on-site or remote training — tell me your team size and I'll propose an option.`,
trans:`多数机型随附快速入门指南；FPV 我可以推荐免费的模拟器练手（用你的遥控就能连），再加调参/装机视频教程。植保机工厂提供操作视频和基础田间培训资料。批量订单可以安排现场或远程培训——告诉我团队人数，我给您方案。`,
note:"培训话术的作用：降低新手客户的下单门槛（怕不会飞），同时把「培训」做成批量单的增值卖点。"
},
{
id:"faq_ddp", cat:"高频问答", langs:["EN"],
title:"高频问答 · 能 DDP 门到门吗？",
tags:["高频问答","DDP","门到门","清关","关税","物流"],
body:`Our standard is EXW / factory dispatch — you arrange shipping and customs. For small orders the factory can ship by express/dedicated line, but DDP (delivered duty paid to your door) is handled by a forwarder, not us, because we don't control destination customs. If you need door-to-door, I can recommend the type of forwarder to use and support with all documents — but the DDP leg stays with your agent.`,
trans:`我们的标准是 EXW/工厂发货——运输和清关由您安排。小单工厂可以走快递/专线，但 DDP（含税门到门）是货代做的，不是我们，因为目的国清关我们控制不了。如果您要门到门，我可以推荐合适的货代类型并配合全部单据——但 DDP 这一段仍由您的货代负责。`,
note:"DDP 是客户高频需求。话术要点：①明确我们不做 DDP（清关不可控）②给替代路径（推荐货代+配合单据）③不把话说死，留「配合」余地。"
},
{
id:"faq_payment", cat:"高频问答", langs:["EN"],
title:"高频问答 · 付款方式（含 USDT/卡）",
tags:["高频问答","付款","USDT","PayPal","信用卡"],
body:`We accept T/T in RMB or USD (RMB is fastest and lowest fee). If your finance team prefers another documented channel — bank transfer, or a compliant platform — tell me what works on your side and I'll confirm what we can accept. All payments must be transparent and traceable; that's what keeps both of us safe long-term.`,
trans:`我们接受人民币或美元电汇（人民币最快、费用最低）。如果贵司财务偏好其他有单据的通道——银行转账或合规平台——告诉我你们方便的方式，我确认我们能接收的。所有付款必须透明、可追溯；这是对双方长期的保护。`,
note:"付款话术给「人民币优先」的引导，但把「合规、可追溯」包装成保护客户。不主动提 USDT，客户坚持时按公司合规政策判断，不做承诺。"
},
{
id:"faq_ru_quick", cat:"高频问答", langs:["RU"],
title:"俄语高频速答（3 问）",
tags:["俄语","高频问答","Русский","快速回复"],
body:`1) Минимальный заказ? — Стандартные модели от 1 шт., OEM от [X] шт.
2) Сколько доставка в Россию? — Экспресс 7–15 дней, наземная линия 15–25 дней (с батареями). Таможня — на вашей стороне.
3) Оплата? — Приоритет юани (RMB) на наш счёт, также USD. Все платежи прозрачные и документальные.`,
trans:`1) 起订量？——标准机型 1 台起，OEM 从 [X] 台起。
2) 到俄罗斯要多久？——快递 7–15 天，陆运专线 15–25 天（可带电池）。清关由你们负责。
3) 怎么付款？——优先人民币汇到我们账户，也支持美元。所有付款透明、有单据。`,
note:"俄语客户要的是「快、直接、给数字」的速答。把最高频三问（起订/时效/付款）做成一段可直接复制的俄语，回复效率翻倍。"
},
{
id:"faq_ar_quick", cat:"高频问答", langs:["AR"], rtl:true,
title:"阿语高频速答（3 问）",
tags:["阿拉伯语","高频问答","عربي","快速回复"],
body:`1) الحد الأدنى للطلب؟ — الموديلات القياسية من قطعة واحدة، وOEM من [X] قطعة.
2) كم تستغرق الشحنة إلى الإمارات؟ — الشحن السريع 5–10 أيام، والتخليص الجمركي مسؤوليتكم.
3) الدفع؟ — الأولوية باليوان (RMB) إلى حسابنا، وأيضاً بالدولار. جميع المدفوعات شفافة وموثقة.`,
trans:`1) 起订量？——标准机型 1 台起，OEM 从 [X] 台起。
2) 到阿联酋要多久？——快递 5–10 天，清关由你们负责。
3) 怎么付款？——优先人民币汇到我们账户，也支持美元。所有付款透明、有单据。`,
note:"中东客户同样要「快+给数字」的速答。阿语一段式速答，针对阿联酋市场（起订/时效/付款）。"
},
{
id:"conv_sample2bulk", cat:"报价谈判", langs:["EN"],
title:"样品转批量 · 收到样品后的跟进",
tags:["样品","批量","转化","跟进","复购"],
body:`Hi [Name], how's the sample performing? If it's meeting expectations, here's what I suggest for your first bulk order: [X] pcs at [bulk price], and I'll lock today's price for 30 days + include a spare-parts kit (props, motor set) so your first batch is covered. Many distributors start with [X] pcs — shall I prepare the bulk PI?`,
trans:`嗨 [名字]，样品用下来怎么样？如果符合预期，我建议首个批量订单这样：[X] 台按 [批量价]，我给您锁价 30 天 + 附赠一套备件（桨叶、电机组），让首批有保障。很多经销商首批就是 [X] 台——要我准备批量 PI 吗？`,
note:"样品收到后是转化黄金期：先问体验，再给「批量价+锁价+备件」三重钩子，最后用「很多经销商首批X台」的从众心理推动下单。"
},
{
id:"conv_after_sample", cat:"报价谈判", langs:["EN"],
title:"样品满意后 · 催批量话术",
tags:["样品","催单","批量","跟进"],
body:`Glad the sample is working for you. Two things worth doing before [date]: (1) the factory has [X] units in stock now — after that, lead time extends; (2) your bulk price is locked at [price] until [date]. If you confirm the deposit this week, I'll prioritize your production slot. Want me to send the bulk order summary for your approval?`,
trans:`很高兴样品对您有用。[日期] 前有两件事值得做：(1) 工厂现在有 [X] 台现货，之后交期会拉长；(2) 您的批量价 [价格] 锁定到 [日期]。本周确认定金，我优先给您排产。需要我发一份批量订单汇总给您确认吗？`,
note:"样品满意后的催单用「现货+锁价+排产优先」三个真实理由，落脚到「发订单汇总」这个低门槛动作。"
},
{
id:"faq_warranty_flow", cat:"高频问答", langs:["EN"],
title:"高频问答 · 保修到底怎么走？",
tags:["高频问答","保修","返修","售后","流程"],
body:`Here's the full flow so there are no surprises: (1) send a short video of the issue + serial number; (2) we diagnose with the factory engineer — most FPV issues are fixed by a spare part we ship with a repair guide; (3) if it must return to the factory, you ship to our China address, we handle repair and ship back. Warranty is [3–12] months on electronics (crash damage excluded, which is standard in FPV).`,
trans:`完整流程提前讲清，避免误会：(1) 发一段问题视频+序列号；(2) 我们和工厂工程师诊断——多数 FPV 问题靠寄配件+维修指导就能解决；(3) 必须返厂的话，您寄到我们中国地址，我们处理维修并寄回。电子件保修 [3–12] 个月（炸机损坏除外，这是 FPV 惯例）。`,
note:"保修话术的关键是「把流程讲成三步，让客户觉得可控」，并提前声明「炸机不保」这个 FPV 惯例，避免后期纠纷。"
}
];
