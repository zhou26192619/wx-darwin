const tabbar = [{
  pagePath: "/pages/Repairman/Index/Index",
  text: "Home",
  iconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_home.png",
  selectedIconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_home_s.png"
}, {
  pagePath: "/pages/Repairman/Ticket/Ticket",
  text: "Ticket",
  iconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_ticket.png",
  selectedIconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_ticket_s.png"
}, {
  pagePath: "/pages/Repairman/Create/Create",
  text: "Create",
  iconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_create.png",
  selectedIconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_create_s.png"
}, {
  pagePath: "/pages/Repairman/Setting/Setting",
  text: "Mine",
  iconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_mine.png",
  selectedIconPath: "https://dsop.dpv.siemens.com.cn/cloud/dsom/tabbar_mine_s.png"
}];

const index = {
  navTitle: 'Home',
  cutoffTiket: "Today's deadline ticket",
  overdueTiket: 'Overdue Ticket',
  duringTiket: 'Processing Ticket',
  releasedTiket: 'Released Ticket',
  closedTiket: 'Closed Ticket',
  ticketStatus: 'Ticket Distribution'
}

const maintenanceLanguage = {
  releaseDate: 'Release Date',
  releaseUser: 'Publisher',
  createUser: 'Applicant',
  createDate: 'Create Date',
  maintenanceUser: 'Maintenance Staff',
  closeUser: 'Close User',
  closeDate: 'Close Date',
  closerReason: 'Close Reason',
  closerReasonList: ['System manager close in review.', 'Area manager close in review.', 'System manager shut down.', 'Ticket is closed due to repair order', 'Ticket closed normally.', 'Device return to factory for maintenance'],
  expectedDate: 'Processing Period',
  finishDate: 'Complete Time',
  finished: 'Ticket Termination',
  stationName: 'Station Name',
  infomation: 'Ticket Information',
  alarmLevel: 'Ticket Type',
  alarmType: 'Alarm Type',
  description: 'Description',
  uploadPhoto: 'Upload Photo',
  relatedAsset: 'Related Asset',
  input: 'Input',
  scan: 'Scan',
  deal: 'Processing Requirements',
  type: 'Processing Type',
  maintenanceId: 'Ticket Number',
  status: 'Ticket Status',
  remainingTime: 'Remaining time',
  stationInfo: 'Station Infomation',
  address: 'Address',
  photo: 'Photo',
  releaseInfo: 'Release Infomation',
  review: 'Review',
  areaReview: 'Area Review',
  systemReview: 'System Review',
  reviewUser: 'Reviewer',
  reviewDate: 'Review Date',
  reviewResult: 'Review Results',
  remarks: 'Remarks',
  process: 'Handle Process',
  acceptDate: 'Accept Date',
  startDate: 'Scan Date',
  detail: 'Detatil',
  check: 'Acceptance',
  areaCheck: 'Area Acceptance',
  systemCheck: 'System Acceptance',
  checkUser: 'Acceptor',
  checkDate: 'Acceptance Time',
  checkResult: 'Acceptance Result',
  result: 'Result',
  overdueTime: 'Time Out',
  assetId: 'Asset Id',
  maintenanceType: 'Maintenance Type',
  newAssetId: 'Replacement Device',
  conclusion: 'Conclusion',
  picture: 'Photo',
  viewPic: 'View Photo',
  score: 'Score',
  overdue: 'Time out'
}

const assetLanguage = {
  confirmAsset: 'Confirm Asset',
  assetId: 'Asset Id',
  deviceName: 'Device Name',
  deviceSerialId: 'Device Serial Id',
  deviceModuleName: 'Device Module',
  devCategoryName: 'Device Category',
  module: 'Module',
  companyName: 'Device Company',
  manufactureDate: 'Manufacture Date',
  expirationDate: 'Expiration Date',
  purchaseDate: 'Purchase Date',
  assetStatus: 'Asset Status',
  maintenanceNum: 'Maintenance Count',
  error: 'Scan failed, please scan again or manually.',
  none: 'No related assets were found.',
  exist: 'The asset has been added.',
}

const ticket = {
  navTitle: 'Ticket',
  tabs: [{
    text: 'To be processed'
  }, {
    text: 'Processing'
  }, {
    text: 'Closed'
  }],
  tip: 'List',
  all: 'All'
}

const create = {
  navTitle: 'Create',
  alarmLevel: ["Fault", "Alarm", "Inspection"],
  maintenanceType: ["Installation", "Replace", "Maintenance", "Debugging", "Inspection"],
  assetStatus: ["Spare parts", "Online", "Scrapped", "Recycling"],
  submit: 'Submit',
  confirm: 'OK',
  cancel: 'Cancel',
  enterAssetId: 'Please enter the asset Id',
  illegal: 'Illegal time limit',
  success: 'Create successfully',
  fail: 'Create failure'
}

const setting = {
  navTitle: 'Setting',
  account: 'Account',
  language: "中文/English",
  about: "About",
  logout: "Logout"
}

const account = {
  title: "DSOP",
  accountInfo: "Account Information",
  username: "Username",
  realName: "Real Name",
  nickName: "Job Nickname",
  sex: "Sex",
  department: "Department",
  position: "Position",
  phone: "Phone",
  stationInfo: "Station Information",
  name: "Name",
  enName: "English Name",
  type: "Station Type",
  projectId: "Project Id",
  capacity: "System Capacity",
  address: "Address",
  gridPrice: "On-grid price",
  cityPrice: "AVG City price",
  ratio: "Self-used Ratio",
  email: "E-mail",
  roof: "Roof distribution",
  ground: "Ground centralized",
  male: "Male",
  female: "Female",
  companyInfo: "Company Information",
  postcode: "Postcode"
}

const about = {
  title: 'About DSOP',
  copyright: 'Copyright Siemens Ltd. China, 2019, All rights reserved.',
  content: 'SIEMENS DSOP is a little program of SIEMENS digital solar operation platform through WeChart. Users can view the real-time data of power station and check the working status.',
  partner: 'Partner',
  version: 'Version'
}

const ticketTodo = {
  navTitle: 'Ticket',
  status: ["Create", "Pending release", "Pending Review", "Waiting Order", "Order received", "Processing", "Acceptance", "To be closed", "Closed"],
  orderType: ["Asset ticket", "Non-asset ticket"],
  maintenanceType: ["Installation", "Replace", "Maintenance", "Debugging", "Inspection"],
  areaPassStatus0: ["Fail", "Pass", "Close"],
  areaPassStatus1: ["Fail", "Pass"],
  systemPassStatus0: ["Fail", "Pass", "Close"],
  systemPassStatus1: ["Fail", "Close", "Ticket rework", "Device return to repair"],
  systemPassStatus2: ["Pass", "Close"],
  alarmLevel: ["Fault", "Alarm", "Inspection"],
  edit: 'Submit edit',
  operate: 'Submit',
  confirm: 'OK',
  close: 'Close',
  order: 'Orders',
  cancel: 'Cancel',
  enterAssetId: 'Please enter the Asset Id',
  illegal: 'Illegal time limit',
  day: 'Day',
  hour: 'Hour',
  min: 'Minute',
  second: 'Second',
  timeUp: 'Time out',
  inputTime: 'Please input a time',
  success: 'Submit successfully',
  fail: 'Submit failure',
  yes: 'Yes',
  no: 'No'
}

const ticketDoing = {
  navTitle: 'Ticket',
  status: ["Create", "Pending release", "Pending Review", "Waiting Order", "Order received", "Processing", "Acceptance", "To be closed", "Closed"],
  orderType: ["Asset ticket", "Non-asset ticket"],
  maintenanceType: ["Installation", "Replace", "Maintenance", "Debugging", "Inspection"],
  alarmLevel: ["Fault", "Alarm", "Inspection"],
  areaPassStatus0: ["Fail", "Pass", "Close"],
  areaPassStatus1: ["Fail", "Pass"],
  systemPassStatus0: ["Fail", "Pass", "Close"],
  recall: 'Recall',
  handle: 'Handle',
  close: 'Close',
  day: 'Day',
  hour: 'Hour',
  min: 'Minute',
  second: 'Second',
  timeUp: 'Time out',
  yes: 'Yes',
  no: 'No',
  success: 'Submit successfully',
  fail: 'Submit failure'
}

const ticketFinished = {
  navTitle: 'Ticket',
  status: ["Create", "Pending release", "Pending Review", "Waiting Order", "Order received", "Processing", "Acceptance", "To be closed", "Closed"],
  orderType: ["Asset ticket", "Non-asset ticket"],
  maintenanceType: ["Installation", "Replace", "Maintenance", "Debugging", "Inspection"],
  areaPassStatus1: ["Fail", "Pass"],
  systemPassStatus1: ["Fail", "Close", "Ticket rework", "Device return to repair", "Ticket Termination"],
  day: 'Day',
  hour: 'Hour',
  min: 'Minute',
  second: 'Second',
  yes: 'Yes',
  no: 'No',
}

const handleRecognise = {
  navTitle: 'Process',
  first: 'Step 1: Please provide the Asset Id on site',
  confirmAsset: 'Confirm Asset',
  mode1: 'Type 1',
  mode2: 'Type 2',
  scan: 'Scan',
  input: 'Input',
  asset: 'Asset',
  assetId: 'Asset Id',
  devCategory: 'Device Category',
  next: 'Next',
  confirm: 'OK',
  cancel: 'Cancel',
  enterAssetId: 'Please enter the Asset Id.',
  error: 'Scan failed, please scan again or manually.',
  confirmError: 'Please confirm the assets first.',
  tip: 'Tips',
  tipContent: 'Please power off the equipment before maintenance.',
  assetError: 'Not a asset ticket.',
  none: 'No related assets were found.'
}

const handleProcess = {
  navTitle: 'Process',
  second: 'Step 2: Please complete the processing steps',
  first: 'Step 1: Please complete the processing steps',
  before: 'Before',
  during: 'Processing',
  after: 'After',
  next: 'Next',
  description: 'Description',
  submit: 'Submit',
  next: 'Next',
  confirm: 'OK',
  cancel: 'Cancel',
  enterAssetId: 'Please enter the asset Id.',
  error: 'Please complete all steps.',
  success: 'Submit successfully',
  fail: 'Submit failure'
}

const handleConclusion = {
  navTitle: 'Process',
  maintenanceType: ["Installation", "Replace", "Maintenance", "Debugging", "Inspection", "Device return to repair"],
  assetStatus: ["Spare parts", "Online", "Scrapped", "Recycling"],
  assetStatusAll: ["Invalid", "Spare parts", "Online", "Scrapped", "Recycling"],
  third: 'Step 3: please complete the processing conclusion',
  second: 'Step 2: please complete the processing conclusion',
  type: 'Maintenance Type',
  delete: 'Delete',
  assetId: 'Asset Id',
  scan: 'Scan',
  input: 'Input',
  assetType: 'Asset Type',
  assetStatus: 'Asset Status',
  newAssetId: 'Replacement Device',
  result: 'Result',
  addAsset: 'Add Asset',
  previous: 'Previous',
  next: 'Submit Acceptance',
  confirm: 'OK',
  inputError: 'Please enter the processing conclusion'
}

const processDetail = {
  before: 'Before',
  during: 'Processing',
  after: 'After',
  description: 'Description'
}

const relatedAssets = {
  navTitle: 'Related Assets',
  maintenanceType: ["Installation", "Replace", "Maintenance", "Debugging", "Inspection"],
}

const login = {
  forget: "Forget Password?",
  username: "Username",
  password: "Password",
  login: "Login",
  userErr: "Invalid User",
  pwdErr: "Password Error",
  emptyErr: "Username and password are required",
  forgetTitle: "Forget Password",
  email: "E-mail",
  send: "Send",
  cancel: "Cancel",
  title: "Digital Solar Operation M",
  copyright: "Copyright Siemens Ltd. China, 2019, All rights reserved.",
  error: 'Not maintenance user'
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