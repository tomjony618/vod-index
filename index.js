// JSTV / vodspider 聚合源 - by Tom Jonn
// 更新日期: 2026-05-17

var sources = [
    // 🌟 主流影视（优先）
    {"name": "🌏 海外看", "api": "https://haiwaikan.com/api.php/provide/vod/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "🔴 量子资源", "api": "https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "🔴 红牛资源", "api": "https://www.hongniuzy2.com/api.php/provide/vod/from/hnm3u8/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "🏆 1080优质资源库", "api": "https://api.1080zyku.com/inc/api.php/provide/vod/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "🍎 唐人街", "api": "https://www.tangrenjie.tv/api.php/provide/vod/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "⚡ 闪电资源", "api": "https://sdzyapi.com/api.php/provide/vod/from/sdm3u8/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "🚀 光速资源", "api": "https://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "🦅 金鹰资源", "api": "https://jyzyapi.com/provide/vod/from/jinyingm3u8/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "🐼 酷点资源", "api": "https://api.kuapi.cc/api.php/provide/vod/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "🦊 卧龙资源", "api": "https://collect.wolongzyw.com/api.php/provide/vod/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "🌸 樱花资源", "api": "https://m3u8.apiyhzy.com/api.php/provide/vod/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "🦋 飞速资源", "api": "https://www.feisuzy.com/api.php/provide/vod/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "🌟 FOX资源", "api": "https://api.foxzyapi.com/api.php/provide/vod/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "☁️ 百度资源", "api": "https://api.apibdzy.com/api.php/provide/vod/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "39影视", "api": "https://www.39kan.com/api.php/provide/vod/", "searchable": 1, "quickSearch": 1, "filterable": 1},
    {"name": "乐活影视", "api": "https://lehootv.com/api.php/provide/vod/", "searchable": 1, "quickSearch": 1, "filterable": 1},

    // 🔞 伦理 / JAV / 写真（关闭快速搜索）
    {"name": "🔞 丝袜资源", "api": "https://siwazyw.cc/api.php/provide/vod/", "searchable": 1, "quickSearch": 0, "filterable": 0},
    {"name": "🔞 色南国", "api": "https://api.sexnguon.com/api.php/provide/vod/", "searchable": 1, "quickSearch": 0, "filterable": 0},
    {"name": "🔞 淫窝资源", "api": "https://api.yinwoapi.com/api.php/provide/vod/", "searchable": 1, "quickSearch": 0, "filterable": 0},
    {"name": "🔞 KK写真", "api": "https://kkzy.me/api.php/provide/vod/", "searchable": 1, "quickSearch": 0, "filterable": 0},
    {"name": "🔞 91麻豆", "api": "https://91md.me/api.php/provide/vod/", "searchable": 1, "quickSearch": 0, "filterable": 0},
    {"name": "🔞 色猫资源", "api": "https://api.maozyapi.com/inc/apijson_vod.php", "searchable": 1, "quickSearch": 0, "filterable": 0},
    {"name": "🔞 美少女资源", "api": "https://www.msnii.com/api/json.php", "searchable": 1, "quickSearch": 0, "filterable": 0},
    {"name": "🔞 葡萄资源", "api": "https://api.putaozy.net/inc/apijson_vod.php", "searchable": 1, "quickSearch": 0, "filterable": 0},
];

module.exports = sources;