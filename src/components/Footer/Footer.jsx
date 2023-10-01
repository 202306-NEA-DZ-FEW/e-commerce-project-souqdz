import React, { useState } from "react"

const TeamSection = () => {
  const [isTeamSectionVisible, setIsTeamSectionVisible] = useState(false)

  const toggleTeamSection = () => {
    setIsTeamSectionVisible(!isTeamSectionVisible)
  }

  return (
    <footer>
      <footer className="footer  p-6 bg-base-200 text-base-content rounded ">
        <nav className="grid grid-flow-col gap-4">
          <div className="font-bold text-2xl">
            <a href="/">SOUQDZ</a>{" "}
          </div>
        </nav>

        <footer class="footer footer-center px-20 bg-base-200 text-base-content rounded">
          <aside>
            <p className="font-semi-bold text-2xl footer-center"></p>
          </aside>
          <aside>
            <p class="font-bold">
              Re:Coded Frontend Web Development Bootcamp - Algeria 2023
            </p>
            <p> Team SouQ DZ © 2023 - All right reserved </p>
          </aside>
        </footer>
        <div className="flex p-0 mx-auto my-0">
          <a
            href="https://github.com/202306-NEA-DZ-FEW/e-commerce-project-souqdz"
            target="_BLANK"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 m-0 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.24-.009-.875-.013-1.713-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.905-.619.068-.607.068-.607 1.003.07 1.532 1.03 1.532 1.03.89 1.527 2.337 1.086 2.904.831.09-.645.35-1.086.638-1.336-2.23-.255-4.576-1.116-4.576-4.962 0-1.097.393-1.995 1.04-2.696-.105-.255-.452-1.278.099-2.665 0 0 .846-.271 2.769 1.03A9.67 9.67 0 0112 5.85c.825.005 1.657.111 2.447.328 1.923-1.3 2.768-1.03 2.768-1.03.552 1.387.206 2.41.101 2.665.647.701 1.038 1.599 1.038 2.696 0 3.858-2.35 4.704-4.592 4.954.36.312.682.924.682 1.862 0 1.345-.012 2.425-.012 2.75 0 .27.18.584.688.485C19.138 20.16 22 16.415 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </a>
        </div>
      </footer>
      <div
        // onClick={toggleTeamSection}
        className="grid cursor-pointer font-bold gap-x-6 md:grid-cols-5 lg:gap-x-12 py-3 px-5 bg-base-200"
      >
        <a href="https://github.com/hocine1212" target="_BLANK">
          Hocine Benoudane
        </a>
        <a href="https://github.com/ysergma" target="_BLANK">
          Youssouf Sergma
        </a>
        <a href="https://github.com/hasnahadd" target="_BLANK">
          Manel H Haddoud
        </a>
        <a href="https://github.com/Amel7400" target="_BLANK">
          Amel Batouche
        </a>
        <a href="https://github.com/Polichinell" target="_BLANK">
          Louisa Hamrit
        </a>
      </div>
      {/* <div className="flex flex-col items-center">
        <button
          onClick={toggleTeamSection}
          class="bg-blue-500 place-self-center	hidden hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          MEET THE TEAM
        </button>
      </div> */}
      <div
        class="hidden sm:block"
        style={{ display: isTeamSectionVisible ? "block" : "none" }}
      >
        <div class="container my-24 mx-auto md:px-6 ">
          <section class="mb-32 text-center ">
            <div class="grid gap-x-6 md:grid-cols-5 lg:gap-x-12">
              {/* START OF GRID */}
              <div class="mb-24 md:mb-0">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="flex justify-center">
                    <div class="flex justify-center -mt-[75px]">
                      <img
                        src="https://avatars.githubusercontent.com/u/122048230?v=4"
                        class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg font-bold">Hocine Benoudane</h5>
                    <ul class="mx-auto flex list-inside justify-center">
                      <a href="https://github.com/hocine1212" class="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="h-6 w-6 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hocine12/"
                        class="px-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="h-6 w-6 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END OF GRID */}

              {/* START OF GRID */}
              <div class="mb-24 md:mb-0">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="flex justify-center">
                    <div class="flex justify-center -mt-[75px]">
                      <img
                        src="https://avatars.githubusercontent.com/u/64746106?v=4"
                        class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg font-bold">Youssouf Sergma</h5>
                    <ul class="mx-auto flex list-inside justify-center">
                      <a href="https://github.com/ysergma" class="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="h-6 w-6 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/sergma/"
                        class="px-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="h-6 w-6 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END OF GRID */}

              {/* START OF GRID */}
              <div class="mb-24 md:mb-0">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="flex justify-center">
                    <div class="flex justify-center -mt-[75px]">
                      <img
                        src="https://avatars.githubusercontent.com/u/95043080?v=4"
                        class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg font-bold">Manel H Haddoud</h5>
                    <ul class="mx-auto flex list-inside justify-center">
                      <a href="https://github.com/hasnahadd" class="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="h-6 w-6 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/manel-hasna-haddoud-aa5095278/"
                        class="px-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="h-6 w-6 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END OF GRID */}

              {/* START OF GRID */}
              <div class="mb-24 md:mb-0">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="flex justify-center">
                    <div class="flex justify-center -mt-[75px]">
                      <img
                        src="https://avatars.githubusercontent.com/u/138016246?v=4"
                        class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg font-bold">Amel Batouche</h5>
                    <ul class="mx-auto flex list-inside justify-center">
                      <a href="https://github.com/Amel7400" class="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="h-6 w-6 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/batouche-amel-384422190/"
                        class="px-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="h-6 w-6 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END OF GRID */}

              {/* START OF GRID */}
              <div class="mb-24 md:mb-0">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="flex justify-center">
                    <div class="flex justify-center -mt-[75px]">
                      <img
                        src="https://avatars.githubusercontent.com/u/138169337?v=4"
                        class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg font-bold">Louisa Hamrit</h5>
                    <ul class="mx-auto flex list-inside justify-center">
                      <a href="https://github.com/Polichinell2" class="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="h-6 w-6 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                      <a href="/" class="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="h-6 w-6 text-primary dark:text-primary-400"
                        >
                          <path
                            fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END OF GRID */}
            </div>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default TeamSection
