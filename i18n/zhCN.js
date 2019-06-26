const tabbar = [{
  pagePath: "/pages/Repairman/Index/Index",
  text: "首页",
  iconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_home.png",
  selectedIconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_home_s.png",
}, {
  pagePath: "/pages/Repairman/Ticket/Ticket",
  text: "工单",
  iconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_ticket.png",
  selectedIconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_ticket_s.png",
  text: "工单"
}, {
  pagePath: "/pages/Repairman/Create/Create",
  text: "创建",
  iconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_create.png",
  selectedIconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_create_s.png"
}, {
  pagePath: "/pages/Repairman/Setting/Setting",
  text: "我的",
  iconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_mine.png",
  selectedIconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_mine_s.png",
}];

const index = {
  navTitle: '首页',
  cutoffTiket: '今日截止工单',
  overdueTiket: '逾期工单',
  duringTiket: '进行中工单',
  releasedTiket: '已发布工单',
  closedTiket: '已关闭工单',
  ticketStatus: '工单分布'
}

const maintenanceLanguage = {
  releaseDate: '发布时间',
  releaseUser: '发布人',
  createUser: '申请人',
  createDate: '申请时间',
  maintenanceUser: '维修人',
  closeUser: '处理人',
  closeDate: '关闭时间',
  closerReason: '关闭原因',
  closerReasonList: ['系统经理发布审核未通过', '区域经理发布审核未通过', '系统经理中止工单', '工单因返修单而关闭', '工单正常关闭', '设备返厂维修关闭'],
  expectedDate: '处理期限',
  finishDate: '完成时间',
  finished: '工单终止',
  stationName: '电站名称',
  infomation: '工单基本信息',
  alarmLevel: '工单类型',
  alarmType: '故障代号',
  description: '工单描述',
  uploadPhoto: '上传照片',
  relatedAsset: '已关联资产',
  input: '手动输入',
  scan: '扫描',
  deal: '处理要求',
  type: '处理分类',
  maintenanceId: '工单号',
  status: '工单状态',
  remainingTime: '剩余时间',
  stationInfo: '电站信息',
  address: '地址',
  photo: '现场照片',
  releaseInfo: '发布信息',
  review: '审核',
  areaReview: '区域经理审核',
  systemReview: '系统经理审核',
  reviewUser: '审核人',
  reviewDate: '审核时间',
  reviewResult: '审核结果',
  remarks: '备注',
  process: '处理过程',
  acceptDate: '接单时间',
  startDate: '首次扫描时间',
  detail: '查看详情',
  check: '验收',
  areaCheck: '区域经理验收',
  systemCheck: '系统经理验收',
  checkUser: '验收人',
  checkDate: '验收时间',
  checkResult: '验收结果',
  result: '处理结果',
  overdueTime: '是否超时',
  assetId: '资产编号',
  maintenanceType: '处理分类',
  newAssetId: '替换设备',
  conclusion: '处理结论',
  picture: '图片',
  viewPic: '查看图片',
  score: '评分',
  overdue: '维修超时'
}

const assetLanguage = {
  confirmAsset: '请确认资产',
  assetId: '资产编号',
  deviceName: '设备名称',
  deviceSerialId: '序列号',
  deviceModuleName: '模板类型',
  devCategoryName: '资产类型',
  module: '型号',
  companyName: '设备厂家',
  manufactureDate: '出厂日期',
  expirationDate: '质保日期',
  purchaseDate: '购买日期',
  assetStatus: '资产状态',
  maintenanceNum: '维修次数',
  error: '扫描失败，请再次扫描或手动输入',
  none: '未查询到相关资产',
  exist: '已添加该资产',
}

const ticket = {
  navTitle: '工单',
  tabs: [{
    text: '待处理'
  }, {
    text: '处理中'
  }, {
    text: '已关闭'
  }],
  tip: '列表',
  all: '全部'
}

const create = {
  navTitle: '创建', 
  alarmLevel: ["故障", "告警", "巡检"],
  maintenanceType: ["安装", "换机", "维修", "调试", "巡检"],
  assetStatus: ["备件", "在线", "报废", "回收"],
  submit: '提交',
  confirm: '确定',
  cancel: '取消',
  enterAssetId: '请输入设备编号',
  illegal: '非法时限',
  success: '创建成功',
  fail: '创建失败'
}

const setting = {
  navTitle: '设置',
  account: '账号',
  language: "中文/English",
  about: "关于",
  logout: "安全退出"
}

const account = {
  title: "DSOP",
  accountInfo: "账号信息",
  username: "用户名",
  realName: "真实姓名",
  nickName: "工作昵称",
  sex: "性别",
  department: "部门",
  position: "职位",
  phone: "电话",
  stationInfo: "电站信息",
  name: "名称",
  enName: "英文名称",
  type: "电站类型",
  projectId: "电站通信编号",
  capacity: "装机容量",
  address: "地址",
  gridPrice: "上网电价",
  cityPrice: "市电平均电价",
  ratio: "自发自用比例",
  email: "邮箱",
  roof: "屋顶分布式",
  ground: "地面集中式",
  male: "男",
  female: "女",
  companyInfo: "组织机构信息",
  postcode: "邮政编码"
}

const about = {
  navTitle: '关于',
  title: '关于DSOP',
  copyright: '版权所有 2019 西门子中国有限公司,保留所有权利',
  content: '该小程序是SIEMENS DSOP数字光伏运维平台的一款手机应用软件，用户可查看电站的实时发电数据，监测电站的运行情况',
  partner: '合作开发',
  version: '版本号'
}

const ticketTodo = {
  navTitle: '工单',
  status: ["创建", "待发布", "待审核", "待接单", "已接单", "处理中", "待验收", "待关闭", "已关闭"],
  orderType: ["资产性工单", "非资产性工单"],
  maintenanceType: ["安装", "换机", "维修", "调试", "巡检"],
  areaPassStatus0: ["不通过", "通过", "关闭"],
  areaPassStatus1: ["不通过", "通过"],
  systemPassStatus0: ["不通过", "通过", "关闭"],
  systemPassStatus1: ["不通过", "关闭", "工单返工", "设备返厂维修"],
  systemPassStatus2: ["通过", "关闭"],
  alarmLevel: ["故障", "告警", "巡检"],
  edit: '提交修改',
  operate: '提交',
  confirm: '确定',
  close: '关闭',
  order: '接单',
  cancel: '取消',
  enterAssetId: '请输入设备编号',
  illegal: '非法时限',
  day: '天',
  hour: '小时',
  min: '分',
  second: '秒',
  timeUp: '已超时',
  imputTime: '请输入时限',
  success: '提交成功',
  fail: '提交失败',
  yes: '是',
  no: '否'
}

const ticketDoing = {
  navTitle: '处理中',
  status: ["创建", "待发布", "待审核", "待接单", "已接单", "处理中", "待验收", "待关闭", "已关闭"],
  orderType: ["资产性工单", "非资产性工单"],
  maintenanceType: ["安装", "换机", "维修", "调试", "巡检"],
  alarmLevel: ["故障", "告警", "巡检"],
  areaPassStatus0: ["不通过", "通过", "关闭"],
  areaPassStatus1: ["不通过", "通过"],
  systemPassStatus0: ["不通过", "通过", "关闭"],
  recall: '撤回',
  handle: '处理',
  close: '关闭',
  day: '天',
  hour: '小时',
  min: '分',
  second: '秒',
  timeUp: '已超时',
  yes: '是',
  no: '否',
  success: '提交成功',
  fail: '提交失败',
}

const ticketFinished = {
  navTitle: '已关闭',
  status: ["创建", "待发布", "待审核", "待接单", "已接单", "处理中", "待验收", "待关闭", "已关闭"],
  orderType: ["资产性工单", "非资产性工单"],
  maintenanceType: ["安装", "换机", "维修", "调试", "巡检"],
  orderLevel: ["紧急", "高", "中", "低"],
  areaPassStatus1: ["不通过", "通过"],
  systemPassStatus1: ["不通过", "关闭", "工单返工", "设备返厂维修", "工单终止"],
  day: '天',
  hour: '小时',
  min: '分',
  second: '秒',
  yes: '是',
  no: '否'
}

const handleRecognise = {
  navTitle: '维修步骤',
  first: '第一步：请提供现场的设备编号',
  confirmAsset: '确认资产',
  mode1: '方式1',
  mode2: '方式2',
  scan: '扫描',
  input: '输入',
  asset: '匹配的资产',
  assetId: '资产编号',
  devCategory: '设备类型',
  next: '下一步',
  confirm: '确定',
  cancel: '取消',
  enterAssetId: '请输入设备编号',
  error: '扫描失败，请再次扫描或手动输入',
  confirmError: '请先确认资产',
  tip: '安全提示',
  tipContent: '维修前请将设备进行断电操作',
  assetError: '非工单关联资产',
  none: '未查询到相关资产'
}

const handleProcess = {
  navTitle: '维修步骤',
  second: '第二步：请完善处理步骤',
  first: '第一步：请完善处理步骤',
  before: '处理前',
  during: '处理中',
  after: '处理后',
  next: '下一步',
  description: '文字描述',
  submit: '提交',
  next: '下一步',
  confirm: '确定',
  cancel: '取消',
  enterAssetId: '请输入设备编号',
  error: '请完成全部步骤',
  success: '提交成功',
  fail: '提交失败'
}

const handleConclusion = {
  navTitle: '维修步骤',
  maintenanceType: ["安装", "换机", "维修", "调试", "巡检", "返厂维修"],
  assetStatus: ["备件", "在线", "报废", "回收"],
  assetStatusAll: ["无效", "备件", "在线", "报废", "回收"],
  third: '第三步：请完善处理结论',
  second: '第二步：请完善处理结论',
  type: '维修分类',
  delete: '删除',
  assetId: '资产编号',
  scan: '扫描',
  input: '输入',
  assetType: '设备类型',
  assetStatus: '设备状态',
  newAssetId: '替换资产编号',
  result: '处理结论',
  addAsset: '添加资产',
  previous: '上一步',
  next: '提交验收',
  confirm: '确定',
  inputError: '请输入处理结论'
}

const processDetail = {
  before: '处理前',
  during: '处理中',
  after: '处理后',
  description: '文字描述'
}

const relatedAssets = {
  navTitle: '关联资产',
  maintenanceType: ["安装", "换机", "维修", "调试", "巡检"],
}

const login = {
  forget: "忘记密码？",
  username: "用户名",
  password: "密码",
  login: "登录",
  userErr: "用户不存在",
  pwdErr: "用户密码错误",
  emptyErr: "用户名密码不能为空",
  forgetTitle: "忘记密码",
  email: "邮箱",
  send: "发送",
  cancel: "取消",
  title: "DSOP 数字光伏运维平台",
  copyright: "版权所有 2019 西门子中国有限公司,保留所有权利",
  error: '非运维用户'
}

export default {
  tabbar: tabbar,
  index: index,
  ticket: ticket,
  create: create,
  setting: setting,
  account: account,
  about: about,
  ticketTodo: ticketTodo,
  ticketDoing: ticketDoing,
  ticketFinished: ticketFinished,
  relatedAssets: relatedAssets,
  login: login,
  handleRecognise: handleRecognise,
  handleProcess: handleProcess,
  handleConclusion: handleConclusion,
  maintenanceLanguage: maintenanceLanguage,
  assetLanguage: assetLanguage
}