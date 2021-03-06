<template>
  <div class="table">
    <el-table
      :data="list"
      style="width: 99%"
      show-overflow-tooltip
      v-loading="loading"
      cell-class-name="table-cell"
      header-cell-class-name="table-cell">

      <el-table-column
        prop="headimg"
        label="头像"
        min-width="100">
        <template slot-scope="scope">
          <img v-if="scope.row.headimg" class="table-avatar" :src="scope.row.headimg" alt="加载失败">
          <img v-else class="table-avatar" src="@/assets/images/default.png" alt="加载失败">
        </template>
      </el-table-column>

      <el-table-column
        prop="nick"
        label="用户昵称"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="id"
        label="用户ID"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="phone"
        label="手机号码"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="recommenderId"
        label="推荐ID"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="teamNum"
        label="团队人数"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="registerDate"
        label="注册时间"
        min-width="100">
        <template slot-scope="scope">
          <span>{{scope.row.registerDate | formatTime}}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="orgName"
        label="代理商名称"
        min-width="100">
      </el-table-column>

    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="total, prev, pager, next, sizes, jumper"
      :current-page="params.page"
      :page-size="params.size"
      :total="total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />

  </div>
</template>

<script>
import { getCustomerListReq } from '@/api/table'
import { mapGetters } from 'vuex'
export default {
  props: {
    values: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      list: [],
      total: 0,
      params: {
        page: 1,
        size: 10
      }
    }
  },
  watch: {
    values() {
      this.reset()
    }
  },
  computed: {
    ...mapGetters(['loading'])
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const params = Object.assign({}, this.params, this.values)
      const res = await getCustomerListReq(params)
      if (res.success) {
        const { rows, total } = res.data
        this.list = rows
        this.total = total
      }
    },
    handleCurrentChange(page) {
      this.params.page = page
      this.getList()
    },
    handleSizeChange(size) {
      this.params.size = size
      this.getList()
    },
    reset() {
      this.params.page = 1
      this.params.size = 10
      this.getList()
    }
  }
}
</script>

<style scoped>
.table-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.table {
  width: 100%;
}
.table >>> .cell {
  text-align: center;
}

.table >>> .el-table__body-wrapper {
  overflow-x: auto;
}
.pagination {
  padding-top: 22px;
  text-align: center;
}
</style>
