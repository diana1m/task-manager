<template>
    <a-form
    class="form"
    layout="inline"
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        name="task"
        :rules="[{ required: true, message: 'Please input your task!' }]"
      >
        <a-input v-model:value="formState.task" placeholder="Enter your task" class="input"/>
      </a-form-item>
  
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
</template>


<script lang="ts" setup>
  import { reactive } from 'vue';
  import { useTaskStore } from '@/stores/task';

  const store = useTaskStore()
  const { addTask } = store
  
  interface FormState {
    task: string;
  }
  
  const formState = reactive<FormState>({
    task: ''
  });
  
  const onFinish = (values: any) => {
    addTask(formState.task)
    formState.task=''
    console.log(values)
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
</script>
  
<style scoped>
.input {
    width: 300px;
}
.form {
 margin-bottom: 40px;
}
</style>
 

  