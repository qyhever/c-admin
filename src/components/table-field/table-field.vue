<template>
  <el-dialog
    title="设置"
    width="600px"
    :append-to-body="true"
    :visible.sync="visible"
    :close-on-click-modal="true"
    :close-on-press-escape="true"
  >
    <el-table
      ref="table"
      :data="list"
      :max-height="480"
      border
      @selection-change="selectionChange"
      style="width: 100%"
    >
      <el-table-column align="center" prop="label" label="字段名称"/>
      <el-table-column align="center" type="selection" width="80"/>
      <el-table-column align="center" prop="fixed" label="锁定列" width="80">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.fixed" @change="changeFixed(scope.row,scope.$index)"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column align="center" label="排序">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="sortBy(scope.$index-1)" :disabled="scope.$index===0" class="o-link">上移
          </el-button>
          <el-button type="text" size="small" @click="sortBy(scope.$index)" :disabled="scope.$index===list.length-1" class="o-link">下移
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="dialog-footer" style="margin-top: 15px">
      <el-button round size="small" @click="close">关 闭</el-button>
      <el-button type="primary" round size="small" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      visible: false,
      list: [],
      fields: [],
      fixedList: []
    }
  },
  methods: {
    close() {
      this.visible = false
    },
    load(fields) {
      console.log(fields)
      this.visible = true
      this.fields = fields
      this.list = []
      this.fields.forEach((row) => {
        if (!this.permission(row.shieldedFieldId)) {
          this.list.push(Object.assign({}, row))
        }
      })
      let list = JSON.parse(JSON.stringify(this.list))
      this.$nextTick(() => {
        list.forEach((row, i) => {
          if (row.show) {
            this.$refs.table.toggleRowSelection(this.list[i], true)
          }
        })
      })
    },
    selectionChange(values) {
      this.list.forEach((item) => {
        item.show = values.some((o) => {
          return o.prop === item.prop
        })
      })
    },
    sortBy(index) {
      let parts = this.list.slice(index, index + 2)
      this.list.splice(index, 2, ...parts.reverse())
    },
    changeFixed(row) {
      let count = this.list.filter((o) => {
        return o.fixed
      }).length
      if (count > 6) {
        row.fixed = false
        this.$alert('最多可锁定 6 列！', '温馨提示', {
          confirmButtonText: '知道了'
        })
      }
    },
    save() {
      // this.fields = this.list
      // this.fields.splice(0, this.fields.length, ...this.list)
      this.$emit('success', this.list)
      this.close()
    }
  }
}

</script>
