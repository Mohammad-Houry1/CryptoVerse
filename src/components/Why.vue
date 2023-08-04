<template>
  <section class="py-16">
    <div class="container mx-auto px-12">
      <h2 class="text-4xl font-bold text-white mb-8 text-center">Why Choose Us</h2>
      <div class="grid gap-8 md:grid-cols-3 justify-items-center">
        <div class="flex flex-col gap-8 justify-center">
          <div
            class="text-center p-4 border rounded-xl w-full px-6 flex gap-4 bg-wh border-transparent move"
          >
            <div class="flex p-2">
              <i class="fas fa-lock text-4xl text-white"></i>
            </div>
            <div>
              <h3 class="font-bold text-white text-2xl">Decentralization:</h3>
              <p class="text-gray-300 text-lg">
                Enhanced security and control with no central authority.
              </p>
            </div>
          </div>
          <div
            class="text-center p-4 border rounded-xl w-full px-6 flex gap-4 bg-wh border-transparent move"
          >
            <div class="flex p-2">
              <i class="fas fa-globe-americas text-4xl text-white"></i>
            </div>
            <div>
              <h3 class="font-bold text-white text-2xl">Global Accessibility:</h3>
              <p class="text-gray-300 text-lg">
                Frictionless cross-border transactions accessible for everyone.
              </p>
            </div>
          </div>
          <div
            class="text-center p-4 border rounded-xl w-full px-6 flex gap-4 bg-wh border-transparent move"
          >
            <div class="flex p-2">
              <i class="fas fa-users text-4xl text-white"></i>
            </div>
            <div>
              <h3 class="font-bold text-white text-2xl">Financial Inclusion:</h3>
              <p class="text-gray-300 text-lg">
                Empowering the unbanked to access financial services.
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <img
            src="../images/choose-main.39852b7511b28d44406f.png"
            alt="Image Description"
            class="h-96 w-auto mx-auto"
          />
        </div>
        <div class="flex flex-col gap-8 justify-center">
          <div
            class="text-center p-4 border rounded-xl w-full px-6 flex gap-4 bg-wh border-transparent move"
          >
            <div class="flex p-2">
              <i class="fas fa-shield-alt text-4xl text-white"></i>
            </div>
            <div>
              <h3 class="font-bold text-white text-2xl">Security:</h3>
              <p class="text-gray-300 text-lg">
                Ensuring trust on immutable ledger with strong security.
              </p>
            </div>
          </div>
          <div
            class="text-center p-4 border rounded-xl w-full px-6 flex gap-4 bg-wh border-transparent move"
          >
            <div class="flex p-2">
              <i class="fas fa-check-double text-4xl text-white"></i>
            </div>
            <div>
              <h3 class="font-bold text-white text-2xl">Transparent Transactions:</h3>
              <p class="text-gray-300 text-lg">
                Promoting trustworthiness through traceable transactions.
              </p>
            </div>
          </div>
          <div
            class="text-center p-4 border rounded-xl w-full px-6 flex gap-4 bg-wh border-transparent move"
          >
            <div class="flex p-2">
              <i class="fas fa-chart-line text-4xl text-white"></i>
            </div>
            <div>
              <h3 class="font-bold text-white text-2xl">Potential for High Returns:</h3>
              <p class="text-gray-300 text-lg">
                Capitalizing on opportunities for significant investment gains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center text-gray-600 mt-12 mx-20 mx-sm:m-0">
      While cryptocurrencies offer many benefits, they also come with risks and complexities. It's
      essential to conduct thorough research, understand the market dynamics, and exercise caution
      while investing in cryptocurrencies. Always consider consulting with a financial advisor
      before making significant investment decisions.
    </p>
  </section>
</template>
<style scoped>
.move {
  &:hover {
    -webkit-animation: mover-hover 1s infinite alternate;
    animation: mover-hover 1s infinite alternate;
  }

  &:not(:hover) {
    -webkit-animation: mover-not-hover 1s infinite alternate;
    animation: mover-not-hover 1s infinite alternate;
  }
}

@-webkit-keyframes mover-hover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

@keyframes mover-hover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

@-webkit-keyframes mover-not-hover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
}

@keyframes mover-not-hover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
}
</style>
