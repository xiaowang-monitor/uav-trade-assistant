/* 话术数据 5/5：大单来华·防绕单 + 售后复购 + 异议FAQ + 合规红线 */
window.CARDS5 = [
{
id:"h01", cat:"大单来华·防绕单", langs:["EN"],
title:"邀请客户来华验厂话术",
tags:["来华","验厂","邀请","考察","大单"],
body:`For a bulk order, I'd strongly recommend a factory visit — it's the fastest way to lock quality and price. Here's what we'd arrange: factory tour and test flights, face-to-face price negotiation, your own inspection before handover, and I'll be with you the whole time as your sourcing partner. Many of our distributor clients place the order during the visit and save 3–5% vs. remote negotiation. Would you be open to a visit in [month]?`,
trans:`批量订单我强烈建议来工厂实地看看——这是锁定质量和价格的最快方式。我们会安排：工厂参观和试飞、面对面谈价、交付前您亲自验收，我全程作为您的采购伙伴陪同。我们很多经销商客户都是考察时当场下单，比远程谈判省 3–5%。您 [月份] 方便安排行程吗？`,
note:"邀请来华的钩子不是「欢迎来玩」，而是「来一趟能省钱」：验货、谈价、当场下单省 3–5%。客户来华是建立深度关系的最好机会，也是防绕单话术的主战场（见下一组卡片）。"
},
{
id:"h02", cat:"大单来华·防绕单", langs:["ZH"],
title:"客户来华前准备清单（SOP）",
tags:["来华","接待","SOP","准备","内功"],
body:`客户来华前 1 周完成：
□ 确认人数、日期、航班、酒店（代订或推荐，酒店选工厂周边）
□ 行程单：D1 接机+工厂 A，D2 工厂 B 对比+试飞，D3 谈判+合同，D4 交付/送机
□ 工厂侧预谈：备好样品机、试飞场地、报价底价、OEM 样品
□ 资料包：产品目录、参数表、报价单、合同模板（中英/俄/阿）
□ 防绕单准备：不与客户分享工厂联系方式 → 见「防绕单六策」
□ 接待细节：接送车辆、餐饮（中东客户注意清真）、翻译`,
note:"来华接待的体验=你对客户的全部印象分。中东客户要特别安排清真餐饮和祈祷时间，俄罗斯客户直接高效即可。这张清单就是你的接待 SOP。"
},
{
id:"h03", cat:"大单来华·防绕单", langs:["EN"],
title:"验厂陪同角色定位话术",
tags:["验厂","陪同","角色","翻译","信任"],
body:`During the factory visit, here's my role as your sourcing partner: I'll translate and negotiate on your behalf, ask the technical questions you'd want answered, and make sure what's quoted is what gets built. Think of me as your buyer on the ground — the factory knows me, but I work for you. If anything doesn't look right, signal me and I'll raise it with the factory directly.`,
trans:`工厂考察期间，我作为您的采购伙伴的角色是：为您翻译和谈判，替您问该问的技术问题，确保报价的配置和生产的配置一致。您就把我当成您在地上的买手——工厂认识我，但我为您工作。任何不对的地方，给我个信号，我直接跟工厂提。`,
note:"陪同角色的定位话术：「工厂认识我，但我为您工作」——这句话同时做到两件事：暗示客户你在工厂有人脉（价值），承诺立场在客户这边（信任）。这是防绕单的软性护城河。"
},
{
id:"h04", cat:"大单来华·防绕单", langs:["EN"],
title:"在工厂面前维护客户利益（表演式压厂）",
tags:["验厂","压厂","维护","信任","表演"],
body:`(To the factory, in front of the client) — We need [configuration point] confirmed in writing: [motors KV / ESC rating / battery brand] must match the quotation exactly, and QC video before handover. My client is a long-term distributor — if this batch is right, expect repeat orders quarterly.`,
trans:`（当着客户对工厂说）——[配置点] 需要书面确认：[电机 KV/电调规格/电池品牌] 必须与报价完全一致，交付前要有质检视频。我的客户是长期经销商——这批没问题的话，预计每季度都有复购订单。`,
note:"当着客户的面「压」工厂，是赢得客户信任的最高效表演：客户看到你为他争取利益，绕开你的念头会大幅降低。同时用「季度复购」给工厂画饼，两头都舒服。"
},
{
id:"h05", cat:"大单来华·防绕单", langs:["EN"],
title:"大单合同与付款节点话术",
tags:["合同","付款","节点","验收","大单"],
body:`For the bulk order, here's the structure we recommend:
• Purchase contract: model, configuration, quantity, price, QC standard, delivery date, and penalty clause for delay/defect;
• Payment: [30]% deposit to reserve production, [40]% after QC video, [30]% on-site after your inspection at handover;
• Handover: you inspect at the factory; once you sign the handover form, the goods and risk transfer to you (or your forwarder).

Does this structure work for you?`,
trans:`批量订单我建议的结构：采购合同：型号、配置、数量、价格、质检标准、交付日期、延误/不良的违约条款；付款：[30]% 定金锁排产，[40]% 见质检视频，[30]% 到厂验收后现场结清；交付：工厂现场验收，签署交接单后，货物和风险转移给您（或您的货代）。这个结构可以吗？`,
note:"大单三段付款是防风险的标准结构：定金锁产、视频中期款、现场尾款。关键句是「签署交接单后货物和风险转移」——这句话在法律上把交付后的责任切干净。"
},
{
id:"h06", cat:"大单来华·防绕单", langs:["EN"],
title:"验收标准与责任转移话术",
tags:["验收","标准","责任","试飞","交接"],
body:`Let's define acceptance upfront so there's zero dispute: (1) every unit flies a 3–5 minute test flight on video; (2) configuration matches the contract (FC, motors, VTX, batteries — serials photographed); (3) you or your rep inspects at the factory before signing the handover form. After handover signature, transport risk and destination customs are yours — that's why we insist you inspect before signing.`,
trans:`我们把验收标准提前定死，零争议：(1) 每台机视频记录 3–5 分钟试飞；(2) 配置与合同一致（飞控、电机、图传、电池——序列号拍照）；(3) 您或您的代表在工厂现场验货后才签署交接单。交接单签署后，运输风险和目的国清关归您——所以我们必须坚持先验收后签字。`,
note:"「先验收后签字」是保护双方的核心条款。把验收标准写进合同（试飞视频+配置对照+现场验收），客户觉得你专业，你的售后纠纷也会少 80%。"
},
{
id:"h07", cat:"大单来华·防绕单", langs:["EN"],
title:"交付签收话术（文件包交付）",
tags:["交付","签收","文件包","交接单"],
body:`Your order passed factory QC — here's the test-flight video and packing list. Handover is scheduled [date/time] at the factory. Please bring/confirm your inspection checklist and the receiving party (you or your forwarder). After we sign the handover form together, I'll send you all documents: contract, invoice, packing list, QC videos, and serial number list for your records.`,
trans:`您的订单已通过工厂质检——这是试飞视频和装箱单。交付定在 [日期/时间]，工厂现场。请带上/确认您的验收清单和收货方（您本人或您的货代）。我们共同签署交接单后，我会把所有文件发给您存档：合同、发票、装箱单、质检视频、序列号清单。`,
note:"交付环节的「文件包」（合同+发票+装箱单+质检视频+序列号）是专业感的收尾，也是客户日后复购和售后时的凭据。把这套文件流程固定下来，B 端客户粘性大增。"
},
{
id:"h08", cat:"大单来华·防绕单", langs:["ZH"],
title:"防绕单 · 总纲六策（内功）",
tags:["防绕单","六策","内功","核心"],
body:`客户来华后被工厂撬走、或客户绕过你直接找工厂，是代采生意最大的风险。六条防线：
1. 信息隔离：不提前给工厂全名/地址/联系方式；报价单、样品单据全部用自己抬头
2. 价值锚定：反复强调你的服务=选厂+比价+验货+语言+付款担保+售后配件管道，不是「带路费」
3. 结构锁定：与工厂签「客户备案/佣金保护协议」；与客户明确采购代理身份和收费标准
4. 节点控制：定金、尾款都从你的账户走；到厂交付时你必须在场主持流程
5. 售后锁客：保修、配件、复购、新品信息全部经过你——让客户「离开你就断供」
6. 预案：真被绕单→停止服务、工厂端按协议追责、客户端保留往来证据`,
note:"防绕单的本质不是防，是「让绕开你的成本高于通过你的成本」。六策里 1–4 是盾，5 是钩，6 是刀。全部写进你的业务流程。"
},
{
id:"h09", cat:"大单来华·防绕单", langs:["ZH"],
title:"防绕单 · 信息隔离实操（内功）",
tags:["防绕单","信息隔离","实操","内功"],
body:`实操细节：
• 报价单/发票：抬头用自己公司，不出现工厂名
• 样品：出货单据、包装胶带、内附卡片均不带工厂信息
• 聊天：客户问「哪个工厂」，答「我们的合作工厂，签了独家供货协议」；不给全名地址
• 客户来华：行程自己安排车辆接送，避免客户手机定位/导航看到工厂招牌（这个度自己把握，过犹不及）
• 工厂端：与工厂书面约定「该客户的所有询价转回我方」（备案协议），防止工厂主动撬单`,
note:"信息隔离是防绕单的第一道闸。注意分寸：完全遮遮掩掩会引发怀疑，标准说法是「独家协议+专注产品」，把话题引回产品本身。"
},
{
id:"h10", cat:"大单来华·防绕单", langs:["EN"],
title:"客户试探工厂名称的应答",
tags:["防绕单","试探","工厂名","应答"],
body:`Fair question. We work with a few partner factories under exclusive supply agreements for overseas clients — that's how we guarantee your price and quality consistency. The factory name itself wouldn't help you anyway: direct orders come at retail terms, without our QC, translation, or parts program. If you ever have a factory-specific question, ask me — I'll get you the answer from the engineer directly.`,
trans:`问得合理。我们与几家合作工厂签有海外客户的独家供货协议——这正是我们能保证您的价格和质量稳定的原因。工厂名字本身对您没帮助：直接下单只能拿到零售条款，没有我们的质检、翻译和配件方案。您有任何关于工厂的具体问题，问我——我直接找工程师给您答复。`,
note:"被问工厂名的标准拆解：①「独家协议」给出不给名字的正当理由；②「直接下单只有零售条款」点破绕开你的代价；③「问我=找工程师」保留信息通道。语气要坦然，不要心虚。"
},
{
id:"h11", cat:"大单来华·防绕单", langs:["EN"],
title:"客户说「我们自己能找到工厂」的应答",
tags:["防绕单","绕单","应答","价值"],
body:`You absolutely can — China is full of factories. What you can't easily replicate: knowing which of those factories has consistent quality (we've rejected three for every one we keep), video QC on every order, price protection, and a spare-parts pipeline that still answers in 12 months. Direct factory buys work until something goes wrong; our job is to make sure that happens rarely — and when it does, you have someone to call.`,
trans:`您当然能找到——中国遍地工厂。但您不容易复制的是：知道哪家质量稳定（我们每留下 1 家要淘汰 3 家）、每单视频验货、价格保护、以及 12 个月后还找得到人的配件管道。直接找工厂，顺利时没事；一旦出问题，您至少得有个能打电话的人。`,
note:"客户说「能自己找工厂」时，不要争辩，承认（显得自信）再拆解「找到工厂≠找到稳定供货」。「12 个月后还找得到人」直击客户对售后配件的恐惧，是这句话的杀招。"
},
{
id:"h12", cat:"大单来华·防绕单", langs:["ZH"],
title:"发现绕单后的应对（内功）",
tags:["防绕单","绕单","应对","预案","内功"],
body:`先取证再表态，不情绪化：
1. 确认事实：客户是否真的通过你认识的工厂下单（工厂备案协议会告诉你）
2. 工厂端：按「客户备案/佣金保护协议」追责——要求转回订单或支付协议佣金
3. 客户端：最后一次沟通，立场礼貌但清晰：
「我们注意到您的订单绕过了我们的采购服务。如果您对我们的服务或收费不满意，我们愿意调整；但绕过我们直接交易，将不再享有验货、担保和配件支持。希望我们继续合作。」
4. 断供售后：已成交订单的配件/保修支持按「是否重新回到合作」决定`,
note:"绕单处理原则：先礼后兵、对事不对人。你的底牌是「售后和配件在我手里」，把这张牌打出来而不是撕破脸——很多客户会回来。"
},
{
id:"h13", cat:"大单来华·防绕单", langs:["EN"],
title:"长期绑定客户话术（配件/新品/保修/优先）",
tags:["绑定","配件","新品","保修","复购"],
body:`Here's how we'll support you after this order, so you're never stuck: spare parts in stock for your models (motors, props, ESCs, batteries); new model alerts before public release with distributor pricing; warranty coordination with the factory (we handle the back-and-forth); and priority allocation when production is tight. This is the ongoing part of our partnership — the unit price is only the beginning.`,
trans:`这单之后我们这样支持您，让您永远不断供：您的机型配件备货（电机、桨叶、电调、电池）；新机型公开发布前先通知您并给经销商价；质保与工厂的协调（来回沟通我们管）；产能紧张时优先分货。这是我们合作的长期部分——单价只是开始。`,
note:"绑定客户的四根绳子：配件、新品、保修、优先分货。每一根都是客户「绕过你就损失」的理由。这段话适合在交付完成、客户满意时发——火候最好的锁客时机。"
},
{
id:"h14", cat:"大单来华·防绕单", langs:["ZH"],
title:"来华接待流程卡（SOP）",
tags:["来华","接待","SOP","流程","内功"],
body:`D-7：确认航班/人数，订酒店（工厂周边），发行程单
D-6：工厂预谈（样品机、试飞场、报价底价、OEM 样品）
D-5：资料包（目录/参数/报价/合同模板）
D1：接机 → 工厂 A 参观+试飞 → 商务晚餐（中东：清真餐厅）
D2：工厂 B 对比（若需比价）+ 技术答疑
D3：谈判 → 合同签订 → 定金
D4：验收交付 / 送机 → 交接单签署 → 文件包交付
全程：车辆接送；翻译；付款节点记录；不与客户分享工厂直接联系方式`,
note:"把流程卡当 SOP 执行。中东客户接待多加一条：周五安排宽松（祈祷日），斋月期间白天谈事效率低，晚上效果好。"
},
{
id:"i01", cat:"售后复购", langs:["EN"],
title:"保修边界说明话术",
tags:["保修","质保","售后","边界"],
body:`On warranty: our factory partners offer [3–12] months warranty on the airframe and electronics (crash damage excluded — that's normal in FPV). The process: send us a video of the issue, we diagnose with the factory engineer, and either guide a repair with parts we ship, or the item returns to the factory (shipping split: you send, we return). We coordinate everything in the middle.`,
trans:`关于保修：我们的合作工厂对机身和电子件提供 [3–12] 个月质保（炸机损坏除外——这在 FPV 是惯例）。流程：把问题视频发我们，我们和工厂工程师一起诊断，然后要么寄配件指导维修，要么返厂维修（运费分摊：去程您承担，回程我们承担）。中间所有协调我们来。`,
note:"保修话术诚实第一：炸机不保是 FPV 惯例，提前说清；「运费去程客户/回程我们」的分摊方案是行业成熟做法。把诊断流程讲具体，客户就知道保修不是空话。"
},
{
id:"i02", cat:"售后复购", langs:["EN"],
title:"返修流程话术",
tags:["返修","维修","售后","流程"],
body:`Sorry to hear about the issue. Here's the fastest path: (1) send a short video showing the problem + the serial number; (2) I'll diagnose with the factory engineer — most issues are fixed by a part we ship to you with a repair guide; (3) if it needs to return to the factory, we'll arrange the address and handle it through. Turnaround is usually [X] days after the factory receives it.`,
trans:`很抱歉听到这个问题。最快路径：(1) 发一段展示问题+序列号的短视频；(2) 我和工厂工程师诊断——多数问题靠寄配件+维修指导就能解决；(3) 确实需要返厂的，我们安排地址并全程跟进。工厂收到后通常 [X] 天修好。`,
note:"返修流程三选一结构（视频诊断→寄件维修→返厂）让客户觉得可控。多数 FPV 问题确实是换件解决，「寄配件+指导」既快又省运费。"
},
{
id:"i03", cat:"售后复购", langs:["EN"],
title:"配件复购触达（FPV 桨叶/电机/电池）",
tags:["复购","配件","FPV","桨叶","电池"],
body:`Hi [Name], hope the [5-inch / spray drone] is flying well. A quick useful note: the parts that wear first are propellers and motors (FPV) / nozzles, pump, and batteries (sprayers). Keeping one spare set per unit is the cheapest insurance against downtime. Want me to send a small parts quote for your fleet? Ships together next time or separately, as you prefer.`,
trans:`嗨 [名字]，希望 [5 寸机/植保机] 飞得顺。一个实用提醒：最先损耗的是桨叶和电机（FPV）/喷头、水泵、电池（植保）。每台备一套，是防停机最便宜的保险。需要我给您机队配一套小配件报价吗？下次随货一起发或单独发都行。`,
note:"配件复购话术要点：关心使用情况开场→报「什么先坏」（专业）→「每台一套」的量化建议→低门槛收口。配件复购是这门生意最稳的利润来源，每月对老客户发一次。"
},
{
id:"i04", cat:"售后复购", langs:["EN"],
title:"植保机配件复购（开季前触达）",
tags:["复购","配件","植保机","开季","旺季"],
body:`For your spray fleet: with [X] machines, I'd recommend stocking 1 set of nozzles and 1 pump per 2 machines, plus 1 spare propeller set per machine for the season. Ordering before the season starts is cheaper and avoids mid-season stockouts. Want me to prepare the seasonal parts list with pricing?`,
trans:`针对您的植保机队：[X] 台机器，我建议每 2 台备 1 套喷头和 1 个水泵，每台备 1 套桨叶，够用一个作业季。开季前下单便宜，还能避免旺季断货。需要我准备一份带价格的季节配件清单吗？`,
note:"植保配件要卡「开季前」的时间点触达——旺季断货是植保客户最怕的事，提前下单的话术天然成立。俄罗斯 3–4 月、中东 9–10 月是触达黄金期。"
},
{
id:"i05", cat:"售后复购", langs:["EN"],
title:"客户投诉处理话术",
tags:["投诉","处理","售后","证据"],
body:`Thank you for telling me — I take this seriously. To fix it fast and fairly, please send: (1) a short video/photo of the issue, (2) the serial number, (3) when it happened. With those, I'll give you options within [24 hours] — repair parts, factory return, or a credit on your next order. My goal is that you end up with working equipment, whatever the path.`,
trans:`谢谢您告诉我——我认真对待。为了快速公平解决，请发：(1) 问题短视频/照片，(2) 序列号，(3) 发生时间。拿到后 [24 小时] 内我给您方案——维修配件、返厂、或下单选抵扣。我的目标是无论走哪条路，您最后拿到的是能用的设备。`,
note:"投诉处理铁律：先谢+表态（接情绪）→要三样证据→限时给三选一方案→锚定结果（拿到能用的设备）。给选项比给解释更能让客户冷静。"
},
{
id:"i06", cat:"售后复购", langs:["EN"],
title:"纠纷降温话术",
tags:["纠纷","降温","售后","共情"],
body:`I understand the frustration, and I want to fix this. Let's focus on the outcome: [solution]. We'll do it step by step and I'll keep you updated at each one. Whatever the cause, my commitment is the same: you end up with what you paid for — working as promised. Does [solution] work for you?`,
trans:`我理解您的不满，我想解决它。我们聚焦结果：[具体解决方案]。我们一步步来，每一步我都会同步您。无论原因是什么，我的承诺不变：您最后拿到的是您付钱买的东西——按承诺正常工作。[方案] 可以吗？`,
note:"纠纷降温公式：共情一句 → 聚焦结果 → 分步承诺 → 重申底线承诺 → 征求确认。避免争论「谁对谁错」，永远把话题拉回「怎么解决」。"
},
{
id:"j01", cat:"异议FAQ", langs:["EN"],
title:"异议 · 太贵了（拆价格结构）",
tags:["异议","太贵","价格","拆解"],
body:`I hear you. Let me show where the price goes: [brand motors + F722 flight controller + per-unit video QC + spare parts support] — that's what you're paying for vs. a cheaper build with no-name parts. If budget is the blocker, I can adjust the configuration (e.g. analog instead of digital, standard motors) to hit your target. What price range were you hoping for?`,
trans:`我理解。让我拆给您看价格花在哪：[品牌电机 + F722 飞控 + 逐台视频验货 + 配件支持]——您付的是这些，而不是一台用杂牌件的便宜机。如果预算是硬约束，我可以调整配置（比如数字图传换模拟、标准电机）达到您的目标价。您心里的价位是多少？`,
note:"「太贵」的深版拆解：先拆价格结构（让客户知道贵在哪），再给降配方案（保住订单），最后问目标价（拿到谈判锚点）。顺序不能反。"
},
{
id:"j02", cat:"异议FAQ", langs:["EN"],
title:"异议 · 我再想想（四选一逼出顾虑）",
tags:["异议","再想想","犹豫","顾虑"],
body:`Of course, no pressure. So I can help you decide faster, what's the main thing holding you back — price, shipping, payment, or whether it's the right model? Most "let me think" cases are really one unanswered question. If you tell me which one, I'll likely resolve it today.`,
trans:`当然，不催您。为了帮您更快做决定，主要卡在哪一点——价格、物流、付款，还是不确定选哪个型号？多数「再想想」背后其实是一个没被回答的问题。您告诉我是哪个，我今天大概率就能解决。`,
note:"「再想想」=有没说出口的顾虑。四选一问题逼出真实障碍。注意选项设计要覆盖你业务里最常见的四种障碍。"
},
{
id:"j03", cat:"异议FAQ", langs:["EN"],
title:"异议 · 已有供应商（两个穿透问题）",
tags:["异议","供应商","穿透","备选"],
body:`That's fine — a working supply chain is valuable. Just two questions: does your current supplier give you video QC on every order, and can they still supply spare parts for what they sold you last year? If either answer is no, we're worth a trial order as your backup — same models, factory-direct pricing. Having a second source also improves your negotiating power with supplier #1.`,
trans:`没关系——稳定的供应链很宝贵。就问两个问题：你们现在的供应商每单都给视频验货吗？去年卖给你们的型号，现在还能供配件吗？只要有一个答案是「不」，就值得我们做您的备选供应商试一单——同样机型、工厂直供价。而且有第二个货源，您跟第一家的谈判筹码也更强。`,
note:"「已有供应商」的两个穿透问题直击中小供应商的软肋（验货缺失、配件断供）。最后一招「二供提升谈判筹码」是在帮你，也是在帮客户——立场就赢了。"
},
{
id:"j04", cat:"异议FAQ", langs:["EN"],
title:"异议 · 担心假货/翻新（流程代替承诺）",
tags:["异议","假货","翻新","验货","信任"],
body:`That's the right question to ask in this market. Our answer is process, not promises: (1) you get a video of your exact units — serial numbers, assembly, test flight — before you pay the balance; (2) we ship factory-sealed with the factory's QC record; (3) start with 1–2 pcs and judge with your own hands. Want to see a QC video from a recent order?`,
trans:`在这个市场问这个问题是对的。我们的答案不是承诺，是流程：(1) 尾款前您会收到您这批货的视频——序列号、装机、试飞；(2) 工厂原封+工厂质检记录发货；(3) 先买 1–2 台，用您自己的手判断。要看看最近一单的验货视频吗？`,
note:"假货恐惧的解法：把「相信我」换成「看流程」。视频验货+原封发货+小单试错，三重机制比任何口头保证都有力。"
},
{
id:"j05", cat:"异议FAQ", langs:["EN"],
title:"异议 · 首次合作不放心（信任三级台阶）",
tags:["异议","首次","信任","试单"],
body:`Completely normal. Here's our risk-reduction path: (1) trial order of 1–2 pcs, 100% prepay — small enough to be safe; (2) video QC before shipment, so you see exactly what's coming; (3) after the trial lands clean, we move to deposit/balance terms on the bulk order. We built this path because trust is earned in steps, not speeches.`,
trans:`完全正常。我们的降风险路径：(1) 1–2 台试单，100% 预付——金额小到足够安全；(2) 发货前视频验货，您看得见来的货是什么；(3) 试单干净落地后，批量订单转定金+尾款。我们设计这条路，因为信任是一步步挣来的，不是讲出来的。`,
note:"首次合作恐惧的解法=把信任拆成三级台阶（小单全款→验货→大单定金）。最后一句「信任是一步步挣来的」既有哲理又显格局。"
},
{
id:"j06", cat:"异议FAQ", langs:["EN"],
title:"FAQ · MOQ 与样品",
tags:["FAQ","MOQ","样品","起订量"],
body:`No strict MOQ for standard models — you can order 1 pc to test. For OEM branding, MOQ is [X] pcs with a setup fee. For the best bulk pricing, [X] pcs per model is where the tier drops. If you tell me your target quantity, I'll show you exactly which tier you're in.`,
trans:`标准型号没有强制起订量——1 台就能试。OEM 贴牌起订 [X] 台，含制版费。批量最优价从每型号 [X] 台开始降档。告诉我您的目标数量，我直接告诉您在哪一档价格。`,
note:"MOQ 回答三段式：标准款无门槛（散单友好）→ OEM 有门槛（B 端筛选）→ 阶梯价（引导报量）。客户报出数量，谈判主动权就到你手里。"
},
{
id:"j07", cat:"异议FAQ", langs:["EN"],
title:"FAQ · 保修（过保配件钩子）",
tags:["FAQ","保修","过保","配件"],
body:`Warranty: [3–12] months on airframe and electronics, crash damage excluded (FPV standard). Process: video diagnosis → parts shipment with repair guide → factory return if needed. We handle all coordination with the factory engineer. After warranty, parts remain available at wholesale cost — that's the part other suppliers miss.`,
trans:`保修：[3–12] 个月机身和电子件，炸机损坏除外（FPV 惯例）。流程：视频诊断→寄配件带维修指导→必要时返厂。与工厂工程师的所有协调我们负责。过保后配件仍按批发价供应——这是很多供应商做不到的部分。`,
note:"保修话术的钩子在最后一句：过保配件批发价。客户怕的不是保修期短，是过保后配件断供——这句话直击痛点。"
},
{
id:"j08", cat:"异议FAQ", langs:["EN"],
title:"FAQ · 发票与含税",
tags:["FAQ","发票","含税","增值税"],
body:`Yes — we issue a proper commercial invoice and PI for every order. If you need a Chinese tax invoice (VAT), tell me before payment: it affects the price, since export-oriented orders are usually priced without it. I'll confirm the exact tax treatment for your order before you pay.`,
trans:`可以——每单都出正式商业发票和 PI。如果您需要国内增值税发票，付款前告诉我：这会影响价格，因为外贸订单通常按不含税价报。付款前我会和您确认具体的税务处理方式。`,
note:"发票问题的专业点：外贸单默认不含税，要增票就得加税点——提前说清，避免成交后「发票纠纷」。"
},
{
id:"j09", cat:"异议FAQ", langs:["EN"],
title:"FAQ · 俄语/阿语资料与说明书",
tags:["FAQ","资料","俄语","阿语","说明书"],
body:`For documentation: we provide English spec sheets and manuals with every order. Russian and Arabic manuals can be arranged for bulk/OEM orders (translation is part of the OEM package). Meanwhile, I'm happy to explain any spec in Russian/Arabic right here in chat — ask away.`,
trans:`关于资料：每单随附英文参数表和说明书。俄文/阿文说明书可以在批量/OEM 订单里安排（翻译包含在 OEM 包里）。同时，任何参数我现在就可以在聊天里用俄语/阿语给您解释——尽管问。`,
note:"资料话术的聪明之处：小单不做翻译（成本），大单把翻译打包进 OEM（增值），中间用「聊天即时翻译」补位——既控成本又显服务。"
},
{
id:"j10", cat:"异议FAQ", langs:["ZH"],
title:"异议处理通用四步法（内功）",
tags:["异议","四步法","内功","心法"],
body:`1. 认可：I understand / That's a fair point / 您说得对——先接情绪
2. 澄清给证据：验货视频、序列号、试飞记录、小单试错——用机制不用嘴
3. 给替代方案：价格→降配；交期→现货型号；付款→小单全款起步；型号→够用就好款
4. 给下一步：Shall I prepare the PI / send the QC video / check stock?——每条异议收尾都要推动一个动作

心法：异议不是拒绝，是客户告诉你「还差什么」。异议处理完，成交只是时间问题。`,
note:"四步法适用于本库所有异议场景。背下「认可→证据→方案→动作」的链条，任何异议都能套用。"
},
{
id:"k01", cat:"合规红线", langs:["EN"],
title:"合规 · 拒绝军事用途/武器化（红线）",
tags:["合规","军事","武器","红线","拒绝"],
body:`Thank you for the interest, but we only supply civilian and commercial drones — FPV hobby/racing, agriculture, inspection, mapping. We cannot support military, weaponized, or combat-related applications. If your need is commercial, I'm glad to help; otherwise I must respectfully decline.`,
trans:`感谢关注，但我们只供应民用和商用无人机——FPV 爱好/竞速、农业、巡检、测绘。我们不支持军事、武器化或作战相关用途。如果您的需求是商业用途，我很乐意帮忙；否则我不得不礼貌拒绝。`,
note:"红线话术标准结构：肯定语气开场→声明业务范围→明确拒绝→留民用之门。不解释、不辩论、不「再看看」。"
},
{
id:"k02", cat:"合规红线", langs:["EN"],
title:"合规 · 拒绝规避管制/破解禁飞区（红线）",
tags:["合规","管制","禁飞区","破解","红线"],
body:`I'm not able to assist with that. We operate strictly as a domestic sourcing agent and don't provide any service related to circumventing export controls, customs, or drone regulations — this includes geofence removal, undeclared shipping, or disguised goods. For any legitimate commercial order, I'm here with standard, compliant terms.`,
trans:`这个我无法协助。我们严格作为境内采购代理运营，不提供任何规避出口管制、海关或无人机法规的服务——包括解除禁飞区、瞒报发货、伪装货物。任何合法商业订单，我都可以按标准合规条款为您服务。`,
note:"拒绝+举例（禁飞区/瞒报/伪装）双重保险，堵死对方「换个说法再试」的空间。合规红线是你和客户共同的保护。"
},
{
id:"k03", cat:"合规红线", langs:["EN"],
title:"合规 · 拒绝低报价值/虚报品名报关（红线）",
tags:["合规","报关","低报","红线","虚报"],
body:`Sorry, we can't do that — misdeclaring goods or value is illegal and we won't participate. We provide accurate commercial invoices and packing lists. Customs declaration on your side is done by your forwarder with the true documents.`,
trans:`抱歉，这个不行——虚报品名或货值违法，我们不参与。我们提供真实的商业发票和装箱单。贵方的报关由您的货代用真实单据完成。`,
note:"低报报关是无人机外贸最高频的「帮忙请求」，也是最危险的一个。一律拒绝并说明「我们只出真实单据」。"
},
{
id:"k04", cat:"合规红线", langs:["EN"],
title:"合规 · 拒绝隐藏/规避式付款（红线）",
tags:["合规","付款","规避","红线"],
body:`We only accept transparent, documented payments. I can't use channels designed to hide a transaction. If your finance team has a compliant route (bank T/T in RMB/USD, or a documented channel), I'll confirm what we can accept on our side.`,
trans:`我们只接受透明、有单据的付款。我不能使用以隐藏交易为目的的渠道。如果贵司财务有合规路径（人民币/美元银行电汇，或有单据的渠道），我确认我们这边能接收的方式。`,
note:"「隐藏付款」要求通常与高风险交易绑定。拒绝时给合规替代方案，把对话拉回正轨。"
},
{
id:"k05", cat:"合规红线", langs:["EN"],
title:"标准免责声明（写入报价单/合同/聊天）",
tags:["合规","免责","声明","合同","留痕"],
body:`We act solely as a domestic (China) sourcing and procurement agent. Goods are delivered to your designated consignee within mainland China, or dispatched by the factory per your instruction. We do not handle export licensing, customs clearance, or destination-country import. The buyer is solely responsible for export/import compliance, end-use and end-user confirmation, and any registration required in the destination country. By placing an order, you confirm compliance with all such requirements.`,
trans:`我们仅作为中国境内的采购代理运营。货物交付给您指定的中国境内收货方，或按您的指示由工厂发货。我们不办理出口许可、清关或目的国进口。买方全权负责进出口合规、最终用途和最终用户确认、以及目的国要求的任何注册。下单即视为您确认遵守上述全部要求。`,
note:"这句免责声明建议写进：报价单、PI、合同、以及首次成交的聊天记录。它是你「只做代采、不碰出口」的法律护身符。"
},
{
id:"k06", cat:"合规红线", langs:["ZH"],
title:"合规红线清单（内部自查）",
tags:["合规","红线","清单","自查","内功"],
body:`1. 业务范围：民用/商用无人机与配件（FPV、植保、巡检测绘），只做境内代采或按客户指示由工厂发货
2. 红线拒单：军事/武器化改装、规避出口管制、解除禁飞区、瞒报品名价值、隐藏付款、匿名发货
3. 高风险询盘处理：军方/国防背景→要求书面确认民用最终用途，否则终止
4. 出口责任归属：出口许可、清关、目的国注册（如阿联酋 DCAA、俄罗斯注册）均由买方负责
5. 留痕：免责声明+验货视频+交接单+付款单据，每单一套`,
note:"每接一个新客户前，把这张清单过一遍。无人机是敏感品类，合规红线守得越稳，生意做得越久。"
}
];
