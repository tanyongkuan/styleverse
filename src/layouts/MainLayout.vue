<template>
  <!-- Use any element to open the sidenav -->
  <NavigationDrawer ref="navDrawer" />
  <div class="flex flex-col items-center bg-neutral-50">
    <div
      class="
        flex
        p-4
        xl:px-0
        md:max-w-4xl
        lg:max-w-5xl
        xl:max-w-6xl
        items-center
        justify-between
        w-full
        sticky
        top-0
        z-10
        bg-neutral-50
      "
    >
      <div class="flex justify-center items-center gap-4 lg:hidden">
        <ButtonFloating @click="navDrawer?.displayDrawer()">
          <menu-icon />
        </ButtonFloating>
        <span
          class="text-xl font-bold lg:hidden cursor-pointer"
          @click="() => router.push('/')"
          >StyleVerse</span
        >
      </div>
      <div class="lg:flex hidden justify-center items-center gap-10">
        <img
          src="/public/Company_Placeholder.png"
          alt="company_logo"
          class="cursor-pointer"
          @click="() => router.push('/')"
        />
        <span class="cursor-pointer" @click="router.push('/category/men')"
          >Men</span
        >
        <span class="cursor-pointer" @click="router.push('/category/women')"
          >Women</span
        >
        <span class="cursor-pointer" @click="router.push('/category/jewelry')"
          >Jewelry</span
        >
      </div>
      <div class="flex justify-center items-center gap-4">
        <ButtonFloating>
          <account-outline-icon />
        </ButtonFloating>
        <ButtonFloating @click="() => (showCart = !showCart)">
          <cart-outline-icon />
          <div
            class="
              absolute
              inline-flex
              items-center
              justify-center
              w-6
              h-6
              text-xs
              font-bold
              text-white
              bg-red-500
              border-2 border-white
              rounded-full
              top-2
              -right-0
              lg:-right-1
              xl:-right-3
              dark:border-gray-900
            "
          >
            {{ cart.length }}
          </div>
        </ButtonFloating>
      </div>
      <Cart v-show="showCart" />
    </div>
    <router-view />
  </div>
  <div class="bg-neutral-800 text-neutral-50">
    <div class="p-4 lg:py-12 flex flex-col gap-4 items-center">
      <IconPlaceholder>
        <email-icon />
      </IconPlaceholder>
      <span class="font-bold text-2xl">Newsletters</span>
      <span class="text-xs text-center"
        >Get the latest updates to our latest collections in your inbox.</span
      >
      <div class="py-1 flex items-center gap-4">
        <TextBox
          fieldId="email-address"
          placeholder="Email your email"
          v-model="emailAddress"
        >
          <template #icon>
            <EmailOutlineIcon class="text-neutral-900" />
          </template>
        </TextBox>
        <Button
          text="Subscribe"
          rounded
          class="bg-indigo-500 text-white border-none"
        />
      </div>
      <span class="text-xs text-center"
        >Your data is in the safe hands. Check out our
        <a href="#" class="text-indigo-500">Privacy policy</a> for more
        info.</span
      >
    </div>
    <div class="p-6 gap-2 flex flex-col items-center bg-black">
      <span class="text-xl font-bold">StyleVerse</span>
      <div class="flex justify-between w-full max-w-xs">
        <span class="text-xs">Overview</span>
        <span class="text-xs">Teams</span>
        <span class="text-xs">Jobs</span>
        <span class="text-xs">Help</span>
        <span class="text-xs">Privacy</span>
      </div>
      <div class="flex gap-6">
        <ButtonFloating>
          <facebook-icon />
        </ButtonFloating>
        <ButtonFloating>
          <twitter-icon />
        </ButtonFloating>
        <ButtonFloating>
          <instagram-icon />
        </ButtonFloating>
        <ButtonFloating>
          <linkedin-icon />
        </ButtonFloating>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconPlaceholder from '@components/IconPlaceholder.vue';
import TextBox from '@components/input/TextBox.vue';
import Button from '@components/buttons/Button.vue';
import ButtonFloating from '@components/buttons/ButtonFloating.vue';
import AccountOutlineIcon from 'vue-material-design-icons/AccountOutline.vue';
import CartOutlineIcon from 'vue-material-design-icons/CartOutline.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';
import EmailOutlineIcon from 'vue-material-design-icons/EmailOutline.vue';
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue';
import NavigationDrawer, {
  NavigationDrawerInstance
} from '@components/drawer/NavigationDrawer.vue';
import { useRouter } from 'vue-router';
import Cart from '@components/cart/Cart.vue';
import { useCartStore } from '@stores/cart';

import { ref } from 'vue';
import { storeToRefs } from 'pinia';

const router = useRouter();
const cartStore = useCartStore();

const { cart, showCart } = storeToRefs(cartStore);

const navDrawer = ref<NavigationDrawerInstance>();
const emailAddress = ref('');
</script>
