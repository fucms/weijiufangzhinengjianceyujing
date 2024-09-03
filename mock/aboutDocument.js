const Mock = require('mockjs')

module.exports = [
  {
    url: '/vue-element-admin/MoldDetails/TableList',
    type: 'get',
    response: (config) => {
      return Mock.mock({
        code: 20000,
        msg: 'success',
        total: 9,
        'items|9': [
          {
            'id+1': 1,
            code: /^[0-9]{7}/,
            name: /^T[0-9]{3}-[A-z]{4}$/,
            price: '@integer(1, 10000)',
            color: '@color',
            type1: '@integer(0,1)',
            type2: '@integer(1,5)',
            type3: '@integer(0,1)',
            code1: /^[0-9]{7}/,
            code2: '@cname',
            code3: '@region',
            code4: '2023-10-@integer(1, 31)',
            code5: '@pick(["未开始", "进行中", "已完成"])',
            code6: '1996-10-@integer(1, 31)',
            code7: '@pick(["钢筋混凝土", "砖混", "木结构", "钢结构"])',
            code8: '@pick(["合格", "不合格", "待鉴定"])',
            code9: '@integer(1, 100)',
            code10: '测试数据',

            hazardDescription: '@csentence(5, 10)', // 随机生成 5-10 个单词的句子
            rectificationMeasures: '@csentence(10, 20)', // 随机生成 10-20 个单词的句子
            rectificationTime: '2023-10-@integer(1, 31)',
            rectificationResponsible: '@cname', // 随机生成一个名字
            reviewer: '@cname', // 随机生成一个名字

            departmentName: '@cword(5, 10)', // Random department name with 5 to 10 characters
            organizationName: '@cword(5, 10)', // Random organization name with 5 to 10 characters
            contactPersonName: '@cname()', // Random full name
            contactPhone: /1[3-9]\d{9}/, // Random phone number starting with 1 and followed by 10 digits
            email: '@email()', // Random email
            emergencyDuties: '@csentence(10, 20)',

            warningTitle: '@ctitle(5, 15)', // 随机生成中文标题，长度在 5 到 15 个字之间
            publishingDepartment: '@cword(3, 5)', // 随机生成部门名称，长度在 3 到 5 个字母之间
            publishingTime: '2023-10-@integer(1, 31)', // 随机生成发布时间
            warningArea: '@county(true)', // 随机生成预警区域，县级行政区

            'eventType|1': ['火灾', '洪水', '地震', '交通事故', '停电'],
            'eventDescription|1': [
              '市中心某大厦发生火灾，火势蔓延迅速',
              '河水暴涨，多个地区被淹',
              '震中在市郊，震感强烈',
              '高速公路发生多车连环相撞',
              '城区大面积停电，原因不明'
            ],
            'emergencyPersonnel|1': [
              '消防队员', '救援队', '警察', '电力维修工', '医护人员'
            ],
            'disposalMeasures|1': [
              '立即疏散人群并展开灭火工作',
              '紧急救援，安置受灾群众',
              '启动应急预案，组织救援',
              '封锁事故现场，疏导交通',
              '抢修电力设备，恢复供电'
            ],

            eventName: '@csentence(3, 5)', // 随机生成3到5个单词组成的事件名称
            eventType: '@pick(["自然灾害", "公共安全", "基础设施", "社会事件"])', // 从四个选项中随机选择一个事件类型
            participatingDepartments: '@pick(["消防局", "公安局", "交通局", "卫生局", "环保局"])', // 随机选择一个参与部门

            drillName: '@ctitle(5, 10)', // 随机生成演练名称
            drillDate: '2023-10-@integer(1, 31)', // 随机生成演练日期
            participants: '@cname, @cname', // 随机生成参与人员姓名
            drillContent: '@cparagraph(2, 5)', // 随机生成演练内容

            planName: '@ctitle(5, 10)', // 预案名称
            planCategory: '@pick(["消防预案", "自然灾害预案", "应急医疗预案", "安全生产预案"])', // 预案类别
            applicableScope: '@city', // 适用范围
            planContent: '@cparagraph(1, 3)', // 预案内容
            reviewStatus: '@pick(["已审核", "未审核", "审核中"])', // 审核状态

            taskName: '@ctitle(5, 10)', // 随机生成任务名称，5到10个字
            buildingId: '@id()', // 随机生成房屋编号
            inspector: '@cname()', // 随机生成巡检人员名字
            inspectionTime: '2023-10-@integer(1, 31)', // 随机生成巡检时间
            'taskStatus|1': ['待处理', '处理中', '已完成', '未完成'], // 随机生成任务状态

            'warningType|1': ['火灾警告', '洪水警告', '地震警告', '高温警告', '暴风雪警告'],
            'warningContent|1': [
              '发现火灾隐患，请立即撤离。',
              '洪水即将来临，请转移至高处。',
              '地震预警，注意避难。',
              '高温天气，注意防暑。',
              '暴风雪将至，减少外出。'
            ],
            'riskArea|1': ['市中心', '沿海地区', '山区', '郊区', '工业区'],
            'emergencyMeasures|1': [
              '立即撤离至安全地带。',
              '加强防范措施，转移易损物品。',
              '组织居民疏散，进入避难所。',
              '提供防暑降温设施。',
              '准备好御寒物资，减少外出。'
            ],
            'handlingStatus|1': ['待处理', '处理中', '已处理', '已关闭'],

            crackWarning: '@cword(2, 4)裂痕告警',
            shiftWarning: '@cword(2, 4)偏移告警',
            settlementWarning: '@cword(2, 4)沉降告警',

            workOrderName: '@ctitle(5, 10)', // 工单名称
            createDate: '2023-10-@integer(1, 31)', // 创建日期
            patrolArea: '@county(true)', // 巡防区域
            assignedPerson: '@cname', // 指派人员
            status: '@pick(["待处理", "处理中", "已完成", "已关闭"])', // 处理情况

            communityName: '@cword(5, 10)', // 所属小区
            neighborhoodName: '@cword(5, 10)', // 所属社区
            communityCode: '@integer(1000, 9999)', // 社区编码
            buildingGrade: '@pick(["一类", "二类", "三类", "四类"])', // 楼房等级
            address: '@county(true)', // 房屋地址
            buildingArea: '@integer(50, 200)㎡', // 建筑面积
            constructionYear: '1990', // 建造年代

            checkDate: '2023-10-@integer(1, 31)', // 排查日期
            checkPerson: '@cname()', // 排查人员
            checkLocation: '@city(true)', // 排查地点
            hazardType: '@cword(5, 10)', // 隐患类型

            buildingName: '@ctitle(5, 10)', // 房屋名称
            inspectionDate: '2023-10-@integer(1, 31)', // 巡检日期
            // inspector: '@cname', // 巡检人员
            inspectionContent: '@cparagraph(1, 3)', // 巡检内容
            inspectionResult: '@pick(["合格", "不合格", "待处理"])', // 巡检结果

            settlementRecord: '@cword(5)', // 沉降记录
            crackRecord: '@cword(5)', // 裂痕记录
            offsetRecord: '@cword(5)', // 偏移记录

            'HouseHealthLevel|1': ['优', '良', '中', '差'],
            'HouseHealthScore|1-100.1': 1,

            installationCommunity: '@cword(3, 5) 小区', // 安装小区
            installationLocation: '@county(true)', // 安装地点
            deviceType: '@cword(3, 5)', // 设备类型
            deviceName: '@cword(5, 8)', // 设备名称
            deviceThreshold: '@integer(1, 100)', // 设备阈值
            deviceBrand: '@cword(3, 5)', // 设备品牌

            'ProtocolIntegration|1': ['协议接口已完成对接测试', '协议对接成功，数据正常', '对接中，等待验证'],
            'CrackGaugeDeviceIntegration|1': ['裂痕数据采集中', '裂痕监测设备运行正常', '设备已校准，测试合格'],
            'OffsetDeviceIntegration|1': ['偏移仪设备数据稳定', '数据传输稳定', '偏移数据有波动'],
            'SettlementDeviceIntegration|1': ['沉降仪设备数据采集正常', '沉降监测数据已上传', '设备维护中'],

            'safetyAnalysis|1': ['无明显隐患', '电气设备检查', '消防设备齐全'], // 安全监测分析
            'environmentAnalysis|1': ['空气清新', '水质较好', '噪音较大'], // 环境因素分析
            'surroundingFactorsAnalysis|1': ['绿化良好', '交通拥堵', '周边建筑影响'], // 周边因素分析

            // 'email': '@csentence(10, 20)',  随机生成10到20个汉字的句子，模拟邮件内容
            'sms': '短信测试', // 随机生成5到15个汉字的句子，模拟短信内容
            'earthquakeWarning|1': ['地震预警信息，请注意安全', '地震预警测试信息'], // 随机生成8到18个汉字的句子，模拟地震预警内容
            'typhoonWarning|1': ['台风预警内容示例', '台风预警，请做好防护措施'], // 随机生成8到18个汉字的句子，模拟台风预警内容
            'weatherInfo|1': ['明天可能有雨，记得带伞', '今天天气晴朗，温度适宜'],

            'menuName': '@ctitle(3, 5)', // 模拟中文菜单名称
            'type|1': ['GET', 'POST', 'PUT', 'DELETE'], // 模拟请求类型
            'requestUrl': '@url', // 模拟请求地址

            userName: '@cname', // 随机生成中文姓名
            loginAccount: '@word(5, 10)', // 随机生成5-10个字母的账户名
            roleType: '@pick(["管理员", "普通用户", "审核员", "访客"])', // 从角色类型中随机挑选
            cityName: '@city', // 随机生成城市名称
            phoneNumber: /^1[3456789]\d{9}$/, // 随机生成手机号
            createTime: '2023-10-@integer(1, 31)', // 随机生成创建时间

            // 'taskName': '@ctitle(5, 10)', // 随机生成5到10个汉字的任务名称
            'startTime': '2023-09-@integer(1, 31)', // 随机生成日期时间
            'endTime': '2023-10-@integer(1, 31)', // 随机生成日期时间

            'areaName': '@region', // 区域名称
            'areaCode|1000-9999': 1, // 区域编码，随机生成 1000-9999 之间的数字
            'areaType|1': ['城市', '农村'], // 区域类型，随机选择'城市'或'农村'

            'systemModule': '@cword(3, 5)模块', // 随机生成3-5个字的模块名称
            'operationType': '@pick(["新增", "删除", "更新", "查询"])', // 随机选择操作类型
            'operator': '@cname', // 随机生成中文姓名
            'department': '@cword(3, 5)部门', // 随机生成部门名称
            'ipAddress': '@ip', // 随机生成IP地址
            'operationLocation': '@city', // 随机生成操作地点
            'operationTime': '2023-09-@integer(1, 31)'// 随机生成操作时间
          }
        ]
      })
    }
  },
  {
    url: '/vue-element-admin/MoldDetails/Delete/{id}',
    type: 'delete',
    response: (config) => {
      return Mock.mock({
        code: 20000,
        data: '删除成功'
      })
    }
  },
  {
    url: '/vue-element-admin/MoldDetails/Add',
    type: 'post',
    response: (config) => {
      return Mock.mock({
        code: 20000,
        data: [
          {
            id: '@id',
            name: /^T[0-9]{3}-[A-z]{4}$/,
            typeNumber: /^1[0-9]{6}$/,
            MoldOpeningTime: '@datetime',
            state: '@integer(1, 4)',
            Modulus: '@integer(1, 100)',
            PartNumber: /^1[0-9]{4}$/
          }
        ]
      })
    }
  },
  {
    url: '/vue-element-admin/MoldDetails/ProjectTaskListAll',
    type: 'get',
    response: (config) => {
      return Mock.mock({
        code: 20000,
        items: [
          {
            id: '1',
            name: /^T[0-9]{3}-[A-z]{4}$/,
            plannedStartDate: '@datetime',
            plannedEndDate: '@datetime',
            parent: null
          },
          {
            id: '@id',
            name: /^T[0-9]{3}-[A-z]{4}$/,
            plannedStartDate: '@datetime',
            plannedEndDate: '@datetime',
            parent: 1,
            isMilestone: '@boolean'
          },
          {
            id: '2',
            name: /^T[0-9]{3}-[A-z]{4}$/,
            plannedStartDate: '@datetime',
            plannedEndDate: '@datetime',
            parent: null
          },
          {
            id: '@id',
            name: /^T[0-9]{3}-[A-z]{4}$/,
            plannedStartDate: '@datetime',
            plannedEndDate: '@datetime',
            parent: 2,
            isMilestone: '@boolean'
          },
          {
            id: '@id',
            name: /^T[0-9]{3}-[A-z]{4}$/,
            plannedStartDate: '@datetime',
            plannedEndDate: '@datetime',
            parent: 2,
            isMilestone: '@boolean'
          },
          {
            id: '@id',
            name: /^T[0-9]{3}-[A-z]{4}$/,
            plannedStartDate: '@datetime',
            plannedEndDate: '@datetime',
            parent: 2,
            isMilestone: '@boolean'
          },
          {
            id: '@id',
            name: /^T[0-9]{3}-[A-z]{4}$/,
            plannedStartDate: '@datetime',
            plannedEndDate: '@datetime',
            parent: 2,
            isMilestone: '@boolean'
          }
        ]
      })
    }
  }
]
