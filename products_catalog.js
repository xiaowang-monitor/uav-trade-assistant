/* 产品数据 · 第三批：补充民用机型 + 军品（仅参数，不写卖点） */
window.PRODUCTS = [].concat(window.PRODUCTS||[], [
/* ---------- 民用：M20 四光旗舰（复合吊舱，巡检主力） ---------- */
{
id:"m20os", cat:"巡检航拍机", model:"M20 四光·开源版", name_zh:"M20 四光开源版", name_en:"M20 4-Sensor Open-source",
risky:false,
kpis:["四光复合吊舱","红外640×512","可见光11X变倍","激光测距1.2km","20km图传"],
points_zh:"M20 四光开源版是旗舰级巡检平台：飞行平台+四光吊舱（红外热成像 640×512、可见光 4800万双摄、11X 等效光学变倍、激光测距 1.2km）+ 三轴增稳。支持 AI 人/车目标识别(≥32)、目标跟踪、RTSP/UDP 输出。开源/可定制，适配 QGroundControl。适合巡检、安防、搜救、执法取证。",
points_en:"The M20 4-sensor open-source edition is a flagship inspection platform: flight platform + 4-sensor gimbal (640×512 thermal, 48MP dual visible camera, 11X optical zoom, 1.2 km laser ranging) with 3-axis stabilization. Supports AI person/vehicle recognition (≥32 targets), target tracking and RTSP/UDP output. Open-source/customizable with QGroundControl. For inspection, security, SAR and law enforcement.",
specs:[
 ["类型","M20 四光开源版整机（开源飞行平台）"],
 ["机载吊舱","DX-08 四光吊舱（见吊舱栏目）"],
 ["热成像","640×512 · 超分 1280×1024 · 测温 20~150℃ / 0~500℃"],
 ["可见光","4800万 双摄 · 等效光学变倍 11X · 混合 160X"],
 ["激光测距","905nm · 5~1.2km · 精度 ≤1m"],
 ["识别/跟踪","AI 人/车识别 ≥32 · 目标跟踪 ≤50Hz"],
 ["图传距离",">20km @1.4G；>15km @2.4G"],
 ["环境温度","-20℃ ~ +55℃"],
 ["对标","M20 四光系列全系（开源/闭源/基础）可选"]
],
qa:[
 ["主要用途？","巡检、安防、搜救、执法取证——一机覆盖红外/可见/测距/识别。"],
 ["图传多远？",">20km（1.4G），>15km（2.4G）。"],
 ["开源什么意思？","开源飞控，可接入 QGroundControl，支持二次开发。"],
]
},
{
id:"m20cs", cat:"巡检航拍机", model:"M20 四光·闭源版", name_zh:"M20 四光闭源版（含激光避障）", name_en:"M20 4-Sensor Closed-source",
risky:false,
kpis:["四光吊舱","激光避障","红外观测"],
points_zh:"M20 四光闭源版：与开源版同级的四光吊舱能力（红外+可见+激光测距），采用闭源飞控并内置激光避障，开箱即用、稳定性高，适合对二次开发无需求、要即插即用的巡检/安防客户。",
points_en:"The M20 4-sensor closed-source edition offers the same 4-sensor capability (thermal + visible + laser ranging) on a closed-source flight controller with built-in laser obstacle avoidance — plug-and-play and stable, ideal for clients who want a turnkey inspection/security platform.",
specs:[
 ["类型","M20 四光闭源版整机（闭源飞控）"],
 ["机载吊舱","四光吊舱（红外+可见+激光测距）"],
 ["避障","含激光避障"],
 ["说明","闭源、开箱即用；如需深度二次开发选开源版"]
],
qa:[["和开源版差别？","闭源版内置激光避障、即插即用；开源版可接入 QGC 二次开发。"]]
},
/* ---------- 民用：吊舱 C13 / C12 ---------- */
{
id:"c13", cat:"吊舱", model:"C13 三光三轴", name_zh:"C13 三光三轴吊舱", name_en:"C13 3-Sensor 3-Axis Gimbal",
risky:false,
kpis:["可见光+热成像+激光测距","三轴增稳","AI识别"],
points_zh:"C13 三光三轴吊舱：可见光 + 红外热成像 + 激光测距，三轴增稳，支持 AI 目标锁定/制导（需 S 系列飞控）。兼顾可见、日夜、测距，是巡检/安防的均衡之选。",
points_en:"The C13 3-sensor 3-axis gimbal: visible + thermal + laser ranging with 3-axis stabilization and AI target lock/guidance (S-series FC). A balanced choice for inspection and security.",
specs:[["类型","三光（可见光+热成像+激光测距）三轴吊舱"],["AI","AI目标锁定/AI制导（需S系列飞控）"],["用途","巡检/安防/搜救"]],
qa:[["有热成像吗？","有，红外热成像+测距。"]]
},
{
id:"c12", cat:"吊舱", model:"C12 双光三轴", name_zh:"C12 双光三轴吊舱", name_en:"C12 2-Sensor 3-Axis Gimbal",
risky:false,
kpis:["可见光+热成像","三轴增稳","384/512热成像"],
points_zh:"C12 双光三轴吊舱：可见光 + 红外热成像（384×288 或 512×384 视版本），三轴增稳。入门级双光方案，适合预算受限的巡检/安防需求。",
points_en:"The C12 2-sensor 3-axis gimbal: visible + thermal (384×288 or 512×384 depending on version) with 3-axis stabilization. An entry dual-sensor option for budget inspection/security.",
specs:[["类型","双光（可见光+热成像）三轴吊舱"],["热成像分辨率","384×288 或 512×384（版本差异）"],["用途","巡检/安防"]],
qa:[["热成像分辨率？","384×288 或 512×384 视版本。"]]
},
/* ---------- 民用：光纤放线系统 ---------- */
{
id:"fiber", cat:"光纤系统", model:"光纤放线系统 10-60km", name_zh:"无人机光纤放线系统（10/15/20/25/30/50/60km）", name_en:"Drone Fiber-optic Tethered System (10-60km)",
risky:false,
kpis:["光纤系留","10-60km","长航时","抗干扰"],
points_zh:"光纤放线系统：无人机通过光纤系留获得稳定供电/信号与超低延迟、抗干扰的视频链路，航时不受电池限制，适合长时间定点悬停、通信中继、长时间侦察与监测。距离 10/15/20/25/30/50/60km 可选。",
points_en:"Fiber-optic tether system: the drone is tethered via fiber for stable power/link with ultra-low latency and anti-interference video, enabling long-endurance hovering for communication relay and extended surveillance. Distances 10/15/20/25/30/50/60 km available.",
specs:[["距离","10/15/20/25/30/50/60 km 可选"],["优势","长航时、低延迟、抗干扰（光纤系留）"],["用途","定点悬停/通信中继/长时间监测"]],
qa:[["和普通无人机区别？","光纤系留不限航时、链路抗干扰，适合长时间定点作业。"]]
},
/* ---------- 民用：AI 模块 ---------- */
{
id:"ai", cat:"AI模块", model:"TM01-Solo 基础版/高清版", name_zh:"TM01-Solo AI 模块（基础版/高清版）", name_en:"TM01-Solo AI Module",
risky:false,
kpis:["AI识别","红外热成像640×512(高清)","目标跟踪"],
points_zh:"TM01-Solo AI 模块：可为 FPV/穿越机加装 AI 识别与跟踪能力；高清版带红外热成像 640×512，支持目标识别/跟踪。用于行业巡检、安防、搜救等民用场景。",
points_en:"TM01-Solo AI module: adds AI recognition and tracking to FPV drones; the HD version adds 640×512 thermal imaging. For inspection, security and SAR applications.",
specs:[["版本","基础版 / 高清版（带红外热成像 640×512）"],["能力","AI目标识别/跟踪"],["用途","巡检/安防/搜救"]],
qa:[["装在哪？","加装于穿越机/高速机，增强识别跟踪能力。"]]
},
/* ---------- 军品线（仅参数，不做卖点） ---------- */
{
id:"gs05", cat:"高速机(参数)", model:"高速机-5寸", name_zh:"高速机-5寸（不含AI/基础版/高清版）", name_en:"High-speed 5-inch", risky:true,
specs:[["版本","不含AI模块 / 基础版 / 高清版(带红外热成像640×512)"],["机架","高速机5寸"],["AI模块","TM01-Solo(基础/高清版带热成像)"],["说明","高速+AI识别+热成像"]],
qa:[]
},
{
id:"gs07", cat:"高速机(参数)", model:"高速机-7寸", name_zh:"高速机-7寸", name_en:"High-speed 7-inch", risky:true,
specs:[["版本","不含AI模块 / 基础版 / 高清版(带红外热成像640×512)"],["机架","高速机7寸"],["AI模块","TM01-Solo(基础/高清版带热成像)"]],
qa:[]
},
{
id:"gs10", cat:"高速机(参数)", model:"高速机-10寸", name_zh:"高速机-10寸", name_en:"High-speed 10-inch", risky:true,
specs:[["版本","不含AI模块 / 基础版 / 高清版(带红外热成像640×512)"],["机架","高速机10寸"],["AI模块","TM01-Solo(基础/高清版带热成像)"]],
qa:[]
},
{
id:"fixedwing", cat:"固定翼(参数)", model:"1.3米固定翼", name_zh:"1.3米固定翼飞机", name_en:"1.3m Fixed-wing", risky:true,
specs:[["类型","1.3米固定翼飞机"],["说明","长航时固定翼平台"]],
qa:[]
},
{
id:"launcher", cat:"发射枪", model:"发射枪（含瞄准+屏）", name_zh:"高速机发射枪/发射架（含瞄准系统）", name_en:"Launcher gun / rack", risky:true,
specs:[["配置","发射枪+7寸显示屏 / 发射枪+4.5寸显示屏 / 发射架"],["瞄准系统","6倍 / 8倍光学瞄准镜"],["功能","实时接收高速机回传画面、内置DVR全程录像"],["提示","非发射功能支架（发射架）；配套高速机使用"]],
qa:[]
},
{
id:"lf70", cat:"巡飞弹(参数)", model:"DF70 巡飞弹", name_zh:"DF70 巡飞弹", name_en:"DF70 Loitering Munition", risky:true,
specs:[["动力","活塞发动机 / 涡喷"],["速度","120~180km/h（活塞）/ 250~350km/h（涡喷）"],["航时",">3h（活塞）/ >40min（涡喷）"],["航程","500~700km（活塞）/ >300km（涡喷）"],["载荷","20~25kg"]],
qa:[]
},
{
id:"lf35", cat:"巡飞弹(参数)", model:"DF35 巡飞弹", name_zh:"DF35 巡飞弹", name_en:"DF35 Loitering Munition", risky:true,
specs:[["动力","电机"],["弹射重量","35kg"],["巡航速度","120~150km/h"],["巡航高度","2000~5000m"],["航时","100~150min"]],
qa:[]
},
{
id:"lf30", cat:"巡飞弹(参数)", model:"DF30 巡飞弹", name_zh:"DF30 巡飞弹", name_en:"DF30 Loitering Munition", risky:true,
specs:[["动力","电机"],["弹射重量","30kg"],["巡航速度","120~150km/h"],["最大速度",">200km/h"],["航时",">1h"]],
qa:[]
},
{
id:"lf25", cat:"巡飞弹(参数)", model:"DF25 巡飞弹", name_zh:"DF25 巡飞弹", name_en:"DF25 Loitering Munition", risky:true,
specs:[["巡航高度","2000~5000m"],["巡航速度","120~150km/h"],["最大速度","180km/h（俯冲/巡航版本）"],["起飞重量","23~25kg"],["航时","~120min"]],
qa:[]
},
{
id:"lf15", cat:"巡飞弹(参数)", model:"DF15 巡飞弹", name_zh:"DF15 巡飞弹", name_en:"DF15 Loitering Munition", risky:true,
specs:[["载荷","5~7kg"],["起飞重量","15.5~17.5kg"],["速度","110~180km/h"],["巡航高度","2000~5000m"],["航时","85min/42min"]],
qa:[]
},
{
id:"lf10", cat:"巡飞弹(参数)", model:"DF10 巡飞弹", name_zh:"DF10 巡飞弹", name_en:"DF10 Loitering Munition", risky:true,
specs:[["动力","无刷电机"],["载荷","1.5~2.5kg"],["速度","72~180km/h"],["巡航高度","2000~5000m"],["航时","40~60min"]],
qa:[]
},
{
id:"lf7", cat:"巡飞弹(参数)", model:"DF7 巡飞弹", name_zh:"DF7 巡飞弹", name_en:"DF7 Loitering Munition", risky:true,
specs:[["动力","电机"],["起飞重量","6~7kg"],["载荷","0.5~1.5kg"],["巡航速度","26~30m/s"],["最大速度",">50m/s"],["航时",">40min"],["起降","筒射"]],
qa:[]
},
{
id:"lf4", cat:"巡飞弹(参数)", model:"DF4 巡飞弹", name_zh:"DF4 巡飞弹", name_en:"DF4 Loitering Munition", risky:true,
specs:[["动力","电机"],["起飞重量","5~6kg"],["载荷","500~1000g"],["速度","26~40m/s"],["航时",">30min"],["起降","筒射"]],
qa:[]
},
{
id:"lfsk", cat:"巡飞弹(参数)", model:"仿弹簧刀600 巡飞弹", name_zh:"仿弹簧刀600 巡飞弹", name_en:"Switchblade-600-style Loitering Munition", risky:true,
specs:[["动力","电机"],["起飞重量","25kg"],["载荷","5~7kg"],["速度","31~40m/s"],["航时",">50min"],["起降","筒射"]],
qa:[]
},
{
id:"rocket5", cat:"拦截机(参数)", model:"5寸火箭机", name_zh:"拦截机小火箭-5寸", name_en:"Interceptor rocket 5-inch", risky:true,
specs:[["机架","火箭机5寸"],["飞控","8S F722"],["电调","单体 8S 80A"],["电机","2212 1900kv"],["载重","200g"],["最大速度","380km/h"]],
qa:[]
},
{
id:"rocket7", cat:"拦截机(参数)", model:"7寸火箭机", name_zh:"拦截机小火箭-7寸", name_en:"Interceptor rocket 7-inch", risky:true,
specs:[["机架","火箭机7寸"],["载重","~300g"],["最大速度","~400km/h"]],
qa:[]
},
{
id:"rocket8", cat:"拦截机(参数)", model:"8寸火箭机", name_zh:"拦截机小火箭-8寸", name_en:"Interceptor rocket 8-inch", risky:true,
specs:[["机架","火箭机8寸"],["飞控","12S H743"],["电调","单体 12S 120A"],["电机","3120 1000kv"],["载重","500g"],["最大速度","≥480km/h"]],
qa:[]
},
{
id:"rocket9", cat:"拦截机(参数)", model:"9寸火箭机", name_zh:"拦截机小火箭-9寸", name_en:"Interceptor rocket 9-inch", risky:true,
specs:[["机架","火箭机9寸"],["轴距","366mm"],["机身全长","525mm"],["飞控","H7 系高压"],["电调","120A 12S 高压"],["电机","3320 900KV"]],
qa:[]
},
{
id:"rocket10", cat:"拦截机(参数)", model:"10寸火箭机", name_zh:"拦截机小火箭-10寸", name_en:"Interceptor rocket 10-inch", risky:true,
specs:[["机架","火箭机10寸"],["飞控","12S H743"],["电调","单体 12S 120A"],["电机","3320 700kv"],["载重","≤1kg"]],
qa:[]
}
]);
