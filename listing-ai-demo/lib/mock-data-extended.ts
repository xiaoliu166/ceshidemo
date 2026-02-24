// 扩展的Mock数据

export const MOCK_TEMPLATES = [
  {
    id: 't1',
    name: '家电类标准模板',
    category: 'Home & Kitchen',
    description: '适用于小家电产品的标准Listing模板',
    usageCount: 156,
    rating: 4.8,
  },
  {
    id: 't2',
    name: '户外运动模板',
    category: 'Sports & Outdoors',
    description: '强调耐用性和便携性的户外产品模板',
    usageCount: 89,
    rating: 4.6,
  },
  {
    id: 't3',
    name: '电子产品模板',
    category: 'Electronics',
    description: '突出技术参数和性能的电子产品模板',
    usageCount: 234,
    rating: 4.9,
  },
];

export const MOCK_EXPRESSION_LIBRARY = [
  {
    id: 'exp1',
    name: '对比图表达',
    type: 'comparison',
    description: '左右对比展示产品优势',
    example: '本品 vs 竞品，一目了然',
    applicablePoints: ['性能', '质量', '效果'],
    usageCount: 45,
  },
  {
    id: 'exp2',
    name: '数据可视化',
    type: 'data-visual',
    description: '用图表展示数据和参数',
    example: '热力图、柱状图、雷达图',
    applicablePoints: ['参数', '性能', '效率'],
    usageCount: 67,
  },
  {
    id: 'exp3',
    name: '场景化展示',
    type: 'scene',
    description: '在真实使用场景中展示产品',
    example: '户外、家庭、办公等场景',
    applicablePoints: ['便携性', '适用性', '多功能'],
    usageCount: 89,
  },
];

export const MOCK_CASE_STUDIES = [
  {
    id: 'case1',
    title: '咖啡研磨机案例',
    category: 'Home & Kitchen',
    beforeCTR: 2.3,
    afterCTR: 4.8,
    improvement: '+108%',
    description: '通过突出便携性和研磨均匀度，转化率提升108%',
    date: '2024-01-15',
  },
  {
    id: 'case2',
    title: '无线吸尘器案例',
    category: 'Home & Kitchen',
    beforeCTR: 3.1,
    afterCTR: 5.9,
    improvement: '+90%',
    description: '强调续航和吸力，配合对比图，转化率提升90%',
    date: '2024-02-10',
  },
];

export const MOCK_COMPETITOR_POOL = [
  {
    id: 'pool1',
    keyword: 'Coffee Grinder',
    marketplace: 'US',
    competitors: [
      { asin: 'B08XYZ1234', rank: 1, price: 24.99, rating: 4.5 },
      { asin: 'B07ABC5678', rank: 2, price: 39.99, rating: 4.3 },
      { asin: 'B09DEF9012', rank: 3, price: 49.99, rating: 4.7 },
    ],
    lastUpdated: '2024-02-20',
  },
];

export const MOCK_MARKET_TRENDS = [
  {
    keyword: 'Coffee Grinder',
    searchVolume: 125000,
    trend: '+15%',
    competition: 'High',
    avgPrice: 35.99,
    topBrands: ['JavaPresse', 'Hario', 'Porlex'],
  },
];

export const MOCK_USER_SETTINGS = {
  name: 'Mongo 老师',
  email: 'mongo@example.com',
  plan: 'professional',
  quota: {
    used: 8,
    total: 10,
  },
  preferences: {
    defaultMarketplace: 'US',
    language: 'zh-CN',
    notifications: true,
  },
};

export const MOCK_TEAM_MEMBERS = [
  {
    id: 'u1',
    name: 'Mongo 老师',
    email: 'mongo@example.com',
    role: 'owner',
    avatar: 'M',
    joinedAt: '2024-01-01',
  },
  {
    id: 'u2',
    name: '运营小王',
    email: 'wang@example.com',
    role: 'member',
    avatar: 'W',
    joinedAt: '2024-01-15',
  },
  {
    id: 'u3',
    name: '设计小李',
    email: 'li@example.com',
    role: 'member',
    avatar: 'L',
    joinedAt: '2024-02-01',
  },
];

export const MOCK_PROJECT_STATS = {
  totalProjects: 12,
  completedProjects: 8,
  analyzingProjects: 2,
  draftProjects: 2,
  totalListings: 24,
  avgComplianceScore: 0.92,
  avgGenerationTime: 12, // minutes
};
