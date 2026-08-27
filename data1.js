/* 话术数据 1/5：开发破冰 + 询盘诊断（俄/阿/英三语，整段中文译文） */
window.CARDS1 = [
{
id:"e01", cat:"开发破冰", langs:["RU"],
title:"俄语破冰首条（WhatsApp/Telegram）",
tags:["俄语","破冰","WhatsApp","Telegram","俄罗斯","首条消息","Русский"],
body:`Здравствуйте, [Имя]! Меня зовут [Ваше имя]. Мы в Китае работаем напрямую с заводами-производителями FPV-дронов (5/7/10 дюймов) и агродронов. Поставляем комплекты, рамы, моторы, полётные контроллеры, видеопередачу и запчасти. Работаем с дилерами и оптовиками: образцы от 1 шт., доставка со склада завода. Могу отправить актуальный прайс и видео с производства. Какие позиции вам интересны?`,
trans:`您好，[名字]！我叫 [你的名字]。我们在中国直接与 FPV 无人机（5/7/10 寸）和植保机的生产工厂合作。供应套机、机架、电机、飞控、图传和配件。我们与经销商和批发商合作：样品 1 台起，工厂仓发货。我可以发送最新报价单和生产视频。您对哪些产品感兴趣？`,
note:"俄语破冰三要素：①尊称+自我介绍一句；②「中国+工厂直供+产品清单」建立专业感；③「1 台起、工厂发货」消除散单门槛；④开放式问题收尾。对俄罗斯客户用 Вы（您）而非 ты（你），显得正式可靠。"
},
{
id:"e02", cat:"开发破冰", langs:["AR"], rtl:true,
title:"阿拉伯语破冰首条（WhatsApp）",
tags:["阿拉伯语","破冰","WhatsApp","中东","阿联酋","首条消息","عربي"],
body:`السلام عليكم [Name]، أنا [Your Name] من الصين. نعمل مباشرة مع مصانع طائرات FPV بدون طيار (5/7/10 بوصة) وطائرات الرش الزراعي وقطع الغيار. نوفر عينات من قطعة واحدة، والتسليم من المصنع، وأسعار جملة للوكلاء. هل أرسل لكم قائمة الأسعار الحالية وفيديو من المصنع؟ وما المنتجات التي تهمكم؟`,
trans:`您好 [名字]，我是来自中国中国的 [你的名字]。我们直接与 FPV 无人机（5/7/10 寸）、植保无人机和配件的工厂合作。样品 1 台起、工厂发货，面向代理商提供批发价。需要我发送最新价格单和工厂视频吗？您对哪些产品感兴趣？`,
note:"中东客户先用「السلام عليكم」（愿平安与你同在）问候，比直接 Hello 更亲近；强调「工厂直供+批发价+1台起」三个信任点；避免周五和斋月白天发消息。"
},
{
id:"e03", cat:"开发破冰", langs:["EN"],
title:"英文破冰首条",
tags:["破冰","WhatsApp","Telegram","首条消息","英文"],
body:`Hi [Name], this is [Your Name] — we work directly with FPV drone (5/7/10-inch) and agricultural drone factories in China. We supply complete kits, frames, motors, flight controllers, video systems and spare parts, with samples from 1 pc and factory-direct shipping. Can I send you our current price list and a short factory video? What products are you looking for?`,
trans:`嗨 [名字]，我是 [你的名字]——我们直接与中国的 FPV 无人机（5/7/10 寸）和植保机工厂合作。供应套机、机架、电机、飞控、图传和配件，样品 1 台起、工厂直发。我可以把最新价格单和一段工厂短视频发给你吗？你在找什么产品？`,
note:"一句话自我介绍+产品范围+「1台起、工厂直发」散单友好信号+「视频钩子」+开放式问题。视频是 FPV 品类最有效的破冰武器（飞行画面比文字更有说服力）。"
},
{
id:"e04", cat:"开发破冰", langs:["EN"],
title:"群组/社媒破冰（FPV群、进出口群、植保群）",
tags:["群组","社媒","破冰","FPV","植保","Telegram"],
body:`Hi everyone — we're a China-based sourcing team working directly with FPV and agri-drone factories. For anyone importing drones or parts to Russia / the Middle East: we handle factory-direct pricing, video QC before shipping, and samples from 1 pc. If you need a specific model (5/7/10-inch FPV, frames, motors, VTX, spray systems), drop me a message — I'll reply with specs and price the same day.`,
trans:`大家好——我们是中国的采购团队，直接与 FPV 和植保机工厂合作。面向俄罗斯/中东进口无人机或配件的朋友：我们提供工厂直供价、发货前视频验货、1 台起样品。如果你需要具体型号（5/7/10 寸 FPV、机架、电机、图传、喷洒系统），私信我——当天回复参数和价格。`,
note:"群组（FPV 玩家群、无人机进出口群、植保群）破冰：不要硬发广告链接，用「价值清单+当天回复」的承诺吸引私信；一个群里发一次即可，别刷屏。"
},
{
id:"e05", cat:"开发破冰", langs:["EN"],
title:"LinkedIn 私信 · B端经销商",
tags:["LinkedIn","经销商","B端","私信","开发"],
body:`Hi [Name], I came across your company — I see you distribute [drones / agri equipment] in [Russia / UAE]. We work directly with China FPV and agricultural drone factories, handling OEM branding, stable spare-parts supply, and factory-direct pricing for wholesalers. Would you be open to a short call or a price list for the models you currently move?`,
trans:`嗨 [名字]，我看到了贵公司——注意到你们在[俄罗斯/阿联酋]经销[无人机/农业设备]。我们直接与中国 FPV 和植保机工厂合作，可做 OEM 贴牌、稳定配件供应，为批发商提供工厂直供价。您是否愿意简单通个电话，或者让我发一份你们目前在售型号的价格单？`,
note:"B端破冰要「点名对方业务」证明你做过功课；抛出的钩子是批发商最关心的三件事：OEM、配件供应稳定性、工厂价。结尾二选一（电话/价格单）降低回复门槛。"
},
{
id:"e06", cat:"开发破冰", langs:["EN"],
title:"经销商定向开发信",
tags:["开发信","经销商","B端","邮件","Cold Email"],
body:`Dear [Name],

We are a China-based sourcing partner for FPV drones (5/7/10-inch) and agricultural spray drones, working directly with mid-size factories.

What we offer to distributors:
• Complete kits (RTF/BnF/PNP), frames, motors, ESCs, flight controllers, VTX and spare parts;
• OEM branding (logo, color, packaging) with flexible MOQ;
• Samples from 1 pc; bulk orders can be handed over at the factory with your own inspection;
• Factory-direct pricing and stable parts supply for repeat orders.

If you are expanding your drone line for [Russia / GCC], I would be glad to send our catalog and distributor pricing.

May I ask which categories you currently import?

Best regards,
[Your Name] | China | [WhatsApp/Telegram]`,
trans:`尊敬的 [名字]：我们是中国的采购伙伴，专注 FPV 无人机（5/7/10 寸）和植保无人机，直接与中型工厂合作。我们为经销商提供：套机（RTF/BnF/PNP）、机架、电机、电调、飞控、图传与配件；OEM 贴牌（logo、配色、包装）起订量灵活；样品 1 台起，批量可到厂验收交货；工厂直供价 + 复购配件稳定供应。如果您正在为[俄罗斯/海湾]市场扩充无人机产品线，我很乐意发送目录和经销商价格。请问您目前进口哪些品类？`,
note:"对经销商的开发信结构：你是谁 → 你能给经销商什么（逐条列价值）→ 你希望客户做什么。B端信里出现 RTF/BnF/PNP、OEM、MOQ 这些术语本身就是专业筛选器。"
},
{
id:"e07", cat:"开发破冰", langs:["EN"],
title:"跟进① · 已读未回（视频钩子）",
tags:["跟进","已读未回","视频","follow up"],
body:`Hi [Name], just following up. I know there are a lot of suppliers in China — one thing that separates us: we only work with factories we've inspected, and we do a video QC of your exact order (serial numbers, packing) before shipping. Here's a 30-second clip from a recent FPV order [attach video]. If you tell me the models you're interested in, I'll send today's factory price.`,
trans:`嗨 [名字]，跟进一下。我知道中国供应商很多——我们不一样的一点是：只跟实地验过厂的工厂合作，而且发货前会对你这一单做视频验货（序列号、装箱）。附上一段最近 FPV 订单的 30 秒视频 [附视频]。你告诉我感兴趣的型号，我把今天工厂价发你。`,
note:"已读未回第一波跟进别催单，发「差异化证据」：一条真实验货视频的杀伤力远超十段文字。视频里要有：装机画面、测试飞行、装箱过程。"
},
{
id:"e08", cat:"开发破冰", langs:["EN"],
title:"跟进② · 痛点三选一",
tags:["跟进","痛点","经销商","follow up"],
body:`Hi [Name], quick question — when you source drones from China, what's your biggest headache: (1) prices that jump around, (2) quality that varies from batch to batch, or (3) spare parts that are hard to get later? We built our process around fixing all three for distributors. Curious which one matters most to you.`,
trans:`嗨 [名字]，一个小问题——你们从中国采购无人机时，最头疼的是哪点：(1) 价格忽高忽低，(2) 每批质量不稳定，还是 (3) 后期配件难买？我们的流程就是围绕解决经销商这三个痛点设计的。好奇哪一点对你们最重要。`,
note:"第二波跟进用「痛点三选一」问题代替推销：客户只要回一个数字，你就知道他的核心诉求，后续话术对准打。答(1)打价格稳定性，答(2)打验货流程，答(3)打配件管道。"
},
{
id:"e09", cat:"开发破冰", langs:["EN"],
title:"跟进③ · 放弃式挽回",
tags:["跟进","挽回","体面退场","follow up"],
body:`Hi [Name], I'll leave you in peace after this. Just one line for your records: we do factory-direct FPV/agri-drone supply from China, samples from 1 pc, video QC before every shipment, and distributor pricing. If anything changes on your side — new projects, new models — I'm one message away.`,
trans:`嗨 [名字]，这是最后一条打扰了。留一句话给您备档：我们做中国工厂直供的 FPV/植保机，样品 1 台起，每单发货前视频验货，经销商价格。如果你们那边有变化——新项目、新机型——随时一条消息就能找到我。`,
note:"第三波用「体面退场」话术：客户不回也不丢人，反而显得专业不纠缠。很多客户会在几个月后带着真实询盘回来。发完这波就停，转月度价值触达。"
},
{
id:"e10", cat:"开发破冰", langs:["AR"], rtl:true,
title:"斋月/节日问候（中东关系维护）",
tags:["斋月","开斋节","问候","中东","关系维护","Ramadan"],
body:`رمضان كريم! نتمنى لكم شهراً مباركاً. — فريق [Your Company]

(English: Ramadan Kareem! Wishing you a blessed month. — [Your Company] team)`,
trans:`斋月吉庆！祝您度过一个吉庆的月份。——[贵公司] 团队`,
note:"中东客户关系维护三件套：斋月（开斋前后发问候，白天不催单）、开斋节（Eid Mubarak）、周五（避免当天谈生意催进度）。一句话问候就能让客户记住你，成本为零。"
},
{
id:"e11", cat:"开发破冰", langs:["ZH"],
title:"破冰三秒法则（内功）",
tags:["破冰","三秒法则","心法","内功"],
body:`客户看首条消息只有 3 秒，决定是否回复。三条铁律：
1. 一句话说清你是谁（China factory-direct supplier）；
2. 一句话说清对他有什么用（samples from 1pc / distributor price / video QC）；
3. 一个只用一个词就能回答的问题（"Which models?" 而非 "Could you tell me your requirements in detail?"）。

反面教材：首条就甩 PDF 报价单 / 问 5 个问题 / 用「Dear Sir, We are a professional manufacturer...」套话开头——回复率趋近于零。`,
note:"破冰的成败 80% 在首条消息。写完后自己念一遍：3 秒内能读到「你是谁+对我有什么用+怎么回复」就算合格。"
},
{
id:"e12", cat:"开发破冰", langs:["ZH"],
title:"开发节奏与触达日历（内功）",
tags:["开发","节奏","触达","日历","内功"],
body:`第 1 天：破冰/开发信（含 1 个低门槛问题）
第 2–3 天：价值补充（热销型号工厂价 + 30 秒验货视频）
第 5–7 天：痛点三选一问题
第 14 天：库存/价格变动软提示
之后每月 1 次：新品发布、配件到货、行业新闻

按市场节奏额外触达：
• 中东：斋月问候、开斋节问候；
• 俄罗斯：3–4 月植保备货季、10 月雪季前提醒配件；
• 通用：客户国家节假日前 2 周提醒下单（节日期间物流慢）。`,
note:"开发是「节奏感」生意：不催、不断、每月有价值地出现一次。全年 52 周，每客户至少 20 个触达点，成交只是时间问题。"
},
{
id:"e13", cat:"开发破冰", langs:["ZH"],
title:"客户画像深版（俄罗斯/中东）",
tags:["客户画像","俄罗斯","中东","痛点","卖点顺序"],
body:`俄罗斯客户：
• 典型：FPV 玩家群体/俱乐部、植保服务商、无人机经销商、安防公司
• 痛点：制裁导致供应与支付受限，最怕「断供+收不到货+钱打不过去」
• 心理：价格敏感但更重可靠；倾向小额多批试单；重长期关系
• 沟通：直接、逻辑、给数据；俄语开场回复率×2
• 关键卖点顺序：供货稳定 → 视频验货 → 付款方式 → 价格

中东客户（阿联酋为主）：
• 典型：经销商、农业项目公司、政府项目集成商、FPV 玩家
• 痛点：高温沙尘环境、假货泛滥、售后配件难、认证（阿联酋无人机需注册）
• 心理：重关系与信任、重验货、对「工厂直供」敏感
• 沟通：礼貌、耐心、先建关系再谈钱；注意斋月、周五
• 关键卖点顺序：正品验货 → 配件售后 → 价格 → 关系维护`,
note:"同一个产品，两个市场的话术顺序完全不同——俄罗斯先讲「稳」，中东先讲「真」。这是整套话术库的底层逻辑。"
},
{
id:"e14", cat:"开发破冰", langs:["ZH"],
title:"俄语沟通要点（内功）",
tags:["俄语","沟通要点","俄罗斯","时差","内功"],
body:`1. 用 Вы（您）称呼，忌用 ты（你）；首次联系全名+公司名。
2. 俄语客户习惯直接切入正题，寒暄一句即可，别长篇客套。
3. 数字要具体：交期、价格、运费都报具体数，含糊其辞会被认为不专业。
4. 时差：莫斯科 UTC+3，比北京晚 5 小时；北京时间 14:00–22:00 是对接窗口。
5. 俄罗斯节假日：1 月新年（1–10 日）、5 月胜利日假期长，提前 3 周催单。
6. 付款受阻是常态，别催「怎么还没付」，改问「哪个付款方式对你们最方便」。`,
note:"俄罗斯市场当前最大的成交障碍是付款和物流，不是价格。话术永远先解决「怎么付、怎么发」，再谈价格。"
},
{
id:"q01", cat:"询盘诊断", langs:["EN"],
title:"首询盘回复 · 三连问（英文）",
tags:["询盘","首回复","提问","报价","inquiry"],
body:`Thanks for your inquiry — this is [Your Name]. To give you an exact factory price (not a generic one), please confirm:
1. Which model/size? (e.g. 5-inch FPV, 7-inch long-range, 10-inch, agricultural spray drone)
2. Quantity — samples (1–10 pcs) or bulk?
3. Complete kits or parts (frame, motors, flight controller, VTX)?

Meanwhile, our standard terms: factory-direct price, video QC before shipping, samples from 1 pc, bulk orders can be handed over at the factory. Once you confirm the above, I'll reply with price and lead time the same day.`,
trans:`感谢询价——我是 [你的名字]。为了给您准确的工厂价（而不是笼统报价），请确认：1. 哪个型号/尺寸？（如 5 寸 FPV、7 寸远航、10 寸、植保机）2. 数量——样品（1–10 台）还是批量？3. 整机套机还是配件（机架、电机、飞控、图传）？同时说明我们的标准条款：工厂直供价、发货前视频验货、样品 1 台起、批量可到厂验收交付。您确认以上信息后，我当天回复价格和交期。`,
note:"询盘黄金法则：先问「型号+数量+整机还是配件」三件事再报价。这三个答案直接决定报价结构（整机价/配件价/阶梯价），问完再报，专业且高效。"
},
{
id:"q02", cat:"询盘诊断", langs:["RU"],
title:"首询盘回复 · 俄语",
tags:["询盘","俄语","首回复","Русский"],
body:`Спасибо за запрос! Я [Ваше имя]. Чтобы дать точную заводскую цену, уточните: 1) модель/размер (5/7/10 дюймов, агродрон), 2) количество — образцы или опт, 3) комплект или запчасти (рама, моторы, контроллер, видеопередача). Условия: цена от завода, видео-проверка перед отправкой, образцы от 1 шт. После вашего ответа — цена и срок в тот же день.`,
trans:`感谢询价！我是 [你的名字]。为了给出准确的工厂价，请确认：1）型号/尺寸（5/7/10 寸、植保机），2）数量——样品还是批发，3）套机还是配件（机架、电机、飞控、图传）。条款：工厂直供价、发货前视频验货、样品 1 台起。收到您的回复后，当天给出价格和交期。`
},
{
id:"q03", cat:"询盘诊断", langs:["AR"], rtl:true,
title:"首询盘回复 · 阿拉伯语",
tags:["询盘","阿拉伯语","首回复","عربي"],
body:`شكراً على استفساركم! أنا [Your Name]. لإعطائكم سعر المصنع الدقيق، يرجى تأكيد: 1) الموديل/الحجم (5/7/10 بوصة، طائرة رش زراعي)، 2) الكمية — عينات أم جملة، 3) طقم كامل أم قطع (هيكل، محركات، متحكم طيران، إرسال فيديو). شروطنا: سعر المصنع، فحص بالفيديو قبل الشحن، عينات من قطعة واحدة. بعد تأكيدكم، أرسل السعر ومدة التسليم في نفس اليوم.`,
trans:`感谢您的询价！我是 [你的名字]。为了给出准确的工厂价，请确认：1）型号/尺寸（5/7/10 寸、植保无人机），2）数量——样品还是批发，3）整机套件还是配件（机架、电机、飞控、图传）。我们的条款：工厂直供价、发货前视频验货、样品 1 台起。您确认后，我当天发送价格和交期。`
},
{
id:"q04", cat:"询盘诊断", langs:["EN"],
title:"散单/FPV玩家提问集",
tags:["FPV","散单","玩家","提问","诊断"],
body:`1. What size do you fly — 5-inch freestyle, 7-inch long-range, or smaller?
2. Analog or digital video system? (analog 5.8G / Walksnail / HDZero / DJI O3-compatible)
3. Do you want a BnF (bind-and-fly) kit, or just the frame/parts to build yourself?
4. 4S or 6S battery setup?
5. One unit to test first, or a few for your group?

If it's for a group/community, we can do a small batch price even at 3–5 pcs.`,
trans:`1. 你飞什么尺寸——5 寸花飞、7 寸远航，还是更小的？2. 模拟还是数字图传？（模拟 5.8G / Walksnail / HDZero / 兼容大疆 O3）3. 要 BnF（到手对频即飞）套机，还是只要机架/配件自己装？4. 4S 还是 6S 电池方案？5. 先买一台测试，还是给团队买几台？——如果是给玩家群体/俱乐部采购，3–5 台我们就能按小批量价。`,
note:"对 FPV 玩家问这 5 个问题，对方立刻知道你懂行（尺寸/图传制式/BnF/电池节数是 FPV 圈的行话）。散单客户最怕跟「不懂无人机的人」聊，用术语建立信任后再报价，转化率完全不同。"
},
{
id:"q05", cat:"询盘诊断", langs:["EN"],
title:"植保队提问集",
tags:["植保","提问","诊断","农业","配件"],
body:`1. What crops and total area do you spray? (tells me the right tank size)
2. Flat fields or hilly/orchard terrain? (decides terrain-following radar)
3. Spraying only, or also spreading granules/seeds?
4. How many units do you plan to start with, and do you need spare batteries/nozzles/pumps?
5. Have you used any spray drone before, or is this your first one?

If this is your first machine, I'll include a recommended spare-parts kit (nozzles, pump, propellers) so you're never grounded mid-season.`,
trans:`1. 你们喷洒什么作物、总面积多少？（决定载药量）2. 平地还是丘陵/果园？（决定要不要地形跟随雷达）3. 只喷洒还是也要播撒颗粒/种子？4. 计划先上几台？需要备用电池/喷头/水泵吗？5. 以前用过植保机吗，还是第一台？——如果是第一台，我会建议配一套易损件（喷头、水泵、桨叶），保证作业季不趴窝。`,
note:"植保客户提问落点：面积→载药量，地形→雷达，第一台→配件包。第 5 问把「新客户」变成「卖配件包」的机会，同时显得你为他的作业季着想。"
},
{
id:"q06", cat:"询盘诊断", langs:["EN"],
title:"B端经销商提问集",
tags:["B端","经销商","提问","诊断","OEM","阶梯价"],
body:`1. Which market do you serve, and which models sell best for you now?
2. What's your expected monthly volume per model? (this decides your tier pricing)
3. Do you need OEM branding (logo, color, packaging)? If yes, what's your MOQ expectation?
4. Do you need a spare-parts program (motors, props, batteries, ESCs) alongside the units?
5. Any local certification or documentation your buyers require (CE/FCC/EAC, user manuals)?

With these five answers I can build you a distributor proposal — tier pricing, OEM options, and parts supply plan — usually within one day.`,
trans:`1. 你们服务哪个市场？目前哪几款卖得最好？2. 每个型号预期月销量多少？（决定你的阶梯价格）3. 需要 OEM 贴牌吗（logo、配色、包装）？你们的起订量预期是多少？4. 需要随整机配套的配件方案吗（电机、桨叶、电池、电调）？5. 当地买家有没有认证或文件要求（CE/FCC/EAC、说明书）？——有了这五个答案，我一天内给您做一份经销商方案：阶梯价格 + OEM 选项 + 配件供应计划。`,
note:"B端提问=替客户做采购方案的前奏。「一天内出方案」的承诺是经销商最受用的下一步。阶梯价格和 OEM 是经销商话术的两大关键词，反复出现。"
},
{
id:"q07", cat:"询盘诊断", langs:["ZH"],
title:"B端潜质7信号（判断客户层级）",
tags:["B端","信号","判断","样品放价","内功"],
body:`散单客户里藏着未来的大客户，以下 7 个信号出现 2 个以上，按 B 端对待（样品可直接给批发价）：
1. 报出公司名、网站或社媒主页
2. 问 MOQ、问年采购量、问阶梯价
3. 问 OEM/贴牌/定制包装
4. 问账期、要正式 PI、要发票
5. 自称 distributor / wholesaler / dealer / reseller
6. 一次性问多型号、多品类（整机+配件+电池）
7. 问认证（CE/FCC/EAC/G-Mark）或当地售后体系

反面信号（散单玩家特征）：只问单台价、问颜色好不好看、问能不能便宜 10 美金、不关心发票单据。`,
note:"你的策略「样品默认加价、识别到 B 端潜质再放价」的执行关键就是这张清单。建议存下来，每次询盘对照一遍再报价。"
},
{
id:"q08", cat:"询盘诊断", langs:["EN"],
title:"只问价格 · 英文深版（区间价+反抛）",
tags:["只问价","价格","区间价","反抛","比价"],
body:`Happy to help. To avoid giving you a wrong number: the same 5-inch drone can range from [low] to [high] depending on the flight controller, ESC, motors, and video system. So I'll give you a range first: for a standard 5-inch freestyle BnF kit with [F722 FC, 45A ESC, 2306 motors, analog VTX], the factory price is roughly [range]. If you tell me your use case and quantity, I'll lock an exact quote you can actually compare — same configuration, same terms.`,
trans:`很乐意帮忙。为了避免给您一个不准的数字：同一台 5 寸机，配不同的飞控、电调、电机和图传，价格能从 [低] 到 [高] 差出很多。所以先给您一个区间：标准 5 寸花飞 BnF 套机（F722 飞控、45A 电调、2306 电机、模拟图传），工厂价大约在 [区间]。您告诉我用途和数量，我给您一个可以真正比价的精确报价——同样配置、同样条款。`,
note:"「只问价格」应对的深版打法：①先承认报价复杂性（不同配置价差大）；②给一个「具体配置+价格区间」证明你不是在回避；③反抛「用途+数量」换精确报价。给区间价比一口价高明——留了谈判空间，也展示了专业。"
},
{
id:"q09", cat:"询盘诊断", langs:["RU"],
title:"只问价格 · 俄语",
tags:["只问价","价格","俄语","Русский"],
body:`С удовольствием помогу. Чтобы не дать неверную цифру: один и тот же 5-дюймовый дрон стоит по-разному в зависимости от контроллера, регуляторов, моторов и видеосистемы. Ориентир: стандартный 5" комплект BnF (F722, ESC 45A, моторы 2306, аналоговая видеопередача) — заводская цена примерно [диапазон]. Скажите вашу задачу и количество — дам точную цену для честного сравнения.`,
trans:`很乐意帮忙。为了不给错数字：同一台 5 寸机，飞控、电调、电机和图传不同，价格就不同。参考：标准 5 寸 BnF 套机（F722、45A 电调、2306 电机、模拟图传）的工厂价大约在 [区间]。告诉我您的用途和数量——我给出可公平比价的精确报价。`
},
{
id:"q10", cat:"询盘诊断", langs:["AR"], rtl:true,
title:"只问价格 · 阿拉伯语",
tags:["只问价","价格","阿拉伯语","عربي"],
body:`بكل سرور. حتى لا أعطيكم رقماً غير دقيق: نفس طائرة 5 بوصة يختلف سعرها حسب متحكم الطيران والمحركات ونظام الفيديو. لذلك سأعطيكم نطاقاً أولاً: طقم 5 بوصة قياسي BnF (متحكم F722، ESC 45A، محركات 2306، فيديو تناظري) بسعر مصنع حوالي [النطاق]. أخبروني بالاستخدام والكمية وسأثبّت لكم سعراً دقيقاً قابل للمقارنة — نفس التجهيزات ونفس الشروط.`,
trans:`很乐意。为了不给您一个不准的数字：同一台 5 寸机，飞控、电机和图传不同，价格就不同。所以我先给您一个区间：标准 5 寸 BnF 套机（F722 飞控、45A 电调、2306 电机、模拟图传）的工厂价约 [区间]。告诉我用途和数量，我给您一个可公平比价的精确报价——相同配置、相同条款。`
},
{
id:"q11", cat:"询盘诊断", langs:["EN"],
title:"需求确认后的收口话术",
tags:["收口","确认","需求","下一步"],
body:`Perfect, that's clear. To summarize:
• Model/size: [X]
• Qty: [X] (samples / bulk)
• Kit or parts: [X]
• Video system: [analog / digital]

I'll now confirm today's factory price, lead time, and shipping options, and come back within [time]. If anything changes on your side, just tell me.

One more thing — for your order I'll do a video QC before shipping (serial numbers, assembly, test flight). Would you like to receive it on WhatsApp/Telegram?`,
trans:`很好，清楚了。总结一下：型号/尺寸：[X]；数量：[X]（样品/批量）；套机或配件：[X]；图传：[模拟/数字]。我现在就去确认今天的工厂价、交期和发货方案，[时间] 内回复您。您那边有变化随时告诉我。——另外，发货前我会给您的订单做视频验货（序列号、装机、试飞）。视频发您 WhatsApp/Telegram 可以吗？`,
note:"收口=复述需求+承诺下一步+埋伏验货钩子。复述需求防止后期「我说的是另一款」的扯皮；验货钩子给客户「钱花得踏实」的预期，也是尾款催收的伏笔。"
},
{
id:"q12", cat:"询盘诊断", langs:["ZH"],
title:"客户质量判断表（分配精力）",
tags:["判断","客户质量","内部","信号"],
body:`✅ 报型号+数量+用途 → 高意向懂行 → 快速精准报价 + 主动提验货
⚠️ 只问价不给信息 → 比价/新手 → 给区间价 + 反抛用途数量
⚠️ 反复问能否直发境外/清关 → 注意口径：小单工厂直发、大单境内交付，讲清楚
🚫 问军事/武器/改装/规避管制 → 红线，礼貌拒绝（见「合规红线」分类）
⚠️ 批发大单但信息含糊 → 压价或钓鱼 → 坚持「工厂价+验货+先款后货」
⭐ 出现 B 端 7 信号 → 切换 B 端话术 + 样品放价（见「B端潜质7信号」）`,
note:"客户问的每一句话都是信号。这张表建议打印贴工位——报价前 10 秒对照一遍，能帮你把精力花在真正的客户身上。"
}
];
