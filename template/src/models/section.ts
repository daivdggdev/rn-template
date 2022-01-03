import { commonExtend } from '@/utils/model';
import { DvaModel } from '../types/dva';
import { cloneDeep } from 'lodash';

export interface State {
  sectionData: any;
  personalData: any;
  unitData: any;
  controlData: any;
}

const model: DvaModel<State> = {
  namespace: 'section',
  state: {
    unitData: {
      basicsInfo: [
        {
          label: '单位名称',
          defaultValue: '丽水华数数字电视有限公司',
          felid: 'unitName'
        },
        {
          label: '单位电话',
          defaultValue: '0577-123456',
          felid: 'unitPhone'
        },
        {
          label: '单位网址',
          defaultValue: 'www.ceshi.com',
          felid: 'unitURL'
        },
        {
          label: '单位地址',
          defaultValue: '丽水市莲都区中东路149号',
          felid: 'unitAddress'
        }
      ],
      businessInfo: [
        {
          label: '法定代表人',
          defaultValue: '',
          felid: 'legal'
        },
        {
          label: '所属行业',
          defaultValue: '科技推广和应用服务业',
          felid: 'industry'
        },
        {
          label: '成立日期',
          defaultValue: '2015-05-15',
          felid: 'time'
        },
        {
          label: '统一社会信用代码',
          defaultValue: '统一社会信用代码',
          felid: 'code'
        }
      ]
    },
    sectionData: [
      {
        name: '消控室',
        nameText1: '在职人数',
        nameText2: '5人',
        nameTextType: '1',
        principalName: '王某某',
        image: 'https://lidig-smart.oss-cn-hangzhou.aliyuncs.com/lishui/zhongdian.png',
        weak1: '负责人：王某某',
        weak2: '13122876654',
        id: 1,
        tagStr: '职员'
      },
      {
        name: '财务室',
        nameText1: '在职人数',
        nameText2: '5人',
        nameTextType: '2',
        principalName: '王某某',
        image: 'https://lidig-smart.oss-cn-hangzhou.aliyuncs.com/lishui/zhongdian.png',
        weak1: '负责人：王某某',
        weak2: '13122876654',
        id: 2,
        tagStr: ''
      },
      {
        name: '保密室',
        nameText1: '在职人数',
        nameText2: '5人',
        nameTextType: '1',
        principalName: '王某某',
        image: 'https://lidig-smart.oss-cn-hangzhou.aliyuncs.com/lishui/zhongdian.png',
        weak1: '联系方式',
        weak2: '13122876654',
        id: 3,
        tagStr: '职员'
      }
    ],
    personalData: [
      {
        name: '张某某',
        nameText1: '部门',
        nameText2: '行政中心',
        nameTextType: '1',
        image: 'https://lidig-smart.oss-cn-hangzhou.aliyuncs.com/lishui/6341635925399_.pic.jpg',
        weak1: '联系方式',
        weak2: '13122876654',
        id: 1,
        tagStr: '职员'
      },
      {
        name: '陈某某',
        nameText1: '部门',
        nameText2: '产品中心',
        nameTextType: '2',
        image: 'https://lidig-smart.oss-cn-hangzhou.aliyuncs.com/lishui/6351635925400_.pic.jpg',
        weak1: '联系方式',
        weak2: '13122876654',
        id: 2,
        tagStr: '主管'
      }
    ],
    controlData: [
      {
        name: '防爆盾',
        nameText1: '描述',
        nameText2: '防爆盾',
        image: 'https://lidig-smart.oss-cn-hangzhou.aliyuncs.com/lishui/fangbao.jpg',
        weak1: '有效期',
        weak2: '2021.10.1~2023.10.1',
        id: 1,
        tagStr: '职员'
      },
      {
        name: '警棍',
        nameText1: '描述',
        nameText2: '这是警棍',
        image: 'https://lidig-smart.oss-cn-hangzhou.aliyuncs.com/lishui/jinggun2.jpg',
        weak1: '有效期',
        weak2: '2021.10.1~2023.10.1',
        id: 2,
        tagStr: '职员'
      }
    ]
  },
  effects: {
    // 删除重点部门数据
    *deleteSectionData({ payload }, { put, select }) {
      const data = yield select((state) => state.section.sectionData);
      const newData = data.filter(({ id }) => id !== payload.id);
      yield put({
        type: 'updateState',
        payload: { sectionData: newData }
      });
    },
    // 修改重点部门数据
    *updateSectionData({ payload }, { put, select }) {
      const { val } = payload;
      let data = yield select((state) => state.section.sectionData);
      let newData: any = [];
      data.map((item) => {
        if (item.id === val.id) {
          const obj = cloneDeep(item);
          obj.name = val.name;
          obj.nameText2 = val.department;
          obj.principalName = val.principalName;
          obj.weak2 = val.phone;
          obj.image = val.image;
          newData.push(obj);
        } else {
          newData.push(item);
        }
      });
      yield put({
        type: 'updateState',
        payload: { sectionData: newData }
      });
    },
    // 新增
    *addSectionData({ payload }, { put, select }) {
      const { val } = payload;
      let data = yield select((state) => state.section.sectionData);
      let newData = cloneDeep(data);
      const obj = {
        name: val.name,
        nameText1: '在职人数',
        nameText2: val.department,
        nameTextType: '1',
        principalName: val.principalName,
        image: val.image,
        weak1: `负责人：${val.principalName}`,
        weak2: val.phone,
        id: data.length + 1,
        tagStr: '职员'
      };
      newData.push(obj);
      yield put({
        type: 'updateState',
        payload: { sectionData: newData }
      });
    },
    // 一下是从业列表
    // 删除
    *deletePersonalData({ payload }, { put, select }) {
      const data = yield select((state) => state.section.personalData);
      const newData = data.filter(({ id }) => id !== payload.id);
      yield put({
        type: 'updateState',
        payload: { personalData: newData }
      });
    },
    // 修改
    *updatePersonalData({ payload }, { put, select }) {
      const { val } = payload;
      let data = yield select((state) => state.section.personalData);
      let newData: any = [];
      data.map((item) => {
        if (item.id === val.id) {
          const obj = cloneDeep(item);
          obj.name = val.name;
          obj.nameText2 = val.department;
          obj.tagStr = val.level;
          obj.weak2 = val.phone;
          obj.image = val.image;
          newData.push(obj);
        } else {
          newData.push(item);
        }
      });
      yield put({
        type: 'updateState',
        payload: { personalData: newData }
      });
    },
    // 新增
    *addPersonalData({ payload }, { put, select }) {
      const { val } = payload;
      let data = yield select((state) => state.section.personalData);
      let newData = cloneDeep(data);
      const obj = {
        name: val.name,
        nameText1: '部门',
        nameText2: val.department,
        nameTextType: '1',
        image: val.image,
        weak1: '联系方式',
        weak2: val.phone,
        id: data.length + 1,
        tagStr: val.level
      };
      newData.push(obj);
      yield put({
        type: 'updateState',
        payload: { personalData: newData }
      });
    },
    // 以下是物防人员
    // 删除
    *deleteControlData({ payload }, { put, select }) {
      const data = yield select((state) => state.section.controlData);
      const newData = data.filter(({ id }) => id !== payload.id);
      yield put({
        type: 'updateState',
        payload: { controlData: newData }
      });
    },
    // 修改
    *updateControlData({ payload }, { put, select }) {
      const { val } = payload;
      let data = yield select((state) => state.section.controlData);
      let newData: any = [];
      data.map((item) => {
        if (item.id === val.id) {
          const obj = cloneDeep(item);
          obj.name = val.name;
          obj.image = val.image;
          obj.nameText2 = val.des;
          obj.tagStr = val.level;
          obj.weak2 = val.time;
          newData.push(obj);
        } else {
          newData.push(item);
        }
      });
      yield put({
        type: 'updateState',
        payload: { controlData: newData }
      });
    },
    // 新增
    *addControlData({ payload }, { put, select }) {
      const { val } = payload;
      let data = yield select((state) => state.section.controlData);
      let newData = cloneDeep(data);
      const obj = {
        name: val.name,
        nameText1: '描述',
        nameText2: val.des,
        image: val.image,
        weak1: '有效期',
        weak2: val.time,
        id: data.length + 1,
        tagStr: '职员'
      };
      newData.push(obj);
      yield put({
        type: 'updateState',
        payload: { controlData: newData }
      });
    },
    // 修改单位信息
    *updateUnitData({ payload }, { put, select }) {
      const { val } = payload;
      let data = yield select((state) => state.section.unitData);
      let newData: any = cloneDeep(data);
      newData.basicsInfo.map((item) => {
        for (let key in val) {
          if (item.felid === key) {
            item.defaultValue = val[key];
          }
        }
      });
      newData.businessInfo.map((item) => {
        for (let key in val) {
          if (item.felid === key) {
            item.defaultValue = val[key];
          }
        }
      });
      yield put({
        type: 'updateState',
        payload: { unitData: { ...newData } }
      });
    }
  }
};

export default commonExtend(model);
