<template>
  <div class='app-container'>
    <navbar />
    <el-form :model='submitData' :rules='rules' ref='submitData' status-icon label-width='150px' class='submit-form'>
      <el-form-item label='Job Position' prop='position'>
        <el-select v-model='submitData.position' placeholder='Select your position' style='width: 100%;'>
          <el-option label='Backend Engineer' value='Backend Engineer'></el-option>
          <el-option label='Frontend Engineer' value='Frontend Engineer'></el-option>
          <el-option label='Fullstack Engineer' value='Fullstack Engineer'></el-option>
          <el-option label='Devops Engineer' value='Devops Engineer'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label='Company' prop='company'>
        <el-input v-model='submitData.company' placeholder='Put company name'></el-input>
      </el-form-item>
      <el-form-item label='Status' prop='status'>
        <el-select v-model='submitData.status' placeholder='Status of application' style='width: 100%;'>
          <el-option label='Got Rejected' value='Got Rejected'></el-option>
          <el-option label='In Process' value='In Process'></el-option>
          <el-option label='Got Offer' value='Got Offer'></el-option>
          <el-option label='Waiting' value='Waiting'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label='Location' prop='location'>
        <el-input v-model='submitData.location' placeholder='Put location'></el-input>
      </el-form-item>
      <el-form-item label='Requirements' prop='requirements'>
        <el-input v-model='submitData.requirements' placeholder='Put required languages'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type='primary' @click='submitForm' style='width: 100%;'>Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { createJob } from '@/api/job'
import Navbar from '@/layout/components/Navbar/index.vue'

@Component({
  name: 'HomePage',
  components: {
    Navbar
  }
})
export default class extends Vue {
  private submitData = {
    position: '',
    company: '',
    status: '',
    location: '',
    requirements: '',
    is_startup_company: false
  }

  private rules = {
    company: [
      { required: true, message: 'Please input company name', trigger: 'blur' },
      { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }
    ],
    requirements: [
      { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }
    ],
    location: [
      { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }
    ]
  }

  private async submitForm() {
    await createJob(this.submitData)
  }
}
</script>

<style lang='scss' scoped>
.submit-form {
  position: relative;
  width: 700px;
  max-width: 100%;
  padding: 70px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}
</style>
