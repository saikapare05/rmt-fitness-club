import { motion } from "framer-motion";

const PricingSection = () => {
  return (
    <section className="py-24 px-4 bg-[#060b18]">
      <div className="container mx-auto text-center">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-heading mb-6 text-white">
          RMT <span className="text-blue-500">Fitness Plans</span>
        </h2>

        <p className="text-gray-400 mb-12">
          Admission Fees = ₹200
        </p>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* MALE */}
          <div className="bg-[#0f172a] p-8 rounded-xl border border-white/10 shadow-lg hover:scale-105 hover:shadow-blue-500/10 transition">
            <h3 className="text-lg text-blue-400 mb-6 tracking-widest">
              MALE PACKAGE
            </h3>

            <div className="space-y-4 text-left">
              <PriceRow title="Yearly" price="₹12,000" />
              <PriceRow title="6 Months" price="₹7,500" />
              <PriceRow title="3 Months" price="₹5,000" />
              <PriceRow title="1 Month" price="₹2,000" />
            </div>
          </div>

          {/* FEMALE */}
          <div className="bg-[#0f172a] p-8 rounded-xl border border-white/10 shadow-lg hover:scale-105 hover:shadow-blue-500/10 transition">
            <h3 className="text-lg text-blue-400 mb-6 tracking-widest">
              FEMALE PACKAGE
            </h3>

            <div className="space-y-4 text-left">
              <PriceRow title="Yearly" price="₹8,999" />
              <PriceRow title="6 Months" price="₹4,999" />
              <PriceRow title="3 Months" price="₹2,699" />
              <PriceRow title="1 Month" price="₹999" />
            </div>
          </div>

        </div>

        {/* PERSONAL TRAINING */}
        <div className="mt-16 max-w-3xl mx-auto bg-[#0f172a] border border-white/10 rounded-xl p-8 shadow-lg hover:shadow-blue-500/10 transition">
          <h3 className="text-2xl text-blue-400 mb-6 tracking-wide">
            Personal Training
          </h3>

          <div className="space-y-4">
            <PriceRow title="1 Month" price="₹5,000" />
            <PriceRow title="3 Months" price="₹12,000" />
          </div>
        </div>

        {/* EMI SECTION */}
        <div className="mt-20 max-w-5xl mx-auto bg-[#0f172a] border border-white/10 rounded-xl p-8 shadow-lg">
          <h3 className="text-xl text-blue-400 mb-8 text-center">
            EMI Options (Extra 10% Charges Apply)
          </h3>

          <div className="grid md:grid-cols-2 gap-10 text-left">

            {/* Female EMI */}
            <div>
              <h4 className="mb-4 font-semibold text-blue-300">Female EMI</h4>
              <PriceRow title="8999" price="999 / month" />
              <PriceRow title="4999" price="499 / month" />
              <PriceRow title="2699" price="300 / month" />
              <PriceRow title="999" price="100 / month" />
            </div>

            {/* Male EMI */}
            <div>
              <h4 className="mb-4 font-semibold text-blue-300">Male EMI</h4>
              <PriceRow title="12000" price="1200 / month" />
              <PriceRow title="7500" price="750 / month" />
              <PriceRow title="5000" price="500 / month" />
              <PriceRow title="2000" price="200 / month" />
            </div>

          </div>
        </div>

        {/* RULES */}
        <div className="mt-16 text-center space-y-3">
          <h2 className="text-3xl font-bold text-red-500">
            NO DISCOUNT
          </h2>

          <p className="text-gray-400 text-sm">
            No Refund • No Extend • No Transfer
          </p>
        </div>

      </div>
    </section>
  );
};

/* 🔹 Improved Row */
const PriceRow = ({ title, price }: { title: string; price: string }) => (
  <div className="flex justify-between border-b border-white/10 pb-2">
    <span className="text-gray-400">{title}</span>
    <span className="font-semibold text-white">{price}</span>
  </div>
);

export default PricingSection;