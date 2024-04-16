<script lang="ts" setup>
import router from '@/shared/router'
import { reactive } from 'vue'

interface FormState {
  email: string
  password: string
}

const formState = reactive<FormState>({
  email: '',
  password: ''
})

const onFinish = (values: any) => {
  formState.email = values.email
  formState.password = values.password

  router.push('/tasks')

  console.log(values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<template>
  <a-form
    class="form"
    layout="vertical"
    :model="formState"
    name="login"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      name="email"
      label="Email"
      :rules="[{ required: true, message: 'Please input your email!' }]"
    >
      <a-input
        v-model:value="formState.email"
        type="email"
        size="large"
        placeholder="Enter your email"
        class="input"
      />
    </a-form-item>
    <a-form-item
      name="password"
      label="Password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password
        v-model:value="formState.password"
        size="large"
        placeholder="Enter your password"
        class="input"
      />
    </a-form-item>

    <div class="btnWrapper">
      <a-form-item :wrapper-col="{ span: 16 }">
        <a-button
          type="primary"
          size="large"
          html-type="submit"
          :disabled="formState.email === '' || formState.password === ''"
        >
          Login
        </a-button>
      </a-form-item>
      <span
        >Are you not registered yet?
        <a-button type="link" html-type="link" class="link">
          <RouterLink to="/auth/register">Register</RouterLink></a-button
        >
      </span>
    </div>
  </a-form>
</template>

<style scoped>
.form {
  padding: 20px;
  border: 1px solid #00000038;
  border-radius: 6px;
  width: 440px;
  margin: 30px auto;
}
.btnWrapper {
  display: flex;
  gap: 20px;
  margin-top: 35px;
  align-items: baseline;
}

.link {
  padding: 0;
}
</style>
