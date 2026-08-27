/* 产品数据 · 第二批：巡检航拍机（M15/M16/M18/M20基础）+ 植保重载（Z50/Z200）+ 吊舱 C14 */
window.PRODUCTS = [].concat(window.PRODUCTS||[], [
{
id:"m16", cat:"巡检航拍机", model:"M16", name_zh:"M16 航拍机", name_en:"M16 Camera Drone",
kpis:["255g 轻量","720P 云台","20min","GPS/GLONASS"],
points_zh:"M16 是一款入门级轻量航拍机：255g、三轴自稳云台（720P）、GPS/光流定高、前后左右避障、轨迹飞行/定点环绕/手势拍摄。5G 数字图传，对新手友好、性价比高，适合航拍入门、亲子、活动记录。",
points_en:"The M16 is a lightweight entry-level camera drone: 255 g, 3-axis stabilized gimbal (720P), GPS/optical-flow hold, 360° obstacle avoidance, waypoints, orbit and gesture shooting. 5G digital video — friendly for beginners and budget buyers, great for basic aerial photography and event capture.",
specs:[
 ["重量","约 255g"],
 ["相机","720P 机械自稳云台"],
 ["飞行时间","约 20 分钟"],
 ["遥控/图传距离","约 5km（无干扰无遮挡）"],
 ["避障","前后左右，≤5m"],
 ["定位","GPS / GLONASS 双模 + 光流"],
 ["电机","1504 无刷"],
 ["电池","3.7V 2800mAh"],
 ["图传","5G 数字图传"],
 ["功能","轨迹飞行 / 定点环绕 / 手势拍摄"]
],
qa:[
 ["适合新手吗？","适合——轻量、好上手、带避障和跟随功能。"],
 ["图传多清晰？","720P 实时，拍照可到 4K（TF卡）。"],
]
},
{
id:"m18", cat:"巡检航拍机", model:"M18", name_zh:"M18 航拍机（<249g）", name_en:"M18 Camera Drone (<249g)",
kpis:["249g 免登记级","4K 云台","30min","10km 图传"],
points_zh:"M18 主打卡在 <249g（多地免登记/轻型类别），却给到 4K 三轴自稳云台、30 分钟续航、GPS/光流定高、前后左右避障。5G 数字图传 6–10km。轻巧便携，适合航拍入门、地产、活动、巡检轻载。",
points_en:"The M18 keeps under 249 g (lighter registration category in many markets) while offering a 4K 3-axis gimbal, 30-minute flight, GPS/optical-flow hold and 360° obstacle avoidance. 5G digital video up to 6–10 km. Light and portable — good for basic aerial photography, real estate, events and light inspection.",
specs:[
 ["重量","约 249g"],
 ["相机","4K 三轴机械自稳云台"],
 ["飞行时间","约 30 分钟"],
 ["遥控/图传距离","6–10km（无干扰无遮挡）"],
 ["避障","前后左右，≤20m"],
 ["定位","GPS / GLONASS 双模 + 光流"],
 ["电机","1503 无刷"],
 ["电池","7.4V 2000mAh"],
 ["图传","5G 数字图传"]
],
qa:[
 ["要不要登记？","249g 属于很多地区的较轻类别，具体以当地规定为准。"],
 ["能拍 4K 吗？","录像 4K（TF卡），三轴增稳，画质稳定。"],
]
},
{
id:"m15t", cat:"巡检航拍机", model:"M15 触屏版", name_zh:"M15 触屏版（6km）", name_en:"M15 Touch-screen (6km)",
kpis:["750g","4K 云台","36min","6km 图传","屏控"],
points_zh:"M15 触屏版：带屏遥控器（7 英寸），4K 三轴自稳云台、36 分钟续航、GPS/光流定高、前后左右避障、轨迹/环绕/跟随/手势拍摄，5G 数字图传 6km。屏控一体化，操作直观，适合巡查、测量辅助、航拍。",
points_en:"The M15 touch-screen version: built-in 7-inch screen controller, 4K 3-axis stabilized gimbal, 36-minute flight, GPS/optical-flow hold, 360° obstacle avoidance, waypoints/orbit/follow/gesture shooting, 5G digital video up to 6 km. Integrated controller — intuitive for surveying support, inspection and aerial photography.",
specs:[
 ["重量","约 750g（不含避障）"],
 ["相机","4K 三轴机械自稳云台"],
 ["飞行时间","约 36 分钟"],
 ["遥控/图传距离","6km（无干扰无遮挡）"],
 ["避障","前后左右，≤20m"],
 ["定位","GPS / GLONASS 双模 + 光流"],
 ["遥控器","7 英寸屏控"],
 ["电池","11.4V 3500mAh"],
 ["图传","5G 数字图传"],
 ["功能","轨迹 / 环绕 / 跟随 / 手势拍摄"]
],
qa:[
 ["屏控还是手机控？","触屏版为 7 英寸带屏遥控，一体化更直观。"],
 ["续航多久？","约 36 分钟。"],
]
},
{
id:"m15p", cat:"巡检航拍机", model:"M15 普控版", name_zh:"M15 普控版（3km）", name_en:"M15 Standard Controller (3km)",
kpis:["670g","4K 云台","36min","3km","性价比"],
points_zh:"M15 普控版：与触屏版同级的 4K 三轴自稳云台、36 分钟续航、GPS/光流定高、前后左右避障，仅图传距离为 3km 并配普通遥控器。性价比更高，适合预算敏感但需要 4K 画质的航拍/巡查。",
points_en:"The M15 standard-controller version: same 4K 3-axis stabilized gimbal, 36-minute flight, GPS/optical-flow hold and 360° obstacle avoidance, with 3 km video range and a standard controller. Better value for budget-minded buyers who still want 4K quality.",
specs:[
 ["重量","约 670g（不含避障）"],
 ["相机","4K 三轴机械自稳云台"],
 ["飞行时间","约 36 分钟"],
 ["遥控/图传距离","3km（无干扰无遮挡）"],
 ["避障","前后左右，≤20m"],
 ["定位","GPS / GLONASS 双模 + 光流"],
 ["遥控器","普通遥控器"],
 ["电池","11.4V 3500mAh"],
 ["图传","5G 数字图传"]
],
qa:[
 ["和触屏版差在哪？","图传距离 3km（非6km）+ 普通遥控器，其余配置同级，更便宜。"],
 ["能 4K 吗？","能，4K 三轴增稳云台。"],
]
},
{
id:"m20b", cat:"巡检航拍机", model:"M20 基础版", name_zh:"M20 基础版（激光避障）", name_en:"M20 Base (Laser Obstacle Avoidance)",
kpis:["900g","4K 云台","55min","10km","激光避障"],
points_zh:"M20 基础版：更高一级的巡检航拍平台——4K 三轴自稳云台、55 分钟超长续航、GPS/光流定高、激光避障（前后左右 ≤20m）、5G 数字图传 6–10km、7 英寸屏控。最大负载 500g、起飞重 1746g。适合专业航拍、巡检、测绘辅助。",
points_en:"The M20 Base is a step-up inspection platform: 4K 3-axis stabilized gimbal, 55-minute endurance, GPS/optical-flow hold, laser obstacle avoidance (360°, ≤20 m), 5G digital video up to 6–10 km and a 7-inch controller. 500 g payload capacity at 1746 g takeoff weight — suited to professional aerial photography, inspection and surveying support.",
specs:[
 ["重量","约 900g（不含避障）"],
 ["相机","4K 三轴机械自稳云台"],
 ["飞行时间","约 55 分钟"],
 ["遥控/图传距离","6–10km（无干扰无遮挡）"],
 ["避障","激光 · 前后左右 ≤20m"],
 ["定位","GPS / GLONASS 双模 + 光流"],
 ["最大负载","500g"],
 ["最大起飞重量","1746g"],
 ["遥控器","7 英寸屏控"],
 ["电池","11.4V 4500mAh / 7500mAh"],
 ["图传","5G 数字图传"]
],
qa:[
 ["续航多久？","可达约 55 分钟（视电池与负载）。"],
 ["负载多大？","最大 500g，可挂轻量载荷。"],
 ["避障强吗？","激光避障，前后左右 ≤20m。"],
]
},
{
id:"z50", cat:"植保/重载", model:"DX-Z50", name_zh:"DX-Z50 重载无人机", name_en:"DX-Z50 Heavy-lift Drone",
kpis:["载重 50kg","起飞重 90kg","双RTK","IP54","60min 空载","15km 图传"],
points_zh:"DX-Z50 是一款 50kg 级重载无人机：双 RTK 厘米级定位、60 分钟空载/16 分钟满载续航、15km 数图一体链路、7 英寸触控、IP54 防护，支持快速换电池。适合农业植保（大载重）、物流投送、行业挂载与吊运。",
points_en:"The DX-Z50 is a 50 kg-class heavy-lift platform: dual-RTK centimeter positioning, 60 min empty / 16 min at full load, 15 km integrated video/link, 7-inch touch controller, IP54 protection and fast battery swap. Ideal for agricultural spraying (heavy payload), logistics delivery, industrial mounting and lifting.",
points_ru:"DX-Z50 — тяжёлый дрон класса 50 кг: двойной RTK сантиметровой точности, 60 мин без груза / 16 мин с полным грузом, 15 км видеосвязи, 7-дюймовый сенсор, IP54 и быстрая замена батарей. Для агроопрыскивания, логистики и промышленных задач.",
specs:[
 ["轴数","4 轴"],
 ["裸机/起飞重量","17kg / 90kg"],
 ["最大载荷","50kg"],
 ["空载/满载续航","60min / 16min"],
 ["定位","双 RTK 厘米级定位定向"],
 ["图传","15km（海平面无遮挡）· 1080P · 65Mbps"],
 ["遥控器","7 英寸触控屏"],
 ["电池","18S×2（快速更换）"],
 ["防护","IP54"],
 ["工作温度","-20°C ~ 65°C"],
 ["充电器","3000W"]
],
qa:[
 ["载重多少？","最大 50kg，起飞重 90kg。"],
 ["飞多久？","空载约 60 分钟，满载约 16 分钟。"],
 ["定位精度？","双 RTK，厘米级。"],
 ["防水吗？","IP54 防水防尘，可低温 -20°C 作业。"],
]
},
{
id:"z200", cat:"植保/重载", model:"DX-Z200", name_zh:"DX-Z200 超重载无人机", name_en:"DX-Z200 Ultra Heavy-lift Drone",
kpis:["载重 250kg","起飞重 335kg","RTK+GNSS+视觉","30km 图传","喊话"],
points_zh:"DX-Z200 是 250kg 级超重载平台：最大起飞重 335kg，GNSS+视觉+RTK 定位，30km 数图遥一体链路，支持喊话功能，28 串 47000mAh 电池、10KW 充电器。适合大规模植保、重物吊运、应急投送、行业超重载应用。",
points_en:"The DX-Z200 is a 250 kg-class ultra-heavy platform: up to 335 kg takeoff weight, GNSS+visual+RTK positioning, 30 km integrated video/link, loudspeaker support, 28S 47000 mAh battery and a 10 kW charger. Built for large-scale spraying, heavy lifting, emergency delivery and industrial ultra-heavy uses.",
points_ru:"DX-Z200 — сверхтяжёлый дрон класса 250 кг: взлётный вес до 335 кг, GNSS+визуальный+RTK, 30 км видеосвязи, поддержка громкоговорителя, батарея 28S 47000 мА·ч и зарядное устройство 10 кВт. Для крупного опрыскивания и тяжёлых работ.",
specs:[
 ["轴数","4 轴"],
 ["裸机/起飞重量","85kg / 335kg"],
 ["最大载荷","250kg"],
 ["轴距","2800mm"],
 ["桨叶","72×25 寸直桨"],
 ["飞行时间","最长 22min"],
 ["定位","GNSS + 视觉 + RTK"],
 ["图传","30km（数图遥一体）"],
 ["电池","28 串 1 并 · 47000mAh"],
 ["充电器","10KW"],
 ["附加","支持喊话 / 工作温度 -10~40°C"]
],
qa:[
 ["载重多少？","最大载荷 250kg，起飞重 335kg。"],
 ["飞多久？","最长约 22 分钟（大载重平台，按负载调整）。"],
 ["定位怎么算？","GNSS+视觉+RTK 多源定位，精度高。"],
 ["能喊话吗？","支持喊话功能，可做应急/播报。"],
]
},
{
id:"c14", cat:"吊舱", model:"C14 四光三轴", name_zh:"C14 四光三轴吊舱", name_en:"C14 4-Sensor 3-Axis Gimbal",
kpis:["四光复合","可见光双摄+热成像+激光测距","三轴增稳","AI识别"],
points_zh:"C14 是一款四光三轴吊舱：可见光双摄 + 红外热成像 + 激光测距，三轴增稳，支持 AI 目标锁定与 AI 制导（需 S 系列飞控）。一颗吊舱同时解决可见光、日/夜、测距与识别需求，适合巡检、安防、搜救、执法取证。",
points_en:"The C14 is a 4-sensor 3-axis gimbal: dual visible camera + thermal imaging + laser ranging, with 3-axis stabilization and AI target lock / AI guidance (with S-series flight controller). A single pod covers visible, day/night, ranging and recognition needs — ideal for inspection, security, search & rescue and evidence gathering.",
specs:[
 ["类型","四光（可见光双摄 + 热成像 + 激光测距）三轴吊舱"],
 ["增稳","三轴稳定"],
 ["热成像","红外热成像（测温/超温报警）"],
 ["可见光","双摄广角 + 变焦"],
 ["激光测距","配测距模块"],
 ["AI","AI 目标锁定、AI 制导（需 S 系列飞控）"],
 ["用途","巡检 / 安防 / 搜救 / 取证"]
],
qa:[
 ["主要卖点？","四光一体：可见光双摄+热成像+激光测距+AI 识别，单舱多能。"],
 ["能测温吗？","热成像支持测温/超温报警。"],
 ["配哪个飞控？","AI 制导需 S 系列飞控。"],
]
}
]);
