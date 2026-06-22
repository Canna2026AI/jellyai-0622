const state = {
  page: "home",
  assistantSub: "assistant",
  detailTab: "dialog",
  wechatTab: "accounts",
  selectedAssistant: null,
  modal: null,
  drawer: null,
  knowledgeStep: 1,
  knowledgeCreateStep: 1,
  knowledgeCreateType: "",
  knowledgeSegmentMode: "auto",
  knowledgePreview: false,
  authStep: 1,
  chatFilter: "全部对话",
  chatSort: "newest",
  chatSortOpen: false,
  chatSearchOpen: false,
  chatSearchMode: "fuzzy",
  chatSearchModeOpen: false,
  chatSearchQuery: "",
  chatSettingsOpen: false,
  chatSettingsTab: "automation",
  workHoursEnabled: false,
  workScheduleCount: 1,
  workTimeRangeCount: 1,
  quickMessageSearch: "",
  customViewStep: 1,
  customViewName: "",
  customViewAccess: "all",
  customViewFilterRows: 1,
  customViewFieldOpen: false,
  customViewManual: false,
  chatSidebarCollapsed: false,
  selectedConversation: null,
  analyticsTab: "ai_chat",
  analyticsRange: "7",
  analyticsExported: false,
  skillFilter: "all",
  skillGuideVisible: true,
  selectedSkillId: null,
  importSkillSelected: [],
  aiToolFilter: "all",
  aiToolGuideVisible: true,
  detailToolPickerTab: "app",
  detailModelOpen: false,
  marketingRuleView: "list",
  marketingRuleId: null,
  sidebarCollapsed: false,
  marketingNavOpen: true,
  marketingSub: "workbench",
  marketingTagSub: "custom",
  marketingTagTab: "customer",
  keywordTagTab: "rules",
  messageBlastSub: "private",
  messageBlastTab: "tasks",
  autoFriendSub: "excel",
  operationSub: "keywordReply",
  operationTab: "content",
  groupManageSub: "welcome",
  groupManageTab: "welcome",
  materialScope: "personal",
  materialType: "all",
  antiSealTab: "accounts",
  flowSub: "template",
  flowTemplateFilter: "all",
  flowMyFilter: "all",
  flowEditing: false,
  selectedFlowTemplateId: null,
  flowTriggerCategory: "dialog",
  flowActionCategory: "yuju",
  consoleStatus: [],
  messages: [
    {
      role: "assistant",
      text: "Hi~ 我是您的智能助手，想要我协助您完成什么任务？发送消息给我吧！",
    },
    {
      role: "user",
      text: "欧洲海运包税运行线路",
    },
    {
      role: "assistant",
      text:
        "目前常见的欧洲海运包税运行线路为：深圳装柜 → 盐田港 → 鹿特丹港落港 → 荷兰/比利时清关 → 再通过快递或卡车派送至欧洲各地仓库或收件地址。",
      meta: "多模态知识库：物流问答 · 执行成功 · 信息来源：[1] 物流问答库.xlsx · 消耗 token：819 · 动作执行：1次 · 预估费用：0.002元",
    },
  ],
  convMessages: [
    { role: "other", text: "@郑楚佳 促销-欧洲海运普船(卡派)时效" },
    {
      role: "ai",
      text:
        "促销-欧洲海运普船(卡派)的派送时效为开船后45天左右。另外补充该渠道相关信息供你参考：可服务德国、法国、波兰等多个海外仓；仅接收普货；非亚马逊商业地址加收100RMB/票。",
      meta: "工具执行：1 次",
    },
    { role: "other", text: "给我一个总价 我的重量是 50kg" },
    {
      role: "ai",
      text:
        "目前该渠道 50kg 普货可按实际重量计算，商业地址会有额外派送费用。若要核算最终报价，请补充派送国家、城市和件数。",
      meta: "工具执行：1 次",
    },
    { role: "system", text: "已转入人工对话，操作人：Kelvin" },
    { role: "me", text: "你好" },
  ],
};

const menu = [
  ["home", "⌂", "首页"],
  ["chat", "◔", "聚合对话"],
  ["ai", "▣", "AI 智能体"],
  ["channels", "⊞", "对话渠道"],
  ["wechat", "☏", "企业微信托管"],
  ["knowledge", "▤", "知识库"],
  ["flow", "▦", "AI流程"],
  ["marketing", "◌", "AI微信营销"],
  ["contacts", "♙", "联系人管理"],
  ["analytics", "▥", "数据分析"],
  ["teach", "◇", "产品教学"],
  ["settings", "⚙", "系统设置"],
];

const marketingSubs = [
  ["workbench", "对话工作台"],
  ["tags", "营销标签"],
  ["blast", "消息群发"],
  ["friend", "自动加好友"],
  ["operation", "自动化运营"],
  ["groups", "群聊管理"],
  ["accounts", "托管账号"],
  ["materials", "素材管理"],
  ["antiSeal", "防封设置"],
  ["records", "对话记录查询"],
  ["docs", "教学文档"],
];

const assistantSubs = [
  ["assistant", "对话智能体", "⌘"],
  ["knowledge", "知识管理", "▤"],
  ["skill", "AI技能", "✣"],
  ["tool", "AI工具", "⌕"],
  ["auto", "AI自动化", "ϟ"],
  ["intent", "意图管理", "♧"],
  ["summary", "AI智能总结", "▧"],
];

const detailTabs = ["设置", "工具", "技能", "知识", "意图", "集成", "成员"];
const tabMap = {
  设置: "setting",
  工具: "tool",
  技能: "skill",
  知识: "knowledge",
  意图: "intent",
  集成: "integration",
  成员: "members",
};

const channels = [
  ["微信客服(企业微信)", "通过第三方集成接入微信客服功能", "已连接账号：1", "管理", "💬"],
  ["企业微信代运营(私聊/群聊)", "通过企业微信托管模式进行团队协作和客户沟通", "已连接账号：1", "管理", "🟠"],
  ["抖音企业号(私信)", "连接抖音企业号，与粉丝进行互动和沟通", "尚未连接任何账号", "添加账号", "♪"],
  ["微信公众号", "将您的微信公众号接入到聚合对话中", "尚未连接任何账号", "添加账号", "🟢"],
  ["小红书专业号(私信)", "支持小红书专业号私信接入聚合对话中", "尚未连接任何账号", "添加账号", "红"],
  ["小红书专业号(评论)", "支持小红书专业号评论接入聚合对话中", "尚未连接任何账号", "添加账号", "红"],
  ["快手专业号", "将快手专业号对话接入聚合对话中", "尚未连接任何账号", "添加账号", "快"],
  ["微信客服(原生)", "将您的微信客服对话接入到聚合对话中", "尚未连接任何账号", "添加账号", "微"],
  ["QQ机器人", "将QQ机器人对话接入聚合对话中", "尚未连接任何账号", "添加账号", "Q"],
  ["视频号/微信小店", "将视频号/微信小店对话接入聚合对话中", "尚未连接任何账号", "添加账号", "店"],
  ["钉钉机器人", "快速集成智能助手到钉钉机器人", "尚未连接任何账号", "添加账号", "钉"],
  ["飞书机器人", "快速集成智能助手到飞书机器人", "尚未连接任何账号", "添加账号", "飞"],
  ["Web页面", "在您的网站页面展现对话浮窗与对话界面", "尚未连接任何账号", "添加账号", "W"],
  ["WhatsApp Business", "将 WhatsApp Business 对话接入聚合对话中", "尚未连接任何账号", "添加账号", "WA"],
  ["Telegram Bot", "将 Telegram Bot 对话接入聚合对话中", "尚未连接任何账号", "添加账号", "T"],
];

const conversationFilters = [
  "全部对话",
  "人工对话",
  "AI对话",
  "指给我的",
];

const defaultCustomConversationViews = [
  "未人工回复",
  "收藏",
  "小红书",
  "抖音",
  "公众号",
  "视频号/微信小店",
  "企业微信托管",
  "网站页面",
];

const customViewStorageKey = "jerry-ai-custom-conversation-views";

function loadCustomConversationViews() {
  try {
    const savedViews = JSON.parse(localStorage.getItem(customViewStorageKey) || "[]");
    return Array.isArray(savedViews)
      ? [...defaultCustomConversationViews, ...savedViews.filter((name) => typeof name === "string" && !defaultCustomConversationViews.includes(name))]
      : [...defaultCustomConversationViews];
  } catch {
    return [...defaultCustomConversationViews];
  }
}

function saveCustomConversationViews(views) {
  try {
    const createdViews = views.filter((name) => !defaultCustomConversationViews.includes(name));
    localStorage.setItem(customViewStorageKey, JSON.stringify(createdViews));
  } catch {
    // The group still works for the current session when browser storage is unavailable.
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const customConversationViews = loadCustomConversationViews();

const quickMessageStorageKey = "jerry-ai-quick-messages";

function loadQuickMessageData() {
  try {
    const saved = JSON.parse(localStorage.getItem(quickMessageStorageKey) || "{}");
    return {
      groups: Array.isArray(saved.groups) ? saved.groups : [],
      replies: Array.isArray(saved.replies) ? saved.replies : [],
    };
  } catch {
    return { groups: [], replies: [] };
  }
}

function saveQuickMessageData() {
  try {
    localStorage.setItem(quickMessageStorageKey, JSON.stringify(quickMessageData));
  } catch {
    // Keep the current session usable when browser storage is unavailable.
  }
}

const quickMessageData = loadQuickMessageData();

const conversationMap = {
  全部对话: [
    ["group", "欧诚国际物流&集简云对接群", "Kelvin", "2小时14分钟", "你好", "orange", false, "13800138001"],
    ["canna", "Canna郑", "canna测试", "7小时51分钟", "您好，我可以为您解答物流相关的问题...", "green", true, "13900139002"],
    ["demo", "演示联系人", "AI", "12小时44分钟", "好的，您可以点击链接预约演示，咨询报价", "green", true, "13700137003"],
  ],
  人工对话: [["group", "欧诚国际物流&集简云对接群", "Kelvin", "2小时14分钟", "你好", "orange", false, "13800138001"]],
  AI对话: [
    ["canna", "Canna郑", "canna测试", "7小时51分钟", "您好，我可以为您解答物流相关的问题...", "green", true, "13900139002"],
    ["demo", "演示联系人", "AI", "12小时44分钟", "好的，您可以点击链接预约演示，咨询报价", "green", true, "13700137003"],
  ],
  指给我的: [["group", "欧诚国际物流&集简云对接群", "Kelvin", "2小时14分钟", "你好", "orange", false, "13800138001"]],
  企业微信托管: [["group", "欧诚国际物流&集简云对接群", "Kelvin", "2小时14分钟", "你好", "orange", false, "13800138001"]],
};

const analyticsTabs = [
  ["ai_chat", "AI对话"],
  ["artificial_chat", "人工对话"],
  ["user_data", "用户数据"],
  ["ai_flows", "AI流程"],
];

const analyticsData = {
  ai_chat: {
    title: "AI对话",
    filters: ["对话助手", "全部渠道", "授权账户"],
    metrics: [
      ["会话数量", 2, "次"],
      ["接待用户数", 2, "次"],
      ["消息数量", 6, "次"],
      ["转人工会话量", 1, "次"],
      ["平均每会话消息数", 3, "次"],
    ],
    chartTitle: "会话次数",
    legend: [
      ["会话量", "#22a8d8"],
      ["消息量", "#5a83f7"],
      ["转人工会话量", "#cbd3de"],
    ],
    values: [
      [0.1, 0.1, 0.05],
      [0.1, 0.1, 0.05],
      [0.1, 0.1, 0.05],
      [0.1, 0.1, 0.05],
      [0.1, 0.1, 0.05],
      [0.1, 0.1, 0.05],
      [2, 6, 1],
      [0.1, 0.1, 0.05],
    ],
    yMax: 6,
  },
  artificial_chat: {
    title: "人工对话",
    filters: ["全部坐席", "全部渠道", "授权账户"],
    metrics: [
      ["会话数量", 1, "次"],
      ["接待用户数", 1, "次"],
      ["已解决会话数量", 0, "次"],
      ["未解决会话数量", 1, "次"],
      ["平均每会话消息数", 24, "次"],
    ],
    chartTitle: "会话次数",
    legend: [
      ["未解决会话数", "#22a8d8"],
      ["已解决会话数", "#5a83f7"],
    ],
    values: [[0.05, 0.05], [0.05, 0.05], [0.05, 0.05], [0.05, 0.05], [0.05, 0.05], [0.05, 0.05], [1, 0.05], [0.05, 0.05]],
    yMax: 1,
  },
  user_data: {
    title: "用户数据",
    filters: ["全部用户分组", "全部渠道"],
    metrics: [
      ["总用户数量", 5, "人"],
      ["新用户数量", 5, "人"],
      ["有会话用户数量", 5, "人"],
    ],
    chartTitle: "用户数量",
    legend: [
      ["新用户数量", "#22a8d8"],
      ["有会话用户数量", "#5a83f7"],
    ],
    values: [[0.1, 0.1], [0.1, 0.1], [0.1, 0.1], [0.1, 0.1], [0.1, 0.1], [0.1, 0.1], [5, 5], [0.1, 0.1]],
    yMax: 5,
  },
  ai_flows: {
    title: "AI流程",
    filters: ["全部AI流程"],
    metrics: [
      ["全部执行次数", 0, "次"],
      ["执行成功次数", 0, "次"],
      ["执行失败次数", 0, "次"],
    ],
    chartTitle: "AI流程执行次数",
    legend: [
      ["全部执行次数", "#22a8d8"],
      ["执行成功次数", "#5a83f7"],
      ["执行失败次数", "#cbd3de"],
    ],
    values: [[0.04, 0.04, 0.04], [0.04, 0.04, 0.04], [0.04, 0.04, 0.04], [0.04, 0.04, 0.04], [0.04, 0.04, 0.04], [0.04, 0.04, 0.04], [0.04, 0.04, 0.04], [0.04, 0.04, 0.04]],
    yMax: 2,
  },
};

const knowledgeBases = [
  {
    id: "logistics",
    name: "物流问答",
    count: "1条数据",
    type: "多模态",
    icon: "◎",
    size: "12.96KB",
  },
];

const skills = [
  {
    id: "lead_external_1",
    name: "用户留资发送企业微信外部群",
    desc: "将用户留资(电话，微信号，需求）发送到企业微信外部群聊中",
    channel: "通用",
    source: "mine",
    icon: "企",
    tool: true,
    prompt: "使用企业微信工具发送消息，消息内容格式：\n\n用户名称： 姓名\n用户电话：//你收集到的电话\n用户需求总结：//你总结的用户需求",
  },
  {
    id: "lead_external_2",
    name: "用户留资发送企业微信外部群",
    desc: "将用户留资(电话，微信号，需求）发送到企业微信外部群聊中",
    channel: "通用",
    source: "mine",
    icon: "企",
    tool: true,
    prompt: "使用企业微信工具发送消息，消息内容格式：\n\n用户名称： 姓名\n用户电话：//你收集到的电话\n用户需求总结：//你总结的用户需求",
  },
  {
    id: "lead_group_internal",
    name: "用户留资信息收集后发送企业微信群消息(内部群)",
    desc: "当用户告知了手机号或者微信号后，将用户联系信息和需求总结发送企业微信群机器人",
    channel: "通用",
    source: "mine",
    icon: "微",
    tool: true,
    prompt: "用户留下联系方式后，将姓名、电话、微信号和需求摘要发送到企业微信群机器人。",
  },
  {
    id: "transfer_human_1",
    name: "转人工服务",
    desc: "将指定对话分配给人工客服处理，仅在满足提示词中特定的转入人工服务场景时使用",
    channel: "通用",
    source: "mine",
    icon: "AI",
    tool: false,
    prompt: "当用户明确要求人工客服、报价、合同或投诉时，触发转人工服务。",
  },
  {
    id: "transfer_human_2",
    name: "转人工服务",
    desc: "将指定对话分配给人工客服处理，仅在满足提示词中特定的转入人工服务场景时使用",
    channel: "通用",
    source: "mine",
    icon: "AI",
    tool: false,
    prompt: "当用户明确要求人工客服、报价、合同或投诉时，触发转人工服务。",
  },
  {
    id: "stop_reply",
    name: "停止回复",
    desc: "需要停止回复，不要回复，沉默等场景时使用",
    channel: "通用",
    source: "mine",
    icon: "AI",
    tool: false,
    prompt: "当用户表达不要回复、停止联系、已处理等意图时，不再继续发送 AI 回复。",
  },
  {
    id: "auto_add_wechat",
    name: "企业微信自动加好友",
    desc: "用户提供了手机号后，使用企业微信加好友",
    channel: "通用",
    source: "template",
    icon: "企",
    tool: true,
    prompt: "用户留下手机号后，调用企业微信工具自动添加外部联系人。",
  },
  {
    id: "template_transfer",
    name: "转人工服务",
    desc: "将指定对话分配给人工客服处理，仅在满足提示词中特定的转入人工服务场景时使用",
    channel: "通用",
    source: "template",
    icon: "AI",
    tool: false,
    prompt: "模板：按指定规则将对话分配给人工坐席。",
  },
  {
    id: "template_stop",
    name: "停止回复",
    desc: "需要停止回复，不要回复，沉默等场景时使用",
    channel: "通用",
    source: "template",
    icon: "AI",
    tool: false,
    prompt: "模板：停止 AI 对指定对话继续回复。",
  },
  {
    id: "redbook_card",
    name: "小红书自动发送留资卡片",
    desc: "在用户有联系我们意向时，发送小红书留资，引导用户点击加好友",
    channel: "小红书专业号(私信)",
    source: "template",
    icon: "红",
    tool: true,
    prompt: "模板：在用户表达联系意向时发送小红书留资卡片。",
  },
  {
    id: "webhook_demo",
    name: "AI智能体调用第三方接口演示示例",
    desc: "通过webhook请求的方式调用第三方接口搜索小猫咪图片",
    channel: "通用",
    source: "template",
    icon: "API",
    tool: true,
    prompt: "模板：调用第三方 Webhook 并将结果返回给用户。",
  },
  {
    id: "room_booking",
    name: "客房信息查询与预定",
    desc: "用户咨询客房信息，查询客房是否可预定，客房预定下单等功能",
    channel: "通用",
    source: "template",
    icon: "订",
    tool: true,
    prompt: "模板：查询房态、报价并生成预定订单。",
  },
  {
    id: "file_generate",
    name: "文件读取与文件生成",
    desc: "用户发送的是文件，包括pdf，ppt, word, excel时，使用此技能进行文件读取，同时也支持将markdown内容转化为文档文件",
    channel: "通用",
    source: "template",
    icon: "文",
    tool: true,
    prompt: "模板：读取上传文件内容并按需生成文档。",
  },
];

const aiTools = [
  { name: "WhatsApp托管", status: "未关联授权账号", icon: "WA", connected: false },
  { name: "豆包AI视频生成(Seedance原生)", status: "未关联授权账号", icon: "山", connected: false },
  { name: "豆包AI视频生成(Seedance内置)", status: "无需授权", icon: "山", connected: true },
  { name: "销氪公有云", status: "未关联授权账号", icon: "销", connected: false },
  { name: "OpenClaw", status: "未关联授权账号", icon: "OC", connected: false },
  { name: "广发银行财资云", status: "未关联授权账号", icon: "广", connected: false },
  { name: "Resend", status: "未关联授权账号", icon: "R", connected: false },
  { name: "TikTok Shop", status: "未关联授权账号", icon: "TT", connected: false },
  { name: "Airwallex", status: "未关联授权账号", icon: "A", connected: false },
  { name: "SAP定制版本", status: "未关联授权账号", icon: "SAP", connected: false },
  { name: "F6", status: "未关联授权账号", icon: "F6", connected: false },
  { name: "江苏银行", status: "未关联授权账号", icon: "苏", connected: false },
  { name: "重庆富民银行", status: "未关联授权账号", icon: "渝", connected: false },
  { name: "兴业银行财资云", status: "未关联授权账号", icon: "兴", connected: false },
  { name: "鲸采云", status: "未关联授权账号", icon: "采", connected: false },
  { name: "Telegram Bot", status: "未关联授权账号", icon: "T", connected: false },
];

const automationItems = [
  ["AI 自动跟进", "在用户长时间未回复时，AI 根据历史上下文主动发起一次礼貌跟进"],
  ["坐席超时 AI 自动回复", "当人工坐席在设定时间内未回复，AI 将代为发送一次礼貌回复"],
  ["AI 企业微信群监管", "当企业微信群内用户问题没有及时解答时，AI 自动回复"],
  ["AI 多模态内容发送", "配置多种消息格式（图片、视频音频文件、音频），支持跨渠道发送"],
  ["AI 长回复内容拆分", "当AI回复内容过长时，AI自动编写并拆分成多条发送"],
  ["AI 知识补充", "允许 AI 根据对话自动补充知识内容（可选人工审核）"],
  ["自定义AI内容提取/总结", "设置内容提取或者总结任务由AI自动完成"],
];

const marketingRules = [
  { id: "123", name: "123", enabled: false },
  { id: "test", name: "测试", enabled: true },
];

const flowTemplates = [
  {
    id: "contacts-mail",
    category: "app",
    title: "通讯录变更同步邮件",
    icon: "飞",
    iconClass: "blue",
    desc: "当钉钉通讯录信息更新时，发送邮件当钉钉通讯录信息更新时，发送邮件当钉钉通讯录信息更新时，发送邮件当钉钉...",
    guide: "当钉钉通讯录信息更新时，获取变更成员信息，并发送邮件同步给指定负责人",
    trigger: "钉钉: 当通讯录信息更新时",
    action: "邮箱: 发送邮件",
    templateId: "5eb1f1fb-b379-4336-8c32-a2fc4cd6d198",
  },
  {
    id: "redbook-card",
    category: "app",
    title: "当用户进入小红书私信时发送企业微信名片",
    icon: "小红书",
    iconClass: "red",
    desc: "当用户进入小红书私信没有开口说话时，主动发送企业微信名片，用户点击后可自动加企业微信当用户进入小红书私...",
    guide: "当小红书收到了系统消息时，发送卡片消息给客户",
    trigger: "小红书第三方客服: 当有系统私信消息时",
    action: "小红书第三方客服: 发送私信消息",
    templateId: "f72597d5-9c63-421d-ba4c-c438ec397e53",
  },
  {
    id: "douyin-daily",
    category: "timer",
    title: "每天日查询抖音视频播放变化并发送到企业微信群",
    icon: "◷",
    iconClass: "orange",
    desc: "每天早上8点查询抖音账户昨天的视频播放量并对比前天，将数据变动情况发送到企业微信群每天早上8点查询抖音...",
    guide: "每天早上8点查询抖音账号昨天视频播放量，并发送数据变化到企业微信群",
    trigger: "定时启动任务: 当每天指定时间启动时",
    action: "企业微信机器人: 发送群消息",
    templateId: "bc4670b2-bbe7-423f-ac1a-4ba72c3a2cb2",
  },
];

const flowTriggerGroups = {
  dialog: {
    title: "对话内容触发",
    items: [["yuju", "语聚AI", "语"]],
    cards: [
      ["当AI助手无匹配知识时", "当AI助手无匹配知识时触发流程", "语"],
      ["当意图不满足时", "当意图不满足时触发流程", "语"],
      ["当知识库文件同步完成时", "当知识库中有文件完成同步或报错时，获取数据并触发流程运行。", "语"],
      ["当指定联系人分组有新增联系人时", "当指定联系人分组有新增联系人时同步数据并触发流程。", "语"],
      ["当聚合对话完成时", "当聚合对话完成时同步数据并触发流程", "语"],
      ["当意图满足时", "当意图满足时同步数据并触发流程", "语"],
    ],
  },
  timer: {
    title: "定时触发",
    items: [["timer", "定时启动任务", "◷"]],
    cards: [
      ["当每天指定时间启动时", "当每天指定时间启动时", "◷"],
      ["当指定星期天数启动时", "当指定星期天数启动时", "◷"],
      ["当每个月指定日期启动时", "当每个月指定日期启动时", "◷"],
      ["当按预设公式自定义启动时", "按预设公式自定义启动", "◷"],
      ["当每小时特定时间启动时", "当每小时特定时间启动时", "◷"],
    ],
  },
};

const flowActionGroups = {
  yuju: {
    title: "语聚AI",
    items: [["yuju", "语聚AI", "语"]],
    cards: [
      ["使用AI助手生成回复", "将输入内容交给指定AI助手生成答复", "语"],
      ["添加联系人标签", "为当前联系人自动添加或移除标签", "语"],
      ["更新联系人字段", "将流程中的变量写入联系人字段", "语"],
    ],
  },
  app: {
    title: "精选应用",
    items: [
      ["wechat", "企业微信机器人", "企"],
      ["redbook", "小红书第三方客服", "红"],
      ["webhook", "Webhook", "API"],
    ],
    cards: [
      ["企业微信机器人: 发送群消息", "将流程结果发送到指定企业微信群", "企"],
      ["小红书第三方客服: 发送私信消息", "通过小红书第三方客服发送私信", "红"],
      ["Webhook: 发送请求", "调用外部接口并传递流程变量", "API"],
    ],
  },
};

const app = document.getElementById("app");
const toastEl = document.getElementById("toast");

function setState(patch) {
  Object.assign(state, patch);
  render();
}

function showToast(text) {
  toastEl.textContent = text;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 1800);
}

function iconBox(text, cls = "assistant-icon") {
  return `<div class="${cls}">${text}</div>`;
}

function render() {
  app.innerHTML = `
    <div class="app-shell ${state.sidebarCollapsed ? "nav-collapsed" : ""}">
      ${renderSidebar()}
      <main class="main">
        ${renderTopbar()}
        ${renderPage()}
      </main>
    </div>
    ${renderModal()}
    ${renderDrawer()}
  `;
  bindEvents();
}

function renderSidebar() {
  return `
    <aside class="sidebar ${state.sidebarCollapsed ? "collapsed" : ""}">
      <div class="brand"><span class="brand-mark"></span><span>Jerry AI</span></div>
      <div class="nav">
        ${menu
          .map(
            ([id, ico, label]) => {
              const active = state.page === id || (id === "ai" && ["knowledgeCreate", "skillEdit"].includes(state.page));
              if (id === "marketing") {
                return `
          <div class="nav-item marketing-main ${active ? "active" : ""}" data-marketing-toggle title="${label}">
            <span class="nav-icon">${ico}</span><span>${label}</span><span class="nav-caret">${state.marketingNavOpen ? "⌃" : "⌄"}</span>
          </div>
          ${
            state.marketingNavOpen
              ? `<div class="marketing-nav-children">
                ${marketingSubs
                  .map(
                    ([subId, subLabel]) => `<div class="marketing-nav-child ${state.page === "marketing" && state.marketingSub === subId ? "active" : ""}" data-marketing-sub="${subId}">${subLabel}</div>`
                  )
                  .join("")}
              </div>`
              : ""
          }`;
              }
              return `
          <div class="nav-item ${active ? "active" : ""}" data-page="${id}" title="${label}">
            <span class="nav-icon">${ico}</span><span>${label}</span>
          </div>`;
            }
          )
          .join("")}
      </div>
      <div class="nav-bottom" data-sidebar-collapse title="${state.sidebarCollapsed ? "展开导航" : "收起导航"}"><span class="nav-icon">☰</span><span>${state.sidebarCollapsed ? "展开导航" : "收起导航"}</span></div>
    </aside>
  `;
}

function renderTopbar() {
  return `
    <header class="topbar">
      <span class="top-pill">￥ 余额：￥4.88 <span style="opacity:.45">|</span> 充值</span>
      <span class="top-pill" style="border:1px solid #8c5cf6">我的套餐 ▾</span>
      <span>？ 帮助中心</span>
      <span class="avatar">K</span>
    </header>
  `;
}

function renderPage() {
  if (state.selectedAssistant) return renderAssistantDetail();
  switch (state.page) {
    case "home":
      return renderHome();
    case "ai":
      return renderAiList();
    case "channels":
      return renderChannels();
    case "wechat":
      return renderWechat();
    case "chat":
      return renderChatWorkplace();
    case "flow":
      return renderFlowPage();
    case "knowledge":
      return renderStandaloneKnowledge();
    case "knowledgeCreate":
      return renderKnowledgeCreatePage();
    case "skillEdit":
      return renderSkillEditPage();
    case "marketing":
      return renderMarketing();
    case "analytics":
      return renderAnalytics();
    default:
      return renderPlaceholder();
  }
}

function renderHome() {
  const basic = [
    ["🍄", "创建AI助手", "快速创建拥有您自己私有知识内容的AI助手"],
    ["🍞", "上传私有知识", "将您的私有知识上传，并关联给AI助手使用"],
    ["🧁", "将AI助手发布到您的网站", "将AI助手放在您的网站上做客户服务"],
    ["🤖", "将AI与社交媒体平台对接", "快速将AI接入您的社交平台中"],
    ["🍄", "使用聚合对话界面查看/回复消息", "在聚合对话界面查看/回复的消息"],
    ["🍞", "邀请更多成员加入", "邀请更多同事加入并分配坐席权限"],
  ];
  const advanced = [
    ["创建AI流程", "AI流程可以让AI按照指定方式完整任务，调用第三方工具解决"],
    ["使用对话变量", "将联系人信息、工具、知识作为AI大模型提示词变量"],
    ["意图设置", "意图设置可以判断用户意图配置不同的处理方式"],
  ];
  return `
    <section class="content">
      <h1 class="page-title">🚀 快速开始</h1>
      <div class="strip">
        <span>您当前的产品版本为</span>
        <span class="tag">营销基础版</span>
        <button class="button primary">联系我们</button>
      </div>
      <div class="section-title">基础配置</div>
      <div class="grid-3">
        ${basic
          .map(
            ([ico, title, desc]) => `
          <div class="card quick-card">
            <div>
              <div class="card-title"><span>${ico}</span>${title}</div>
              <div class="subtle">${desc}</div>
            </div>
            <div class="card-actions">
              <button class="button">帮助文档</button>
              <button class="button primary" data-page="${title.includes("创建") ? "ai" : title.includes("聚合") ? "chat" : title.includes("社交") ? "channels" : "knowledge"}">使用 ›</button>
            </div>
          </div>`
          )
          .join("")}
      </div>
      <div class="section-title" style="margin-top:34px">进阶配置</div>
      <div class="grid-3">
        ${advanced
          .map(
            ([title, desc]) => `
          <div class="card" style="padding:0; overflow:hidden">
            <div class="hero-preview"><div class="fake-shot"><div class="fake-shot-line blue"></div><div class="fake-shot-line"></div><div class="fake-shot-line"></div><div class="fake-shot-line"></div></div></div>
            <div style="padding:18px 20px">
              <div class="card-title">${title}</div>
              <div class="subtle">${desc}</div>
              <div class="card-actions"><button class="button">帮助文档</button><button class="button primary" data-page="${title.includes("流程") ? "flow" : "ai"}">使用 ›</button></div>
            </div>
          </div>`
          )
          .join("")}
      </div>
      <div class="section-title" style="margin-top:34px">更多帮助</div>
      <div class="grid-2 help-grid">
        <div class="card help-card">
          <div class="help-icon help-icon-doc">¥</div>
          <div>
            <div class="card-title">产品教学文章</div>
            <div>查看更多帮助教学</div>
          </div>
        </div>
        <div class="card help-card">
          <div class="help-icon help-icon-contact">☎</div>
          <div>
            <div class="card-title">联系我们</div>
            <div>点击这里联系我们</div>
          </div>
        </div>
      </div>
    </section>`;
}

function renderAiList() {
  const content = {
    assistant: renderAssistantManager,
    knowledge: renderKnowledgeManager,
    skill: renderSkillManager,
    tool: renderToolManager,
    auto: renderAutomationManager,
    intent: renderIntentManager,
    summary: renderAiSummaryManager,
  }[state.assistantSub];
  return `
    <section class="module-layout">
      ${renderAiSubnav()}
      ${content ? content() : renderAiPlaceholder()}
    </section>`;
}

function renderAiSubnav(active = state.assistantSub) {
  return `<aside class="subnav">
    <div class="subnav-title">AI智能体</div>
    ${assistantSubs
      .map(
        ([id, label, icon]) => `<div class="subnav-item ${active === id ? "active" : ""}" data-assistant-sub="${id}"><span class="subnav-icon">${icon}</span><span>${label}</span></div>`
      )
      .join("")}
  </aside>`;
}

function renderAssistantManager() {
  return `<div class="module-content">
    <div class="toolbar compact-toolbar">
      <div>
        <h1 class="page-title">对话智能体</h1>
      </div>
      <input class="input search-input" placeholder="搜索名称或描述" />
    </div>
    <div class="assistant-actions">
      <button class="button primary" data-modal="createAssistant">＋ 创建AI助手</button>
      <button class="link-button">帮助文档</button>
    </div>
    <div class="assistant-card-row">
      ${["canna测试", "演示AI助手"]
        .map(
          (name) => `
        <div class="card assistant-card" data-open-assistant="${name}">
          <div style="display:flex; gap:12px; align-items:center">
            ${iconBox("AI")}
            <div style="font-weight:700">${name}</div>
          </div>
          <span class="subtle">☆</span>
        </div>`
        )
        .join("")}
    </div>
  </div>`;
}

function renderKnowledgeManager() {
  return `<div class="module-content ai-manager-page">
    <div class="knowledge-list-head">
      <div>
        <h1 class="page-title">知识库列表</h1>
        <div class="subtle">您可以通过上传文档，数据库，网站页面等方式创建知识内容，AI应用可以基于此知识进行对话 <button class="link-button">了解更多</button></div>
      </div>
      <div class="capacity">空间容量： 12.96KB / 1024M</div>
    </div>
    <div class="knowledge-tools">
      <button class="button primary" data-page="knowledgeCreate">＋ 新增知识库</button>
      <input class="input search-input" placeholder="搜索名称" />
    </div>
    <div class="knowledge-card-grid">
      ${knowledgeBases.map(renderKnowledgeCard).join("")}
    </div>
  </div>`;
}

function renderKnowledgeCard(kb) {
  return `<div class="knowledge-card">
    <div class="knowledge-card-icon">${kb.icon}</div>
    <div class="knowledge-card-name">${kb.name}</div>
    <div class="knowledge-card-count">▧ ${kb.count}</div>
    <div class="knowledge-card-footer">
      <span class="tag green">${kb.type}</span>
      <div>
        <button class="button ghost small" data-modal="deleteKnowledge">删除</button>
        <button class="button small" data-page="knowledgeCreate">配置</button>
      </div>
    </div>
  </div>`;
}

function renderSkillManager() {
  const filtered = skills.filter((skill) => {
    if (state.skillFilter === "mine") return skill.source === "mine";
    if (state.skillFilter === "template") return skill.source === "template";
    return true;
  });
  return `<div class="module-content skill-manager-page">
    <div class="skill-page-head">
      <h1 class="page-title">AI技能</h1>
      <div class="subtle">统一管理智能体技能与技能模板，让自动化能力快速落地。</div>
    </div>
    ${state.skillGuideVisible ? renderSkillGuide() : ""}
    <div class="skill-toolbar">
      <button class="button dark" data-skill-create>＋ 创建技能</button>
      <input class="input skill-search" placeholder="搜索技能名称或描述" />
      <div class="skill-filter-tabs">
        ${[
          ["all", "全部技能"],
          ["mine", "我的技能"],
          ["template", "技能模板"],
        ]
          .map(([id, label]) => `<button class="${state.skillFilter === id ? "active" : ""}" data-skill-filter="${id}">${label}</button>`)
          .join("")}
      </div>
      <button class="select-like skill-channel" data-skill-channel><span>全部渠道</span><span>⌄</span></button>
    </div>
    <div class="skill-grid">
      ${filtered.map(renderSkillCard).join("")}
    </div>
  </div>`;
}

function renderSkillGuide() {
  const cards = [
    ["book", "什么是 AI 技能?", "AI 技能是可以执行真实动作的智能模块，通过调用 API 完成查询、写入、更新等操作，而不仅仅是回答问题。", "查看介绍"],
    ["bolt", "如何创建第一个技能?", "选择模板或自定义创建，配置触发条件与 API 连接，即可让 AI 自动完成复杂任务，无需编写代码。", "开始创建"],
    ["gear", "技能配置与调试指南", "了解如何设置权限范围、调试技能响应，以及在不同渠道中灵活启用或暂停技能的执行。", "阅读指南"],
  ];
  return `<div class="skill-guide">
    <button class="skill-guide-close" data-skill-guide-close>×</button>
    <h2>像团队成员一样工作的 AI 技能</h2>
    <div class="skill-guide-grid">
      ${cards
        .map(
          ([tone, title, desc, action]) => `<div class="skill-guide-card ${tone}">
            <div class="skill-guide-art">${tone === "book" ? "□" : tone === "bolt" ? "ϟ" : "⚙"}</div>
            <div>
              <h3>${title}</h3>
              <p>${desc}</p>
              <button class="link-button">${action} ↗</button>
            </div>
          </div>`
        )
        .join("")}
    </div>
  </div>`;
}

function renderSkillCard(skill) {
  return `<div class="skill-card" data-skill-open="${skill.id}">
    <div class="skill-card-menu">•••</div>
    <div class="skill-logo ${skill.icon === "AI" ? "bird" : ""}">${skill.icon}</div>
    <h3>${skill.name}</h3>
    <p>${skill.desc}</p>
    <span class="tag">${skill.channel}</span>
    <div class="skill-card-footer">
      <span class="${skill.source === "mine" ? "source-mine" : "source-template"}">${skill.source === "mine" ? "✣ 我的技能" : "▦ 技能模板"}</span>
    </div>
  </div>`;
}

function renderAiPlaceholder() {
  const label = assistantSubs.find(([id]) => id === state.assistantSub)?.[1] || "模块";
  return `<div class="module-content"><h1 class="page-title">${label}</h1><div class="card empty">该模块的主流程正在 Demo 中，您可以切换到知识管理或 AI技能查看完整交互。</div></div>`;
}

function renderToolManager() {
  const filtered = aiTools.filter((tool) => (state.aiToolFilter === "connected" ? tool.connected : true));
  return `<div class="module-content tool-manager-page">
    <div class="skill-page-head">
      <h1 class="page-title">AI工具</h1>
      <div class="subtle">为智能体接入应用能力，快速调用外部服务与数据。</div>
    </div>
    ${state.aiToolGuideVisible ? renderToolGuide() : ""}
    <div class="tool-toolbar">
      <button class="button dark" data-modal="createCustomTool">＋ 创建自定义工具</button>
      <input class="input tool-search" placeholder="搜索应用或动作" />
      <div class="skill-filter-tabs">
        ${[
          ["all", "全部"],
          ["connected", "已连接"],
        ]
          .map(([id, label]) => `<button class="${state.aiToolFilter === id ? "active" : ""}" data-ai-tool-filter="${id}">${label}</button>`)
          .join("")}
      </div>
      <button class="select-like tool-category"><span>全部类别</span><span>⌄</span></button>
    </div>
    <div class="tool-grid">
      ${filtered.map(renderToolCard).join("")}
    </div>
  </div>`;
}

function renderToolGuide() {
  const cards = [
    ["sliders", "如何使用与配置AI工具", "了解如何在 AI 智能体中集成和使用 AI 工具，包括工具的基本配置、授权流程和常见设置项。", "查看"],
    ["plus", "如何添加自定义工具", "创建自定义工具来连接企业内部系统或第三方服务，支持通过 API、Webhook 等方式快速集成。", "查看"],
    ["question", "AI工具常见问题", "查看有关工具集成、授权、调试和常见错误的常见问题解答，快速解决使用中遇到的问题。", "查看"],
  ];
  return `<div class="skill-guide tool-guide">
    <button class="skill-guide-close" data-ai-tool-guide-close>×</button>
    <h2>为 AI 智能体扩展无限能力的工具库</h2>
    <div class="skill-guide-grid">
      ${cards
        .map(
          ([tone, title, desc, action]) => `<div class="skill-guide-card ${tone}">
            <div class="skill-guide-art">${tone === "sliders" ? "☷" : tone === "plus" ? "+" : "?"}</div>
            <div>
              <h3>${title}</h3>
              <p>${desc}</p>
              <button class="link-button">${action} ↗</button>
            </div>
          </div>`
        )
        .join("")}
    </div>
  </div>`;
}

function renderToolCard(tool) {
  return `<div class="tool-card">
    <div class="tool-card-main">
      <div class="tool-app-icon">${tool.icon}</div>
      <h3>${tool.name}</h3>
    </div>
    <div class="tool-card-footer">
      <span>↔ ${tool.status}</span>
    </div>
  </div>`;
}

function renderAutomationManager() {
  return `<div class="module-content automation-page">
    <div class="skill-page-head">
      <h1 class="page-title">AI 自动化</h1>
      <div class="subtle">管理和配置各项 AI 自动化功能，提升服务效率与响应质量。</div>
    </div>
    <div class="automation-list">
      ${automationItems
        .map(
          ([title, desc], index) => `<button class="automation-row" type="button">
            <div>
              <div class="automation-title">${title} <span class="switch ${index === 5 ? "on" : ""}" data-switch></span> <span class="collapse-mark">⌃</span></div>
              <div class="hint">${desc} <span class="link-blue">了解更多</span></div>
            </div>
          </button>`
        )
        .join("")}
    </div>
  </div>`;
}

function renderIntentManager() {
  return `<div class="module-content intent-page">
    <div class="intent-top-title">意图中心</div>
    <h1 class="page-title">意图列表</h1>
    <div class="subtle intent-desc">您可以通过创建意图的方式来控制回答内容与对话流程，当用户的对话内容满足指定意图后，将优先按照意图设置执行。 <button class="link-button">了解更多</button></div>
    <div class="intent-toolbar">
      <button class="button primary" data-drawer="intentBuilder">＋ 添加意图</button>
      <input class="input search-input" placeholder="搜索名称" />
    </div>
    <div class="intent-empty">
      <div class="intent-illus">▰</div>
      <div class="subtle">暂无可用意图，请添加意图</div>
      <button class="button primary" data-drawer="intentBuilder">＋ 添加意图</button>
    </div>
  </div>`;
}

function renderAiSummaryManager() {
  return `<div class="module-content summary-page">
    <div class="summary-layout">
      <aside class="summary-subnav">
        <div class="summary-side-title">总结类型</div>
        <button class="summary-side-item active">AI智能总结</button>
      </aside>
      <main class="summary-main">
        <h1 class="page-title">AI智能总结 · AI智能总结</h1>
        <div class="summary-table-card">
          <div class="summary-toolbar">
            <input class="input summary-search" placeholder="搜索关键词" />
          </div>
          <table class="summary-table">
            <thead>
              <tr><th><input type="checkbox"></th><th>用户问题</th><th>建议回复</th><th>关联知识库</th><th>状态</th><th>操作</th></tr>
            </thead>
          </table>
          <div class="summary-empty">
            <div class="empty-icon">▤</div>
            <b>暂无数据</b>
            <span>请前往 聚合对话设置-AI自动化设置 中开启"AI知识补充"功能</span>
            <button class="button primary" data-summary-enable>去开启 →</button>
          </div>
          <div class="summary-pagination">
            <span>共 0 条</span>
            <button class="button small" disabled>‹</button>
            <button class="button small active">1</button>
            <button class="button small" disabled>›</button>
            <button class="select-like small-select">10条/页 ⌄</button>
            <span>前往</span><input class="input page-input" value="1"><span>页</span>
          </div>
        </div>
      </main>
    </div>
  </div>`;
}

function renderSkillEditPage() {
  const skill = skills.find((item) => item.id === state.selectedSkillId);
  const isEdit = Boolean(skill);
  return `<section class="skill-edit-page">
    <div class="skill-edit-top">
      <div class="breadcrumb"><button class="link-button" data-back-skills>AI技能</button> › ${isEdit ? skill.name : "技能配置"}</div>
      <div class="skill-edit-actions">
        ${isEdit ? `<button class="button">历史版本</button>` : `<button class="button" data-back-skills>取消</button>`}
        <button class="button dark" data-skill-save>${isEdit ? "保存" : "创建并启用"}</button>
      </div>
    </div>
    <div class="skill-edit-body">
      <div class="skill-edit-card">
        <div class="form-row">
          <div class="label">技能名称 <span style="color:var(--red)">*</span></div>
          <input class="input" style="width:100%" value="${skill?.name || ""}" placeholder="请输入技能名称，例如：智能催单跟进">
          <div class="hint">清晰的名称帮助团队快速识别此技能的用途</div>
        </div>
        <div class="form-row">
          <div class="label">技能描述</div>
          <textarea class="textarea" style="width:100%" placeholder="例如：当用户询问订单状态或物流信息时，自动调用订单查询工具获取信息并回复">${skill?.desc || ""}</textarea>
          <div class="hint">告知 AI 大模型这个技能的用途以及何时触发，帮助模型准确理解和执行</div>
        </div>
        <div class="skill-edit-divider"></div>
        <div class="form-row">
          <div class="label">模型选择</div>
          <div class="model-select-row"><span class="model-dot">山</span><span>自动选择 doubao-seed-2.0-mini-260215</span><span class="tag orange">内置</span><button class="button ghost small">☷</button></div>
        </div>
        <div class="form-row">
          <div class="label">触发对话渠道</div>
          <button class="select-like full-select"><span>通用</span><span>⌄</span></button>
        </div>
        <div class="skill-edit-divider"></div>
        <div class="form-row">
          <div class="label">使用指导提示词 <span style="color:var(--red)">*</span></div>
          ${renderSkillEditor(skill)}
        </div>
        <div class="skill-section-head">
          <div><b>工具列表</b><div class="hint">此技能可调用的外部工具与 API</div></div>
          <button class="button dashed small" data-modal="addSkillTool">＋ 添加工具</button>
        </div>
        ${skill?.tool ? renderSkillToolItem() : `<div class="dashed-empty"><div class="empty-icon">⌘</div><span>暂未添加工具</span><button class="button dashed small" data-modal="addSkillTool">＋ 添加第一个工具</button></div>`}
        <div class="skill-section-head">
          <div><b>知识列表</b><div class="hint">此技能可检索的知识库，用于增强 AI 回答能力</div></div>
          <button class="button dashed small" data-modal="associateKnowledge">＋ 关联知识库</button>
        </div>
        <div class="dashed-empty"><div class="empty-icon">▤</div><span>暂未关联知识库</span><button class="button dashed small" data-modal="associateKnowledge">＋ 添加知识</button></div>
        ${isEdit ? `<div class="danger-zone"><div><b>删除技能</b><div>此操作不可恢复。删除后，所有引用该技能的智能体配置将失效。</div></div><button class="button danger" data-modal="deleteSkill">删除此技能</button></div>` : ""}
      </div>
    </div>
  </section>`;
}

function renderSkillEditor(skill) {
  const prompt = skill?.prompt || "";
  return `<div class="skill-editor">
    <div class="editor-toolbar skill-editor-toolbar"><b>B</b><b>H</b><span>▣</span><span>☷</span><span>☰</span><button class="link-button">〔x〕 插入变量</button><span style="margin-left:auto">↗</span></div>
    <div class="rich-editor skill-rich-editor" contenteditable="true">${prompt || ""}</div>
  </div>`;
}

function renderSkillToolItem() {
  return `<div class="skill-tool-item">
    <div class="skill-logo tiny">企</div>
    <div><b>企业微信(代运营)</b><div class="hint">发送消息</div></div>
    <span class="tag green">已配置</span>
    <button class="button ghost small">×</button>
  </div>`;
}

function renderAssistantDetail() {
  const active = state.detailTab;
  return `
    <section class="assistant-detail">
      <div class="detail-head">
        <div class="detail-name">
          ${iconBox("AI")}
          <span>${state.selectedAssistant}</span>
          <button class="button ghost small">✎</button>
        </div>
        <button class="button primary">↗ 已分享</button>
      </div>
      <div class="tabs">
        ${detailTabs
          .map((label) => `<div class="tab ${active === tabMap[label] ? "active" : ""}" data-detail-tab="${tabMap[label]}">${label}</div>`)
          .join("")}
      </div>
      <div class="detail-body">
        <div class="config-panel">${renderDetailConfig()}</div>
        <div class="preview-panel">${renderChatPreview()}</div>
      </div>
    </section>`;
}

function renderDetailConfig() {
  switch (state.detailTab) {
    case "setting":
      return renderSettingConfig();
    case "knowledge":
      return renderKnowledgeConfig();
    case "skill":
      return renderSkillConfig();
    case "flow":
      return renderFlowConfig();
    case "intent":
      return renderIntentConfig();
    case "integration":
      return renderIntegrationConfig();
    case "members":
      return renderMembersConfig();
    case "tool":
      return renderToolConfig();
    default:
      return `<h3>对话测试</h3><p class="subtle">在右侧直接验证助手回答、知识库命中和工具执行状态。</p><button class="button primary" data-detail-tab="setting">配置助手</button>`;
  }
}

function renderSettingConfig() {
  return `
    <h3 class="detail-section-title">智能助手设置 <span class="subtle">ⓘ</span></h3>
    <div class="form-row">
      <div class="label">选择模型</div>
      <button class="model-select-row detail-model-select" data-toggle-model-panel><span class="model-dot">山</span><span>自动选择 doubao-seed-2.0-mini-260215</span><span class="tag orange">内置</span><span style="margin-left:auto">☷</span></button>
      ${state.detailModelOpen ? renderDetailModelPanel() : ""}
    </div>
    <div class="form-row">
      <div class="label">功能与步骤设置 <span class="subtle">ⓘ</span><button class="link-button detail-expand">展开</button></div>
      <div class="editor-toolbar detail-toolbar"><b>B</b><b>H</b><span>▣</span><span>☰</span><span>1₂</span><button class="link-button" data-detail-action="智能优化">◎ 智能优化</button><button class="link-button" data-detail-action="插入变量">〔x〕 插入变量</button></div>
      <div class="rich-editor detail-prompt" contenteditable="true"></div>
      <div class="detail-examples">示例： <b>广告文案大师</b> <b>解梦大师</b></div>
    </div>
    <div class="form-row detail-range-row"><div class="label">支持使用上下文记录 <span class="subtle">ⓘ</span></div><input class="slider" type="range" min="0" max="40" value="4"><div class="range-labels"><span>0</span><span>40</span></div></div>
    <div class="form-row switch-row"><div class="label">展示token消耗 <span class="subtle">ⓘ</span></div><span class="switch on" data-switch></span></div>
    <div class="form-row"><div class="label">开场白对话 <span class="subtle">ⓘ</span></div><div class="editor-toolbar">☷ 1₂ ▣ ▦⌄</div><div class="rich-editor opening-editor" contenteditable="true">Hi~ 我是您的智能助手，想要我协助您完成什么任务？发送消息给我吧！</div></div>
    <div class="form-row quick-question-row"><div class="label">快捷提问 <span class="subtle">ⓘ</span></div><div class="quick-input-line"><input class="input" placeholder="提问内容，例如：帮我写一篇文章，关于春游，字数500字左右"><button class="circle-add" data-detail-action="新增快捷提问">＋</button></div></div>
    <button class="button danger full-width-detail" data-detail-action="删除助手">删除助手</button>`;
}

function renderDetailModelPanel() {
  const models = [
    "自动选择 doubao-seed-2.0-mini-260215",
    "豆包 Doubao-Seed-2.0-lite-260215",
    "豆包 Doubao-Seed-2.0-pro-260215",
    "豆包 Doubao-Seed-2.0-mini-260215",
    "阿里通义千问 qwen3.6-flash",
  ];
  return `<div class="detail-model-panel">
    <div class="model-panel-select"><span class="model-dot">山</span>自动选择 doubao-seed-2.0-mini-260215 <span>⌃</span></div>
    <div class="model-panel-tabs"><button class="active">内置</button><button>原生</button><button>智能体</button></div>
    <input class="input" placeholder="搜索模型">
    <div class="model-list-title">推荐模型</div>
    ${models.map((name, index) => `<button class="model-option ${index === 0 ? "active" : ""}" data-detail-model="${name}"><span class="model-dot">山</span>${name}<span>${index === 0 ? "✓" : ""}</span></button>`).join("")}
  </div>`;
}

function renderKnowledgeConfig() {
  const ks = ["物流问答", "报价规则", "售后 FAQ"];
  return `
    <div class="toolbar" style="margin-bottom:12px"><h3>知识设置 ⓘ</h3><button class="button ghost">⚙ 配置</button></div>
    <div style="display:flex; gap:8px; margin-bottom:14px"><button class="button primary" data-modal="importKnowledge">⇩ 导入知识库</button><button class="button" data-page="knowledgeCreate">＋ 新增知识库</button></div>
    ${ks
      .map(
        (k) => `<div class="mini-card"><div class="mini-card-head"><span>🟢 ${k}</span><span class="switch on" data-switch></span></div><div class="subtle">已启用 · 可用于企业微信自动回复</div></div>`
      )
      .join("")}`;
}

function renderSkillConfig() {
  const skills = [
    ["用户留资信息收集后发送企业微信群消息", "当用户告知手机号或者微信号后，将联系信息和需求总结发送到企业微信群机器人"],
    ["转人工服务", "将指定对话分配给人工客服处理"],
    ["停止回复", "需要停止回复、沉默等场景时使用"],
    ["自动拉群", "识别客户需求后创建群聊并邀请指定成员"],
    ["群消息总结", "将群聊历史消息总结给人工客服"],
  ];
  return `
    <div class="toolbar" style="margin-bottom:12px"><h3>技能设置 ⓘ</h3></div>
    <div style="display:flex; gap:8px; margin-bottom:14px"><button class="button dark" data-modal="importSkill">⇩ 导入技能</button><button class="button">▦ 技能模板</button></div>
    ${skills
      .map(
        ([name, desc]) => `<div class="mini-card"><div class="mini-card-head"><span>🪁 ${name}</span><span class="switch on" data-switch></span></div><div class="subtle">${desc}</div><div style="margin-top:10px"><span class="tag">通用</span></div></div>`
      )
      .join("")}`;
}

function renderFlowConfig() {
  return `
    <h3>流程设置 ⓘ</h3>
    <div class="empty">
      <div>
        <div style="font-size:48px">🧩</div>
        <div style="margin:10px 0">暂未添加流程</div>
        <button class="button primary" data-page="flow">＋ 创建流程</button>
        <button class="button">⇩ 导入流程</button>
      </div>
    </div>`;
}

function renderIntentConfig() {
  return `
    <h3>意图列表 ⓘ</h3>
    <div class="empty">
      <div>
        <div style="font-size:48px">🤖</div>
        <div style="margin:10px 0">暂无可用意图，请添加意图</div>
        <button class="button primary">⇩ 导入意图</button>
        <button class="button" data-drawer="intentDrawer">＋ 新增意图</button>
      </div>
    </div>`;
}

function renderIntegrationConfig() {
  const list = ["网站页面", "抖音私信", "小红书私信", "小红书评论", "企业微信（群聊/私聊）", "微信公众号", "微信客服(企业微信版)", "API接口", "飞书机器人"];
  return `
    <h3>集成设置 ⓘ</h3>
    <div class="grid-2">
      ${list
        .map(
          (name) => `<div class="mini-card" data-page="${name.includes("企业微信") ? "wechat" : ""}"><div class="mini-card-head"><span>${name}</span></div><div class="subtle">快速集成智能助手到${name}</div></div>`
        )
        .join("")}
    </div>`;
}

function renderMembersConfig() {
  return `
    <h3>成员列表 ⓘ</h3>
    <div class="form-row"><div class="label">可见范围：</div><label><input type="radio" checked> 全部成员</label> &nbsp; <label><input type="radio"> 自定义</label></div>`;
}

function renderToolConfig() {
  return `<div class="detail-config-head"><h3>工具设置 <span class="subtle">ⓘ</span></h3><button class="button dashed small" data-modal="assistantToolPicker">＋ 添加工具</button></div>
    <div class="detail-tool-empty">
      <div class="empty-icon">⌘</div>
      <div>暂未添加工具</div>
      <button class="button dashed small" data-modal="assistantToolPicker">＋ 添加工具</button>
    </div>`;
}

function renderChatPreview() {
  return `
    <div class="chat">
      ${state.messages
        .map(
          (m) => `<div class="message ${m.role === "user" ? "user" : ""}">${iconBox(m.role === "user" ? "K" : "AI")}<div class="bubble">${m.text}${m.meta ? `<div class="bubble-meta">${m.meta}</div>` : ""}</div></div>`
        )
        .join("")}
    </div>
    <div class="chat-input">
      <textarea id="assistantInput" placeholder="请输入对话内容"></textarea>
      <div style="display:flex; justify-content:space-between; align-items:center">
        <span class="subtle">□ ＠ ❖</span>
        <button class="button primary" id="assistantSend">➤</button>
      </div>
    </div>`;
}

function renderChannels() {
  return `
    <section class="content">
      <h1 class="page-title">对话渠道</h1>
      <div class="subtle">管理您的对话渠道并发现新对话渠道以帮助您获得更多客户。</div>
      <div class="filters">${["全部", "已绑定", "社交媒体", "电商平台", "办公OA", "网站/小程序", "邮件/短信", "海外平台"].map((f, i) => `<button class="button ${i === 0 ? "primary" : ""}">${f}</button>`).join("")}</div>
      <input class="input" placeholder="搜索 对话渠道" style="width:260px; margin-bottom:18px" />
      <div class="section-title">已绑定</div>
      <div class="channel-grid">
        ${channels
          .map(
            ([name, desc, status, action, ico]) => `<div class="card channel-card">
              <div><div class="card-title">${name}</div><div class="subtle">${desc}</div><div style="margin-top:20px; display:flex; justify-content:space-between"><span class="subtle">${status}</span><button class="button small ${action === "管理" ? "" : ""}" data-page="${name.includes("企业微信代运营") ? "wechat" : ""}">${action}</button></div></div>
              ${iconBox(ico, "channel-icon")}
            </div>`
          )
          .join("")}
      </div>
    </section>`;
}

function renderWechat() {
  const tabs = [
    ["accounts", "账号列表"],
    ["rules", "聚合规则"],
    ["advanced", "高级设置"],
    ["workbench", "对话工作台"],
    ["console", "机器人控制台"],
    ["groups", "群聊管理"],
    ["logs", "对话记录查询"],
  ];
  return `
    <section class="channel-manage-page">
      <aside class="channel-profile-panel">
        <div class="channel-profile">
          <div class="channel-mini-icon orange">企</div>
          <div>
            <h3>企业微信代运营(私聊/群聊)</h3>
            <p>管理已绑定账号与高级设置。</p>
          </div>
        </div>
        <nav class="channel-tabs">
          ${tabs
          .map(([id, label]) => `<button class="channel-tab ${state.wechatTab === id ? "active" : ""}" data-wechat-tab="${id}">${label}</button>`)
          .join("")}
        </nav>
        <div class="channel-help">
          <b>帮助文档</b>
          <a>• 如何授权企业微信代运营</a>
        </div>
      </aside>
      <main class="channel-manage-main">
        <button class="back-link" data-page="channels">‹ 返回对话渠道列表</button>
        ${renderWechatTab()}
      </main>
    </section>`;
}

function renderWechatTab() {
  switch (state.wechatTab) {
    case "rules":
      return renderChannelRules();
    case "advanced":
      return renderChannelAdvanced();
    case "workbench":
      return renderChannelWorkbench();
    case "console":
      return renderRobotConsole();
    case "groups":
      return renderGroupManagement();
    case "logs":
      return renderLogs();
    default:
      return renderChannelAccounts();
  }
}

function renderChannelAccounts() {
  return `
    <div class="channel-section-head">
      <div>
        <h1 class="page-title">账号列表</h1>
        <div class="subtle">管理托管账号、小组成员与企业微信远程实例。</div>
      </div>
      <button class="button primary" data-modal="authAccount">＋ 添加账号</button>
    </div>
    <div class="channel-top-tabs">
      <button class="active">托管账号</button>
      <button class="active-blue">小组详情</button>
      <button>自定义侧边栏</button>
    </div>
    <div class="group-hero">
      <div class="group-hero-main">
        <span class="group-avatar">群</span>
        <div>
          <h2>gs4758</h2>
          <p>默认创建</p>
        </div>
      </div>
      <div class="group-stat"><b>1</b><span>在线</span></div>
      <div class="group-stat"><b>1</b><span>已托管账号数量</span></div>
      <button class="button primary" data-modal="groupMembers">编辑组内成员</button>
    </div>
    <div class="member-toolbar">
      <div>
        <button class="button small active">账号列表</button>
        <button class="button small primary">成员列表</button>
      </div>
      <input class="input" placeholder="请输入成员名称" />
    </div>
    <div class="table-card">
      <table>
        <thead><tr><th>成员名称(1)</th><th>托管账号</th><th>在线状态</th><th>角色</th><th>操作</th></tr></thead>
        <tbody>
          <tr>
            <td><span class="member-dot">我</span> 我</td>
            <td>gs4758 / 6</td>
            <td><span class="tag green">在线</span></td>
            <td>小组管理员</td>
            <td><button class="button small" data-modal="groupMembers">编辑成员</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-card channel-table-gap">
      <table>
        <thead><tr><th>账号信息</th><th>状态</th><th>消息接收</th><th>AI回复</th><th>绑定助手</th><th>操作</th></tr></thead>
        <tbody>
          <tr>
            <td>${iconBox("企", "channel-icon")} 测试<br><span class="subtle">ID: 8018 · ZhuLi01</span></td>
            <td><span class="tag green">在线</span></td>
            <td><span class="switch on" data-switch></span></td>
            <td><span class="switch on" data-switch></span></td>
            <td><span class="tag blue">canna测试</span></td>
            <td><button class="button small" data-wechat-tab="console">控制台</button> <button class="button small" data-wechat-tab="advanced">高级设置</button></td>
          </tr>
        </tbody>
      </table>
    </div>`;
}

function renderChannelRules() {
  return `
    <div class="channel-section-head">
      <div>
        <h1 class="page-title">聚合规则</h1>
        <div class="subtle">接入到聚合对话并设置AI回复规则</div>
      </div>
      <button class="button primary" data-modal="ruleConfig">＋ 添加规则</button>
    </div>
    <div class="table-card">
      <table>
        <thead><tr><th>账号名称</th><th>消息接收</th><th>AI回复</th><th>操作</th></tr></thead>
        <tbody>
          <tr>
            <td>${iconBox("企", "channel-icon")} <b>123</b><br><span class="subtle">ID: 8019</span></td>
            <td><span class="switch" data-switch></span></td>
            <td><span class="switch" data-switch></span> <button class="link-button" data-modal="ruleConfig">配置</button></td>
            <td><button class="button ghost small">⋮</button></td>
          </tr>
          <tr>
            <td>${iconBox("企", "channel-icon")} <b>测试</b><br><span class="subtle">ID: 8018</span></td>
            <td><span class="switch on" data-switch></span></td>
            <td><span class="switch on" data-switch></span> <button class="link-button" data-modal="ruleConfig">配置</button> <span class="tag blue">canna测试</span></td>
            <td><button class="button ghost small">⋮</button></td>
          </tr>
        </tbody>
      </table>
    </div>`;
}

function renderChannelAdvanced() {
  const rows = [
    ["AI群聊回复时使用 at 外部联系人", true],
    ["AI群聊回复仅回复非企业员工的问题", false],
    ["新好友通过消息是否触发会话", true],
    ["同步群聊中全部对话内容", true],
    ["终端设备手动回复后切换至人工服务", true],
  ];
  return `
    <div class="channel-section-head">
      <div>
        <h1 class="page-title">高级设置</h1>
        <div class="subtle">管理 企业微信代运营(私聊/群聊) 的高级功能选项。</div>
      </div>
    </div>
    <div class="settings-list">
      ${rows.map(([label, on]) => `<div class="setting-row"><b>${label}</b><span class="switch ${on ? "on" : ""}" data-switch></span></div>`).join("")}
      <div class="setting-row vertical">
        <b>触发关键词</b>
        <div class="select-line">任意关键词 <span>⌄</span></div>
      </div>
    </div>`;
}

function renderChannelWorkbench() {
  const cards = [
    ["对话工作台", "统一查看企业微信私聊、群聊、AI对话与人工接待。", "chat"],
    ["营销标签", "按来源、意图、阶段给客户自动打标签。", "tag"],
    ["消息群发", "选择托管账号、联系人或群聊后批量发送消息。", "send"],
    ["自动加好友", "配置欢迎语、关键词和通过好友后的触发动作。", "friend"],
    ["自动化运营", "将加好友、发素材、拉群、转人工串成自动流程。", "auto"],
    ["素材管理", "管理文本、图片、文件、链接和常用话术。", "file"],
  ];
  return `
    <div class="channel-section-head">
      <div>
        <h1 class="page-title">对话工作台</h1>
        <div class="subtle">企业微信营销和客服的日常操作入口。</div>
      </div>
      <button class="button primary" data-page="chat">进入聚合对话</button>
    </div>
    <div class="workbench-grid">
      ${cards.map(([title, desc, icon]) => `<div class="workbench-card" data-wechat-tab="${icon === "chat" ? "console" : "workbench"}">
        <span>${icon}</span>
        <b>${title}</b>
        <p>${desc}</p>
      </div>`).join("")}
    </div>`;
}

function renderAccounts() {
  return `
    <div class="toolbar">
      <div style="display:flex; gap:8px"><input class="input" placeholder="请输入托管账号名称"><select class="select"><option>请选择托管账号状态</option></select><button class="button">批量打标签</button></div>
      <button class="button primary">托管账号标签管理</button>
    </div>
    <div class="table-card">
      <table>
        <thead><tr><th>账号信息/别名</th><th>状态</th><th>托管账号</th><th>账号ID</th><th>主体名称</th><th>消息接收</th><th>AI回复</th><th>绑定助手</th><th>操作</th></tr></thead>
        <tbody>
          <tr><td>👩 王丽<br><span class="subtle">别名：王丽</span></td><td><span class="tag green">在线</span> <span class="tag green">重启</span></td><td>ZhuLi01(1688854711425567)</td><td>65efc4ad2cb38280fa3f12a5</td><td>集简普通</td><td><span class="switch on" data-switch></span></td><td><span class="switch on" data-switch></span></td><td><span class="tag blue">物流客服助手</span></td><td><button class="button small" data-wechat-tab="console">控制台</button> <button class="button small">更多</button></td></tr>
          <tr><td>👤 待托管<br><span class="subtle">别名：-</span></td><td><span class="tag orange">待托管</span> <span class="tag red">启动</span></td><td>待托管</td><td>66ebee1c05f51dab6acf4564</td><td>-</td><td><span class="switch" data-switch></span></td><td><span class="switch" data-switch></span></td><td>-</td><td><button class="button small" data-modal="authAccount">启动</button> <button class="button small">删除</button></td></tr>
        </tbody>
      </table>
    </div>`;
}

function renderWechatStatus() {
  const metrics = [
    ["远程服务器节点", "华南节点", "在线"],
    ["企业微信客户端", "在线", "刚刚心跳"],
    ["WebSocket", "已连接", "延迟 24ms"],
    ["消息队列", "正常", "0 条堆积"],
    ["今日接收消息", "128", "较昨日 +12%"],
    ["今日AI回复", "96", "命中知识库 74次"],
    ["今日主动发送", "24", "成功率 100%"],
    ["今日拉群任务", "3", "成功 3 次"],
  ];
  return `<div class="status-grid">${metrics.map(([a,b,c]) => `<div class="metric"><div class="subtle">${a}</div><div class="metric-value">${b}</div><span class="tag green">${c}</span></div>`).join("")}</div>
  <div style="margin-top:18px; display:flex; gap:10px"><button class="button primary">重启托管实例</button><button class="button">暂停托管</button><button class="button">重新扫码</button><button class="button">查看远程日志</button></div>`;
}

function renderRobotConsole() {
  const logs = state.consoleStatus.length ? state.consoleStatus : ["等待提交远程控制指令"];
  return `
    <div class="console-grid">
      <div class="card">
        <h3>机器人控制台</h3>
        <div class="form-row"><div class="label">选择托管账号</div><select class="select" style="width:100%"><option>王丽 / ZhuLi01</option></select></div>
        <div class="form-row"><div class="label">目标类型</div><select class="select" style="width:100%"><option>群聊</option><option>联系人</option></select></div>
        <div class="form-row"><div class="label">目标名称</div><input class="input" style="width:100%" value="欧诚国际物流&集简云对接群"></div>
        <div class="form-row"><div class="label">消息内容</div><textarea class="textarea" style="width:100%">您好，Jerry AI 已接管企业微信客服，后续物流问题可直接在群里咨询。</textarea></div>
        <div class="action-grid">${["发送文本", "发送图片", "发送文件", "创建群聊", "拉人进群", "修改群名称", "发送群公告"].map((x) => `<button class="button" data-console-action="${x}">${x}</button>`).join("")}</div>
      </div>
      <div class="card">
        <h3>执行结果</h3>
        ${logs.map((l, i) => `<div class="log-line"><span class="dot" style="${i === 0 && logs.length === 1 ? "background:#cbd5e1" : ""}"></span><div>${l}<div class="subtle">${logs.length > 1 ? "taskId: MOCK-20260618-001" : ""}</div></div></div>`).join("")}
      </div>
    </div>`;
}

function renderGroupManagement() {
  return `<div class="table-card"><table><thead><tr><th>群名称</th><th>群ID</th><th>成员数</th><th>AI回复</th><th>禁止改群名</th><th>禁止互加好友</th><th>操作</th></tr></thead><tbody>
    ${["欧诚国际物流&集简云对接群", "欧洲海运咨询群", "物流报价测试群"].map((g, i) => `<tr><td>👥 ${g}</td><td>R:10775840332412${i}</td><td>${18 + i * 6}</td><td><span class="switch on" data-switch></span></td><td><span class="switch ${i === 0 ? "on" : ""}" data-switch></span></td><td><span class="switch ${i === 0 ? "on" : ""}" data-switch></span></td><td><button class="button small">查看成员</button> <button class="button small" data-wechat-tab="console">发消息</button> <button class="button small">设置规则</button></td></tr>`).join("")}
  </tbody></table></div>`;
}

function renderAlerts() {
  return `<div class="card"><div class="toolbar"><h3>报警通知</h3><button class="button primary" data-modal="alertBot">添加报警机器人</button></div>
  <div class="mini-card"><div class="mini-card-head">企业微信群报警机器人 <span class="tag green">已启用</span></div><div class="subtle">通知类型：托管账号掉线、群发任务异常、账号风控提醒、每日数据提醒</div></div>
  <div class="mini-card"><div class="mini-card-head">报警规则设置</div><div class="subtle">掉线超过 5 分钟通知 · 连续失败 3 次通知 · 每日 09:00 发送日报</div></div></div>`;
}

function renderLogs() {
  return `<div class="table-card"><table><thead><tr><th>时间</th><th>操作人</th><th>操作类型</th><th>目标</th><th>状态</th><th>详情</th></tr></thead><tbody>
  ${[
    ["00:42:18", "系统", "企业微信心跳检测", "王丽", "成功", "客户端在线"],
    ["00:41:02", "AI", "AI自动回复", "欧洲海运咨询群", "成功", "命中物流问答知识库"],
    ["00:39:30", "Kelvin", "发送群消息", "欧诚国际物流对接群", "成功", "远程实例执行成功"],
    ["00:31:11", "系统", "转人工", "Canna郑", "成功", "命中意图：找人工"],
  ].map((r) => `<tr>${r.map((c, i) => `<td>${i === 4 ? `<span class="tag green">${c}</span>` : c}</td>`).join("")}</tr>`).join("")}
  </tbody></table></div>`;
}

function renderChatWorkplace() {
  if (state.chatSettingsOpen) return renderChatSettings();
  const conversations = sortConversations(conversationMap[state.chatFilter] || []);
  const visibleConversations = conversations.filter(matchesConversationSearch);
  const hasSelected = !!state.selectedConversation;
  return `
    <section class="conversation-shell ${state.chatSidebarCollapsed ? "sidebar-collapsed" : ""}">
      <div class="conv-sidebar">
        <div class="agent-status">
          <span class="avatar">K</span>
          <span>在线 ▾</span>
          <button class="icon-button" style="margin-left:auto" data-chat-settings title="聚合对话设置">⚙</button>
        </div>
        ${conversationFilters
          .map((x) => `<div class="subnav-item ${state.chatFilter === x ? "active" : ""}" data-chat-filter="${x}">${x}</div>`)
          .join("")}
        <div class="custom-view-head">
          <span>自定义视图</span>
          <button class="icon-button small-icon" data-modal="customView" title="新建视图">＋</button>
        </div>
        ${customConversationViews
          .map((x) => `<div class="subnav-item custom-view-item ${state.chatFilter === x ? "active" : ""}" data-chat-filter="${escapeHtml(x)}">${escapeHtml(x)}</div>`)
          .join("")}
      </div>
      <div class="conv-list">
        <div class="conv-list-head">
          <div class="conv-list-title">
            <button class="chat-sidebar-toggle" type="button" data-chat-sidebar-toggle aria-label="${state.chatSidebarCollapsed ? "展开对话分类" : "收起对话分类"}" title="${state.chatSidebarCollapsed ? "展开对话分类" : "收起对话分类"}">
              <span>≡</span><i>${state.chatSidebarCollapsed ? "›" : "‹"}</i>
            </button>
            <b>${state.chatFilter}</b>
          </div>
          <div class="conv-list-tools">
            <button class="icon-button conv-sort-button ${state.chatSortOpen ? "active" : ""}" data-chat-sort-toggle title="对话排序">⇅</button>
            <button class="icon-button ${state.chatSearchOpen ? "active" : ""}" data-chat-search-toggle title="搜索对话">⌕</button>
            ${state.chatSortOpen ? `
              <div class="conv-sort-menu">
                <button class="${state.chatSort === "newest" ? "active" : ""}" data-chat-sort="newest"><span>新消息优先</span><b>✓</b></button>
                <button class="${state.chatSort === "unread" ? "active" : ""}" data-chat-sort="unread"><span>未读消息优先</span><b>✓</b></button>
              </div>
            ` : ""}
          </div>
        </div>
        ${state.chatSearchOpen ? renderConversationSearch() : ""}
        ${
          visibleConversations.length
            ? visibleConversations.map((item) => renderConversationItem(item)).join("")
            : `<div class="empty" style="min-height:240px">${state.chatSearchQuery.trim() ? "未找到匹配的对话" : `暂无${state.chatFilter}消息`}</div>`
        }
        ${renderChannelPromo()}
      </div>
      <div class="conv-main ${hasSelected ? "" : "help-mode"}">
        ${hasSelected ? renderConversationDetail() : renderConversationGuide()}
      </div>
      ${hasSelected ? renderConversationInfo() : ""}
    </section>`;
}

function renderChatSettings() {
  const tabs = [["automation", "AI自动化"], ["hours", "工作时间"], ["quick", "快捷消息"], ["forward", "消息转发"]];
  return `<section class="conversation-shell chat-settings-shell">
    <div class="conv-sidebar">
      <div class="agent-status"><span class="avatar">K</span><span>在线 ▾</span><button class="icon-button active" style="margin-left:auto" data-chat-settings title="返回对话">⚙</button></div>
      ${conversationFilters.map((x) => `<div class="subnav-item" data-chat-filter="${x}">${x}</div>`).join("")}
      <div class="custom-view-head"><span>自定义视图</span><button class="icon-button small-icon" data-modal="customView">＋</button></div>
      ${customConversationViews.map((x) => `<div class="subnav-item custom-view-item" data-chat-filter="${escapeHtml(x)}">${escapeHtml(x)}</div>`).join("")}
    </div>
    <main class="chat-settings-main">
      <nav class="chat-settings-tabs">${tabs.map(([id, label]) => `<button class="${state.chatSettingsTab === id ? "active" : ""}" data-chat-settings-tab="${id}">${label}</button>`).join("")}</nav>
      <div class="chat-settings-content">${renderChatSettingsContent()}</div>
    </main>
  </section>`;
}

function renderChatSettingsContent() {
  if (state.chatSettingsTab === "hours") return renderWorkHoursSettings();

  if (state.chatSettingsTab === "quick") return renderQuickMessageSettings();

  if (state.chatSettingsTab === "forward") return `<section class="chat-config-card">
    <div class="chat-config-title"><div><b>消息转发</b><p>将人工客服及 AI 助手消息转发到外部渠道</p></div><span class="switch" data-switch></span></div>
    <div class="settings-form-grid"><label>转发渠道<select class="select"><option>企业微信群机器人</option><option>邮件</option><option>Webhook</option></select></label><label>消息范围<select class="select"><option>全部消息</option><option>仅人工消息</option><option>仅 AI 消息</option></select></label></div>
    <label class="settings-full-field">Webhook 地址<input class="input" placeholder="https://example.com/webhook"></label>
    <button class="button primary" data-demo-action="消息转发设置已保存">保存设置</button>
  </section>`;

  return `<div class="chat-automation-list">
    ${renderAutomationCard("AI 自动跟进", "在用户长时间未回复时，由 AI 自动发送跟进消息", true, `
      <label>用户未回复时间（分钟）<input class="input" type="number" value="10"></label>
      <label>选择指定对话分组<select class="select"><option>全部对话</option><option>人工对话</option><option>AI对话</option></select></label>
      <label class="settings-full-field">回复内容<textarea class="textarea" placeholder="请输入自动跟进内容"></textarea></label>`)}
    ${renderAutomationCard("结束时 AI 自动回复", "当人工结束对话后，由 AI 补充回复或进行满意度询问", false, `
      <label>工作时间延时（分钟）<input class="input" type="number" value="10"></label>
      <label>非工作时间延时（分钟）<input class="input" type="number" value="0"></label>
      <label>超时会话标识<select class="select"><option>显示“超时”标识</option><option>不显示</option></select></label>`)}
    ${renderAutomationCard("AI 多媒体内容发送", "允许 AI 回复图片、视频、文件和音频素材", true, `
      <label><input type="checkbox" checked> 图片格式</label><label><input type="checkbox" checked> 视频格式</label><label><input type="checkbox" checked> 文件格式</label><label><input type="checkbox" checked> 音频格式</label>`)}
    ${renderAutomationCard("AI 长回复内容拆分", "将较长回复拆分为多条消息，提升阅读体验", false, `
      <label>最大回复内容字数<input class="input" type="number" value="300"></label><label>最大拆分回复条数<input class="input" type="number" value="3"></label>`)}
    ${renderAutomationCard("自定义 AI 内容提取/总结", "配置对话总结提示词及触发条件", false, `
      <label>对话分组选择<select class="select"><option>请选择</option>${customConversationViews.map((x) => `<option>${escapeHtml(x)}</option>`).join("")}</select></label>
      <label>至少包含对话条数<input class="input" type="number" value="4"></label>
      <label class="settings-full-field">总结提示词<textarea class="textarea" placeholder="请输入 AI 总结对话时的提示词"></textarea></label>`)}
    <div class="chat-settings-tip"><b>小技巧</b><span>可通过 AI 流程或连接器，将对话总结内容同步到表格、数据库或消息渠道中。</span></div>
  </div>`;
}

function renderWorkHoursSettings() {
  const disabled = state.workHoursEnabled ? "" : "disabled";
  const rangeRows = Array.from({ length: state.workTimeRangeCount }, (_, index) => `<div class="work-hours-time-row">
    <label class="work-hours-time"><span>◷</span><input type="time" aria-label="开始时间" ${disabled}></label>
    <span class="work-hours-to">至</span>
    <label class="work-hours-time"><span>◷</span><input type="time" aria-label="结束时间" ${disabled}></label>
    ${index === 0 ? `<button class="work-hours-circle-add" type="button" data-add-work-time title="新增时间段" ${disabled}>＋</button>` : `<button class="work-hours-circle-remove" type="button" data-remove-work-time title="删除时间段">−</button>`}
  </div>`).join("");
  const schedules = Array.from({ length: state.workScheduleCount }, (_, index) => `<div class="work-hours-schedule">
    <label class="work-hours-field-title">工作时间<span>*</span></label>
    <select class="work-hours-select" aria-label="选择工作日" ${disabled}>
      <option value="">请选择工作日</option>
      <option>周一至周五</option><option>每天</option><option>自定义</option>
    </select>
    <div class="work-hours-ranges">${rangeRows}</div>
    ${index > 0 ? `<button class="work-hours-delete-schedule" type="button" data-remove-work-schedule>删除此工作时间</button>` : ""}
  </div>`).join("");

  return `<section class="work-hours-page">
    <header class="work-hours-heading">
      <h2>工作时间设置</h2>
      <p>开启后，可设置人工服务工作时间，当访客在非工作时间咨询时，按照设置的处理方式对访客进行回复 <button class="link-button" type="button">了解更多</button></p>
    </header>

    <div class="work-hours-toggle-row">
      <span>是否开启工作时间</span>
      <button class="work-hours-switch ${state.workHoursEnabled ? "on" : ""}" type="button" role="switch" aria-checked="${state.workHoursEnabled}" data-work-hours-switch><i></i></button>
    </div>

    <div class="work-hours-schedules">${schedules}</div>
    <button class="work-hours-add-schedule" type="button" data-add-work-schedule ${disabled}>＋ 新增工作时间</button>

    <div class="work-hours-divider"></div>
    <section class="after-hours-section">
      <h3>非工作时间处理方式</h3>
      <p>如果不在上述工作时间如何处理</p>
      <select class="work-hours-select after-hours-select" aria-label="非工作时间处理方式">
        <option>A: 回复文本内容</option>
        <option>B: 转接 AI 助手</option>
        <option>C: 留言并等待人工回复</option>
      </select>
      <div class="after-hours-editor">
        <div class="after-hours-toolbar" aria-label="文本格式工具栏">
          <button>H</button><button><b>B</b></button><button><i>I</i></button><button>S̶</button><span></span><button>☷</button><button>1₂</button><span></span><button>≡</button><button>☰</button><span></span><button>↗</button><button>▣</button><button>▦⌄</button><button>▧⌄</button><span></span><button class="muted">↶</button><button class="muted">↷</button>
        </div>
        <div class="after-hours-content" contenteditable="true">抱歉，现在为非工作时间，请您在我们的工作时间再次联系，谢谢</div>
      </div>
    </section>

    <footer class="work-hours-footer">
      <button class="button" type="button" data-chat-settings-back>返回</button>
      <button class="button primary" type="button" data-demo-action="工作时间设置已保存" ${disabled}>确认</button>
    </footer>
  </section>`;
}

function renderQuickMessageSettings() {
  const query = state.quickMessageSearch.trim().toLowerCase();
  const visibleGroups = quickMessageData.groups.filter((group) => {
    const replies = quickMessageData.replies.filter((reply) => reply.groupId === group.id);
    return !query || group.name.toLowerCase().includes(query) || replies.some((reply) => `${reply.title} ${reply.content}`.toLowerCase().includes(query));
  });
  const ungroupedReplies = quickMessageData.replies.filter((reply) => !reply.groupId && (!query || `${reply.title} ${reply.content}`.toLowerCase().includes(query)));
  const hasData = quickMessageData.groups.length || quickMessageData.replies.length;
  return `<section class="quick-message-page">
    <div class="quick-message-heading"><b>快捷信息管理</b><p>创建一个新的快捷信息，可以在对话中使用他来进行快捷回复</p></div>
    <div class="quick-message-toolbar">
      <button class="button primary" data-modal="quickReply">＋ 新增快捷回复</button>
      <button class="button" data-modal="quickGroup">＋ 新增分组</button>
      <label class="quick-message-search"><span>⌕</span><input data-quick-message-search value="${escapeHtml(state.quickMessageSearch)}" placeholder="搜索"></label>
    </div>
    ${!hasData ? `<div class="quick-message-empty"><div class="quick-empty-art">▤</div><span>暂无分组</span></div>` : `
      <div class="quick-group-list">
        ${visibleGroups.map((group) => renderQuickMessageGroup(group, query)).join("")}
        ${ungroupedReplies.length ? `<article class="quick-group-card"><header><b>未分组</b><span>${ungroupedReplies.length} 条快捷回复</span></header>${ungroupedReplies.map(renderQuickReplyRow).join("")}</article>` : ""}
        ${!visibleGroups.length && !ungroupedReplies.length ? `<div class="quick-message-empty compact"><span>未找到匹配内容</span></div>` : ""}
      </div>`}
  </section>`;
}

function renderQuickMessageGroup(group, query) {
  const replies = quickMessageData.replies.filter((reply) => reply.groupId === group.id && (!query || `${reply.title} ${reply.content}`.toLowerCase().includes(query) || group.name.toLowerCase().includes(query)));
  return `<article class="quick-group-card">
    <header><b>${escapeHtml(group.name)}</b><span>${replies.length} 条快捷回复</span></header>
    ${replies.length ? replies.map(renderQuickReplyRow).join("") : `<div class="quick-group-empty">该分组暂无快捷回复</div>`}
  </article>`;
}

function renderQuickReplyRow(reply) {
  return `<div class="quick-message-row"><b>${escapeHtml(reply.title)}</b><span>${escapeHtml(reply.content)}</span><button class="icon-button" data-quick-reply-delete="${reply.id}" title="删除">×</button></div>`;
}

function renderAutomationCard(title, description, enabled, fields) {
  return `<section class="chat-config-card">
    <div class="chat-config-title"><div><b>${title}</b><p>${description}　<a>了解更多</a></p></div><span class="switch ${enabled ? "on" : ""}" data-switch></span></div>
    <div class="settings-form-grid">${fields}</div>
    <div class="automation-controls"><label>停止回复条件 <span class="switch" data-switch></span></label><label>对话记录条数 <input type="range" min="1" max="10" value="2"> 2 条</label></div>
    <button class="button primary" data-demo-action="${title}设置已保存">保存设置</button>
  </section>`;
}

function renderConversationSearch() {
  const modeLabels = { fuzzy: "模糊匹配", exact: "精确匹配", phone: "手机号" };
  return `<div class="conv-search-panel">
    <div class="conv-search-mode">
      <button data-chat-search-mode-toggle>${modeLabels[state.chatSearchMode]} <span>⌄</span></button>
      ${state.chatSearchModeOpen ? `<div class="conv-search-mode-menu">
        ${Object.entries(modeLabels).map(([value, label]) => `<button class="${state.chatSearchMode === value ? "active" : ""}" data-chat-search-mode="${value}"><span>${label}</span><b>✓</b></button>`).join("")}
      </div>` : ""}
    </div>
    <input data-chat-search-input value="${escapeHtml(state.chatSearchQuery)}" placeholder="搜索..." autocomplete="off">
    <button class="conv-search-close" data-chat-search-close title="关闭搜索">×</button>
  </div>`;
}

function matchesConversationSearch(item) {
  const query = state.chatSearchQuery.trim().toLowerCase();
  if (!query) return true;
  const [, name, owner, , last, , , phone = ""] = item;
  if (state.chatSearchMode === "phone") {
    const digits = query.replace(/\D/g, "");
    return Boolean(digits) && String(phone).includes(digits);
  }
  const fields = [name, owner, last].map((value) => String(value).toLowerCase());
  return state.chatSearchMode === "exact" ? fields.some((value) => value === query) : fields.some((value) => value.includes(query));
}

function getConversationAgeMinutes(time) {
  const hours = Number(time.match(/(\d+)小时/)?.[1] || 0);
  const minutes = Number(time.match(/(\d+)分钟/)?.[1] || 0);
  return hours * 60 + minutes;
}

function sortConversations(conversations) {
  return [...conversations].sort((a, b) => {
    if (state.chatSort === "unread" && Boolean(a[6]) !== Boolean(b[6])) return a[6] ? -1 : 1;
    return getConversationAgeMinutes(a[3]) - getConversationAgeMinutes(b[3]);
  });
}

function renderConversationItem([id, name, owner, time, last, status, unread]) {
  const active = state.selectedConversation === id ? "active" : "";
  return `<div class="conv-item ${active}" data-conversation="${id}">
    ${iconBox(id === "group" ? "群" : id === "demo" ? "演" : "K", "channel-icon")}
    <div style="min-width:0; flex:1">
      <div style="display:flex; justify-content:space-between; gap:8px">
        <b style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis">${name}</b>
        <span class="subtle" style="white-space:nowrap">${unread ? `<i class="unread-dot"></i>` : ""}${time}</span>
      </div>
      <div class="subtle" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis"> ${owner} ${last}</div>
    </div>
    <span class="conv-status ${status}"></span>
  </div>`;
}

function renderChannelPromo() {
  return `<div class="join-card">
    <button class="join-close">×</button>
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px">
      <span class="mini-platform green">微</span>
      <span class="mini-platform red">小</span>
      <span class="mini-platform red">抖</span>
      <span class="tag blue">+5</span>
    </div>
    <b>接入更多社交渠道</b>
    <div class="subtle" style="margin:8px 0 12px">集中管理微信、抖音、小红书等所有对话，提升服务效率。</div>
    <button class="button primary" style="width:100%" data-page="channels">立即接入</button>
  </div>`;
}

function renderConversationDetail() {
  const conv = getSelectedConversation();
  const title = conv?.[1] || "欧诚国际物流&集简云对接群";
  const owner = conv?.[2] || "Kelvin";
  return `
        <div class="conv-head"><b>${title} › ${owner}</b><button class="button primary small">解决中</button></div>
        <div class="conv-messages">
          ${state.convMessages.map((m) => renderConvBubble(m)).join("")}
        </div>
        <div class="conv-compose">
          <div style="display:flex; gap:16px; color:var(--blue); margin-bottom:8px"><b>回复</b><span>备注</span><span>📎发送素材</span></div>
          <textarea id="convInput" placeholder="请输入对话内容" style="width:100%; height:56px; border:0; outline:0; resize:none"></textarea>
          <div style="display:flex; justify-content:space-between"><span class="subtle">□</span><button class="button primary small" id="convSend">➤</button></div>
        </div>
  `;
}

function getSelectedConversation() {
  const all = Object.values(conversationMap).flat();
  return all.find((item) => item[0] === state.selectedConversation);
}

function renderConversationGuide() {
  const cards = [
    ["聚合对话介绍", "如何使用聚合对话功能", "✣", "#6d8cff"],
    ["接入对话渠道", "接入对话渠道", "▣", "#5fd2bd"],
    ["坐席管理", "管理与分配人工客服权限", "☊", "#f45b5b"],
    ["工作时间设置", "设置人工服务的工作时间和非工作时间处理方式", "◷", "#ff944d"],
    ["快捷消息", "设置常用的回复消息/图片，一键调用", "ϟ", "#58d0bd"],
    ["消息转发", "将人工客服以及AI助手转发达不同渠道中", "▱", "#ffc947"],
    ["转人工对话设置", "设置人工对话时的处理方式", "⌘", "#5c6df2"],
    ["数据统计", "查看各项对话数据统计指标", "⌁", "#437cf7"],
    ["联系人列表", "您可以在联系人列表中对联系人进行增删改查操作", "♙", "#5ec7f3"],
    ["联系人字段设置", "对联系人字段属性进行自定义配置", "T", "#7a5cff"],
  ];
  const titleHint = {
    全部对话: "您还没有任何人工服务对话消息，了解如何设置人工服务",
    人工对话: "您还没有任何人工服务对话消息，了解如何设置人工服务",
    AI对话: "您还没有选择 AI 对话，选择左侧会话可查看 AI 自动回复记录",
    指给我的: "您还没有待处理的指派对话，了解如何设置人工服务",
  }[state.chatFilter] || "选择左侧会话查看消息，或先了解聚合对话配置";
  return `<div class="chat-guide">
    <div class="guide-logo"><span class="brand-mark"></span><b>Jerry AI</b></div>
    <div class="subtle">${titleHint} <span style="color:var(--blue)">了解更多</span></div>
    <div class="guide-card-grid">
      ${cards
        .map(
          ([title, desc, ico, color]) => `<div class="guide-card">
            <span class="guide-icon" style="background:${color}">${ico}</span>
            <div><b>${title}</b><div class="subtle">${desc}</div></div>
          </div>`
        )
        .join("")}
    </div>
  </div>`;
}

function renderConversationInfo() {
  return `<div class="conv-info">
    <h3>联系人</h3>
    <div class="mini-card"><b>欧诚国际物流&集简云对接群</b><br><span class="subtle">添加群备注</span><br><br><button class="button primary" style="width:100%">查看/添加群成员</button></div>
    <div class="mini-card"><div class="mini-card-head">当前跟进人</div><span class="avatar">K</span> Kelvin <button class="button ghost small">重新分配</button></div>
    <div class="mini-card"><div class="mini-card-head">群操作</div><div class="label">禁止修改群名称 <span class="switch" data-switch></span></div><div class="label">禁止群成员互加好友 <span class="switch" data-switch></span></div></div>
    <div class="mini-card"><div class="mini-card-head">对话来源信息</div><table><tr><td>来源名称</td><td>企业微信代运营</td></tr><tr><td>会话ID</td><td>2aea37ed...</td></tr><tr><td>托管账户ID</td><td>1688855417782936</td></tr><tr><td>群ID</td><td>R:10775840332412006</td></tr></table></div>
  </div>`;
}

function renderConvBubble(m) {
  if (m.role === "system") return `<div style="text-align:center; color:#8a96a8; margin:16px">${m.text}</div>`;
  const align = m.role === "me" || m.role === "ai" ? "user" : "";
  return `<div class="message ${align}">${iconBox(m.role === "other" ? "客" : m.role === "me" ? "K" : "AI")}<div class="bubble">${m.text}${m.meta ? `<div class="bubble-meta">${m.meta}</div>` : ""}</div></div>`;
}

function renderFlowPage() {
  if (state.flowEditing) return renderFlowEditor();
  return `
    <section class="flow-shell">
      ${renderFlowSubnav()}
      <main class="flow-main">
        ${state.flowSub === "template" ? renderFlowTemplateList() : renderMyFlowList()}
      </main>
    </section>`;
}

function renderFlowSubnav() {
  return `<aside class="flow-subnav">
    <div class="flow-subnav-title">AI流程</div>
    <button class="${state.flowSub === "template" ? "active" : ""}" data-flow-sub="template">流程模板</button>
    <button class="${state.flowSub === "mine" ? "active" : ""}" data-flow-sub="mine">我的流程</button>
  </aside>`;
}

function renderFlowTemplateList() {
  const tabs = [
    ["all", "全部"],
    ["app", "应用事件触发"],
    ["dialog", "对话内容触发"],
    ["timer", "定时启动触发"],
  ];
  const list = flowTemplates.filter((item) => state.flowTemplateFilter === "all" || item.category === state.flowTemplateFilter);
  return `
    <div class="flow-page-head">
      <h1>模板列表</h1>
      <p>AI流程利用AI大模型能力配合意图与软件应用接口能力构建智能化业务流程</p>
      <input class="input flow-search" placeholder="搜索名称或描述">
      <div class="flow-tabs">
        ${tabs.map(([id, label]) => `<button class="${state.flowTemplateFilter === id ? "active" : ""}" data-flow-template-filter="${id}">${label}</button>`).join("")}
      </div>
    </div>
    ${list.length ? `<div class="flow-template-grid">${list.map(renderFlowTemplateCard).join("")}</div>` : renderFlowEmpty("暂无数据")}
  `;
}

function renderFlowTemplateCard(item) {
  return `<article class="flow-template-card">
    <div class="flow-template-top">
      <span class="flow-app-icon ${item.iconClass}">${item.icon}</span>
      <div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    </div>
    <div class="flow-template-foot">
      <div>
        <p>状态: 已发布</p>
        <p>模板ID: ${item.templateId}</p>
      </div>
      <button class="button" data-flow-template-view="${item.id}">查看</button>
    </div>
  </article>`;
}

function renderMyFlowList() {
  const tabs = [
    ["all", "全部"],
    ["content", "内容触发"],
    ["timer", "定时触发"],
    ["event", "事件触发"],
  ];
  return `
    <div class="flow-page-head">
      <h1>流程列表</h1>
      <p>AI流程利用AI大模型能力配合意图与软件应用接口能力构建智能化业务流程</p>
      <div class="flow-actions-row">
        <button class="button primary" data-modal="createFlow">＋ 创建流程</button>
        <input class="input flow-search" placeholder="搜索名称或描述">
      </div>
      <div class="flow-tabs">
        ${tabs.map(([id, label]) => `<button class="${state.flowMyFilter === id ? "active" : ""}" data-flow-my-filter="${id}">${label}</button>`).join("")}
      </div>
    </div>
    ${renderFlowEmpty("暂未创建流程")}
  `;
}

function renderFlowEmpty(text) {
  return `<div class="flow-empty">
    <div class="flow-empty-figure"></div>
    <div>${text}</div>
  </div>`;
}

function renderFlowEditor() {
  return `<section class="flow-editor-page">
    <div class="flow-editor-crumb">123 <span>›</span> 创建流程</div>
    <div class="flow-editor-body">
      <aside class="flow-editor-side">
        <div class="flow-editor-group">基础设置</div>
        <button class="active">◎ 流程设置</button>
        <button class="disabled">⌘ 流程测试</button>
        <button class="disabled">▤ 流程日志 ⟳</button>
      </aside>
      <main class="flow-editor-main">
        <section class="flow-form-block">
          <h3>流程指导说明 <span>*</span></h3>
          <p>指导AI如何执行此流程。示例：当抖音私信收到消息时，回复用户的问题，并使用抖音:发送私信给用户，将回复内容发给用户</p>
          <div class="flow-rich-editor">
            <div class="editor-toolbar"><b>B</b><b>H</b><span>▣</span><span>☷</span><span>☰</span><button class="link-button">〔x〕 插入变量</button></div>
            <div class="rich-editor" contenteditable="true"></div>
            <button class="link-button">展开</button>
          </div>
        </section>
        <section class="flow-form-block">
          <h3>选择模型</h3>
          <p>请选择流程执行时所依赖的模型类型</p>
          <button class="flow-model-row" data-flow-model-picker>
            <span class="flow-app-icon blue">山</span>
            <span>自动选择 doubao-seed-2.0-mini-260215</span>
            <em>内置</em>
            <b>⌘</b>
          </button>
        </section>
        <section class="flow-form-block">
          <h3>触发事件 <span>*</span></h3>
          <p>当指定条件满足时触发流程，支持对话内容，定时启动，第三方应用事件触发等多种方式</p>
          <button class="flow-dashed-button" data-modal="addFlowTrigger">＋ 添加触发事件</button>
        </section>
        <section class="flow-form-block">
          <h3>执行动作 <span>*</span></h3>
          <p>选择触发应用动作，当此应用动作事件产生时将自动触发流程</p>
          <button class="flow-dashed-button" data-modal="addFlowAction">＋ 添加执行动作</button>
        </section>
        <div class="flow-editor-footer">
          <button class="button" data-flow-back>返回</button>
          <button class="button disabled">⌘ 测试</button>
          <button class="button disabled">完成并退出</button>
        </div>
      </main>
    </div>
  </section>`;
}

function renderStandaloneKnowledge() {
  return `<section class="module-layout">
    ${renderAiSubnav("knowledge")}
    ${renderKnowledgeManager()}
  </section>`;
}

function renderKnowledgeCreatePage() {
  return `
    <section class="module-layout knowledge-create-shell">
      ${renderAiSubnav("knowledge")}
      <div class="knowledge-create-page">
        <div class="knowledge-breadcrumb">自有知识库  ›  新增知识库</div>
        <div class="knowledge-create-body">
          ${renderKnowledgeCreateStepper()}
          <div class="knowledge-work-area">${renderKnowledgeCreateContent()}</div>
        </div>
        <div class="knowledge-footer">
          <button class="button" data-knowledge-prev>上一步</button>
          <button class="button primary" data-knowledge-next ${state.knowledgeCreateStep === 1 && !state.knowledgeCreateType ? "disabled" : ""}>${state.knowledgeCreateStep === 4 ? "确认" : "下一步"}</button>
        </div>
      </div>
    </section>`;
}

function renderKnowledgeCreateStepper() {
  const steps = ["添加数据", "上传文件", "数据处理", "完成"];
  return `<aside class="vertical-stepper">
    ${steps
      .map((label, index) => {
        const n = index + 1;
        const status = state.knowledgeCreateStep === n ? "active" : state.knowledgeCreateStep > n ? "done" : "";
        return `<div class="k-step ${status}">
          <span class="k-step-circle">${state.knowledgeCreateStep > n ? "✓" : n}</span>
          <span>${label}</span>
        </div>`;
      })
      .join("")}
  </aside>`;
}

function renderKnowledgeCreateContent() {
  if (state.knowledgeCreateStep === 1) return renderContentTypeStep();
  if (state.knowledgeCreateStep === 2) return renderTextUploadStep();
  if (state.knowledgeCreateStep === 3) return renderSegmentStep();
  return renderKnowledgeCompleteStep();
}

function renderContentTypeStep() {
  const primary = [
    ["文本", "文", "手动录入问答、说明、报价规则等文本内容"],
    ["整个网站", "网", "抓取网站页面并生成可检索知识"],
    ["文档文件", "档", "上传 PDF、Word、Excel、TXT 等文档"],
  ];
  const thirdParty = [
    ["集简云数据表", "数", "同步表格数据作为知识来源"],
    ["微信公众号(官方接口)", "微", "通过官方接口同步公众号素材"],
    ["微信公众号(页面采集)", "微", "采集公开页面内容并清洗入库"],
    ["飞书文档", "飞", "同步飞书文档内容"],
  ];
  return `<div class="knowledge-step-content">
    <h3>选择内容类型</h3>
    <div class="knowledge-type-grid">
      ${primary.map(([title, ico, desc]) => renderKnowledgeTypeCard(title, ico, desc)).join("")}
    </div>
    <div class="knowledge-group-title">第三方数据源</div>
    <div class="knowledge-type-grid">
      ${thirdParty.map(([title, ico, desc]) => renderKnowledgeTypeCard(title, ico, desc)).join("")}
    </div>
  </div>`;
}

function renderKnowledgeTypeCard(title, ico, desc) {
  const active = state.knowledgeCreateType === title;
  return `<div class="knowledge-type-card ${active ? "active" : ""}" data-knowledge-type="${title}">
    <span class="knowledge-source-icon">${ico}</span>
    <div>
      <b>${title}</b>
      <div class="subtle">${desc}</div>
    </div>
  </div>`;
}

function renderTextUploadStep() {
  if (state.knowledgeCreateType === "整个网站") return renderWebsiteUploadStep();
  if (state.knowledgeCreateType === "文档文件") return renderFileUploadStep();
  return `<div class="knowledge-form-panel">
    <div class="form-row">
      <div class="label">文本名称 <span style="color:var(--red)">*</span></div>
      <input class="input" style="width:100%" placeholder="请输入" value="欧洲海运物流问答">
    </div>
    <div class="form-row">
      <div class="label">文本来源</div>
      <input class="input" style="width:100%" placeholder="请输入" value="物流问答库">
    </div>
    <div class="form-row">
      <div class="label">文本内容 <span style="color:var(--red)">*</span></div>
      <div class="editor-toolbar kb-toolbar">
        <b>H</b><b>B</b><i>I</i><span>S</span><span>•</span><span>1.</span><span>≡</span><span>🔗</span><span>▧</span><span>▦</span><span>⌄</span><span>↶</span><span>↷</span>
      </div>
      <div class="rich-editor kb-editor" contenteditable="true">促销-欧洲海运普船(卡派)的派送时效为开船后45天左右。

欧洲海运包税线路：深圳装柜 → 盐田港 → 鹿特丹港落港 → 荷兰/比利时清关 → 再通过快递或卡车派送至欧洲仓库或商业地址。

收货限制：仅接收普货，拒收皮革、纺织品、包包、服装、鞋子、螺丝、玩具、纯玻璃、纯塑料以及税率超过6%的产品。</div>
    </div>
  </div>`;
}

function renderWebsiteUploadStep() {
  return `<div class="knowledge-form-panel website-form-panel">
    <div class="blue-tip">我们会自动收集网站中的页面列表和页面文本内容，页面最大数量不超过500个</div>
    <div class="form-row">
      <div class="label">网站名称</div>
      <input class="input" style="width:100%" placeholder="请输入" value="">
    </div>
    <div class="form-row">
      <div class="label">网站链接 <span style="color:var(--red)">*</span></div>
      <textarea class="textarea website-textarea" style="width:100%" placeholder="请输入网页链接，每个网页链接必须单独一行"></textarea>
      <div class="hint">请包含完整的网站地址，包括http开头，例如：https://jijyun.cn</div>
    </div>
    <div class="or-line"><span>或</span></div>
    <div class="form-row">
      <div class="label">网站地图(SiteMap) <span style="color:var(--red)">*</span></div>
      <input class="input" style="width:100%" placeholder="请输入">
      <div class="hint">请在此处填写网站地图的完整地址，示例：https://www.abc.com/site.xml</div>
    </div>
    <div class="form-row inline-row">
      <div>
        <div class="label">支持动态页面内容获取</div>
        <div class="hint">动态页面获取需要使用额外的内容获取工具，有额外费用</div>
      </div>
      <span class="switch" data-switch></span>
    </div>
  </div>`;
}

function renderFileUploadStep() {
  return `<div class="knowledge-form-panel">
    <div class="upload-drop">
      <div class="upload-icon">＋</div>
      <b>将文件拖拽至此区域或选择文件上传</b>
      <span class="subtle">支持 PDF、Word、Excel、TXT、CSV 等文件，单文件最大 50M</span>
      <button class="button primary">选择文件</button>
    </div>
    <div class="mini-card"><b>已选择示例文件</b><br><span class="subtle">物流问答库.xlsx · 12.96KB · 等待处理</span></div>
  </div>`;
}

function renderSegmentStep() {
  const custom = state.knowledgeSegmentMode === "custom";
  return `<div class="segment-layout">
    <div class="segment-main">
      <h3>分段设置</h3>
      <div class="segment-card ${!custom ? "active" : ""}" data-segment-mode="auto">
        <span class="segment-icon">▤</span>
        <div><b>自动分段与清洗</b><div class="subtle">自动设置分段规则与预处理规则，如果不了解这些参数建议选择此项</div></div>
      </div>
      <div class="segment-card ${custom ? "active expanded" : ""}" data-segment-mode="custom">
        <span class="segment-icon dark">⌘</span>
        <div style="flex:1">
          <b>自定义</b>
          <div class="subtle">自定义分段规则、分段长度以及预处理规则等参数</div>
          ${custom ? renderCustomSegmentSettings() : ""}
        </div>
      </div>
    </div>
    <aside class="preview-pane">
      <h3>分段预览</h3>
      ${renderSegmentPreview(custom)}
    </aside>
  </div>`;
}

function renderCustomSegmentSettings() {
  const rules = [
    "替换掉连续的空格，换行符和制表符",
    "删除所有URL",
    "删除所有电子邮件地址",
    "删除所有电话号码",
    "删除身份证号码",
    "删除银行卡号码",
  ];
  return `<div class="segment-expanded-body">
    <div class="form-row">
      <div class="label"><span style="color:var(--red)">*</span> 分段标识符</div>
      <input class="input" style="width:100%" value="\\n" placeholder="请输入">
      <div class="hint">通过您输入的标识符对数据集内容进行切割分段，支持输入文本、数字、符号、字符串转义符，如：\\n</div>
    </div>
    <div class="form-row">
      <div class="label"><span style="color:var(--red)">*</span> 分段最大长度</div>
      <input class="input" style="width:100%" value="2000" placeholder="请输入">
      <div class="hint">对您提供的数据集进行分割，便于向量化处理，分段最大长度为2000，最小长度为800。</div>
    </div>
    <div class="label">文本预处理规则</div>
    <div class="rule-list">
      ${rules.map((rule, index) => `<label><input type="checkbox" ${index === 0 ? "checked" : ""}> ${rule}</label>`).join("")}
    </div>
    <div class="segment-actions">
      <button class="button" data-reset-segment>重置</button>
      <button class="button primary" data-generate-preview>生成预览</button>
    </div>
  </div>`;
}

function renderSegmentPreview(custom) {
  if (!custom) return `<div class="empty preview-empty">选择分段方式后生成预览</div>`;
  const chunks = state.knowledgePreview
    ? [
        ["#001", "38字符", "促销-欧洲海运普船(卡派)的派送时效为开船后45天左右。"],
        ["#002", "86字符", "欧洲海运包税线路：深圳装柜 → 盐田港 → 鹿特丹港落港 → 荷兰/比利时清关 → 再通过快递或卡车派送。"],
      ]
    : [["#001", "3字符", "123"]];
  return chunks
    .map(
      ([id, count, text]) => `<div class="preview-chunk">
        <div class="preview-chunk-head"><span>${id}</span><span>${count}</span></div>
        <div>${text}</div>
      </div>`
    )
    .join("");
}

function renderKnowledgeCompleteStep() {
  return `<div class="knowledge-complete">
    <h3>知识库创建完成</h3>
    <div class="form-row" style="width:100%">
      <div class="label">知识库名称 <span style="color:var(--red)">*</span></div>
      <input class="input" style="width:100%" placeholder="请输入知识库名称" value="物流问答">
    </div>
  </div>`;
}

function renderMarketing() {
  switch (state.marketingSub) {
    case "tags":
      return renderMarketingTags();
    case "blast":
      return renderMessageBlast();
    case "friend":
      return renderAutoFriend();
    case "operation":
      return renderMarketingOperation();
    case "groups":
      return renderMarketingGroups();
    case "accounts":
      return renderMarketingAccounts();
    case "materials":
      return renderMaterials();
    case "antiSeal":
      return renderAntiSeal();
    case "records":
      return renderMarketingRecords();
    case "docs":
      return renderMarketingDocs();
    default:
      return renderMarketingWorkbench();
  }
}

function renderMarketingRulesList() {
  return `<section class="marketing-page">
    <div class="marketing-crumb">AI微信营销 › 聚合对话设置</div>
    <div class="marketing-head">
      <div>
        <h1 class="page-title">聚合对话设置</h1>
        <div class="subtle">您可以在此页面添加和管理对话规则 <button class="link-button">了解更多</button></div>
      </div>
    </div>
    <div class="marketing-toolbar">
      <button class="button primary" data-marketing-rule-new>＋ 添加规则</button>
      <input class="input search-input" placeholder="搜索" />
    </div>
    <div class="marketing-rule-grid">
      ${marketingRules
        .map(
          (rule) => `<div class="marketing-rule-card">
            <span class="switch ${rule.enabled ? "on" : ""}" data-switch></span>
            <div class="rule-icon">✣</div>
            <h3>${rule.name}</h3>
            <div class="rule-actions">
              <button class="button small" data-marketing-rule-edit="${rule.id}">配置</button>
              <button class="button ghost small">⋮</button>
            </div>
          </div>`
        )
        .join("")}
    </div>
  </section>`;
}

function renderMarketingRuleForm() {
  const rule = marketingRules.find((item) => item.id === state.marketingRuleId);
  return `<section class="marketing-form-page">
    <div class="marketing-crumb">AI微信营销 › 聚合对话设置</div>
    <div class="marketing-form-shell">
      <div class="marketing-form-panel">
        ${renderMarketingSelect("选择托管账户 *", ["任意托管账户", "指定托管账户"], "任意托管账户")}
        <div class="hint">支持接入内部与外部个人微信用户群聊与私聊： <button class="link-button">如何添加托管账户</button></div>
        <button class="button primary small">添加账号</button>
        ${renderMarketingSelect("是否仅回复指定会话(私聊/群聊) *", ["全部对话", "仅私聊", "仅群聊", "指定会话"], "全部对话")}
        <div class="hint">仅群聊时生效此配置，私聊时不会参考此配置</div>
        ${renderMarketingSelect("群聊对话时的触发方式", ["仅@托管账户时触发", "任意对话触发"], "仅@托管账户时触发")}
        <div class="hint">建议选择 仅@托管账户时触发，否则群聊时任意对话都会触发。如果选择“任意对话触发”建议配合意图使用，或者全部转入人工服务。</div>
        ${renderMarketingSelect("AI对话设置 *", ["全部使用AI助手进行对话", "仅非工作时间开启AI助手对话", "全部使用人工对话"], "请选择", [
          "将默认先与AI助手进行对话，可以人工对话打断",
          "工作时间使用人工对话，非工作时间使用AI助手对话，设置工作时间",
          "全部对话使用人工回复",
        ])}
        ${renderMarketingSelect("选择AI智能体服务平台 *", ["语聚AI"], "语聚AI")}
        <div class="hint">语聚AI本身是智能体平台，我们也支持主流智能体平台接入</div>
        ${renderMarketingSelect("选择AI对话助手 *", ["演示AI助手", "canna测试"], "请选择")}
        <div class="hint">您可以在语聚AI平台，<button class="link-button" data-assistant-sub="assistant">创建或者修改您的智能体</button></div>
        ${renderMarketingSelect("转入人工意图设置", ["转人工", "报价咨询", "售后投诉"], "请选择")}
        <div class="hint">满足指定意图设置后，自动转入到人工对话中，<button class="link-button">了解更多</button> <button class="link-button" data-assistant-sub="intent">创建或修改意图</button></div>
        <div class="form-row">
          <div class="label">每用户最大AI回复次数</div>
          <input class="input" value="300" type="number">
          <div class="hint">每次对话时AI最大对话轮次，避免被滥用。如果设置为0则表示不限制，默认为0。如果到上限后，默认切换至人工对话。</div>
        </div>
        <div class="form-row">
          <div class="label">规则名称 <span style="color:var(--red)">*</span></div>
          <input class="input" placeholder="设置一个规则名称方便查询" value="${rule?.name || ""}">
        </div>
        <div class="marketing-form-actions">
          <button class="button" data-marketing-back>返回</button>
          <button class="button primary" data-marketing-save>保存</button>
        </div>
      </div>
    </div>
  </section>`;
}

function renderMarketingSelect(label, options, value, descriptions = []) {
  return `<div class="form-row">
    <div class="label">${label.includes("*") ? label.replace("*", '<span style="color:var(--red)">*</span>') : label}</div>
    <details class="fake-select">
      <summary>${value}<span>⌄</span></summary>
      <div class="fake-select-menu">
        ${options.map((option, index) => `<button type="button" data-marketing-option="${option}"><b>${option}</b>${descriptions[index] ? `<span>${descriptions[index]}</span>` : ""}</button>`).join("")}
      </div>
    </details>
  </div>`;
}

function renderMarketingLayout(title, sideItems, active, dataAttr, body) {
  return `<section class="mkt-shell">
    <aside class="mkt-subpanel">
      <div class="mkt-subpanel-title">${title}</div>
      <div class="mkt-subitems">
        ${sideItems.map(([id, label]) => `<button class="${active === id ? "active" : ""}" data-${dataAttr}="${id}">${label}</button>`).join("")}
      </div>
    </aside>
    <main class="mkt-main">${body}</main>
  </section>`;
}

function renderMktTabs(tabs, active, dataAttr, extraClass = "") {
  return `<div class="mkt-tabs ${extraClass}">
    ${tabs.map(([id, label]) => `<button class="${active === id ? "active" : ""}" data-${dataAttr}="${id}">${label}</button>`).join("")}
  </div>`;
}

function renderMktTip(text, icon = "●") {
  return `<div class="mkt-tip"><span>${icon}</span><b>${text}</b></div>`;
}

function renderMktSearchRow(items, right = "") {
  return `<div class="mkt-filter-row">
    <div class="mkt-filter-left">
      ${items
        .map((item) => {
          if (item === "reset") return `<button class="button mkt-reset" data-demo-action="筛选已重置">重 置</button>`;
          if (item.startsWith("select:")) return `<button class="mkt-select" data-demo-action="${item.slice(7)}筛选已展开">${item.slice(7)} <span>⌄</span></button>`;
          if (item.startsWith("date:")) return `<button class="mkt-date" data-demo-action="日期范围已展开">${item.slice(5)} <span>▣</span></button>`;
          return `<input class="input mkt-input" placeholder="${item}">`;
        })
        .join("")}
    </div>
    <div class="mkt-filter-right">${right}</div>
  </div>`;
}

function renderMktEmpty() {
  return `<div class="mkt-empty"><div class="mkt-empty-icon">▱</div><div>暂无数据</div></div>`;
}

function renderMktTable(headers, rows = [], checkbox = false) {
  return `<div class="mkt-table-wrap">
    <table class="mkt-table">
      <thead><tr>${checkbox ? "<th><input type=\"checkbox\"></th>" : ""}${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
      <tbody>
        ${
          rows.length
            ? rows.map((row) => `<tr>${checkbox ? "<td><input type=\"checkbox\"></td>" : ""}${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")
            : `<tr><td colspan="${headers.length + (checkbox ? 1 : 0)}">${renderMktEmpty()}</td></tr>`
        }
      </tbody>
    </table>
  </div>`;
}

function renderMarketingWorkbench() {
  const side = [
    ["mine", "我的"],
    ["queue", "排队"],
    ["all", "全部"],
  ];
  const body = `<div class="mkt-chat-shell">
    <aside class="mkt-work-queue">
      <div class="mkt-work-filter active"><b>● 我的</b><span>0/0</span></div>
      <div class="mkt-work-filter"><b>⟲ 排队</b><span>2</span></div>
      <div class="mkt-work-filter"><b>♙ 全部</b></div>
      <div class="mkt-account-title">账号视图⇄ <span>•••</span></div>
      <div class="mkt-account-row"><span class="mkt-avatar tiny">图</span>Canna <span class="mkt-status-dot"></span></div>
      <div class="mkt-work-bottom">
        <div>⚙ 设置</div>
        <div class="mkt-auto-card"><span class="mkt-avatar tiny">图</span><b>自动分配</b><small>未开启</small><span>⌧</span></div>
      </div>
    </aside>
    <section class="mkt-work-list">
      <div class="mkt-work-head"><b>‹ 我的</b><div class="mkt-tool-icons">⚗ 🔍 ＋ ⇅ ⋯</div></div>
      <div class="mkt-under-tab">全部</div>
      <div class="mkt-list-empty">●<br>暂无消息</div>
    </section>
    <section class="mkt-work-main">
      <div class="mkt-illus-card"><div></div><span>⌕</span><b>●</b></div>
      <h3>当前没有已分配给你的对话</h3>
      <p>请检查现在是否开启自动分配,如果没有需要处理的对话，就休息一下吧!</p>
    </section>
    <button class="mkt-float-btn" data-demo-action="快捷工具已打开">▤</button>
  </div>`;
  return renderMarketingLayout("对话工作台", side, "mine", "workbench-filter", body);
}

function renderMarketingTags() {
  const side = [
    ["custom", "自定义标签"],
    ["wechat", "企微标签"],
    ["keyword", "关键词标签"],
  ];
  const bodyMap = {
    custom: renderCustomTags,
    wechat: renderWechatTags,
    keyword: renderKeywordTags,
  };
  return renderMarketingLayout("营销标签", side, state.marketingTagSub, "marketing-tag-sub", bodyMap[state.marketingTagSub]());
}

function renderTagPageHead(title, tip) {
  return `<div class="mkt-page-title">${title}</div>${renderMktTip(tip, "●")}`;
}

function renderCustomTags() {
  return `${renderTagPageHead("自定义标签", "仅可应用于系统内部，对当前小组生效的标签，可在侧边栏、客户分组、关键词打标签中快捷使用")}
    ${renderMktTabs([["customer", "自定义客户标签"], ["group", "自定义群聊标签"]], state.marketingTagTab, "marketing-tag-tab")}
    ${renderMktSearchRow(["请输入自定义客户标签", "请输入自定义客户标签组", "reset"])}
    <div class="mkt-section-card">
      <div class="mkt-section-head"><b>共 0 个标签组，0 个标签</b><button class="button primary" data-demo-action="新建自定义标签组">新建自定义标签组</button></div>
      ${renderMktEmpty()}
    </div>`;
}

function renderWechatTags() {
  const rows = state.marketingTagTab === "personal"
    ? [["<b>Canna-gs47<br>58(0)</b>", "-", "", "", "", "", "<button class=\"link-button\" data-demo-action=\"编辑企微个人标签\">编辑</button>"]]
    : [["<b>客户等级(3)</b>", "可见小组:全部小组", "<span class=\"mkt-tag-chip\">一般</span> <span class=\"mkt-tag-chip\">重要</span> <span class=\"mkt-tag-chip\">核心</span>", "", "", "", ""]];
  return `${renderTagPageHead("企微标签", "企业微信企业标签: 同一主体下所有托管账号共享的标签体系，可以给主体下所有的客户打标签<br>企业微信个人标签: 某一托管账号专属的标签体系，仅支持给该账号下的客户打标签")}
    ${renderMktTabs([["enterprise", "企微企业标签"], ["personal", "企微个人标签"]], state.marketingTagTab, "marketing-tag-tab", "boxed")}
    ${renderMktSearchRow(["请输入标签", "请输入标签组", "reset"])}
    <div class="mkt-section-card">
      <div class="mkt-section-head"><b>共 1 个标签组，${state.marketingTagTab === "personal" ? "0" : "3"} 个标签</b><button class="button primary" data-demo-action="同步企微标签">${state.marketingTagTab === "personal" ? "同步企微个人标签" : "同步企微标签"}</button></div>
      ${state.marketingTagTab === "enterprise" ? `<div class="mkt-soft-note">🔔 新创建的标签默认全部小组可见，可见范围将影响标签数据统计，若仅对个别小组开放，请点击编辑修改可见小组</div>` : ""}
      <div class="mkt-tag-row">${rows[0].join("")}</div>
    </div>`;
}

function renderKeywordTags() {
  const rule = state.keywordTagTab === "rules";
  return `${renderTagPageHead("关键词标签", "需要设置关键词，关键词可设置多个，客户在发送的消息中命中一个关键词即可打上设置的标签，可选择此规则是否同步在群聊和私聊中生效，仅支持在互为好友时自动打标签")}
    ${renderMktTabs([["rules", "关键词标签规则"], ["records", "关键词标签记录"]], state.keywordTagTab, "keyword-tag-tab")}
    ${
      rule
        ? `${renderMktSearchRow(["请输入规则名称", "请输入关键词", "select:请选择关键词类型", "select:请选择生效主体", "select:请选择企微标签", "select:请选择自定义标签", "reset"], `<button class="button primary" data-demo-action="添加关键词标签">添加关键词标签</button>`)}
          ${renderMktTable(["关键词标签规则名称", "关键词类型", "关键词", "生效主体", "企微标签", "自定义标签", "操作"])}`
        : `${renderMktSearchRow(["select:请选择规则名称", "select:请选择生效主体", "请输入客户名称", "date:触发时间 起始日期 至 结束日期", "reset"], `<button class="button primary" data-demo-action="导出关键词标签记录">导 出</button>`)}
          ${renderMktTable(["关键词标签规则名称", "生效主体", "时间", "客户名称/备注名", "企微标签", "自定义标签", "操作"])}`
    }`;
}

function renderMessageBlast() {
  const side = [
    ["private", "私聊群发"],
    ["group", "群聊群发"],
    ["moments", "朋友圈发送"],
  ];
  return renderMarketingLayout("消息群发", side, state.messageBlastSub, "message-blast-sub", renderBlastMain());
}

function renderBlastMain() {
  const isPrivate = state.messageBlastSub === "private";
  const isMoments = state.messageBlastSub === "moments";
  const title = isMoments ? "朋友圈发送" : `${isPrivate ? "私聊群发" : "群聊群发"}-高级版`;
  const tabs = isMoments ? [["tasks", "任务列表"], ["settings", "发送设置"]] : [["tasks", "任务列表"], ["cycle", "循环任务"], ["settings", "群发设置"]];
  const columns = state.messageBlastTab === "cycle"
    ? ["任务名称", "发送内容", "托管账号状态", "任务状态", "已循环次数", "操作"]
    : ["任务名称", "发送内容", "托管账号状态", "状态", "操作"];
  if (state.messageBlastTab === "settings") return renderBlastSettings(title);
  return `<div class="mkt-page-title with-tabs"><span>${title}</span>${renderMktTabs(tabs, state.messageBlastTab, "message-blast-tab")}</div>
    ${renderMktTip("高级群发是通过RPA模拟人工点击无需成员手动发送消息，不限制群发次数，全部自动化执行动作。若需要1分钟内完成全部群发任务请使用“极速版”发送。 查看版本区别", "●")}
    <div class="mkt-action-strip">
      ${state.messageBlastTab === "cycle" ? "<b>▣ 循环任务列表</b>" : ""}
      <span></span>
      <button class="button" data-demo-action="批量操作">▦</button>
      ${state.messageBlastTab === "tasks" ? `<button class="button" data-demo-action="批量取消">批量取消</button>` : ""}
      <button class="button primary" data-demo-action="新建群发任务">新建任务</button>
    </div>
    ${renderMktSearchRow(["请输入任务名称", "请输入任务id", "select:请选择创建者", "select:请选择托管账号", "reset"], `<button class="link-button" data-demo-action="展开更多筛选">展开⌄</button>`)}
    <div class="mkt-refresh">↻刷新${state.messageBlastTab === "cycle" ? "列表" : "进度"}</div>
    ${renderMktTable(columns, [], state.messageBlastTab === "tasks")}`;
}

function renderBlastSettings(title) {
  return `<div class="mkt-page-title with-tabs"><span>${title}</span>${renderMktTabs([["tasks", "任务列表"], ["cycle", "循环任务"], ["settings", "群发设置"]], state.messageBlastTab, "message-blast-tab")}</div>
    ${renderMktTip("高级群发是通过RPA模拟人工点击无需成员手动发送消息，不限制群发次数，全部自动化执行动作。若需要1分钟内完成全部群发任务请使用“极速版”发送。 查看版本区别", "●")}
    <div class="mkt-settings-card">
      <div class="mkt-settings-head"><b>◈ 群发设置</b><span>注意：此配置生效于私聊SOP和私聊群发</span><button class="button primary" data-demo-action="编辑群发设置">编 辑</button></div>
      <div class="mkt-soft-note purple">● 群发设置功能主要用于控制托管账号发送频率，系统最低可设置“消息间隔与对象间隔”时间为3秒，最高为600秒（即十分钟），但3秒频率过高不建议使用，建议使用默认值</div>
      <div class="mkt-config-block"><h3>群发间隔</h3><p><b>* 每条消息发送间隔 ⓘ：</b><input class="input tiny-num" value="5" disabled> - <input class="input tiny-num" value="10" disabled> 秒</p><p><b>* 每个发送对象间隔 ⓘ：</b><input class="input tiny-num" value="30" disabled> - <input class="input tiny-num" value="60" disabled> 秒</p></div>
      <div class="mkt-config-block"><h3>可发送时间</h3><p><b>* 发送时间：</b> 全天发送</p></div>
      <div class="mkt-config-block"><h3>批次设置</h3><p><b>* 发送批次：</b> 不设置发送批次</p></div>
    </div>`;
}

function renderAutoFriend() {
  const side = [
    ["excel", "EXCEL加好友"],
    ["group", "群聊加好友"],
    ["card", "名片加好友"],
    ["api", "API加好友"],
    ["lost", "客户流失"],
    ["blacklist", "系统黑名单"],
  ];
  return renderMarketingLayout("自动加好友", side, state.autoFriendSub, "auto-friend-sub", renderAutoFriendMain());
}

function renderAutoFriendMain() {
  const titleMap = { excel: "Excel加好友", group: "群聊加好友", card: "名片加好友", api: "API加好友", lost: "客户流失", blacklist: "系统黑名单" };
  if (state.autoFriendSub !== "excel") {
    return `<div class="mkt-page-title">${titleMap[state.autoFriendSub]}</div>${renderMktTip("系统将按设定时间间隔逐个执行任务，当前为演示页面。", "●")}${renderMktSearchRow(["请选择任务状态", "reset"], `<button class="button primary" data-demo-action="添加${titleMap[state.autoFriendSub]}任务">添加任务</button>`)}${renderMktTable(["任务名称", "任务状态", "客户/群", "添加好友账号", "操作"], [])}`;
  }
  const metrics = [["导入数据", "0"], ["待发送总数", "0"], ["待通过总数", "0"], ["已添加总数", "0"], ["失败总数", "0"], ["总添加成功率", "0%"], ["首次加好友成功率", "0%"]];
  return `<div class="mkt-page-title">Excel加好友</div>
    ${renderMktTip("系统将按加好友时间间隔逐个发送请求。手动任务仅在每日09:00-21:00发送好友申请，每个托管账号发送好友申请的间隔为600-900秒，可在加好友设置中修改 修改加好友设置", "●")}
    <div class="mkt-stat-row">${metrics.map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`).join("")}</div>
    <div class="mkt-section-line"><b>▣ 任务列表</b><div><button class="button" data-demo-action="批量开始任务">批量开始任务 ⌄</button><button class="button" data-demo-action="导出任务">导出</button><button class="button primary" data-demo-action="添加任务">添加任务</button></div></div>
    ${renderMktSearchRow(["select:请选择任务状态", "reset"])}
    ${renderMktTable(["任务名称", "任务状态", "加好友账号", "加好友账号ID", "加好友后打标签", "打招呼", "操作"], [], true)}`;
}

function renderMarketingOperation() {
  const side = [
    ["keywordReply", "关键词回复"],
    ["keywordGroup", "关键词拉群"],
    ["newCustomer", "新客户SOP"],
    ["privateSop", "私聊SOP"],
    ["groupSop", "群聊SOP"],
    ["momentsSop", "朋友圈SOP"],
    ["tagSop", "标签SOP"],
    ["template", "SOP模板"],
    ["batchGroup", "批量拉群"],
    ["tagGroup", "标签拉群"],
  ];
  return renderMarketingLayout("自动化运营", side, state.operationSub, "operation-sub", renderOperationMain());
}

function renderOperationMain() {
  if (state.operationSub !== "keywordReply") {
    const label = {
      keywordGroup: "关键词拉群",
      newCustomer: "新客户SOP",
      privateSop: "私聊SOP",
      groupSop: "群聊SOP",
      momentsSop: "朋友圈SOP",
      tagSop: "标签SOP",
      template: "SOP模板",
      batchGroup: "批量拉群",
      tagGroup: "标签拉群",
    }[state.operationSub];
    return `<div class="mkt-page-title">${label}</div>${renderMktSearchRow(["请输入任务名称", "select:请选择状态", "reset"], `<button class="button primary" data-demo-action="添加${label}">添加${label}</button>`)}${renderMktTable(["任务名称", "触发条件", "生效范围", "状态", "操作"], [])}`;
  }
  const tab = state.operationTab;
  return `<div class="mkt-page-title with-tabs"><span>关键词回复</span>${renderMktTabs([["content", "关键词回复"], ["advanced", "高级设置"]], tab === "advanced" ? "advanced" : "content", "operation-top-tab")}</div>
    ${tab === "advanced" ? renderOperationAdvanced() : renderKeywordReplyList()}`;
}

function renderKeywordReplyList() {
  return `${renderMktTabs([["content", "关键词回复内容"], ["records", "触发记录"]], state.operationTab, "operation-tab", "boxed")}
    <div class="mkt-action-strip">
      <span></span>
      <button class="button" data-demo-action="批量打运营标签">批量打运营标签 ⌄</button>
      <button class="button" data-demo-action="批量开始任务">批量开始任务 ⌄</button>
      <button class="button" data-demo-action="批量删除">批量删除</button>
      <button class="button" data-demo-action="批量添加">批量添加</button>
      <button class="button primary" data-demo-action="添加关键词回复">添加关键词回复</button>
    </div>
    ${renderMktSearchRow(["请输入任务名...", "请输入关键词", "select:请选择关键词类型", "select:请选择匹配规则", "select:请选择生效范围", "select:请选择运营标签", "reset"])}
    ${renderMktTable(["任务名称", "触发关键字", "关键词类型", "匹配规则", "生效范围", "回复素材", "自动回复开", "操作"], [], true)}`;
}

function renderOperationAdvanced() {
  return `<div class="mkt-settings-card">
    <div class="mkt-settings-head"><b>高级设置</b><button class="button primary" data-demo-action="保存高级设置">保存设置</button></div>
    <div class="mkt-config-block"><h3>回复限制</h3><p><label><input type="checkbox" checked> 同一客户命中同一规则后 24 小时内只回复一次</label></p><p><label><input type="checkbox"> 仅在工作时间内触发关键词回复</label></p></div>
    <div class="mkt-config-block"><h3>生效对象</h3><p><label><input type="radio" checked> 私聊和群聊均生效</label> &nbsp; <label><input type="radio"> 仅私聊</label> &nbsp; <label><input type="radio"> 仅群聊</label></p></div>
  </div>`;
}

function renderMarketingGroups() {
  const side = [
    ["welcome", "入群欢迎语"],
    ["robot", "自动踢人"],
    ["invite", "接受群邀请"],
    ["transfer", "多群转播"],
  ];
  return renderMarketingLayout("群聊管理", side, state.groupManageSub, "group-manage-sub", renderGroupManageMain());
}

function renderGroupManageMain() {
  const title = { welcome: "入群欢迎语", robot: "自动踢人", invite: "接受群邀请", transfer: "多群转播" }[state.groupManageSub];
  const headers = state.groupManageSub === "welcome" ? ["任务名称", "入群欢迎语", "发送外部客户名片", "生效群聊", "状态", "操作"] : ["任务名称", "规则内容", "生效群聊", "状态", "操作"];
  return `<div class="mkt-page-title with-tabs"><span>${title}</span>${renderMktTabs([["welcome", title], ["advanced", "高级配置"]], state.groupManageTab, "group-manage-tab")}</div>
    <div class="mkt-section-line"><b>▣ ${title}</b><button class="button primary" data-demo-action="添加${title}">添加${title}</button></div>
    ${renderMktSearchRow(["请输入任务名称", "请输入群聊名称", "reset"])}
    ${renderMktTable(headers)}`;
}

function renderMarketingAccounts() {
  const rows = [["<span class=\"mkt-avatar tiny\">图</span> Canna", "<span class=\"tag green\">在线</span>", "Canna", "8018", "<span class=\"switch on\" data-switch></span>", "<button class=\"button small\" data-demo-action=\"账号控制台\">控制台</button>"]];
  return `<section class="mkt-full-page">
    <div class="mkt-page-title">托管账号</div>
    <div class="mkt-section-line"><b>托管账号列表</b><button class="button primary" data-demo-action="添加托管账号">添加账号</button></div>
    ${renderMktSearchRow(["请输入托管账号名称", "select:请选择托管账号状态", "reset"])}
    ${renderMktTable(["账号信息", "状态", "托管账号", "账号ID", "消息接收", "操作"], rows)}
  </section>`;
}

function renderMaterials() {
  const topTabs = [["personal", "个人素材"], ["group", "小组素材"], ["enterprise", "企业素材"]];
  const types = [["all", "全部"], ["text", "文本话术"], ["image", "图片"], ["web", "网页"], ["video", "视频"], ["voice", "语音"], ["file", "文件"], ["mini", "小程序"], ["emoji", "表情包"], ["card", "名片"], ["channel", "视频号"]];
  return `<section class="mkt-material-page">
    <div class="mkt-page-title with-tabs"><span>基础素材</span>${renderMktTabs(topTabs, state.materialScope, "material-scope")}</div>
    <div class="mkt-material-body">
      <aside class="mkt-material-side">
        <h3>▰ 基础素材分组</h3>
        <input class="input" placeholder="请输入分组名称">
        <button class="mkt-material-group active">⋮ 默认分组 <span>•••</span></button>
        <button class="link-button mkt-add-group" data-demo-action="新增分组">＋ 新增分组</button>
      </aside>
      <main>
        <div class="mkt-section-line"><b>默认分组</b><div><button class="button" data-demo-action="批量添加素材">批量添加</button><button class="button primary" data-demo-action="添加素材">添加素材</button></div></div>
        ${renderMktTabs(types, state.materialType, "material-type", "boxed dense")}
        ${renderMktSearchRow(["请输入素材标题", "reset"])}
        <div class="mkt-section-card">
          <div class="mkt-section-head"><b>共 0 条素材</b><div><button class="button" data-demo-action="批量移动分组">批量移动分组</button><button class="button" data-demo-action="批量删除素材">批量删除</button></div></div>
          ${renderMktTable(["素材标题", "素材摘要", "类型", "更新时间", "操作"], [], true)}
        </div>
      </main>
    </div>
  </section>`;
}

function renderAntiSeal() {
  const rows = [["<span class=\"mkt-avatar tiny\">图</span> Canna", "<span class=\"tag green\">空闲中</span>", "-", "-", "-", "<span class=\"switch on\" data-switch></span>", "<button class=\"link-button\" data-demo-action=\"开始养号\">开始养号</button>"]];
  const metrics = [["在线中的账号数", 1], ["已掉线的账号数", 0], ["同步数据中的账号数", 0], ["被限制养号中的账号数", 0], ["手动养号中的账号数", 0], ["涨粉中的账号数", 0], ["空闲中的账号数", 0]];
  return `<section class="mkt-full-page">
    <div class="mkt-page-title with-tabs"><span>加好友设置</span>${renderMktTabs([["accounts", "加好友托管账号"], ["settings", "加好友设置"]], state.antiSealTab, "anti-seal-tab")}</div>
    <div class="mkt-section-title">▥ 执行加好友任务账号数据</div>
    <div class="mkt-stat-row compact">${metrics.map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`).join("")}</div>
    <div class="mkt-section-title">▣ 加好友账号列表</div>
    ${renderMktSearchRow(["select:请选择所属托管账号", "reset"])}
    ${renderMktTable(["加好友账号", "加好友状态", "养号剩余时长", "昨日加好友率", "当前执行的加好友任务", "执行API加好友任务 ⓘ", "操作"], rows)}
    <div class="mkt-pagination">共 1 条  ‹ <button class="button small active">1</button> › <button class="button small">10 条/页⌄</button></div>
  </section>`;
}

function renderMarketingRecords() {
  return `<section class="mkt-record-page">
    <div class="mkt-record-filters">
      ${renderMktSearchRow(["搜索聊天内容", "搜索好友或群", "select:搜索小组成员名称", "date:2026-06-13　至　2026-06-20", "select:聊天类型", "select:所属托管账号", "reset"], `<button class="button" data-demo-action="下载聊天记录">⇩</button><button class="button primary" data-demo-action="搜索聊天记录">搜 索</button>`)}
    </div>
    <div class="mkt-record-body">
      <aside class="mkt-record-list">
        <h3>全部聊天</h3>
        <div class="mkt-record-item active"><span class="mkt-photo"></span><div><b>Canna郑</b><p>您好，我可以为您解答物流相关的...</p></div><span>星期五<br>💬</span></div>
        <div class="mkt-record-item"><span class="mkt-photo grid"></span><div><b>欧诚国际物流&集简...</b><p>Canna郑：@郑楚佳 给我一个总价 我...</p></div><span>星期五</span></div>
      </aside>
      <main class="mkt-record-chat">
        <div class="mkt-record-chat-head"><span class="mkt-photo"></span><b>Canna郑</b><small>所属账号： Canna 💬</small></div>
        <div class="mkt-record-more">查看更多消息⌃</div>
        <div class="mkt-record-message left"><span class="mkt-photo"></span><div><b>Canna郑 <em>@微信</em></b><p>你好，你能物流报价吗</p><time>06/18 17:40</time></div></div>
        <div class="mkt-record-message right"><div><label>AI-API</label><p>您好，我可以为您解答物流相关的问题，不过暂时无法直接提供物流报价哦。您可以告知我发货地、收货地、货物类型（比如大件/小件、是否易碎品等）、重量体积以及运输时效要求这些信息，我可以帮您查询大致的物流计费规则或者帮您了解常见的物流报价影响因素。</p><time>06/18 17:40</time></div><span class="mkt-avatar tiny">图</span></div>
        <div class="mkt-record-message left"><span class="mkt-photo"></span><div><b>Canna郑 <em>@微信</em></b><p>你好，你能物流报价吗</p><time>06/19 22:45</time></div></div>
        <div class="mkt-record-message right"><div><label>AI-API</label><p>您好，我可以为您解答物流相关的计费规则、报价影响因素等问题，暂时无法直接提供精准的物流报价哦。如果您需要了解大致的报价参考，可以告诉我：发货地、收货地、货物的重量/体积、货物类型以及期望的运输方式，我可以帮您整理相关的报价参考信息。</p><time>06/19 22:46</time></div><span class="mkt-avatar tiny">图</span></div>
      </main>
    </div>
  </section>`;
}

function renderMarketingDocs() {
  return renderMarketingLayout("教学文档", [["intro", "功能介绍"], ["quick", "快速开始"], ["faq", "常见问题"]], "intro", "marketing-doc-sub", `<div class="mkt-page-title">教学文档</div><div class="mkt-doc-grid">${["AI微信营销功能介绍", "如何配置自动加好友", "如何创建群发任务", "如何管理素材库"].map((title) => `<div class="mini-card"><b>${title}</b><p class="subtle">查看配置说明与演示步骤。</p><button class="link-button" data-demo-action="打开${title}">查看文档</button></div>`).join("")}</div>`);
}

function renderAnalytics() {
  const data = analyticsData[state.analyticsTab];
  return `
    <section class="analytics-shell">
      <aside class="analytics-subnav">
        <div class="subnav-title">数据分析</div>
        ${analyticsTabs
          .map(([id, label]) => `<div class="subnav-item ${state.analyticsTab === id ? "active" : ""}" data-analytics-tab="${id}">${label}</div>`)
          .join("")}
      </aside>
      <main class="analytics-main">
        <div class="toolbar analytics-head">
          <h1 class="page-title">${data.title}</h1>
          <div style="display:flex; align-items:center; gap:10px">
            ${state.analyticsExported ? `<span class="tag green">已生成导出文件</span>` : ""}
            <button class="button" data-analytics-export>⇩ 导出</button>
          </div>
        </div>
        ${renderAnalyticsFilters(data)}
        ${renderAnalyticsMetrics(data)}
        ${renderAnalyticsChart(data)}
        ${renderAnalyticsDetails(data)}
      </main>
    </section>`;
}

function renderAnalyticsFilters(data) {
  return `<div class="analytics-filters">
    ${data.filters
      .map(
        (filter) => `<button class="select-like" data-analytics-filter="${filter}">
          <span>${filter}</span><span>⌄</span>
        </button>`
      )
      .join("")}
    <div class="range-tabs">
      ${[
        ["7", "近7天"],
        ["14", "近14天"],
        ["30", "近30天"],
      ]
        .map(([id, label]) => `<button class="${state.analyticsRange === id ? "active" : ""}" data-analytics-range="${id}">${label}</button>`)
        .join("")}
    </div>
    <button class="date-range">▣ 开始日期 <span>-</span> 结束日期</button>
  </div>`;
}

function renderAnalyticsMetrics(data) {
  return `<div class="analytics-metrics">
    ${data.metrics
      .map(
        ([label, value, unit]) => `<div class="metric-card">
          <div class="metric-label">${label} ⓘ</div>
          <div><span class="metric-number">${adjustAnalyticsValue(value)}</span><span class="metric-unit">${unit}</span></div>
        </div>`
      )
      .join("")}
  </div>`;
}

function renderAnalyticsChart(data) {
  const labels = getAnalyticsDates();
  const lines = [0, 0.2, 0.4, 0.6, 0.8, 1].reverse();
  return `<div class="analytics-chart-card">
    <div class="chart-title">${data.chartTitle}</div>
    <div class="chart-area" style="--ymax:${data.yMax}">
      <div class="y-axis">
        ${lines.map((n) => `<span>${formatAxisValue(n * data.yMax)}</span>`).join("")}
      </div>
      <div class="chart-grid">
        ${lines.map(() => `<div class="grid-line"></div>`).join("")}
        <div class="bar-stage">
          ${labels
            .map((label, index) => `<div class="bar-group" data-analytics-day="${label}">
              <div class="bars">
                ${data.values[index]
                  .map((value, seriesIndex) => `<span class="bar" style="height:${Math.max(3, (value / data.yMax) * 130)}px; background:${data.legend[seriesIndex][1]}"></span>`)
                  .join("")}
              </div>
              <span class="x-label">${label}</span>
            </div>`)
            .join("")}
        </div>
      </div>
    </div>
    <div class="chart-legend">
      ${data.legend.map(([label, color]) => `<span><i style="background:${color}"></i>${label}</span>`).join("")}
    </div>
  </div>`;
}

function renderAnalyticsDetails(data) {
  const rows = {
    ai_chat: [
      ["物流客服助手", "企业微信托管", "2", "6", "1", "2026-06-18"],
      ["演示AI助手", "网站页面", "0", "0", "0", "2026-06-17"],
    ],
    artificial_chat: [
      ["Kelvin", "企业微信托管", "1", "24", "未解决", "2026-06-18"],
      ["Canna", "网站页面", "0", "0", "已解决", "2026-06-17"],
    ],
    user_data: [
      ["欧诚国际物流&集简云对接群", "企业微信托管", "新用户", "有会话", "Kelvin", "2026-06-18"],
      ["演示联系人", "网站页面", "新用户", "有会话", "AI", "2026-06-18"],
    ],
    ai_flows: [
      ["企业微信消息自动回复", "企业微信托管", "0", "0", "0", "2026-06-18"],
      ["报价转人工流程", "聚合对话", "0", "0", "0", "2026-06-17"],
    ],
  }[state.analyticsTab];
  const headers = {
    ai_chat: ["对象", "渠道", "会话", "消息", "转人工", "日期"],
    artificial_chat: ["坐席", "渠道", "会话", "消息", "状态", "日期"],
    user_data: ["用户", "渠道", "类型", "会话状态", "跟进人", "日期"],
    ai_flows: ["流程", "触发来源", "执行", "成功", "失败", "日期"],
  }[state.analyticsTab];
  return `<div class="analytics-table table-card">
    <div class="table-caption">${data.title}明细</div>
    <table>
      <thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${row.map((cell, i) => `<td>${i === 4 && (cell === "未解决" || cell === "已解决") ? `<span class="tag ${cell === "已解决" ? "green" : "orange"}">${cell}</span>` : cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  </div>`;
}

function adjustAnalyticsValue(value) {
  const multiplier = state.analyticsRange === "30" ? 3 : state.analyticsRange === "14" ? 1.6 : 1;
  return Number.isInteger(value * multiplier) ? value * multiplier : Math.round(value * multiplier);
}

function getAnalyticsDates() {
  if (state.analyticsRange === "7") return ["2026-06-12", "2026-06-13", "2026-06-14", "2026-06-15", "2026-06-16", "2026-06-17", "2026-06-18", "2026-06-19"];
  if (state.analyticsRange === "14") return ["06-06", "06-08", "06-10", "06-12", "06-14", "06-16", "06-18", "06-19"];
  return ["05-21", "05-25", "05-29", "06-02", "06-06", "06-10", "06-14", "06-19"];
}

function formatAxisValue(value) {
  return Number.isInteger(value) ? value : value.toFixed(1);
}

function renderPlaceholder() {
  return `<section class="content"><h1 class="page-title">${menu.find((m) => m[0] === state.page)?.[2] || "页面"}</h1><div class="card empty">Demo 中该模块作为导航占位，核心流程请查看企业微信托管、AI智能体、AI流程和聚合对话。</div></section>`;
}

function renderModal() {
  if (!state.modal) return "";
  if (state.modal === "createAssistant") {
    return modal("创建助手", `
      <div class="form-row"><div class="label">助手名称 *</div><input class="input" style="width:100%" id="newAssistantName" placeholder="请输入" value="物流客服助手"></div>
      <div class="form-row"><div class="label">助手描述</div><textarea class="textarea" style="width:100%" placeholder="助手功能介绍">用于企业微信物流咨询、报价问答和转人工服务</textarea></div>
      <div class="form-row"><div class="label">助手图标</div>${iconBox("AI")}</div>
    `, "确认", () => {
      const name = document.getElementById("newAssistantName").value || "新建助手";
      state.modal = null;
      state.selectedAssistant = name;
      showToast("创建助手成功");
    });
  }
  if (state.modal === "importSkill") {
    return renderImportSkillModal();
  }
  if (state.modal === "customView") {
    return renderCustomViewModal();
  }
  if (state.modal === "quickGroup") {
    return renderQuickGroupModal();
  }
  if (state.modal === "quickReply") {
    return renderQuickReplyModal();
  }
  if (state.modal === "importKnowledge") {
    return modal("导入知识库", `
      <div class="grid-2">
        ${["物流问答", "报价规则", "售后 FAQ", "海关税率", "数据知识库", "测试文档"].map((x) => `<div class="mini-card">📒 ${x}<br><span class="subtle">自有知识库 · 文本</span></div>`).join("")}
      </div>
    `, "确定", () => {
      state.modal = null;
      showToast("知识库已导入");
    });
  }
  if (state.modal === "knowledgeWizard") {
    return modal("新增知识库", renderKnowledgeWizard(), state.knowledgeStep === 4 ? "完成" : "下一步", () => {
      if (state.knowledgeStep < 4) state.knowledgeStep += 1;
      else {
        state.knowledgeStep = 1;
        state.modal = null;
        showToast("知识库创建完成");
      }
    });
  }
  if (state.modal === "authAccount") {
    return modal("添加托管账号", renderAuthWizard(), state.authStep === 5 ? "完成" : "下一步", () => {
      if (state.authStep < 5) state.authStep += 1;
      else {
        state.authStep = 1;
        state.modal = null;
        showToast("托管账号添加成功");
      }
    });
  }
  if (state.modal === "groupMembers") {
    return modal("编辑组内成员", `
      <div class="member-modal-body">
        <div class="member-picker">
          <h3>非成员组成员</h3>
          <input class="input" style="width:100%" placeholder="请输入搜索内容" />
          <p class="subtle">指定成员加入小组；想要实现小组成员随部门自动变更，可创建动态成员组并绑定小组。</p>
          <div class="member-tree">
            <div class="tree-row">⌄ <input type="checkbox"> 📁 gs4758</div>
            <div class="tree-row child"><input type="checkbox" checked> <span class="member-dot">6</span> 6</div>
          </div>
        </div>
        <div class="member-picked">
          <h3>已选成员</h3>
          <p class="subtle">已选择1个成员 <button class="link-button">清除所选成员</button></p>
          <div class="selected-member"><span class="member-dot">我</span><b>我</b><button class="button ghost small">×</button></div>
        </div>
      </div>
    `, "确定", () => {
      state.modal = null;
      showToast("小组成员已更新");
    });
  }
  if (state.modal === "ruleConfig") {
    return modal("配置聚合规则", `
      <div class="form-row"><div class="label">规则名称</div><input class="input" style="width:100%" value="测试"></div>
      <div class="form-row"><div class="label">托管账号</div><select class="select" style="width:100%"><option>测试 / ID:8018</option><option>123 / ID:8019</option></select></div>
      <div class="form-row"><div class="label">消息接收</div><span class="switch on" data-switch></span></div>
      <div class="form-row"><div class="label">AI回复</div><span class="switch on" data-switch></span></div>
      <div class="form-row"><div class="label">绑定AI助手</div><select class="select" style="width:100%"><option>canna测试</option><option>物流客服助手</option></select></div>
      <div class="form-row"><div class="label">回复范围</div>
        <label><input type="radio" checked> 私聊与群聊都回复</label>
        <label style="margin-left:14px"><input type="radio"> 仅群聊回复</label>
      </div>
    `, "确定", () => {
      state.modal = null;
      showToast("聚合规则已保存");
    });
  }
  if (state.modal === "addSkillTool") {
    return modal("添加工具", `
      <div class="tool-select-grid">
        ${[
          ["企业微信(代运营)", "发送消息", "企"],
          ["企业微信(代运营)", "创建群聊", "群"],
          ["企业微信(代运营)", "自动加好友", "友"],
          ["Webhook", "调用第三方接口", "API"],
        ]
          .map(
            ([name, desc, ico], index) => `<label class="tool-select-card ${index === 0 ? "active" : ""}">
              <input type="radio" name="tool" ${index === 0 ? "checked" : ""}>
              <span class="skill-logo tiny">${ico}</span>
              <span><b>${name}</b><small>${desc}</small></span>
            </label>`
          )
          .join("")}
      </div>
    `, "确定", () => {
      state.modal = null;
      showToast("工具已添加");
    });
  }
  if (state.modal === "associateKnowledge") {
    return modal("关联知识库", `
      <div class="knowledge-pick-list">
        ${knowledgeBases
          .map(
            (kb) => `<label class="knowledge-pick-row">
              <input type="checkbox" checked>
              <span class="knowledge-card-icon small">${kb.icon}</span>
              <span><b>${kb.name}</b><small>${kb.count} · ${kb.type}</small></span>
            </label>`
          )
          .join("")}
      </div>
    `, "确定", () => {
      state.modal = null;
      showToast("知识库已关联");
    });
  }
  if (state.modal === "deleteSkill") {
    return modal("删除技能", `
      <div class="danger-modal-text">删除后，所有引用该技能的智能体配置将失效。当前为模拟数据，确认后会返回技能列表。</div>
    `, "确认删除", () => {
      state.modal = null;
      state.page = "ai";
      state.assistantSub = "skill";
      state.selectedSkillId = null;
      showToast("技能已删除");
    });
  }
  if (state.modal === "deleteKnowledge") {
    return modal("删除知识库", `
      <div class="danger-modal-text">删除知识库后，关联该知识库的智能体将无法继续检索其中内容。当前为模拟数据，不会真的删除文件。</div>
    `, "确认删除", () => {
      state.modal = null;
      showToast("知识库已删除");
    });
  }
  if (state.modal === "createCustomTool") {
    return modal("创建自定义工具", `
      <div class="form-row"><div class="label">工具名称 <span style="color:var(--red)">*</span></div><input class="input" style="width:100%" placeholder="请输入工具名称" value="内部订单查询"></div>
      <div class="form-row"><div class="label">工具描述</div><textarea class="textarea" style="width:100%" placeholder="描述工具用途">根据订单号查询物流轨迹、费用和签收状态。</textarea></div>
      <div class="grid-2">
        <div class="form-row"><div class="label">授权方式</div><select class="select" style="width:100%"><option>无需授权</option><option>API Key</option><option>OAuth2</option></select></div>
        <div class="form-row"><div class="label">请求方式</div><select class="select" style="width:100%"><option>GET</option><option>POST</option><option>PUT</option></select></div>
      </div>
      <div class="form-row"><div class="label">API 地址</div><input class="input" style="width:100%" value="https://api.example.com/orders/{order_no}"></div>
    `, "创建", () => {
      state.modal = null;
      showToast("自定义工具已创建");
    });
  }
  if (state.modal === "assistantToolPicker") {
    window.__modalOk = () => {
      state.modal = null;
      showToast("工具已添加到智能体");
    };
    return `<div class="modal-backdrop"><div class="modal assistant-tool-modal">
      <div class="modal-head">添加工具<button class="button ghost" data-close-modal>×</button></div>
      <div class="assistant-tool-body">
        <aside class="tool-picker-left">
          <div class="tool-picker-tabs">
            ${[
              ["app", "应用"],
              ["assistant", "助手"],
            ]
              .map(([id, label]) => `<button class="${state.detailToolPickerTab === id ? "active" : ""}" data-tool-picker-tab="${id}">${label}</button>`)
              .join("")}
          </div>
          ${state.detailToolPickerTab === "app" ? renderToolPickerAppList() : renderToolPickerAssistantInfo()}
        </aside>
        <main class="tool-picker-main">
          ${state.detailToolPickerTab === "app" ? renderToolPickerAppMain() : renderToolPickerAssistantMain()}
        </main>
      </div>
      <div class="modal-foot"><button class="button" data-close-modal>取消</button><button class="button primary" data-modal-ok>确认</button></div>
    </div></div>`;
  }
  if (state.modal === "createFlow") {
    return modal("创建流程", `
      <div class="flow-create-form">
        <div class="form-row"><div class="label">流程名称 <span style="color:var(--red)">*</span></div><input class="input" style="width:100%" id="flowName" placeholder="请输入"></div>
        <div class="form-row"><div class="label">选择助手 <span style="color:var(--red)">*</span></div><select class="select" style="width:100%"><option>请选择助手</option><option>canna测试</option><option>演示AI助手</option></select></div>
        <div class="form-row"><div class="label">流程描述</div><textarea class="textarea" style="width:100%; min-height:96px" placeholder="请描述当前应用触发流程的使用场景。"></textarea></div>
      </div>
    `, "下一步", () => {
      state.modal = null;
      state.flowEditing = true;
      state.flowSub = "mine";
      showToast("已进入流程设置");
    });
  }
  if (state.modal === "addFlowTrigger") {
    window.__modalOk = () => {
      state.modal = null;
      showToast("触发事件已添加");
    };
    return renderFlowPickerModal("添加触发事件", flowTriggerGroups, state.flowTriggerCategory, "flow-trigger", "flowTriggerCategory");
  }
  if (state.modal === "addFlowAction") {
    window.__modalOk = () => {
      state.modal = null;
      showToast("执行动作已添加");
    };
    return renderFlowPickerModal("添加执行动作", flowActionGroups, state.flowActionCategory, "flow-action", "flowActionCategory");
  }
  if (state.modal === "alertBot") {
    return modal("添加报警机器人", `
      <div class="form-row"><div class="label">机器人名称</div><input class="input" style="width:100%" placeholder="请输入机器人名称"></div>
      <div class="form-row"><div class="label">Webhook地址</div><textarea class="textarea" style="width:100%" placeholder="请输入机器人 Webhook 地址"></textarea></div>
      <div class="form-row"><div class="label">报警推送设置</div>
        ${["托管账号掉线", "群发任务异常", "高阶任务异常", "每日数据提醒", "账号风控提醒"].map((x) => `<label style="display:block; margin:8px 0"><input type="checkbox" checked> ${x}</label>`).join("")}
      </div>
    `, "确定", () => {
      state.modal = null;
      showToast("报警机器人已添加");
    });
  }
}

function renderImportSkillModal() {
  const selected = new Set(state.importSkillSelected);
  const importable = skills
    .filter((skill) => skill.source === "mine")
    .slice(0, 6)
    .map((skill, index) => ({
      ...skill,
      importIcon: index < 3 ? "企" : "AI",
      iconClass: index < 3 ? "orange" : "brand",
    }));
  window.__modalOk = () => {
    if (!state.importSkillSelected.length) return;
    const count = state.importSkillSelected.length;
    state.modal = null;
    state.importSkillSelected = [];
    showToast(`已导入 ${count} 个技能`);
  };
  return `<div class="modal-backdrop skill-import-backdrop">
    <div class="modal skill-import-modal">
      <div class="modal-head skill-import-head">
        <div>
          <div>导入技能</div>
          <small>从我的技能中选择要导入到此助手的技能</small>
        </div>
        <button class="button ghost skill-import-close" data-close-modal>×</button>
      </div>
      <div class="skill-import-search">
        <input class="input" placeholder="搜索技能名称或描述...">
      </div>
      <div class="skill-import-list">
        ${importable
          .map(
            (skill) => `<label class="skill-import-row ${selected.has(skill.id) ? "selected" : ""}">
              <input type="checkbox" data-import-skill-select="${skill.id}" ${selected.has(skill.id) ? "checked" : ""}>
              <div class="skill-import-copy">
                <div><b>${skill.name}</b><span class="tag blue">通用</span></div>
                <p>${skill.desc}</p>
              </div>
              <span class="skill-import-app ${skill.iconClass}">${skill.importIcon}</span>
            </label>`
          )
          .join("")}
      </div>
      <div class="skill-import-foot">
        <span>${state.importSkillSelected.length ? `已选择 ${state.importSkillSelected.length} 个技能` : "请勾选要导入的技能"}</span>
        <div>
          <button class="button" data-close-modal>取消</button>
          <button class="button primary ${state.importSkillSelected.length ? "" : "disabled"}" data-modal-ok ${state.importSkillSelected.length ? "" : "disabled"}>导入选中技能</button>
        </div>
      </div>
    </div>
  </div>`;
}

function renderQuickReplyModal() {
  window.__modalOk = () => {
    const content = document.getElementById("quickReplyContent")?.textContent.trim();
    const groupId = document.getElementById("quickReplyGroup")?.value || "";
    if (!groupId || !content) return showToast("请选择分组并填写回复内容");
    const title = content.length > 24 ? `${content.slice(0, 24)}…` : content;
    quickMessageData.replies.push({ id: `reply-${Date.now()}`, title, content, groupId });
    saveQuickMessageData();
    state.modal = null;
    showToast("快捷回复创建成功");
  };
  return `<div class="modal-backdrop quick-reply-backdrop"><div class="modal quick-reply-modal">
    <div class="quick-reply-head">新增快捷回复<button type="button" data-close-modal aria-label="关闭">×</button></div>
    <div class="quick-reply-body">
      <label class="quick-reply-label" for="quickReplyGroup">选择分组 <span>*</span></label>
      <select id="quickReplyGroup" class="quick-reply-group" data-quick-reply-required>
        <option value=""></option>
        ${quickMessageData.groups.map((group) => `<option value="${group.id}">${escapeHtml(group.name)}</option>`).join("")}
      </select>
      <div class="quick-reply-editor">
        <div class="quick-reply-editor-tools" aria-label="文本格式工具栏">
          <button type="button" data-quick-format="formatBlock" data-format-value="h3">H</button>
          <button type="button" data-quick-format="bold"><b>B</b></button>
          <button type="button" data-quick-format="italic"><i>I</i></button>
          <button type="button" data-quick-format="strikeThrough">S̶</button><i></i>
          <button type="button" data-quick-format="insertUnorderedList">☷</button>
          <button type="button" data-quick-format="insertOrderedList">1₂</button><i></i>
          <button type="button" data-quick-format="outdent">≡</button>
          <button type="button" data-quick-format="indent">≡</button><i></i>
          <button type="button" title="插入链接">↗</button><button type="button" title="插入图片">▣</button><button type="button" title="插入表格">▦⌄</button><button type="button" title="插入内容">▧⌄</button><i></i>
          <button type="button" class="muted" data-quick-format="undo">↶</button><button type="button" class="muted" data-quick-format="redo">↷</button>
        </div>
        <div id="quickReplyContent" class="quick-reply-editor-content" contenteditable="true" data-quick-reply-required></div>
      </div>
    </div>
    <div class="quick-reply-foot"><button class="button" type="button" data-close-modal>取消</button><button class="button primary" type="button" data-modal-ok disabled>保存</button></div>
  </div></div>`;
}

function renderQuickGroupModal() {
  window.__modalOk = () => {
    const name = document.getElementById("quickGroupName")?.value.trim();
    if (!name) return showToast("请输入分组名称");
    if (quickMessageData.groups.some((group) => group.name === name)) return showToast("该分组已存在");
    quickMessageData.groups.push({ id: `group-${Date.now()}`, name });
    saveQuickMessageData();
    state.modal = null;
    showToast("分组创建成功");
  };
  return `<div class="modal-backdrop quick-group-backdrop">
    <div class="modal quick-group-modal" role="dialog" aria-modal="true" aria-labelledby="quickGroupTitle">
      <div class="quick-group-modal-head">
        <span id="quickGroupTitle">新增分组</span>
        <button type="button" data-close-modal aria-label="关闭">×</button>
      </div>
      <div class="quick-group-modal-body">
        <label for="quickGroupName">分组名称 <span>*</span></label>
        <input id="quickGroupName" maxlength="30" placeholder="请输入分组名称" autocomplete="off" autofocus>
      </div>
      <div class="quick-group-modal-foot">
        <button class="button" type="button" data-close-modal>取消</button>
        <button class="button primary" type="button" data-modal-ok>保存</button>
      </div>
    </div>
  </div>`;
}

function modal(title, body, okText, onOk) {
  window.__modalOk = onOk;
  return `<div class="modal-backdrop"><div class="modal"><div class="modal-head">${title}<button class="button ghost" data-close-modal>×</button></div><div class="modal-body">${body}</div><div class="modal-foot"><button class="button" data-close-modal>取消</button><button class="button primary" data-modal-ok>${okText}</button></div></div></div>`;
}

function renderCustomViewModal() {
  const step = state.customViewStep;
  const escapedViewName = state.customViewName
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
  const stepLabel = (n, text) => {
    const className = [step === n ? "active" : "", n > step ? "locked" : ""].filter(Boolean).join(" ");
    const navigation = n < step ? ` data-custom-view-step="${n}"` : "";
    return `<span class="${className}"${navigation}>${n}.${text}</span>`;
  };
  const body = {
    1: `
      <div class="form-row">
        <div class="label">视图名称</div>
        <div class="view-name-wrap">
          <input class="input" maxlength="100" data-custom-view-name value="${escapedViewName}">
          <span data-custom-view-name-count>${state.customViewName.length} / 100</span>
        </div>
      </div>
    `,
    2: `
      <div class="label">权限范围</div>
      <div class="radio-row">
        <label data-custom-view-access="all"><span class="radio ${state.customViewAccess === "all" ? "on" : ""}"></span>全员可访问</label>
        <label data-custom-view-access="custom"><span class="radio ${state.customViewAccess === "custom" ? "on" : ""}"></span>自定义访问权限</label>
      </div>
      ${state.customViewAccess === "custom" ? `
        <div class="permission-picker">
          <div>
            <div class="search-box">⌕ 搜索</div>
            <label class="member-option"><input type="checkbox"> <span class="avatar">Kelvin</span> Kelvin</label>
          </div>
          <div><b>已选：0 人</b></div>
        </div>
      ` : ""}
    `,
    3: `
      <div class="manual-view-note">
        <b>手动分组视图</b>
        <span>该视图不会根据筛选条件自动加入对话。创建后，可在对话页面右上角的分组入口，将当前对话手动添加到这个视图中。</span>
      </div>
    `,
  }[step];
  return `<div class="modal-backdrop"><div class="modal custom-view-modal">
    <div class="modal-head">新建视图<button class="button ghost" data-close-modal>×</button></div>
    <div class="view-steps">
      ${stepLabel(1, "基本信息")}<b>›</b>${stepLabel(2, "访问权限")}<b>›</b>${stepLabel(3, "筛选条件")}
    </div>
    <div class="modal-body custom-view-body">${body}<a class="learn-link">了解更多</a></div>
    <div class="modal-foot">
      ${step > 1 ? `<button class="button" data-custom-view-prev>上一步</button>` : `<button class="button" data-close-modal>取消</button>`}
      <button class="button primary${step === 1 && !state.customViewName.trim() ? " disabled" : ""}" data-custom-view-next ${step === 1 && !state.customViewName.trim() ? "disabled" : ""}>${step === 3 ? "确认" : "下一步"}</button>
    </div>
  </div></div>`;
}

function renderFlowPickerModal(title, groups, active, dataName, stateKey) {
  const current = groups[active] || Object.values(groups)[0];
  const groupEntries = Object.entries(groups);
  return `<div class="modal-backdrop"><div class="modal flow-picker-modal">
    <div class="modal-head">${title}<button class="button ghost" data-close-modal>×</button></div>
    <div class="flow-picker-body">
      <aside class="flow-picker-left">
        <input class="input" placeholder="搜索">
        ${groupEntries
          .map(
            ([id, group]) => `<div class="flow-picker-section">
              <h4>${group.title}</h4>
              ${group.items
                .map(
                  ([itemId, label, ico]) => `<button class="${active === id ? "active" : ""}" data-flow-picker-tab="${id}" data-flow-picker-key="${stateKey}">
                    <span class="flow-app-icon small ${ico === "◷" ? "orange" : ico === "红" ? "red" : "blue"}">${ico}</span>${label}
                  </button>`
                )
                .join("")}
            </div>`
          )
          .join("")}
      </aside>
      <main class="flow-picker-main">
        ${current.cards
          .map(
            ([name, desc, ico]) => `<button class="flow-picker-card" data-${dataName}-option="${name}">
              <span class="flow-app-icon small ${ico === "◷" ? "orange" : ico === "红" ? "red" : "blue"}">${ico}</span>
              <span><b>${name}</b><small>${desc}</small></span>
            </button>`
          )
          .join("")}
        ${active === "timer" || active === "app" ? `<div class="flow-picker-provider">⌁ 本功能由“集简云嵌入方案”提供</div>` : ""}
      </main>
    </div>
    <div class="modal-foot"><button class="button" data-close-modal>取消</button><button class="button primary" data-modal-ok>确认</button></div>
  </div></div>`;
}

function renderToolPickerAppList() {
  const apps = ["AI搜索引擎", "集简云数据表", "语聚AI", "微软Bing搜索(内置)", "集简云OCR", "文档文字提取", "Webhook", "飞书即时消息"];
  return `<input class="input tool-picker-search" placeholder="搜索">
    <div class="tool-picker-group-title">精选应用 <span>⌃</span></div>
    <div class="tool-picker-list">
      ${apps
        .map((name, index) => `<button class="${index === 0 ? "active" : ""}" data-tool-picker-app="${name}">
          <span class="tool-mini-icon">${index === 0 ? "搜" : index === 1 ? "表" : index === 2 ? "AI" : index === 6 ? "WH" : "文"}</span>${name}
        </button>`)
        .join("")}
    </div>`;
}

function renderToolPickerAssistantInfo() {
  return `<div class="assistant-tool-info">
    <div class="assistant-tool-illus">
      <span class="assistant-icon">AI</span>
      <i></i><i></i><i></i>
    </div>
    <h3>将语聚GPTs作为工具</h3>
    <p>支持使用其它语聚GPTs作为工具使用，设置工具描述后AI模型将根据对话内容自主选择和使用此工具 <button class="link-button">了解更多</button></p>
  </div>`;
}

function renderToolPickerAppMain() {
  return `<div class="tool-picker-result-card">
    <span class="tool-mini-icon large">搜</span>
    <div>
      <b>AI搜索</b>
      <p>输入内容进行AI搜索</p>
    </div>
  </div>
  <div class="tool-provider-note">本功能由“集简云嵌入方案”提供</div>`;
}

function renderToolPickerAssistantMain() {
  return `<div class="tool-picker-result-card assistant-choice">
    ${iconBox("AI")}
    <b>canna测试</b>
  </div>`;
}

function renderKnowledgeWizard() {
  const step = state.knowledgeStep;
  const names = ["知识库类型", "添加数据", "数据处理", "完成"];
  return `<div class="stepper">${names.map((n, i) => `<div class="step ${step === i + 1 ? "active" : step > i + 1 ? "done" : ""}">${i + 1}. ${n}</div>`).join("")}</div>
  ${step === 1 ? `<div class="grid-2">${["文本", "整个网站", "文档文件", "自定义知识库"].map((x, i) => `<div class="mini-card" style="${i === 2 ? "border-color:var(--blue)" : ""}"><b>${x}</b><br><span class="subtle">用于问答检索与智能回复</span></div>`).join("")}</div>` : ""}
  ${step === 2 ? `<div class="empty" style="border:1px dashed var(--line-dark); border-radius:8px">＋ 将文件拖拽至此区域或选择文件上传<br><span class="subtle">支持 xlsx、docx、pdf、txt、csv 等文件</span></div>` : ""}
  ${step === 3 ? `<div class="mini-card"><div class="mini-card-head">数据处理中 <span class="tag blue">86%</span></div><div class="subtle">正在切分文档、生成索引、抽取问答对。</div></div>` : ""}
  ${step === 4 ? `<div class="empty">✅ 知识库已创建完成，可绑定给 Jerry AI 助手使用。</div>` : ""}`;
}

function renderAuthWizard() {
  const step = state.authStep;
  const names = ["选择授权方式", "扫码登录", "初始化实例", "连接检测", "托管成功"];
  return `<div class="stepper">${names.map((n, i) => `<div class="step ${step === i + 1 ? "active" : step > i + 1 ? "done" : ""}">${i + 1}. ${n}</div>`).join("")}</div>
  ${step === 1 ? `<div class="grid-2"><div class="mini-card" style="border-color:var(--blue)"><b>扫码登录</b><br><span class="subtle">企业微信扫码授权远程托管</span></div><div class="mini-card"><b>账号授权</b><br><span class="subtle">仅 Demo 展示，不提交真实账号</span></div></div>` : ""}
  ${step === 2 ? `<div style="text-align:center"><div class="qr"></div><div class="subtle">请使用企业微信扫码授权</div></div>` : ""}
  ${step === 3 ? `<div class="mini-card"><div class="mini-card-head">正在启动远程实例 <span class="tag blue">执行中</span></div><div class="subtle">创建浏览器容器、初始化企业微信客户端、加载机器人控制服务。</div></div>` : ""}
  ${step === 4 ? `<div class="mini-card"><div class="mini-card-head">连接检测 <span class="tag green">通过</span></div><div class="subtle">WebSocket 已连接，消息队列正常，机器人心跳正常。</div></div>` : ""}
  ${step === 5 ? `<div class="empty">✅ 企业微信账号已托管成功，消息接收与 AI 回复已开启。</div>` : ""}`;
}

function renderDrawer() {
  if (!state.drawer) return "";
  if (state.drawer === "flowTemplateDetail") {
    const item = flowTemplates.find((template) => template.id === state.selectedFlowTemplateId) || flowTemplates[0];
    return `<div class="drawer-backdrop flow-drawer-backdrop">
      <aside class="flow-template-drawer">
        <div class="flow-drawer-head">${item.title}<button class="button ghost" data-close-drawer>×</button></div>
        <div class="flow-drawer-body">
          <section class="flow-drawer-section">
            <h3>流程指导说明 <span>*</span></h3>
            <p>指导AI如何执行此流程。示例：当抖音私信收到消息时，回复用户的问题，并使用抖音:发送私信给用户，将回复内容发给用户</p>
            <div class="flow-drawer-editor">${item.guide}<button class="link-button">展开</button></div>
          </section>
          <section class="flow-drawer-section">
            <h3>选择模型</h3>
            <p>请选择流程执行时所依赖的模型类型</p>
          </section>
          <section class="flow-drawer-section">
            <h3>触发事件 <span>*</span></h3>
            <div class="flow-drawer-card"><span class="flow-app-icon small ${item.iconClass}">${item.icon}</span><b>${item.trigger}</b></div>
          </section>
          <section class="flow-drawer-section">
            <h3>执行动作 <span>*</span></h3>
            <div class="flow-drawer-card"><span class="flow-app-icon small ${item.iconClass}">${item.icon}</span><b>${item.action}</b></div>
          </section>
        </div>
        <div class="flow-drawer-foot"><button class="button" data-close-drawer>关闭</button><button class="button primary" data-flow-template-add>添加到助手</button></div>
      </aside>
    </div>`;
  }
  if (state.drawer === "flowDrawer") {
    return drawer("节点配置", `
      <div class="form-row"><div class="label">字段匹配</div><div class="mini-card">消息内容：1.文本内容 “你好”</div><div class="mini-card">外部用户ID：外部用户ID变量</div><div class="mini-card">客服账号ID：开放平台客服ID变量</div></div>
      <div class="form-row"><button class="button primary">智能匹配</button> <button class="button">插入变量</button></div>
      <div class="form-row"><div class="label">测试结果</div><div class="mini-card"><span class="tag green">成功</span> 获取样本数据成功，AI 回复生成成功，企业微信消息发送成功。</div></div>
    `);
  }
  if (state.drawer === "intentDrawer") {
    return drawer("新增意图", `
      <div class="form-row"><div class="label">意图名称</div><input class="input" style="width:100%" value="转人工"></div>
      <div class="form-row"><div class="label">用户可触发句子</div><textarea class="textarea" style="width:100%">找人工\n你们产品怎么收费\n我要合同\n帮我转客服</textarea></div>
      <div class="form-row"><div class="label">处理方式</div><select class="select" style="width:100%"><option>跳转到人工服务</option></select></div>
      <div class="form-row"><div class="label">人工服务维持提示语</div><div class="editor-toolbar">B I S 🔗 ≡</div><div class="rich-editor" style="height:90px">已为您转接人工客服，请稍等。</div></div>
    `);
  }
  if (state.drawer === "intentBuilder") {
    return drawer("添加", `
      <div class="form-row"><div class="label">意图名称<span style="color:var(--red)">*</span></div><input class="input" style="width:100%" placeholder="请输入"></div>
      <div class="form-row"><div class="label">意图匹配方式<span style="color:var(--red)">*</span></div><select class="select" style="width:100%"><option>AI自动匹配</option><option>关键词匹配</option></select></div>
      <div class="form-row"><div class="label">用户可能提问句子<span style="color:var(--red)">*</span></div><textarea class="textarea" style="width:100%; min-height:92px" placeholder="填写用户可能提问的句子，比如：产品如何购买，是否可以介绍一个商务等，每行一个"></textarea></div>
      <div class="label">意图匹配后的处理方式<span style="color:var(--red)">*</span></div>
      <div class="intent-action-card">
        <div class="intent-action-head">A: 回复文本内容 <span>⌃</span></div>
        <div class="form-row"><div class="label">名称<span style="color:var(--red)">*</span></div><input class="input" style="width:100%" value="回复文本内容"></div>
        <div class="form-row"><div class="label">处理方式<span style="color:var(--red)">*</span></div><select class="select" style="width:100%"><option>A: 回复文本内容</option><option>转入人工</option><option>调用技能</option></select></div>
        <div class="skill-editor">
          <div class="editor-toolbar skill-editor-toolbar"><b>B</b><b>H</b><span>▣</span><span>☷</span><span>☰</span><button class="link-button">〔x〕 插入变量</button></div>
          <div class="rich-editor skill-rich-editor" contenteditable="true"></div>
        </div>
      </div>
      <button class="link-button add-action-link">＋ 新增处理方式</button>
      <div class="label" style="margin-top:18px">意图未匹配后的处理方式</div>
      <button class="link-button add-action-link">＋ 新增处理方式</button>
    `);
  }
}

function drawer(title, body) {
  return `<div class="drawer-backdrop"><div class="drawer"><div class="modal-head">${title}<button class="button ghost" data-close-drawer>×</button></div><div class="modal-body">${body}</div><div class="modal-foot"><button class="button" data-close-drawer>返回</button><button class="button primary" data-close-drawer>确定</button></div></div></div>`;
}

function bindEvents() {
  const marketingToggle = document.querySelector("[data-marketing-toggle]");
  if (marketingToggle) {
    marketingToggle.addEventListener("click", () => {
      setState({ page: "marketing", selectedAssistant: null, marketingNavOpen: state.page === "marketing" ? !state.marketingNavOpen : true });
    });
  }
  const sidebarCollapse = document.querySelector("[data-sidebar-collapse]");
  if (sidebarCollapse) sidebarCollapse.addEventListener("click", () => setState({ sidebarCollapsed: !state.sidebarCollapsed }));
  document.querySelectorAll("[data-marketing-sub]").forEach((el) =>
    el.addEventListener("click", () => setState({ page: "marketing", selectedAssistant: null, marketingNavOpen: true, marketingSub: el.dataset.marketingSub }))
  );
  document.querySelectorAll("[data-workbench-filter]").forEach((el) =>
    el.addEventListener("click", () => showToast(`${el.textContent.trim()}视图已切换`))
  );
  document.querySelectorAll("[data-marketing-tag-sub]").forEach((el) =>
    el.addEventListener("click", () => {
      const next = el.dataset.marketingTagSub;
      setState({ marketingSub: "tags", marketingTagSub: next, marketingTagTab: next === "wechat" ? "enterprise" : "customer", keywordTagTab: "rules" });
    })
  );
  document.querySelectorAll("[data-marketing-tag-tab]").forEach((el) =>
    el.addEventListener("click", () => setState({ marketingTagTab: el.dataset.marketingTagTab }))
  );
  document.querySelectorAll("[data-keyword-tag-tab]").forEach((el) =>
    el.addEventListener("click", () => setState({ keywordTagTab: el.dataset.keywordTagTab }))
  );
  document.querySelectorAll("[data-message-blast-sub]").forEach((el) =>
    el.addEventListener("click", () => setState({ marketingSub: "blast", messageBlastSub: el.dataset.messageBlastSub, messageBlastTab: "tasks" }))
  );
  document.querySelectorAll("[data-message-blast-tab]").forEach((el) =>
    el.addEventListener("click", () => setState({ messageBlastTab: el.dataset.messageBlastTab }))
  );
  document.querySelectorAll("[data-auto-friend-sub]").forEach((el) =>
    el.addEventListener("click", () => setState({ marketingSub: "friend", autoFriendSub: el.dataset.autoFriendSub }))
  );
  document.querySelectorAll("[data-operation-sub]").forEach((el) =>
    el.addEventListener("click", () => setState({ marketingSub: "operation", operationSub: el.dataset.operationSub, operationTab: "content" }))
  );
  document.querySelectorAll("[data-operation-top-tab]").forEach((el) =>
    el.addEventListener("click", () => setState({ operationTab: el.dataset.operationTopTab }))
  );
  document.querySelectorAll("[data-operation-tab]").forEach((el) =>
    el.addEventListener("click", () => setState({ operationTab: el.dataset.operationTab }))
  );
  document.querySelectorAll("[data-group-manage-sub]").forEach((el) =>
    el.addEventListener("click", () => setState({ marketingSub: "groups", groupManageSub: el.dataset.groupManageSub, groupManageTab: "welcome" }))
  );
  document.querySelectorAll("[data-group-manage-tab]").forEach((el) =>
    el.addEventListener("click", () => setState({ groupManageTab: el.dataset.groupManageTab }))
  );
  document.querySelectorAll("[data-material-scope]").forEach((el) =>
    el.addEventListener("click", () => setState({ materialScope: el.dataset.materialScope }))
  );
  document.querySelectorAll("[data-material-type]").forEach((el) =>
    el.addEventListener("click", () => setState({ materialType: el.dataset.materialType }))
  );
  document.querySelectorAll("[data-anti-seal-tab]").forEach((el) =>
    el.addEventListener("click", () => setState({ antiSealTab: el.dataset.antiSealTab }))
  );
  document.querySelectorAll("[data-demo-action]").forEach((el) =>
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      showToast(`${el.dataset.demoAction}（Demo）`);
    })
  );
  document.querySelectorAll("[data-page]").forEach((el) =>
    el.addEventListener("click", () => {
      const page = el.dataset.page;
      if (!page) return;
      if (page === "knowledgeCreate") {
        setState({ page, selectedAssistant: null, assistantSub: "knowledge", knowledgeCreateStep: 1, knowledgeCreateType: "", knowledgeSegmentMode: "auto", knowledgePreview: false });
        return;
      }
      if (page === "wechat" && state.page !== "wechat") {
        setState({ page, selectedAssistant: null, wechatTab: "accounts" });
        return;
      }
      if (page === "flow" && state.page !== "flow") {
        setState({ page, selectedAssistant: null, flowEditing: false });
        return;
      }
      setState({ page, selectedAssistant: null });
    })
  );
  document.querySelectorAll("[data-assistant-sub]").forEach((el) =>
    el.addEventListener("click", () => setState({ page: "ai", selectedAssistant: null, assistantSub: el.dataset.assistantSub }))
  );
  document.querySelectorAll("[data-open-assistant]").forEach((el) => el.addEventListener("click", () => setState({ selectedAssistant: el.dataset.openAssistant, detailTab: "setting" })));
  document.querySelectorAll("[data-detail-tab]").forEach((el) => el.addEventListener("click", () => setState({ detailTab: el.dataset.detailTab })));
  const modelToggle = document.querySelector("[data-toggle-model-panel]");
  if (modelToggle) modelToggle.addEventListener("click", () => setState({ detailModelOpen: !state.detailModelOpen }));
  document.querySelectorAll("[data-detail-model]").forEach((el) =>
    el.addEventListener("click", () => {
      state.detailModelOpen = false;
      showToast(`已选择模型：${el.dataset.detailModel}`);
      render();
    })
  );
  document.querySelectorAll("[data-detail-action]").forEach((el) =>
    el.addEventListener("click", () => showToast(`${el.dataset.detailAction}已触发`))
  );
  document.querySelectorAll("[data-tool-picker-tab]").forEach((el) =>
    el.addEventListener("click", () => setState({ detailToolPickerTab: el.dataset.toolPickerTab }))
  );
  document.querySelectorAll("[data-tool-picker-app]").forEach((el) =>
    el.addEventListener("click", () => showToast(`已选择应用：${el.dataset.toolPickerApp}`))
  );
  document.querySelectorAll("[data-wechat-tab]").forEach((el) => el.addEventListener("click", () => setState({ wechatTab: el.dataset.wechatTab })));
  document.querySelectorAll("[data-chat-filter]").forEach((el) =>
    el.addEventListener("click", () => setState({ chatFilter: el.dataset.chatFilter, selectedConversation: null, chatSettingsOpen: false, chatSortOpen: false, chatSearchModeOpen: false, chatSearchQuery: "" }))
  );
  document.querySelectorAll("[data-chat-settings]").forEach((el) =>
    el.addEventListener("click", () => setState({ chatSettingsOpen: !state.chatSettingsOpen, chatSearchOpen: false, chatSortOpen: false }))
  );
  document.querySelector("[data-chat-sidebar-toggle]")?.addEventListener("click", () =>
    setState({ chatSidebarCollapsed: !state.chatSidebarCollapsed, chatSortOpen: false, chatSearchModeOpen: false })
  );
  document.querySelectorAll("[data-chat-settings-tab]").forEach((el) =>
    el.addEventListener("click", () => setState({ chatSettingsTab: el.dataset.chatSettingsTab }))
  );
  document.querySelector("[data-work-hours-switch]")?.addEventListener("click", () =>
    setState({ workHoursEnabled: !state.workHoursEnabled })
  );
  document.querySelector("[data-add-work-time]")?.addEventListener("click", () =>
    setState({ workTimeRangeCount: state.workTimeRangeCount + 1 })
  );
  document.querySelectorAll("[data-remove-work-time]").forEach((el) =>
    el.addEventListener("click", () => setState({ workTimeRangeCount: Math.max(1, state.workTimeRangeCount - 1) }))
  );
  document.querySelector("[data-add-work-schedule]")?.addEventListener("click", () =>
    setState({ workScheduleCount: state.workScheduleCount + 1 })
  );
  document.querySelectorAll("[data-remove-work-schedule]").forEach((el) =>
    el.addEventListener("click", () => setState({ workScheduleCount: Math.max(1, state.workScheduleCount - 1) }))
  );
  document.querySelector("[data-chat-settings-back]")?.addEventListener("click", () =>
    setState({ chatSettingsOpen: false })
  );
  const quickMessageSearch = document.querySelector("[data-quick-message-search]");
  if (quickMessageSearch) quickMessageSearch.addEventListener("input", () => {
    const query = quickMessageSearch.value;
    setState({ quickMessageSearch: query });
    const nextInput = document.querySelector("[data-quick-message-search]");
    nextInput?.focus();
    nextInput?.setSelectionRange(query.length, query.length);
  });
  document.querySelectorAll("[data-quick-reply-delete]").forEach((el) => el.addEventListener("click", () => {
    const index = quickMessageData.replies.findIndex((reply) => reply.id === el.dataset.quickReplyDelete);
    if (index >= 0) quickMessageData.replies.splice(index, 1);
    saveQuickMessageData();
    setState({});
    showToast("快捷回复已删除");
  }));
  const chatSortToggle = document.querySelector("[data-chat-sort-toggle]");
  if (chatSortToggle) chatSortToggle.addEventListener("click", () => setState({ chatSortOpen: !state.chatSortOpen }));
  document.querySelectorAll("[data-chat-sort]").forEach((el) =>
    el.addEventListener("click", () => setState({ chatSort: el.dataset.chatSort, chatSortOpen: false }))
  );
  const chatSearchToggle = document.querySelector("[data-chat-search-toggle]");
  if (chatSearchToggle) chatSearchToggle.addEventListener("click", () => {
    setState({ chatSearchOpen: !state.chatSearchOpen, chatSearchModeOpen: false, chatSortOpen: false, chatSearchQuery: state.chatSearchOpen ? "" : state.chatSearchQuery });
    document.querySelector("[data-chat-search-input]")?.focus();
  });
  const chatSearchModeToggle = document.querySelector("[data-chat-search-mode-toggle]");
  if (chatSearchModeToggle) chatSearchModeToggle.addEventListener("click", () => setState({ chatSearchModeOpen: !state.chatSearchModeOpen }));
  document.querySelectorAll("[data-chat-search-mode]").forEach((el) =>
    el.addEventListener("click", () => {
      setState({ chatSearchMode: el.dataset.chatSearchMode, chatSearchModeOpen: false });
      document.querySelector("[data-chat-search-input]")?.focus();
    })
  );
  const chatSearchInput = document.querySelector("[data-chat-search-input]");
  if (chatSearchInput) chatSearchInput.addEventListener("input", () => {
    state.chatSearchQuery = chatSearchInput.value;
    const conversations = sortConversations(conversationMap[state.chatFilter] || []).filter(matchesConversationSearch);
    const listHead = document.querySelector(".conv-search-panel");
    if (!listHead) return;
    let node = listHead.nextElementSibling;
    while (node && !node.classList.contains("join-card")) {
      const next = node.nextElementSibling;
      node.remove();
      node = next;
    }
    listHead.insertAdjacentHTML("afterend", conversations.length
      ? conversations.map((item) => renderConversationItem(item)).join("")
      : `<div class="empty" style="min-height:240px">未找到匹配的对话</div>`);
    document.querySelectorAll("[data-conversation]").forEach((el) =>
      el.addEventListener("click", () => setState({ selectedConversation: el.dataset.conversation }))
    );
  });
  const chatSearchClose = document.querySelector("[data-chat-search-close]");
  if (chatSearchClose) chatSearchClose.addEventListener("click", () => setState({ chatSearchOpen: false, chatSearchModeOpen: false, chatSearchQuery: "" }));
  document.querySelectorAll("[data-conversation]").forEach((el) =>
    el.addEventListener("click", () => setState({ selectedConversation: el.dataset.conversation }))
  );
  document.querySelectorAll("[data-analytics-tab]").forEach((el) =>
    el.addEventListener("click", () => setState({ analyticsTab: el.dataset.analyticsTab, analyticsExported: false }))
  );
  document.querySelectorAll("[data-analytics-range]").forEach((el) =>
    el.addEventListener("click", () => setState({ analyticsRange: el.dataset.analyticsRange }))
  );
  document.querySelectorAll("[data-analytics-filter]").forEach((el) =>
    el.addEventListener("click", () => showToast(`${el.dataset.analyticsFilter}筛选已应用`))
  );
  document.querySelectorAll("[data-analytics-day]").forEach((el) =>
    el.addEventListener("click", () => showToast(`${el.dataset.analyticsDay} 数据点已选中`))
  );
  const dateRange = document.querySelector(".date-range");
  if (dateRange) dateRange.addEventListener("click", () => showToast("日期范围选择器已打开"));
  const analyticsExport = document.querySelector("[data-analytics-export]");
  if (analyticsExport) {
    analyticsExport.addEventListener("click", () => {
      state.analyticsExported = true;
      showToast(`${analyticsData[state.analyticsTab].title}报表已导出`);
      render();
    });
  }
  document.querySelectorAll("[data-knowledge-type]").forEach((el) =>
    el.addEventListener("click", () => setState({ knowledgeCreateType: el.dataset.knowledgeType }))
  );
  document.querySelectorAll("[data-segment-mode]").forEach((el) =>
    el.addEventListener("click", () => setState({ knowledgeSegmentMode: el.dataset.segmentMode, knowledgePreview: false }))
  );
  const knowledgePrev = document.querySelector("[data-knowledge-prev]");
  if (knowledgePrev) {
    knowledgePrev.addEventListener("click", () => {
      if (state.knowledgeCreateStep === 1) {
        setState({ page: "ai", assistantSub: "knowledge" });
        return;
      }
      setState({ knowledgeCreateStep: state.knowledgeCreateStep - 1 });
    });
  }
  const knowledgeNext = document.querySelector("[data-knowledge-next]");
  if (knowledgeNext) {
    knowledgeNext.addEventListener("click", () => {
      if (state.knowledgeCreateStep === 1 && !state.knowledgeCreateType) {
        showToast("请选择内容类型");
        return;
      }
      if (state.knowledgeCreateStep === 4) {
        showToast("知识库创建完成");
        setState({ page: "ai", assistantSub: "knowledge", knowledgeCreateStep: 1, knowledgeCreateType: "", knowledgeSegmentMode: "auto", knowledgePreview: false });
        return;
      }
      setState({
        knowledgeCreateStep: state.knowledgeCreateStep + 1,
        knowledgeCreateType: state.knowledgeCreateType,
      });
    });
  }
  const generatePreview = document.querySelector("[data-generate-preview]");
  if (generatePreview) generatePreview.addEventListener("click", (event) => {
    event.stopPropagation();
    setState({ knowledgePreview: true });
  });
  const resetSegment = document.querySelector("[data-reset-segment]");
  if (resetSegment) resetSegment.addEventListener("click", (event) => {
    event.stopPropagation();
    setState({ knowledgePreview: false });
  });
  document.querySelectorAll("[data-skill-filter]").forEach((el) =>
    el.addEventListener("click", () => setState({ skillFilter: el.dataset.skillFilter }))
  );
  const skillGuideClose = document.querySelector("[data-skill-guide-close]");
  if (skillGuideClose) skillGuideClose.addEventListener("click", () => setState({ skillGuideVisible: false }));
  const skillChannel = document.querySelector("[data-skill-channel]");
  if (skillChannel) skillChannel.addEventListener("click", () => showToast("渠道筛选已展开"));
  document.querySelectorAll("[data-skill-open]").forEach((el) =>
    el.addEventListener("click", () => setState({ page: "skillEdit", selectedAssistant: null, assistantSub: "skill", selectedSkillId: el.dataset.skillOpen }))
  );
  const skillCreate = document.querySelector("[data-skill-create]");
  if (skillCreate) skillCreate.addEventListener("click", () => setState({ page: "skillEdit", selectedAssistant: null, assistantSub: "skill", selectedSkillId: null }));
  document.querySelectorAll("[data-back-skills]").forEach((el) =>
    el.addEventListener("click", () => setState({ page: "ai", assistantSub: "skill", selectedSkillId: null }))
  );
  const skillSave = document.querySelector("[data-skill-save]");
  if (skillSave) skillSave.addEventListener("click", () => {
    showToast(state.selectedSkillId ? "技能已保存" : "技能已创建并启用");
    setState({ page: "ai", assistantSub: "skill", selectedSkillId: null });
  });
  document.querySelectorAll("[data-ai-tool-filter]").forEach((el) =>
    el.addEventListener("click", () => setState({ aiToolFilter: el.dataset.aiToolFilter }))
  );
  const aiToolGuideClose = document.querySelector("[data-ai-tool-guide-close]");
  if (aiToolGuideClose) aiToolGuideClose.addEventListener("click", () => setState({ aiToolGuideVisible: false }));
  const toolCategory = document.querySelector(".tool-category");
  if (toolCategory) toolCategory.addEventListener("click", () => showToast("工具类别筛选已展开"));
  const summaryEnable = document.querySelector("[data-summary-enable]");
  if (summaryEnable) {
    summaryEnable.addEventListener("click", () => {
      showToast("已跳转到 AI 自动化，可开启 AI 知识补充");
      setState({ page: "ai", assistantSub: "auto" });
    });
  }
  const marketingNew = document.querySelector("[data-marketing-rule-new]");
  if (marketingNew) marketingNew.addEventListener("click", () => setState({ marketingRuleView: "form", marketingRuleId: null }));
  document.querySelectorAll("[data-marketing-rule-edit]").forEach((el) =>
    el.addEventListener("click", () => setState({ marketingRuleView: "form", marketingRuleId: el.dataset.marketingRuleEdit }))
  );
  const marketingBack = document.querySelector("[data-marketing-back]");
  if (marketingBack) marketingBack.addEventListener("click", () => setState({ marketingRuleView: "list", marketingRuleId: null }));
  const marketingSave = document.querySelector("[data-marketing-save]");
  if (marketingSave) marketingSave.addEventListener("click", () => {
    showToast("聚合对话规则已保存");
    setState({ marketingRuleView: "list", marketingRuleId: null });
  });
  document.querySelectorAll("[data-marketing-option]").forEach((el) =>
    el.addEventListener("click", () => {
      const select = el.closest(".fake-select");
      if (select) {
        const summary = select.querySelector("summary");
        if (summary) summary.innerHTML = `${el.dataset.marketingOption}<span>⌄</span>`;
        select.removeAttribute("open");
      }
      showToast(`已选择：${el.dataset.marketingOption}`);
    })
  );
  document.querySelectorAll("[data-flow-sub]").forEach((el) =>
    el.addEventListener("click", () => setState({ page: "flow", flowSub: el.dataset.flowSub, flowEditing: false }))
  );
  document.querySelectorAll("[data-flow-template-filter]").forEach((el) =>
    el.addEventListener("click", () => setState({ flowTemplateFilter: el.dataset.flowTemplateFilter }))
  );
  document.querySelectorAll("[data-flow-my-filter]").forEach((el) =>
    el.addEventListener("click", () => setState({ flowMyFilter: el.dataset.flowMyFilter }))
  );
  document.querySelectorAll("[data-flow-template-view]").forEach((el) =>
    el.addEventListener("click", () => setState({ drawer: "flowTemplateDetail", selectedFlowTemplateId: el.dataset.flowTemplateView }))
  );
  const flowBack = document.querySelector("[data-flow-back]");
  if (flowBack) flowBack.addEventListener("click", () => setState({ flowEditing: false, flowSub: "mine" }));
  const flowModelPicker = document.querySelector("[data-flow-model-picker]");
  if (flowModelPicker) flowModelPicker.addEventListener("click", () => showToast("模型选择已展开"));
  document.querySelectorAll("[data-flow-picker-tab]").forEach((el) =>
    el.addEventListener("click", () => {
      const key = el.dataset.flowPickerKey;
      if (key === "flowTriggerCategory") setState({ flowTriggerCategory: el.dataset.flowPickerTab });
      if (key === "flowActionCategory") setState({ flowActionCategory: el.dataset.flowPickerTab });
    })
  );
  document.querySelectorAll("[data-flow-trigger-option]").forEach((el) =>
    el.addEventListener("click", () => showToast(`已选择触发事件：${el.dataset.flowTriggerOption}`))
  );
  document.querySelectorAll("[data-flow-action-option]").forEach((el) =>
    el.addEventListener("click", () => showToast(`已选择执行动作：${el.dataset.flowActionOption}`))
  );
  const flowTemplateAdd = document.querySelector("[data-flow-template-add]");
  if (flowTemplateAdd) {
    flowTemplateAdd.addEventListener("click", () => {
      showToast("模板已添加到助手");
      setState({ drawer: null });
    });
  }
  document.querySelectorAll("[data-modal]").forEach((el) => el.addEventListener("click", () => {
    const modalName = el.dataset.modal;
    if (modalName === "customView") {
      setState({ modal: modalName, customViewStep: 1, customViewName: "", customViewAccess: "all", customViewFilterRows: 1, customViewFieldOpen: false, customViewManual: false });
      return;
    }
    setState({ modal: modalName });
  }));
  document.querySelectorAll("[data-drawer]").forEach((el) => el.addEventListener("click", () => setState({ drawer: el.dataset.drawer })));
  document.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", () => setState({ modal: null, knowledgeStep: 1, authStep: 1, importSkillSelected: [], customViewStep: 1, customViewName: "", customViewFilterRows: 1, customViewFieldOpen: false, customViewManual: false })));
  document.querySelectorAll("[data-custom-view-step]").forEach((el) =>
    el.addEventListener("click", () => {
      const targetStep = Number(el.dataset.customViewStep);
      if (targetStep < state.customViewStep) setState({ customViewStep: targetStep, customViewFieldOpen: false });
    })
  );
  const customViewNameInput = document.querySelector("[data-custom-view-name]");
  if (customViewNameInput) customViewNameInput.addEventListener("input", () => {
    state.customViewName = customViewNameInput.value.slice(0, 100);
    const count = document.querySelector("[data-custom-view-name-count]");
    const next = document.querySelector("[data-custom-view-next]");
    const canContinue = Boolean(state.customViewName.trim());
    if (count) count.textContent = `${state.customViewName.length} / 100`;
    if (next) {
      next.disabled = !canContinue;
      next.classList.toggle("disabled", !canContinue);
    }
  });
  document.querySelectorAll("[data-custom-view-access]").forEach((el) =>
    el.addEventListener("click", () => setState({ customViewAccess: el.dataset.customViewAccess }))
  );
  const customViewPrev = document.querySelector("[data-custom-view-prev]");
  if (customViewPrev) customViewPrev.addEventListener("click", () => setState({ customViewStep: Math.max(1, state.customViewStep - 1), customViewFieldOpen: false }));
  const customViewNext = document.querySelector("[data-custom-view-next]");
  if (customViewNext) customViewNext.addEventListener("click", () => {
    if (state.customViewStep === 1 && !state.customViewName.trim()) {
      showToast("请先填写视图名称");
      return;
    }
    if (state.customViewStep === 3) {
      const viewName = state.customViewName.trim();
      if (customConversationViews.includes(viewName) || conversationFilters.includes(viewName)) {
        showToast("该对话组名称已存在");
        return;
      }
      customConversationViews.push(viewName);
      conversationMap[viewName] = [];
      saveCustomConversationViews(customConversationViews);
      setState({ modal: null, customViewStep: 1, customViewName: "", customViewFilterRows: 1, customViewFieldOpen: false, customViewManual: false, chatFilter: viewName, selectedConversation: null });
      showToast(`对话组“${viewName}”已创建`);
      return;
    }
    setState({ customViewStep: state.customViewStep + 1, customViewFieldOpen: false });
  });
  document.querySelectorAll("[data-close-drawer]").forEach((el) => el.addEventListener("click", () => setState({ drawer: null })));
  document.querySelectorAll("[data-import-skill-select]").forEach((el) =>
    el.addEventListener("change", () => {
      const skillId = el.dataset.importSkillSelect;
      const selected = new Set(state.importSkillSelected);
      if (el.checked) selected.add(skillId);
      else selected.delete(skillId);
      setState({ importSkillSelected: Array.from(selected) });
    })
  );
  const quickReplyRequired = document.querySelectorAll("[data-quick-reply-required]");
  if (quickReplyRequired.length) {
    const updateQuickReplySave = () => {
      const group = document.getElementById("quickReplyGroup")?.value;
      const content = document.getElementById("quickReplyContent")?.textContent.trim();
      const save = document.querySelector(".quick-reply-modal [data-modal-ok]");
      if (save) save.disabled = !(group && content);
    };
    quickReplyRequired.forEach((el) => {
      el.addEventListener("input", updateQuickReplySave);
      el.addEventListener("change", updateQuickReplySave);
    });
  }
  const quickGroupName = document.getElementById("quickGroupName");
  if (quickGroupName) {
    quickGroupName.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      document.querySelector(".quick-group-modal [data-modal-ok]")?.click();
    });
  }
  document.querySelectorAll("[data-quick-format]").forEach((el) =>
    el.addEventListener("click", () => {
      document.getElementById("quickReplyContent")?.focus();
      document.execCommand(el.dataset.quickFormat, false, el.dataset.formatValue || null);
    })
  );
  const modalOk = document.querySelector("[data-modal-ok]");
  if (modalOk) modalOk.addEventListener("click", () => {
    if (window.__modalOk) window.__modalOk();
    render();
  });
  document.querySelectorAll("[data-switch]").forEach((el) => el.addEventListener("click", () => el.classList.toggle("on")));
  document.querySelectorAll("[data-console-action]").forEach((el) =>
    el.addEventListener("click", () => runConsoleAction(el.dataset.consoleAction))
  );
  const assistantSend = document.getElementById("assistantSend");
  if (assistantSend) assistantSend.addEventListener("click", sendAssistantMessage);
  const convSend = document.getElementById("convSend");
  if (convSend) convSend.addEventListener("click", sendConvMessage);
  const flowTest = document.querySelector("[data-flow-test]");
  if (flowTest) flowTest.addEventListener("click", () => showToast("流程测试成功：AI 回复已发送至企业微信"));
}

function runConsoleAction(action) {
  state.consoleStatus = [`${action}：指令已提交`, "远程实例执行中", "企业微信返回成功"];
  render();
  showToast(`${action}执行成功`);
}

function sendAssistantMessage() {
  const input = document.getElementById("assistantInput");
  const text = input.value.trim();
  if (!text) return;
  state.messages.push({ role: "user", text });
  state.messages.push({
    role: "assistant",
    text: "已根据物流问答知识库为您查询：该渠道支持欧洲多国派送，具体价格需要根据重量、派送国家、地址类型和件数核算。",
    meta: "多模态知识库：物流问答 · 执行成功 · 消耗 token：532 · 动作执行：1次 · 预估费用：0.001元",
  });
  render();
}

function sendConvMessage() {
  const input = document.getElementById("convInput");
  const text = input.value.trim();
  if (!text) return;
  state.convMessages.push({ role: "me", text });
  render();
}

render();
