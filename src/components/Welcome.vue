<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-row :gutter="20">
          <el-col :span="9">
            <el-input placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" @click="dialogVisible='ture'">添加用户</el-button>
          </el-col>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <el-form
              :model="addForm"
              :rules="addRules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="用户名称" prop="username">
                <el-input v-model="addForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="addForm.password"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="addForm.email"></el-input>
              </el-form-item>
              <el-form-item label="手机" prop="telephone">
                <el-input v-model="addForm.telephone"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </el-row>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        stripe
        border
        :align="center"
        :cell-style="cellStyle"
        :header-cell-style="rowClass"
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="state" label="状态" width="60">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.state"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="scope.row"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope>
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
            <el-tooltip
              class="item"
              effect="dark"
              content="设置角色"
              placement="top-start"
              :enterable="false"
            >
              <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryinfo.pagenum"
        :page-sizes="[2, 5, 10, 20]"
        :page-size="queryinfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      queryinfo: {
        query: '',
        pagenum: 1,
        pagesize: 2
      },
      dialogVisible: false,
      total: 4,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          state: true
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          state: true
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          state: true
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          state: false
        }
      ],
      addForm: {
        username: '',
        password: '',
        email: '',
        telephone: ''
      },
      addRules: {
        username: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }) {
      return 'text-align:center'
    },

    rowClass({ row, rowIndex }) {
      return 'text-align:center'
    },
    handleSizeChange(newsize) {},
    handleCurrentChange(newpage) {
      console.log(`当前页: ${newpage}`)
    }
  }
}
</script>
<style lang="" scoped>
</style>
