// Mock数据 - 咖啡研磨机案例

export const MOCK_PROJECTS = [
  {
    id: '1',
    name: '咖啡研磨机',
    keyword: 'Coffee Grinder',
    marketplace: 'US',
    category: 'Home & Kitchen',
    status: 'completed' as const,
    createdAt: '2024-02-20',
    updatedAt: '2024-02-21',
  },
  {
    id: '2',
    name: '吸尘器',
    keyword: 'Cordless Vacuum',
    marketplace: 'US',
    category: 'Home & Kitchen',
    status: 'analyzing' as const,
    createdAt: '2024-02-21',
    updatedAt: '2024-02-21',
  },
  {
    id: '3',
    name: '充电宝',
    keyword: 'Power Bank',
    marketplace: 'US',
    category: 'Electronics',
    status: 'draft' as const,
    createdAt: '2024-02-23',
    updatedAt: '2024-02-23',
  },
];

export const MOCK_COMPETITORS = [
  {
    id: 'c1',
    asin: 'B08XYZ1234',
    title: 'JavaPresse Manual Coffee Grinder with Adjustable Settings',
    price: 24.99,
    rating: 4.5,
    reviewCount: 12453,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
  },
  {
    id: 'c2',
    asin: 'B07ABC5678',
    title: 'Hario Ceramic Coffee Mill - Skerton Plus',
    price: 39.99,
    rating: 4.3,
    reviewCount: 8234,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
  },
  {
    id: 'c3',
    asin: 'B09DEF9012',
    title: 'Porlex Mini Stainless Steel Coffee Grinder',
    price: 49.99,
    rating: 4.7,
    reviewCount: 5621,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
  },
];

export const MOCK_SELLING_POINTS = [
  {
    id: 'sp1',
    name: '研磨均匀度',
    content: '研磨颗粒大小一致，无大块残留',
    kanoType: 'must-be' as const,
    weight: 'high' as const,
    frequency: 156,
    sentiment: 0.85,
    evidences: [
      {
        id: 'e1',
        reviewText: "I've tried 4 grinders under $50, and this is the only one that doesn't leave huge chunks in my french press brew. The consistency is remarkable.",
        highlightedPhrase: "doesn't leave huge chunks",
        rating: 5,
        verified: true,
        asin: 'B08XYZ1234',
      },
      {
        id: 'e2',
        reviewText: 'The coffee grounds are super consistent across all settings. Much better than my old Bodum grinder.',
        highlightedPhrase: 'super consistent',
        rating: 5,
        verified: true,
        asin: 'B07ABC5678',
      },
    ],
  },
  {
    id: 'sp2',
    name: '静音表现',
    content: '研磨过程安静，不影响他人',
    kanoType: 'one-dimensional' as const,
    weight: 'medium' as const,
    frequency: 89,
    sentiment: 0.72,
    evidences: [
      {
        id: 'e3',
        reviewText: 'Much quieter than my old Bodum grinder, I can use it while kids sleep. Game changer for early morning coffee.',
        highlightedPhrase: 'use it while kids sleep',
        rating: 5,
        verified: true,
        asin: 'B08XYZ1234',
      },
    ],
  },
  {
    id: 'sp3',
    name: '便携性',
    content: '体积小巧，方便携带外出',
    kanoType: 'attractive' as const,
    weight: 'low' as const,
    frequency: 67,
    sentiment: 0.91,
    evidences: [
      {
        id: 'e4',
        reviewText: 'Small enough to fit in my camping bag, exactly what I needed. Took this on a 3-day hiking trip and it held up perfectly.',
        highlightedPhrase: 'fit in my camping bag',
        rating: 5,
        verified: true,
        asin: 'B09DEF9012',
      },
    ],
  },
  {
    id: 'sp4',
    name: '清洁难度',
    content: '清洁不便，容易残留咖啡粉',
    kanoType: 'one-dimensional' as const,
    weight: 'high' as const,
    frequency: 134,
    sentiment: -0.65,
    evidences: [
      {
        id: 'e5',
        reviewText: 'The brush included is useless, grounds get stuck in the corners. Takes 10 minutes to clean properly.',
        highlightedPhrase: 'grounds get stuck in the corners',
        rating: 3,
        verified: true,
        asin: 'B07ABC5678',
      },
    ],
  },
  {
    id: 'sp5',
    name: '耐用性',
    content: '材质坚固，长期使用不易损坏',
    kanoType: 'must-be' as const,
    weight: 'high' as const,
    frequency: 112,
    sentiment: 0.78,
    evidences: [
      {
        id: 'e6',
        reviewText: 'Had mine for 2 years, daily use, still works like new. The stainless steel burr shows no wear.',
        highlightedPhrase: '2 years, daily use, still works like new',
        rating: 5,
        verified: true,
        asin: 'B08XYZ1234',
      },
    ],
  },
];

export const MOCK_LISTING = {
  title: 'Portable Manual Coffee Grinder - Stainless Steel Burr, 40 Adjustable Settings, Compact Design for Travel and Home, Precise Uniform Grinding for French Press & Espresso',
  bullets: [
    '【PRECISE UNIFORMITY】Equipped with a CNC 420 stainless steel burr, our grinder provides more consistent grounds than ceramic models. Proven by 200+ users to eliminate "chunks" in French Press brewing.',
    '【ULTRALIGHT & TRAVEL READY】Weights only 0.8 lbs. The foldable handle design makes it 30% more space-efficient than competitors, fitting perfectly into any backpack.',
    '【BUILT TO LAST】Industrial grade materials ensure 5+ years of daily use. We replaced fragile plastic parts with aviation-grade aluminum based on common competitor complaints.',
    '【EFFORTLESS CLEANING】Detachable design allows full disassembly in 10 seconds. Includes specialized cleaning brush that actually works - no more stuck grounds in corners.',
    '【WHISPER QUIET】Engineered for early morning use. 40% quieter than traditional grinders - grind your coffee without waking the family.',
  ],
  complianceScore: 0.95,
  violations: [],
};

export const MOCK_IMAGE_BRIEFS = [
  {
    id: 'ib1',
    position: 'main' as const,
    objective: '展示产品整体外观，突出便携性和质感',
    copyText: {
      zh: '精品手摇咖啡研磨机',
      en: 'Premium Manual Coffee Grinder',
    },
    composition: [
      '产品45度角摆放',
      '白色背景',
      '展示折叠手柄状态',
      '不锈钢材质高光反射',
    ],
    evidenceSource: '基于便携性卖点（67次提及）',
    referenceImages: [],
  },
  {
    id: 'ib2',
    position: 'sub1' as const,
    objective: '对比展示研磨均匀度，突出核心差异化',
    copyText: {
      zh: '告别大颗粒，均匀研磨看得见',
      en: 'Uniformity You Can See. Say Goodbye to Chunks.',
    },
    composition: [
      '左右分割对比',
      '左侧：本品研磨的均匀细粉',
      '右侧：竞品常见的大颗粒（Chunk）',
      '使用放大镜或显微镜视角',
    ],
    evidenceSource: '来自评论B08XYZ1234中45名用户的抱怨',
    referenceImages: [],
  },
  {
    id: 'ib3',
    position: 'sub2' as const,
    objective: '场景化展示便携性，吸引户外爱好者',
    copyText: {
      zh: '你的露营最佳伴侣',
      en: 'The Best Companion for Your Camping Trip',
    },
    composition: [
      '户外野营场景',
      '产品放在折叠桌上',
      '背景：帐篷、山景',
      '展示折叠后的紧凑状态',
    ],
    evidenceSource: '基于67条便携性相关评论',
    referenceImages: [],
  },
  {
    id: 'ib4',
    position: 'sub3' as const,
    objective: '展示易清洁设计，解决用户痛点',
    copyText: {
      zh: '10秒拆卸，轻松清洁',
      en: '10-Second Disassembly, Effortless Cleaning',
    },
    composition: [
      '分步骤展示拆卸过程',
      '1-2-3步骤图示',
      '展示清洁刷的使用',
      '对比：清洁前后',
    ],
    evidenceSource: '解决134条评论中的清洁痛点',
    referenceImages: [],
  },
];

// 竞品分析详细数据
export const MOCK_COMPETITOR_ANALYSIS = {
  classification: [
    {
      dimension: '按产品属性分类',
      categories: [
        {
          name: '物理属性',
          description: '材质、外观、尺寸等物理特征',
          sellingPoints: ['不锈钢磨芯', '便携尺寸', '折叠手柄', '透明粉仓'],
        },
        {
          name: '功能属性',
          description: '功能、性能、技术参数',
          sellingPoints: ['40档调节', '研磨均匀', '静音设计', '快速研磨'],
        },
        {
          name: '品牌属性',
          description: '品牌形象、声誉、认证',
          sellingPoints: ['SGS认证', '5年质保', '专业咖啡品牌'],
        },
        {
          name: '服务属性',
          description: '售后服务、支持、配件',
          sellingPoints: ['终身客服', '免费配件', '30天退换'],
        },
        {
          name: '体验属性',
          description: '使用体验、情感体验',
          sellingPoints: ['手感舒适', '仪式感', '咖啡香气保留'],
        },
        {
          name: '社会属性',
          description: '社交价值、地位象征',
          sellingPoints: ['咖啡爱好者标配', '送礼佳品', '生活品质'],
        },
        {
          name: '伦理属性',
          description: '可持续性、环保、道德',
          sellingPoints: ['可回收材料', '无塑料包装', '公平贸易'],
        },
      ],
    },
    {
      dimension: '按需求层次分类（马斯洛）',
      categories: [
        {
          name: '生理需求',
          description: '基本的咖啡研磨功能',
          sellingPoints: ['研磨咖啡豆', '可调粗细'],
        },
        {
          name: '安全需求',
          description: '使用安全、质量可靠',
          sellingPoints: ['食品级材质', 'SGS认证', '防滑底座'],
        },
        {
          name: '社交需求',
          description: '分享、交流、归属感',
          sellingPoints: ['咖啡社群', '分享配方', '咖啡爱好者认同'],
        },
        {
          name: '尊重需求',
          description: '品味、地位、成就感',
          sellingPoints: ['专业级工具', '咖啡师推荐', '高端设计'],
        },
        {
          name: '认知需求',
          description: '学习、探索、理解',
          sellingPoints: ['研磨科学', '咖啡知识', '冲煮指南'],
        },
        {
          name: '审美需求',
          description: '美观、设计感',
          sellingPoints: ['极简设计', '工业美学', '视觉享受'],
        },
        {
          name: '自我实现',
          description: '个性表达、生活方式',
          sellingPoints: ['咖啡仪式', '慢生活', '匠人精神'],
        },
      ],
    },
    {
      dimension: '按需求-满意度关系（KANO模型）',
      categories: [
        {
          name: '基本型需求 (Must-be)',
          description: '用户默认应具备的功能，缺失会导致不满',
          sellingPoints: ['研磨均匀', '耐用性', '易于操作'],
        },
        {
          name: '期望型需求 (One-dimensional)',
          description: '用户明确提出的需求，满意度呈线性关系',
          sellingPoints: ['静音表现', '清洁方便', '研磨速度'],
        },
        {
          name: '魅力型需求 (Attractive)',
          description: '超出预期的创新功能，显著提升惊喜感',
          sellingPoints: ['便携性', '折叠设计', '透明粉仓', '刻度显示'],
        },
        {
          name: '无差异型需求 (Indifferent)',
          description: '用户不关心的功能',
          sellingPoints: ['包装盒设计', '说明书语言'],
        },
      ],
    },
  ],
  expression: [
    {
      sellingPoint: '研磨均匀度',
      fabe: {
        feature: 'CNC精密加工的420不锈钢锥形磨芯',
        advantage: '比陶瓷磨芯研磨更均匀，颗粒大小一致性提升40%',
        benefit: '告别法压壶中的大颗粒，每一口咖啡都是完美萃取',
        evidence: '200+用户评价验证，SGS实验室测试报告',
      },
      success: ['具体 (Concrete)', '信赖 (Credible)', '意外 (Unexpected)'],
    },
    {
      sellingPoint: '便携性',
      fabe: {
        feature: '折叠手柄设计，重量仅0.8磅',
        advantage: '比传统研磨机节省30%空间',
        benefit: '轻松放入背包，随时随地享受新鲜研磨咖啡',
        evidence: '67条评论提到露营和旅行使用场景',
      },
      success: ['简明 (Simple)', '具体 (Concrete)', '故事 (Story)'],
    },
    {
      sellingPoint: '静音表现',
      fabe: {
        feature: '优化齿轮比设计，降噪工程',
        advantage: '比传统研磨机降噪40%',
        benefit: '清晨研磨不吵醒家人，享受宁静的咖啡时光',
        evidence: '89条评论提到静音效果',
      },
      success: ['感情 (Emotional)', '具体 (Concrete)'],
    },
  ],
  relationship: {
    order: [
      {
        position: '主图',
        sellingPoint: '便携性 + 质感',
        reason: '第一印象，吸引目标用户',
      },
      {
        position: '标题',
        sellingPoint: '研磨均匀 + 便携 + 调节档位',
        reason: '核心卖点前置，SEO优化',
      },
      {
        position: '五点-第1点',
        sellingPoint: '研磨均匀度',
        reason: '最高频痛点，优先解决',
      },
      {
        position: '五点-第2点',
        sellingPoint: '便携性',
        reason: '差异化卖点，吸引细分人群',
      },
      {
        position: '五点-第3点',
        sellingPoint: '耐用性',
        reason: '基本需求，建立信任',
      },
      {
        position: '五点-第4点',
        sellingPoint: '易清洁',
        reason: '解决使用痛点',
      },
      {
        position: '五点-第5点',
        sellingPoint: '静音',
        reason: '情感价值，提升体验',
      },
    ],
    priority: [
      {
        sellingPoint: '研磨均匀度',
        level: 'primary',
        emphasis: 5,
        signals: ['重复描述3次', '主图展示', '对比图', '大面积展示'],
      },
      {
        sellingPoint: '便携性',
        level: 'primary',
        emphasis: 4,
        signals: ['场景图展示', '尺寸对比', '标题提及'],
      },
      {
        sellingPoint: '静音表现',
        level: 'secondary',
        emphasis: 3,
        signals: ['五点提及', '图标展示'],
      },
      {
        sellingPoint: '易清洁',
        level: 'secondary',
        emphasis: 3,
        signals: ['分步图示', '五点提及'],
      },
    ],
    strength: [
      {
        sellingPoint: '研磨均匀度',
        painScore: -8,
        solutionScore: 9,
        analysis: '痛点塑造强烈（大颗粒、不均匀），解决方案具体（CNC磨芯、40%提升）',
      },
      {
        sellingPoint: '便携性',
        painScore: -5,
        solutionScore: 8,
        analysis: '痛点中等（携带不便），解决方案突出（折叠设计、0.8磅）',
      },
      {
        sellingPoint: '静音表现',
        painScore: -6,
        solutionScore: 7,
        analysis: '痛点明确（吵醒家人），解决方案量化（降噪40%）',
      },
    ],
  },
  reviews: {
    entry: [
      {
        type: '出入点',
        source: '近期评价 vs 差评对比',
        content: '页面强调"研磨均匀"，但差评中有12%提到"仍有大颗粒"',
        insight: '需要在页面中说明适用场景（法压壶效果最佳，意式浓缩不适用）',
      },
      {
        type: '出入点',
        source: '好评提及但页面未展示',
        content: '23条好评提到"手感舒适"，但页面未突出人体工学设计',
        insight: '可以增加手柄细节图和握持场景图',
      },
    ],
    emotion: [
      {
        type: '情绪点',
        source: '高情绪权重评价',
        content: '"终于找到完美的研磨机了！试了4款才找到这个，研磨效果太棒了！"',
        insight: '用户经历多次试错，对均匀度的情绪价值很高，可以在文案中强调"一步到位"',
      },
      {
        type: '情绪点',
        source: '负面情绪',
        content: '"清洁太麻烦了，每次都要花10分钟，咖啡粉卡在角落里"',
        insight: '清洁痛点的情绪强度高，需要重点解决并在页面中突出',
      },
    ],
    contrast: [
      {
        type: '反差点',
        source: '差评中的满意点',
        content: '3星差评："虽然清洁麻烦，但研磨效果确实很好，颗粒很均匀"',
        insight: '研磨均匀是核心优势，即使不满意的用户也认可，应该作为主打卖点',
      },
      {
        type: '反差点',
        source: '好评中的不满点',
        content: '5星好评："非常满意，唯一的小问题是手柄有点松"',
        insight: '需要改进手柄固定设计，避免影响整体体验',
      },
    ],
    jump: [
      {
        type: '跳跃点',
        source: '特殊使用场景',
        content: '"我用它来研磨香料和坚果，效果也很好！"',
        insight: '可以拓展使用场景，吸引更多用户群体',
      },
      {
        type: '跳跃点',
        source: '创新使用方法',
        content: '"我发现先预热磨芯（用热水冲一下），研磨效果更好"',
        insight: '可以在说明书或页面中加入使用技巧，提升用户体验',
      },
    ],
  },
};

// 提示词数据
export const MOCK_PROMPTS = {
  competitor: [
    {
      id: 'cp1',
      name: '竞品分析 - 标准版',
      content: `你是一位资深的亚马逊运营专家和产品分析师。请基于以下信息进行竞品分析：

产品关键词：{keyword}
目标市场：{marketplace}
产品类目：{category}
补充信息：{additional_info}

请按照以下维度进行分析：

1. 卖点分类
   - 按产品属性分类：物理属性、功能属性、品牌属性、服务属性、体验属性、社会属性、伦理属性
   - 按需求层次分类：马斯洛需求层次理论（生理、安全、社交、尊重、认知、审美、自我实现）
   - 按KANO模型分类：基本型、期望型、魅力型、无差异型
   
2. 卖点表达
   - FABE法则：Feature（产品属性）、Advantage（比别人强）、Benefit（用户好处）、Evidence（证据）
   - SUCCESs模型：简明、意外、具体、信赖、感情、故事
   
3. 卖点关系
   - 先后顺序：标题、主图、五点、A+、品牌故事的卖点排序
   - 主次布局：主要卖点和次要卖点的识别
   - 表达强弱：±10分制评分（痛点→实现）
   - 图文配合：视觉和文案的协同效果
   - 整体风格：科技感、小清新、复古等
   
4. 评论内容
   - 出入点：页面卖点与评价的差异
   - 情绪点：高情绪权重的评价
   - 反差点：差评中的满意点、好评中的不满点
   - 跳跃点：特殊使用方法、场景、解释

请提供详细的分析报告，包含具体的数据和案例。`,
      isDefault: true,
      createdAt: '2024-02-01',
      updatedAt: '2024-02-20',
      usageCount: 156,
    },
    {
      id: 'cp2',
      name: '竞品分析 - 快速版',
      content: `请对以下产品进行快速竞品分析：

关键词：{keyword}
市场：{marketplace}

重点分析：
1. 核心卖点分类（KANO模型）
2. 主要卖点的FABE表达
3. 卖点优先级排序

请提供简洁的分析结果。`,
      isDefault: false,
      createdAt: '2024-02-10',
      updatedAt: '2024-02-15',
      usageCount: 45,
    },
  ],
  listing: [
    {
      id: 'lp1',
      name: 'Listing生成 - 标准版',
      content: `你是一位资深的亚马逊Listing优化专家。请基于竞品分析报告，生成优化的Listing内容。

竞品分析数据：{analysis_data}

请生成以下内容：

1. 主图建议
   - 展示角度和构图
   - 突出的核心卖点
   - 视觉风格建议

2. 标题（Title）
   - 包含核心关键词
   - 突出3-5个主要卖点
   - 符合亚马逊标题规范
   - 控制在200字符以内

3. 五点描述（Bullet Points）
   - 每点突出一个核心卖点
   - 使用FABE法则
   - 包含具体数据和证据
   - 每点控制在250字符以内

4. 品牌故事（Brand Story）
   - 讲述品牌理念和产品研发故事
   - 建立情感连接
   - 强化核心卖点
   - 300-500字

5. 详情页图片需求
   - 每张图片的目标和卖点
   - 构图要点和文案建议
   - 证据来源

6. 图片需求说明
   - 每个位置的图片目标
   - 文案内容（中英文）
   - 构图要点
   - 证据来源

请确保所有内容符合亚马逊规范，避免违禁词。`,
      isDefault: true,
      createdAt: '2024-02-01',
      updatedAt: '2024-02-18',
      usageCount: 203,
    },
    {
      id: 'lp2',
      name: 'Listing生成 - 精简版',
      content: `基于竞品分析，生成Listing核心内容：

1. 标题（包含核心关键词和卖点）
2. 五点描述（每点一个核心卖点）
3. 主图和详情页图片建议

要求：
- 突出差异化卖点
- 使用具体数据
- 符合亚马逊规范`,
      isDefault: false,
      createdAt: '2024-02-12',
      updatedAt: '2024-02-12',
      usageCount: 67,
    },
  ],
};
