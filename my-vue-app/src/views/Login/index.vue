<script setup lang="ts">
import { computed, reactive } from 'vue';
// import { $t } from '@/locales';
// import { loginModuleRecord } from '@/constants/app';
// import { useRouterPush } from '@/hooks/common/router';
// import { useFormRules, useNaiveForm } from '@/hooks/common/form';
// import { useAuthStore } from '@/store/modules/auth';

defineOptions({
  name: 'PwdLogin'
});

// const authStore = useAuthStore();
// const { toggleLoginModule } = useRouterPush();
// const { formRef, validate } = useNaiveForm();

interface FormModel {
  userName: string;
  password: string;
}

const model: FormModel = reactive({
  userName: 'linzhicai',
  password: 'Lzc011018'
});

// const rules = computed<Record<keyof FormModel, App.Global.FormRule[]>>(() => {
//   // inside computed to make locale reactive, if not apply i18n, you can define it without computed
//   const { formRules } = useFormRules();

//   return {
//     userName: formRules.userName,
//     password: formRules.pwd
//   };
// });

async function handleSubmit() {
  await validate();
  await authStore.login(model.userName, model.password);
}

type AccountKey = 'super' | 'admin' | 'user';

interface Account {
  key: AccountKey;
  label: string;
  userName: string;
  password: string;
}

const accounts = computed<Account[]>(() => [
  {
    key: 'super',
    label: $t('page.login.pwdLogin.superAdmin'),
    userName: 'Super',
    password: '123456'
  },
  {
    key: 'admin',
    label: $t('page.login.pwdLogin.admin'),
    userName: 'Admin',
    password: '123456'
  },
  {
    key: 'user',
    label: $t('page.login.pwdLogin.user'),
    userName: 'User',
    password: '123456'
  }
]);

async function handleAccountLogin(account: Account) {
  await authStore.login(account.userName, account.password);
}
</script>

<template>
  <NForm ref="formRef" :model="model" size="large" :show-label="false">
    <NFormItem path="userName">
      <NInput v-model:value="model.userName" placeholder="fargferg" />
    </NFormItem>
    <NFormItem path="password">
      <NInput v-model:value="model.password" type="password" show-password-on="click" placeholder="bstbtrbrs" />
    </NFormItem>
    <NSpace vertical :size="24">
      <div class="flex-y-center justify-between">
        <NCheckbox>333333</NCheckbox>
        <NButton quaternary @click="toggleLoginModule('reset-pwd')">
          55555555
        </NButton>
      </div>
      <NButton type="primary" size="large" round block @click="handleSubmit">
        343434343434
      </NButton>
      <div class="flex-y-center justify-between gap-12px">
        <NButton class="flex-1" block @click="toggleLoginModule('code-login')">
          1111111111
        </NButton>
        <NButton class="flex-1" block @click="toggleLoginModule('register')">
          22222222
        </NButton>
      </div>
      <!--
 <NDivider class="text-14px text-#666 !m-0">{{ $t('page.login.pwdLogin.otherAccountLogin') }}</NDivider>
      <div class="flex-center gap-12px">
        <NButton v-for="item in accounts" :key="item.key" type="primary" @click="handleAccountLogin(item)">
          {{ item.label }}
        </NButton>
      </div>
-->
    </NSpace>
  </NForm>
</template>

<style scoped></style>
