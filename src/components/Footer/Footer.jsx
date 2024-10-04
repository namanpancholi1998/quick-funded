import React from "react";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <div>
        <footer className="bg-white p-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="mb-8 md:mb-0">
                <img
                  src="../logo-quick.png"
                  alt="QuickFunded Logo"
                  className="h-10 mb-4"
                />
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/people/QuickFunded/61563946089420/?mibextid=ZbWKwL">
                    <img src="../facebook.png"></img>
                  </a>
                  <a href="https://x.com/QuickFunded?t=tgpu5IemaxXq5mdl_ul3SA&s=09">
                    <img src="../twitter.png"></img>
                  </a>
                  <a href="https://x.com/QuickFunded?t=tgpu5IemaxXq5mdl_ul3SA&s=09">
                    <img src="../instagram.png"></img>
                  </a>
                  <a href="https://discord.com/invite/yHsWZdTY">
                    <img src="../discord.png"></img>
                  </a>
                  <a href="https://www.youtube.com/@quickfunded?si=8HMMwX425lPfL9KN">
                    <img src="../youtube.png"></img>
                  </a>
                  <a href="https://t.me/quick_funded">
                    <img src="../telegram.png"></img>
                  </a>
                  {/* <a
                    href="https://www.flaticon.com/free-icons/discord"
                    title="discord icons"
                  >
                    Discord icons created by Freepik - Flaticon
                  </a> */}
                </div>
              </div>

              <div className="mb-8 md:mb-0">
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <NavLink
                      to={"/affilate"}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Affiliate
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/faq"}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/contactus"}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                {/* <div>
                  <input />
                  <button onClick={}></button>
                </div> */}
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Important Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Cookies Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      T&C Affiliate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div>
        <main className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-semibold mb-4">Disclosure:</h2>
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <p>
              <strong>Virtual/Demo Accounts and Educational Purposes:</strong>{" "}
              Our Website service utilizes virtual/demo accounts, and all
              information provided on this site is intended solely for
              educational purposes related to trading on the financial markets.
              It does not serve as specific investment advice, business
              recommendation, investment analysis, or a general recommendation
              regarding the trading of any investment instruments.
            </p>
            <p>
              <strong>Simulated or Hypothetical Performance:</strong> Simulated
              results and trading do not represent actual trading as they have
              not been executed. Therefore, they may not accurately reflect the
              impact of certain market factors, such as lack of liquidity,
              slippage, and similar conditions.
            </p>
            <p>
              <strong>High Risk of CFD Trading:</strong> CFD trading involves a
              high degree of risk and may not be suitable for all investors. You
              must consider your personal objectives, financial situation, and
              needs, and seek independent advice if necessary. You should not
              engage in CFD trading unless you fully understand the nature of
              the contract and the extent of your exposure to risk.
            </p>
            <p>
              <strong>Magnified Gains and Losses:</strong> Trading CFDs with
              leverage means that gains and losses can be magnified. Even a
              small market movement can result in a proportionately larger
              movement in the value of your investment. This can work against
              you as well as for you. A small initial margin payment can
              potentially lead to significant losses.
            </p>
            <p>
              <strong>Volatility of Derivative Markets:</strong> Derivative
              markets, including securities, currencies, commodities, financial
              instruments, or indices, can be highly volatile. Prices may
              fluctuate rapidly over wide ranges, influenced by unforeseen
              events, changes in conditions, and factors beyond your control.
              These include changing supply and demand relationships,
              governmental policies, political and economic events, and
              prevailing market psychology.
            </p>
            <p>
              <strong>Risks in Foreign Markets:</strong> Trading CFDs related to
              foreign markets or denominated in foreign currencies carries
              additional risks due to fluctuations in foreign exchange rates.
              Even if the price of the underlying instrument remains unchanged,
              you may incur losses if exchange rates change to your detriment.
            </p>
          </div>
        </main>

        <footer className="bg-gray-200 py-4 text-center">
          <p>&copy; 2024 Featured. All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}
