<template>
  <div class='app-container'>
    <el-table :data='list' style='width: 100%' border fit highlight-current-row>
      <el-table-column label='Position' prop='position'>
      </el-table-column>
      <el-table-column label='Company' prop='company'>
      </el-table-column>
      <el-table-column label='Status' prop='status'>
      </el-table-column>
      <el-table-column label='Location' prop='location'>
      </el-table-column>
      <el-table-column label='Requirements' prop='requirements'>
      </el-table-column>
      <el-table-column label="Operations" align="right">
        <template slot-scope="scope">
          <el-button size="mini" @click="updateRow(scope.row)">Update</el-button>
          <el-button size="mini" type="danger" @click="deleteRow(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { IJobData } from '@/api/types'
import { getJobs, deleteJob, updateJob } from '@/api/job'

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
    this.list = data.rows

    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false
    }, 0.5 * 1000)
  }

  private async deleteRow(data: any) {
    await deleteJob(data.id)
  }

  private async updateRow(data: any) {
    await updateJob(data.id, data)
  }
}
</script>

<style lang='scss' scoped>

</style>
