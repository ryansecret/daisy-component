## Form 表单

用于收集、校验、提交数据的场景,由输入框、选择器、单选框、多选框等控件组成

### 典型表单


:::demo 在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker
```html
<el-form ref="form" :rules="rules" :model="form" label-width="80px">
  <el-form-item label="输入文本" prop="name">
    <el-input v-model="form.name" placeholder="请输入"></el-input>
  </el-form-item>
  <el-form-item label="选择" prop="region">
    <el-select v-model="form.region" placeholder="请选择">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="日期时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="开关">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="多选">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="已选中1">已选中</el-checkbox>
      <el-checkbox label="未选中2">未选中</el-checkbox>
      <el-checkbox label="已选中3">已选中</el-checkbox>
      <el-checkbox label="未选中4">未选中</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="单选">
    <el-radio-group v-model="form.resource">
      <el-radio label="已选中">已选中</el-radio>
      <el-radio label="未选中1">未选中</el-radio>
      <el-radio label="未选中2">未选中</el-radio>
      <el-radio label="未选中3">未选中</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="输入文本">
    <el-input type="textarea" v-model="form.desc"  placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">主要按钮</el-button>
    <el-button>一般按钮</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      const validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入文本信息'));
        }
      };
      const validateRegion = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择地域'));
        }
      };

      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: true,
          type: ['已选中1','已选中3'],
          resource: '已选中',
          desc: ''
        },
        rules:{
          name:[
             { validator: validateName, trigger: 'blur' }
          ],
          region: [
            { validator: validateRegion, trigger: 'change',required:true }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
```
:::

### 输入样式

:::demo
```html
<el-form ref="styleForm" :rules="rules" :model="styleForm" label-width="80px">
  <el-form-item label="输入文本" prop="name">
    <el-input v-model="styleForm.name" placeholder="请输入"></el-input>
    <p slot="hint">说明提示（注：当显示报错提示时会将说明提示替换）</p>
  </el-form-item>
  <el-form-item label="选择" prop="region">
    <el-select v-model="styleForm.region" placeholder="请选择">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="日期时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="styleForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="styleForm.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="开关">
    <el-switch v-model="styleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="多选">
    <el-checkbox-group v-model="styleForm.type">
      <el-checkbox label="已选中1">已选中</el-checkbox>
      <el-checkbox label="未选中2">未选中</el-checkbox>
      <el-checkbox label="已选中3">已选中</el-checkbox>
      <el-checkbox label="未选中4">未选中</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="单选">
    <el-radio-group v-model="styleForm.resource">
      <el-radio label="已选中">已选中</el-radio>
      <el-radio label="未选中1">未选中</el-radio>
      <el-radio label="未选中2">未选中</el-radio>
      <el-radio label="未选中3">未选中</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="输入文本">
    <el-input type="textarea" v-model="styleForm.desc"  placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">主要按钮</el-button>
    <el-button>一般按钮</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      const validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入文本信息请输入文本信息请输入文本信息请输入文本信息请输入文本信息请输入文本信息请输入文本信息请输入文本信息信息请输入文本信息请输入文本信息请输入文本信息'));
        }
        else {
          callback();
        }
      };
      const validateRegion = (rule, value, callback) => {
        if (value === '') {
          callback(new Error(' '));
        }
        else {
          callback();
        }
      };

      return {
        styleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: true,
          type: ['已选中1','已选中3'],
          resource: '已选中',
          desc: ''
        },
        rules:{
          name:[
             { validator: validateName, trigger: 'blur' }
          ],
          region: [
            { validator: validateRegion, trigger: 'change',required:true }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.styleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
```
:::


### 左对齐

:::demo 设置 `inline` 属性可以让表单域变为行内的表单域
```html
<el-form label-position="left" :rules="rules" ref="rightForm" :model="rightForm" label-width="80px">
  <el-form-item label="输入文本" prop="name">
    <el-input v-model="rightForm.name" placeholder="请输入"></el-input>
  </el-form-item>
  <el-form-item label="选择" prop="region">
    <el-select v-model="rightForm.region" placeholder="请选择">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="日期时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="rightForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="rightForm.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="开关">
    <el-switch v-model="rightForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="多选" >
    <el-checkbox-group v-model="rightForm.type">
      <el-checkbox label="已选中1">已选中</el-checkbox>
      <el-checkbox label="未选中2">未选中</el-checkbox>
      <el-checkbox label="已选中3">已选中</el-checkbox>
      <el-checkbox label="未选中4">未选中</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="单选">
    <el-radio-group v-model="rightForm.resource">
      <el-radio label="已选中">已选中</el-radio>
      <el-radio label="未选中1">未选中</el-radio>
      <el-radio label="未选中2">未选中</el-radio>
      <el-radio label="未选中3">未选中</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="输入文本">
    <el-input type="textarea" v-model="rightForm.desc"  placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">主要按钮</el-button>
    <el-button>一般按钮</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      const validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入文本信息'));
        }else {
          callback();
        }
      };
      const validateRegion = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择地域'));
        }else {
          callback();
        }
      };
      return {
        rightForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: true,
          type: ['已选中1','已选中3'],
          resource: '已选中',
          desc: ''
        },
        rules:{
          name:[
             { validator: validateName, trigger: 'blur' }
          ],
          region: [
            { validator: validateRegion, trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.rightForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
```
:::

### 上下对齐

:::demo 设置 `inline` 属性可以让表单域变为行内的表单域
```html
<el-form label-position="top" :rules="rules" ref="topForm"  :model="topForm" >
  <el-form-item label="输入文本" prop="name">
    <el-input v-model="topForm.name" placeholder="请输入"></el-input>
  </el-form-item>
  <el-form-item label="选择" prop="region">
    <el-select v-model="topForm.region" placeholder="请选择">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="日期时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="topForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="topForm.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="开关">
    <el-switch v-model="topForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="多选" >
    <el-checkbox-group v-model="topForm.type">
      <el-checkbox label="已选中1">已选中</el-checkbox>
      <el-checkbox label="未选中2">未选中</el-checkbox>
      <el-checkbox label="已选中3">已选中</el-checkbox>
      <el-checkbox label="未选中4">未选中</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="单选">
    <el-radio-group v-model="topForm.resource">
      <el-radio label="已选中">已选中</el-radio>
      <el-radio label="未选中1">未选中</el-radio>
      <el-radio label="未选中2">未选中</el-radio>
      <el-radio label="未选中3">未选中</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="输入文本">
    <el-input type="textarea" v-model="topForm.desc"  placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">主要按钮</el-button>
    <el-button>一般按钮</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      const validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入文本信息'));
        }else {
          callback();
        }
      };
      const validateRegion = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择地域'));
        }else {
          callback();
        }
      };
      return {
        topForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: true,
          type: ['已选中1','已选中3'],
          resource: '已选中',
          desc: ''
        },
        rules:{
          name:[
             { validator: validateName, trigger: 'blur' }
          ],
          region: [
            { validator: validateRegion, trigger: 'change',required:true }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.topForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
:::
### 行内表单
当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

:::demo 设置 `inline` 属性可以让表单域变为行内的表单域
```html
<el-form :inline="true" ref="formInline" :rules="rules" :model="formInline" class="demo-form-inline">
  <el-form-item label="标题" prop="user">
    <el-input v-model="formInline.user" placeholder="请输入"></el-input>
  </el-form-item>
  <el-form-item label="查询" prop="region">
    <el-select v-model="formInline.region" placeholder="请选择">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
    <el-button  @click="reset">重置</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      const validateuser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入审批人'));
        }else {
          callback();
        }
      };
      const validateRegion = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择地域'));
        }else {
          callback();
        }
      };
      return {
        formInline: {
          user: '',
          region: ''
        },
        rules:{
          user:[
             { validator: validateuser, trigger: 'blur' }
          ],
          region: [
            { validator: validateRegion, trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.formInline.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      reset() {
        this.$refs.formInline.resetFields()
      }
    }
  }
</script>


:::


### Form Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| model   | 表单数据对象 | object      |                  —                |  — |
| rules    | 表单验证规则 | object | — | — |
| inline    | 行内表单模式 | boolean | — | false |
| label-position | 表单域标签的位置，如果值为 right/left 时，则需要设置 `label-width` | string |  left/right/top            | right |
| label-width | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto`。 | string | — | — |
| label-suffix | 表单域标签的后缀 | string | — | — |
| hide-required-asterisk | 是否隐藏必填字段的标签旁边的红色星号 | boolean | — | false |
| show-message  | 是否显示校验错误信息 | boolean | — | true |
| inline-message  | 是否以行内形式展示校验信息 | boolean | — | false |
| validate-on-rule-change  | 是否在 `rules` 属性改变后立即触发一次验证 | boolean | — | true |
| disabled | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 | boolean | — | false |

### Form Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))
| validateField | 对部分表单字段进行校验的方法 | Function(props: array \| string, callback: Function(errorMessage: string))
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | —
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 | Function(props: array \| string)

### Form Events
| 事件名称 | 说明    | 回调参数  |
|--------- |-------- |---------- |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### Form-Item Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| prop    | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string    | 传入 Form 组件的 `model` 中的字段 | — |
| label | 标签文本 | string | — | — |
| label-width | 表单域标签的的宽度，例如 '50px'。支持 `auto`。 | string |       —       | — |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | — | false |
| rules    | 表单验证规则 | object | — | — |
| error    | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string | — | — |
| show-message  | 是否显示校验错误信息 | boolean | — | true |
| inline-message  | 以行内形式展示校验信息 | boolean | — | false |

### Form-Item Slot
| name | 说明 |
|------|--------|
| — | Form Item 的内容 |
| label | 标签文本的内容 |

### Form-Item Scoped Slot
|  name  |   说明  |
|--------|--------|
|  error | 自定义表单校验信息的显示方式，参数为 { error } |
### Form-Item Methods

| 方法名      | 说明          | 参数
|---------- |-------------- | --------------
| resetField | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | -
| clearValidate | 移除该表单项的校验结果 | -
