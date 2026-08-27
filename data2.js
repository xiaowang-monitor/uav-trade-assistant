/* 话术数据 2/5：产品专家 — FPV 穿越机 + 植保机 */
window.CARDS2 = [
{
id:"c01", cat:"产品专家", langs:["ZH"],
title:"FPV 尺寸逻辑速查（内功）",
tags:["FPV","尺寸","配置链","内功","5寸","7寸"],
body:`3 寸及以下：室内/狭窄场地、涵道机（cinewhoop），配 4S 850–1100mAh 电池
5 寸：主流花飞/航拍机，6S 1500–2200mAh，电机 2207–2306 约 1700–1900KV
7 寸：长续航远航/挂运动相机，6S 5000mAh，电机 2806–2810 约 1300–1500KV，必配 GPS
10 寸：大载荷/长航时/行业改装，配 6S–8S 大容量电池

客户说「我要 7 寸远航」，你就该自动想到：2806–2810 低 KV 电机 + 6S 5000mAh + GPS + 大桨——这就是专家和卖家的区别。`,
note:"尺寸决定电机、电池、KV、用途一整条配置链。记住这条链，客户报尺寸你就能报配置。"
},
{
id:"c02", cat:"产品专家", langs:["EN"],
title:"套机形态讲解（RTF/BnF/PNP）",
tags:["FPV","RTF","BnF","PNP","套机","配置"],
body:`Quick guide to what you'll see in our list:
• RTF (Ready-to-Fly): everything included — drone, radio, goggles, battery. Charge and fly.
• BnF (Bind-and-Fly): drone with receiver included; you bind it to your own radio.
• PNP (Plug-and-Play): drone only, no receiver, no radio/battery — for builders.

If you tell me what gear you already own (radio, goggles), I'll match the right version so you don't buy anything twice.`,
trans:`快速说明一下我们清单里的几种形态：RTF（到手飞）：全套包含——飞机、遥控、眼镜、电池，充电即飞。BnF（对频即飞）：飞机含接收机，与您自己的遥控对频即可。PNP（即插即用）：只有飞机，不含接收机、遥控和电池——给组装玩家。告诉我您已有哪些设备（遥控、眼镜），我帮您匹配对应版本，避免重复购买。`,
note:"RTF/BnF/PNP 是 FPV 外贸最高频的三个词，必须烂熟。最后一句「匹配你已有设备」既是服务，也是隐性提问（摸清客户装备水平）。"
},
{
id:"c03", cat:"产品专家", langs:["EN"],
title:"飞控/固件讲解（F405/F722/H743）",
tags:["FPV","飞控","固件","Betaflight","INAV","ArduPilot"],
body:`The flight controller is the brain. Our factory builds use F405 / F722 / H743 flight controllers with Betaflight (freestyle/racing), INAV (long-range with GPS features like RTH), or ArduPilot (industrial tasks) firmware. For your [5-inch freestyle / 7-inch long-range / heavy-lift] setup, I'd recommend [F722 + Betaflight / F405 + INAV with GPS]. Does your team have a preferred firmware already?`,
trans:`飞控是大脑。我们工厂的机型使用 F405/F722/H743 飞控，固件可选 Betaflight（花飞/竞速）、INAV（带 GPS 返航等功能的远航）、或 ArduPilot（行业任务）。针对您的 [5 寸花飞/7 寸远航/大载重] 配置，我建议 [F722+Betaflight / F405+INAV+GPS]。你们团队已经有偏好的固件了吗？`,
note:"客户说「我要飞控好一点的」，别只会说「好的」——报 F722/H743 型号+固件方案，客户立刻把你当内行。固件偏好也是判断玩家水平的问题。"
},
{
id:"c04", cat:"产品专家", langs:["EN"],
title:"电机 KV 选择讲解",
tags:["FPV","电机","KV","动力","配置"],
body:`KV is how fast the motor spins per volt. Rule of thumb: bigger props need lower KV. A 5-inch freestyle build runs 2207–2306 motors at ~1700–1900KV on 6S; a 7-inch long-range build runs 2806–2810 at ~1300–1500KV for efficiency. I'll match motors to your prop size, battery cell count, and flying style — that's where most cheap builds go wrong.`,
trans:`KV 是电机每伏电压的转速。经验法则：桨越大，KV 越低。5 寸花飞配 2207–2306 电机、6S 电池约 1700–1900KV；7 寸远航配 2806–2810 约 1300–1500KV 追求效率。我会按您的桨尺寸、电池节数和飞行风格匹配电机——廉价组装最容易错的就是这里。`,
note:"「桨越大 KV 越低」这一句话就是 FPV 动力的全部精髓。报价时主动报「电机型号+KV」，客户会觉得你比同行专业一个段位。"
},
{
id:"c05", cat:"产品专家", langs:["EN"],
title:"图传讲解（模拟 vs 数字）",
tags:["FPV","图传","模拟","数字","Walksnail","HDZero"],
body:`Two video systems to choose from:
• Analog 5.8G — lowest cost, near-zero latency, works with any analog goggles; the standard for freestyle and budget builds.
• Digital (HD) — much clearer image: Walksnail, HDZero, or DJI O3-compatible builds. Costs more, and you must match the goggles to the system.

For [freestyle on a budget / long-range with clean HD video], I'd recommend [analog / digital]. Which goggles do you use now?`,
trans:`两种图传可选：模拟 5.8G——成本最低、延迟几乎为零、兼容任何模拟眼镜，是花飞和预算型配置的标准；数字高清——画面清晰得多：Walksnail、HDZero 或兼容大疆 O3 的机型，价格更高，且眼镜必须与图传系统匹配。针对 [预算型花飞/高清远航]，我建议 [模拟/数字]。你们现在用什么眼镜？`,
note:"图传是 FPV 客户必问项。三个数字方案名称（Walksnail/HDZero/DJI O3）能报出来就是专业信号；「眼镜必须配套」是新手最容易踩的坑，主动提醒就是价值。"
},
{
id:"c06", cat:"产品专家", langs:["EN"],
title:"客户问「能配大疆眼镜/遥控吗」",
tags:["FPV","大疆","O3","眼镜","兼容","图传"],
body:`Good question. Our O3-compatible builds work with DJI Goggles 2/3 and the DJI FPV Remote — you keep using your existing DJI gear. For other builds we use Walksnail or HDZero, which pair with their own goggles. If you tell me which DJI goggles/radio you own, I'll confirm exactly which models are compatible before you order.`,
trans:`问得好。我们兼容 O3 的机型可以直接搭配大疆 Goggles 2/3 眼镜和 DJI FPV 遥控——您现有的 DJI 设备继续用。其他机型我们用 Walksnail 或 HDZero，配各自的眼镜。您告诉我手上有哪款 DJI 眼镜/遥控，下单前我给您确认具体兼容型号。`,
note:"这是 FPV 客户最高频问题之一。话术要点：先给肯定答案（兼容机型存在）→ 给备选（Walksnail/HDZero）→ 要求客户报设备型号再锁定。注意：这是「兼容 DJI 配件」而非「卖大疆」，合规无风险。"
},
{
id:"c07", cat:"产品专家", langs:["EN"],
title:"电池规格讲解（含运输提示）",
tags:["FPV","电池","6S","LiPo","运输","UN3480"],
body:`For the [5-inch] build, standard is a 6S LiPo: 1300–1500mAh for freestyle, 1500–2200mAh for longer flights; C-rating 100C+ for punch. A 7-inch long-range rig flies 6S 4000–6000mAh. We supply matching batteries, or you can source locally — just confirm the connector (XT60/XT90). One shipping note: loose LiPo batteries have airline restrictions, so batteries usually ship separately via land/special channels.`,
trans:`针对 [5 寸] 配置，标配 6S 锂电池：花飞 1300–1500mAh，长飞行 1500–2200mAh；爆发力选 100C 以上放电倍率。7 寸远航用 6S 4000–6000mAh。我们可以配套供应电池，您也可以本地自购——确认接口（XT60/XT90）即可。一个发货提示：散装锂电池有空运限制，电池通常单独走陆运/专线渠道。`,
note:"电池是复购金矿，也是发货雷区。「电池单独走专线」这句话要提前说，别等货发不出去才解释。C 数、mAh、XT 接口三个词报出来，专业度立现。"
},
{
id:"c08", cat:"产品专家", langs:["EN"],
title:"7 寸远航配置推荐（标准配方）",
tags:["FPV","7寸","远航","配置","GPS"],
body:`For a solid 7-inch long-range build, here's the standard recipe: 2806 or 2810 motors around 1300–1500KV, 6S 5000mAh battery, F405/F722 with INAV or Betaflight + GPS (for return-to-home), 45–55A 4-in-1 ESC, and your choice of analog or digital VTX. Flight time: roughly 15–25 minutes depending on payload. Would you like a quote for the full kit, or just the frame and parts?`,
trans:`一台靠谱的 7 寸远航标准配方：2806 或 2810 电机、约 1300–1500KV、6S 5000mAh 电池、F405/F722 飞控刷 INAV 或 Betaflight + GPS（返航功能）、45–55A 四合一电调，图传模拟/数字可选。续航约 15–25 分钟（看挂载）。您要整机套件报价，还是只要机架和散件？`,
note:"「标准配方」话术=专家感的来源：客户问「推荐什么配置」，你一口气报出完整配置链，最后给「整机 or 散件」二选一收口。配置链报得越流利，客户越不敢跟你砍价。"
},
{
id:"c09", cat:"产品专家", langs:["EN"],
title:"5 寸花飞配置推荐",
tags:["FPV","5寸","花飞","配置","竞速"],
body:`For 5-inch freestyle, the proven combo: 2207–2306 motors at 1700–1900KV, 6S 1300–1500mAh battery, F722 with Betaflight, 45–55A ESC, analog VTX for zero latency (or Walksnail if you want HD). This setup gives you the punch for tricks and survives crashes with easy-to-replace arms. Want the BnF version, or a frame kit with parts?`,
trans:`5 寸花飞的成熟组合：2207–2306 电机、1700–1900KV、6S 1300–1500mAh 电池、F722 刷 Betaflight、45–55A 电调、模拟图传零延迟（想要高清就 Walksnail）。这套爆发力足，炸机后机臂易更换。您要 BnF 版本，还是机架+散件套件？`,
note:"花飞客户在乎「爆发力+炸机可修」。最后一句顺带铺垫配件生意——花飞客户是桨叶、机臂、电机的天然复购对象。"
},
{
id:"c10", cat:"产品专家", langs:["ZH"],
title:"FPV 参数速查表（内功总表）",
tags:["FPV","参数","速查","内功","配置表"],
body:`尺寸→电机→KV→电池→图传→用途：
3寸涵道：1404–1506 / 4S 850–1100mAh / 模拟或数字 / 室内与近景拍摄
5寸花飞：2207–2306 / 6S 1300–1500mAh / 模拟(零延迟)或Walksnail / 花飞竞速
5寸航拍：2306–2307 / 6S 1500–2200mAh / 数字高清 / 挂运动相机
7寸远航：2806–2810 / 6S 4000–6000mAh / 模拟或数字 + GPS返航 / 长航时远距离
10寸大载重：2812–3115 / 6S–8S 10000mAh+ / 数字 + GPS / 行业改装挂载

通用：飞控 F405/F722/H743；固件 Betaflight/INAV/ArduPilot；电调 4合1 45–65A；接口 XT60/XT90`,
note:"这张表=你的 FPV 内功。背熟后，客户报一个尺寸，你就能报出整套配置建议，报价速度和专业度碾压 90% 同行。"
},
{
id:"c11", cat:"产品专家", langs:["EN"],
title:"植保机选型逻辑（面积→载药量）",
tags:["植保机","载药量","面积","选型","农业"],
body:`The first question for a spray drone is tank size, and that's decided by your field area: a 10L tank covers roughly 15–25 mu per sortie, 20L about 30–50 mu, 30L about 50–80 mu, and 40L about 70–120 mu (depending on crop and spray rate). For your [X] hectares of [crop], I'd suggest the [X]L model — fewer refills means more hectares per day. Flat or hilly terrain?`,
trans:`选植保机第一个问题是载药量，由作业面积决定：10L 药箱单架次约 15–25 亩，20L 约 30–50 亩，30L 约 50–80 亩，40L 约 70–120 亩（视作物和喷洒量）。针对您的 [X] 公顷 [作物]，我建议 [X]L 机型——少加药、每天多作业。地形是平地还是丘陵？`,
note:"植保机的销售逻辑=面积→载药量→亩效。载药量梯度表要背熟，这是植保询盘的标准开场。亩（mu）是行业通用单位，俄罗斯/中东客户也认 hectare（1 公顷=15 亩），报价时换算好。"
},
{
id:"c12", cat:"产品专家", langs:["EN"],
title:"植保机效率参数讲解",
tags:["植保机","效率","喷幅","亩效","农业"],
body:`The numbers that matter: spray width 4–8 m adjustable, flow rate 1–2 L/min per pump (centrifugal or pressure nozzles), and coverage of roughly 150–250 mu per hour on open flat fields. Our machines use terrain-following radar for consistent height over crops, which is what keeps coverage even on rolling ground. What's your daily target area?`,
trans:`关键数字：喷幅 4–8 米可调，单泵流量 1–2 升/分钟（离心/压力喷头可选），开阔平地作业效率约 150–250 亩/小时。我们的机型配地形跟随雷达保持对作物高度恒定，丘陵地也能喷匀。你们每天的作业目标面积是多少？`,
note:"客户问「效率怎么样」，答三个数：喷幅、流量、亩/小时。再问「每天目标面积」反推机型，就完成了从参数到订单的转化。"
},
{
id:"c13", cat:"产品专家", langs:["EN"],
title:"植保机版本讲解（标准版 vs RTK版）",
tags:["植保机","RTK","雷达","版本","选型"],
body:`We offer two versions of the spray drone: standard (GPS + terrain-following radar for height and obstacle avoidance) and RTK (centimeter-level positioning for precise route planning, ideal for orchards, terraces, and repeat passes). For open flat fields, standard saves you money; for complex terrain or precision work, RTK pays for itself. Which terrain are you working on?`,
trans:`我们提供植保机两个版本：标准版（GPS + 地形跟随雷达，定高与避障）和 RTK 版（厘米级定位、精准航线规划，适合果园、梯田和重复航线作业）。开阔平地选标准版省钱；复杂地形或精量作业选 RTK 版，值回票价。你们的作业地形是哪种？`,
note:"版本差价的销售话术：不是「贵的更好」，而是「按地形选」。给客户省钱建议的人，客户会把大单也交给他。"
},
{
id:"c14", cat:"产品专家", langs:["EN"],
title:"植保机配件讲解（易损件+备件包）",
tags:["植保机","配件","喷头","水泵","备件包"],
body:`The parts that wear first on a spray drone: nozzles, pump diaphragms, propeller blades, and batteries. We recommend a starter spare kit: 1 set of nozzles, 1 spare pump, 1 set of propellers, and 1 extra battery per unit — that keeps you flying through the season. Do you want me to include the spare kit in the quote?`,
trans:`植保机上最先损耗的件：喷头、水泵隔膜、桨叶、电池。建议配一套初始备件包：喷头 1 套、备用水泵 1 个、桨叶 1 套、每台额外 1 块电池——保证整个作业季不趴窝。报价里要把备件包一起算进去吗？`,
note:"植保配件是复购金矿，也是「专家感」的来源——主动告诉客户什么会先坏，比卖机器本身更显专业。备件包话术=整机订单的天然加价项。"
},
{
id:"c15", cat:"产品专家", langs:["EN"],
title:"中东高温沙尘使用建议（沙漠包）",
tags:["中东","高温","沙尘","沙漠包","加价项"],
body:`For Middle East conditions — heat and dust are the two enemies. Our machines for the Gulf market come with: higher-temperature-rated ESCs, sealed motor bearings with dust protection, and we recommend extra air filters and cleaning kits. For batteries in 45°C+ weather, keep them shaded, charge in the cool of the day, and never store them in a hot car. Would you like the "desert package" (extra filters, bearings, battery cooler bag) added?`,
trans:`针对中东环境——高温和沙尘是两大敌人。我们发海湾市场的机型：耐高温电调、带防尘的密封电机轴承，并建议加购空气滤网和清洁套件。45°C 以上天气，电池要遮阴、凉快时段充电、绝不放在暴晒的车里。需要我加一个「沙漠包」（备用滤网、轴承、电池降温包）吗？`,
note:"中东客户最吃这一套：你连他当地的高温和沙尘都懂，信任感瞬间拉满。「沙漠包」是专为海湾市场设计的加价项，也是差异化竞争的武器。"
},
{
id:"c16", cat:"产品专家", langs:["RU"],
title:"俄罗斯低温使用建议（冬季套件）",
tags:["俄罗斯","低温","冬季","电池","Русский"],
body:`Для холодного климата: при температурах ниже 0°C литий-полимерные батареи быстро теряют ёмкость. Рекомендуем: хранить батареи в тепле до вылета, использовать термосумку, сократить полётное время на 20–30%. Также советуем зимний комплект: утеплённые чехлы на батареи и смазку для моторов. Нужно добавить зимний комплект в заказ?`,
trans:`针对寒冷气候：0°C 以下锂聚合物电池容量下降很快。建议：起飞前把电池保暖存放、使用保温包、飞行时间减少 20–30%。另建议冬季套件：电池保温罩和电机润滑油。订单里要加冬季套件吗？`,
note:"俄罗斯植保/FPV 客户最在意「冬天能不能飞」。主动给低温方案（保温+减时+冬季套件），既显专业又是一个加价项。"
},
{
id:"c17", cat:"产品专家", langs:["ZH"],
title:"植保机速查表（内功总表）",
tags:["植保机","速查","内功","参数表"],
body:`载药量梯度：10L≈15–25亩/架次；20L≈30–50亩；30L≈50–80亩；40L≈70–120亩
效率：喷幅 4–8m，流量 1–2L/min，平地 150–250 亩/小时
配置：标准版（GPS+地形跟随雷达）/ RTK 版（厘米级航线）
易损件：喷头、水泵隔膜、桨叶、电池
加价项：沙漠包（滤网/轴承/降温袋）、冬季套件（保温罩/润滑）、备件包
换算：1 公顷 = 15 亩`,
note:"植保机的完整内功就这一页。报价时按「面积→载药量→版本→配件包」四步走，每一步都是一个加价机会。"
}
];
