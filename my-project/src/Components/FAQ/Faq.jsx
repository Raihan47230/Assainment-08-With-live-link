import React from "react";

const Faq = () => {
  return (
    <div className="">
     <div className="bg-violet-500 text-center py-8 pb-40 text-white  ">
        <h1 className="text-2xl font-bold ">FAQ</h1>
        <p className="font-semibold">
        We accept a variety of payment methods, including all major credit and debit cards <br />(Visa, MasterCard, American Express), PayPal, and Apple Pay
        </p>
      </div>

     <div className="w-11/12 mx-auto flex flex-col gap-10 mt-10">
     <div className="collapse bg-base-200 ">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        1. What payment methods do you accept?
        </div>
        <div className="collapse-content">
          <p>We accept a variety of payment methods, including all major credit and debit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. In select regions, we also offer options like Google Pay and Afterpay for added convenience. All transactions are secured and encrypted to protect your information.</p>
        </div>
      </div>

      <div className="collapse bg-base-200 ">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        2.How long will it take for my order to arrive?
        </div>
        <div className="collapse-content">
          <p> Delivery times vary depending on your location and the shipping option you choose at checkout. Standard shipping typically takes 5–7 business days within the country, while express shipping is usually 1–3 business days. International orders may take up to 10–15 business days. You can track your order using the tracking link sent to your email after shipping.</p>
        </div>
      </div>

      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
        3. What is your return policy?

        </div>
        <div className="collapse-content">
          <p>We offer a 30-day return policy on most items. If you’re not completely satisfied with your purchase, you can return the item in its original condition for a full refund or exchange. To start a return, please contact our customer support team with your order number, and they’ll guide you through the process.</p>
        </div>
      </div>

      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
        4. How can I track my order?
        </div>
        <div className="collapse-content">
          <p>After your order is shipped, you’ll receive a tracking number via email. You can use this number to track your order on our website or the carrier’s tracking page. If you encounter any issues or haven’t received a tracking number, please reach out to our support team for assistance.</p>
        </div>
      </div>

      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">
        5. Do you offer discounts or promotions?
        </div>
        <div className="collapse-content">
          <p> Yes! We frequently offer discounts and special promotions for our customers. To stay updated, consider subscribing to our newsletter or following us on social media for exclusive deals and updates. We also have a rewards program where you can earn points with each purchase, redeemable for future discounts.</p>
        </div>
      </div>

     </div>

    </div>
  );
};

export default Faq;
