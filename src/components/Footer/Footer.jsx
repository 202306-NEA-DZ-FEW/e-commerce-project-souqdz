import React, { useState } from "react"
import Link from "next/link"

const TeamSection = () => {
  const [isTeamSectionVisible, setIsTeamSectionVisible] = useState(false)

  return (
    <footer>
      <footer className="footer  p-6 bg-base-200 text-base-content rounded ">
        <nav className="grid grid-flow-col gap-4">
          <div className="font-bold text-2xl">
            <Link href="/">SOUQDZ</Link>{" "}
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
          <Link
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
          </Link>
        </div>
      </footer>
      <div
        // onClick={toggleTeamSection}
        className="grid cursor-pointer font-bold gap-x-6 md:grid-cols-5 lg:gap-x-12 py-3 px-5 bg-base-200"
      >
        <Link href="https://github.com/hocine1212" target="_BLANK">
          Hocine Benoudane
        </Link>
        <Link href="https://github.com/ysergma" target="_BLANK">
          Youssouf Sergma
        </Link>
        <Link href="https://github.com/hasnahadd" target="_BLANK">
          Manel H Haddoud
        </Link>
        <Link href="https://github.com/Amel7400" target="_BLANK">
          Amel Batouche
        </Link>
        <Link href="https://github.com/Polichinell" target="_BLANK">
          Louisa Hamrit
        </Link>
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
      ></div>
    </footer>
  )
}

export default TeamSection
