<template>
  <nav id="nav" class="border-b-2 p-4 max-lg:p-6 border-transparent">
    <div class="flex justify-between mx-16 max-lg:mx-2 font-semibold text-lg items-center">
      <router-link to="/">
        <img
          src="../images/cryptoverse-low-resolution-logo-white-on-transparent-background.png"
          alt="CryptoVerse"
          class="w-40 mr-4"
        />
      </router-link>
      <ul class="flex items-center max-lg:hidden gap-6">
        <li
          class="rounded-md p-2 overflow-hidden relative group cursor-pointer font-medium border-purple-600 text-white hover:border-opacity-100 hover:text-white duration-200 active"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-purple-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <router-link
            to="/Market"
            class="relative text-white transition duration-300 group-hover:text-white ease"
            >Market</router-link
          >
        </li>
        <li
          class="rounded-md p-2 overflow-hidden relative group cursor-pointer font-medium border-purple-600 text-white hover:border-opacity-100 hover:text-white duration-200 active"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-purple-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <router-link
            to="/News"
            class="relative text-white transition duration-300 group-hover:text-white ease"
            >News</router-link
          >
        </li>
        <li
          class="rounded-md p-2 overflow-hidden relative group cursor-pointer font-medium border-purple-600 text-white hover:border-opacity-100 hover:text-white duration-200 active"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-purple-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <router-link
            to="/Why"
            class="relative text-white transition duration-300 group-hover:text-white ease"
            >Why Choose Us</router-link
          >
        </li>
        <li
          class="rounded-md p-2 overflow-hidden relative group cursor-pointer font-medium border-purple-600 text-white hover:border-opacity-100 hover:text-white duration-200 active"
        >
          <span
            class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-purple-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
          ></span>
          <router-link
            to="/AboutUs"
            class="relative text-white transition duration-300 group-hover:text-white ease"
            >About us</router-link
          >
        </li>
      </ul>
      <div class="max-lg:block hidden">
        <!-- <router-link to="/Wallet">
          <i class="fa-solid fa-wallet text-2xl text-white"></i>
        </router-link> -->
        <button @click="openMenu()" class="">
          <i class="fa-solid fa-bars text-2xl text-white"></i>
        </button>
      </div>
    </div>
    <div
      class="fixed top-0 right-[-100%] w-full bg-violet-900 h-screen text-center flex justify-center items-center z-[999] md:hidden"
      id="container"
    >
      <ul id="menu" class="text-white">
        <i
          @click="closeMenu()"
          class="fa-solid fa-times text-white text-4xl absolute top-8 right-8 cursor-pointer transform"
        ></i>
        <li class="my-4 transition duration-500 hover:scale-125 hover:bg-purple-900 p-4 text-3xl">
          <button>
            <router-link to="/" @click="closeMenu()">
              <span>Home</span>
            </router-link>
          </button>
        </li>
        <li class="my-4 transition duration-500 hover:scale-125 hover:bg-purple-900 p-4 text-3xl">
          <router-link to="/Market" @click="closeMenu()">
            <span>Market</span>
          </router-link>
        </li>
        <li class="my-4 transition duration-500 hover:scale-125 hover:bg-purple-900 p-4 text-3xl">
          <button>
            <router-link to="/News" @click="closeMenu()">
              <span>News</span>
            </router-link>
          </button>
        </li>
        <!-- <li class="my-4 transition duration-500 hover:scale-125 hover:bg-purple-900 p-4 text-3xl">
          <button>
            <router-link to="/Wallet" @click="closeMenu()">
              <span>Wallet</span>
            </router-link>
          </button>
        </li> -->
        <li class="my-4 transition duration-500 hover:scale-125 hover:bg-purple-900 p-4 text-3xl">
          <button>
            <router-link to="/Why" @click="closeMenu()">
              <span>Why Choose Us</span>
            </router-link>
          </button>
        </li>
        <li class="my-4 transition duration-500 hover:scale-125 hover:bg-purple-900 p-4 text-3xl">
          <button>
            <router-link to="/AboutUS" @click="closeMenu()">
              <span>About me</span>
            </router-link>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  setup() {
    const openMenu = () => {
      document.getElementById('container').classList.remove('animate-slide-out')
      document.getElementById('container').classList.add('animate-slide-in')
      document.getElementById('menu').style.opacity = '1'
    }

    const closeMenu = () => {
      document.getElementById('container').classList.remove('animate-slide-in')
      document.getElementById('container').classList.add('animate-slide-out')
      document.getElementById('menu').style.opacity = '0'
    }

    const updateNavbarOnScroll = () => {
      const navbar = document.querySelector('nav')
      if (!navbar) return

      const scrollThreshold = 100

      if (window.scrollY > scrollThreshold) {
        navbar.classList.add('fixed', 'top-0', 'w-full', 'z-50', 'bg-color', 'shadow-xl')
      } else {
        navbar.classList.remove('fixed', 'top-0', 'w-full', 'z-50', 'bg-color', 'shadow-xl')
      }
    }

    window.addEventListener('scroll', updateNavbarOnScroll)

    return {
      openMenu,
      closeMenu,
      mounted() {
        this.updateNavbarOnScroll()
      }
    }
  }
}
</script>

<style scoped>
@keyframes slide-in {
  from {
    right: -100%;
  }
  to {
    right: 0%;
  }
}

@keyframes slide-out {
  from {
    right: 0%;
  }
  to {
    right: -100%;
  }
}

.animate-slide-in {
  animation: slide-in 0.5s ease-in-out forwards;
}

.animate-slide-out {
  animation: slide-out 0.5s ease-in-out forwards;
}
</style>
