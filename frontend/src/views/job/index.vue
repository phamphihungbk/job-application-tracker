<template>
<!--  <div class="app-container">-->
<!--      <el-table-->
<!--        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"-->
<!--        style="width: 100%">-->
<!--        <el-table-column-->
<!--          label="Date"-->
<!--          prop="date">-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          label="Name"-->
<!--          prop="name">-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--          align="right">-->
<!--          <template slot="header" slot-scope="scope">-->
<!--            <el-input-->
<!--              v-model="search"-->
<!--              size="mini"-->
<!--              placeholder="Type to search"/>-->
<!--          </template>-->
<!--          <template slot-scope="scope">-->
<!--            <el-button-->
<!--              size="mini"-->
<!--              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>-->
<!--            <el-button-->
<!--              size="mini"-->
<!--              type="danger"-->
<!--              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--      </el-table>-->
<!--  </div>-->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IJobData } from '@/api/types'
import { getJobs } from '@/api/job'
@Component({
  name: 'Job'
})
export default class extends Vue {
  private listLoading = true
  private list: IJobData[] = []
  private listQuery = {
    page: 1,
    limit: 20
  }

  created() {
    this.getList()
  }

  private async getList() {
    this.listLoading = true
    const { data } = await getJobs(this.listQuery)
    this.list = data.items
    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false
    }, 0.5 * 1000)
  }
}
</script>

<style lang="scss" scoped>

</style>
